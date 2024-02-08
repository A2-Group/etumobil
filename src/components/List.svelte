<script>
    import {stores} from "$lib/stores.js";
    import ListManager from "../managers/ListManager.js";


    function clickHandler(nextState, nextStateID) {
        $stores.restoreStack.push($stores.currentState, $stores.currentStateID);
        $stores.currentState = nextState;
        $stores.currentStateID = nextStateID;

        $stores.currentComponentIndex = 1;
        $stores.swiper.slideTo(1, 0);
    }

</script>



<div class="content">
    <div class="list">
        {#await ListManager.createList($stores.currentState)}
            <div class="loading"></div>
        {:then data}
            {#each data as item}
                <div class="item" on:click={() => clickHandler(item.nextState, item.nextStateID)}>
                    <div class="title" style="color: {$stores.textColor}">{item.title}</div>
                    <div class="description" style="color: {$stores.textColor}">{item.description}</div>
                </div>
            {/each}
        {/await}
    </div>
</div>


<style>
    .content {
        width: 100%;
        height: 100%;
        display: flex;
        overflow-y: auto;
    }

    .list {
        width: 100%;
        min-height: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .item {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px 0;
        overflow: hidden;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .item:nth-child(1) {
        padding-top: 110px;
    }

    .item:last-child {
        border-bottom: none;
        padding-bottom: 100px;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
        padding: 0 20px 5px;
    }

    .description {
        font-size: 15px;
        font-weight: normal;
        padding: 0 20px;
    }




</style>