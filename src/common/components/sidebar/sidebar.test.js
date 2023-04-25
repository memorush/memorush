import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProvidersAndMemoryRouter } from '../../../utils/test.utils';
import SidebarComponent from './sidebar.component';

describe("Sidebar component", () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn().mockReturnValue(() => null)
  }));

  it("should render", () => {
    renderWithProvidersAndMemoryRouter(<SidebarComponent />);
    expect(screen.getByTestId("sidebar-component")).toBeInTheDocument();
  });

  it("should change isOpen state when click on i element", async () => {
    renderWithProvidersAndMemoryRouter(<SidebarComponent />);
    await userEvent.click(screen.getByTestId("hand-pointer-div"));
    expect(screen.getByTestId("sidebar")).toHaveClass("open");
  });
})