"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raccoon_meadows_log_1 = require("./raccoon-meadows-log");
const wolf_point_log_1 = require("./wolf-point-log");
function combineVolunteers(volunteers) {
    return volunteers.map(volunteer => {
        let id;
        if (typeof volunteer.id === 'string') {
            id = parseInt(volunteer.id);
        }
        else
            id = volunteer.id;
        return Object.assign({}, volunteer, { id });
    });
}
function isVerified(verified) {
    if (typeof verified === 'string') {
        return verified === 'Yes';
    }
    else
        return verified;
}
function getHours(activity) {
    if ('hours' in activity) {
        return activity.hours;
    }
    else
        return activity.time;
}
function calculateHours(volunteers) {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
            if (isVerified(activity.verified)) {
                hours += getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
function byHours(a, b) {
    return b.hours - a.hours;
}
const combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
// console.log(combinedVolunteers)
const result = calculateHours(combinedVolunteers);
const finalResult = result.sort(byHours);
console.log(finalResult);