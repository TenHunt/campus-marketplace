// API endpoint for handling photo uploads
// /api/photos/upload

import type { NextApiRequest, NextApiResponse } from 'next';
import { uploadImage, validateImageFile, generatePhotoPath, generateProfilePicturePath } from '../../../lib/photoUpload';

interface UploadResponse {
  success: boolean;
  url?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { imageData, fileName, type, itemId, userId } = req.body;
    
    if (!imageData || !fileName || !type) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: imageData, fileName, type' 
      });
    }

    if ((type === 'item' && !itemId) || (type === 'profile' && !userId)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required ID for upload type' 
      });
    }

    // Convert base64 to blob
    const byteCharacters = atob(imageData.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/jpeg' });
    
    // Create File object
    const file = new File([blob], fileName, { type: 'image/jpeg' });

    // Validate file
    const validation = validateImageFile(file);
    if (!validation.valid) {
      return res.status(400).json({ 
        success: false, 
        error: validation.error 
      });
    }

    // Generate storage path
    let storagePath: string;
    if (type === 'item') {
      storagePath = generatePhotoPath(itemId, fileName);
    } else {
      storagePath = generateProfilePicturePath(userId, fileName);
    }

    // Upload image
    const url = await uploadImage(file, storagePath, {
      compress: true,
      maxWidth: type === 'profile' ? 300 : 800,
      quality: 0.8
    });

    res.status(200).json({ 
      success: true, 
      url 
    });

  } catch (error) {
    console.error('Photo upload error:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Upload failed' 
    });
  }
}
