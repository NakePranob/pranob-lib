import _ from 'lodash';
import { View, Text } from 'react-native';
import PranobLib from './NativePranobLib';
import { TestComponent } from './components/TestComponent';

export function multiply(a: number, b: number): number {
  return PranobLib.multiply(a, b);
}

export function TestLodash() {
  const result = _.join(['a', 'b', 'c'], '~');

  return (
    <View>
      <Text>{result}</Text>
    </View>
  );
}

export { TestComponent };
