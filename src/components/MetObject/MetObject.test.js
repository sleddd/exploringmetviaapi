import React from "react";
import MetObject from "../MetObject/MetObject";
import testData from "../../../testing/testData";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const waitForAPI = () => new Promise((resolve) => setTimeout(resolve, 500));

describe("<MetObject/>", () => {
  let container = null;

  beforeEach(() => {
    jest.spyOn(self, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(testData)
      })
    );
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    self.fetch.mockRestore();
  });

  it("testing", async () => {
    await act(async () => {
      render(<MetObject />, container);
    });
    console.log(container.querySelector("h2").textContent);
    expect(container.querySelector("h2").textContent).toBe(testData.title);
  });
});
