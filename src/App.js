import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Rectro from "./menu";
import FoodCard from "./foodcard";
import Cart from "./cart";
import OrderData from "./order";
import OrdData from "./ord";
import Bill from "./bill";
//import MenuData from "./menudata";
const App = () => {
  const [clientname, setClientname] = useState("");
  const [restrodata, setRestroData] = useState({
    id: "",
    tableno: "",
  });
  const [MenuData, setMenuData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    axios
      .get(`http://localhost:3500/api/products`)
      .then(function (response) {
        console.log(response.data);
        setMenuData(response.data);
      });
  }
  const [orderstatus, setOrderstatus] = useState("pending");
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState("d-none");
  const AddCart = (e) => {
    const { value, checked } = e.target;
    if (value != "" && checked == true) {
      const isdata = cart.find((item) => item.id == value);
      if (isdata == undefined) {
        MenuData.filter((item) => {
          if (item._id == value) {
            setCart([
              ...cart,
              {
                id: item._id,
                title: item.name,
                mrp: item.mrp,
                price: item.price,
                img: item.imageUrl,
                restro_id: item.restroid,
                category: item.catid,
                qty: 1,
              },
            ]);
          }
        });
      }
    }
    if (value != "" && checked == false) {
      setCart(
        cart.filter((item) => {
          return item._id != value;
        })
      );
    }
    if (cart.length > 0) {
      setShow("");
    } else {
      setShow("d-none");
    }
    console.log(cart, "Cart");

  };
  const deleteCart = (e) => {
    const id = e.target.getAttribute("data-id");
    const newCart = cart.filter((item) => {
      return item.id != id;
    });
    setCart(newCart);
    console.log(cart);
  };
  useEffect(() => {
    if (cart.length > 0) {
      setShow("");
    }
    if (cart.length == 0) {
      setShow("d-none");
    }
  });
  const changeqty = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    if (value > 0) {
      const NewObj = cart.map((obj) => {
        if (obj.id == name) {
          return { ...obj, qty: value };
        }
        return obj;
      });
      console.log(NewObj);
      setCart(NewObj);
    }
  };
  const minus = (e) => {
    const id = e.target.name;
    const chdata = cart.filter((item) => {
      return item.id == id;
    });
    if (chdata[0].qty > 1) {
      const NewObj = cart.map((obj) => {
        if (obj.id == id) {
          return { ...obj, qty: chdata[0].qty - 1 };
        }
        return obj;
      });
      setCart(NewObj);
    }
  };
  const plus = (e) => {
    const id = e.target.name;
    const chdata = cart.filter((item) => {
      return item.id == id;
    });
    const NewObj = cart.map((obj) => {
      if (obj.id == id) {
        return { ...obj, qty: chdata[0].qty + 1 };
      }
      return obj;
    });
    setCart(NewObj);
  };
  const OnTable = () => {
    setOrderstatus("On Table");
  };
  const contoinue = (id, tableno) => {
    setRestroData({ id: id, tableno: tableno });
  };
  const handleClientName = (e) => {
    const value = e.target.value;
    setClientname(value);
  };
  const PlaceOrder = (restroid) => {
    const inputs = {
      clientname: clientname,
      restroid: restrodata.id,
      tableno: restrodata.tableno,
      status: orderstatus,
      products: cart,
    };
       axios.post('http://localhost:3500/api/carts', inputs, { headers: { 'Content-Type': 'application/json' } })
      .then(function (response) {
        window.localStorage.setItem('ordid', response.data._id);
        console.log(response, "cartresponse");
        if (
          localStorage.getItem('ordid') === response.data._id) {
          window.location.href = `/${restrodata.id}/${restrodata.tableno}/order`;
        }
      })
      .catch(function (error) {
        console.error('Error placing order:', error);
        // Handle the error as needed
      });
  };


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/:restroid/:tableno"
            element={
              <Rectro
                FoodCard={FoodCard}
                cart={cart}
                AddCart={AddCart}
                show={show}
                contoinue={contoinue}
              />
            }
          />
          <Route
            path="/:restroid/:tableno/cart"
            element={
              <Cart
                cart={cart}
                changeqty={changeqty}
                deleteCart={deleteCart}
                minus={minus}
                plus={plus}
                show={show}
                restrodata={restrodata}
                PlaceOrder={PlaceOrder}
                clientname={clientname}
                handleClientName={handleClientName}
              />
            }
          />
          <Route
            path="/:restroid/:tableno/ord"
            element={<OrderData cart={cart} />}
          />
          <Route path="/:restroid/:tableno/order" element={<OrdData />} />
          <Route path="/bill" element={<Bill />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
