import React,{useState} from 'react'

export default function Counter() {
    const [Counter, setCounter] = useState(0);

    const Increment = ()=>{
        if(Counter > 24){
            alert("Should not be grater then 25");
            return;
        }
        setCounter(prevstate => prevstate+1)
    }

    return (
        <div>
            <h1>Counter {Counter}</h1>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}
