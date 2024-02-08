import { stores } from "$lib/stores.js";

export let currentState;
export let currentStateID;
export let states;
export let dataLoader;

stores.subscribe($stores => currentState = $stores.currentState);
stores.subscribe($stores => currentStateID = $stores.currentStateID);
stores.subscribe($stores => states = $stores.states);
stores.subscribe($stores => dataLoader = $stores.dataLoader);
