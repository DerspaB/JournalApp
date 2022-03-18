import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://wallpaperaccess.com/full/3129749.jpg)'
            }}
        >         
        </div>
        <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo día
                </p>
                <p className='journal__entry-content'>
                    Velit exercitation magna culpa nostrud occaecat.
                </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>25</h4>
        </div>
    </div>
  )
}
