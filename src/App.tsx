import React from 'react';
import { FileList } from './components/FileList';
import { XmlViewer } from './components/XmlViewer';

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <header className="bg-white shadow-sm">
        <div className="container py-3">
          <h1 className="h3 mb-0">XML Signing Portal</h1>
        </div>
      </header>
      
      <main className="container py-4">
        <div className="row g-4">
          <div className="col-md-5">
            <FileList />
          </div>
          <div className="col-md-7">
            <XmlViewer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;