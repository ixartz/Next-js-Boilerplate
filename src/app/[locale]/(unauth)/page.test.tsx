import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import messages from '@/locales/en.json'

import Homepage from './page'

describe('Homepage', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <Homepage />
        </NextIntlClientProvider>
      )

      const heading = screen.getByRole('heading', {
        name: /Boilerplate Code/,
      })

      expect(heading).toBeInTheDocument()
    })
  })
})
