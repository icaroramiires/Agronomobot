'use strict'

export default class InputParser {
  isAskingForWelcome (response) {
    return (
      response.intents.length > 0 && response.intents[0].intent === 'Welcome'
    )
  }

  isAskingForMenu (response) {
    return response.intents.length > 0 && response.intents[0].intent === 'Menu'
  }

  isAskingForInfoNodes (response) {
    return response.intents.length > 0 && response.intents[0].intent === 'Node'
  }

  isAskingForHelp (response) {
    return response.intents.length > 0 && response.intents[0].intent === 'Help'
  }

  isAskingForMolhamentoFoliar (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'ShowDataSensors' &&
      response.entities[0].entity === 'Sensor' &&
      response.entities[0].value === 'Molhamento Foliar'
    )
  }

  isAskingForRadiacaoSolar (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'ShowDataSensors' &&
      response.entities[0].entity === 'Sensor' &&
      response.entities[0].value === 'Radiação Solar'
    )
  }

  isAskingForUmidade (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'ShowDataSensors' &&
      response.entities[0].entity === 'Sensor' &&
      response.entities[0].value === 'Umidade'
    )
  }

  isAskingForTemperatura (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'ShowDataSensors' &&
      response.entities[0].entity === 'Sensor' &&
      response.entities[0].value === 'Temperatura'
    )
  }
}
