import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DefinitionPage from './components/DefinitionPage';
import SeizureTypesPage from './components/SeizureTypesPage';
import FirstAidPage from './components/FirstAidPage';
import LivingWithEpilepsyPage from './components/LivingWithEpilepsyPage';
import QuizResultPage from './components/QuizResultPage';
import ResourcesPage from './components/ResourcesPage';
import VideoLibraryPage from './components/VideoLibraryPage';

import QuizPage from './components/QuizPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/definition" element={<DefinitionPage />} />
                        <Route path="/types" element={<SeizureTypesPage />} />
                        <Route path="/first-aid" element={<FirstAidPage />} />
                        <Route path="/living" element={<LivingWithEpilepsyPage />} />
                        <Route path="/quiz" element={<QuizPage />} />
                        <Route path="/stats" element={<QuizResultPage />} />
                        <Route path="/resources" element={<ResourcesPage />} />
                        <Route path="/video" element={<VideoLibraryPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
