import supabase from '@/lib/supabaseClient';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './index.css'
import { toast, ToastContainer } from 'react-toastify';
import Loader from '@/app/components/loader';
import 'react-toastify/dist/ReactToastify.css';

const Uploader = ({ onUpload = null }: any) => {
    const [images, setImages] = useState<File[]>([]);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImages(Array.from(e.target.files));
        }
    };
    const uploadImage = async () => {
        try {
            setUploading(true);
            for (const image of images) {
                const fileName = `${Date.now()}_${image.name}`;
                const { data, error } = await supabase.storage
                    .from('pictures')
                    .upload(fileName, image);

                if (error) {
                    throw error;
                }

                const { publicUrl } = supabase.storage
                    .from('pictures')
                    .getPublicUrl(fileName).data;

                if (!publicUrl) {
                    throw new Error('Error getting public URL');
                }
            }
            toast.success("Images uploaded successfully", {
                position: "top-center"
            });
            onUpload && onUpload()
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Error uploading image', {
                position: "top-center"
            });
        } finally {
            setImages([])
            setUploading(false);
        }
    };
    useEffect(() => {
        images.length && uploadImage()
    }, [images])

    return (
        <div tabIndex={0} className="item">
            {
                uploading && (<Loader />)
            }
            <div className="file-select icon-container">
                <input type="file" multiple accept="image/*" onChange={(e) => handleFileChange(e)} disabled={uploading} />
                <Image className='icon-trash' alt='trash' src={'/common/add.svg'} width={20} height={20} />
            </div>
            <ToastContainer containerId={"upload-request"} />
        </div>
    )
}

export default Uploader