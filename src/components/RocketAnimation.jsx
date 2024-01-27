import React from "react";
import "./rocket.css";
export const RocketAnimation = ({ rocketUdd }) => {
  return (
    <div className="h-screen w-screen absolute justify-center top-0 z-2 flex items-center ">
      <Basic rocketUdd={rocketUdd} />
    </div>
  );
};

const Basic = ({ rocketUdd }) => {
    let flyOrCome="come";
    if(rocketUdd==true) flyOrCome = "fly";

  return (
    <div>
      <div id="target" className="absolute ">
        <div class={`rocket ani-${flyOrCome} `}>
          <div class="rocket-body ">
            <div class="body"></div>
            <div class="fin fin-left"></div>
            <div class="fin fin-right"></div>
            <div class="window"></div>
          </div>
          <div class="exhaust-flame"></div>
          <ul class="exhaust-fumes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul class="star">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
