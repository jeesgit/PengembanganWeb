import './App.css'
import {AuthProvider} from './context/AuthContext';
import MainRoutes from './routes/index';

function App() {
  return (
    <>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </>
  )
}

export default App;
