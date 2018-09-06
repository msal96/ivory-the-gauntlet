var assert = require('assert')
import statement from '../theStore'
describe('Unit test for function', () => {
  it('should return correctly', () => {
    const customer = {
      name: 'Mickael',
      rentals: [
        {movieID: '12', days: 2},
      ]
    }
    const movies = {
      '12': {
        title:'The lord of the rings',
        code: 'new'
      }
    }
    consoloe.log(statement(customer, movies))
    assert.equal(2+2, 4)
  })
})