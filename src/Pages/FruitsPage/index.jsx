import { useSelector } from "react-redux";

function FruitsPage(){
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}> {fruit} </li>
        ))}
      </ul>
  );
}

export default FruitsPage;