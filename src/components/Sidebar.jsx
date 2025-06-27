import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { PiRankingBold } from "react-icons/pi";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  return (
    <aside className="sidebar p-4">
      <div className="flex flex-col gap-2">
        <SidebarItem icon={<AiFillHome />} to="/menu" label="Bosh sahifa" />
        <SidebarItem icon={<MdOutlinePayment />} to="/payments" label="To'lovlar" />
        <SidebarItem icon={<MdGroups />} to="/groups" label="Guruhlar" />
        <SidebarItem icon={<PiRankingBold />} to="/rating" label="Reyting" />
        <SidebarItem icon={<IoStatsChartSharp />} to="/bookmarks" label="Ko'rsatgichlarim" />
        <SidebarItem icon={<FaCartShopping />} to="/shop" label="Do'kon" />
        <SidebarItem icon={<MdCastForEducation />} to="/extra-lessons" label="Qo'shimcha Darslar" />
        <SidebarItem icon={<IoMdSettings />} to="/settings" label="Sozlamalar" />
      </div>
    </aside>
  );
};

// 🔁 Reusable component
const SidebarItem = ({ icon, to, label }) => (
  <div className="text-2xl flex items-center gap-3 p-2 hover:bg-amber-100 rounded-md transition">
    {icon}
    <Link to={to} className="text-[18px]">
      {label}
    </Link>
  </div>
);

export default Sidebar;