import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

// Mock Next.js Link
jest.mock('next/link', () => {
  return function MockLink({ children, href }) {
    return <a href={href}>{children}</a>;
  };
});

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('Mapengo Innovation')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Solutions')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Pricing')[0]).toBeInTheDocument();
    expect(screen.getAllByText('About')[0]).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Get Started')[0]).toBeInTheDocument();
  });
});
