import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LogIn } from '../auth/LogIn';

const HomePage = lazy(() => import('../pages/Home'));
const PaymentsPage = lazy(() => import('../pages/Payments'));
const GroupPage = lazy(() => import("../pages/Groups"));
const RatingsPage = lazy(() => import("../pages/Ratings"));
const BookmarksPage = lazy(() => import("../pages/Bookmarks"));
const ShopPage = lazy(() => import("../pages/Shop"));
const ExtraLessonPage = lazy(() => import("../pages/Extra-lesson"));
const SettingsPage = lazy(() => import("../pages/Setting"));
const RegisterForm = lazy(() => import('../auth/Register'));

const AppRoutes = () => {
  return (
    // <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <Routes>
        <Route path="/menu" element={<HomePage />} />
        {/* <Route path="/login" element={<LogIn />} /> */}
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/rating" element={<RatingsPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/extra-lessons" element={<ExtraLessonPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    // </Suspense>
  );
};

export default AppRoutes;
