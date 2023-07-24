import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "@/containers/Login/Login";
import { Provider } from "react-redux";
import store from "@/Redux/store";
import { RouterContext } from "next/dist/shared/lib/router-context";
import renderer from "react-test-renderer";
import mockRouter from "next-router-mock";

describe("Login Component", () => {
  test("renders the login form with email and password inputs", () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider value={mockRouter}>
          <Login />
        </RouterContext.Provider>
      </Provider>
    );
    const emailInput = screen.getByTestId("InputDynamicInput");
    const passwordInput = screen.getByTestId("InputPassword");
    const submitButton = screen.getByTestId("ButtonSubmit");

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
            <Login />
          </RouterContext.Provider>
        </Provider>
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("calls handleSubmit when the submit button is clicked", () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider value={mockRouter}>
          <Login />
        </RouterContext.Provider>
      </Provider>
    );
    const submitButton = screen.getByTestId("ButtonSubmit");

    fireEvent.click(submitButton);

    expect(mockRouter.asPath).toEqual("/");
  });
});
