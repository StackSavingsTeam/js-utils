'use strict'

module.exports.toTimeStampUnix = (dateUS) => {
  const moment = require('moment')
  const strDate = String(dateUS)
  return moment(strDate.slice(0, 4) + '/' + strDate.slice(4, 6) + '/' + strDate.slice(6, 8), 'YYYY/M/D').unix()
}

module.exports.log = () => {
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
  return {
    info: (text) => {logger.info(text)},
    error: (text) => {logger.error(text)}
  }
}
