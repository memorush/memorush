import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ButtonAtomicComponent from "./button.component";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("button component", () => {

  it("should render", () => {
    act(() => {
      render(<ButtonAtomicComponent name="button name" />, container);
    });

    // assert
    const buttonComponent = document.querySelector("[data-testid=button-atomic-component]");
    expect(buttonComponent.querySelector("p").innerHTML).toBe("button name");
  });

  it("should call handler when it clicked", () => {
    // mock function
    const onChange = jest.fn();

    // init
    act(() => {
      render(<ButtonAtomicComponent handler={onChange} />, container);
    });

    const buttonComponent = document.querySelector("[data-testid=button-atomic-component]");

    act(() => {
      buttonComponent.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    // assert
    expect(onChange).toHaveBeenCalledTimes(1);
  })
});
