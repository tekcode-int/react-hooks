import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

interface IProps {}

const NavbarComponent: FunctionComponent<IProps> = (props) => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">HOME</Link>
      </Menu.Item>
      <Menu.Item key="calculator">
        <Link to="/calculator">CALCULATOR</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavbarComponent;
