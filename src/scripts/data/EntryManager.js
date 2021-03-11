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
    return fetch("http://localhost:8088/journalEntry")
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

useJournalEntries();