import { fromEvent, interval} from 'rxjs'
import { mergeMap, take, tap } from 'rxjs/operators'

/*
mergeMap - You will work on all orders at the same time as soon as you're given them.
*/

const button = document.querySelector('#btn')

const observable = fromEvent(
  button, 'click'
).pipe(
  mergeMap(() => {
    return interval(1000).pipe(
      tap(console.log), 
      // will show that inner opservable completes but not outer one
      // infinite values will be emitted
      // take(5)
    )
  }),
  // will show that inner and outer both observable has been completed 
  // finite values will be emitted 
  take(5)
)

observable.subscribe({
    next: (val) => {
      // for mergeMap operator we don't need to subscribe observable (like we do with map operator)
      // val.subscribe(console.log)
      // console.log(val)
    },
    complete: () => {
      console.log('completed')
    }
  }
)