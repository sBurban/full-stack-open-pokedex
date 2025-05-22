#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "📦 Installing dependencies..."
npm install

echo "🔧 Building the app..."
npm run build

echo "🚀 Starting the production server..."
npm run start-prod