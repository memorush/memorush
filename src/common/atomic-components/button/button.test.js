import {screen, render} from "@testing-library/react";
import ButtonAtomicComponent from "./button.component";
import userEvent from '@testing-library/user-event';

describe("ButtonAtomicComponent", () => {
  it("should render", () => {
    render(<ButtonAtomicComponent/>);
    expect(screen.getByTestId("button-atomic-component")).toBeInTheDocument();
  });

  it("should have the container class", () => {
    render(<ButtonAtomicComponent/>);
    expect(screen.getByTestId("button-atomic-component")).toHaveClass("container");
  });

  it("should invoke function from props by click", async () => {
    const mockFunction = jest.fn().mockReturnValue("some result");

    render(<ButtonAtomicComponent clickFunction={mockFunction}/>);
    await userEvent.click(screen.getByTestId("button-atomic-component"));
    expect(mockFunction).toBeCalledTimes(1);
  })

  it("should not invoke function by click if disable is true", () => {
    const mockFunction = jest.fn();

    render(<ButtonAtomicComponent clickFunction={mockFunction} disable={true}/>);
    userEvent.click(screen.getByTestId("button-atomic-component"));
    expect(mockFunction).toBeCalledTimes(0);
  })
})