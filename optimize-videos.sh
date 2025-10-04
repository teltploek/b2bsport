#!/bin/bash

# Video Optimization Script for B2BSport Website
# This script processes video files to optimize them for web delivery
# It creates both MP4 and WebM versions with reduced file sizes
# Usage: ./optimize-videos.sh [filename]
# Example: ./optimize-videos.sh background-01.mp4
# If no filename provided, processes all MP4 files

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
INPUT_DIR="video-source"
OUTPUT_DIR="public/videos"
QUALITY=23  # Lower = better quality, higher file size (18-28 is good range)
MAX_WIDTH=1920  # Maximum width for videos

# Get the target file from command line argument
TARGET_FILE="$1"

# Create directories if they don't exist
mkdir -p "$OUTPUT_DIR"

echo -e "${BLUE}🎬 B2BSport Video Optimization Script${NC}"
echo "=================================="

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo -e "${RED}❌ Error: ffmpeg is not installed${NC}"
    echo "Please install ffmpeg first:"
    echo "  macOS: brew install ffmpeg"
    echo "  Ubuntu: sudo apt install ffmpeg"
    echo "  Windows: Download from https://ffmpeg.org/"
    exit 1
fi

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo -e "${YELLOW}📁 Creating $INPUT_DIR directory${NC}"
    mkdir -p "$INPUT_DIR"
    echo -e "${YELLOW}Please place your source video files in the '$INPUT_DIR' directory${NC}"
    echo "Example files:"
    echo "  - background-01.mp4"
    echo "  - hero-background.mp4"
    echo "  - sports-showcase.mp4"
    exit 0
fi

# Function to get video info
get_video_info() {
    local file="$1"
    echo -e "${BLUE}📊 Analyzing: $(basename "$file")${NC}"
    ffprobe -v quiet -select_streams v:0 -show_entries stream=width,height,duration,bit_rate -of csv=s=x:p=0 "$file" 2>/dev/null || echo "unknown"
}

# Function to format file size
format_size() {
    local size=$1
    if [ $size -gt 1048576 ]; then
        echo "$(( size / 1048576 )) MB"
    elif [ $size -gt 1024 ]; then
        echo "$(( size / 1024 )) KB"
    else
        echo "$size B"
    fi
}

# Function to optimize video
optimize_video() {
    local input_file="$1"
    local filename=$(basename "$input_file" .mp4)
    local mp4_output="$OUTPUT_DIR/${filename}.mp4"
    local webm_output="$OUTPUT_DIR/${filename}.webm"
    
    echo -e "${GREEN}🔄 Processing: $filename${NC}"
    
    # Get original file size
    original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    echo "   Original size: $(format_size $original_size)"
    
    # Get video dimensions
    dimensions=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$input_file")
    width=$(echo $dimensions | cut -d'x' -f1)
    height=$(echo $dimensions | cut -d'x' -f2)
    
    # Calculate scaling if needed
    scale_filter=""
    if [ "$width" -gt "$MAX_WIDTH" ]; then
        new_height=$(( height * MAX_WIDTH / width ))
        # Ensure height is even (required for some codecs)
        new_height=$(( new_height - new_height % 2 ))
        scale_filter="-vf scale=${MAX_WIDTH}:${new_height}"
        echo "   Scaling from ${width}x${height} to ${MAX_WIDTH}x${new_height}"
    fi
    
    # Optimize MP4 (H.264)
    echo "   Creating optimized MP4..."
    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -preset medium \
        -crf $QUALITY \
        -profile:v main \
        -level 4.0 \
        -movflags +faststart \
        -an \
        $scale_filter \
        -y "$mp4_output" \
        -loglevel error -stats
    
    # Optimize WebM (VP9)
    echo "   Creating WebM version..."
    ffmpeg -i "$input_file" \
        -c:v libvpx-vp9 \
        -crf $QUALITY \
        -b:v 0 \
        -an \
        $scale_filter \
        -y "$webm_output" \
        -loglevel error -stats
    
    # Show results
    if [ -f "$mp4_output" ]; then
        mp4_size=$(stat -f%z "$mp4_output" 2>/dev/null || stat -c%s "$mp4_output" 2>/dev/null)
        echo "   ✅ MP4: $(format_size $mp4_size) ($(( mp4_size * 100 / original_size ))% of original)"
    fi
    
    if [ -f "$webm_output" ]; then
        webm_size=$(stat -f%z "$webm_output" 2>/dev/null || stat -c%s "$webm_output" 2>/dev/null)
        echo "   ✅ WebM: $(format_size $webm_size) ($(( webm_size * 100 / original_size ))% of original)"
    fi
    
    echo ""
}

# Main processing logic
video_count=0

if [ -n "$TARGET_FILE" ]; then
    # Process single file
    target_path="$INPUT_DIR/$TARGET_FILE"
    
    # Add .mp4 extension if not provided
    if [[ "$TARGET_FILE" != *.mp4 ]]; then
        target_path="$INPUT_DIR/${TARGET_FILE}.mp4"
        TARGET_FILE="${TARGET_FILE}.mp4"
    fi
    
    if [ -f "$target_path" ]; then
        echo -e "${BLUE}🎯 Processing single file: $TARGET_FILE${NC}"
        echo ""
        optimize_video "$target_path"
        video_count=1
    else
        echo -e "${RED}❌ Error: File '$TARGET_FILE' not found in $INPUT_DIR${NC}"
        echo "Available files:"
        for file in "$INPUT_DIR"/*.mp4; do
            if [ -f "$file" ]; then
                echo "  - $(basename "$file")"
            fi
        done
        exit 1
    fi
else
    # Process all MP4 files
    echo -e "${BLUE}🎬 Processing all MP4 files in $INPUT_DIR${NC}"
    echo ""
    for video_file in "$INPUT_DIR"/*.mp4; do
        if [ -f "$video_file" ]; then
            optimize_video "$video_file"
            ((video_count++))
        fi
    done
fi

# Summary
if [ $video_count -eq 0 ]; then
    echo -e "${YELLOW}⚠️  No MP4 files found in $INPUT_DIR${NC}"
    echo "Please add your video files to the $INPUT_DIR directory and run again."
else
    if [ -n "$TARGET_FILE" ]; then
        echo -e "${GREEN}🎉 Successfully processed: $TARGET_FILE${NC}"
    else
        echo -e "${GREEN}🎉 Successfully processed $video_count video(s)${NC}"
    fi
    echo ""
    echo -e "${BLUE}📁 Output files in $OUTPUT_DIR:${NC}"
    if [ -n "$TARGET_FILE" ]; then
        filename=$(basename "$TARGET_FILE" .mp4)
        ls -la "$OUTPUT_DIR/${filename}".{mp4,webm} 2>/dev/null || true
    else
        ls -la "$OUTPUT_DIR"
    fi
fi

echo ""
echo -e "${BLUE}💡 Usage Examples:${NC}"
echo "  Process all videos:        ./optimize-videos.sh"
echo "  Process single video:      ./optimize-videos.sh hero-background.mp4"
echo "  Process without extension: ./optimize-videos.sh hero-background"
echo ""
echo -e "${BLUE}💡 Tips:${NC}"
echo "  - Test your videos on the website to ensure quality is acceptable"
echo "  - If files are too large, decrease QUALITY value (current: $QUALITY)"
echo "  - If quality is poor, increase QUALITY value"
echo "  - WebM files are typically smaller and supported by modern browsers"
echo "  - MP4 files provide fallback support for older browsers"