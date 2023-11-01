<script>

    import {stores} from "$lib/stores.js";
    import { fade } from 'svelte/transition';
    import Hamburger from "./Hamburger.svelte";
    import OverLayMenu from "./OverLayMenu.svelte";
    import {hexToRGBA} from "$lib/utils.js";

    let title
    $: switch ($stores.currentComponentIndex) {
        case 0: title = "Ders Programım"
            break;
        case 1: title = "Profilim"
            break;
        case 2: title = "Derslerim"
            break;
    }

</script>


<div class="content">
    <Hamburger/>
    <div class="nav" style="background: {hexToRGBA($stores.backgroundColor, 0.6)}">
        <div class="title" style="color: {$stores.textColor}">{title}</div>
    </div>
    <OverLayMenu/>
</div>





<style>

    .content {
        width: 100%;
        height: fit-content;
        display: flex;
        position: fixed;
        top: 0;
        z-index: 100;
    }

    .nav {
        width: 100%;
        height: 24vw;
        display: flex;
        position: fixed;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }

    .title {
        position: absolute;
        right: 10px;
        bottom: 10px;
        display: flex;
        align-self: flex-end;
        font-size: 25px;
        font-weight: 600;
    }

</style>