export default class Message {
  constructor (msg) {
    this.from = msg.from
    this.text = msg.text
    this.user = msg.user
    this.location = msg.location
    this.date = msg.date
    this.chat = msg.chat
  }

  static mapMessage (msg) {
    return {
      from: msg.from.id,
      text: msg.text,
      chat: msg.chat.id,
      date: msg.date,
      location: msg.location,
      user: {
        firstName: msg.from.first_name,
        lastName: msg.from.last_name
      }
    }
  }
}
