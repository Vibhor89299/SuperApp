import React from "react";
import LeftBanner from "../../Components/LeftBanner/leftBanner";
import styles from "./registration.module.css";
import SignUpForm from "../../Components/SignUpForm/SIgnUpForm";

function Registration() {
  return (
    <div className={styles.container}>
      <LeftBanner />
      <SignUpForm />
    </div>
  );
}

export default Registration;