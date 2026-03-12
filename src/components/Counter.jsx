import { useState } from "react";

function CounterApp(){

const [count,setCount] = useState(0);

function increase(){
  setCount(count + 1);
}

function decrease(){
  setCount(count - 1);
  
}
function reset(){
  setCount(0);
}

return(

<>


<div className="p-10 rounded shadow-lg text-center w-80 mx-auto mt-40">

<h2 className="text-2xl font-bold text-blue-500 mb-5">
Counter App : {count}
</h2>

<div className="flex justify-center gap-4">

<button
onClick={increase}
className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
>
Increase
</button>

<button
onClick={decrease}
className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
>
Decrease
</button>

<button
onClick={reset}
className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
>
Reset
</button>
</div>

</div>


</>

)

}

export default CounterApp;