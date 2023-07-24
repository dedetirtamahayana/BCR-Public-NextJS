import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "@/containers/Register/Register";
import { Provider } from "react-redux";
import store from "@/Redux/store";
import { RouterContext } from "next/dist/shared/lib/router-context";
import renderer from "react-test-renderer";
import mockRouter from "next-router-mock";

describe("Login Component", () => {
  test("renders the register form with name, email and password inputs", () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider value={mockRouter}>
          <Register />
        </RouterContext.Provider>
      </Provider>
    );
    const nameInput = screen.getByTestId("Name");
    const emailInput = screen.getByTestId("Email");
    const passwordInput = screen.getByTestId("Password");
    const submitButton = screen.getByTestId("button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("UI detail should match snapshot", () => {
    // renderWithProviders(<Detail />);
    const snapshot = renderer
      .create(
        <Provider store={store}>
          <RouterContext.Provider value={mockRouter}>
            <Register />
          </RouterContext.Provider>
        </Provider>
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("calls button when the submit button is clicked", () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider value={mockRouter}>
          <Register />
        </RouterContext.Provider>
      </Provider>
    );
    const nameInput = screen.getByTestId("Name");
    const emailInput = screen.getByTestId("Email");
    const passwordInput = screen.getByTestId("Password");

    fireEvent.change(nameInput, { target: { value: "dede" } });
    fireEvent.change(emailInput, { target: { value: "dede@gmail.co.id" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    const registerButton = screen.getByTestId("button");

    fireEvent.submit(registerButton);

    expect(mockRouter.asPath).toEqual("/");
  });
});
