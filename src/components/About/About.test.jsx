import About from './About';
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import '@testing-library/jest-dom/vitest';

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('displays the description', () => {
    expect(screen.getByText('A big React project to learn about React, routing, and component styling.')).toBeInTheDocument();
  });

  it('displays the full footer', () => {
    expect(screen.getByTestId('about-footer')).toHaveTextContent(
      'This is the final project of React from The Odin Project.'
    );
  });

});

