"use client"
import {Elements, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

type CheckoutFormProps={
    product:{},
    clientSecret:string
}
const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)

export function CheckoutForm({product,clientSecret}:CheckoutFormProps){
return(<div className="max-w-5xl w-full mx-auto space-y-8">
 <Elements options={{clientSecret}} stripe={stripePromise}>
<Form/>
</Elements></div>)
}
function Form(){
    const stripe = useStripe();
    const element = useElements();
    return <PaymentElement />

}