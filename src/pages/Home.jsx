import { IoDiamond } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";
const HomePage = () => {
    return (
      
      <div className="home-page">
        <div>
        <div className="flex justify-start items-start  text-3xl gap-2">
        <h1>Kumushlarim:8098</h1>
        <span className="text-4xl">
        <IoDiamond />
        </span>
        </div>
        <div className="card rounded-2xl bg-amber-50 w-90 h-120 p-6 flex flex-col gap-6 hover:scale-105 transition-transform duration-300">
  {/* XP va Bosqich qismi */}
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <span className="text-blue-500 text-2xl">
        <AiOutlineRise />
      </span>
      <p className="text-lg font-medium">Bosqich: 4</p>
    </div>
    
    <div className="bg-white p-3 rounded-xl flex items-center gap-1">
      <p className="text-sm text-amber-800">XP:</p>
      <p className="text-2xl font-bold">1325</p>
    </div>
  </div>

  {/* Reyting qismi */}
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-semibold">Reyting</h3>
    
    <div className="bg-white bg-opacity-50 p-3 rounded-lg">
      <p className="text-sm text-gray-600">Umumiy:</p>
      <p className="font-medium">100 - o'rin</p>
    </div>
    
    <div className="bg-white bg-opacity-50 p-3 rounded-lg">
      <p className="text-sm text-gray-600">Bootcamp Foundation N112:</p>
      <p className="font-medium">7 - o'rin</p>
    </div>
    
    <div className="bg-white bg-opacity-50 p-3 rounded-lg">
      <p className="text-sm text-gray-600">Bootcamp Full Stack (NodeJS+ReactJS) N18:</p>
      <p className="font-medium">14 - o'rin</p>
    </div>
  </div>
</div>
        </div>
      </div>
    );
  };
  
  export default HomePage;