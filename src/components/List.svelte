<script>
    import {stores} from "$lib/stores.js";
    import {hexToRGBA} from "$lib/utils.js";

    export const data = [
        {title: "title1", description: "description1"},
        {title: "title2", description: "description2"},
        {title: "title3", description: "description3"},
        {title: "title4", description: "Malzeme Bilimi ve Nanoteknoloji Mühendisliği"},
        {title: "title5", description: "description5"},
        {title: "title6", description: "description6"},
        {title: "title7", description: "description7"},
        {title: "title8", description: "description8"},
        {title: "title9", description: "description9"}
    ]

</script>



<div class="content">
    <div class="list">
        {#each data as item}
            <div class="item">
                <div class="title" style="color: {$stores.textColor}">{item.title}</div>
                <div class="description" style="color: {$stores.textColor}">{item.description}</div>
            </div>
        {/each}
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