// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../components/shopcontext.jsx";
import axios from "axios";
import CartItems from "../components/cartitem.jsx";

const Cart = () => {
  // const { getTotalCartAmount, getTotalCartProducts, clearCart, cartItems } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const totalAmount = getTotalCartAmount();
  // const totalProducts = getTotalCartProducts();

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8787/cart/items"); // Replace with your backend API endpoint
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleClearCart = async () => {
    try {
      await axios.delete("http://localhost:8787/cart/clear"); // Replace with your backend API endpoint
      // Clear cart items locally after successful deletion
      clearCart();
      setProducts([]); // Clear cart products displayed in UI
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
      <>
        {totalAmount > 0 ? (
            <section className="cart-item p-5">
              <div className="container-xxl">
                <div className="row">
                  <table>
                    <thead className="my-2">
                    <tr>
                      <th className="col-3">Product Image</th>
                      <th className="col-3">Product Details</th>
                      <th className="col-3">Edit</th>
                      <th className="col-3">Coupons</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <CartItems key={product.id} data={product} />
                    ))}
                    </tbody>
                  </table>
                  <div className="mb-3 text-center p-3">
                    <button onClick={handleClearCart}>Clear cart</button>
                  </div>
                </div>
              </div>
              <hr />

              <div className="mt-4 p-3 cart-total d-flex justify-content-between">
                <div>
                  <button>Continue Shopping</button>
                </div>
                <div>
                  <h3>Total</h3>
                  <p className="my-2">
                    Total Products: <span className="price"><b>{totalProducts}</b></span>
                  </p>
                  <p className="price mb-4"><b>${totalAmount}</b></p>
                  <button>Check Out</button>
                </div>
              </div>
            </section>
        ) : (
            <section className="p-3">
              <div className="container-xxl">
                <div className="row">
                  <div className="text-center">
                    <h3>Your Cart Is Empty</h3>
                    <p>Click <Link to={"/shop"}>here</Link> to add items</p>
                  </div>
                </div>
              </div>
            </section>
        )}
      </>
  );
};

export default Cart;
