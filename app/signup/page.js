"use client";
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Container, Paper, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import styles from '../styles/home.module.css';
import CampaignIcon from '@mui/icons-material/Campaign';
import Logo from '../assets/images/logo.png';
import Image from 'next/image';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  return (
    <>
    <section className={styles.home}>
        <div className={styles.left}>
          <b><Lock /> A Secure SignUp Powerd By NextAUTH</b>
          <h1>
            Build Your Dream Project With Us! SignUp To Countinue.
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, quidem molestiae dolorum natus placeat recusandae at libero sunt modi facere iusto repellat nobis voluptate incidunt voluptates delectus odio in amet et, saepe doloremque?</p>
          <Button size='large'>Learn More</Button>
        </div>
        <div className={styles.right}>
        <Container maxWidth="sm">
        <Paper elevation={3} className={styles.glassmorphismContainer}>
          <Image src={Logo} alt="Beone" />
          <h1 className={styles.title}>SignUp Here!</h1>
          <form className={styles.loginForm}>
          <TextField
              label="Name"
              variant="outlined"
              fullWidth
              className={styles.inputField}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              className={styles.inputField}
            />
            <TextField
              label="Password"
              type={showPass ? "text" : "password"}
              onChange={(event) => {
                setPass(event.target.value)
              }}
              required
              name="pass"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button type='submit' variant="contained" fullWidth className={styles.submitButton}>
              SignUp
            </Button>
          </form>
        </Paper>
        <div className={styles.background}>
        </div>
      </Container>
        </div>
      </section>
    </>
  );
}

export default SignUp;
