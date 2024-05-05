import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";
import LoginPage from "./LoginPage";
import DoctorLogin from "./register";

function App() {
  return (
    <Router>
      <div className="App">
        {
          <video
            autoPlay
            loop
            muted
            id="video"
            style={{
              position: "fixed",
              right: 0,
              bottom: 0,
              minWidth: "100%",
              minHeight: "100%",
              zIndex: -1,
            }}
          >
            <source src="./gradient.mp4" type="video/mp4" />
          </video>
        }
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainContent />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<DoctorLogin />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
