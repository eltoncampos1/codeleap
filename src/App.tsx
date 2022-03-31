import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Posts, Signin } from './pages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  )
}