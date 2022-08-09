import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should be in the DOM', () => {
    render(<App />);

    expect(screen.getByText(/welcome back!/i)).toBeInTheDocument();
  });
});
