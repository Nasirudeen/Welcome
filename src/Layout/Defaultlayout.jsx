import React from 'react'

import Navbar from '../Pages/Navbar'

export default function Defaultlayout({children}) {
  return (
    <div>
        <Navbar/>
        <div>{children}</div>
    </div>
  )
}
