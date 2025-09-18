import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { UserFrom, Users } from "./pages/user";
import Header from "./components/header";
import "./index.css";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-1">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user-form" element={<UserFrom />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default memo(App);
