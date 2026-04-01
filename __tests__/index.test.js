import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

jest.mock('next/link', () => {
  return function MockLink({ children, href }) {
    return <a href={href}>{children}</a>;
  };
});

jest.mock('next/head', () => {
  return function MockHead({ children }) {
    return <>{children}</>;
  };
});

jest.mock('../hooks/useUserBehavior', () => ({
  useUserBehavior: jest.fn(),
}));

jest.mock('../lib/api', () => ({
  trackEvent: jest.fn().mockResolvedValue({}),
  submitLead: jest.fn().mockResolvedValue({}),
}));

describe('Home Page', () => {
  it('renders hero section', () => {
    render(<Home />);
    expect(screen.getByText('Enterprise Solutions for Modern Business')).toBeInTheDocument();
  });

  it('renders solutions section', () => {
    render(<Home />);
    expect(screen.getByText('Our Solutions')).toBeInTheDocument();
  });

  it('renders industries section', () => {
    render(<Home />);
    expect(screen.getByText('Industries We Serve')).toBeInTheDocument();
  });
});
