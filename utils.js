'use strict'

module.exports.toTimeStampUnix = (dateUS) => {
  const moment = require('moment')
  const strDate = String(dateUS)
  return moment(strDate.slice(0, 4) + '/' + strDate.slice(4, 6) + '/' + strDate.slice(6, 8), 'YYYY/M/D').unix()
}

module.exports.todayTimeStampUnix = () => {
  const moment = require('moment')
  let hoy = new Date()
  const strDate = hoy.getFullYear().toString() + (hoy.getMonth() + 1 ).toString() + hoy.getDate().toString() 
  return moment(strDate.slice(0, 4) + '/' + strDate.slice(4, 6) + '/' + strDate.slice(6, 8), 'YYYY/M/D').unix()
}

module.exports.log = () => {

  function logger(){
    const winston = require('winston')
    const fs = require('fs')
    const logDir = 'logs'
    const tsFormat = () => (new Date()).toLocaleTimeString()

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir)
    }

    const logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({
          timestamp: tsFormat,
          colorize: true,
          level: 'info'
        }),
        new (require('winston-daily-rotate-file'))({
          filename: `${logDir}/-info.log`,
          timestamp: tsFormat,
          datePattern: 'yyyy-MM-dd',
          prepend: true,
          colorize: true,
          level: 'info'
        })
      ]
    })
    return logger
  }

  return {
    info: (text) => {
      const log = logger()
      log.info(text)
    },
    error: (text) => {
      const log = logger()
      log.error(text)
    }
  }
}
