import { useMemo, useState } from "react";

function factorial(n) {
  console.log('Factorial hisoblanmoqda...');
  let result = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 100000000; j++) {} 
    result *= i;
  }
  return result;
}

const ShopPage = () => {
  const [count, setCount] = useState(1);
  const [other, setOther] = useState(false);

  const fact = useMemo(() => factorial(count), [count]); 

  return (
    <div className="shop">
      <h1>Factorial: {fact}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setOther(!other)}>Other State</button>
    </div>
  );
};

export default ShopPage;
