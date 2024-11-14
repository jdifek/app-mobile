import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Profile } from "./components/Profile/Profile";
import { Library } from "./components/Library/Library";
import { Rangs } from "./components/Rangs/Rangs";
import { Bonus } from "./components/Bonus/Bonus";
import { Subscription } from "./components/Subscription/Subscription";
import { Hi } from "./components/Hi/Hi";
import Month from "./components/Subscription/Month";
import Year from "./components/Subscription/Year";
import HomeNews from "./components/Home/HomeNews";
import HomeSocial from "./components/Home/HomeSocial";
import HomeAbout from "./components/Home/HomeAbout";
import { ListenToAFairyTale } from "./components/Assignments/ListenToAFairyTale";
import { PlusAssigments } from "./components/Assignments/PlusAssigments";

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<HomeNews />} />
        <Route path="/social" element={<HomeSocial />} />
        <Route path="/about" element={<HomeAbout />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/library" element={<Library />} />
        <Route path="/rangs" element={<Rangs />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/hi" element={<Hi />} />
        <Route path="/listen-tale" element={<ListenToAFairyTale />} />
        <Route path="/plus-assigments" element={<PlusAssigments />} />
      </Routes>
    </Router>
  );
}

export default Root;
