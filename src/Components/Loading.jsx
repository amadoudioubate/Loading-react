import React from 'react';
import { TailSpin } from  'react-loader-spinner'

function Loading() {
  return (
    <div className='container-loading'>
        <div className="loading-overlay">
            <div className="overlay-content">
                <TailSpin
                  height="100"
                  width="100"
                  color='grey'
                  border='6px solid'
                  ariaLabel='loading'
                />
            </div>
        </div>
        
    </div>
  )
}

export default Loading