import React from 'react'
import OrderListItem from '../OrderListItem/OrderListItem'

export default function OrderList({pastOrders, activeOrder, setActiveOrder}) {
  console.log(pastOrders, 'pastOrders in orderList')
  console.log(activeOrder, 'activeOrder in orderList')
  return (
    <div className='MenuList'>
      {pastOrders.map((pastOrder, idx) =>
      <div className={pastOrder.id === activeOrder ? 'active' : ''}
      onClick={() => 
      setActiveOrder(pastOrder.id)
      }>
      <OrderListItem pastOrder={pastOrder} key={idx}/>
      </div>)}
    </div>
  )
}
