#!/bin/bash

# Script to generate favicon versions from b2b-sport-logo.svg
# Requires ImageMagick (convert command)

# Define source and destination paths
SOURCE_SVG="public/b2b-sport-logo.svg"
PUBLIC_DIR="public"

# Check if source file exists
if [ ! -f "$SOURCE_SVG" ]; then
    echo "Error: $SOURCE_SVG not found!"
    exit 1
fi

echo "Generating favicons from $SOURCE_SVG..."

# First, convert SVG to PNG with higher density for better quality, then trim
convert -density 300 "$SOURCE_SVG" -trim +repage "$PUBLIC_DIR/temp-trimmed.png"

# Get the dimensions of the trimmed image
WIDTH=$(identify -format "%w" "$PUBLIC_DIR/temp-trimmed.png")
HEIGHT=$(identify -format "%h" "$PUBLIC_DIR/temp-trimmed.png")

# Since the logo is wider than tall, we'll scale it to fill 95% of the width
# and center it vertically with white background
if [ $WIDTH -gt $HEIGHT ]; then
    # Wide logo - fit to width
    convert "$PUBLIC_DIR/temp-trimmed.png" -background white -gravity center -resize 486x -extent 512x512 "$PUBLIC_DIR/temp-square.png"
else
    # Tall logo - fit to height
    convert "$PUBLIC_DIR/temp-trimmed.png" -background white -gravity center -resize x486 -extent 512x512 "$PUBLIC_DIR/temp-square.png"
fi

# Generate PNG versions at different sizes
# Standard favicon.ico (multi-resolution)
convert "$PUBLIC_DIR/temp-square.png" -resize 16x16 "$PUBLIC_DIR/favicon-16x16.png"
convert "$PUBLIC_DIR/temp-square.png" -resize 32x32 "$PUBLIC_DIR/favicon-32x32.png"
convert "$PUBLIC_DIR/temp-square.png" -resize 48x48 "$PUBLIC_DIR/favicon-48x48.png"

# Combine into ico file
convert "$PUBLIC_DIR/favicon-16x16.png" "$PUBLIC_DIR/favicon-32x32.png" "$PUBLIC_DIR/favicon-48x48.png" "$PUBLIC_DIR/favicon.ico"

# Apple Touch Icon
convert "$PUBLIC_DIR/temp-square.png" -resize 180x180 "$PUBLIC_DIR/apple-touch-icon.png"

# Android Chrome icons
convert "$PUBLIC_DIR/temp-square.png" -resize 192x192 "$PUBLIC_DIR/android-chrome-192x192.png"
convert "$PUBLIC_DIR/temp-square.png" -resize 512x512 "$PUBLIC_DIR/android-chrome-512x512.png"

# Safari pinned tab (use original SVG)
cp "$SOURCE_SVG" "$PUBLIC_DIR/safari-pinned-tab.svg"

# Microsoft Tile
convert "$PUBLIC_DIR/temp-square.png" -resize 150x150 "$PUBLIC_DIR/mstile-150x150.png"

# Clean up temporary files
rm "$PUBLIC_DIR/temp-square.png" "$PUBLIC_DIR/temp-trimmed.png"

echo "Favicon generation complete!"
echo "Generated files:"
ls -la "$PUBLIC_DIR"/*.png "$PUBLIC_DIR"/*.ico 2>/dev/null | grep -E "(favicon|apple|android|mstile)" | awk '{print "  - " $9}'