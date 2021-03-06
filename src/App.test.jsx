import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

describe(
  'test App Suite',
  () => {
    it(
      'renders without crashing',
      () => {
        expect.hasAssertions()
        const div = document.createElement('div')
        ReactDOM.render(
          <App />,
          div
        )
        expect(div).toBeDefined()
        ReactDOM.unmountComponentAtNode(div)
      }
    )
  }
)
