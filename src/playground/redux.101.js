import { createStore } from 'redux';
// const increaseCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const increaseCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decreaseCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREASE',
    decrementBy
});
const setThis = ({setToThis = 0} = {}) => ({
        type: 'SET',
        setToThis
}) 
const resetMe = () => ({
    type:'RESET'
})
const store = createStore((state = { count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
        const incrBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrBy
            }
        case 'DECREASE':
        const decrBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrBy
            }  
        case 'SET': 
            const change = action.setToThis;
            return {
                count: change
            }    
        case 'RESET':
            return {
                count: 0
            }      
        default: 
            return state;    
    }
});


const unscb = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(increaseCount({incrementBy: 5}));
// unscb();
store.dispatch(increaseCount());

store.dispatch(decreaseCount({ decrementBy:  4 }));
store.dispatch(setThis({setToThis: 169}));
store.dispatch(resetMe());

store.dispatch(setThis({setToThis: 1182}))