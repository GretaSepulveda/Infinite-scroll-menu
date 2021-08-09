import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dinner.css";

export default function Dinner() {
  return (
    <div className="Dinner-Container">
      <h3 className="Title">DINNER</h3>
      <div className="Dinner">
        <div>
          <h5>SMALL JUICY STEAMED DUMPLINGS $12</h5>
          <p>
            Potato/ Chicken/ Cheese
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>ROASTED RED POTATOES WITH ROSEMARY $15.5</h5>
          <p>
            Potatoes/ Rosemary/ Butter
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>BLACK BEAN SWEAT POTATO QUINOA MEAT(LESS)LOAF $12</h5>
          <p>
            Bean/ Potato
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>WILD MUSHROOM BUCATANI WITH KALE $14.5</h5>
          <p>
            Mushroom/ Veggie/ White sauce
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>PRAWN SAUSAGE CASSOULET $30.5</h5>
          <p>
            Prawn/ Sausage/ Tomato
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>MEATLOAF WITH BLACK PEPPER HONEY-BBQ $19.9</h5>
          <p>
            Pepper/ Chicken/ Honey
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>BRAISED CHICKEN BREAST WITH WHITE WINE AND SHALLOTS $29.9</h5>
          <p>
            Beef/ Onion/ Tomatos
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>APPLE SMOKED CHICKEN WITH WHITE SAUCE $24.5</h5>
          <p>
            Chicken/ Apple/ Tomato
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>LEMON_ROSEMARY CHICKEN $18.9</h5>
          <p>
            Chicken/ Rosemary/ Lemon
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>GRILLED PORK WITH PRESERVED LEMONS $22</h5>
          <p>
            Pork/ Lemons/ Onion
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
        <div>
          <h5>PORK TENDERLOIN MARINATED IN YOGURT $20</h5>
          <p>
            Pork/ Tenderloin/ Yogurt
            <FontAwesomeIcon icon="star" color="gold" />
          </p>
        </div>
      </div>
    </div>
  );
}
