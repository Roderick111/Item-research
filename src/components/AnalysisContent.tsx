import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Star, AlertCircle } from "lucide-react";

interface AnalysisContentProps {
  isLoading?: boolean;
  error?: string;
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
}

const AnalysisContent = ({
  isLoading = true,
  error = "",
  ratings = {
    overall: 8.5,
    materialQuality: 9.0,
    comfort: 8.5,
    fitAndSizing: 8.0,
    designAesthetic: 9.2,
    versatility: 8.8,
    priceToValue: 7.8,
  },
  summary = "This product demonstrates excellent value for money with high-quality materials and construction. Customer reviews consistently highlight its durability and performance.",
}: AnalysisContentProps) => {
  if (error) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <div className="flex items-center gap-2 text-red-500">
          <AlertCircle size={20} />
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-4 space-y-4 bg-white rounded-lg shadow-sm">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-20 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
    );
  }

  return (
    <Card className="p-4 space-y-6 bg-white">
      {/* Ratings Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Star className="text-yellow-400" size={24} />
          <span className="text-2xl font-semibold">{ratings.overall}</span>
          <span className="text-gray-500">Overall Rating</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Material Quality</span>
            <span>{ratings.materialQuality}/10</span>
          </div>
          <Progress value={ratings.materialQuality * 10} className="h-2" />

          <div className="flex justify-between text-sm">
            <span>Comfort</span>
            <span>{ratings.comfort}/10</span>
          </div>
          <Progress value={ratings.comfort * 10} className="h-2" />

          <div className="flex justify-between text-sm">
            <span>Fit & Sizing</span>
            <span>{ratings.fitAndSizing}/10</span>
          </div>
          <Progress value={ratings.fitAndSizing * 10} className="h-2" />

          <div className="flex justify-between text-sm">
            <span>Design Aesthetic</span>
            <span>{ratings.designAesthetic}/10</span>
          </div>
          <Progress value={ratings.designAesthetic * 10} className="h-2" />

          <div className="flex justify-between text-sm">
            <span>Versatility</span>
            <span>{ratings.versatility}/10</span>
          </div>
          <Progress value={ratings.versatility * 10} className="h-2" />

          <div className="flex justify-between text-sm">
            <span>Price-to-Value</span>
            <span>{ratings.priceToValue}/10</span>
          </div>
          <Progress value={ratings.priceToValue * 10} className="h-2" />
        </div>
      </div>

      {/* Summary Section */}
      <div className="space-y-2">
        <h3 className="font-semibold">Analysis Summary</h3>
        <p className="text-sm text-gray-600">{summary}</p>
      </div>

      {/* Placeholder for future content */}
      <div className="border-t pt-4">
        <p className="text-sm text-gray-400 text-center">
          More insights coming soon
        </p>
      </div>
    </Card>
  );
};

export default AnalysisContent;
