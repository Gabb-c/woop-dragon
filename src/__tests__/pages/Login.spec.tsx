import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoginPage } from '../../pages/Login';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Login Page', () => {
  it('test if it renders in the DOM', () => {
    render(<LoginPage />, { wrapper: BrowserRouter });

    const resTest = screen.getByText(/welcome back!/i);

    expect(resTest).toBeInTheDocument();
  });
});
