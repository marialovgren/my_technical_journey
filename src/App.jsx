import { BrowserRouter, Route, Routes  } from 'react-router-dom'

/** Pages **/
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
	return (
		<BrowserRouter> 
			<div className="App">
				<Routes>
					<Route path="/" end element={<HomePage />} />
					<Route path="/about" end element={<AboutPage />} />
					<Route path="/projects" end element={<ProjectsPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
