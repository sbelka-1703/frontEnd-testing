import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

test('button has correct initial color, and update color', () => {
  render(<App/>)

  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  expect(colorButton).toHaveStyle({background: 'red'})

  fireEvent.click(colorButton);    

  expect(colorButton).toHaveStyle({ background : 'blue'})

  expect(colorButton).toHaveTextContent('Change to red')
});

test('initial conditions' , () => {
  render(<App/>)

  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();
})

test('when checkbox is checked, button should be disabled', () => {
  render(<App/>)

  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  const checkboxForColorButton = screen.getByRole('checkbox' ,{name: 'Disable button'})

  fireEvent.click(checkboxForColorButton); 
  
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkboxForColorButton);

  expect(colorButton).toBeEnabled();

})

test('button turns gray when it is disabled', () => {
  render(<App/>)

  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  const checkboxForColorButton = screen.getByRole('checkbox' ,{name: 'Disable button'})

  fireEvent.click(checkboxForColorButton);

  expect(colorButton).toHaveStyle({background: 'gray'})

  fireEvent.click(checkboxForColorButton);

  expect(colorButton).toHaveStyle({background: 'red'})

  fireEvent.click(colorButton)

  fireEvent.click(checkboxForColorButton)

  expect(colorButton).toHaveStyle({background: 'gray'})

  fireEvent.click(checkboxForColorButton)

  expect(colorButton).toHaveStyle({background: 'blue'})
})

describe('spaces before camel-case capital letters', () => {
  test('Works for not inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
    
  });
})

