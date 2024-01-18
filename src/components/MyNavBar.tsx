import Link from 'next/link'
import React from 'react'
import styles from "@/styles/MyNavBar.module.css"

export default function MyNavBar() {
  return (
      <nav className={styles.navbar}>
          <Link className={styles.links} href="/">Homepage</Link>
          <Link className={styles.links}  href="/characters/1">Characters</Link>
          <Link className={styles.links}  href="/characters/episodes">Episodes</Link>
    </nav>
  )
}
