import React from 'react';
import Smurfs from './Smurfs';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getData } from '../actions';

const SmurfList = props => {
    return (
        <div className='houses-list-container'>
            <div className='title'>Welcome to Smurfs Characters!</div>
            <button className='get-data-btn'
                onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type='oval'
                        color='#00BFFF'
                        height="20"
                        width='20' />
                ) : (
                        'See Smurfs'
                    )}
            </button>
            {props.smurfsData && props.smurfsData.map(data => <Smurfs key={data.name} smurf={data} />)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfsData: state.smurfsData
    };
};

export default connect(mapStateToProps, { getData })(SmurfList);