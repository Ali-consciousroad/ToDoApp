import React from 'react';
// Special kind of css import needed to work with CSS module
import styles from './Button.module.css';
// We don't use JSX anymore here so not needed
// import React from 'react';
// import styled from 'styled-components';
// import './Button.css';
// Attack template literal (default JS feature)
// .button`` here is just a special kind of method
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
  
//   @media (min-width: 768px){
//     width: auto; 
//   }`;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
