/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    console.log("eNTRY ID", entry.id)
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div>${entry.date}</div>
            <div>${entry.concepts}</div>
            <p>${entry.entry}</P>
            <div>${entry.mood}</div>
            <button id="delete--${entry.id}">Delete</button>
        </section>
    `
}