import {of, fromEvent} from 'rxjs'
import { map, pluck, filter } from 'rxjs/operators'

/* Filter operator:
Emit values that pass the provided condition
*/
const observable = fromEvent(
  document, 'keydown'
).pipe(
  // map(event => {
  //   return event.code === 'Space' ? event.code : null
  //   }
  // ),
  pluck('code'),
  filter(code => code === 'space')
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