#!/bin/bash

# Firebase Rules Testing Script
# This script helps test Firebase security rules locally

echo "Firebase Rules Testing Script"
echo "============================="

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Check if logged in to Firebase
echo "Checking Firebase authentication..."
if ! firebase projects:list &> /dev/null; then
    echo "Not logged in to Firebase. Please run:"
    echo "   firebase login"
    exit 1
fi

echo "Firebase CLI ready"

# Validate firestore.rules syntax
echo "Validating Firestore rules syntax..."
if firebase firestore:rules:check firestore.rules --project=campus-market-place-3f978; then
    echo "Firestore rules syntax is valid"
else
    echo "Firestore rules syntax error"
    exit 1
fi

# Validate firebase.json configuration
echo "Validating firebase.json configuration..."
if [ -f "firebase.json" ]; then
    echo "firebase.json exists"
    echo "Configuration:"
    cat firebase.json | jq '.' 2>/dev/null || cat firebase.json
else
    echo "firebase.json not found"
    exit 1
fi

# Test rules with emulator (optional)
echo "Starting Firebase emulators for testing..."
echo "   Note: This will start emulators on localhost"
echo "   Press Ctrl+C to stop the emulators"

firebase emulators:start --only firestore,storage --project=campus-market-place-3f978
