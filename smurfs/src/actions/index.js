import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            // res.data
            console.log(res);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.response });
        });
};

export const CREATE_SMURF_START = 'CREATE_SMURFS';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';
export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE';

export const createSmurf = smurf => dispatch => {
    dispatch({ type: CREATE_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            // res.data
            console.log(res);
            dispatch({ type: CREATE_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: CREATE_SMURF_FAILURE, payload: err.response });
        });
};

export const ADD_SMURF = 'ADD_SMURF';

export const addSmurf = smurf => {
    return {
        type: ADD_SMURF,
        payload: smurf
    }
};