import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AuthProvider', () => {
  it('should render inside provider', () => {
    render(
      <AuthContext.Provider
        value={{ user: 'admin', signed: true, signIn: jest.fn(), signOut: jest.fn() }}
      >
        <p>test</p>
      </AuthContext.Provider>,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(screen.getAllByText('test')).toBeTruthy();
  });
});
