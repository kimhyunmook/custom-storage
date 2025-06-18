import "./styles/index.css";
import Provider from "./provider";
import TestPage from "./pages/toast";

export default function App() {
  return (
    <div className="App">
      <Provider>
        <TestPage />
      </Provider>
    </div>
  );
}
