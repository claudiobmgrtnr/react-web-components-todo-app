import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const uiButton = useRef(null);
  const [count, setCount] = useState(0);
  const clickCallBack = (e) => setCount(count + 1);

  useEffect(() => {
    import('../components/Button');
    const btn = uiButton.current;
    btn.addEventListener('hello', (e)=> console.log(e.detail.value));
    btn.addEventListener('countUp', clickCallBack);

    return () => {
      btn.removeEventListener('countUp', clickCallBack);
    }
  });

  return (
    <div className={styles.container}>
      <h1>Hallo Welt</h1>
      <ui-button count={count} class={styles.code} ref={uiButton}>
         Bla has been {count} clicked times
      </ui-button>
    </div>
  )
}
