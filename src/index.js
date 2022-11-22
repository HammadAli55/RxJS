import {of, fromEvent} from 'rxjs'
import { map } from 'rxjs'

/* Map Operator:
  Applies a given project function to each value 
  emitted by the source Observable, and emits the 
  resulting values as an Observable.
*/
const observable = fromEvent(
  document, 'keydown'
).pipe(
  map(event => event.code)
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