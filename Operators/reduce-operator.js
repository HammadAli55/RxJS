import { of } from 'rxjs'
import { reduce } from 'rxjs/operators'

/* Reduce - 
  Applies an accumulator function over the source Observable, and 
  returns the accumulated result when the source completes, given an 
  optional seed value.
  
  Seed value '0': 
  It is optional and represents starting value. 
  Starting value should start at 0 where new numbers are added in seed value.

  Accumulator (acc): 
  Stores value previously return by this function. 
  Value (val): It references the value emitted by the observable
*/

const observable = of(1,2,3,4,5).pipe(
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