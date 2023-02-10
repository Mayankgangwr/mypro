import React, { useState } from "react";
import "./banner.css";
const Banner = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          width: "100%",
          marginTop: "55px",
          background: "linear-gradient(110deg, #fdcd3b 36%, #ffed4b 36%)",
        }}
      >
        <div className="row">
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
        <div className="row mb-3 ">
          <div className="col-12 mt-3 mb-2">
            <h3 className="text-center">Our Services</h3>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
            <div
              className="card"
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
                You can get our all order on your onw dashbord fron direct table
                by OR
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
            <div
              className="card"
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
                You can get our all order on your onw dashbord fron direct table
                by OR
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
            <div
              className="card"
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
                You can get our all order on your onw dashbord fron direct table
                by OR
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
            <div
              className="card"
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
                You can get our all order on your onw dashbord fron direct table
                by OR
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
            <div
              className="card"
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
                You can get our all order on your onw dashbord fron direct table
                by OR
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-4">
            <div
              className="card"
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
                You can get our all order on your onw dashbord fron direct table
                by OR
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
