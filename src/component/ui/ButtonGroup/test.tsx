import React, { useState } from "react";
import { ButtonGroup } from "./index";
import type { ButtonGroupItem } from "./types";

// Example usage of the ButtonGroup component
export const ButtonGroupExamples: React.FC = () => {

  const [basicItems, setBasicItems] = useState<ButtonGroupItem[]>([
    {
      id: "left",
      text: "Left",
      onClick: () => handleBasicClick("left"),
    },
    {
      id: "center",
      text: "Center",
      onClick: () => handleBasicClick("center"),
      active: true,
    },
    {
      id: "right",
      text: "Right",
      onClick: () => handleBasicClick("right"),
    },
  ]);

  const handleBasicClick = (id: string) => {
    setBasicItems(prev => prev.map(item => ({...item, active: item.id === id})))
  }

  const [toolbarItems, setToolbarItems] = useState<ButtonGroupItem[]>([
    {
      id: "bold",
      text: "Bold",
      onClick: () => handleToolbarClick("bold"),
      icon: <strong>B</strong>,
    },
    {
      id: "italic",
      text: "Italic",
      onClick: () => handleToolbarClick("italic"),
      icon: <em>I</em>,
    },
    {
      id: "underline",
      text: "Underline",
      onClick: () => handleToolbarClick("underline"),
      icon: <u>U</u>,
    },
  ]);

  const handleToolbarClick = (id: string) => {
    setToolbarItems(prev => prev.map(item => {
      if (item.id === id) {
        return {...item, active: !item.active}
      }
      return item;
    }))
  }

  const [filterItems, setFilterItems] = useState<ButtonGroupItem[]>([
    {
      id: "all",
      text: "All",
      onClick: () => handleFilterClick("all"),
      active: true,
    },
    {
      id: "active",
      text: "Active",
      onClick: () => handleFilterClick("active"),
    },
    {
      id: "completed",
      text: "Completed",
      onClick: () => handleFilterClick("completed"),
    },
    {
      id: "archived",
      text: "Archived",
      onClick: () => handleFilterClick("archived"),
      disabled: true,
    },
  ]);

  const handleFilterClick = (id: string) => {
    setFilterItems(prev => prev.map(item => ({...item, active: item.id === id})))
  }

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">ButtonGroup Component Examples</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Basic Usage (Single Selection)</h3>
          <ButtonGroup
            items={basicItems}
          />
          <p className="text-sm text-gray-600 mt-2">
            Selected: {basicItems.find(item => item.active)?.id || "None"}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Multiple Selection</h3>
          <ButtonGroup
            items={toolbarItems}
            variant="outline"
          />
          <p className="text-sm text-gray-600 mt-2">
            Selected: {toolbarItems.filter(item => item.active).map(item => item.id).join(", ") || "None"}
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
