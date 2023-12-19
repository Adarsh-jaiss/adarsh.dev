import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hey, Hi my name is</p>
      <h1 className={styles.heading_1}>Adarsh Jaiswal.</h1>
      <h1 className={styles.heading_2}>I build for the Community.</h1>
      <p className={styles.desc}>
        I'm a budding backend developer who specializes in designing and building
        scalable and robust backend systems. I create content and write tech blogs and contribute
        to open source.
        I am a community person and currently I am leading Google Developers
        Club at my University.
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;
