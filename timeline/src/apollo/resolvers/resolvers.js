/*eslint-disable no-unused-vars*/
import {
    MacroLastDaysTimeline,
    Travail
} from "./../queries/queries"
export const resolvers = {
    Query: {
        Travail: ({ cache }) => {
            const data = cache.readQuery({ query: Travail })
             return data
        },
        MacroTimeLine: ({ cache }) => {
            const data = cache.readQuery({ query: MacroLastDaysTimeline })
             return data
        }
    }
}