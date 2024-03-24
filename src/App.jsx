import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';


function App() {
  return (
    <div>
      <Header /> 
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept 
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image = {CORE_CONCEPTS[2].image}
          />
          <CoreConcept 
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image = {CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
      </main>
    </div>
  );
}
//헤더라는 컴포넌트를 태그안에 넣어서 쉽게 사용가능 <Header />는 <Header></Header>와 같다
export default App;
