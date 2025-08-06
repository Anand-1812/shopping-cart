import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import '@testing-library/jest-dom/vitest';
import Home from './Home';

describe('Testing the home page products', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and displays the products', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ([
        {
          id: 1,
          title: "Product 1",
          price: 22.3,
          image: "https://example.com/product1.jpg"
        },
        {
          id: 2,
          title: "Product 2",
          price: 55.99,
          image: "https://example.com/product2.jpg"
        },
        {
          id: 3,
          title: "Product 3",
          price: 99.99,
          image: "https://example.com/product3.jpg"
        }
      ]),
    })
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByAltText("Product 2")).toBeInTheDocument();
      expect(screen.getByAltText("Product 3")).toBeInTheDocument();
    });

    expect(screen.getByText("$55.99")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
  });
});
