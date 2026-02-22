#!/bin/bash
set -e

echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

echo "🔧 Setting permissions on node_modules/.bin..."
chmod +x node_modules/.bin/* 2>/dev/null || true

echo "🏗️  Building project..."
npm run build

echo "✅ Build complete!"
