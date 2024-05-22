import React, { useState } from "react";

const DiscountCodeEntry: React.FC = () => {
  const [discountCode, setDiscountCode] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleDiscountCodeChange = (event: any) => {
    const { value } = event.target;
    setDiscountCode(value);
    setIsValid(value.match(/^DISCOUNT\d{4}$/) !== null);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="relative mb-3 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-center mb-6">
          Put your code here
        </h1>

        <input
          id="discountCode"
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={discountCode}
          onChange={handleDiscountCodeChange}
        ></input>
      </div>

      {!isValid && (
        <p className="text-red-500 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4">
          Invalid discount code format. Please enter a code like "DISCOUNT2024".
        </p>
      )}
    </div>
  );
};

export default DiscountCodeEntry;
