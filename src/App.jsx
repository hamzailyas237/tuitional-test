import './App.css';
import Stepper from './components/stepper/Stepper';
import Navbar from './components/Navbar/Navbar';
import AddEducationSection from './sections/AddEducationSection/AddEducationSection';

function App() {
  return (
    <div>
      <Navbar />
        <Stepper pageNo={3} totalPages={5} title="Step Three" />
        <AddEducationSection/>
    </div>
  );
}

export default App;
