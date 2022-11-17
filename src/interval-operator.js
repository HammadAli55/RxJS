import { interval } from 'rxjs'

// interval is an operator with type observable and emit numbers in sequence based on provided timeframe.
const observable = interval(500)
 
// instance have function called subscribe
// subscribe allow us to pass in an observer (as an object)
const subscription = observable.subscribe(
    console.log
)
