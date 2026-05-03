<script>
    export let name;
    export let lvl;
    export let ShortDesc;
    export let components;
</script>

<div class="SpellContainer">
    <h1><spam>{name}</spam>, level {lvl}</h1>
    <p>{ShortDesc}</p>
    <p>Components: {components}</p>
</div>
