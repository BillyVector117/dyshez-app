'use client'
import React, { useEffect, useState } from 'react'
import './index.css'
import Image from 'next/image'
import Uploader from '../uploader'
import supabase from '@/lib/supabaseClient'
import Loader from '@/app/components/loader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PicturesGrid = () => {
    const [openInfoProductSide, setOpenInfoProductSide] = useState()
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(true)
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const { data, error } = await supabase.storage.from('pictures').list();

                if (error) {
                    throw error;
                }

                const imageUrls = data.map(file => {
                    const { data: publicData } = supabase.storage
                        .from('pictures')
                        .getPublicUrl(file.name);
                    return publicData;
                });

                setImages(imageUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
                setRefresh(false)
            }
        };

        refresh && fetchImages();
    }, [refresh]);
    if (loading) return (<Loader />)
    return (
        <div className='layout-pictures'>
            <div className='grid-container'>
                <Uploader onUpload={() => setRefresh(true)} />
                {
                    images && images.map((item, index) => (
                        <div key={index} tabIndex={index} className="item" onClick={() => setOpenInfoProductSide(item.publicUrl)}>
                            <div className="icon-container">
                                <Image className='icon-trash' alt='trash' src={'/common/trash.svg'} width={20} height={20} />
                            </div>
                            <Image className='icon-sushi' alt='sushi' src={item.publicUrl} width={200} height={200} />

                        </div>

                    ))
                }

            </div>
            {
                openInfoProductSide ? (
                    <div className="info-product">
                        <div className="item1"><label className='preview-label' htmlFor="prev1">PREVIEW 1:1</label>
                            <div className="icon-container-prev-1">
                                <Image className='prev' alt='prev' src={openInfoProductSide} width={150} height={150} />
                            </div>
                        </div>
                        <div className="item2"><label className='preview-label' htmlFor="prev2">PREVIEW 16:9</label>
                            <div className="icon-container-prev-2">
                                <Image className='prev' alt='prev' src={openInfoProductSide} width={500} height={150} />
                            </div>
                        </div>
                        <div className="item3"><label className='preview-label' htmlFor="prev3">PREVIEW 9:16</label>
                            <div className="icon-container-prev-3">
                                <Image className='prev' alt='prev' src={openInfoProductSide} width={140} height={300} />
                            </div>
                        </div>
                    </div>

                ) : (
                    <></>
                )
            }
            <ToastContainer />

        </div>
    )
}

export default PicturesGrid