import { EntryListComponent } from "./JournalEntryList.js";
const recordEntry = document.querySelector("#saveDailyEntry");
const recordMood = document.querySelector("#mood");
const showEntryElement = document.querySelector("#showEntries");




// Show entry element is used to list to button clicks for show entries
// when clicked the DOM is updated to show entries
showEntryElement.addEventListener("click", event => {
    if (event.target.id === "showEntries") {
        EntryListComponent();
    }
})

export const createEntry = postObj => {
    console.log("create post", JSON.stringify(postObj))
    return fetch("http://localhost:8088/JournalEntry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
        .then(response => response.json()).then(data => {console.log("Data",data)})
}

recordEntry.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "saveDailyEntry") {
        const journalObj = {
            userId: 1,
            date: "07/24/2025",
            entry: "What help am i doing",
            mood: "Tired",
            concepts: "something"
        }
        console.log(journalObj);
        createEntry(journalObj);
    }


})


