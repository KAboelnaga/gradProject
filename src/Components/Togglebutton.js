// ToggleButton.js
import React, { useEffect } from 'react';
import './Styles/toggle-button.css';

const ToggleButton = () => {
  const st = {};

  useEffect(() => {
    st.flap = document.querySelector('#flap');
    st.toggle = document.querySelector('.toggle');
    st.choice1 = document.querySelector('#choice1');
    st.choice2 = document.querySelector('#choice2');

    st.flap.addEventListener('transitionend', () => {
      if (st.choice1.checked) {
        st.toggle.style.transform = 'rotateY(-15deg)';
        setTimeout(() => (st.toggle.style.transform = ''), 400);
      } else {
        st.toggle.style.transform = 'rotateY(15deg)';
        setTimeout(() => (st.toggle.style.transform = ''), 400);
      }
    });

    st.clickHandler = (e) => {
      if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
          st.flap.children[0].textContent = e.target.textContent;
        }, 250);
      }
    };

    document.addEventListener('DOMContentLoaded', () => {
      st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
    });

    document.addEventListener('click', (e) => st.clickHandler(e));

    return () => {
      // Cleanup event listeners if needed
    };
  }, []);

  return (
    <div className="container">
      <form className="toggle">
        <input type="radio" id="choice1" name="choice" value="creative" />
        <label htmlFor="choice1">Speed</label>

        <input type="radio" id="choice2" name="choice" value="productive" />
        <label htmlFor="choice2">Quality</label>
      </form>
    </div>
  );
};

export default ToggleButton;
