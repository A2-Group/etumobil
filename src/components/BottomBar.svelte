<script>
    import {stores} from "$lib/stores.js";
    import {hexToRGBA} from "../utilities/utils.js";
    import { fade } from 'svelte/transition';

    function clickHandler(index) {
        $stores.currentComponentIndex = index;
        $stores.swiper.slideTo(index);
    }

    let color;
    let backgroundColor;
    $: switch ($stores.currentComponentIndex) {
        case 0:
            backgroundColor = hexToRGBA($stores.secondaryColor, 0.6);
            color = $stores.backgroundColor;
            break;
        case 1:
            backgroundColor = hexToRGBA($stores.backgroundColor, 0.65);
            color = $stores.textColor
            break;
        case 2:
            backgroundColor = hexToRGBA($stores.secondaryColor, 0.6);
            color = $stores.backgroundColor;
            break;
    }
</script>


<div class="content" style="background: {backgroundColor}; color: {color};" >
    <div class="container">
        <div class="item" class:selected={$stores.currentComponentIndex === 0} on:click={() => clickHandler(0)}>
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
        </div>
        <div class="item" class:selected={$stores.currentComponentIndex === 1} on:click={() => clickHandler(1)}>
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>

        </div>
        <div class="item" class:selected={$stores.currentComponentIndex === 2} on:click={() => clickHandler(2)}>
            <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>

        </div>
    </div>
</div>


<style>
    .content {
        width: 100%;
        height: 11.682vw;
        bottom: 0;
        padding-bottom: 4.673vw;
        display: flex;
        position: fixed;
        z-index: 10;
        border-radius: 20px 20px 0 0;
        transition: 0.5s ease-in-out;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }

    .container {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }


    .container .item {
        padding: 2.336vw;
    }

    .item svg {
        width: 24px;
        height: 24px;
    }

    .selected {
        color: #FC4F83;
        transition: 0.5s ease-in-out;
    }
</style>