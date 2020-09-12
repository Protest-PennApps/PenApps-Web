import React from 'react';

export default function Comment(props){
  const { name='Tommy', comment='Blah blah blah blah', time='5 hrs ago' } = props
  return(
    <div className='commentContainer'>
      <div className='commentName'>
        <strong><p>{ name }</p></strong>
        <p id='commentTime'>{ time }</p>
      </div>
      <div className='commentData'>
        <p>{ comment }</p>
      </div>
    </div>
  )
}

