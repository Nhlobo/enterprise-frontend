import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

jest.mock('next/link', () => {
  return function MockLink({ children, href }) {
    return <a href={href}>{children}</a>;
  };
});

describe('Hero', () => {
  it('renders title', () => {
    render(<Hero title="Test Title" ctaText="Click Me" ctaHref="/test" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<Hero title="Title" subtitle="Test Subtitle" ctaText="Click" ctaHref="/" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders primary CTA button', () => {
    render(<Hero title="Title" ctaText="Get Started" ctaHref="/contact" />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders secondary CTA when provided', () => {
    render(<Hero title="Title" ctaText="Primary" ctaHref="/" secondaryText="Secondary" secondaryHref="/about" />);
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });
});
