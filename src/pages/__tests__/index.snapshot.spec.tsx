import React from 'react'
import renderer from 'react-test-renderer'
import { Home } from '..'

test('renders learn react link', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchInlineSnapshot(`null`)
})
