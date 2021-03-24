import {EntryListComponent} from "../JournalEntryList.js";
let arrayResponse = [];

export const getUsers = () => {

    return fetch("http://localhost:8088/users")
        .then(response => response.json())
        .then(parsedResponse => {
            // do something with response here
            return parsedResponse;
        })
}

export const getJournalEntry = () => {
    return fetch("http://localhost:8088/JournalEntry")
        .then(response => response.json())
        .then(parsedResponse => {
            // do something with response here
            arrayResponse = parsedResponse;
        })
}

const loggedInUser = {
    id: 1,
    name: "Bryan",
    email: "bryan@bn.com"
}

export const getLoggedInUser = () => {
    return loggedInUser;
}

export const useJournalEntries = () => {
    getJournalEntry().then(() => {
        const sortedByDate = arrayResponse.sort(
            (currentEntry, nextEntry) =>
                Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
        )
        return sortedByDate
    })
    return arrayResponse;
}
export const recordJournalEntry = entryObj =>{
    return fetch("http://localhost:8088/journalEntry", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(entryObj) 
    })
    .then(response => response.json())
}

export const deleteJournalEntry = entryId => {
    return fetch(`http://localhost:8088/journalEntry/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then(getJournalEntry)
}