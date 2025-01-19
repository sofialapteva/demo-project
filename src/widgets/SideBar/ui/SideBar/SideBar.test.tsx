import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWIthTranslation/renderWIthTranslation";
import SideBar from "./SideBar";

describe("SideBar", () => {
  it("renders correctly", () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("collapses with clicked the button", () => {
    renderWithTranslation(<SideBar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
