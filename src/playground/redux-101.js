import { createStore } from 'redux';

//action generators

const incrementCount = ( {incrementBy = 1} = {}) => ({ //that is a default 1
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( {decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { count }) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : -1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
 console.log(store.getState());
});



// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({ count: 101}));

