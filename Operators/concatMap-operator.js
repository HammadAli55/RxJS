import { fromEvent, interval} from 'rxjs'
import { concatMap, take, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

/*
concatMap: 
The order gets added to a queue. You finish whatever order you're working on. 
Once you finish the order, you will work on the next order.
*/

const button = document.querySelector('#btn')

const observable = fromEvent(
  button, 'click'
).pipe(
  concatMap(() => {
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