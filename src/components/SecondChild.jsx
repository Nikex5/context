import React, { useContext } from "react";
import MyContext from "../context";

const SecondChild = () => {
    let state = useContext(MyContext);

    return (
        <>
            <h3>Дочерный компонент секонда</h3>
            <div>тест {state.step_1} - передача данных через useContext </div>
            <div>{state.count}</div>
        </>
    )
}

export default SecondChild