import { Observable } from 'rxjs'

// Observer: responsible for receivng data
// Subscription: establishing connection with observable 

// new instance of observable class
// subscriber argument is an object for interacting with observers 
// ^ we can emit data, throw error and tell observers we are finished emitting data
const observable = new Observable((subscriber) => {
    const id = setInterval(() => {
        // emitting data to observers
        subscriber.next('Hello World')
        // after this we won't able to emit a new value
        // subscriber.error('Error!')
        subscriber.next('Shah')
        // prevent observable for pushing new data. This is a manual way to terminate obeservable
        // subscriber.complete()
    }, 1000)
    return() => {
        // memory allocated to interval won't stop until subscriber is completed
        clearInterval(id)
    }
})
 
// instance have function called subscribe
// subscribe allow us to pass in an observer (as an object)
const subscription = observable.subscribe(
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
// must clear interval after completing the observable
setTimeout(() => {
    subscription.unsubscribe()
}, 4000)

