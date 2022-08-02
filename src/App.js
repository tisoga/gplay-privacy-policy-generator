import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import {InputPage, ErrorPage, PrivacyPolicyPage, NotificationModal} from './layouts/';
import { MainPageLink, GeneratedLink, PrivacyPoliciesLink, } from './routeLink'
import { initializeApp } from 'firebase/app'
import firebaseConfig from './firestoreConfig';


export const DataContext = createContext()

function App() {
  const firebaseApp = initializeApp(firebaseConfig)
  const [modalNotification, setModalNotification] = useState({
    isOpen: false,
    title: 'test',
    text: 'test',
    type: 'error'
  })
  const [data, setData] = useState(
    {
      developerName: "",
      developerEmail: '',
      appName: '',
      shortDesc: '',
      yourWeb: '',
      lastUpdateDate: '',
      informationApp:
      {
        userInformation: [],
        automaticInformation: false,
        appGetLocation: false,
      }
    })
  return (
    <DataContext.Provider value={{ data, setData, modalNotification, setModalNotification }}>
      <BrowserRouter>
        <Routes>
          <Route path={MainPageLink} element={<InputPage />} />
          <Route path={GeneratedLink} element={<PrivacyPolicyPage />} />
          <Route path={PrivacyPoliciesLink} element={<PrivacyPolicyPage />} />
          <Route
            path='*'
            element={
              <ErrorPage errorMsg={'404 Page not Found'} Redirect={false}/>
            }
          />
        </Routes>
        <NotificationModal />
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
