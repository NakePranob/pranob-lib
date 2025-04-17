import PranobLib from './NativePranobLib';
import { View, Text } from 'react-native';

export function multiply(a: number, b: number): number {
  return PranobLib.multiply(a, b);
}

export function testComponent() {
  return (
    <View>
      <Text>Test Component</Text>
    </View>
  );
}
