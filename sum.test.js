test('mock implementation of a basic function', () => {
  const mock = jest.fn(() => 'bar')

  expect(mock('foo')).toBe('bar')
  expect(mock).toHaveBeenCalledWith('foo')
});

test('mock return value of a function one time', () => {
  const mock = jest.fn()

  mock.mockReturnValueOnce('bar').mockReturnValueOnce('baz')

  expect(mock()).toBe('bar')
  expect(mock()).toBe('baz')
  expect(mock()).toBeUndefined()
});

test('mock return value of a function multiple times', () => {
    const mock = jest.fn()
    
    mock.mockReturnValue('bar')
    
    expect(mock()).toBe('bar')
    expect(mock()).toBe('bar')
    });

test('mock implementation of a function', () => {
    const mock = jest.fn().mockImplementation(() => 'bar')
    
    expect(mock('foo')).toBe('bar')
    expect(mock).toHaveBeenCalledWith('foo')
    });

test('spying using original implementation', () => {
    const pizza = {
        name: n => `Pizza name: ${n}`,
    }
    const spy = jest.spyOn(pizza, 'name')
    expect(pizza.name('Cheese')).toBe('Pizza name: Cheese')
    expect(spy).toHaveBeenCalledWith('Cheese')
    });

test('spying using mockImplementation', () => {
    const pizza = {
        name: n => `Pizza name: ${n}`,
    }
    const spy = jest.spyOn(pizza, 'name')
    spy.mockImplementation(n => `Crazy pizza!`)
    expect(pizza.name('Cheese')).toBe('Crazy pizza!')
    spy.mockRestore()
    expect(pizza.name('Cheese')).toBe('Pizza name: Cheese')
    });

test('spying using mockImplementationOnce', () => {
    const pizza = {
        name: n => `Pizza name: ${n}`,
    }
    const spy = jest.spyOn(pizza, 'name')
    spy.mockImplementationOnce(n => `Crazy pizza!`)
    expect(pizza.name('Cheese')).toBe('Crazy pizza!')
    expect(pizza.name('Cheese')).toBe('Pizza name: Cheese')
    });