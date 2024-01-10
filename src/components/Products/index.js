import React, { useState } from "react";
import "./index.css";
import { RiShoppingCartFill } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import GaugeChart from "react-gauge-chart";

function Products() {
  const [selectedOption, setSelectedOption] = useState("30days");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="productWrapper">
      <div className="productTop">
        <div className="productHeading">Automations</div>
        <hr />
        <div className="productHeading2">Campiagns</div>
        <div className="productHeading3">Segments</div>
        <div className="productFilter">
          <div className="dropdownList">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="selectList"
            >
              <option value={"3days"}>Next Month</option>
              <option value={"7days"}>This Month</option>
              <option value={"30days"}>Last Month</option>
            </select>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <table className="productTable">
          <tbody>
            <tr>
              <td>
                <div className="productNameContainer">
                  <div className="ProductImgContainer">
                    <RiShoppingCartFill size={25} />
                  </div>
                  <div className="nameContainer">
                    <div className="productName1">
                      Abandoned Cart 7 Days
                      <BiRightArrowAlt className="right-arrow" />
                    </div>
                    <div className="productDesc">4024 Sent | 124 Clicks</div>
                  </div>
                </div>
              </td>
              <div className="st-container">
                <td className="st-head">$5,321</td>
                <td className="st-text">41 Orders | $150 AOV</td>
              </div>
            </tr>
            <tr>
              <td>
                <div className="productNameContainer">
                  <div className="ProductImgContainer">
                    <RiShoppingCartFill size={25} />
                  </div>
                  <div className="nameContainer">
                    <div className="productName">Abandoned Cart 15 Days</div>
                    <div className="productDesc">4024 Sent | 124 Clicks</div>
                  </div>
                </div>
              </td>
              <div className="st-container">
                <td className="st-head">$5,321</td>
                <td className="st-text">41 Orders | $150 AOV</td>
              </div>
            </tr>
            <tr>
              <td>
                <div className="productNameContainer">
                  <div className="ProductImgContainer">
                    <RiShoppingCartFill size={25} />
                  </div>
                  <div className="nameContainer">
                    <div className="productName">Abandoned Cart 15 Days</div>
                    <div className="productDesc">4024 Sent | 124 Clicks</div>
                  </div>
                </div>
              </td>
              <div className="st-container">
                <td className="st-head">$5,321</td>
                <td className="st-text">41 Orders | $150 AOV</td>
              </div>
              <td>
                <div className="gaugeChartContainer">
                  <div className="gauge-text">
                    <div className="level">
                      Level 5
                      <BiRightArrowAlt className="right-arrow" />
                    </div>
                    <div className="monthlyChange">
                      +$32,050 in the last month
                    </div>
                  </div>
                  <div className="gauge-chart">
                    <GaugeChart
                      id="gauge-chart"
                      percent={0.8}
                      textColor="#000000"
                      needleColor="#1E90FF"
                      needleBaseColor="#1E90FF"
                      fontSize="16px"
                      colors={["#1E90FF", "#E0E0E0"]}
                      hideText
                      arcsLength={[0.8, 0.2]}
                      arcPadding={0.02}
                      cornerRadius={0.2}
                    />
                  </div>
                  <div>
                    <p6 className="fifty-text">$50k</p6>
                    <p6 className="hundred-text">$100k</p6>
                  </div>
                  <h6 className="money-text">$14,495</h6>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
