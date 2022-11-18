import React from 'react';
import ReactDom from 'react-dom';
import Hr from './hr.component';

//TODO fixme!
it('should render', () => {
  const containerEl = document.createElement('div');
  ReactDom.render(<Hr />, containerEl);
})