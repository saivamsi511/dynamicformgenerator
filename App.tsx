import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';
import { JSONSchema } from './types';

const App: React.FC = () => {
  const [schema, setSchema] = useState<JSONSchema | null>(null);

  const handleJSONChange = (newSchema: JSONSchema) => {
    setSchema(newSchema);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <JSONEditor onChange={handleJSONChange} />
      <FormPreview schema={schema} />
    </div>
  );
};

export default App;
