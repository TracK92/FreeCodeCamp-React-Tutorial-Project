import {React, useLayoutEffect} from 'react'
import Feed from './Feed'
import preloader  from './preloader.gif';
import { useStoreState, useStoreActions } from 'easy-peasy';
import useAxiosFetch from './hooks/useAxiosFetch';

const Home = () => {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const  searchResults  = useStoreState((state) => state.searchResults);

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useLayoutEffect(() => {
    setPosts(data);

  }, [data, setPosts])

  return (
    <main className='Home'>
      
      {isLoading && <img src={preloader} alt="preloader" className="preloader"/>}
       {!isLoading && fetchError && <p className='statusMsg' style={{ color:'red', minHeight: '100vh', textAlign:'center', margin: '200px auto' }}>{fetchError}</p>}
       {!isLoading && !fetchError && searchResults.length ? <Feed posts={searchResults} /> : 
         !fetchError && !isLoading && <p style={{ minHeight: '100vh', textAlign:'center', margin: '200px auto' }} className='statusMsg'>No posts to display</p>
       }
      
    </main>
  )
}

export default Home