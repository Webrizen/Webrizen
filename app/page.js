"use client";
import Button from '@mui/material/Button';
import styles from './styles/home.module.css';
import HeroIMG from './assets/images/4.png'
import Image from 'next/image';

export default function Home() {

  return (
      <>
      <section className={styles.home}>
        <div className={styles.left}>
          <h1>
            A Place Where Imaginations Creates Dynamic Flaming Web Solutions.
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, quidem molestiae dolorum natus placeat recusandae at libero sunt modi facere iusto repellat nobis voluptate incidunt voluptates delectus odio in amet et, saepe doloremque?</p>
          <Button size='large'>Learn More</Button>
        </div>
        <div className={styles.right}>
        <Image src={HeroIMG} alt='Hero Image' />
        </div>
      </section>
      </>
  )
}
