import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  testComponent(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('PranobLib');
