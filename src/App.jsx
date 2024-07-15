import React from "react";
import UserCard from "./components/UserCard";
import data from "./data/dataRatings.json";
import CreditCards from "./components/CreditCards";
import dataCreditCars from "./data/dataCreditCars.json";
import Counter from "./components/Counter";
import ButtonList from "./components/ButtonList";
import WorldPupulation from "./components/WorldPopulation";

const App = () => {
  return (
    <>
      <>
        <div className="flex justify-center items-center bg-black text-white m-6">
          EJERCICIO 1
        </div>

        <div className="flex items-center justify-center">
          {dataCreditCars.map((user, id) => {
            return (
              <CreditCards
                type={user.type}
                number={user.number}
                expirationMonth={user.expirationMonth}
                expirationYear={user.expirationYear}
                bank={user.bank}
                owner={user.owner}
                cssClassName={user.cssClassName}
              />
            );
          })}
        </div>
      </>

      <>
        <div className="flex justify-center items-center bg-black text-white m-6">
          EJERCICIO 2
        </div>

        <div className="flex justify-center items-center flex-wrap gap-10">
          {data.map((user) => {
            return (
              <UserCard
                name={user.name}
                rating={user.rating}
                gender={user.gender}
                carrer={user.carrer}
                location={user.location}
                key={user.id}
              />
            );
          })}
        </div>
      </>

      <>
        <div className="h-[500px]">
          <div className="flex justify-center items-center bg-black text-white m-6">
            EJERCICIO 3
          </div>

          <div className="flex justify-center items-center flex-col">
            <ButtonList numberOfButtons={31} />
          </div>
        </div>
      </>

      <>
        <div className="flex justify-center items-center bg-black text-white m-6">
          EJERCICIO 4
        </div>

        <div>
          <WorldPupulation />
        </div>
      </>

      <div className="flex justify-center items-center bg-black text-white m-6">
        EJERCICIO 5
      </div>

      <div className="flex items-center justify-center w-[100%] h-[1000px]">
        <Counter />
      </div>
    </>
  );
};

export default App;
