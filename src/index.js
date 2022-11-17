import { interval } from 'rxjs'

//- Observer: responsible for receivng data
//- Subscription: establishing connection with observable 

//- new instance of observable class
//- subscriber argument is an object for interacting with observers 
// ^ we can emit data, throw error and tell observers we are finished emitting data

// interval is an operator with type observable and emit numbers in sequence based on provided timeframe.
const observable = interval(500)
 
// instance have function called subscribe
// subscribe allow us to pass in an observer (as an object)
const subscription = observable.subscribe(
    {
        //- observers can be partial, they are completely optional
        //- next responsible for handling data pushed from observable
        //- value refers to the data emitted by the observable
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
//- must clear interval after completing the observable
setTimeout(() => {
    //- Unsubscribe: method of subscription that takes no argument and just disposes the resourse held by the subscription
    subscription.unsubscribe()
}, 4000)

