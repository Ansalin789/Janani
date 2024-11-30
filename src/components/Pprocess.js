import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import styles from './Pprocess.module.css'; // Import the CSS module

const Pprocess = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div >
    <div className={styles.container}>
       <div className={styles.infographic}>
        <div className={styles.leftCircle} data-aos="fade-left">
          <h2 className={styles.title}>HOW TO START CLASSES</h2> 
          <button className={styles.button}>Begin Your Journey</button> {/* Add button here */}
        </div>
        <div className={styles.rightBoxes}>
          <div className={styles.box} data-aos="fade-down">
            <div className={styles.icon}><span role="img" aria-label="search">🔍</span></div>
            <div>
              <h3 className={styles.heading}>Effective Planning Strategies</h3>
              <p className={styles.paragraph}>
              Set your course and your objective              </p>
            </div>
          </div>
          <br/>
          <br/>
          <div className={styles.box} data-aos="fade-right">
            <div className={styles.icon}><span role="img" aria-label="idea">💡</span></div>
            <div>
              <h3 className={styles.heading}>Master Your Study Schedule</h3>
              <p className={styles.paragraph}>
              Create a timetable & plan schedule accordingly</p>
            </div>
          </div>
          <br/>
          <br/> 
          <div className={styles.box} data-aos="fade-up">
            <div className={styles.icon}><span role="img" aria-label="target">🎯</span></div>
            <div>
              <h3 className={styles.heading}>Optimizing Your Study Techniques</h3>
              <p className={styles.paragraph}>
              Pay and begin your courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pprocess;
  

