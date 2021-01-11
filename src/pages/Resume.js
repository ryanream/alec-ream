import React from 'react';

const Resume = () => {
  return (
    <div className="body-container">
      <section className="body-intro">Here's the Resume.</section>

      <iframe
        title="ream-resume"
        style={{
          width: '90vw',
          maxWidth: '750px',
          height: '900px',
          marginRight: '2%',
        }}
        src="https://docs.google.com/document/d/e/2PACX-1vSpeiG1NFX7S3wDTVDLdp2a-L2I2iRcVR9VXZ-ZyYJMW9QRNpiUCNjxR7_adzJLOwBeBtrmUUsO1_tu/pub?embedded=true"
      ></iframe>
    </div>
  );
};

export default Resume;

// <div class="sk-folding-cube">
//         <div class="sk-cube1 sk-cube">Hi</div>
//         <div class="sk-cube2 sk-cube">Hi</div>
//         <div class="sk-cube4 sk-cube">Hi</div>
//         <div class="sk-cube3 sk-cube">HI</div>
//       </div>
