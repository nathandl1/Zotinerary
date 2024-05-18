import React from 'react'
import styles from './components.module.css'

export default function DisplayCard({name, src, url, desc}) {
  return (
    <>
        <div className={styles.responsive}>
                <div className={styles.gallery}>
                    <div className={styles.title}>{name}</div>
                  <a target="_blank" href={url}>
                    <img src={src} width="33%" height="25%" />
                </a>
                  <div className={styles.desc}>{desc}</div>
                </div>
              </div>
    </>
  )
}
