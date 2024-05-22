cat index.html | while read line; do echo -n "$line" >> temp.html; done;
mv -f temp.html index.html

cat script.js | while read line; do echo -n "$line" >> temp.js; done;
mv -f temp.js script.js

cat style.css | while read line; do echo -n "$line" >> temp.css; done;
mv -f temp.css style.css
