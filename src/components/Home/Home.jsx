import React from 'react'
import styles from './Home.module.css'
import Header from '../Header/Header'

const Home = () => {
  return (
   
    <div className={styles.home_sc} >
        {/* <Header/> */}
       <div className={styles.home}>
       <h1>Welcome to React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt quae error, placeat mollitia aperiam voluptas consectetur veniam nam corrupti accusamus quisquam expedita asperiores aut possimus voluptates modi obcaecati atque.
      Eveniet ab, rem iusto sunt voluptas recusandae aliquid optio. Iusto molestiae harum provident nihil non perferendis. Nostrum odio, quam dolore ab ea vero nihil deleniti perspiciatis sapiente assumenda quasi nemo.
      Blanditiis facere, maiores est doloribus obcaecati soluta ipsum aspernatur voluptatem maxime nostrum, fugiat voluptatibus ab modi quo dicta illum vel repellat quos optio facilis fuga autem quod? Distinctio, ratione autem?
      Voluptatibus aliquid autem facilis ad eius. Fuga, non hic deserunt libero vero aliquid asperiores quo laboriosam dolor! Alias dolorum illo dolore enim? Libero nulla reprehenderit molestias ea dolor accusamus nemo.</p>
      <button>Explor more !!!</button>
       </div>
 
    </div>
  )
}

export default Home
