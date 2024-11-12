import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { App } from "./App";
import { Assignments } from "./Assignments/Assignments";
import { Bonus } from "./Bonus/Bonus";
import { Hi } from "./Hi/hi";
import { Home } from "./Home/Home";
import { Library } from "./Library/Library";
import { Profile } from "./Profile/Profile";
import { Rangs } from "./Rangs/Rangs";
import { Subscription } from "./Subscription/Subscription";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="assignments" element={<Assignments />} />
          <Route path="bonus" element={<Bonus />} />
          <Route path="hi" element={<Hi />} />
          <Route path="home" element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="profile" element={<Profile />} />
          <Route path="rangs" element={<Rangs />} />
          <Route path="subscription" element={<Subscription />} />
        </Route>
      </Routes>
    </Router>
  );
};
