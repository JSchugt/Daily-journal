import { EntryListComponent } from "./JournalEntryList.js";
import {deleteJournalEntry, recordJournalEntry} from "./data/EntryManager.js";

const journalObj = {
    date: "",
    concepts: "",
    entry: "",
    mood: ""
}
// Show entry element is used to list to button clicks for show entries
// when clicked the DOM is updated to show entries
const showEntryElement = document.getElementById("showEntries");
showEntryElement.addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id === "showEntries") {
        EntryListComponent();
    }
})

const recordEntry = document.querySelector("#saveDailyEntry");

recordEntry.addEventListener("click", event => {
    if (event.target.id === "saveDailyEntry") {
        journalObj.date = document.getElementById("journalDate").value;
        journalObj.concepts = document.getElementById("concepts").value;
        journalObj.entry = document.getElementById("entry").value;
        recordJournalEntry(journalObj);
    }
})

let entryElement = document.getElementById("entryLog")
// entryElement.addEventListener("click", event => {
//     event.preventDefault();
//     if(event.target.id.startsWith("delete"))
// })
entryElement.addEventListener("click", event => {
    event.preventDefault()
    if(event.target.id.startsWith("delete")){
        const entryId = event.target.id.split("--")[1];
        console.log(entryId)
        deleteJournalEntry(entryId)
    }
})
