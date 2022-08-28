import { render } from '@testing-library/react'
import { SandboxLayout } from './sandbox-layout'

describe('Sandbox page', () => {
  it('should render', () => {
    const { baseElement } = render(<SandboxLayout />)

    expect(baseElement).toMatchSnapshot()
  })
})
