import {of} from 'rxjs'

// flattering an array - used to reduce deeply nested array in to a simpler array


// 'of' operator is synchronous, and complete the observable phase. 
// but can't flatter the array. To flatter the array, we use 'from' operator
// loop run 5 times
const observable = of('https://jsonplaceholder.typicode.com/todos/1')

observable.subscribe({
  next: (val) => {
    console.log(val)
  },
  complete: () => {
    console.log('completed')
  }
}
)