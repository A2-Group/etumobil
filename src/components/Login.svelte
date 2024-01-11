<script>
    import {stores} from "$lib/stores.js";
    import { fade } from 'svelte/transition';
    import Background from "./Background.svelte";
    import {onMount} from "svelte";

    import {getStudent, getStudentLectures, isStudentNoValid} from "$lib/fetcher.js";

    import {writeSecretFile} from "../utilities/fileIO.js"


    let studentNo;
    let showAlert = false;


    onMount(() => {
        document.body.style.background = $stores.gradientColor;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    });

    async function keyboardHandler(event) {
        let studentNo = event.target.value;

        if (studentNo.length === 9) {
            if (isStudentNoValid(studentNo)) {
                $stores.isAdmin = (studentNo === "221110085" || studentNo === "201101013");
            }
            else {
                studentNo = '';
                showAlert = true;
                setTimeout(() => {showAlert = false}, 3000);
            }
        }
    }

    async function clickHandler() {
        let studentNo = document.querySelector('input[name="studentNo"]');
        let adminKey = document.querySelector('input[name="adminkey"]');

        if ($stores.isAdmin) {
            if (adminKey.value !== "") {
                adminKey.value = '';
                showAlert = true;
                setTimeout(() => {showAlert = false}, 3000);
                return;
            }
        }
        $stores.isLoggedIn = true;
        $stores.ownerStudent = await getStudent(studentNo.value);
        $stores.currentState = $stores.states.STUDENT;
        $stores.currentObject = $stores.ownerStudent;
    }

</script>


<div class="content">
    {#if showAlert}
        <div class="alert" style="background-color: {$stores.accentColor}" transition:fade={{duration: 2000}}>Girdiğiniz Bilgi Yanlış!</div>
    {/if}
    <div class="text-container">
        <img src="/logo.png" alt="logo">
        <div class="title">Etü Mobil</div>
    </div>
    <Background backgroundColor="white"/>
    <div class="form-container">
        <form>
            <input name="studentNo" placeholder="Okul Numarasi" maxlength="9" on:keyup={keyboardHandler}/>
            {#if $stores.isAdmin}
                <input name="adminkey" placeholder="Şifre" transition:fade={{duration: 300}} />
            {/if}
            <button class="button" on:click={clickHandler} style="background-color: {$stores.primaryColor}">Bağlan</button>
        </form>
    </div>
</div>


<style>
    .content {
        height:100vh;
        width:100vw;
        position:relative;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        justify-content:center;
        color:white;
    }

    .text-container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:100%;
    }

    .text-container img {
        width: 15%;
        height: auto;
        margin-bottom: 4.673vw;
    }

    .title {
        position: relative;
        font-size: 11.682vw;
        font-weight: 600;
        text-align:center;
    }

    .alert {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 24vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3.271vw;
        font-weight: 600;
        color: white;
    }


    .form-container {
        height:100%;
        width: 100%;
        position: relative;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color: white;
    }

    .form-container form {
        width: 50%;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;

    }

    .form-container input {
        padding:1.869vw;
        margin:2.336vw;
        height:7.477vw;
        width:100%;
        font-size: 16px !important;
        border:none;
        box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
        border-radius:25px;
        outline:none;
        text-align:center;
    }

    .form-container button {
        padding: 2.336vw;
        margin: 2.336vw;
        border: none;
        width:105%;
        font-size:3.271vw;
        box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
        border-radius: 5px;
        outline: none;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    .form-container input:focus {
        box-shadow: 0 0 15px 0 rgb(0 0 0 / 30%);
    }

    .form-container button:hover {
        box-shadow: 0 0 15px 0 rgb(0 0 0 / 30%);
    }


</style>