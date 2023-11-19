// import necessary react testing library helpers here
// import the Counter component here

import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('Counter');
  const incButton = screen.getByText("+")
  const decButton = screen.getByText("-")
  const count = screen.getByTestId('count') 

  expect(counterMessage).toBeInTheDocument();
  expect(incButton).toBeInTheDocument();
  expect(decButton).toBeInTheDocument();
  expect(count).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count')

  expect(count.innerHTML).toBe("0")
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incButton = screen.getByText("+")
  const count = screen.getByTestId('count')
  
  fireEvent.click(incButton)

  expect(count.innerHTML).toBe("1")
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decButton = screen.getByText("-")
  const count = screen.getByTestId('count')
  
  fireEvent.click(decButton)

  expect(count.innerHTML).toBe("-1")
});