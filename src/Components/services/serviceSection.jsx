import React from "react";
import AWS from "./AWS";
import Section6 from "../section-6";
import ServiceBanner from "../grid/section-1";
import Footer from "../footer";

const ServiceSection = () => {
  return (
    <>
      <ServiceBanner content="Security in cloud-AWS" />
      <AWS />
      <Section6 />

      <Footer />
    </>
  );
};
export default ServiceSection;
