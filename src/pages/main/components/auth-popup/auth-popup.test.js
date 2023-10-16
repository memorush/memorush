import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { renderWithProvidersAndMemoryRouter } from '../../../../utils/test.utils';
import AuthFormComponent from './auth-form.component';

describe("AuthFormComponent", () => {

  it("should render", () => {
    renderWithProvidersAndMemoryRouter(<AuthFormComponent />);
    expect(screen.getByTestId("authPopup")).toBeInTheDocument();
  })

  it("should have Link element with role button", () => {
    renderWithProvidersAndMemoryRouter(<AuthFormComponent />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  })

  it("should move to /main when user click on main link", async () => {
    renderWithProvidersAndMemoryRouter(
      <Routes>
        <Route path="/" element={<AuthFormComponent />} />
        <Route path="/main" element={<><span>hello</span></>} />
      </Routes>
    )
    expect(screen.getByRole("button")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  })

  it("should change state to Register", async () => {
    renderWithProvidersAndMemoryRouter(<AuthFormComponent/>);
    await userEvent.click(screen.getByTestId("register-p"));
    expect(screen.getByTestId("register-form")).toBeInTheDocument();
  })

  it("should toggle between register and login pages", async () => {
    renderWithProvidersAndMemoryRouter(<AuthFormComponent/>);
    await userEvent.click(screen.getByTestId("register-p"));
    expect(screen.getByTestId("register-form")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("login-p"));
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  })
})