let today = new Date()
let tomorrow = new Date(today.valueOf() + 24 * 60 * 60 * 1000)
let dayAfterTomorrow = new Date(today.valueOf() + 2 * 24 * 60 * 60 * 1000)
export default [
    {
        name: 'Conduct Workshop',
        date: today,
        isCompleted: false
    },
    {
        name: 'Task 2',
        date: today,
        isCompleted: false
    },
    {
        name: 'Tomorrows task',
        date: tomorrow,
        isCompleted: false
    },
    {
        name: 'Task 4',
        date: tomorrow,
        isCompleted: false
    },
    {
        name: 'Upcoming future tasks',
        date: dayAfterTomorrow,
        isCompleted: false
    },
    {
        name: 'Task6',
        date: dayAfterTomorrow,
        isCompleted: false
    },
]