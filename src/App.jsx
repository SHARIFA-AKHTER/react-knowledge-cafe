
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs' 
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);
  
  const handleAddBookmarks = blog =>{
  const newBookmarks =[...bookmarks, blog];
  setBookmarks(newBookmarks);

  }

  const handleMarkAsRead = time =>{
 const newReadingTime = readingTime + time;
 setReadingTime(newReadingTime);
  }

  return (
    <>
    <Header></Header>
  <div className='md:flex max-w-7xl mx-auto'>
  <Blogs handleAddBookmarks={handleAddBookmarks}
  handleMarkAsRead = {handleMarkAsRead}
  ></Blogs>
  <Bookmarks 
  bookmarks={bookmarks} 
  readingTime={readingTime}>
  </Bookmarks>
  </div>
    </>
  )
}

export default App
