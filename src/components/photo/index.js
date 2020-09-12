import React from 'react';
import '../../styles.css';

export default function Photo(props){
  const { url, time, caption } = props;
  return(
    <div>
      <div className='photoTime'>
        <p id='time'>{ time } hrs. ago</p>
      </div>
      <img id='aboutImage' src={ url }/>
      <strong><p id='caption'>{ caption }</p></strong>
    </div>
  )
}
