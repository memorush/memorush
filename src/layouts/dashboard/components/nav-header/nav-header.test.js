import { render, fireEvent, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import NavHeaderComponent from "./nav-header.component";
import * as actions from "../../../../redux/features/auth/auth-slice";

jest.mock("react-redux");

const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("NavHeaderComponent", () => {
  it("Should render", () => {
    const view = render(<NavHeaderComponent />, { wrapper: MemoryRouter });
    expect(view.baseElement).toBeInTheDocument();
  });

  it("Should execute logout function when user press on the logout-button", () => {
    // arrange 
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    render(<NavHeaderComponent />, { wrapper: MemoryRouter });

    // act
    fireEvent.click(screen.getByRole("button"));

    // assert 
    expect(dispatch).toHaveBeenCalled();
  });

  it("Should authenticaded user invalidates when user press on the logout-button", () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    const mockedInvalidateLoggedInUser = jest.spyOn(actions, "invalidateLoggedInUser");
    render(<NavHeaderComponent />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByRole("button"));
    
    expect(mockedInvalidateLoggedInUser).toHaveBeenCalled();
  })
})

