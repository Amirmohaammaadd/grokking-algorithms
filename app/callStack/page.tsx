"use client"

import { useEffect } from "react";

// //Maximum call stack size exceeded

//   function boom() {
//     return boom();
//   }

//   boom();

const A = () => {
    console.log("this is A");
    B()
}

const B = () => {
    console.log("this is B");
    C()
}

const C = () => {
    console.log("this is C");
    D()
}

const D = () => {
    console.log("this is D");
    // throw new Error("Err from D")
}

 const CallStackPage = () => {
    useEffect(() => {
        A()
    }, [])
}

export default CallStackPage