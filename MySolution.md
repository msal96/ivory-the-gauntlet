## Type of function arguments(customer, movies)
### Dupa felul in care se foloseau argumentele in functie, mi-am dat seama
### ca trebuie sa fie de acest tip:
```javascript
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
```
### Din unit tests se observa ca function works with this arguments.

## O sa fac un refactor pentru a imparti functia in bucati mai mici, into thin slices :))
### Din cate am observat functia se poate imparti in alte 4 functii, astfel o sa aplicam single responsability principle:
* `function movieFor(rental) `
* `function amountFor(rental) `
* `function totalAmount() `
* `function totalFrequentRenterPoints() `




