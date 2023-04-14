import './OrderDetail.css';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout, pastOrders }) {
  if (!order) return null;
  // console.log(order, 'orders in orderDetail');

  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={item.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  const orderItems = pastOrders.map(item =>
    <LineItem
      lineItem={item}
      isPaid={item.isPaid}
      key={item._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">Hungry?</div>
        }
        <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {orderItems.length ?
          <>
            <h2>Past Orders</h2>
            {orderItems}
          </>
          :
          <div className="no-past-orders">No past orders found</div>
        }
      </div>
        {pastOrders}
      </div>
    </div>
  );
}