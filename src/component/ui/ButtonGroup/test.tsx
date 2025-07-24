import React, { useState } from "react";
import { ButtonGroup } from "./index";
import type { ButtonGroupItem } from "./types";

// Example usage of the ButtonGroup component
export const ButtonGroupExamples: React.FC = () => {
  const [selectedSingle, setSelectedSingle] = useState<string[]>([]);
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>([]);

  const basicItems: ButtonGroupItem[] = [
    {
      id: "left",
      text: "Left",
      onClick: () => console.log("Left clicked"),
    },
    {
      id: "center",
      text: "Center",
      onClick: () => console.log("Center clicked"),
      active: true,
    },
    {
      id: "right",
      text: "Right",
      onClick: () => console.log("Right clicked"),
    },
  ];

  const toolbarItems: ButtonGroupItem[] = [
    {
      id: "bold",
      text: "Bold",
      onClick: () => console.log("Bold clicked"),
      icon: <strong>B</strong>,
    },
    {
      id: "italic",
      text: "Italic",
      onClick: () => console.log("Italic clicked"),
      icon: <em>I</em>,
    },
    {
      id: "underline",
      text: "Underline",
      onClick: () => console.log("Underline clicked"),
      icon: <u>U</u>,
    },
  ];

  const filterItems: ButtonGroupItem[] = [
    {
      id: "all",
      text: "All",
      onClick: () => console.log("All clicked"),
      active: true,
    },
    {
      id: "active",
      text: "Active",
      onClick: () => console.log("Active clicked"),
    },
    {
      id: "completed",
      text: "Completed",
      onClick: () => console.log("Completed clicked"),
    },
    {
      id: "archived",
      text: "Archived",
      onClick: () => console.log("Archived clicked"),
      disabled: true,
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">ButtonGroup Component Examples</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Basic Usage (Single Selection)</h3>
          <ButtonGroup
            items={basicItems}
            onSelectionChange={setSelectedSingle}
          />
          <p className="text-sm text-gray-600 mt-2">
            Selected: {selectedSingle.join(", ") || "None"}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Multiple Selection</h3>
          <ButtonGroup
            items={toolbarItems}
            multiple
            onSelectionChange={setSelectedMultiple}
            variant="outline"
          />
          <p className="text-sm text-gray-600 mt-2">
            Selected: {selectedMultiple.join(", ") || "None"}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Different Variants</h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-700">Default:</span>
              <ButtonGroup items={filterItems} className="ml-3" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Outline:</span>
              <ButtonGroup items={filterItems} variant="outline" className="ml-3" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Ghost:</span>
              <ButtonGroup items={filterItems} variant="ghost" className="ml-3" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Different Sizes</h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-700">Small:</span>
              <ButtonGroup items={basicItems} size="sm" className="ml-3" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Medium:</span>
              <ButtonGroup items={basicItems} size="md" className="ml-3" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Large:</span>
              <ButtonGroup items={basicItems} size="lg" className="ml-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
