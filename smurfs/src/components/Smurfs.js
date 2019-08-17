import React from 'react';
import { Card } from 'semantic-ui-react';

const Smurfs = props => {
    return (
        <Card>
            <div className='ui-cards'>
                <div className='ui-card'>
                    <div className='content'>
                        <div className='header'>{props.smurf.name}</div>
                        <div className='description'>
                            <p>{props.smurf.age}</p>
                            <p>{props.smurf.height}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card >
    );
};

export default Smurfs;
