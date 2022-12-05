import React, { useReducer } from "react";

const counterReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.value };
    }
    return { value: 0 };
};

export default function Counter() {
    const [counterState, dispatchCounter] = useReducer(counterReducer, {
        value: 0,
    });

    return (
        <div className="">
            <h1>{counterState.value}</h1>
            <button
                onClick={() => {
                    dispatchCounter({
                        type: "USER_INPUT",
                        value: counterState.value + 1,
                    });
                }}
            >
                increase
            </button>
            <button
                onClick={() => {
                    dispatchCounter({
                        type: "USER_INPUT",
                        value: counterState.value - 1,
                    });
                }}
            >
                decrease
            </button>
        </div>
    );
}
