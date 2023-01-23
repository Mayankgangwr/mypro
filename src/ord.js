import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./menu.css";
const OrdData = () => {
  const [orderdatas, setOrderdatas] = useState("");
  const [cartdatas, setCartdatas] = useState("");
  const navigate = useNavigate();
  if (localStorage.getItem("orddata") == "") {
    navigate("/");
  } else {
    useEffect(() => {
      getOrds();
    }, []);
  }
  function getOrds() {
    axios
      .get(
        `https://sattasafari.com/restro/ordread.php?ordid=${localStorage.getItem(
          "ordid"
        )}`
      )
      .then(function (response) {
        if (
          localStorage.getItem("orddata") == "" ||
          localStorage.getItem("orddata") !== response.data.products
        ) {
          navigate("/");
        } else {
          setOrderdatas(response.data);
          setCartdatas(JSON.parse(response.data.products));
        }
      });
  }

  const cart = JSON.parse(localStorage.getItem("orddata"));
  const amount = cart.reduce((total, item) => {
    return total + parseInt(item.qty) * parseInt(item.price);
  }, 0);
  const updateord = (id) => {
    const productdata = {
      productid: id,
      productstatus: "On Table",
    };
    if (productdata.productstatus !== "") {
      axios
        .post("https://sattasafari.com/restro/order/update.php", productdata)
        .then(function (response) {
          getOrds();
        });
    }
  };
  return (
    <>
      <nav key="1" className={`navbar  navbar-expand nav-bg`}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <div className="text-center me-auto">
              <img
                src="/images/logo.png"
                height="40"
                alt="MDB Logo"
                loading="lazy"
              />
            </div>
            <h1 className="me-auto mb-0  text-style">MY ORDER</h1>
          </div>
        </div>
      </nav>
      <section className="main">
        <div className="container-fluid">
          <hr />
          <div className="row">
            {cart.map(({ id, img, qty, title, mrp, price }) => (
              <div
                key={id}
                className="col-xl-3 card-item col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 mt-3"
              >
                <div className="card">
                  <div className="card-body p-2">
                    <div className="d-flex text-black p-0">
                      <img
                        src={img}
                        alt="Generic placeholder image"
                        className="item-logo"
                      />
                      <div className="row ps-3">
                        <div className="col-12">
                          <h6 className="text-start">{title}</h6>
                        </div>
                        <div className="col-6">
                          <span className="price sale-price pe-2">
                            ${price}
                          </span>
                          <span className="price mrp">${mrp}</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="pe-2">Qty: {qty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className={`col-12 mt-3`}>
              <div className="card mb-4">
                <div className="card-header">
                  <div className=" d-flex justify-content-center">
                    <h5 className="mb-0 text-decoration-underline">Summary</h5>
                  </div>
                  <div className=" d-flex justify-content-between pt-2 pb-1">
                    <h6 className="text-success pt-1 mb-0">
                      {orderdatas.date}
                    </h6>
                    <h6 className="text-danger pt-1 mb-0">
                      {orderdatas.status}
                    </h6>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${(amount * 82) / 100}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      GST(18%)
                      <span>${(amount * 18) / 100}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${amount}</strong>
                      </span>
                    </li>
                  </ul>
                  {orderdatas.status !== "On Table" && (
                    <button
                      onClick={() => updateord(orderdatas.id)}
                      className="btn btn-primary btn-lg btn-block mb-3"
                    >
                      Order On Table
                    </button>
                  )}
                  {orderdatas.status === "On Table" && (
                    <button
                      onClick={() => updateord(orderdatas.id)}
                      className="btn btn-primary btn-lg btn-block mb-3"
                    >
                      Get Invoice
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OrdData;
