import React from 'react'
import './Shirt.css'
import shirt1 from './images/s1.jpg'
import shirt2 from './images/s2.jpg'
import shirt3 from './images/s3.jpg'

const Shirt = () => {
    return (
        <>
            <h4 className='sub-heading'>Shirts 👚</h4>
            <div className='pic-container'>
                <img src={shirt1} className='shirt' alt='shirt-pic'></img>
                <img src={shirt2} className='shirt' alt='shirt-pic'></img>
                <img src={shirt3} className='shirt' alt='shirt-pic'></img>
            </div>
        </>
    )
}

export default Shirt
