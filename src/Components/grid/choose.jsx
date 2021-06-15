import React from "react";
import "../ComponentsStyles/ServicesStyles/choose.css";
const ChooseTemplate = ({ data }) => {
  return (
    <div className="group">
      <h4>Why Choose us</h4>
      {data.map((item) => {
        return (
          <div key={item.id} className="choose-content">
            <i class="fas fa-check-circle"></i>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ChooseTemplate;
