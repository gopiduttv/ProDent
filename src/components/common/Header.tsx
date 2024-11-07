import React from 'react'
import Section from '../structure/Container'
import Container from '../structure/Section'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 w-full fixed top-0 z-10">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav className="mt-2">
        <a href="/" className="mx-4 text-white hover:underline">
          Home
        </a>
        <a href="/about" className="mx-4 text-white hover:underline">
          About
        </a>
        <a href="/contact" className="mx-4 text-white hover:underline">
          Contact
        </a>
      </nav>
    </header>
  )
}
