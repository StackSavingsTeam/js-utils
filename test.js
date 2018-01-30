const assert = require("assert")
const utils = require('./utils')

describe("Convertir a Unix",function(){
  it('Esto deberia retornar un formato unix a partir de una fecha dada (yyyy/mm/dd)', () => {
    assert.equal( utils.toTimeStampUnix('20180120') , 1516420800);
  })
})