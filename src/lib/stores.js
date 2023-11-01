import { writable } from 'svelte/store';
export const stores = writable({
    textColor: "#37516d",
    backgroundColor: "#F5F5F5",
    primaryColor: "#00acc1",
    secondaryColor: "#A7B2E2",
    thirdColor: "#543ab7",
    accentColor: "#FC4F83",
    gradientColor: "linear-gradient(60deg, #543ab7 0%, #00acc1 100%)",
    gradientColor2: "linear-gradient(40deg, #ddc0ff , #c4ddff)",

    isLoggedIn: false,
    isAdmin: false,
    currentComponentIndex: 0,
    isOverlayOpen: false,

    swiper: null,
});