import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';
import { test, expect, vi } from 'vitest';

// Synchronous throw in render to trigger the error boundary.
const ProblemChild = () => {
  throw new Error('Test error');
};

test('ErrorBoundary displays fallback UI when an error occurs', async () => {
  const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
  try {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
  } catch (e) {
    // Expected error thrown during rendering.
  }
  await waitFor(() => {
    expect(document.body.textContent).to.match(/Something went wrong/i);
  });
  spy.mockRestore();
});
