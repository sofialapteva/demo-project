import { render, screen } from "@testing-library/react";
import Button, { ThemeButton } from "./Button";

describe("Button", () => {
  test("tests render", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
  it("tests clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>Button</Button>);
    expect(screen.getByText("Button")).toHaveClass("clear");
  });
});
