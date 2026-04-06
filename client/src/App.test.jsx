import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi } from 'vitest';

describe('App', () => {
  it('renders Dresscode app', () => {
    // Mock fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 'ok', message: 'Test Msg', timestamp: 'now' }),
      })
    );

    render(<App />);
    const logoElement = screen.getByAltText('Dresscode');
    expect(logoElement).toBeInTheDocument();
  });
});
