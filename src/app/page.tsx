import Header from "./Components/Header";
import Hero from "./Components/Hero";
import styles from './assets/styles/Header.module.css'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>

  );
}
