import React from "react";
import styles from "../styles/navbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav>
      <div className={styles.navChild1}>
        <p>All your favourite boAt products at heavy bargains.Shop NOW!</p>
      </div>
      <div className={styles.navChild2}>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229"
            alt=""
          />
        </div>
        <div>
          <p>Shop <FiChevronDown/> </p>
          <p>Daily Deals</p>
          <p>Offer Zone</p>
          <p>More <FiChevronDown /></p>
          <p>boAt FloAtverse</p>
        </div>
        <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." />
            <FaUser style={{fontSize:"20px"}}/>
            <MdOutlineCardGiftcard style={{fontSize:"20px"}}/>
            <BsFillCartFill style={{fontSize:"18px"}}/>
        </div>
      </div>
    </nav>
  );
};
