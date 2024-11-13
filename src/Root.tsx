import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Assignments } from './components/Assignments/Assignments';
import { Profile } from './components/Profile/Profile';
import { Library } from './components/Library/Library';
import { Rangs } from './components/Rangs/Rangs';
import { Bonus } from './components/Bonus/Bonus';
import { Subscription } from './components/Subs/Subscription';
import { Hi } from './components/Hi/Hi';
import Month from "./components/Subs/Month";
import Year from "./components/Subs/Year";

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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