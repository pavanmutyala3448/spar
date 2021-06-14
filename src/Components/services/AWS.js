import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsStyles/ServicesStyles/AWS.css";
const AWS = () => {
    return ( <
        div className = "Grid-container" >
        <
        div className = "Grid Grid-1" >
        <
        img src = "https://images.unsplash.com/photo-1622675205169-901710ac8643?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRldmVsb3BlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt = "developr" /
        >
        <
        /div> <
        div className = "Grid Grid-2" >
        <
        div className = "links" >
        <
        Link to = "/Services/ManagedCloud" >
        Managed Cloud Services<
        /Link><
        Link  to = "/services/AWSdevops" > AWS Devops < /Link><
        Link to = "/services/AWSdatamigration" > AWS DataMigration < /Link><
        Link to = "/Services/securityCloud" > Security in Cloud - AWS < /Link> < /
        div ><
        /div><
        div className = "Grid Grid-3" >
        <
        h2 > Content Overview < /h2><
        p >
        Are these problems as significant as they seem to be ? Of course, not and that is why Sparue has come up with an intelligent enterprise cloud security system.We understand the complete working of cloud security, and we have covered all the essential domains of it which include :
        <
        /p>< /
        div ><
        div className = "Grid Grid-4" >
        <
        div className = "contact" >
        <
        p > Have Question ? < /p><
        div className = "contact-1" >
        <
        i class = "fas fa-phone-alt" > < /i> <h4> 741258963 </h4 ></div>
        < /
        div ><
        /div><
        div className = "Grid Grid-5" >
        <
        div className = "item item-1" >
        <
        i class = "fas fa-key" > < /i> <h4> Network Security </h4 ><
        p >
        Workloads are isolated using Virtual Private Cloud.Security components like NACL, Security Groups, Subnets and VPN access are provisioned
        for secure access to the application.<
        /p>< /
        div ><
        div className = "item item-2" ><
        i class = "fas fa-key" > < /i> <h4> Data Security </h4 ><
        p >
        Data is the most criticxal asset of any organization.We help you protect your data at rest as well as in motion to help you meet all security compliance and regulations.<
        /p>< /
        div ><
        div className = "item item-3" > <
        i class = "fas fa-key" > < /i><
        h4 > Security Informatin & Event managment < /h4><
        p >
        Security Incident and Event Management is fast becoming an integral part of the security ecosystem.We provide solutions that aggregate data from multiple systems and analyze that data to
        catch abnormal behavior or potential cyberattacks. <
        /p>< /
        div > <
        div className = "item item-4" > <
        i class = "fas fa-key" > < /i> <h4> Identity & Access Management </h4 > <
        p >
        Sparue can help run and operate the entire user provisioning, access management and governance reporting solutions across hybrid and public clouds. <
        /p>< /
        div > <
        div className = "item item-5" > <
        i class = "fas fa-key" > < /i><
        h4 > Security Management, Governance, and Compliance < /h4><
        p >
        To help our Customers migrate their regulated workloads to AWS, we provision your infrastructure with a VPC in the public cloud that is compliant varied security standards such as PCI security standard,
        (SOC) 1 standard. <
        /p>< /
        div > <
        div className = "item item-6" >
        <
        i class = "fas fa-key" > < /i> <h4> Code Access Security </h4 > <
        p >
        We have helped multiple Customers protect their network and applications against outside threats by using our firewalls and WAF solutions. <
        /p>< /
        div > <
        /div><
        div className = "Grid Grid-6" >

        <
        h4 > Brochure < /h4><
        p >
        Existence in certainly Explain Hoe improving Households pretended <
        /p><
        div className = "brochure" >
        <
        div className = "brochure-contact" >
        <
        i class = "far fa-file-pdf" > < /i> <p> Download Service </p > <
        /div> <
        div className = "brochure-contact" >
        <
        i class = "far fa-file-pdf" > < /i> <p> Download Features </p > <
        /div>< /
        div > <
        /div>< /
        div >
    );
};
export default AWS;
