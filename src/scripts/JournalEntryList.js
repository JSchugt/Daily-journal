import { useJournalEntries } from "./data/EntryManager.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    let temp  = "You broke it"
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    console.log("Entries", entries)

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       temp += JournalEntryComponent(entry)
       console.log("entries",entry)
    }

    sendEntryToDom(temp)
    console.log(temp)

}

const sendEntryToDom = entry => {
    entryLog.innerHTML = entry
}