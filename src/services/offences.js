export default class Offences {
  constructor () {
    this.answers = [
      'Tua mãe!',
      'Me respeita, jovem!',
      'Falou o inteligentão',
      "Falou o cara que xinga um robô ¬¬'",
      'Tá achando ruim? Faz melhor =)',
      "Magoei :'(",
      "Depois vem me pedir pra fazer as coias ¬¬'",
      'Oloco, xinga não, jovem :/',
      'Se vira aí então, troxa',
      'Aff, vou embora então!'
    ]
  }

  getRandomResponseOffence () {
    return this.answers[Math.floor(Math.random() * this.answers.length)]
  }
}
