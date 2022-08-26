import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './routes/home/Home';
import Notifications from './routes/notifications/Notifications';
import Summary from './routes/summary/Summary';
import Publish from './routes/publish/Publish';
import Engage from './routes/engage/Engage';
import Compose from './routes/publish/compose';
import Feed from './routes/publish/feed';
import Listen from './routes/listen/Listen';
import Report from './routes/report/Report';

import Sidebar from './components/sidebar';
import Profile from './components/profile';
import { Main } from './main-style';

const App = () => (
  <Main>
    <Sidebar />
    <Profile />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="summary" element={<Summary />} />
      <Route path="publish" element={<Publish />}>
        <Route path="compose" element={<Compose />} />
        <Route path="feed" element={<Feed />} />
      </Route>
      <Route path="engage" element={<Engage />} />
      <Route path="listen" element={<Listen />} />
      <Route path="report" element={<Report />} />
    </Routes>
  </Main>
);

export default App;
