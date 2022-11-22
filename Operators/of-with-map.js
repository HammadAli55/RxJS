import {of} from 'rxjs'
import { map } from 'rxjs'

/* Map Operator:
  Applies a given project function to each value 
  emitted by the source Observable, and emits the 
  resulting values as an Observable.
*/
const observable = of(1,2,3,4,5).pipe(
  map((value) => `$${value}`)
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