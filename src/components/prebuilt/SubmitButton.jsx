import React from "react";
import { Button } from "antd";

const SubmitButton = ({ disabled, children }) => {
  return (
    <Button
      type="primary"
      htmlType="submit"
      className={`submit-button ${disabled ? "submit-button__disabled" : ""}`}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
