import React from 'react';

const Body = () => {
  return (
    <div className='body-container'>
      {/* Section 1 */}
      <section className='body-intro'>You believe any of that sh*t?</section>
      <section className='section-container'>
        <div className='section-title horizontal-title bg-gradient-orange-right'>
          section-title
        </div>
        <div className='content-bubble bubble-left'>section-content</div>
      </section>
      {/* Section 2 */}
      <section className='section-container'>
        <div className='section-title horizontal-title bg-gradient-orange-right'>
          section-title
        </div>
        <div className='content-bubble bubble-right'>section-content-2</div>
      </section>
      {/* Section 3 */}
      <section className='section-container' id='flex-row'>
        <div className='section-title vertical-title bg-gradient-orange-top'></div>
        <div className='content-bubble bubble-horizontal'>
          section-content-3
        </div>
      </section>
      {/* Section 4 */}
      <section className='section-container'>
        <div className='section-title square-title bg-gradient-orange-top'></div>
        <div className='content-bubble bubble-top-left'>section-content-4</div>
      </section>
      <div className='box'>Box 1</div>
      <div className='box'>Box 2</div>
      <div className='box'>Box 3</div>
      <div className='box'>Box 4</div>
      <div className='box'>Box 5</div>
      <div className='box'>Box 6</div>
      <div className='box'>Box 7</div>
      <div className='box'>Box 8</div>
      <div className='box'>Box 9</div>
      <div className='box'>Box 10</div>
      <div className='box'>Box 11</div>
      <div className='box'>Box 12</div>
      <div className='box'>Box 1b</div>
      <div className='box'>Box 2b</div>
      <div className='box'>Box 3b</div>
      <div className='box'>Box 4b</div>
      <div className='box'>Box 5b</div>
      <div className='box'>Box 6b</div>
      <div className='box'>Box 7b</div>
      <div className='box'>Box 8b</div>
      <div className='box'>Box 9b</div>
      <div className='box'>Box 10b</div>
      <div className='box'>Box 11b</div>
      <div className='box'>Box 12b</div>
    </div>
  );
};

export default Body;
