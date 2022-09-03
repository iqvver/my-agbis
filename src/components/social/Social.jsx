import React from "react";
import insta from "../../assets/icons/insta.png";
import fb from "../../assets/icons/fb.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import viber from "../../assets/icons/viber.png";

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
