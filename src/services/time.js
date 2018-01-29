export default class Time {
  constructor () {
    this.currentYear = new Date().getFullYear()
    this.startDate = new Date(this.currentYear, 0, 1)
  }

  getYearProgress () {
    const yearDays = Math.ceil((new Date(this.currentYear + 1, 0, 1) - this.startDate) / 8.64e7)
    const passedDays = Math.ceil((new Date() - this.startDate) / 8.64e7) // 31
    return Math.ceil((passedDays / yearDays) * 100)
  }

  getMonthProgress () {
    const now = new Date()
    const currentMonth = now.getMonth()
    const daysInMonth = new Date(this.currentYear, currentMonth, 0).getDate()
    const daysSinceStartOfMonth = now.getDate() - 1
    return Math.ceil((daysSinceStartOfMonth / daysInMonth) * 100)
  }

  getDayProgress () {
    const now = new Date()
    const hoursDay = 24
    const currentHours = now.getHours() || 1
    return Math.ceil((currentHours / hoursDay) * 100)
  }
}
