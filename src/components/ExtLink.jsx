import React from 'react'
import { Link } from 'react-router-dom'

const ExtLink = () => {
  return (
    <section className='cta'>
        <p className='cta-text '> Links </p>
        <Link to='https://github.com/avinashwele' target="_blank" className='btnR'>GitHub Repo</Link>
        
        <Link to='https://github.com/avinashwele' target="_blank" className='btnR'>Visit Live Website</Link>
    </section>
  )
}

export default ExtLink