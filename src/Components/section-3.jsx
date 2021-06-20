import React from "react";
import "./ComponentsStyles/Section3.css";
const Section3 = () => {
  // const Data = [
  //   {
  //     id: "grid-1 grid",
  //     circle: "circle-1",
  //     heading: "Search Optimization",
  //     content: "By using Search Engine Optimization, You will get more Clients."
  //   },
  //   {
  //     id: "grid-2 grid",
  //     circle: "circle-2",
  //     heading: "Search Optimization",
  //     content: "By using Search Engine Optimization, You will get more Clients."
  //   },
  //   {
  //     id: "grid-3 grid",
  //     circle: "circle-3",
  //     heading: "Search Optimization",
  //     content: "By using Search Engine Optimization, You will get more Clients."
  //   },
  //   {
  //     id: "grid-4 grid",
  //     circle: "circle-4",
  //     heading: "Search Optimization",
  //     content: "By using Search Engine Optimization, You will get more Clients."
  //   }
  // ];
  return (
    <div className="section3">
      <div className="inner-container">
        <h3 className="section3-heading">
          Our Quality feature that customers always prefer to use on their
          products.
        </h3>
        <div className="Quality-features">
          <div className="featured feature-1">
            <div className="featured-1">Quality Feature</div>
          </div>
          <div className="featured feature-2">
            <div className="featured-2">Scalability</div>
          </div>
          <div className="featured feature-3">
            <div className="featured-3">Cost Control</div>
          </div>
          <div className="featured  feature-4">
            <div className="featured-4">Mobility</div>
          </div>
          <div className="featured feature-5">
            <div className="featured-5">Security</div>
          </div>
          <div className="featured feature-6">
            <div className="featured-6">Faster Implementation</div>
          </div>
          <div className="featured feature-7">
            <div className="featured-7">Disaster Recovery</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
