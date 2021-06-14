import React from "react";
const ChooseTemplate = () => {
  const data = [
    {
      id: 1,
      content: "Up am intention on dependent questions"
    },
    {
      id: 2,
      content: "Up am intention on dependent questions"
    },
    {
      id: 3,
      content: "Up am intention on dependent questions"
    },
    {
      id: 4,
      content: "Up am intention on dependent questions"
    }
  ];
  return (
    <div className="g5">
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
