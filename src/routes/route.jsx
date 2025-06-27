import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import PaymentsPage from '../pages/Payments';
import GroupPage  from "../pages/Groups"
import RaitngsPage  from "../pages/Ratings"
import BookMarksPage  from "../pages/Bookmarks"
import ShopPage  from "../pages/Shop"
import ExtraLessonPage  from "../pages/Extra-lesson"
import SettingsPage  from "../pages/Setting"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/menu" element={<HomePage/>} />
      <Route path="/payments" element={<PaymentsPage />} />
      <Route path="/groups" element={< GroupPage/>} />
      <Route path="/rating" element={<RaitngsPage />} />
      <Route path="/bookmarks" element={<BookMarksPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/extra-lessons" element={<ExtraLessonPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default AppRoutes;