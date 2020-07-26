import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage }  from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  wrapper.find('button').at(2).simulate('click');
  expect(wrapper).toMatchSnapshot();
});


//LoginPage test file -> Should call startLogin on button click
test('should call LoginPage on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').at(0).simulate('click');
  expect(startLogin).toHaveBeenCalled();
});

