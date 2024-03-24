import reactImg from './assets/react-core-concepts.png'

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header(){
  const description = reactDescriptions[genRandomInt(2)];
  
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}


function App() {
  return (
    <div>
      <Header /> 
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
//헤더라는 컴포넌트를 태그안에 넣어서 쉽게 사용가능 <Header />는 <Header></Header>와 같다
export default App;
