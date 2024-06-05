import React, { useContext } from "react";
import MyContext from "../context";

const FirstChild = () => {

    let state = useContext(MyContext);

    return (
        <>
            <h3>дочерний компонент First</h3>
            <button onClick={() => state.plus(state.count - 1)}>-</button>
            <button onClick={() => state.plus(state.count + 1)}>+</button>
        </>
    )
}

export default FirstChild