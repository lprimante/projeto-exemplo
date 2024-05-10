// @ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, beforeEach, afterEach, jest, it } from '@jest/globals'

import { Home } from '..'

describe('Home', () => {
    let originalFetch = global.fetch

    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve([
                        {
                            userId: 1,
                            id: 1,
                            title: 'Kaliteye hoşgeldiniz',
                            completed: false,
                        },
                    ]),
            }),
        )
    })

    afterEach(() => {
        global.fetch = originalFetch
    })

    it('renders Home component', async () => {
        render(<Home />)
        const linkElement = await screen.findByText(/Kaliteye hoşgeldiniz/i)
        expect(linkElement).toBeDefined()
    })
})
