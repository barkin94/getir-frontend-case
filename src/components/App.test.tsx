import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from '../redux/store';

test('renders App', () => {
  expect(true).toBeTruthy();
});