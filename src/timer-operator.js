import { timer } from 'rxjs'

// Timer operator: After given duration, emit numbers in sequence every specified duration
/*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 3 seconds after
*/
const observable = timer(1000, 3000)
 
// instance have function called subscribe
// subscribe allow us to pass in an observer (as an object)
observable.subscribe(
    console.log
)
