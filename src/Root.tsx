
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Subscription } from './components/Subs/Subscription';
import { Home } from "./components/Home/Home";
import { Assignments } from "./components/Assignments/Assignments";
import { Profile } from "./components/Profile/Profile";
import { Library } from "./components/Library/Library";
import { Rangs } from "./components/Rangs/Rangs";
import { Bonus } from "./components/Bonus/Bonus";
import { Hi } from "./components/Hi/Hi";
import HomeNews from "./components/Home/HomeNews";
import HomeSocial from "./components/Home/HomeSocial";
import HomeAbout from "./components/Home/HomeAbout";

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<HomeNews />} />
        <Route path="/social" element={<HomeSocial />} />
        <Route path="/about" element={<HomeAbout />} />

        <Route path="/assignments" element={<Assignments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/library" element={<Library />} />
        <Route path="/rangs" element={<Rangs />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/hi" element={<Hi />} />
      </Routes>
    </Router>
  );
}

export default Root;
