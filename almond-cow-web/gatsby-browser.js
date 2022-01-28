import * as React from 'react'
import Layout from '@components/Layout'
import { StoreProvider } from './src/context/store-context'

export const wrapPageElement = ({ element, props }) => {
  return (
    <StoreProvider>
      <Layout {...props}>{element}</Layout>
    </StoreProvider>
  )
}
