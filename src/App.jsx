import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import ContextProvider from './context/ContextProvider'

/** Pages **/
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'

/** Components **/
import Navigation from './Layout/Navigation/Navigation'

function App() {
	return (
		<BrowserRouter> 
			<ContextProvider>
				<div className="App">
					<Navigation />
					<Routes>
						<Route path="/" end element={<HomePage />} />
						<Route path="/about" end element={<AboutPage />} />
						<Route path="/projects" end element={<ProjectsPage />} />
					</Routes>
				</div>
			</ContextProvider>
		</BrowserRouter>
	)
}

export default App
