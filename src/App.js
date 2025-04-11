
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import { routePath } from './routes/route';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import MyJobs from './pages/MyJobs';
import ResumeReferencePage from './pages/ResumeReferencePage';
import ResumeBuilder from './components/ResumeBuilder';
import './index.css';






function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.posts} element={<AllPosts />} />
        <Route path={routePath.create} element={<CreatePost />} />
        <Route path={routePath.profile} element={<Profile />} />
        <Route path={routePath.myjobs} element={<MyJobs />} />
        <Route path="/resumes" element={<ResumeReferencePage />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />



      </Routes>
    </Router>
  );
}

export default App;



