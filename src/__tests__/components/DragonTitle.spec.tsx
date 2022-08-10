import React from 'react';
import { render, screen } from '@testing-library/react';
import { DashboardHeader } from '../../pages/Dragons/components/DashboardTitle';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Dragon Title', () => {
  it('test if it renders in the DOM', () => {
    render(<DashboardHeader />, { wrapper: BrowserRouter });

    const resTest = screen.getByText(/dragons dashboard/i);

    expect(resTest).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<DashboardHeader />, { wrapper: BrowserRouter });

    const resTest = screen.getByText(/dragons dashboard/i);

    expect(resTest).toMatchSnapshot();
  });
});
