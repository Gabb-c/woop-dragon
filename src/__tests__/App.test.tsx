import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should be in the DOM', () => {
    render(<App />);

    expect(screen.getByText(/welcome back!/i)).toBeInTheDocument();
  });
});
