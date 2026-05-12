<script lang="ts">
    import { goto } from "$app/navigation";
    import yaml from "js-yaml";
    import { onMount } from "svelte";
    import { marked } from "marked";
    let { data } = $props();

    class SpellProperties {
        "custo": number;
        "Tipo": string;
        "duração": string;
        "alcance": string;
        "alvo": string;
        "dificuldade": string;
        "açao": string;
        "componentes": string;
        "materiais": string;
        "nivel": string;
        "caracteristicas": string;
    }

    class SpellClass {
        constructor(
            desc: string,
            props: SpellProperties,
            Name: string,
            Url: string,
            Level: string,
        ) {
            this.Description = desc;
            this.Props = props;
            this.Name = Name;
            this.Url = Url;
        }
        Props: SpellProperties = new SpellProperties();
        Description: string = "";
        Name: string;
        Url: string;
    }
    async function GetSpell(url: string): Promise<SpellClass> {
        return new Promise<SpellClass>(async (resolve, reject) => {
            (await fetch(url))
                .text()
                .then((SpellRaw) => {
                    const Blocks = SpellRaw.split("---").slice(1);
                    const Properties = yaml.load(Blocks.at(0)?.toLowerCase()!);
                    const Desc = Blocks.at(1);
                    const Name = url
                        .split("/")
                        .slice(-1)
                        .join("")
                        .slice(0, -3)
                        .split("%20")
                        .join(" ");

                    resolve(
                        new SpellClass(
                            (Desc?.startsWith("##") ? Desc.slice(13) : Desc) ||
                                "",
                            Properties as SpellProperties,
                            Name,
                            url,
                            url
                                .split("/")
                                .slice(-2, -1)
                                .join("")
                                .split("%20")[1],
                        ),
                    );
                })
                .catch((err) => {
                    console.log(err);
                    return;
                });
        });
    }
    let info: SpellClass | undefined = $state();

    let IsInList = $derived(GetSpellList().includes(info?.Name || ""));
    let MarkedDescription = $derived(marked(info?.Description || ""));

    onMount(async () => {
        info = await GetSpell(
            "https://raw.githubusercontent.com/luax7/ArkansasTTRPG/master/Sistema/Magias/" +
                data.Spell +
                ".md",
        );
    });
    function close() {
        goto("/spells");
    }
    function GetSpellList(): string[] {
        const stored = localStorage.getItem("spellList");

        if (!stored) return [];

        try {
            return JSON.parse(stored);
        } catch {
            return [];
        }
    }
    function SaveSpellList(list: string[]) {
        localStorage.setItem("spellList", JSON.stringify(list));
    }
    function ToggleSpellInList() {
        if (!info) return;

        const list = GetSpellList();

        if (list.includes(info.Name)) {
            const newList = list.filter((x) => x !== info?.Name);

            SaveSpellList(newList);

            IsInList = false;
        } else {
            list.push(info.Name);

            SaveSpellList(list);

            IsInList = true;
        }
    }
</script>

{#if info != undefined}
    <div class="Selector">
        <button onclick={close}><p>close</p></button>
        <button onclick={ToggleSpellInList}
            ><p>{IsInList ? "remove from list" : "add to list"}</p></button
        >
    </div>
    <div class="MainContainer">
        <div class="Header">
            <h1 class="name">{info?.Name || "Loading"}</h1>
            <div class="BasicInfo">
                <p class="headertext basicinfo">
                    <span
                        >Feitiço de {info?.Props.Tipo} de nivel {info?.Props
                            .nivel}</span
                    >
                </p>
                <p class="headertext"><span>Custo</span> {info?.Props.custo}</p>
                <p class="headertext">
                    <span>Duraçao</span>
                    {info?.Props.duração}
                </p>
                <p class="headertext">
                    <span>Alcance</span>
                    {info?.Props.alcance}
                </p>
                <p class="headertext"><span>Alvo</span> {info?.Props.alvo}</p>
                <p class="headertext">
                    <span>Dificuldade</span>
                    {info?.Props.dificuldade}
                </p>
                <p class="headertext">
                    <span>Cracteristicas</span>
                    {info?.Props.caracteristicas}
                </p>
                <p class="headertext"><span>Açao</span> {info?.Props.açao}</p>
                <p class="headertext">
                    <span>Componentes</span>
                    {info?.Props.componentes}
                </p>
                <p class="headertext">
                    <span>Materiais</span>
                    {info?.Props.materiais}
                </p>
            </div>
        </div>
        <div class="separator"></div>
        <p class="Description">{@html MarkedDescription}</p>
    </div>
{/if}
{#if info == undefined}
    <h1 class="loading">Loading</h1>
{/if}

<style>
    * {
        font-family: "Courier New", Courier, monospace;
    }
    .BasicInfo {
        margin-left: 1rem;
    }
    .name {
        font-size: 3rem;
        margin: 0px;
    }
    span {
        font-size: 1.1rem !important;
        font-weight: bold;
    }
    .headertext {
        font-size: 1rem;
        margin-top: 0.2rem;
        width: max-content;
        background-color: rgb(233, 233, 233);
    }
    .Selector {
        width: 100vw;
        height: 10vh;
        background-color: rgb(233, 233, 233);
        position: absolute;
        top: 0px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .Selector::after {
        content: "";
        width: 100vw;
        height: 2vh;
        background: linear-gradient(
            to bottom,
            rgba(233, 233, 233, 1) 0%,
            rgba(233, 233, 233, 0) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        position: absolute;
        top: 10vh;
        left: 0px;
    }
    .Selector button {
        font-size: 3rem;
        background-color: transparent;
        width: fit-content;
        height: fit-content;
        border: 0px;
    }
    .Selector button:hover {
        cursor: pointer;
        color: rgb(116, 116, 116);
    }
    button p {
        margin: 0px;
    }
    .Header {
        width: 90vw;
        height: min-content;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
    }
    .Header::after {
        content: "";
        width: 90vw;
        height: 1px;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(25, 25, 25, 1) 18%,
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 51%,
            rgba(0, 0, 0, 1) 80%,
            rgba(255, 255, 255, 0) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
    .MainContainer {
        width: 100vw;
        height: 100vh;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        margin-top: 12vh;
    }
    .Description {
        white-space: pre-line;
        width: 95vw;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 0px;
    }
</style>
