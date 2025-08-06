import React from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <div className="flex border-b border-gray-700">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-6 py-2 font-semibold ${
              active === idx
                ? 'border-b-2 border-yellow-500 text-yellow-400'
                : 'text-gray-400'
            }`}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
};

export default Tabs;