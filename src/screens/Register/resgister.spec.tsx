import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Register } from ".";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Register Screen", () => {
  it("should be able open category modal when user click on category button", () => {
    const { getByTestId } = render(<Register />, { wrapper: Providers });
    const categoryModal = getByTestId("modal-category");
    const buttonCategory = getByTestId("button-category");
    fireEvent.press(buttonCategory);

    expect(categoryModal.props.visible).toBeTruthy();
  });
});
