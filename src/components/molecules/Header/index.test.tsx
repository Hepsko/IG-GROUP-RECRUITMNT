import "@testing-library/jest-dom";
import { Header } from "./";
import { render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Header showSidebar={() => {}} />);
  });
});
