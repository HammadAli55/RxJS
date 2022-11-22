import {of, fromEvent, pluck} from 'rxjs'
import { map } from 'rxjs'

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
  // map(event => event.code)
  pluck('code')
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