import React from "react";
import "./CSS/About.css"
import Image1 from "./Images/first_img.jpg";
import Image2 from "./Images/second_img.jpg";
import Image3 from "./Images/third_img.jpg";

export default function About() {
  return (
    <div className="container my-5">
      <div className="firstPara row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <p className="lead">
            Welcome to TodoList, the ultimate solution for streamlining your
            task management and boosting productivity. Our application is
            crafted to help you effortlessly organize your tasks, prioritize
            your goals, and maintain focus throughout your day. With TodoList,
            you can easily create, edit, and track your tasks, ensuring that
            your most important activities are always within reach and under
            control.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src= {Image1} 
            className="imageBorder bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="first img"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider my-5" />

      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7 order-md-2">
          <p className="lead"> 
            TodoList is built to adapt to your needs, offering a flexible and
            responsive design that works across all devices. Whether you’re
            using a computer, tablet, or smartphone, you can access and manage
            your tasks from anywhere, at any time. This versatility allows you
            to stay organized and on top of your responsibilities, no matter
            where your day takes you.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={Image2}
            className="imageBorder bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="second img"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider my-5" />

      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <p className="lead">
            We are dedicated to providing a tool that enhances your productivity
            and helps you achieve your objectives. Whether you're managing daily
            chores, working on long-term projects, or simply trying to keep
            track of your commitments, TodoList is here to support you every
            step of the way. Discover the ease of task management with TodoList
            and take charge of your schedule today.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={Image3}
            className="imageBorder bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="third img"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}
