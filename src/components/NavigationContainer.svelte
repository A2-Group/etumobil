<script>
    import Swiper from 'swiper';


    import {stores} from "$lib/stores";
    import {onMount} from "svelte";

    import DynamicBackground from "./DynamicBackground.svelte";

    export let LectureSchedule;
    export let Profile;
    export let List;
    // export let DynamicBackground;




    onMount(() => {
        document.body.style.background = $stores.backgroundColor;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

        $stores.swiper = new Swiper(".mySwiper", {
            direction: 'horizontal',
            cssMode: true,
            on: {
                slideChange: function () {
                   $stores.currentComponentIndex = this.activeIndex;
                },
            },
        });
    });

</script>


<div class="swiper mySwiper">

    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <svelte:component this={LectureSchedule}/>
        </div>
        <div class="swiper-slide">
            <svelte:component this={Profile}/>
        </div>
        <div class="swiper-slide">
            <svelte:component this={List}/>
        </div>
<!--        <div class="swiper-slide">-->
<!--            <svelte:component this={DynamicBackground}/>-->
<!--        </div>-->
    </div>
    <DynamicBackground />
</div>

<style>
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-wrapper {
        position: absolute;
    }

    .swiper-slide {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
    }



</style>
