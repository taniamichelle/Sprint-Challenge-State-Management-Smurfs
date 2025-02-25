import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_FAILURE,
    FETCH_SMURFS_SUCCESS,
    CREATE_SMURF_START,
    CREATE_SMURF_FAILURE,
    CREATE_SMURF_SUCCESS,
} from '../actions';

export const initialState = {
    smurfsData: [
        // { name: '', age: '', height: '' }
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
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfsData: action.payload,
                error: ''
            }
        case CREATE_SMURF_START:
            return {
                ...state,
            }
        case CREATE_SMURF_SUCCESS:
            return {
                ...state,
                smurfsData: action.payload
            }
        case CREATE_SMURF_FAILURE:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}
