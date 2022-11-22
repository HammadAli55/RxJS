import {of, fromEvent} from 'rxjs'
import { map, pluck, filter } from 'rxjs/operators'

/* Pluck operator:
Like map, but meant only for picking one 
of the nested properties of every emitted value.

Use map and optional chaining: 
pluck('foo', 'bar') is map(x => x?.foo?.bar). 
Will be removed in v8.
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