import React from 'react';
import { mount } from 'enzyme';
import Component from '../src';

describe('<Component />', () => {
  test('renders correctly', () => {
    const wrapper = mount(<Component />);
    expect(wrapper).toMatchSnapshot();
  });
});
