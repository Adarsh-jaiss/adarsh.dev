import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.css";

function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://www.linkedin.com/in/adarsh-jaiss/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/adarsh-jaiss"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.instagram.com/adarshig_/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/twtadarsh"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <TwitterIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:its.adarshjaiss@gmail.com" className={styles.email}>
        its.adarshjaiss@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;
