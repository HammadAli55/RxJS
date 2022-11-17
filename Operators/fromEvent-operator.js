import {fromEvent} from 'rxjs'


// the observable will listen for click events until the user closes the app. 
//^ If we don't listen event, we should unsuscribe them from observable
//Otherwise we experience memory leak
// fromEvent won't stop listening for events
const observable = fromEvent(
  document, 'click'
)

observable.subscribe(
  console.log
)