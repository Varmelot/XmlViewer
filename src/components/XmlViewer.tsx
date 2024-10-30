import React from 'react';
import { observer } from 'mobx-react-lite';
import { Check } from 'lucide-react';
import { xmlStore } from '../stores/XmlStore';

export const XmlViewer = observer(() => {
  const file = xmlStore.selectedFile;

  if (!file) {
    return (
      <div className="card h-100">
        <div className="card-body text-center text-muted">
          Select a file to view its contents
        </div>
      </div>
    );
  }

  return (
    <div className="card h-100 d-flex flex-column">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <h2 className="h5 mb-0">{file.name}</h2>
          <small className="text-muted">
            Status: {file.signed ? 'Signed' : 'Unsigned'}
          </small>
        </div>
        {!file.signed && (
          <button
            onClick={() => xmlStore.signFile(file.id)}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <Check size={16} />
            <span>Sign Document</span>
          </button>
        )}
      </div>
      <div className="card-body p-0">
        <div className="xml-content">
          <pre className="bg-light p-3">
            {file.content}
          </pre>
        </div>
      </div>
    </div>
  );
});