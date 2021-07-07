"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    let events;
    if (options.eventType === 'courses') {
        events = courses_1.default;
    }
    else
        events = studyGroups_1.default;
    return events.filter(event => {
        const { id, keywords } = event;
        if (typeof options.query === 'number') {
            return id === options.query;
        }
        else {
            return keywords.includes(options.query);
        }
    });
}
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents.push(event);
    console.log(`I'm enrolled in:`, enrolledEvents);
}
const result = searchEvents({ query: 'lab', eventType: 'courses' });
console.log(result);
if (result.length) {
    enroll(result[0]);
}
