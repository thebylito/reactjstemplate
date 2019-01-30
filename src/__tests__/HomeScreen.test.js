
import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../Screens/HomeScreen';

describe('Tests the HomeScreen', () => {
  it('always renders a div', () => {
    const checkbox = shallow(<HomeScreen />);
    expect(checkbox).toMatchSnapshot();
  });
});
