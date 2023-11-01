<script>
    import {stores} from "$lib/stores.js";

    import Login from "../components/Login.svelte";
    import NavigationContainer from "../components/NavigationContainer.svelte";
    import Menu from "../components/Menu.svelte";
    import List from "../components/List.svelte";
    import Profile from "../components/Profile.svelte";
    import LectureSchedule from "../components/LectureSchedule.svelte";
    import BottomBar from "../components/BottomBar.svelte";
    import DynamicBackground from "../components/DynamicBackground.svelte";

</script>


{#if $stores.isLoggedIn === true}
    <Menu/>
    <NavigationContainer {LectureSchedule} {Profile} {List} {DynamicBackground}/>
    <BottomBar/>
{:else}
    <Login/>
{/if}

