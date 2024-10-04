import React from "react";
import Layout from "../components/Layouts/Layout";
const About = () => {
  return (
    <Layout title={"About us - KnoxShop"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to <b>Knoxshop</b>, your one-stop destination for all things
            trendy and stylish! We are passionate about bringing the latest
            fashion, accessories, and lifestyle products right to your doorstep.
            Whether you're looking for the latest fashion trends, classic
            pieces, or unique finds, Knoxshop has something for everyone. At
            Knoxshop, we believe that shopping should be an enjoyable
            experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
