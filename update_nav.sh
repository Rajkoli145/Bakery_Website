#!/bin/bash

# List of HTML files to update
files=("index.html" "about.html" "products.html" "contact.html" "cart.html" "checkout.html" "thank-you.html")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        # Update search and user icons to point to correct pages
        sed -i '' 's|<a href="#" class="icon-link"><i class="fas fa-search"></i></a>|<a href="search.html" class="icon-link"><i class="fas fa-search"></i></a>|g' "$file"
        sed -i '' 's|<a href="#" class="icon-link"><i class="fas fa-user"></i></a>|<a href="login.html" class="icon-link"><i class="fas fa-user"></i></a>|g' "$file"
    fi
done
