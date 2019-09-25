import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'
import './style.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Nicole Cordisco Photography" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
