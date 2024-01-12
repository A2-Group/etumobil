<script>
    import {stores} from "$lib/stores.js";
    import Lecture from "../models/lecture.js";


    function clickHandler(item) {
        $stores.restoreStack.push($stores.currentObject);

        if ($stores.currentState === $stores.states.STUDENT) {
            $stores.currentState = $stores.states.LECTURE;
            $stores.currentObject = new Lecture(
                item.title,
                item.description
            );

            console.log($stores.currentObject)
        }

        else if ($stores.currentState === $stores.states.LECTURE) {
            $stores.currentState = $stores.states.STUDENT;
            $stores.currentObject = new Student(

            );
        }

        else if ($stores.currentState === $stores.states.CLASS) {
            $stores.currentState = $stores.states.LECTURE;
            $stores.currentObject = new Lecture(

            );
        }


    }

</script>



<div class="content">
    <div class="list">
        {#await $stores.currentObject.getList()}
            waiting...
        {:then items}
            {#each items as item}
                <div class="item" on:click={clickHandler(item)}>
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
        height: 100%;
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