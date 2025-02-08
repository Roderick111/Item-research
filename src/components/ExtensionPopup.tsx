import React, { useState } from "react";
import ProductHeader from "./ProductHeader";
import AnalysisContent from "./AnalysisContent";

interface ExtensionPopupProps {
  productName?: string;
  isLoading?: boolean;
  isError?: boolean;
  onProductNameChange?: (name: string) => void;
  analysisData?: {
    ratings?: {
      overall: number;
      materialQuality: number;
      comfort: number;
      fitAndSizing: number;
      designAesthetic: number;
      versatility: number;
      priceToValue: number;
    };
    summary?: string;
  };
}

const ExtensionPopup = ({
  productName = "",
  isLoading = false,
  isError = false,
  onProductNameChange = () => {},
  analysisData = {
    ratings: {
      overall: 8.5,
      materialQuality: 9.0,
      comfort: 8.5,
      fitAndSizing: 8.0,
      designAesthetic: 9.2,
      versatility: 8.8,
      priceToValue: 7.8,
    },
    summary:
      "This product demonstrates excellent value for money with high-quality materials and construction.",
  },
}: ExtensionPopupProps) => {
  const [localProductName, setLocalProductName] = useState(productName);

  const handleProductNameChange = (name: string) => {
    setLocalProductName(name);
    onProductNameChange(name);
  };

  return (
    <div className="w-[400px] min-h-[500px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <ProductHeader
        productName={localProductName}
        isLoading={isLoading}
        isError={isError}
        onProductNameChange={handleProductNameChange}
      />
      <div className="flex-1 overflow-auto">
        <AnalysisContent
          isLoading={isLoading}
          error={isError ? "Failed to analyze product" : ""}
          ratings={analysisData.ratings}
          summary={analysisData.summary}
        />
      </div>
    </div>
  );
};

export default ExtensionPopup;
