import React from "react";
import {css} from "@emotion/core";
import RotateLoader from "react-spinners/RotateLoader";

const override = css`
  display: block;
  margin: 300px auto;
  border-color: red;
`;

const LoadingScreen = () => {
  return (
    <div className="sweet-loading">
      <RotateLoader css={override} size={20} color={`#4481c3`} />
    </div>
  );
};

export default LoadingScreen;
