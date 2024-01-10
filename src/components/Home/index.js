import React from "react";
import VerticalLine from "../VerticalLine";
import "./index.css";
import Earning from "../Earning";
import Products from "../Products";
import Topbar from "../Topbar";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <Topbar />
      </div>
      <div className="main-cards">
        <div className="det-container">
          <div className="percentage-container">
            <h6 className="ear">
              Total Revenue <span className="rev-per">+12.5%</span>
            </h6>
          </div>
          <h3 className="dol">$32,671.72</h3>
          <div className="arr-container">
            <p4 className="orders-text">433 Orders</p4>
          </div>
        </div>
        <VerticalLine />
        <div className="det-container1">
          <h6 className="ear">
            Subscriptions <span className="rev-per">+32.5%</span>
          </h6>
          <h3 className="dol">484,205</h3>
          <div className="arr-container">
            <p4 className="orders-text">$56 Average Order</p4>
          </div>
        </div>
        <VerticalLine />
        <div className="det-container2">
          <h6 className="ear">
            Conversations <span className="rev-per-red">-3.5%</span>
          </h6>
          <h3 className="dol">552,503</h3>
          <div className="arr-container">
            <p4 className="orders-text">5min Average Response Time</p4>
          </div>
        </div>
        <VerticalLine />
        <div className="det-container3">
          <h6 className="ear">
            Popup Conversion Time<span className="rev-per">+32.5%</span>
          </h6>
          <h3 className="dol">25%</h3>
          <div className="arr-container">
            <p4 className="orders-text">5% Sales Conversion Rate</p4>
          </div>
        </div>
        <VerticalLine />
      </div>

      <div className="charts">
        <Earning />
      </div>
      <div className="pr-con">
        <Products className="pa" />
      </div>
      <br />
    </main>
  );
}

export default Home;
