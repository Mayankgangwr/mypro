import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./bill.css";
const Bill = () => {
  const [billdata, setBilldata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getOrdBill();
  }, []);
  function getOrdBill() {
    //const restroid = localStorage.getItem("restroid");
    axios
      .get(
        `https://sattasafari.com/restro/order/single.php?ordid=${localStorage.getItem(
          "ordid"
        )}`
      )
      .then(function (response) {
        console.log(response.data[0]);
        setBilldata(response.data);
      });
  }
  const printReceipt = () => {
    window.print();
    // console.log("printed");
  };

  return (
    <>
      <main class="mainbillclass">
        <div className="container-fluid">
          <div className="row">
            {billdata.length == 1 &&
              billdata.map((el) => (
                <div key={el.id} className="main-bill ms-auto me-auto">
                  <h6 className="card-title text-center text-danger mt-1">
                    {el.restro_name}
                  </h6>
                  <hr />
                  <div className="card-header ms-1 px-3 mt-4 pb-0">
                    <div className="d-flex justify-content-between mt-2">
                      <h6 className="card-title text-center text-warning my-2">
                        {el.client_name}
                      </h6>
                      <h6 className="card-title text-primary my-2">
                        {el.date}
                      </h6>
                    </div>
                  </div>
                  <div className="card-body py-2 mb-2">
                    <table>
                      <thead>
                        <tr>
                          <td className="px-3">
                            <b>Name</b>
                          </td>
                          <td className="px-3">
                            <b>Qty</b>
                          </td>
                          <td className="px-3">
                            <b>Price</b>
                          </td>
                          <td className="px-3">
                            <b>Total</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {JSON.parse(el.products).map((item) => (
                          <tr key={item.id}>
                            <td className="px-3">{item.title}</td>
                            <td className="px-3">{item.qty}</td>
                            <td className="px-3">{item.price}</td>
                            <td className="px-3">{item.qty * item.price}</td>
                          </tr>
                        ))}
                        <hr />
                        <tr className="my-2">
                          <td className="px-3">
                            <b>Qty</b>
                          </td>
                          <td className="px-3">
                            <b>
                              {JSON.parse(el.products).reduce((total, item) => {
                                return total + item.qty;
                              }, 0)}
                            </b>
                          </td>
                          <td className="px-3">
                            <b>Amount</b>
                          </td>
                          <td className="px-3">
                            <b>
                              {JSON.parse(el.products).reduce((total, item) => {
                                return total + item.qty * item.price;
                              }, 0)}
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <button
                      class="btn btn-info hide-on-print"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </button>
                    <button
                      class="btn btn-primary hide-on-print"
                      onClick={printReceipt}
                    >
                      Print
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default Bill;
