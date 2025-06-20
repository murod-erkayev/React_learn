
import React, { useState } from "react"; // SHART
import { Counter } from "./components/Counter";
import Interface from "./components/interface";
import { Setp } from "./components/Setp";
import Players from "./components/Players";
import { Card } from "./components/card";
const App = () => {
  const [counters, setCounters] = useState([]); 
  const [products , setProducts] = useState([
    {id:1 , name:"MacBook", price:20000,quentitiy:3,sale:23, img:''},
    {id:2 , name:"MacBook", price:20000,quentitiy:3,sale:23},
    {id:3 , name:"MacBook", price:20000,quentitiy:3,sale:23},
    {id:4 , name:"MacBook", price:20000,quentitiy:3,sale:23},
    {id:5 , name:"MacBook", price:20000,quentitiy:3,sale:23},
    {id:6 , name:"MacBook", price:20000,quentitiy:3,sale:23},
  ])
  return (
    <div className="zzz">
      <Counter counters={counters} setCounters={setCounters} />
      <Interface />
      <Setp />
      <Players />
      <div className="d-flex flex-wrap justify-content-center">
  {products.map((item) => (
    <Card key={item.id} item={item} />
  ))}
</div>
    </div>
  );
};

export default App;
