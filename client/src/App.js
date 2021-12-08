import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import Main from './Main';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  if (!user) return <LandingPage onLogin={setUser} />

  return (
    <div>
    <Header/>
        <Main onLogout={setUser} user={user}/>
    </div>
  )
}

export default App;
