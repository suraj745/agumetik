import React from "react";
import styles from "../../styles/Portfolio/form.module.scss";
const Form = () => {
  return (
    <section className={styles.formContainer}>
      <form action="">
        <section className={styles.container1}>
          <input type="text" placeholder="Name" required />

          <input type="email" placeholder="Email" required />
        </section>

        <input type="number" placeholder="Phone number" required />
        <input type="text" placeholder="Subject" />
        <input className={styles.message} type="text" placeholder="Message" />
        <section className={styles.button}>
          <button>Send Message</button>
        </section>
      </form>
    </section>
  );
};

export default Form;
