import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/Form/SignUp';
import Profil from './components/Profil/Profil';
import SignIn from './components/Form/SignIn';
import Main from './components/Main/Main'
import PostInfo from './components/Main/PostBox/PostInfo'
import obj from './Object.js'
import Lists from './components/Main/Lists/Lists';
import Edit from './components/Main/NewPosts/Edit';
import BookmarkPage from './components/Main/Lists/Bookmarks';
import Notifications from './components/Main/SiteBar/Notifications';
import Stories from './components/Main/SiteBar/Stories';

function App() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [number, setNumber] = useState("");
  const [email, setEmail]  = useState("");

  // Modal uchun
  const [bookmarks, setBookmarks] = useState([])
  const [newBookMark, setNewBookmark] = useState([])

  const [saved, setSaved] = useState([...obj])


  return (
    <div className="App">
      <Routes>
        <Route path="main" element = {<Main 
            bookmarks = {bookmarks}
            setBookmarks = {setBookmarks}
            newBookMark = {newBookMark}
            setNewBookmark = {setNewBookmark}
            saved = {saved}
            setSaved = {setSaved}
            
        />} />
        <Route path='/' element = {
            <SignUp 
              name = {name}
              setName = {setName}
              lastName = {lastName}
              setLastName = {setLastName}
              email = {email}
              setEmail = {setEmail}
              number = {number}
              setNumber = {setNumber}
            />
        }
        />
        <Route path="profil" element = {
            <Profil
                name = {name}
                setName = {setName}
                lastName = {lastName}
                setLastName = {setLastName}
                email = {email}
                setEmail = {setEmail}
                number = {number}
                setNumber = {setNumber}
        />} 
        />
        <Route path="signin" element = {<SignIn />} />
        <Route path = "posts/:id" element = {<PostInfo objData = {obj} />}/>
        <Route path="lists" element = {<Lists saved = {saved} />} />
        <Route path="edit" element = {<Edit />} />
        <Route path='bookmarks' element = {<BookmarkPage />} />
        <Route path='notifications' element = {<Notifications />} />
        <Route path='stories' element = {<Stories />} />
      </Routes>
    </div>
  );
}

export default App;
