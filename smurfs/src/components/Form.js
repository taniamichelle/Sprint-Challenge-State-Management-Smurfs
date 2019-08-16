import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

const Form = ({ createSmurf }) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
    });

    const handleChange = e => {
        setSmurf(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        createSmurf(smurf);
        setSmurf('');
    };

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Create a Smurf</legend>
                    <div className='nameField'>
                        <label>
                            Name
                            <input
                                name='name'
                                type='text'
                                placeholder='Enter name'
                                value={smurf.name}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='ageField'>
                        <label>
                            Age
                            <input
                                name='age'
                                type='age'
                                placeholder='Enter age'
                                value={smurf.age}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='roleField'>
                        <label>
                            Height
                            <input
                                name='height'
                                type='text'
                                placeholder='Enter height'
                                value={smurf.height}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button onClick={createSmurf} className="create-smurf-button">Create Smurf</button>
                </fieldset>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfsData: state.smurfsData,
    }
}

export default connect(mapStateToProps, { createSmurf })(Form);

