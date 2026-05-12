<div class="MainContainer">
    
        {#each FilteredSpells.values() as Spells}
            <Spell info={Spells}></Spell>
        {/each}
        {#if FilterMenuOpen}
            <div class="FilterMenuContainer">
                
            </div>
            <div class="Backdrop"></div>
        {/if}

</div>
<div class="BottomBar">
    <ul class="QueryButtons">
        <li id="FilterButton" ><button onclick={(() => {FilterMenuOpen = !FilterMenuOpen})}>filter</button></li>
        <li id="SearchInput"><input bind:value={TextField} type="text"></li>
    </ul>
    <ul class="selectedButton">
        <li><button onclick={() => {SelectedOnly = !SelectedOnly}}>Selected</button></li>
    </ul>
</div>
<script lang="ts">

import yaml from 'js-yaml'
import { onMount } from "svelte";
import Spell from "../../components/spell.svelte";

    class SpellProperties {
        "custo":number
        "Tipo":string
        "duração":string
        "alcance":string
        "alvo":string
        "dificuldade":string
        "açao":string
        "componentes":string
        "materiais":string
        "nivel":string
    }
    class SpellClass {
        constructor(desc:string,props:SpellProperties,Name : string,Url:string,Level:string)
        {
            this.Description = desc;
            this.Props = props
            this.Name = Name
            this.Url = Url

        }
        Props:SpellProperties = new SpellProperties
        Description:string = ""
        Name:string
        Url:string

        public Update() : Promise<boolean>{
            return new Promise<boolean>((resolve,reject) => {
                GetSpell(this.Url)
                .then((newValue) => {

                    this.Description = newValue.Description;
                    this.Name = newValue.Name;
                    this.Props = newValue.Props;
                    this.Save()
                    
                    resolve(true)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        }
        public Save()
        {
            const index = DownloadedSpells.findIndex((Query,index) => {return Query.Name == this.Name})
            
            if(index == -1) DownloadedSpells.push(this)
            else DownloadedSpells[index] = this
            sessionStorage.setItem("DownloadedSpells", JSON.stringify(DownloadedSpells))
        }
    }

let DownloadedSpells : SpellClass[] = $state([]);
let Filters: ((spell: SpellClass) => boolean)[] = 
[
((spell) => {
    if(TextField != "") return spell.Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(TextField.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    return true
}),
((spell) => {
    if(SelectedOnly == true){
        const selectedList = JSON.parse(localStorage.getItem("spellList") || "") as string[]
        return selectedList.includes(spell.Name)
    }
    return true
})
];

let FilteredSpells : SpellClass[] = $derived(DownloadedSpells.filter(spell => Filters.every(fn => fn(spell))))
let TextField : string = $state("");
let SelectedOnly = $state(false)
let FilterMenuOpen = $state(false)
let FilterProperties = $inspect(0)

    onMount(async() => {
    if(!sessionStorage.getItem("RegisteredSpells"))
    {
        sessionStorage.setItem("RegisteredSpells",JSON.stringify(await GetRegisteredSpells()))
    }
        LoadFilteredSpells()
    })
    async function GetRegisteredSpells() : Promise<FetchSpellResult[]>
    {
        return new Promise(async(res,rej) => {
            let rest : string;
        
            rest = (await (await fetch("https://api.github.com/repos/luax7/ArkansasTTRPG/contents/Sistema/Magias/")).text())
            const response = JSON.parse(rest) as FetchSpellResult[]
        
            res(response)
        })

        
    }
    async function GetSpell(url:string) : Promise<SpellClass> 
    {
        return new Promise<SpellClass>(async(resolve,reject) => {
            

            (await fetch(url)).text().then((SpellRaw) => {
                
            const Blocks = SpellRaw.split("---").slice(1)
            const Properties = yaml.load(Blocks.at(0)?.toLowerCase()!)
            const Desc = Blocks.at(1)
            const Name = url.split("/").slice(-1).join("").slice(0,-3).split("%20").join(" ")
            
            resolve(new SpellClass(
                (Desc?.startsWith("##") ? Desc.slice(13) : Desc) || "",
                Properties as SpellProperties,
                Name,
                url,
                url.split("/").slice(-2,-1).join("").split("%20")[1]))
        })
        .catch((err) => {
            console.log(err)
            return
        })

            
        })

    }
    async function LoadFilteredSpells()
    {
        const registeredSpells = JSON.parse(sessionStorage.getItem("RegisteredSpells")!) as FetchSpellResult[]
        const storedDownloadedSpells = JSON.parse(sessionStorage.getItem("DownloadedSpells") || "[]") as SpellClass[]

        if(storedDownloadedSpells.length > 0)
        {
            DownloadedSpells.splice(0, DownloadedSpells.length, ...storedDownloadedSpells)
        }

        if(registeredSpells.length != storedDownloadedSpells.length)
        {
            for (const value of registeredSpells)
            {
                const spell = await GetSpell(value.download_url)
                spell.Save()
            }
        }

        DownloadedSpells.sort((a,b) => {return Number(a.Props.nivel)-Number(b.Props.nivel)})
        sessionStorage.setItem("DownloadedSpells", JSON.stringify(DownloadedSpells))
    }
    function OpenFilterMenu()
    {

    }

    type FetchSpellResult ={
    "name": string,
    "path": string,
    "sha": string,
    "size": number,
    "url": string,
    "html_url": string,
    "git_url": string,
    "download_url": string,
    "type": "file",
        "_links": {
          "self": string,
          "git": string,
          "html": string
        }
    }

    
</script>
<style>
    .FilterMenuContainer{
        position: absolute;
        width: 80vw;
        height: 80vh;
        background-color: rgb(233, 233, 233);;
        border-radius: 10px;
        top: 10vh;
        left: 10vw;
        z-index: 10;
        box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.3);
    }
    .Backdrop{
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        top: 0px;
        left: 0px;
        z-index: 5;
    }
    .MainContainer{
        width: 100%;
        height: 90vh;
        display: grid;
        border: 3px black;
        border-radius: 10px;
        overflow-y: scroll;
        overflow-x: auto;
        grid-template-columns: repeat(2,1fr);
        gap:10px 0px;
        align-content: start;
        max-width: 1240px;
        justify-content: center;
    }
    .BottomBar{
        width: 100vw;
        height: 10vh;
        background-color: rgb(1, 2, 22);
        color: white;
        display: flex;
        justify-content: space-around;
    }
    .QueryButtons{  
        display: flex;
        list-style: none;
        justify-self: start;
        align-self: center;
    }
    .QueryButtons *{
        margin-left: 10px;
    }
    .selectedButton{
        align-self:center;
        justify-self: flex-end;
        list-style: none;
    }

    @media (max-width:500px)
    {
        .MainContainer{
            grid-template-columns: 1fr;
        }
    }

</style>