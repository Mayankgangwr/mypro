import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./menu.css";
const OrdData = () => {
  const [orderdatas, setOrderdatas] = useState({
    clientname: "Sdfsd",
    restroid: "1",
    tableno: 2,
    status: "pending"
  });
  const [cartdatas, setCartdatas] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getOrds();
    // if (localStorage.getItem("orddata") === "") {
    //   navigate(-1);
    //   //console.log("no data");
    // }
  }, [1]);
  function getOrds() {
    const oid = localStorage.getItem("ordid");
    axios
      .get(`http://localhost:3500/api/carts/${localStorage.getItem("ordid")}`)
      .then(function (response) {
        if (
          localStorage.getItem("ordid") == ""
        ) {
          navigate(`/${params.restroid}/${params.tableno}`);
        } else {
          setOrderdatas(response.data);
          setCartdatas(response.data.products);
        }
      });
  }
  const updateord = (cartId, updatedCartData) => {
    console.log(orderdatas, "Cartupdate");
    axios
      .put(`http://localhost:3500/api/carts/${cartId}`, orderdatas)
      .then(function (response) {
        console.log('Cart updated successfully:', response.data);
        getOrds();
      })
      .catch(function (error) {
        console.error('Error updating cart:', error);
      });
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
            {cartdatas && cartdatas.map(({ id, img, qty, title, mrp, price }) => (
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

            {cartdatas && (<div className={`col-12 mt-3`}>
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
                      <span>${((cartdatas.reduce((total, item) => {
                        return total + parseInt(item.qty) * parseInt(item.price);
                      }, 0)) * 82) / 100}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      GST(18%)
                      <span>${((cartdatas.reduce((total, item) => {
                        return total + parseInt(item.qty) * parseInt(item.price);
                      }, 0)) * 18) / 100}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${(cartdatas.reduce((total, item) => {
                          return total + parseInt(item.qty) * parseInt(item.price);
                        }, 0))}</strong>
                      </span>
                    </li>
                  </ul>
                  {orderdatas.status !== "ontable" && (
                    <button
                      onClick={() => {
                        setOrderdatas((prevOrderdatas) => {
                          return { ...prevOrderdatas, status: "ontable" };
                        }, () => {
                          updateord(orderdatas._id);
                        });
                      }}
                      className="btn btn-primary btn-lg btn-block mb-3"
                    >
                      Order On Table
                    </button>
                  )}
                  {orderdatas.status === "ontable" && (
                    <button
                      onClick={() => navigate(`/bill`)}
                      className="btn btn-info btn-lg btn-block mb-3"
                    >
                      Get Invoice
                    </button>
                  )}
                </div>
              </div>
            </div>)}

          </div>
        </div>
      </section>
    </>
  );
};
export default OrdData;

