<script>
    import {stores} from "$lib/stores.js";
    import {hexToRGBA} from "../utilities/utils.js";


</script>




<div class="content">
    <div class="wrapper">
        <div class="row">
            <div class="card-major" style="background-color: {hexToRGBA($stores.backgroundColor, 0.7)}">
                <div class="text-content" style="color: {$stores.textColor}">
                    <div class="text">İsim: <span>{$stores.currentObject.student_Fname} {$stores.currentObject.student_Lname}</span></div>
                    <div class="text">Bölüm: <span>{$stores.currentObject.student_Department}</span></div>
                    <div class="text">Öğrenci No: <span>{$stores.currentObject.student_ID}</span></div>
                    <div class="text">Sınıf: <span>{$stores.currentObject.student_Grade}. Sınıf</span></div>
                    <div class="text">Email: <span>{$stores.currentObject.student_Mail}</span></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card-minor" style="background-color: {hexToRGBA($stores.accentColor, 0.5)}; color: {$stores.backgroundColor}">
                <div class="text-content">
                    <div class="gpa-value">3.20</div>
                    <div class="gpa-description">Ortalama</div>
                </div>
            </div>
            <div class="card-minor" style="background-color: {hexToRGBA($stores.primaryColor, 0.5)}; color: {$stores.backgroundColor}">
                <div class="text-content">
                    <div class="credit-value">62/69</div>
                    <div class="credit-description">Tamamlanan<br>kredi</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card-major" style="background-color: {hexToRGBA($stores.backgroundColor, 0.25)}; color: {$stores.textColor}">
                <div class="text-content">
                    <div class="progress">
                        <div class="barOverflow">
                            <div class="bar" style="border: 18px solid {hexToRGBA($stores.secondaryColor, 0.5)};
                                                    border-left-color: {hexToRGBA($stores.textColor, 0.5)};
                                                    border-bottom-color {hexToRGBA($stores.textColor, 0.5)};
                                                    transform: rotate({35}deg);"></div>
                        </div>
                    </div>
                    <div class="chart-value">35%</div>
                    <div class="chart-description">Kredi Tamamlama</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card-major" style="background-color: {hexToRGBA($stores.secondaryColor, 0.5)}; color: {$stores.backgroundColor}">
                <div class="graph">
                    Grafik
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .content {
        width: 100vw;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
    }

    .wrapper {
        padding-top: 90%;
        padding-bottom: 60px;
        width: 92%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: space-evenly;
    }

    .row {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .card-major {
        width: 100%;
        aspect-ratio: 1.55;
        margin: auto;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(20px);
    }


    .card-minor {
        width: 48%;
        aspect-ratio: 1;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }

    .text-content {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
    }

    .card-minor .text-content {
        width: 80%;
    }

    .text-content .gpa-value {
        position: absolute;
        top: 25%;
        width: 120%;
        font-size: 45px;
        font-weight: 700;
        letter-spacing: 2px;
    }
    .text-content .gpa-description {
        position: absolute;
        bottom: 25%;
        width: 120%;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1px;
    }

    .text-content .credit-value {
        position: absolute;
        top: 29%;
        width: 120%;
        font-size: 33px;
        font-weight: 700;
        letter-spacing: 2px;
    }

    .text-content .credit-description {
        position: absolute;
        bottom: 14%;
        width: 120%;
        font-size: 17px;
        font-weight: 600;
        letter-spacing: 1px;
    }

    .text-content .text {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        text-align: right;
    }

    .text-content .progress{
        text-align: center;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .text-content .barOverflow{
        position: relative;
        overflow: hidden;
        width: 250px;
        height: 125px;
    }
    .text-content .bar{
        position: absolute;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        box-sizing: border-box;
    }

    .text-content .chart-value {
        position: absolute;
        bottom: 20%;
        left: 50%;
        font-size: 25px;
        font-weight: 700;
        letter-spacing: 2px;
        transform: translateX(-50%);
    }

    .text-content .chart-description {
        position: absolute;
        width: 100%;
        bottom: 5%;
        left: 50%;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        letter-spacing: 2px;
        transform: translateX(-50%);
    }

    .text-content span {
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 14px;
    }

</style>