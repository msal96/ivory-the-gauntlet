var assert = require('assert')
var statement = require('../theStore')
describe('Unit test for function', () => {
  it('should return correctly name of the customer, each movie and the price for it, total amount, number of renter points', () => {
    const customer = {
      name: 'Mickael',
      rentals: [
        {movieID: '12', days: 4},
        {movieID: '13', days: 5}
      ]
    }
    const movies = {
      '12': {
        title: 'The lord of the rings',
        code: 'new'
      },
      '13': {
        title: 'Batman',
        code: 'regular'
      }
    }
    let result = statement(customer, movies)
    assert.equal(result.includes('Mickael'), true)
    assert.equal(result.includes('The lord of the rings 12'), true)
    assert.equal(result.includes('Batman 6.5'), true)
    assert.equal(result.includes('Amount owed is 18.5'), true)
    assert.equal(result.includes('3 frequent renter points'), true)
  })
})
