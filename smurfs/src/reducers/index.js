import { FETCH_SMURFS_START, FETCH_SMURFS_FAILURE, FETCH_SMURFS_SUCCESS, ADD_SMURF } from '../actions';

export const initialState = {
    smurfsData: [
        // { name: 'Papa', age: 870, height: '5.5cm', id: '00' },
        // { name: 'Smurfette', age: 190, height: '4.6cm', id: '1' },
        // { name: 'Vanity', age: 220, height: '4.9cm', id: '2' },
    ],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'FETCH_SMURFS_START':
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case 'FETCH_SMURFS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                housesData: action.payload,
                error: ''
            }
        case 'ADD_SMURF':
            const newSmurf = {
                name: action.payload,
                age: action.payload,
                height: action.payload,
                id: Date.now(),
            };
            return {
                ...state,
                smurfsData: [...state.smurfsData, newSmurf]
            }
        default:
            return state;
    }
}
