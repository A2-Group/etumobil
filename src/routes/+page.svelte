<script>
    import {stores} from "$lib/stores.js";

    import Login from "../components/Login.svelte";
    import NavigationContainer from "../components/NavigationContainer.svelte";
    import Menu from "../components/Menu.svelte";
    import List from "../components/List.svelte";
    import StudentProfile from "../components/StudentProfile.svelte";
    import LectureInfo from "../components/LectureInfo.svelte";
    import Schedule from "../components/Schedule.svelte";
    import BottomBar from "../components/BottomBar.svelte";
    import DynamicBackground from "../components/DynamicBackground.svelte";


</script>


{#if $stores.isLoggedIn === true}
    <Menu/>
    <NavigationContainer {Schedule} {StudentProfile} {LectureInfo} {List} {DynamicBackground}/>
    <BottomBar/>
{:else}
    <Login/>
{/if}

