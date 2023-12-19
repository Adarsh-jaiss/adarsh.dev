// import { StickyNote2Sharp } from "@mui/icons-material";
import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hey, Hi I'm Adarsh and I am a Developer, Freelancer & a Content creator. I
            create content on {""}
            <a
              href="https://twitter.com/twtadarsh"
              className={styles.color1}
            >
              Twitter{" "}
            </a>
            {""}
            and write some cool{" "}
            <a href="blogbyadarsh.hashnode.dev" className={styles.color1}>
              Blogs{" "}
            </a>
            about trending tech and my experience. Also, I'm a Backend 
            developer and i primarily work in Golang and NodeJS. I'm also a Stand Up
            comic by night, I like hanging out with pepole and bring my
            ideas to life.
          </p>
          <p className={styles.desc}>
            Currently I'm a Second year student pursuing B.Tech in Computer
            Science at{" "}
            <a href="https://www.iesuniversity.ac.in/" className={styles.color1}>
              {" "}
              IES University, Bhopal, India.
            </a>{" "}
            <br></br>I have built scalable and robust backend systems 
            like{" "}
            <a href="https://github.com/Adarsh-jaiss/GO-Hotel-reservation" className={styles.color1}>
              Book My hotel
            </a>{" "}
            &{" "}
            <a href="#https://github.com/Adarsh-jaiss/Microservice-toll-calculator#" className={styles.color1}>
            TollCraft.
            </a>{" "}
            I'm Also a community evangelist currently leading the local {" "}
            <a
              href="https://community.cncf.io/bhopal/"
              className={styles.color1}
            >
              CNCF Bhopal (Cloud native computing foundation),
            </a>{" "} 
            <a
              href="https://gdsc.community.dev/ies-college-of-technology-bhopal/"
              className={styles.color1}
            >
              GDSC (Google Developers Club)
            </a>{" "}
            chapter at my university with over 1K+ community members.
            I'm also the Ambassador at the &nbsp;
            <a
              href="https://nextarch.io/"
              className={styles.color1}
            >
               NextArch foundation
            </a>{" "}
            (which is the sub-foundation of The Linux Foundation).
          </p>
        </div>

        <div className={styles.right}>
          <img
            src="./images/adarsh.jpeg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
