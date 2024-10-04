import React from "react";
import Layout from "../components/Layouts/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At <i>Knoxshop</i>, we value the trust you place in us. This Privacy
            Policy outlines how we collect, use, and protect your personal
            information.
          </p>
          <b>
            <p>Information Collection</p>
          </b>
          <b>
            <p>Use of Information</p>
          </b>
          <b>
            <p>Data Security</p>
          </b>
          <b>
            <p>Your Rights</p>
          </b>
          <b>
            <p>Policy Changes</p>
          </b>
          <b>
            <p>Contact Us</p>
          </b>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
