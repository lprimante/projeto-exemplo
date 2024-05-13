// @ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'

import { Home } from '..'

describe('Home', () => {
    it('renders Home component', async () => {
        render(<Home />)
        const linkElement = await screen.findByText(/Minha Lista de Tarefas/i)
        expect(linkElement).toBeDefined()
    })
})
