import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name={'weChat'}/>).toJSON();
    expect(json).toMatchSnapshot()
  })
  it('test click event', () => {
    const fn = jest.fn()
    const component = mount(<Icon name='alipay' onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })


});