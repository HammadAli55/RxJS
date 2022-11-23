import { of } from 'rxjs'
import { reduce } from 'rxjs/operators'

/* Reduce - 
  Applies an accumulator function over the source Observable, and 
  returns the accumulated result when the source completes, given an 
  optional seed value.
*/

const observable = of(1,2,3).pipe(
  reduce(
    (acc,  val) => acc + val, 0
  )
)

observable.subscribe({
    next: (val) => {
      console.log(val)
    },
    complete: () => {
      console.log('completed')
    }
  }
)