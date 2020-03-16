import * as React from 'react'
import Helmet from 'react-helmet'

import { GlobalStyle } from './styled'

type TemplateProps = {
  children: React.ReactNode
}

function DefaultLayout(props: TemplateProps) {
  const { children } = props

  return (
    <>
      <Helmet title="Colección Científica y Museográfica Fucesa" />
      <GlobalStyle />
      {children}
    </>
  )
}

export default DefaultLayout
