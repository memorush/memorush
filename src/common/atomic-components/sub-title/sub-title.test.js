import React from 'react';
import SubTitleAtomicComponent from './sub-title.component';
import {screen, render} from "@testing-library/react";

describe("SubTitleAtomicComponent", () => {
  it("should render", () => {
    render(<SubTitleAtomicComponent/>);
    expect(screen.getByTestId("subtitle-atomic-component")).toBeInTheDocument();
  });

  it("should render name inside", () => {
    render(<SubTitleAtomicComponent name="text inside"/>);
    expect(screen.getByText(/text inside/i)).toBeInTheDocument();
  });

  it("should have the container class", () => {
    render(<SubTitleAtomicComponent/>);
    expect(screen.getByTestId("subtitle-atomic-component")).toHaveClass("container");
  })
})

