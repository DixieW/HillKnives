<script lang="ts">
    import imgMichael from '$lib/assets/Images/img-20171014-wa0000.jpg';
    import imgHerman from '$lib/assets/Images/hb-messen_031.jpg';
</script>
    
<section class="page-panel">
    <div>
        <article>
            <h1 style="grid-area: Box-1">Messenslijperij Hill Knives slijpt uw messen vlijmscherp!</h1>
            <img style="grid-area: Box-2" src={imgMichael} alt="Afbeelding van Michael van den Heuvel achter zijn slijp machine." width="400px">
            <h2 style="grid-area: Box-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo rerum dolores atque obcaecati animi necessitatibus eos nulla eligendi ea sunt, magnam dolorum distinctio corporis! Porro delectus eveniet architecto. Unde!</h2> 
        </article>
    </div>
    <div>
        <img src={imgHerman} alt="Herman den Blijker laat zijn messen door Hill Knives slijpen.">
        <p style="margin: -1em 0 0 1em;">Vaste messenslijper van Herman den Blijker</p>
    </div>
</section>

<!-- <style>
    section{
        display: flex;
        margin-top: 1rem;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        box-shadow: 0px 2px 3px 3px var(--color-bg-surface);
    }
    div{
        background-color: var(--color-bg-raised);
        padding: 2rem;
    }
    article{
        display: grid;
        margin: 0 0 1rem 1rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
        "Box-1 Box-1"
        "Box-2 Box-3";   
        justify-content: center;
        align-content: center;
    }
    img{
        position: static;
        margin: 1rem;
        border-style: ridge;
        border-color: var(--color-accent);
        max-width: 100%;
        height: auto;
        display: block;
    }
    h1{
        color:  var(--color-text);
        margin-left: 0.5em;
        text-wrap: balance;
    }
    h2{
        padding: 1em;
        text-wrap: balance;
    }

    @media(max-width: 85em){
        section{
            flex-direction: column;
        }
        article{
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-template-areas: 
            "Box-1"
            "Box-2"
            "Box-3";
        }
    }

    @media(max-width: 50em){
        section{
            flex-direction: column;
        }
        article{
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-template-areas: 
            "Box-1"
            "Box-2"
            "Box-3"; 
        }
    }
</style> -->