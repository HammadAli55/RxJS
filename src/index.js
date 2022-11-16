import { Observable } from 'rxjs'


// new instance of observable class
const observable = new Observable((subscriber) => {
    // emitting data to observers
    subscriber.next('Hello World')
    // after this we won't able to emit a new value
    subscriber.error('Error!')
    subscriber.next('Shah')
    // prevent observable for pushing new data. This is a manual way to terminate obeservable
    subscriber.complete()
    subscriber.next('Shah')

})
 
// instance have function called subscribe
// subscribe allow us to pass in an observer (as an object)
observable.subscribe(
    {
        // observers can be partial, they are completely optional
        // next responsible for handling data pushed from observable
        // value refers to the data emitted by the observable
        next:(value) => {
            console.log(value)
        },
        complete: () => {
            console.log('complete called')
        },
        error: (err) => {
            console.error(err)
        }
    }
)

