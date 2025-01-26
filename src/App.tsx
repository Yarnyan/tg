import './style/global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './RootLayout'

import { Provider } from 'react-redux';
import { setupStore } from './store/store';

import HomePage from './pages/HomePage';
import CallsPage from './pages/CallsPage';
import StoriesPage from './pages/StoriesPage';
import ContactsPage from './pages/ContactsPage';
import NewCreatePage from './pages/NewCreatePage';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';

const store = setupStore()

function App() {

  

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootLayout>
          <Routes>  
            <Route path="/" element={<HomePage />} />
            <Route path="/calls" element={<CallsPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/create" element={<NewCreatePage />} />
            <Route path="/chat/:id" element={<ChatPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reg" element={<RegPage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
