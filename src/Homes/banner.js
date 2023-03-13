import React, { useState } from "react";
import "./banner.css";
const Banner = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [fm, setFm] = useState({
    name: "",
    mobile: "",
    address: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFm({ ...fm, [name]: value });
  };
  const handleSubmit =  (e) => {
    e.preventDefault();
    
    if
    
  };


  return (
    <>
      <div
        className="container-fluid pb-5 main-section"
        style={{
          width: "100%",
        }}
      >
        <div className="row main-section1">
          <div className="col-lg-5 col-md-6 col-sm-6 col-12 text-center px-lg-5 px-md-5 px-sm-4 px-2 banner-text-position">
            <h2
              class="mb-4 mt-5"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              India's First Free POS, Billing Software for Restraurent with QR
              Menu Ordering System
            </h2>
            <p
              style={{ fontSize: "18px", fontWeight: "500" }}
              class="mb-4 mb-md-5 sub-p"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Everything you get what you need for your Restraurent like your
              own website, OR Menu Ordering Management etc.
            </p>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6 col-12 pb-3">
            <img
              className="mt-4"
              src="https://preview.colorlib.com/theme/webhost/images/dashboard_full_1.png.webp"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row main-section2">
          <div className="col-12 mt-3">
            <h3 className="text-center">Our Services</h3>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div
              className="card card-height"
              style={{
                background:
                  "-webkit-linear-gradient(45deg, #fb83b5 0%, #9a51ff 100%)",
              }}
            >
              <button
                type="button"
                className="mx-auto my-3 py-4 btn btn-lg btn-floating"
                style={{
                  width: "130px",
                  height: "130px",
                  background: "#9a51ff",
                }}
              >
                <img
                  className="mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/4160/4160952.png"
                  style={{ width: "67%" }}
                />
              </button>

              <h3 className="text-center">QR Order</h3>
              <p className="text-center px-3">
                You can get our all order on your onw dashboard fron direct
                table by OR
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div
              className="card card-height"
              style={{
                background:
                  "-webkit-linear-gradient(45deg, #fb83b5 0%, #9a51ff 100%)",
              }}
            >
              <button
                type="button"
                className="mx-auto my-3 py-4 btn btn-lg btn-floating"
                style={{
                  width: "130px",
                  height: "130px",
                  background: "#9a51ff",
                }}
              >
                <img
                  className="mx-auto"
                  src="./images/printer.png"
                  style={{ width: "67%" }}
                />
              </button>
              <h3 className="text-center">Billing Software</h3>
              <p className="text-center px-3">
                You can Print all orders bill on a single Click on bill button
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div
              className="card card-height"
              style={{
                background:
                  "-webkit-linear-gradient(45deg, #fb83b5 0%, #9a51ff 100%)",
              }}
            >
              <button
                type="button"
                className="mx-auto my-3 py-4 btn btn-lg btn-floating"
                style={{
                  width: "130px",
                  height: "130px",
                  background: "#9a51ff",
                }}
              >
                <img
                  className="mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/2584/2584894.png"
                  style={{ width: "67%" }}
                />
              </button>
              <h3 className="text-center">PDF Invoice</h3>
              <p className="text-center px-3">
                Customers can save bill in their mobile by Click on get Invoice
                button
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div
              className="card card-height"
              style={{
                background:
                  "-webkit-linear-gradient(45deg, #fb83b5 0%, #9a51ff 100%)",
              }}
            >
              <button
                type="button"
                className="mx-auto my-3 py-4 btn btn-lg btn-floating"
                style={{
                  width: "130px",
                  height: "130px",
                  background: "#9a51ff",
                }}
              >
                <img
                  className="mx-auto"
                  src="https://icon-library.com/images/waiter-icon-png/waiter-icon-png-4.jpg"
                  style={{ width: "67%" }}
                />
              </button>

              <h3 className="text-center">Order Tracking</h3>
              <p className="text-center px-3">
                Customers can tracker their order from their phones
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div
              className="card card-height"
              style={{
                background:
                  "-webkit-linear-gradient(45deg, #fb83b5 0%, #9a51ff 100%)",
              }}
            >
              <button
                type="button"
                className="mx-auto my-3 py-4 btn btn-lg btn-floating"
                style={{
                  width: "130px",
                  height: "130px",
                  background: "#9a51ff",
                }}
              >
                <img
                  className="mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/1389/1389181.png"
                  style={{ width: "67%" }}
                />
              </button>

              <h3 className="text-center">Analysis Orders</h3>
              <p className="text-center px-3">
                You can check daily orders and compair by last day on your onw
                dashboard
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div
              className="card card-height"
              style={{
                background:
                  "-webkit-linear-gradient(45deg, #fb83b5 0%, #9a51ff 100%)",
              }}
            >
              <button
                type="button"
                className="mx-auto my-3 py-4 btn btn-lg btn-floating"
                style={{
                  width: "130px",
                  height: "130px",
                  background: "#9a51ff",
                }}
              >
                <img
                  className="mx-auto"
                  src="https://freesvg.org/img/simplefastfoodicon.png"
                  style={{ width: "67%" }}
                />
              </button>

              <h3 className="text-center">Manage Menu</h3>
              <p className="text-center px-3">
                You can Manage your dynamically on your onw dashbaord
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <h3 className="text-center">Contact Us</h3>
          </div>
          <div className="col-md-6 col-12 mt-2">
            <div
              className="card"
              style={{
                background:
                  "linear-gradient(0.25turn, rgb(132 181 202), rgb(190 204 180), rgb(231 169 102))",
              }}
            >
              <h5 className="text-center mt-4">Contact Details</h5>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <p className="px-1">
                    <b>Address:</b>
                  </p>
                  <p>Vill. Mekpur kalan Bhuta Bareilly U.P India 243503</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <p className="px-1">
                    <b>Email:</b>
                  </p>
                  <p>
                    iammayankgangwarbly@gmail.com
                    <br />
                    {`info.myrestro.co.in`}
                  </p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <p className="px-1">
                    <b>Mobile:</b>
                  </p>
                  <p>+91 8755507582,+91 7017550758</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 mt-2">
            <div
              className="card"
              style={{
                background:
                  "linear-gradient(0.25turn, rgb(132 181 202), rgb(190 204 180), rgb(231 169 102))",
              }}
            >
              <h3 className="text-center mt-4">Demo</h3>
              <form className="mx-5" onSubmit={handleSubmit}>
                <div className="rounded bg-light mb-4">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={fm.name}
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="rounded bg-light mb-4">
                  <input
                    type="text"
                    name="mobile"
                    onChange={handleChange}
                    value={fm.mobile}
                    className="form-control"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="rounded bg-light mb-4">
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={fm.address}
                    className="form-control"
                    placeholder="Enter Address"
                  />
                </div>
                <div className="rounded bg-light mb-4">
                  <textarea
                    name="message"
                    onChange={handleChange}
                    value={fm.message}
                    className="form-control"
                    placeholder="Write Message"
                  ></textarea>
                </div>
                <div className="rounded bg-light mb-4">
                  <button type="submit" className="btn btn-primary w-100">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*<div className="row">
          <div className="col-12 mt-5">
            <h3 className="text-center">Cities Where Our Client</h3>
          </div>
          {arr.map((el) => {
            return (
              <>
                <div className="col10">
                  <button className="btn btn-primary px-1 w-100">
                    Bareilly
                  </button>
                </div>
                <div className="col10">
                  <button className="btn btn-primary px-1 w-100">
                    Bareilly
                  </button>
                </div>
                <div className="col10">
                  <button className="btn btn-primary px-1 w-100">
                    Bareilly
                  </button>
                </div>
              </>
            );
          })}
        </div>
        */}
        <div className="row">
          <div className="col-12 mt-5">
            <h3 className="text-center">Our Client's Websites</h3>
          </div>
          {arr.map((el) => {
            return (
              <>
                <div className="col10">
                  <button className="btn btn-primary px-1 w-100">
                    Apna Restro
                  </button>
                </div>
                <div className="col10">
                  <button className="btn btn-primary px-1 w-100">
                    Bro-Code
                  </button>
                </div>
                <div className="col10">
                  <button className="btn btn-primary px-1 w-100">
                    Holly Molly
                  </button>
                </div>
                <div className="col10">
                  <button className="btn btn-primary px-1 w-100">Chaska</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Banner;
