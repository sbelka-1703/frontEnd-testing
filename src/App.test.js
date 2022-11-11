import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color, and update color', () => {
  render(<App/>)

  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  expect(colorButton).toHaveStyle({background: 'red'})

  fireEvent.click(colorButton);    

  expect(colorButton).toHaveStyle({ background : 'blue'})

  expect(colorButton).toHaveTextContent('Change to red')
});
// test('button has correct initial text', ( ) =>{

// })
// test('button turns blue when clicked', ( ) =>{
//   render(<App/>);
//   const colorButton = screen.getByRole('button', { name: 'change to blue' })
// })
