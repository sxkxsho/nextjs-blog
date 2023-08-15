import Link from 'next/link';
import Head from 'next/head'
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>Sakayori Todoアプリ</title>
      </Head>
      <h1>初めて作ったNext.jsアプリ</h1>
      <h2>
        <Link href="/">戻る</Link>
      </h2>
    </Layout>
  );
}