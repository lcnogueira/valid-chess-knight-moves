import { render } from '@testing-library/react'
import * as Router from 'next/router'
import { NextRouter } from 'next/router'
import Header from '.'

jest.spyOn(Router, 'useRouter').mockReturnValue({
  pathname: '/'
} as NextRouter)

describe('<Header />', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
