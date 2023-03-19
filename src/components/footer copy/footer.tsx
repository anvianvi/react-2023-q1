import { Footer } from "antd/es/layout/layout";
import React from "react";
import "./style.sass";

export default function MyFooter() {
  return (
    <Footer className="footer" style={{ textAlign: "center" }}>
      Created by
      <a href="https://github.com/anvianvi" target="_blank">
        {" "}
        Pavel Viarbitsi{" "}
      </a>
      in March 2023 for
      <a href="https://rs.school/angular/" target="_blank">
        {" "}
        The Rolling Scopes
      </a>
    </Footer>
  );
}
