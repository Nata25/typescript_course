import courses from './courses'
import studyGroups from './studyGroups'

type Course = {
  id: number,
  studyGroupId: number,
  title: string,
  keywords: string[],
  eventType: string
}

type StudyGroup = {
  id: number,
  courseId: number,
  title: string,
  keywords: string[],
  eventType: string
}

type SearchEventsOptions = {
  query: string | number,
  eventType: string
}

function searchEvents (options: SearchEventsOptions) {
  let events: (Course | StudyGroup)[]
  if (options.eventType === 'courses') {
    events = courses
  } else events = studyGroups
  return events.filter(event => {
    const { id, keywords } = event
    if (typeof options.query === 'number') {
      return id === options.query
    } else {
      return keywords.includes(options.query)
    }
  })
}

let enrolledEvents: (Course | StudyGroup)[] = []

function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event)
  console.log(`I'm enrolled in:`, enrolledEvents)
}

const result = searchEvents({ query: 'lab', eventType: 'courses'})
console.log(result)

if (result.length) {
  enroll(result[0])
}