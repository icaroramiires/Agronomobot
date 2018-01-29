import fs from 'fs'

export default class Disciplina {
  constructor () {
    this.contentJson = JSON.parse(fs.readFileSync(`${__dirname}/disciplina.json`, 'utf-8'))
  }
  makeMessage () {
    const text = this.contentJson
    return `Disciplina: *${text.name}\n* 
  Horário: *${text.schedule}* 
  Dia: *${text.day_offered}*
  Professor: *${text.prof}* 
  Carga Horária: *${text.ch}*
  Local: *${text.local}*
  Pré Req.: *${text.pre_req.filter((disciplina) => disciplina)}*`
  }
}
