import React from 'react'
import './index.css'
import OrderTable from './components/order-table'
const Orders = () => {
    return (
        <div className='container-order'>
            <h1>Orders</h1>
            <OrderTable />
        </div>
    )
}

export default Orders