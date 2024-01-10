import React, { useState } from "react";
import "./index.css";
import DatePicker from "react-datepicker";

import { FaCalendarAlt } from "react-icons/fa";

function Topbar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  const toggleDatePicker = () => {
    setDatePickerOpen(!isDatePickerOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDatePickerOpen(false);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="greeting">
          <img
            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.1.2002628386.1688888353&semt=ais"
            className="person-image"
            alt="person"
          />
          <div className="text-container">
            <h1>Good Morning Oguz</h1>
            <p1>Here are your stats for Today, 24 Aug 2020</p1>
          </div>
        </div>
        <div>
          <div
            onClick={toggleDatePicker}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              boxShadow: "0px 0px 10px 0px lightgray",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <FaCalendarAlt style={{ marginRight: "5px", color: "blue" }} />
            <p style={{ margin: "0" }}>Today</p>
          </div>

          {isDatePickerOpen && (
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
          )}
        </div>
        <div>
          <p1>Comapred To</p1>
        </div>
        <div>
          <select name="cars" id="cars" className="pr-container">
            <option value="Previous Period">Previous Period</option>
            <option value="Last Period">Last Period</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
