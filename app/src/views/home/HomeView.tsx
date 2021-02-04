import React, { FunctionComponent } from "react";
import NavbarComponent from "../../component/NavbarComponent";

interface IProps {}

const HomeView: FunctionComponent<IProps> = (props) => {
  return (
    <div>
      <NavbarComponent />
      home view
    </div>
  );
};

export default HomeView;
