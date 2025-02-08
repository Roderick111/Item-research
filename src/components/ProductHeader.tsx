import React, { useState } from "react";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

interface ProductHeaderProps {
  productName?: string;
  isLoading?: boolean;
  isError?: boolean;
  onProductNameChange?: (name: string) => void;
}

const ProductHeader = ({
  productName = "",
  isLoading = false,
  isError = false,
  onProductNameChange = () => {},
}: ProductHeaderProps) => {
  const [inputValue, setInputValue] = useState(productName);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onProductNameChange(newValue);
  };

  return (
    <Card className="w-full bg-white p-4 border-b">
      {isLoading ? (
        <Skeleton className="h-8 w-full" />
      ) : isError ? (
        <div className="space-y-2">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Unable to detect product. Please enter manually.
            </AlertDescription>
          </Alert>
          <Input
            placeholder="Enter product name"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
      ) : (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">
            {productName || "Product Name"}
          </h2>
          {!productName && (
            <Input
              placeholder="Enter product name"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full"
            />
          )}
        </div>
      )}
    </Card>
  );
};

export default ProductHeader;
