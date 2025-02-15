import Spruce from '../dist/spruce'

beforeEach(() => {
    Spruce.stores = {}
})

test('Spruce.store() > namespace and data set correctly', () => {
    Spruce.store('testing', {
        foo: 'bar'
    })

    expect(Spruce.store('testing')).toEqual({
        foo: 'bar'
    })

    expect(Spruce.store('testing').foo).toEqual('bar')
})

test('Spruce.store() > existing namespace will not be overwritten', () => {
    Spruce.store('testing', {
        foo: 'bar'
    })

    expect(Spruce.store('testing')).toEqual({
        foo: 'bar'
    })

    Spruce.store('testing', {
        bob: 'car'
    })

    expect(Spruce.store('testing')).toEqual({
        foo: 'bar'
    })
})