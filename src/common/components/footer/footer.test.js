import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import FooterComponent from './footer.component';

describe("FooterComponent", () => {

  it("should render", async () => {
    render(<FooterComponent />, { wrapper: MemoryRouter })
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });

  it("should have the container class", () => {
    render(<FooterComponent />, { wrapper: MemoryRouter })
    expect(screen.getByTestId("footer-component")).toHaveClass("footer");
  });

  it("should have a child with text /term-of-use", async () => {
    render(<FooterComponent />, { wrapper: MemoryRouter })
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
    //user`s action
    await userEvent.click(screen.getByText(/Пользовательское соглашение/i));
    expect(screen.getByText(/Пользовательское соглашение/i)).toBeInTheDocument()
  });

  it("should change location", async () => {

    const Application = (
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<div><Outlet /></div>} >
            <Route index element={<FooterComponent />} />
            <Route path="privacy-policy" element={<h1 data-testid="privacy-page">Privacy Page</h1>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    render(Application);
    await userEvent.click(screen.getByTestId("privacy-policy-link"));
    expect(screen.getByTestId(/privacy-page/i)).toBeInTheDocument();
  })
})
