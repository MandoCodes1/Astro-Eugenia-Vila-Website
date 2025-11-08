#!/bin/bash

echo "🧪 Testing Astro Eugenia Vila Website..."
echo ""

# Test build
echo "1️⃣ Building site..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "2️⃣ Checking generated files..."

# Check if key files exist
if [ -f "dist/index.html" ]; then
    echo "✅ Root index.html exists"
else
    echo "❌ Root index.html missing!"
    exit 1
fi

if [ -d "dist/es" ]; then
    echo "✅ Spanish pages directory exists"
    echo "   Pages: $(ls dist/es/ | wc -l | tr -d ' ') directories/files"
else
    echo "❌ Spanish pages missing!"
    exit 1
fi

if [ -d "dist/en" ]; then
    echo "✅ English pages directory exists"
    echo "   Pages: $(ls dist/en/ | wc -l | tr -d ' ') directories/files"
else
    echo "❌ English pages missing!"
    exit 1
fi

echo ""
echo "3️⃣ Checking redirect..."
if grep -q "/Astro-Eugenia-Vila-Website/es/" dist/index.html; then
    echo "✅ Root redirects to correct path with base URL"
else
    echo "⚠️  Warning: Redirect might not have base URL"
fi

echo ""
echo "4️⃣ Checking Spanish home page..."
if [ -f "dist/es/index.html" ]; then
    echo "✅ Spanish home page exists"
else
    echo "❌ Spanish home page missing!"
    exit 1
fi

echo ""
echo "✅ ALL TESTS PASSED!"
echo ""
echo "📦 Ready to deploy to GitHub Pages"
echo ""
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Fix: Add path utility for GitHub Pages'"
echo "3. git push (with workflow scope)"
echo ""
echo "To test preview (simulates production):"
echo "npm run preview"
echo "Then visit: http://localhost:4321/Astro-Eugenia-Vila-Website/"

