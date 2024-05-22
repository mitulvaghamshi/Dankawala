#!/bin/bash

# Recursively visit all items in the given directory
function visit {
    echo "Visiting $1 directory..."
    local item
    for item in "$1"/*; do
        # If it's a directory, visit its contents
        if [ -d "$item" ]; then
            visit "$item"
        # Check the item if it's a regular file
        elif [ -f "$item" ]; then
            echo "> Checking file: $item"
            removeSpacesAndNewlines "$item"
        fi
    done
}

# Process source files by removing unnecessary whitespace and newlines
function removeSpacesAndNewlines {
    case "$1" in
        *.html | *.js | *.css| *.json)
            # Use a temporary file in the same directory
            TMP_FILE=$(mktemp "$1.XXXXXX")
            tr -d '\n\r' < "$1" > "$TMP_FILE"
            mv -f "$TMP_FILE" "$1"
            echo ">> Modified file: $1"
            ;;
    esac
}

# Visit all items in the "pages" directory
visit "pages"
