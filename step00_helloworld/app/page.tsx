import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className={styles.main}>Hello from Sohail Ishaque from PIAIC</h1>
  )
}
