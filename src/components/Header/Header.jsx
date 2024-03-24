import reactImg from '../../assets/react-core-concepts.png' // 기본이 ./이고 ../은 components폴더에서 한칸 나가야 하기 때문
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
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