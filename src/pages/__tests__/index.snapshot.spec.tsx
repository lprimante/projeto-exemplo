import React from 'react'
import renderer from 'react-test-renderer'
import { Home } from '..'

test('renders learn react link', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="MuiContainer-root MuiContainer-maxWidthLg css-1oqqzyl-MuiContainer-root"
>
  <h1
    className="MuiTypography-root MuiTypography-h1 css-l4yn1p-MuiTypography-root"
  >
    Minha Lista de Tarefas
  </h1>
</div>
`)
})
