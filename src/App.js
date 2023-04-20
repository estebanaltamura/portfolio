import { useContext } from 'react';
import { chosenProjectContext } from './components/contexts/ChosenProject';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';
import { ProjectsListContainer } from './components/Projects/ProjectsListContainer';
import { PreviewsListContainer } from './components/Previews/PreviewsListContainer';
import { ProjectSummary } from './components/ProjectSummary/ProjectSummary'; 

import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {

  const {currentProject} = useContext(chosenProjectContext)
  

return (      
        <div className="App">
            <Header />
            <div className="appContainer">
              <Welcome />
              <ProjectsListContainer />
              {
                currentProject.name !== "" && 
                  <>
                    <PreviewsListContainer />
                    <ProjectSummary />   
                                     
                  </>
              }
            
            </div>
            <Footer />
          </div>
     
  );
}

export default App;
