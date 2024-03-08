import React from "react";
import "./Header.css";
import {
  UilArrow,
  UilCube,
  UilDocumentInfo,
  UilBriefcase,
  UilGraduationCap,
  UilBracketsCurly,
  UilMoon,
} from "@iconscout/react-unicons";
const Header = () => {
  return (
    <div className="header-container flex space-between">
      <a className="item flex center">
        <UilArrow size="35" />

        <h3>AHMAD SHAMOUKA</h3>
      </a>
      <div className="item-header flex space-between">
        <a className="item flex center">
          <UilBracketsCurly size="25" />

          <span>Skills</span>
        </a>
        <a className="item flex center">
          <UilCube size="25" />

          <span>Projects</span>
        </a>
        <a className="item flex center">
          <UilBriefcase size="25" />

          <span>Expirence</span>
        </a>
        <a className="item flex center">
          <UilGraduationCap size="25" />

          <span>Education</span>
        </a>
        <a className="item flex center">
          <UilDocumentInfo size="25" />

          <span>Résumé</span>
        </a>
      </div>
      <div className="item flex center">
        <UilMoon />
      </div>
    </div>
  );
};

export default Header;
