import React from 'react'
import styles from './paginationBottomBar.module.scss'
export default function PaginationBottomBar() {
  return (
    <div className={styles.paginationBottomBarContainer}>
        <div>
            <p>Previous</p>
        </div>
        <div>
            <p>1 2 3 4 5 6 7 8 9</p>
        </div>
        <div>
            <p>Next</p>
        </div>
    </div>
  )
}
