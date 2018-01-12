'use strict'

module.exports.toTimeStampUnix = (dateUS) => {
  const moment = require('moment')
  const strDate = String(dateUS)
  return moment(strDate.slice(0, 4) + '/' + strDate.slice(4, 6) + '/' + strDate.slice(6, 8), 'YYYY/M/D').unix()
}

module.exports.log= (text)=>{
      const logger = require('./Logger')
      //console.log(text)
      logger.info(text)
}
    