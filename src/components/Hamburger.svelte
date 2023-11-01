<script>
    import {stores} from "$lib/stores.js";

    function clickHandler() {
        $stores.isOverlayOpen = !$stores.isOverlayOpen;
    }




</script>


<div class="content" on:click={clickHandler}>
    <svg class:active={$stores.isOverlayOpen} class="ham hamRotate ham4" viewBox="0 0 100 100" >
        <path class="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
        <path class="line middle" d="m 70,50 h -40" />
        <path class="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
    </svg>
    <div class="circle" class:open={$stores.isOverlayOpen} style="background: {$stores.secondaryColor}"></div>
</div>



<style>
    .content {
        width: 40px;
        height: 40px;
        position: absolute;
        display: flex;
        left: 10px;
        top: 45px;
        align-self: flex-end;
        justify-content: center;
        align-items: center;
    }

    .circle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        top: 0;
        z-index: 100;
        position: absolute;
        transform: scale(1);
        transition: transform 0.6s ease-in-out;
    }

    .circle.open {
        transform: scale(100);
    }

    .ham {
        width: 100%;
        z-index: 200;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .hamRotate.active {
        transform: rotate(45deg);
    }
    .hamRotate180.active {
        transform: rotate(180deg);
    }
    .line {
        fill:none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke:white;
        stroke-width:5.5;
        stroke-linecap:round;
    }
    .ham4 .top {
        stroke-dasharray: 40 121;
    }
    .ham4 .bottom {
        stroke-dasharray: 40 121;
    }
    .ham4.active .top {
        stroke-dashoffset: -68px;
    }
    .ham4.active .bottom {
        stroke-dashoffset: -68px;
    }
</style>
