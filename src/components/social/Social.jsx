import React from "react";
import insta from "../../assets/Icons/insta.png";
import fb from "../../assets/Icons/fb.png";
import whatsapp from "../../assets/Icons/whatsapp.png";
import viber from "../../assets/Icons/viber.png";

const Social = () => {
  return (
    <div className="social">
      <img src={insta} alt="instagram" />
      <img src={fb} alt="facebook" />
      <img src={whatsapp} alt="whatsapp" />
      <img src={viber} alt="viber" />
    </div>
  );
};

export default Social;
