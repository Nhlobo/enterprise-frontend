import { render, screen } from '@testing-library/react';
import CTA from '../components/CTA';

jest.mock('next/link', () => {
  return function MockLink({ children, href }) {
    return <a href={href}>{children}</a>;
  };
});

describe('CTA', () => {
  it('renders heading', () => {
    render(<CTA heading="Test Heading" ctaText="Click" ctaHref="/" />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders subheading when provided', () => {
    render(<CTA heading="Heading" subheading="Test Subheading" ctaText="Click" ctaHref="/" />);
    expect(screen.getByText('Test Subheading')).toBeInTheDocument();
  });

  it('renders CTA button with correct text', () => {
    render(<CTA heading="Heading" ctaText="Get Started" ctaHref="/contact" />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});
