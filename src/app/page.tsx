import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MoviewRow';


export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle={'Trending now'} />
        <MovieRow sectionTitle={'Top rated'} />
        <MovieRow sectionTitle={'Action Movies'} />
      </main>
    </div>
  );
}

