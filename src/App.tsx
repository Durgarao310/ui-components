
import { Badge } from './component/ui/Badge';
import { ButtonGroup } from './component/ui/ButtonGroup';
import { Button } from './component/ui/Button';
import { Input } from './component/ui/Input';
import { useState } from 'react';

// Example icons (you would import these from your icon library)
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 6 3 18h12l3-18"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7,10 12,15 17,10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

function App() {
  const [loading, setLoading] = useState(false);

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  const [buttonGroupItems, setButtonGroupItems] = useState([
    { id: 'left', text: 'Left', onClick: () => handleButtonGroupClick('left'), active: true },
    { id: 'center', text: 'Center', onClick: () => handleButtonGroupClick('center') },
    { id: 'right', text: 'Right', onClick: () => handleButtonGroupClick('right') }
  ]);

  const handleButtonGroupClick = (id: string) => {
    setButtonGroupItems(prevItems => 
      prevItems.map(item => ({ ...item, active: item.id === id }))
    );
  };

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Enhanced UI Component Library</h1>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Badge Component</h2>
        <div className="flex gap-2 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">ButtonGroup Component</h2>
        <ButtonGroup
          items={buttonGroupItems}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Enhanced Button Component</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Variants</h3>
            <div className="flex gap-2 flex-wrap">
              <Button>Default (Primary)</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">With Icons</h3>
            <div className="flex gap-2 flex-wrap">
              <Button iconBefore={<PlusIcon />}>Add Item</Button>
              <Button variant="secondary" iconBefore={<TrashIcon />}>Delete</Button>
              <Button variant="outline" iconAfter={<DownloadIcon />}>Download</Button>
              <Button variant="ghost" iconBefore={<PlusIcon />} iconAfter={<DownloadIcon />}>
                Both Icons
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Loading States</h3>
            <div className="flex gap-2 flex-wrap">
              <Button loading={loading} onClick={handleLoadingTest}>
                {loading ? 'Processing...' : 'Start Loading Test'}
              </Button>
              <Button loading={loading} variant="outline" iconBefore={<DownloadIcon />}>
                Download with Loading
              </Button>
              <Button loading disabled>
                Always Loading
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Disabled States</h3>
            <div className="flex gap-2 flex-wrap">
              <Button disabled>Disabled Default</Button>
              <Button disabled variant="secondary" iconBefore={<TrashIcon />}>
                Disabled with Icon
              </Button>
              <Button disabled variant="outline">
                Disabled Outline
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="flex gap-2 items-center flex-wrap">
              <Button size="sm" iconBefore={<PlusIcon />}>Small</Button>
              <Button size="md" iconBefore={<PlusIcon />}>Medium</Button>
              <Button size="lg" iconBefore={<PlusIcon />}>Large</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Input Component</h2>
        <div className="max-w-md space-y-4">
          <Input
            label="Name"
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            error="Please enter a valid email"
          />
          <Input
            label="Phone"
            placeholder="Enter your phone"
            helperText="We'll never share your phone number"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
