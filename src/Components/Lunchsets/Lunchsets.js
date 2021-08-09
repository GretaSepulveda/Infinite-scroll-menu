import React from "react";
import "./Lunchsets.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Lunchsets() {
  return (
    <div className="Lunch-Container">
      <h3 className="Title"> LUNCH SETS</h3>
      <div className="Lunch-Sets">
        <div>
          <h5>BAKED POTATO PIZZA $12</h5>
          <p>
            Potato/ Bread/ Cheese
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>PORK TENDERLOIN MARINATED IN YOGURT $20 </h5>
          <p>
            Pork/ Tenderloin/ Yogurt{" "}
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>GRILLED PORK WITH PRESERVED LEMONS $22 </h5>
          <p>
            Pork/ Lemons/ Onion
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>LEMON-ROSEMARY CHICKEN $19.9 </h5>
          <p>
            Chicken/ Rosemary/ Lemon
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>

        <div>
          <h5>APPLE SMOKED CHICKEN WITH WHITE SAUCE $18.9 </h5>
          <p>
            Chicken/ Apple/ Tomatos
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>BRAISED CHICKEN BREAST WITH WHITE WINE AND SHALLOTS $24.5 </h5>
          <p>
            Chicken Breast/ Wine
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>
            GRILLED HANDER STEAK WITH HARISSA AND PICKLED RED ONIONS $29.9
          </h5>
          <p>
            Beef/ Onion/ Tomatos
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>MEATLOAF WITH BLACK PEPPER HONEY-BBQ $19.9 </h5>
          <p>
            Pepper/ Chicken/ Honey
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
      </div>
    </div>
  );
}
