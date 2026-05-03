<script>
    let {
        name,
        level,
        components,
        shortdesc,
    } = $props();
</script>

<div class="SpellContainer">
    <h1><spam>{name}</spam>, level {level}</h1>
    <p>{shortdesc}</p>
    <p>Components: {components}</p>
</div>

<style>
    
</style>
