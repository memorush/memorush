import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import * as ReactRedux from 'react-redux'

import PopupComponent from "./popup.component";


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should select null after timing out", () => {

  const mockXXXFn = jest.fn()
  const spyOnUseDispatch = jest
    .spyOn(ReactRedux, 'useDispatch')
    .mockReturnValue({ xxxFn: mockXXXFn })

  const spyOnUseSelector = jest
    .spyOn(ReactRedux, 'useSelector')
    .mockReturnValue({ isVisible: true, popupEntity: {} })

  act(() => {
    render(<PopupComponent />, container);
  });

});
