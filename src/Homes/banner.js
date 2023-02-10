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
          <div className="col-md-5 col-sm-5 col-12 text-center px-lg-5 px-md-5 px-sm-4 px-2 banner-text-position">
            <h2
              class="mb-4 mt-5"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              India's First Free POS, Billing Software for Restraurent with QR
              Menu Ordering System
            </h2>
            <p
              style={{ fontSize: "16px" }}
              class="mb-4 mb-md-5 sub-p"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Everything you get what you need for your Restraurent like your
              own website, OR Menu Ordering Management etc.
            </p>
          </div>
          <div className="col-md-7 col-sm-7 col-12">
            <img
              src="https://preview.colorlib.com/theme/webhost/images/dashboard_full_1.png.webp"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
