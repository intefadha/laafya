import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('https://localhost:4000')
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <h1>{message}</h1>
    </div>
  );
}
