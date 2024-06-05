import React, { useContext } from "react";

import SecondChild from "./SecondChild";

// пропсы стандартная передача данных

const Second = (props) => {

    console.log(props);
    return (
        <>
            <h2>Второй компонент</h2>

            <div>тест2{props.step_1} - стандартная передача данных через пропсы</div>
            <SecondChild />
        </>
    )
}

export default Second