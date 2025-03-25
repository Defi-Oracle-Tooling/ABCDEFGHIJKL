import React from 'react';

interface ConfigWizardProps {
  onComplete: (config: any) => void;
}

const ConfigWizard: React.FC<ConfigWizardProps> = ({ onComplete }) => {
  const handleComplete = () => {
    // Replace with actual wizard logic
    onComplete({ wizardData: 'example' });
  };

  return (
    <div>
      <h3>Config Wizard</h3>
      <button onClick={handleComplete}>Complete Wizard</button>
    </div>
  );
};

export default ConfigWizard;
