import { fromEvent, interval} from 'rxjs'
import { exhaustMap, take, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

/*
exhaustMap: 
You ignore new orders and finish whatever order you're working on. 
Once finished, you are free to accept new orders.

Ignore second request because first one is going.
prevent users from spamming form submissions
*/

const button = document.querySelector('#btn')

const observable = fromEvent(
  button, 'click'
).pipe(
  exhaustMap(() => {
    // When we click button twice, the first request will be cancelled. It's a desireable behavior
    // return interval(1000)
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(
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