import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
       <Head>
          <title>Ninja List | Home</title>
          <meta name='keywords' content='ninja'></meta> 
       </Head>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta 
      lectus ligula, vitae feugiat diam auctor at. Aliquam ipsum nisl, sagittis 
      quis est eget, scelerisque pharetra sem. Aenean finibus rhoncus massa ut 
      pharetra. Vestibulum turpis metus, pretium sit amet semper quis, tempus at
      ante. Pellentesque habitant morbi tristique senectus et netus et malesuada 
      fames ac turpis egestas. Fusce aliquet elementum nisl. In ultrices leo vel 
      semper ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia curae; Cras laoreet elementum eleifend. Mauris 
      placerat lorem a leo luctus, sit amet varius nulla tincidunt. Nullam mattis 
      nibh et elit fringilla mollis. Donec in augue id mauris consectetur ullamcorper. 
      Nullam et lorem est. Nulla ligula quam, tempus ac lacus eu, egestas dapibus ligula. 
      Quisque malesuada dictum porttitor. Vivamus tempus felis lectus, at placerat ex suscipit vel.
      </p>
      <p className={styles.text}>
      Maecenas ac sapien ac velit aliquet dictum quis ut purus. Mauris bibendum urna ante,
      non ornare est ullamcorper sit amet. Vestibulum sit amet sapien vehicula, vehicula turpis 
      vel, gravida risus. Aliquam eu massa turpis. Aliquam erat volutpat. Maecenas pharetra eros 
      non venenatis laoreet. Etiam purus elit, tempus a luctus ac, dictum et felis. Proin quis 
      elementum augue. Aenean venenatis mattis felis varius vehicula. Pellentesque habitant morbi 
      tristique senectus et netus et malesuada fames ac turpis egestas. Etiam lacinia nisi vitae 
      </p>
      <Link className={styles.btn} href="/ninja">See Ninja List</Link>
    </>
  )
}
