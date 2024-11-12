import Image from "next/image";
import { Movies } from "../types/movie";

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => (
  <div className='group h-28 min-w-[200px] cursor-pointer rounded relative transform transition duration-200 ease-in hover:z-50 hover:scale-110 bg-gradient-to-t from-transparent to-black
  md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]
  '>
    <Image
      key={index}
      src={`/item_${index}.png`}
      fill={true}
      alt='MAID'
      className='rounded' />
  </div>
)

export function MovieRow({ sectionTitle, movies }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {movies.map((movie, index) => (
          <h1 key={movie.id}>{movie.title}</h1>
          // <MovieCard key={movie.id} index={index}/>
        ))}
        {/* <Image
              key={index}
              src={`/item_${index}.png`}
              fill={true}
              alt='MAID'
              className='rounded' /> */}
      </div>
    </div>
  );
}
