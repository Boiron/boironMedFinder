# boironMedFinder
Boiron Medicine Finder made with Angular JS | Ionic Framework | Ionic Creator



npm install ionic-native --save --prefix www/lib In case of errors that native is not working

It appears that the directions for v1 are incomplete (unless they are hidden somewhere not easily found). To install ionic-native in a v1 project, you should use:

npm install ionic-native --save --prefix www/lib
Reference: https://stackoverflow.com/a/46190149/925452

Notice the prefix flag. This is the only way a v1 project can see the js file. Then the instructions should state somewhere that the index.html file will need the below line added before the ionic.js include:

#<script src="lib/node_modules/ionic-native/dist/ionic.native.min.js"></script>