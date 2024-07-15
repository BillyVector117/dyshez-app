'use client'
import React, { useState } from 'react'
import './index.css'
import Image from 'next/image'
const PicturesGrid = () => {
    const [openInfoProductSide, setOpenInfoProductSide] = useState(false)
    return (
        <div className='layout-pictures'>
            <div className='grid-container'>
                <div tabIndex={0} className="item">
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/add.svg'} width={20} height={20} />
                    </div>

                </div>
                <div tabIndex={1} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/1.svg'} width={200} height={200} />

                </div>
                <div tabIndex={2} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/2.svg'} width={200} height={200} />

                </div>
                <div tabIndex={3} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/3.svg'} width={200} height={200} />

                </div>
                <div tabIndex={4} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/4.svg'} width={200} height={200} />

                </div>

                <div tabIndex={5} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/5.svg'} width={200} height={200} />

                </div>
                <div tabIndex={6} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/6.svg'} width={200} height={200} />

                </div>
                <div tabIndex={7} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/7.svg'} width={200} height={200} />

                </div>
                <div tabIndex={8} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/8.svg'} width={200} height={200} />

                </div>
                <div tabIndex={9} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/9.svg'} width={200} height={200} />

                </div>
                <div tabIndex={10} className="item" onClick={() => setOpenInfoProductSide(true)}>
                    <div className="icon-container">
                        <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                    </div>
                    <Image className='icon-sushi' alt='sushi' src={'/pictures/10.svg'} width={200} height={200} />

                </div>

            </div>
            {
                openInfoProductSide ? (
                    <div className="info-product">
                        <div className="item1"><label className='preview-label' htmlFor="prev1">PREVIEW 1:1</label>
                            <div className="icon-container-prev-1">
                                <Image className='prev' alt='prev' src={'/pictures/1-1.svg'} width={150} height={150} />
                            </div>
                        </div>
                        <div className="item2"><label className='preview-label' htmlFor="prev2">PREVIEW 16:9</label>
                            <div className="icon-container-prev-2">
                                <Image className='prev' alt='prev' src={'/pictures/16-9.svg'} width={300} height={150} />
                            </div>
                        </div>
                        <div className="item3"><label className='preview-label' htmlFor="prev3">PREVIEW 9:16</label>
                            <div className="icon-container-prev-3">
                                <Image className='prev' alt='prev' src={'/pictures/9-16.svg'} width={140} height={300} />
                            </div>
                        </div>
                    </div>

                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default PicturesGrid