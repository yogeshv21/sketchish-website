"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";

const ServicePageNevigation = () => {
  const [path, setPath] = useState();

// //   const fullPath = window.location.hash;

//   function getValueAfterHash() {
//     const hashValue = fullPath.substring(1);
//     setPath(hashValue);
//   }

//   // Usage
//   const hashValue = getValueAfterHash();
//   console.log("Value after #:", hashValue);

//   useEffect(() => {
//     getValueAfterHash();
//   }, [fullPath]);

  return (
    <div className={Styles.navigation}>
      <Link href={"#digital-product-design"} className={path == "digital-product-design" ? Styles.active : ''}>Digital Product Design</Link>
      <Link href={"#software-engineering"} className={path == "software-engineering" ? Styles.active : ""}>Software Engineering</Link>
      <Link href={"#quality-engineering"} className={path == "quality-engineering" ? Styles.active : ""}>Quality Engineering</Link>
      <Link href={"#branding"} className={path == "branding" ? Styles.active : ""}>Branding</Link>
      <Link href={"#digital-marketing"} className={path == "digital-marketing" ? Styles.active : ""}>Digital Marketing</Link>
    </div>
  );
};

export default ServicePageNevigation;
