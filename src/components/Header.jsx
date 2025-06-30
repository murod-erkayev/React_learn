import { Link, useNavigate } from 'react-router-dom';
import { AiFillBell } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { ImMenu } from "react-icons/im";
import { LiaSchoolSolid } from "react-icons/lia";

const Header = () => {
  const navigate = useNavigate(); // Router navigatsiya funksiyasi

  return (
    <header className="header">
      <div className="logo flex justify-between">
        <div className='p-3 flex gap-15 text-1xl'>
          <div className='text-3xl relative pl-2 flex gap-2'>
            <Link to="/">Najot</Link>
            <span className='text-5xl'>
              <LiaSchoolSolid />
            </span>
            <Link>Talim</Link>
            <span className='absolute -top-3 -right-11 bg-amber-600 text-xs text-black px-2 py-0.5 rounded-3xl'>
              Beta
            </span>
          </div>

          <div className="bg-amber-500 rounded-[6px] text-white w-8 h-8 flex justify-center items-center">
            <ImMenu />
          </div>
        </div>

        <div className='flex gap-2 p-2 text-2xl'>
          <AiFillBell />
          <CiLogout 
            onClick={() => navigate('/register')} 
            className="cursor-pointer hover:text-red-600 transition"
            title="Logout"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
