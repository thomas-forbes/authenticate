import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Cookies from 'universal-cookie'

import Link from 'next/link'

// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'

import Layout from '../components/layout.js'

function App() {
  const cookies = new Cookies()
  console.log(cookies.get('account'))

  return (
    <div>
      <Layout>
        <h1>Home</h1>

        <Link href="/login">
          <a>Login / Signup</a>
        </Link>

        <style jsx>{`
          * {
            font-family: 'Arial';
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    </div>
  )
}
export default App
