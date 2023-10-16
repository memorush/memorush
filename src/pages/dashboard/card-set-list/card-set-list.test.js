import { screen } from "@testing-library/react";
import { renderWithProvidersAndMemoryRouter } from "../../../utils/test.utils";
import { userEvent } from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";
import CardSetListPage from "./card-set-list.page"

describe("CardSetListPage", () => {
  it("should render", () => {
    renderWithProvidersAndMemoryRouter(<CardSetListPage />);
    expect(screen.getByTestId("card-set-list-page")).toBeInTheDocument();
  })

  it("should change location", async () => {

    const Application = (
      <MemoryRouter>
        <Routes>
          <Route path='/dashboard' element={<div><Outlet /></div>} >
            <Route index element={<CardSetListPage />} />
            <Route path="/dashboard/card-set-create" element={
              <h1 data-testid="create-page">Create Page</h1>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    render(Application);
    await userEvent.click(screen.getByTestId("create-page"));
    expect(screen.getByTestId(/Create Page/i)).toBeInTheDocument();
  })
})