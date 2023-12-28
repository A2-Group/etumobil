<script>
    import {stores} from "$lib/stores.js";
    import {hexToRGBA} from "$lib/utils.js";
    import {onMount} from "svelte";
    import {getLecture, getLectureSchedule, getLectureStudents} from "$lib/fetcher.js";

    const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
    const hours = [
        "08", "09", "10", "11", "12", "13", "14",
        "15", "16", "17", "18", "19", "20", "21"
    ];


    let currentDay = 2;
    let currentHour = 7;







    function randoRgbaBackgroundColor(daySeed, hourSeed) {
        let o = Math.round, r = Math.random, s = 255;
        r = () => (Math.sin(daySeed * 10 + hourSeed++) + 1) / 2; // Create a seeded random function
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.3 + ')';
    }

    function getCurrentColor(i, j) {
        if (i === currentDay && j === currentHour) {
            return $stores.accentColor;
        } else {
            return $stores.textColor;
        }
    }



    async function createSchedule() {
        stores.subscribe(async (value) =>{
            let studentId = value.student.student_ID;
            let lectures = value.student.lectures;

            let schedule = [];

            for (let i = 0; i < lectures.length; i++) {
                let lectureSchedule = await getLectureSchedule(lectures[i]);
                //       {
                //      day: "Mon",
                //      start: "09",
                //      },
                let students = await getLectureStudents(lectures[i]);
                if (students.includes(studentId)) {
                    for (let j=0; j<lectureSchedule.length; j++) {
                        let daySchedule = schedule.find(s => s.day === lectureSchedule[j].day);

                        if (!daySchedule) {
                            daySchedule = {
                                day: lectureSchedule[j].day,
                                lectures: []
                            }
                            schedule.push(daySchedule);
                        }

                        daySchedule.lectures.push({
                            lecture_ID: lectures[i],
                            start: lectureSchedule[j].start,
                        })
                    }
                }
            }
            return schedule;
        })
    }

</script>


<div class="content" style="background: transparent">
<!--    <DynamicBackground />-->
    <div class="table">
        <div class="rows" style="height: 80%">
            <div class="hours" style="visibility: hidden">08 <br> 30</div>
            {#each days as day, i}
                <div class="days" style="color: {i===currentDay ? $stores.accentColor: $stores.textColor}">{day}</div>
            {/each}
        </div>
        {#each hours as hour, j}
<!--            <div class="rows">-->
<!--                <div class="hours" style="color: {j===currentHour ? $stores.accentColor: $stores.textColor}">{hour}<br>30</div>-->
<!--                {#each days as day, i}-->
<!--                    <div class="course" style="background-color: {randoRgbaBackgroundColor(i, Math.floor(j/2))}">-->
<!--                        <div class="text-content">-->
<!--                            <div class="course-name">name {i}{j}</div>-->
<!--                            <div class="course-classroom">room {i}{j}</div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                {/each}-->
<!--            </div>-->

            <div class="rows">
                <div class="hours" style="color: {j===currentHour ? $stores.accentColor: $stores.textColor}">{hour}<br>30</div>
                {#each days as day, i}
                    {#await createSchedule()}
                        <div class="course" style="background-color: {randoRgbaBackgroundColor(i, Math.floor(j/2))}">
                            <div class="text-content">
                                <div class="course-name">name {i}{j}</div>
                                <div class="course-classroom">room {i}{j}</div>
                            </div>
                        </div>
                    {:then schedule}
                        {#each schedule as daySchedule}
                            {#if daySchedule.day === day}
                                {#each daySchedule.lectures as lecture}
                                    {#if lecture.start === hour}
                                        <div class="course" style="background-color: {randoRgbaBackgroundColor(i, Math.floor(j/2))}">
                                            <div class="text-content">
                                                <div class="course-name">{lecture.lecture_ID}</div>
                                                <div class="course-classroom">room</div>
                                            </div>
                                        </div>
                                    {/if}
                                {/each}
                            {/if}
                        {/each}
                    {/await}
                {/each}
            </div>
        {/each}
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


