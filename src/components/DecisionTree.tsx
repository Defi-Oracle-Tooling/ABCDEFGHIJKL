import React, { useState } from 'react';

const DecisionTree = ({ onDecision }) => {
  const [step, setStep] = useState(1);
  const [localConfig, setLocalConfig] = useState({});

  const handleNext = (decision) => {
    const updatedConfig = { ...localConfig, ...decision };
    setLocalConfig(updatedConfig);
    if (step < 4) {
      setStep(step + 1);
    } else {
      onDecision(updatedConfig);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3>Step 1: Select Blockchain Platform</h3>
            <select
              onChange={(e) => handleNext({ platform: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled>
                Select platform
              </option>
              <option value="Hyperledger">Hyperledger</option>
              <option value="ConsenSys">ConsenSys</option>
              <option value="Polygon">Polygon</option>
              <option value="LayerZero">LayerZero</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Step 2: Select Deployment Type</h3>
            <select
              onChange={(e) => handleNext({ deployment: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled>
                Select deployment
              </option>
              <option value="local">Local</option>
              <option value="cloud">Cloud</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Step 3: Select Security Settings</h3>
            <select
              onChange={(e) => handleNext({ security: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled>
                Select security level
              </option>
              <option value="basic">Basic</option>
              <option value="advanced">Advanced</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Step 4: Set Additional Options</h3>
            <select
              onChange={(e) => handleNext({ additional: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        );
      default:
        return <div>Complete</div>;
    }
  };

  return (
    <div>
      <h2>Advanced Decision Tree</h2>
      {renderStep()}
    </div>
  );
};

export default DecisionTree;
