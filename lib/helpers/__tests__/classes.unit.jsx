import classes from '../classes'

describe('button', () => {
  it('accept one classname', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  })
  it('accept two classnames', () => {
    const result = classes('a','b');
    expect(result).toEqual('a b')
  })
  it('accept two classnames', () => {
    const result = classes('a',undefined);
    expect(result).toEqual('a')
  })
})