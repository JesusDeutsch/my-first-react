import React from "react";


const CreditCards = ({type, number, expirationMonth, expirationYear, bank, owner, cssClassName}) => {
  // const data = {
  //   id: 1,
  //   type: "visa",
  //   number: "3570146895792559",
  //   expirationMonth: 11,
  //   expirationYear: 30,
  //   bank: "Aivee",
  //   owner: "Dillon Boram",
  //   cssClassName: "green",
  // };

  const backgroundColorCard =
    cssClassName === "green"
      ? "bg-[#4ca698] text-white"
      : cssClassName === "gray"
      ? "bg-[#ededed]"
      : "bg-[#d9bc66]";

  const cardLogo =
    type === "mastercard" ? (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/88/MasterCard_early_1990s_logo.svg"
        alt="logo mastercard"
      />
    ) : (
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-visa-36-675739.png"
        alt="logo visa"
      />
    );

  const finalFourDigits = number.slice(-4);
  const hiddenNumber = `**** **** **** ${finalFourDigits}`;

  return (
    <>

      <div
        className={`flex flex-col  border-[2px] border-black w-[350px] h-[200px] rounded-[22px] ${backgroundColorCard} m-2`}
      >
        <div className="flex justify-end w-[330px] mt-1">
          <div className="flex size-11">{cardLogo}</div>
        </div>
        <div className=" flex  items-center justify-center text-3xl m-auto">
          <div>{hiddenNumber}</div>
        </div>

        <div className="flex gap-10 ml-2">
          <p>{`Expires ${expirationMonth}/${expirationYear}`}</p>
          {bank}
        </div>

        <div className="pb-2 ml-2">
          {owner}
          </div>
      
      </div>
    </>
  );
};

export default CreditCards;


