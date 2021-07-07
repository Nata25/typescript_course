import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from './raccoon-meadows-log';

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from './wolf-point-log';

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
  return volunteers.map(volunteer => {
    let id: number
    if (typeof volunteer.id === 'string') {
      id = parseInt(volunteer.id)
    } else id = volunteer.id
    return {
      ...volunteer,
      id
    }
  })
}

function isVerified (verified: boolean | string) {
  if (typeof verified === 'string') {
    return verified === 'Yes'
  } else return verified
}

function getHours (activity: CombinedActivity) {
  if ('hours' in activity) {
    return activity.hours
  } else return activity.time
}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      if (isVerified(activity.verified)) {
        hours += getHours(activity)
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

function byHours(a, b): number {
  return b.hours - a.hours
}

const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);

// console.log(combinedVolunteers)
const result = calculateHours(combinedVolunteers)
const finalResult = result.sort(byHours)
console.log(finalResult)
