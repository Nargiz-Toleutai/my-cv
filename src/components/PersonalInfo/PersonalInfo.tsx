import block from "bem-cn-lite";
import React from "react";
import MyPhoto from "../../assets/images/my-photo.jpeg";
import "./PersonalInfo.scss";
import { Introduction } from "./Introduction/Introduction";

const b = block("about-me");

export const PersonalInfo: React.FC = () => {
  return (
    <div className={b()}>
      <img className={b("my-photo")} src={MyPhoto} alt="my-profile-ph" />
      <Introduction />
    </div>
  );
};

/*

*/
