function statement (customer, movies) {
  let result = `Rental Record for ${customer.name}\n`
  for (let r of customer.rentals) {
    result += `\t${movieFor(r).title} ${amountFor(r)}\n`
  }
  result += `Amount owed is ${totalAmount()}\n`
  result += `You earned ${totalFrequentRenterPoints()} frequent renter points\n`
  return result

  function totalFrequentRenterPoints () {
    let result = 0
    for (let r of customer.rentals) {
      result += frequentRenterPointsFor(r)
    }
    return result
  }
  function totalAmount () {
    return customer.rentals.reduce((total, r) => total + amountFor(r), 0)
  }
  function movieFor (rental) {
    return movies[rental.movieID]
  }
  function amountFor (rental) {
    let result = 0
    switch (movieFor(rental).code) {
      case 'regular':
        result = 2
        if (rental.days > 2) {
          result += (rental.days - 2) * 1.5
        }
        return result
      case 'new':
        result = rental.days * 3
        return result
      case 'childrens':
        result = 1.5
        if (rental.days > 3) {
          result += (rental.days - 3) * 1.5
        }
        return result
    }
    return result
  }
  function frequentRenterPointsFor (rental) {
    return movieFor(rental).code === 'new' && rental.days > 2 ? 2 : 1
  }
}

module.exports = statement
