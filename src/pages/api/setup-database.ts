import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeDatabase, createSampleData } from '../../lib/initializeDatabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { action } = req.body;

    if (action === 'initialize') {
      await initializeDatabase();
      res.status(200).json({ 
        message: 'Database initialized successfully with complete field structures',
        collections: [
          'categories (with initial data)',
          'users (with field structure)',
          'userProfiles (with field structure)', 
          'items (with field structure)',
          'itemPhotos (with field structure)',
          'carts (with field structure)',
          'cartItems (with field structure)',
          'orders (with field structure)',
          'orderItems (with field structure)',
          'payments (with field structure)',
          'messages (with field structure)'
        ],
        note: 'All collections now include proper field structures based on database planning documents'
      });
    } else if (action === 'sample-data') {
      await createSampleData();
      res.status(200).json({ 
        message: 'Additional sample data created successfully',
        note: 'Created realistic sample data for testing purposes'
      });
    } else {
      res.status(400).json({ 
        message: 'Invalid action. Use "initialize" or "sample-data"',
        availableActions: ['initialize', 'sample-data']
      });
    }

  } catch (error) {
    console.error('Database setup error:', error);
    res.status(500).json({ 
      message: 'Database setup failed', 
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
