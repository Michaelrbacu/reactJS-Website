import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello, I'm Michael Bacu</h1>
      <p style={styles.description}>
        Welcome to my portfolio website where I showcase some of the projects I am building while learning React JS.
        React JS is a powerful library that I became familiar with during an internship, and I'm continuously
        improving my skills to create better web applications.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

export default About;
