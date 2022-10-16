import React, { useState } from "react";
import { images } from "../assets/assets";
import "../styles/booking.css";
import Hero from "./Hero";

const Booking = () => {
  return (
    <main id="bookingg">
      <Hero title={"Book a service"} image={images.booking} />
      <section className="booking">
        {/* <div className="close" onClick={close}>
            x
        </div> */}
        <form action="">
          <p
            style={{
              textAlign: "center",
              fontSize: "30px",
              color: "rgba(72, 183, 96, 1)",
              fontWeight: "600",
            }}
          >
            Book a Service
          </p>
          <hr />
          <div className="field">
            <label htmlFor="">Full name</label>
            <input type="text" placeholder="your name" />
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="your email address" />
          </div>
          <div className="field">
            <label htmlFor="">Choose a service</label>
            <select name="" id="">
              input
            </select>
          </div>
          <div className="field">
            <label htmlFor="">Message</label>
            <input
              className="message"
              type="text"
              placeholder="I have a project in mind"
            />
          </div>
          <button className="action-btn">submit</button>
        </form>
      </section>
    </main>
  );
};

export default Booking;
