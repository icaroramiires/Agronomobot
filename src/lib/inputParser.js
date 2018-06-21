'use strict'

export default class InputParser {
  isAskingForWelcome (response) {
    return (
      response.intents.length > 0 && response.intents[0].intent === 'BemVindo'
    )
  }

  isAskingForMenu (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'MostrarMenuDeOpcoes'
    )
  }

  isAskingForInfoNodes (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'SaberInformacoes' &&
      response.entities[0].entity === 'Node'
    )
  }

  isAskingForHelp (response) {
    return (
      response.intents.length > 0 && response.intents[0].intent === 'Ajuda'
    )
  }

  isAskingForMolhamentoFoliar (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'SaberInformacoes' &&
      response.entities[0].entity === 'Sensor' &&
      response.entities[0].value === 'Molhamento Foliar'
    )
  }

  isAskingForRadiacaoSolar (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'SaberInformacoes' &&
      response.entities[0].entity === 'Sensor' &&
      response.entities[0].value === 'Radiação Solar'
    )
  }

  isAskingForUmidade (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'SaberInformacoes' &&
      response.entities[0].entity === 'Sensor' &&
      response.entities[0].value === 'Umidade'
    )
  }

  isAskingForTemperatura (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'SaberInformacoes' &&
      response.entities[0].entity === 'Sensor' &&
      response.entities[0].value === 'Temperatura'
    )
  }

  isAskingForReports (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'SolicitarRelatorios' && 
      response.entities.length === 0
    )
  }

  isAskingForReportSensor (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'SolicitarRelatorios' &&
      response.entities.length > 0 &&
      response.entities[0].entity === 'Sensor'
    )
  }

  isAskingForReportNode (response) {
    return (
      response.intents.length > 0 &&
      response.intents[0].intent === 'SolicitarRelatorios' &&
      response.entities.length > 0 &&
      response.entities[0].entity === 'Node'
    )
  }
}
