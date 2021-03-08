import {EntryListComponent} from "./JournalEntryList.js";

// Show entry element is used to list to button clicks for show entries
// when clicked the DOM is updated to show entries
const showEntryElement = document.querySelector("#showEntries")
showEntryElement.addEventListener("click", event => {
    if(event.target.id === "showEntries"){
        EntryListComponent();
    }
})