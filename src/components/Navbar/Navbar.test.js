import React from "react";
import { shallow } from "../../../enzyme";
import Navbar from "./Navbar";

describe("<Navbar/>", () => {
  it("Contains nav element", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find("nav").exists()).toBe(true);
  });
  it("Nav element has .navbar class", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
  it("Nav element is contained by container-fluid", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(".container-fluid").exists()).toBe(true);
  });
});
