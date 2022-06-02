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
import Stories from './components/Main/Stories/Stories';

function App() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [number, setNumber] = useState("");
  const [email, setEmail]  = useState("");

  const [saved, setSaved] = useState([...obj])

  // PUBLISH QILISH UCHUN
  let [inputText, setInputText] = useState([])  
  let [createInput, setCreateInput] = useState('')

  // LIST SAQLASH UCHUN
  const [data, setData] = useState([
    {
        name: "Reading list",
        id: 217389274983
    }
  ])

  return (
    <div className="App">
      <Routes>
        <Route path="main" element = {<Main 
            saved = {saved}
            setSaved = {setSaved}
            data = {data}
            setData = {setData}  

          />} 
        />
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
        <Route path = "posts/:id" element = {
          <PostInfo 
            objData = {obj} 
            name = {name}
            lastName = {lastName}
            />}
        />
        <Route path="lists" element = {<Lists 
          saved = {saved}
          data = {data}
          setData = {setData}
          nameInput = {name}
          lastName = {lastName}
          />} 
        />
        <Route path="edit" element = {
          <Edit
            inputText={inputText} 
            setInputText={setInputText}
            createInput={createInput}
            setCreateInput={setCreateInput}
            name = {name}
            lastName = {lastName}
          />} 
        />
        <Route path='bookmarks' element = {
        <BookmarkPage 
          obj = {obj} 
          name = {name}
          lastName = {lastName}
          />} 
        />
        <Route path='notifications' element = {<Notifications />} />
        <Route path='stories' element = {<Stories inputText={inputText}/>} />
      </Routes>
    </div>
  );
}

export default App;
