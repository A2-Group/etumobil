<script>
    import {stores} from "$lib/stores.js";

    let menu = {
        submenu1: false,
        submenu2: false,
        submenu3: false,
    }
    function open(subMenu) {

        menu[subMenu] = !menu[subMenu]
        for (let key in menu) {
            if (key !== subMenu) {
                menu[key] = false
            }
        }
    }
</script>



<div class="content" class:open={$stores.isOverlayOpen} style="background-color: {$stores.secondaryColor};">
    <div class="wrapper" style="color: {$stores.backgroundColor}" >
        <div class="link" on:click={() => {open('submenu1')}}>
            <span>Okul</span>
            {#if menu.submenu1}
                <svg fill={$stores.backgroundColor} viewBox="0 -960 960 960"><path d="M200-440v-80h560v80H200Z"/></svg>
            {:else}
                <svg fill={$stores.backgroundColor} viewBox="0 -960 960 960" ><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            {/if}
        </div>
        <div class="sub-menu" class:open={menu.submenu1}>
            <a href="/a" style="color: {$stores.backgroundColor}">Öğrenciler</a>
            <a href="/a" style="color: {$stores.backgroundColor}">Hocalar</a>
            <a href="/a" style="color: {$stores.backgroundColor}">Dersler</a>
            <a href="/a" style="color: {$stores.backgroundColor}">Derslikler</a>
        </div>
        <div  class="link" on:click={() => {open('submenu2')}}>
            <span>Akademik</span>
            {#if menu.submenu2}
                <svg fill={$stores.backgroundColor} viewBox="0 -960 960 960" ><path d="M200-440v-80h560v80H200Z"/></svg>
            {:else}
                <svg fill={$stores.backgroundColor} viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            {/if}
        </div>
        <div class="sub-menu" class:open={menu.submenu2}>
            <a href="/a" style="color: {$stores.backgroundColor}">Sınavlar</a>
            <a href="/a" style="color: {$stores.backgroundColor}">Müfredat</a>
            <a href="/a" style="color: {$stores.backgroundColor}">Ön Koşul Ağacı</a>
            <a href="/a"  style="color: {$stores.backgroundColor}">Akademik Takvim</a>
        </div>
        <div class="link"  on:click={() => {open('submenu3')}}>
            <span>Etü Mutfak</span>
            {#if menu.submenu3}
                <svg fill={$stores.backgroundColor} viewBox="0 -960 960 960"><path d="M200-440v-80h560v80H200Z"/></svg>
            {:else}
                <svg fill={$stores.backgroundColor} viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            {/if}
        </div>
        <div class="sub-menu" class:open={menu.submenu3}>
            <a href="/a" style="color: {$stores.backgroundColor}">Para Yükle</a>
            <a href="/a" style="color: {$stores.backgroundColor}">Bakiye</a>
            <a href="/a" style="color: {$stores.backgroundColor}">Günün Menüsü</a>
        </div>
        <div class="link">WebMail</div>
        <div class="link">Ayarlar</div>


        <div class="credit">Made with <span style="color: {$stores.accentColor}">♥</span> by Archyn and Alkın</div>
    </div>
</div>




<style>
    .content {
        height: 100%;
        width: 100%;
        position: fixed;
        text-align: center;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
        display: flex;
        z-index: 100;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .open {
        opacity: 1;
        visibility: visible;
        transition: 0.5s
    }

    .wrapper {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .link {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 25px;
        margin-top: 12px;
        margin-bottom: 12px;

    }

    .link svg {
        height: 20px;
        width: 20px;
    }

    .sub-menu {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        transition: 0.5s ease-in-out;
    }

    .sub-menu a {
        margin: 5px;
        text-decoration: none;
        width: 100%;
        text-align: left;
    }

    .sub-menu.open {
        max-height: 500px;
        opacity: 1;
        margin-left: 20px;
    }

    .credit {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 10px;
    }

</style>
