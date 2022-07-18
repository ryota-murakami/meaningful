import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  return (
    <section className="w-16 p-4">
      <Link to="/d1">D1</Link>
      <Link to="/d2">D2</Link>
      <Link to="/d2">D3</Link>
    </section>
  )
}

export default memo(Sidebar)
