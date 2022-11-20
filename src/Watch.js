import React from 'react'
import './Watch.css'
import watch1 from './images/w1.jfif'
import watch2 from './images/w4.jfif'
import watch3 from './images/w5.jfif'

const Watch = () => {
    return (
        <>
            <h4 className='sub-heading'>Watches ⌚</h4>
            <div className='pic-container'>
                <img src={watch1} className='watch' alt='watch-pic'></img>
                <img src={watch2} className='watch' alt='watch-pic'></img>
                <img src={watch3} className='watch' alt='watch-pic'></img>
            </div>
        </>
    )
}

export default Watch;
