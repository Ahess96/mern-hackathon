import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import * as ordersAPI from '../../utilities/orders-api'
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import { useState, useEffect } from 'react';

export default function OrderHistoryPage({ user, setUser }) {

//we have to grab the order from the database (json data) that comes from the controller
// UI → API Module → Server Route → Controller Action
//  ⬑ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ JSON Data ↲
// you're going to have an order state that is then set by a function that passes in the data 
  
const [pastOrders, setPastOrders] = useState([]);
const [activeOrder, setActiveOrder] = useState({pastOrders});

useEffect(function() {
  async function getPaidCartOrderHistory() {
    const orders = await ordersAPI.getOrder();
    setPastOrders(orders);
  }
  getPaidCartOrderHistory();
}, []);

// if ispaid is true show cart here

  
  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an OrderList component (needs to be coded), going to need order and user */}
      <OrderList activeOrder={activeOrder} setActiveOrder={setActiveOrder} pastOrders={pastOrders} user={user} />
      {/* Render the existing OrderDetail component, going to need order */}
      <OrderDetail pastOrders={pastOrders} />
    </main>
  );
}