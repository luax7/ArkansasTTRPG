<script>
    let {
        name,
        level,
        components,
        shortdesc,
        custo
    } = $props();
</script>

<div class="SpellContainer">
    <h1 class="MainInfo"><spam class="SpammedName">{name}</spam>, level {level}</h1>
    <p class="shortdesc">{shortdesc}</p>

    <div class="flexend">
            <p>Custo: <span class="bold">{custo}</span></p>
            <p>Components: <span class="bold">{components}</span></p>
    </div>
</div>

<style>
    .bold{
        font-style: italic;
        font-weight: bold;
    }
    .shortdesc{
            -webkit-mask-image: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 95%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            mask-image: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 95%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    }

    .flexend{
        margin-top: auto !important;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px !important;
    }
    .SpellContainer{
        width: calc(100% - 20px);
        min-width: 200px;
        height: 150px;
        border: black 2px solid;
        border-radius: 10px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        font-family: 'Courier New', Courier, monospace;
        max-width: 580px;
        padding: 0px;
    }
    .SpellContainer * {
        margin: 0px;
    }
    .SpellContainer h1 {
        margin-top: 10px;
        margin-left: 10px;
    }
    .SpellContainer p{
        margin-left: 10px;
    }
    .MainInfo{
        font-size: 1rem !important;
    }
    .SpammedName{
        font-size: 2rem;
    }
    .SpellContainer:hover{
        cursor: pointer;
    }
</style>
