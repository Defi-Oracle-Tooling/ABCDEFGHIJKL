import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import UserInterface from '../components/UserInterface';

test('renders UserInterface component', () => {
  render(<UserInterface />);
  const header = screen.getByText(/User Interface Components/i);
  expect(header).to.be.ok;
});

test('switches to expert mode and renders ConfigWizard', () => {
  render(<UserInterface />);
  const select = screen.getByLabelText(/Select Mode:/i);
  fireEvent.change(select, { target: { value: 'expert' } });
  const wizardHeaders = screen.getAllByText(/Configuration Wizards/i);
  const wizardHeader = wizardHeaders[0];
  expect(wizardHeader).to.be.ok;
});
