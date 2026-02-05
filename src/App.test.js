import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  // jsdom does not implement window.matchMedia
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test("items can be copied and show tooltip on click", async () => {
  // Mock Clipboard API so copy succeeds in jsdom
  Object.assign(navigator, {
    clipboard: { writeText: jest.fn().mockResolvedValue() },
  });

  render(<App />);

  // Get all copyable list items
  const copyableItems = screen
    .getAllByRole("listitem")
    .filter((item) => item.classList.contains("copyable"));
  expect(copyableItems.length).toBeGreaterThan(0);

  // Each copyable item should have a data-clipboard-text attribute
  copyableItems.forEach((item) => {
    expect(item).toHaveAttribute("data-clipboard-text");
    expect(item.getAttribute("data-clipboard-text")).not.toBe("");
  });

  // Click a copyable item and verify the "Copied!" tooltip appears
  fireEvent.click(copyableItems[0]);

  await waitFor(() => {
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  expect(screen.getByText("Copied!")).toHaveClass("tooltip");
});
