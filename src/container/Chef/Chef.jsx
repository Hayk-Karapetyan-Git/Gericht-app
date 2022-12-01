import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,and more
            
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus deleniti voluptates inventore minus excepturi harum dignissimos. Minima alias officia aperiam!
        </p>
      </div>

      <div className="app__chef-sign">
        <p className="p__opensans">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
