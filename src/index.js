import { interval } from 'rxjs'
import { scan, take } from 'rxjs/operators'

/* Scan - 
  Applies an accumulator function over the source Observable, and 
  returns the accumulated result on each source emission, given an 
  optional seed value. Work same like Reduce operator but reduce
  will emit only once on compilation
  
  Seed value '0': 
  It is optional and represents starting value. 
  Starting value should start at 0 where new numbers are added in seed value.

  Accumulator (acc): 
  Stores value previously return by this function. 
  Value (val): It references the value emitted by the observable
*/

const observable = interval('500').pipe(
  // take the first emitted value from scan operator then complete
  take(5),
  scan(
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