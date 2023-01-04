import React, { useEffect, useState } from "react";
import "./menu.css";
import { useCookies } from "react-cookie";

const OrderData = ({ cart, show }) => {
  const [orderstatus, setOrderstatus] = useState("Preparing");
  const [cookies, setCookie] = useCookies(["user"]);
  
  if (!cookies.user) {
    setCookie("user", [{ data: cart, status: "Preparing" }]);
  }
  const amount = cookies.user[0].data.reduce((total, item) => {
    return total + parseInt(item.qty) * parseInt(item.price);
  }, 0);
  return (
    <>
      <section className="main">
        <div className="container-fluid">
          <h1
            className="text-center mt-3"
            style={{
              fontFamily: "Aclonica",
              textShadow: "1.2px 2px 3px #6c6767",
              color: "#d82643",
            }}
          >
            MY ORDER
          </h1>

          <hr />
          <div className="row">
            {cookies.user &&
              cookies.user[0].data.map(
                ({ id, img, qty, title, mrp, price }) => (
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
                )
              )}

            <div className={`col-12 ${show} mt-3`}>
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between py-3">
                  <h5 className="mb-0">Summary</h5>
                  <h6 className="text-danger pt-1 mb-0">{orderstatus}</h6>
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
                  <button
                    onClick={() => {
                      setOrderstatus("On Table");
                    }}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Order On Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OrderData;
