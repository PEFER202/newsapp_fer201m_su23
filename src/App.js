import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuForm from "./components/menuform";
import store from "./redux/store";
import NewsDetail from "./components/newsDetails";
import NewsList from "./components/newsList";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MenuForm onSearch={handleSearchChange} searchTerm={searchTerm} />
          <div className="content" style={{ display: "flex" }}>
            <Routes>
              <Route path="/" element={<NewsList searchTerm={searchTerm} />} />
              <Route path="/news/:newsId" element={<NewsDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
