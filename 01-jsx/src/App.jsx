import "./App.css";

function App() {

  const companyName = "Java Learning Center";
  const courseName = "React";

  return (
    <div className="container">
      <p className="title">
        Welcome to {companyName}
      </p>

      <p className="subtitle">
        You are learning {courseName} from Srinivas Dande
      </p>
    </div>
  );
}

export default App;