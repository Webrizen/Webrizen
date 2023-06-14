"use client";
import React from 'react';
import styles from '../styles/navbar.module.css';
import Button from '@mui/material/Button';

function CustomButton({ children }) {
  return <Button className={styles.movingBorder}><span>Get a Proposal</span></Button>;
}

export default CustomButton;
