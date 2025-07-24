import React, { useState } from "react";
import { Button } from "./index";

// Simple icon components for demonstration
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M7 10L12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Example usage of the Button component
export const ButtonExamples: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Button Component Examples</h2>
      
      <div className="space-y-6">
        {/* Basic Variants */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Basic Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* With Icons Before */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Icons Before</h3>
          <div className="flex flex-wrap gap-3">
            <Button iconBefore={<PlusIcon />}>Add Item</Button>
            <Button variant="outline" iconBefore={<DownloadIcon />}>Download</Button>
            <Button variant="secondary" iconBefore={<ArrowIcon />} size="sm">Next</Button>
          </div>
        </div>

        {/* With Icons After */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Icons After</h3>
          <div className="flex flex-wrap gap-3">
            <Button iconAfter={<ArrowIcon />}>Continue</Button>
            <Button variant="outline" iconAfter={<ArrowIcon />}>Go to Next</Button>
            <Button variant="ghost" iconAfter={<ArrowIcon />} size="lg">Learn More</Button>
          </div>
        </div>

        {/* With Both Icons */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Both Icons</h3>
          <div className="flex flex-wrap gap-3">
            <Button 
              iconBefore={<PlusIcon />} 
              iconAfter={<ArrowIcon />}
            >
              Add & Continue
            </Button>
            <Button 
              variant="outline"
              iconBefore={<DownloadIcon />} 
              iconAfter={<ArrowIcon />}
            >
              Download & Next
            </Button>
          </div>
        </div>

        {/* Loading States */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Loading States</h3>
          <div className="flex flex-wrap gap-3">
            <Button loading>Loading</Button>
            <Button variant="outline" loading>Processing</Button>
            <Button 
              variant="secondary" 
              loading={isLoading}
              onClick={handleLoadingDemo}
            >
              {isLoading ? 'Loading...' : 'Click to Load'}
            </Button>
          </div>
        </div>

        {/* Disabled States */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Disabled States</h3>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled iconBefore={<PlusIcon />}>
              Disabled with Icon
            </Button>
            <Button variant="secondary" disabled loading>
              Disabled & Loading
            </Button>
          </div>
        </div>

        {/* Complex Examples */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Complex Examples</h3>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="primary"
              size="lg"
              iconBefore={<PlusIcon />}
              onClick={() => alert('Creating new item...')}
            >
              Create New
            </Button>
            <Button 
              variant="outline"
              iconBefore={<DownloadIcon />}
              iconAfter={<ArrowIcon />}
              onClick={() => alert('Starting download...')}
            >
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};