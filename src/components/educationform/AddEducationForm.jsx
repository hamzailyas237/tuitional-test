import React from "react";
import styles from "./add-education-form.module.css";
import FormNavigationButton from "../FormNavigationButton/FormNavigationButton";

const AddEducationForm = () => {
  return (
    <div>
      <h2>Education</h2>
      <p>
        Tell students more about the higher education that you've completed or
        are working on
      </p>
      <div className={styles.formContainer}>
        <h4>Add Education</h4>
        <form className={styles.form}>
          <div className={styles.row}>
            <input
              type="text"
              placeholder="University Name"
              className={styles.fullInput}
            />
            <input
              type="text"
              placeholder="Degree Name"
              className={styles.fullInput}
            />
          </div>
          <div className={styles.row}>
            <select className={styles.fullInput}>
              <option value="">Degree Type</option>
              <option value="bachelor">Bachelor</option>
              <option value="master">Master</option>
              <option value="phd">PhD</option>
            </select>
            <select className={styles.halfInput}>
              <option value="">Years of Study</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
            </select>
            <input
              type="text"
              placeholder="End of Study"
              className={styles.halfInput}
            />
          </div>
          <div className={styles.fileInputContainer}>
            <input type="file" className={styles.fileInput} />
            <div className={styles.fileInputText}>
              <p>Upload a Document or Drop CV Here</p>
              <p>Supports PDFs, DOCs & DOCx (Max 5MB)</p>
            </div>
          </div>
          <FormNavigationButton showBack={true} showNext={true} />
        </form>
      </div>
    </div>
  );
};

export default AddEducationForm;
