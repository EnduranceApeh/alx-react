import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  // Test case 1: Basic rendering without crashing
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" html="" value="" />);
  });

  // Test case 2: Verify rendering with type and value props
  it('renders the correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" html="" value="test" />);
    const listItem = wrapper.find('li');
    expect(listItem.text()).toBe('test');
    expect(listItem.prop('data-notification-type')).toBe('default');
  });

  // Test case 3: Verify rendering with html prop
  it('renders the correct html prop', () => {
    const wrapper = shallow(<NotificationItem type="default" html="<u>test</u>" value="" />);
    const listItem = wrapper.find('li');
    expect(listItem.html()).toContain('<u>test</u>');
  });
});