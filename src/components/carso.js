import React, { Component } from "react";
import {  Carousel } from "react-bootstrap/";
export class carso extends Component {
  render() {
    return (
      <div>
        <Carousel 
        pause={false}
          style={{ textAlign: "center", }}
        >
          <Carousel.Item>
            <span><q>Search for any seller you want</q></span>
          </Carousel.Item>
          <Carousel.Item>
            <span><q> Adding new prodect  Easy</q></span>
          </Carousel.Item>
          <Carousel.Item>
            <span><q>
              Save your time and add Appointment
              </q> </span>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default carso;