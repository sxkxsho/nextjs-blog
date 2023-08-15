import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout';
import { useState } from "react";
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text,setText] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text)
  };

  const addTodos = () => {
    if(text == "") {
      alert("入力してください");
      return false;
    }
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Layout>
    <Head>
        <title>Sakayori Todoアプリ</title>
      </Head>
    <main>
      <h1>Sakayori Todoアプリ</h1>
      <div className="input-box">
          <input type="text" value={text} onChange={changeText} />
          <button onClick={addTodos}>追加</button>
      </div>
      <div className="todo-container">
        <ul>
        {todos.map((todo, index) => (
            <li key={todo}>
              <p>{todo}</p>
              <button onClick={() => deleteTodo(index)}>完了</button>
            </li>
          ))}
        </ul>
      </div>
      <Link className="link" href="/posts/description">App Description</Link>
    </main>
    </Layout>
  )
}
