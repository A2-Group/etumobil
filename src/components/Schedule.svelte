<script>
    import {stores} from "$lib/stores.js";
    import {hexToRGBA} from "../utilities/utils.js";
    import {onMount} from "svelte";

    let days = ['Pzt', 'Sal', 'Car', 'Per', 'Cum', 'Cmt'];
    let hours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", '19', '20', '21'];

    let currentDay = 2;
    let currentHour = 7;

    let colorMap = {};

    function randoRgbaBackgroundColor(lecture_ID, daySeed, hourSeed) {
        if (!colorMap[lecture_ID]) {
            let o = Math.round, s = 255;
            let r = () => (Math.sin(daySeed * 10 + hourSeed++) + 1) /2; // Create a seeded random function
            colorMap[lecture_ID] = 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.3 + ')';
        }
        return colorMap[lecture_ID];
    }


</script>


<div class="content" style="background: transparent">
    <div class="table">
        {#await $stores.currentObject.createSchedule()}
            waiting...
        {:then schedule}
            <div class="rows" style="height: 80%">
                <div class="hours" style="visibility: hidden">08 <br> 30</div>
                {#each days as day, i}
                    <div class="days" style="color: {i===currentDay ? $stores.accentColor: $stores.textColor}">{day}</div>
                {/each}
            </div>
            {#each hours as hour, j}
                <div class="rows">
                    <div class="hours" style="color: {j===currentHour ? $stores.accentColor: $stores.textColor}">{hour}<br>30</div>
                    {#each schedule as daySchedule, i}
                        <div class="course" style="background-color: {randoRgbaBackgroundColor(daySchedule[j], i, Math.floor(j/2))}">
                            <div class="text-content">
                                {#if $stores.currentState === $stores.states.STUDENT}
                                    <div class="course-name">{daySchedule[j].lecture_Code || ''}</div>
                                    <div class="course-classroom">{daySchedule[j] ? 'room '+i+j : ''}</div>
                                {/if}
                                {#if $stores.currentState === $stores.state.LECTURE}
                                    <div class="course-name">{daySchedule[j] || ''}</div>
                                    <div class="course-classroom">{daySchedule[j] ? 'room '+i+j : ''}</div>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            {/each}
        {/await}
    </div>
</div>





<style>
    .content {
        width: 100vw;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .table {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding-top: 280px;
        padding-bottom: 65px;
    }

    .rows {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid #e0e0e0;
    }

    .days {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        background-color: #f0f0f0;
        border-right: 1px solid #e0e0e0;
    }

    .hours {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        background-color: #f0f0f0;
    }

    .course {
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 13px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #e0e0e0;
    }

    .text-content {
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-size: 11px;
    }



</style>


