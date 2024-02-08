<script>

    import Login from "../components/Login.svelte";
    import NavigationContainer from "../components/NavigationContainer.svelte";
    import Menu from "../components/Menu.svelte";
    import List from "../components/List.svelte";
    import BranchProfile from "../components/BranchProfile.svelte";
    import StudentProfile from "../components/StudentProfile.svelte";
    import Schedule from "../components/Schedule.svelte";
    import BottomBar from "../components/BottomBar.svelte";

    import Database from "$lib/database.js";
    import DataLoader from "$lib/dataLoader.js";

    import {onMount} from "svelte";
    import {stores} from "$lib/stores.js";
    import {isOwnerStudentIDFileExists, readOwnerStudentIDFromFile} from "../utilities/utils.js";


    let isLoginCheckComplete = false;


    onMount(async () => {
        const database = await Database.getInstance("spring2023");
        $stores.dataLoader = new DataLoader(database);

        if (await isOwnerStudentIDFileExists()) {
            $stores.isLoggedIn = true;
            $stores.ownerStudentID = await readOwnerStudentIDFromFile();

            $stores.currentState = $stores.states.STUDENT;
            $stores.currentStateID = $stores.ownerStudentID;

            $stores.restoreStack.push($stores.currentState,$stores.currentStateID);

            isLoginCheckComplete = true;
        }
    })

</script>

{#if isLoginCheckComplete}
    {#if $stores.isLoggedIn}
        <Menu/>
        <NavigationContainer {StudentProfile} {BranchProfile} {List}/>
        <BottomBar/>
    {:else}
        <Login/>
    {/if}
{/if}


