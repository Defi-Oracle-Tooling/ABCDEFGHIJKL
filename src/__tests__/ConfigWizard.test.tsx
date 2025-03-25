import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfigWizard from '../components/ConfigWizard';
import { test, vi, expect } from 'vitest';

test('renders ConfigWizard and completes wizard', () => {
  const onComplete = vi.fn();
  render(<ConfigWizard onComplete={onComplete} />);
  
  expect(screen.getByText(/Config Wizard/i)).to.be.ok;
  
  fireEvent.click(screen.getByText(/Complete Wizard/i));
  
  expect(onComplete).toHaveBeenCalledWith({ wizardData: 'example' });
});

// Future tests: Add tests for error handling and edge cases in ConfigWizard.
