import React from 'react';
import './zipcode.css';

const Zipcode = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>   
            <div className='zip-form pa5'>
                <label className='zip f2'>
                    {'Enter your Zip Code'}
                </label>
                <input className='input-zip f3 pa2 w-10 br-pill' type='text' onChange={onInputChange}/>
                <button 
                    className='zip-button w9 grow f3 link ph3 pv2 dib white bg-black'
                    onClick={onButtonSubmit}>
                    Detect
                </button>
                <p className='p-zip f4'>
                    {'To find a movement worth getting involved in near you.'}
                </p>
            </div>
        </div>
    );
}

export default Zipcode;