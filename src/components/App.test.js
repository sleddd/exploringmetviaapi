import React from "react";
import { shallow } from "../../../enzyme";
import App from "../components/App";
import Home from "../views/Home";

describe("<App/>", () => {
  it("Contains Home view", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Home).length).toBe(1);
  });
});
