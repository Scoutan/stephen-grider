import React from 'react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function BackButton() {
  return (
    <Link href="/">
      <a>
        <h2>&larr; back</h2>
      </a>
    </Link>
  )
}