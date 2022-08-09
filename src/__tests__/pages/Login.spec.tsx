import React from 'react';
import { render, screen } from '@testing-library/react';

import { LoginPage } from '../../pages/Login';
import { BrowserRouter } from 'react-router-dom';

describe('Button', () => {
  it('test if it renders in the DOM', () => {
    render(<LoginPage />, { wrapper: BrowserRouter });

    const resTest = screen.getByText(/welcome back!/i);

    expect(resTest).toBeInTheDocument();
  });
});
