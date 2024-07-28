

import React from 'react'
import PlaceholderImage from '../../assets/images/placeholders/placeholderV3.PNG'
import styles from './add-education-section.module.css'
import AddEducationForm from '../../components/educationform/AddEducationForm'

const AddEducationSection = () => {
  return (
      <div className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <img src={PlaceholderImage} alt="Description" className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <AddEducationForm />
      </div>
    </div>
  )
}

export default AddEducationSection

