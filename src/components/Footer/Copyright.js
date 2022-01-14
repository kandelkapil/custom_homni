import React from "react";
import "./copyright.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import PaymentsIcon from "@mui/icons-material/Payments";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Copyright = () => {
  return (
    <div className="container-copyright">
      <div className="wrapper-copyright">
        <div className="copyright-txt">
          2020 &copy; Htmlstream. All right reserved
        </div>
        <div className="payment-icons">
          <div className="visa">
            <CreditCardIcon sx={{ fontSize: "26px" }} />
          </div>
          <div className="paypal">
            <LocalAtmIcon sx={{ fontSize: "26px" }} />
          </div>
          <div className="payon">
            <PaymentsIcon sx={{ fontSize: "26px" }} />
          </div>
          <div className="stripe">
            <CreditCardOffIcon sx={{ fontSize: "26px" }} />
          </div>
          <div className="discover">
            <AccountBalanceIcon sx={{ fontSize: "26px" }} />
          </div>
          <div className="jcb">
            <CardGiftcardIcon sx={{ fontSize: "26px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
