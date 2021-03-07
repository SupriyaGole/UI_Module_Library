import Debounce from "../Debounce";
import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.useFakeTimers();
describe("Debounce component", () => {
  test("should render debounced text after time elapses", async () => {
    const {baseElement} = render(<Debounce />);
    // await wait();
    const input = baseElement.querySelector("input");
    fireEvent.focus(input);
    userEvent.type(input, "1234");

    expect(screen.queryByText("Entered Value Before Debounce: 1234")).toBeInTheDocument();

    jest.runAllTimers();

    expect(screen.queryByText("Entered Value After Debounce: 1234")).toBeInTheDocument();

  });
});
