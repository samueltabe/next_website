import React from 'react'
import styles from '../../styles/Ninja.module.css'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return{
    props:{ ninjas:data }
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <>
    <Head>
      <title>Ninja List | List</title>
      <meta name='keywords' content='ninja'></meta> 
    </Head>
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a href={'/ninja/' + ninja.id} className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </div>
    </>
  );
}
 


export default Ninjas