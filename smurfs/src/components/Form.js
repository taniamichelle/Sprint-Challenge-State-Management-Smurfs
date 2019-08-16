import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const Form = ({ addSmurf }) => {
    // console.log(props);
    const [smurf, setSmurf] = useState();

    const handleChange = e => {
        setSmurf(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(smurf);
        setSmurf('');
    };

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add Smurf</legend>
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
                    <button type='submit'>Add Smurf</button>
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

export default connect(mapStateToProps, { addSmurf })(Form);

