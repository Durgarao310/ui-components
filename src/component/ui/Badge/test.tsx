import React from "react";
import { Badge } from "./index";

// Example usage of the Badge component
export const BadgeExamples: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Badge Component Examples</h2>
      
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Badge>Default (no variant)</Badge>
        <Badge className="bg-green-500 text-white">Custom styling</Badge>
      </div>
    </div>
  );
};