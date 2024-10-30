import { makeAutoObservable } from 'mobx';

export interface XmlFile {
  id: string;
  name: string;
  content: string;
  signed: boolean;
  signedAt?: Date;
}

class XmlStore {
  files: XmlFile[] = [];
  selectedFileId: string | null = null;

  constructor() {
    makeAutoObservable(this);
    // Sample data
    this.files = [
      {
        id: '1',
        name: 'document1.xml',
        content: '<?xml version="1.0"?><root><data>Sample 1</data><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content><content>Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1Sample 1</content></root>',
        signed: false
      },
      {
        id: '2',
        name: 'document2.xml',
        content: '<?xml version="1.0"?><root><data>Sample 2</data></root>',
        signed: false
      }
    ];
  }

  addFile(file: Omit<XmlFile, 'id' | 'signed'>) {
    this.files.push({
      ...file,
      id: Math.random().toString(36).substr(2, 9),
      signed: false
    });
  }

  signFile(id: string) {
    const file = this.files.find(f => f.id === id);
    if (file) {
      file.signed = true;
      file.signedAt = new Date();
    }
  }

  setSelectedFile(id: string | null) {
    this.selectedFileId = id;
  }

  get selectedFile() {
    return this.files.find(f => f.id === this.selectedFileId);
  }

  get signedCount() {
    return this.files.filter(f => f.signed).length;
  }

  get totalCount() {
    return this.files.length;
  }
}

export const xmlStore = new XmlStore();