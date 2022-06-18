import React from "react";
import QRCode from "react-qr-code";
function QrCode(props) {
  return (
    <div>
      <QRCode value={props.value} />
    </div>
  );
}

export default QrCode;
