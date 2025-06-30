import {lazy} from 'react';
const HomePage = lazy(() => import('../pages/Home'));
const PaymentsPage = lazy(() => import('../pages/Payments'));
const GroupPage = lazy(() => import("../pages/Groups"));
const RatingsPage = lazy(() => import("../pages/Ratings"));
const BookmarksPage = lazy(() => import("../pages/Bookmarks"));
const ShopPage = lazy(() => import("../pages/Shop"));
const ExtraLessonPage = lazy(() => import("../pages/Extra-lesson"));
const SettingsPage = lazy(() => import("../pages/Setting"));
const RegisterForm = lazy(() => import('../auth/Register'));
const LogIn = lazy(() => import('../auth/LogIn'));
export {HomePage, PaymentsPage, GroupPage, RatingsPage, BookmarksPage,ShopPage, ExtraLessonPage, SettingsPage, RegisterForm,LogIn} 