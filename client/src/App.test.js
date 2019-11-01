import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import Team from './components/Team'
import PlayerCard from './components/PlayerCard';

test('Displays an H1 with "Women\'s World Cup" ', () => {
 
  const { getByText } = render(<App />);
   getByText(/women's world cup/i) ;
});


test('Displays a 💙 by default for team ', () => {
 
  const { getByText } = render(<Team />);
   getByText(/💙/i) ;
});

