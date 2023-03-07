import { Post, PostType  } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://xesque.rocketseat.dev/users/avatar/profile-45fd3c33-6ed8-43e5-a837-87565fe2feee-1674592517618.jpg',
      name: 'Viviane Martini',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Um projeto realizado durante as aulas da Rocketseat. O nome do projeto é IgniteFeed 🚀'},
      { type: 'link', content: '👉 github.com/vivianemartini/ignite-feed-typescript' },
    ],
    publishedAt: new Date('2023-03-01 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala dev!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no perfil da Rocket. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-02 16:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
            <Post 
               key={post.id} 
               post={post}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}
