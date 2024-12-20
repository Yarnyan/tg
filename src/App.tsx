import './style/global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './RootLayout'

import { Provider } from 'react-redux';
import { setupStore } from './store/store';

import HomePage from './pages/HomePage';

const store = setupStore()

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootLayout>
          <Routes>  
            <Route path="/" element={<HomePage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
