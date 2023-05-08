import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/coffeeCard";
import { useState } from "react";

function App() {
  const loaderData = useLoaderData();
  const [coffees, setCoffees] = useState(loaderData);

  return (
    <div className="text-center my-12 w-[98%] mx-auto">
      <h1 className="text-3xl font-bold my-14 ">
        Our popular coffees!:{coffees.length}{" "}
      </h1>

      <div className="grid md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
