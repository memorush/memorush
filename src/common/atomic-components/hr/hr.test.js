import React from 'react';
import {screen, render} from "@testing-library/react";
import HrAtomicComponent from './hr.component';

describe("HrAtomicComponent", () => {
  it("should render", () => {
    render(<HrAtomicComponent/>);
    expect(screen.getByTestId("hr-atomic-component")).toBeInTheDocument();
  });

  it("should have the container class", () => {
    render(<HrAtomicComponent/>);
    expect(screen.getByTestId("hr-atomic-component")).toHaveClass("container");
  })
})
