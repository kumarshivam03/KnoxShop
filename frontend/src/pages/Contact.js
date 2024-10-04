import React from "react";
import Layout from "../components/Layouts/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">
            Have a question or need more information about our products? We're
            here to help! Whether you have inquiries about your order, need help
            with product details, or any other questions, feel free to reach out
            to us. We are available 24/7 to assist you. Don't hesitate to get in
            touch!
          </p>
          <p className="mt-3">
            <BiMailSend /> : kumarshivam3127@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 930-490-5392
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
