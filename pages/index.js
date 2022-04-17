import styles from '../styles/Home.module.css'
import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Create a Car!</h1>
        <CarForm/>
        <SearchForm/>
    </main>
  )
}
