import { useReducer } from "react";


function reducer(state, action){
    switch(action.type){
        case "increment" : return {count: state.count + 1};
        case "decrement" : return {count: state.count - 1};
        case "reset" : return {count: 0};
        default: return state;
    }
}

export default function Counter(){
    const [state, dispatch] = useReducer(reducer , {count: 0});

    return(
        <div>
            <button onClick={() => dispatch({ type: "increment"})}>+</button>
            <button onClick={() => dispatch({ type: "decremet"})}>-</button>
            <button onClick={() => dispatch({ type: "reset"})}>Сброс</button>
        </div>
    );
}