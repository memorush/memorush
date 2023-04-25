import React from 'react';
import TitleAtomicComponent from './title.component';
import {screen, render} from "@testing-library/react";

describe("TitleAtomicComponent", () => {
  it("should render", () => {
    render(<TitleAtomicComponent/>);
    expect(screen.getByTestId("title-atomic-component")).toBeInTheDocument();
  });

  it("should render h1 inside with text", () => {
    render(<TitleAtomicComponent name="text inside"/>);
    expect(screen.getByText(/text inside/i)).toBeInTheDocument();
  });

  it("should have the container class", () => {
    render(<TitleAtomicComponent/>);
    expect(screen.getByTestId("title-atomic-component")).toHaveClass("container");
  })
})
