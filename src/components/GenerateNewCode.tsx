import React, { useState } from "react";

const DiscountCodeGenerator: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const generateDiscountCode = () => {
    const newCode = "NEWCODE" + Math.floor(Math.random() * 10000);
    setGeneratedCode(newCode);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-0">
      <button
        type="button"
        onClick={generateDiscountCode}
        className="inline-block rounded bg-blue-500 px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 mb-4"
      >
        Generate Discount Code
      </button>

      {generatedCode && (
        <p className="mt-2 mb-4 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          Generated Discount Code: {generatedCode}
        </p>
      )}
    </div>
  );
};

export default DiscountCodeGenerator;
