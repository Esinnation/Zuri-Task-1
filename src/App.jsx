import React from 'react'
import './App.css'
import Profile from '../components/Profile/Profile'
import Links from '../components/Links/Links'
import SocialIcons from '../components/SocialIcons/SocialIcons'
import Footer from '../components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Profile />
      <Links />
      <SocialIcons/>
      <Footer/>
    </div>
  )
}

export default App
