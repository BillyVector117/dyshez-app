import React from 'react'
import './index.css'
import PicturesGrid from './components/pictures-grid'
const Pictures = () => {
    return (
        <div className='container-pictures'>
            <h1>Pictures</h1>
            <PicturesGrid />
        </div>
    )
}

export default Pictures