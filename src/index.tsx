import PranobLib from './NativePranobLib';
import { TestComponent } from './components/TestComponent';

export function multiply(a: number, b: number): number {
  return PranobLib.multiply(a, b);
}

export { TestComponent };
