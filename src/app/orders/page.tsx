'use client'
import React, { useEffect } from 'react'
import './index.css'
import OrderTable from './components/order-table'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Loader from '../components/loader';

const Orders = () => {
    const { user } = useAuth();
    const { push } = useRouter();

    useEffect(() => {
        if (!user) {
            push('/login');
        }
    }, [user]);

    if (!user) {
        return <Loader />;
    }
    return (
        <div className='container-order'>
            <h1>Orders</h1>
            <OrderTable />
        </div>
    )
}

export default Orders