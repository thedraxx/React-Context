import { MyPage } from "./Components/MyPage";
import { MyPageContext } from "./Components/MyPageContext";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr />
      <MyPage />
      <MyPageContext /> 
    </div>
  );
}

export default App;
