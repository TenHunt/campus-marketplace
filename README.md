# Campus Marketplace - CMPG323 Group Project

A Next.js web application for buying and selling items on campus, built with Firebase and modern web technologies.

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Backend**: Next.js API Routes + Firebase Functions
- **Database**: Firebase Firestore (NoSQL)
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Hosting**: Firebase Hosting
- **Payments**: PayFast Integration
- **Styling**: Tailwind CSS

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account
- PayFast merchant account (for payments)

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/TenHunt/campus-marketplace.git
cd campus-marketplace
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Firebase Setup
1. Create a new Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Enable Authentication (Email/Password, Google)
4. Enable Storage
5. Get your Firebase config values

### 4. Environment Variables
1. Copy `.env.example` to `.env.local`
2. Fill in your Firebase configuration values
3. Add PayFast credentials

```bash
cp .env.example .env.local
```

### 5. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
campus-marketplace/
├── db-planning/              # Database design & ERD
│   ├── entities-list         # Database entities
│   ├── campus-marketplace-erd.md  # Mermaid ERD
│   └── logical-erd-specification.md
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── auth/            # Authentication components
│   │   └── marketplace/     # Marketplace-specific components
│   ├── pages/               # Next.js pages & API routes
│   │   ├── api/             # Backend API endpoints
│   │   ├── auth/            # Authentication pages
│   │   └── marketplace/     # Marketplace pages
│   ├── lib/                 # Utilities & configurations
│   │   ├── firebase.ts      # Firebase initialization
│   │   └── firebase-config.ts
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions
├── public/                  # Static assets
├── styles/                  # Global styles
└── docs/                    # Project documentation
```

## 🔥 Firebase Collections

The database follows a completely normalized structure:

- **users** - User accounts
- **userProfiles** - Extended user information
- **categories** - Item categories
- **items** - Marketplace items
- **itemPhotos** - Item images
- **carts** - User shopping carts
- **cartItems** - Items in carts
- **orders** - Purchase orders
- **orderItems** - Items in orders
- **payments** - Payment transactions
- **messages** - User communications

## Features

### Core Functionality
- User Authentication (Firebase Auth)
- Item Listings with Photos
- Shopping Cart
- Order Management
- Payment Processing (PayFast)
- User Messaging
- Search & Filtering

### User Roles
- **Buyers**: Browse, purchase items
- **Sellers**: List items, manage sales
- **Both**: Users can be both buyers and sellers

## Development

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript check
```

### Database Setup
1. Initialize Firestore collections using the entities list
2. Set up Firestore security rules
3. Create initial categories data

## Security

- Firebase Authentication
- Firestore Security Rules
- Input validation
- SSL/HTTPS encryption
- Role-based access control

## Responsive Design

- Mobile-first approach
- Tailwind CSS for styling
- Responsive navigation
- Touch-friendly interfaces

## Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Environment Variables
Ensure all environment variables are set in your hosting platform.

## Team Members

- **Daniel** - Project Lead & Database Design
- *[Add team members as they join]*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, email your team or create an issue in the repository.

---

**CMPG323 - Software Engineering Project**
