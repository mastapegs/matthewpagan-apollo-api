const people = [
  {
    name: 'Matthew Pagan',
    isAdult: true,
  },
  {
    name: 'John Doe',
    isAdult: true,
  },
  {
    name: 'Little Jane Doe',
    isAdult: false,
  },
  {
    name: 'Red Riding Hood',
    isAdult: false,
  },
  {
    name: 'Robin Hood',
    isAdult: true,
  },
]

const peopleWithIDs = people.map(person => ({
  ...person,
  id: person.name,
}))

module.exports = peopleWithIDs