
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './page/home'
import Chatbot from './page/chatbot'
import PageNotFound from './page/error_page'
import AboutUs from './page/about_us'
import HowToUse from './page/how_to_use'
import TermsAndConditions from './page/terms&conditions'
import PrivacyPolicy from './page/privacy'
import UserAuthForm from './page/userAuthform';
import ContactUs from './page/contact_us'
import Hospital from './page/hospital'
import Rehab from './page/rehab'
import Police from './page/police'
import Emergency from './page/emergency'
import ForgotPassword from './page/forgotpassword'
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { lookInSession } from './common/sessions';
import UserDashboard from './page/userDashboard.jsx'


// export const UserContext = createContext({})
export const UserContext = createContext({
  userAuth: { fullname: "", email: "" , username: "" , profileImg:""},
});

const App=()=> {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() =>{

    let userInSession = lookInSession("user");

    userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({token: null})

  }, [])

  return (
    <>
    <UserContext.Provider value={{userAuth, setUserAuth}}>

     <Routes>
       <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='/chatbot' element={<Chatbot/>}/>
          <Route path='/userDashboard' element={<UserDashboard/>}/>
          <Route path='/hospital' element={<Hospital/>}/>
          <Route path='/rehab' element={<Rehab/>}/>
          <Route path='/police' element={<Police/>}/>
          <Route path='/emergency' element={<Emergency/>}/>
          <Route path='signin' element={<UserAuthForm type='sign-in'/>}/>
          <Route path='signup' element={<UserAuthForm type='sign-up'/>}/>
          <Route path='/about_us' element={<AboutUs/>}/>
          <Route path='/how_to_use' element={<HowToUse/>}/>
          <Route path='/contact_us' element={<ContactUs/>}/>
          <Route path='/terms&conditions' element={<TermsAndConditions/>}/>
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='*' element={<PageNotFound/>}/>
       </Route>
     </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App
