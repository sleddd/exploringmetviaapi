import React from "react";
import { shallow, mount } from "../../../enzyme";
import MetObject from "../MetObject/MetObject";
import testData from "../../../testing/testData";

describe("<MetObject/>", () => {
  let wrapper = '';
  const setMetaData = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((metData) => [metData, setMetaData]);

  // Run before each test
  beforeEach(() => {
    wrapper = shallow(<MetObject />);
  });

  // Run after
  afterEach(() => {
    wrapper = null;
    jest.clearAllMocks();
  });

  it("testing set metadata", () => {
    //expect(wrapper.find("div").exists()).toBe(true);
    //expect(setMetaData).toHaveBeenCalledTimes(1);
  });
});
