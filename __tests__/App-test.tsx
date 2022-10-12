/**
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from 'src/App';

it('renders correctly', () => {
  expect(_safeAreaViewColor()).toBe(Colors.lighter);
});

function _safeAreaViewColor() {
  const app = renderer.create(<App />);
  const safeAreaView = app.root.findByType(SafeAreaView);
  return safeAreaView.props.style.backgroundColor;
}
