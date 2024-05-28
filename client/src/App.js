import Header from './component/Header';
import Post from './component/Post';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import ProfileSetting from './pages/ProfileSetting';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Layout from './Layout';
import Contact from './pages/Contact';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
	const {user}=useContext(Context);
  return (
	
	<Routes>
	  <Route path="/" element={ <Layout><Home /> </Layout> } />
	  <Route path="/register" element={<Layout> {user? <Home/>: <Register />}</Layout>} />
	  <Route path="/login" element={<Layout> {user? <Home/>: <Login />}</Layout>} />
	  <Route path="/write" element={<Layout>{user? <Write/>: <Register />}</Layout>} />
	  <Route path="/profilesetting" element={<Layout><ProfileSetting /></Layout>} />
	  <Route path="/contact" element={<Layout><Contact/></Layout>} />
	  <Route path="/post/:postId" element={<Layout><Single /></Layout>} />
	</Routes>

	


	
		

	
  );
}

export default App;
