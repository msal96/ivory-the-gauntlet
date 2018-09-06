function statement(customer, movies) {
  let totalAmount = 0
  let frequentRenterPoints = 0 
  //customer = { name:(string), rentals:(array of objects) [ {'movieID': string || {code: string, title: string}, 'days': number }, ...same objects ]
  //movies = {'id': {code: string, title: string}, ...}
  //movie = {code: string, title: string}
  let result = `Rental Record for ${customer.name}\n`
  for (let r of customer.rentals) {
    //movies ar fi mai bine sa-l facem in object (movies["r.moviesID"])
    let movie = movies[r.movieID]
    let thisAmount = 0

    // determine amount for each movie
//this switch we can pun into a function which returns thisAmount
    switch (movie.code) {
      case 'regular':
        thisAmount = 2
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5
        }
        break
      case 'new':
        thisAmount = r.days * 3
        break
      case 'childrens':
        thisAmount = 1.5
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5
        }
        break
    }

    //add frequent renter points
    frequentRenterPoints++
    // add bonus for a two day new release rental
    if (movie.code === 'new' && r.days > 2) frequentRenterPoints++

    //print figures for this rental
    result += `\t${movie.title}\t${thisAmount}\n`
    totalAmount += thisAmount
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`
  result += `You earned ${frequentRenterPoints} frequent renter points\n`
  return result
}
module.exports = statement
