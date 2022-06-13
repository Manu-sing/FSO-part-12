import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("renders content", () => {
  const todos = [
    {
      text: "Component testing is done with react-testing-library",
      done: true,
    },
  ];

  render(<Todo todos={todos} />);

  const element = screen.getByText(
    "Component testing is done with react-testing-library"
  );
  expect(element).toBeDefined();
});
