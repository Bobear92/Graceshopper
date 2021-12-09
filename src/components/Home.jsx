import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-text-container">
        <h1>Welcome to Sleepy Time Earplugs</h1>
        <h2>
          Here at Sleepy Time Earplugs we can satiate all your inner ear needs.
          All our earplugs are specifically designed for for all your various
          needs!
        </h2>
        <h3>Loud kids? We got you covered?</h3>
        <h3>
          Looking for organic non-gmo grassfed open range earplugs? We got your
          back jack!
        </h3>
        <h3>
          Looking for synthetic all-gmo machine made highly calibrated to
          perfection earplugs? The T-1000s models are the plugs for you!
        </h3>
        <h3>
          Have you got big old ear holes? Don't even worry about it we will take
          care of you!
        </h3>
      </div>
      <div className="home-image-container">
        <img src="https://i.pinimg.com/736x/3c/f1/0b/3cf10be8f3346a4b9b34b311f43d10a8--ppt-template-templates.jpg"></img>
        <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/31/ds00365_im00193_ww5r606t_jpg.jpg"></img>
        <img src="https://i.pinimg.com/736x/3c/f1/0b/3cf10be8f3346a4b9b34b311f43d10a8--ppt-template-templates.jpg"></img>
      </div>
    </div>
  );
};

export default Home;
