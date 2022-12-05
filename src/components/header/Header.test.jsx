import { render, screen } from "@testing-library/react";

import Header from "./Header";

it("should render the header and navigation links", () => {
  render(<Header />);
  const homaPageLink = screen.getByText(/home page/i);
  const githubLink = screen.getByText(/github/i);
  expect(homaPageLink).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();
});
