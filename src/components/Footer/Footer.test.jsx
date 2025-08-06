import Footer from './Footer';
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom/vitest';


describe('Footer', () => {
  it("display I am the footer", () => {
    render(<Footer />);
    expect(screen.getByText("I am the Footer")).toBeInTheDocument();
  })
})
