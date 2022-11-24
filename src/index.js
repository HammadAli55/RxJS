import { fromEvent, interval} from 'rxjs'
import { switchMap, take, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

/*
switchMap: 
Stop working on the order and start working on the new order. Only the latest order will eve be finished.
*/

const button = document.querySelector('#btn')

const observable = fromEvent(
  button, 'click'
).pipe(
  switchMap(() => {
    // When we click button twice, the first request will be cancelled. It's a desireable behavior
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
      take(5),
      tap({
        complete() {
          console.log('inner observable completed')
        }
      }), 
    )
  }),
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