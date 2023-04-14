import React from 'react'
import './OrderListItem.css'

export default function OrderListItem({pastOrder, activeOrder, setActiveOrder}) {
  console.log(pastOrder, 'pastOrder in orderListItem')
  return (
    <div className='MenuListItem'>
        <ul>
            <li>ID: {pastOrder.orderId}</li> 
            <li>{pastOrder.updatedAt}</li> 
            <li>{pastOrder.totalQty} Items</li> 
            <li>Total: ${pastOrder.orderTotal}</li>
        </ul>
    </div>
  )
}
