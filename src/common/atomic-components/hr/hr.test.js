import React from 'react';
import ReactDom from 'react-dom';
import HrAtomicComponent from './hr.component';

//TODO fixme!
it('should render', () => {
  const containerEl = document.createElement('div');
  ReactDom.render(<HrAtomicComponent />, containerEl);
})
