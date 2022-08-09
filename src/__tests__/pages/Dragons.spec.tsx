import React from 'react';
import { render, screen } from '@testing-library/react';

import { DragonsPage } from '../../pages/Dragons';
import { BrowserRouter } from 'react-router-dom';

describe('Button', () => {
  it('test if it renders in the DOM', () => {
    render(<DragonsPage />, { wrapper: BrowserRouter });

    const resTest = screen.getByText(/dragons dashboard/i);

    expect(resTest).toBeInTheDocument();
  });
});
