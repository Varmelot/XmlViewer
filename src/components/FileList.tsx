import React from 'react';
import { observer } from 'mobx-react-lite';
import { FileCheck, FileX } from 'lucide-react';
import { xmlStore } from '../stores/XmlStore';

export const FileList = observer(() => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="h5 mb-0">XML Files</h2>
        <small className="text-muted">
          Signed: {xmlStore.signedCount} / {xmlStore.totalCount}
        </small>
      </div>
      <div className="list-group list-group-flush">
        {xmlStore.files.map((file) => (
          <div
            key={file.id}
            className={`list-group-item file-list-item ${
              xmlStore.selectedFileId === file.id ? 'selected' : ''
            }`}
            onClick={() => xmlStore.setSelectedFile(file.id)}
          >
            <div className="d-flex align-items-center">
              {file.signed ? (
                <FileCheck className="text-success me-2" size={20} />
              ) : (
                <FileX className="text-muted me-2" size={20} />
              )}
              <div>
                <h3 className="h6 mb-0">{file.name}</h3>
                {file.signedAt && (
                  <small className="text-muted">
                    Signed: {file.signedAt.toLocaleString()}
                  </small>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});