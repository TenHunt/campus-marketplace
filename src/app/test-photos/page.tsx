// Test page for photo upload functionality

'use client';

import { useState } from 'react';
import PhotoUpload from '../../components/PhotoUpload';

export default function TestPhotos() {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setMessages(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleUploadSuccess = (urls: string[]) => {
    addMessage(`Successfully uploaded ${urls.length} photos`);
    urls.forEach((url, index) => {
      addMessage(`Photo ${index + 1}: ${url}`);
    });
  };

  const handleUploadError = (error: string) => {
    addMessage(`Upload error: ${error}`);
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Photo Upload Test</h1>
      
      <div className="space-y-8">
        {/* Item Photo Upload Test */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Item Photos</h2>
          <PhotoUpload
            type="item"
            itemId="test-item-123"
            maxPhotos={5}
            onUploadSuccess={handleUploadSuccess}
            onUploadError={handleUploadError}
            className="mb-4"
          />
        </div>

        {/* Profile Picture Upload Test */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
          <PhotoUpload
            type="profile"
            userId="test-user-456"
            maxPhotos={1}
            onUploadSuccess={handleUploadSuccess}
            onUploadError={handleUploadError}
            className="mb-4"
          />
        </div>

        {/* Messages Log */}
        <div className="border p-6 rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">Upload Log</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet...</p>
            ) : (
              messages.map((message, index) => (
                <div key={index} className="text-sm font-mono bg-white p-2 rounded">
                  {message}
                </div>
              ))
            )}
          </div>
          <button
            onClick={() => setMessages([])}
            className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Clear Log
          </button>
        </div>

        {/* Instructions */}
        <div className="border p-6 rounded-lg bg-blue-50">
          <h3 className="text-lg font-semibold mb-4">Instructions</h3>
          <ul className="space-y-2 text-sm">
            <li>• Maximum file size: 5MB</li>
            <li>• Supported formats: JPEG, PNG, WebP</li>
            <li>• Item photos: Up to 5 photos per item</li>
            <li>• Profile pictures: 1 photo only</li>
            <li>• Images will be compressed automatically</li>
            <li>• Upload status will appear in the log below</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
