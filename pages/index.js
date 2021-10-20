import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Marlon's InstaImage Feed</title>
      </Head>

      {/* HEADER */}
      <Header />

      {/* FEED */}
      <Feed />

      {/* MODAL */}
    </div>
  );
}
