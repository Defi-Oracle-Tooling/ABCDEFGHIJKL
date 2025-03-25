import { test, expect } from 'vitest';
import BackendServices from '../services/BackendServices';

test('manageConfiguration does not throw', () => {
  const backend = new BackendServices();
  expect(() => backend.manageConfiguration()).not.toThrow();
});

test('orchestrateDeployment does not throw', () => {
  const backend = new BackendServices();
  expect(() => backend.orchestrateDeployment()).not.toThrow();
});

test('monitorAndAlert does not throw', () => {
  const backend = new BackendServices();
  expect(() => backend.monitorAndAlert()).not.toThrow();
});
