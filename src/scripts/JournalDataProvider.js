/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
import {getJournalEntry} from "./data/EntryManager.js";
import { JournalEntryComponent } from "./JournalEntry.js";
const journal = getJournalEntry();
// console.log(getJournalEntry())
// for(const entry of getJournalEntry().then(response => {return response.json()})){
//     journal.push(entry);
// }
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    console.log(journal)

    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}