import React from "react";
import { BsBox, BsChatSquareText } from "react-icons/bs";
import { AiTwotoneInteraction } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import { MdOutlineLiveHelp } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";
import { FaSquarePollVertical } from "react-icons/fa6";
import { VscSymbolInterface } from "react-icons/vsc";
import "./index.css";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img
            src="https://gdurl.com/QGTg"
            alt="Blue-receipt"
            className="blue-logo-image"
          />

          <input
            type="search"
            placeholder="Search..."
            className="search-inputt"
          />
          <CiSearch className="search-icon" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="" className="blue-background-container">
            <RiHome2Fill className="icon active blue-icon" />{" "}
            <span>Dashboard</span>
          </a>
        </li>
        <hr />
        <li className="sidebar-list-item">
          <a href="" className="conver">
            <BsBox className="icon box" /> Conversations
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <AiTwotoneInteraction className="icon" /> Automations
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaSquarePollVertical className="icon-4" /> Campaigns
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <TbMessages className="icon" /> Popup
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsChatSquareText className="icon" /> Live Chat
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineLiveHelp className="icon" /> Segments
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <VscSymbolInterface className="icon" /> Integrations
          </a>
        </li>
      </ul>

      <div className="sidebarBottom">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropButton active"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="itemName">
              <img
                className="profileImg"
                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.1.2002628386.1688888353&semt=ais"
                alt=""
              />
              <div className="profiledetails">
                <div className="profileName">Oguz yagiz Kara</div>
                <p2 className="profilePosition">Store Name </p2>
              </div>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
