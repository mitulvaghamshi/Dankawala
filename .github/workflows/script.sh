#!/bin/bash

# Recursively visit all items in the given directory
function visit {
    local item
    for item in "$1"/*; do
        if [ -d "$item" ]; then
            # If it's a directory, visit its contents
            echo "Visiting $item directory..."
            visit "$item"
        elif [ -f "$item" ]; then
            # Check the item if it's a regular file
            echo "> Checking file: $item"
            minify "$item"
        fi
    done
}

# Minify source files by removing unnecessary whitespace and newlines
function minify {
    case "$1" in
        *.html | *.js | *.css| *.json)
            # Use a temporary file in the same directory
            TMP_FILE=$(mktemp "$1.XXXXXX")
            tr -d '\n\r' < "$1" > "$TMP_FILE"
            mv -f "$TMP_FILE" "$1"
            echo ">> Minified file: $1"
            ;;
    esac
}

# Visit all items in the "pages" directory
echo "Visiting pages directory..."
visit "pages"
