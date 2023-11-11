import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import PopupComponent from './popup.component';
import styles from './popup.module.scss';

describe("PopupComponent", () => {
  const useSelectorMock = jest.spyOn(ReactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(ReactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockReturnValue({
      popupEntity: {
        message: null,
        color: null,
      },
      isVisible: false
    })
  })

  afterEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })

  it("should be rendered", async () => {
    render(<PopupComponent/>);
    // Assertion
    expect(screen.getByTestId("popup-component")).toBeInTheDocument();
  });

  it("useEffect should be called once when component mounts", () => {
    render(<PopupComponent/>);
    // Assertion
    expect(useDispatchMock).toBeCalledTimes(1);
  });

  it("should not have active class when props isVisible is true", () => {
    render(<PopupComponent/>);
    // Assertion
    expect(screen.getByTestId("popup-component")).not.toHaveClass(styles.active);
  });
})

