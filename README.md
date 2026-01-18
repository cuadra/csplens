# CSP Lens
<img width="1400" height="560" alt="marquee" src="https://github.com/user-attachments/assets/a8883c55-a697-4f87-8517-bf089865df68" />

![csplensdarklight](https://github.com/user-attachments/assets/d741c163-5d42-400d-8842-2f879b0e566f)

## Installation
```npm i```
## Build
```npm run build```
## Extension prep
Run these commands (or follow the steps in parenthesis) to move the build files into the folder the extension will use.

From the root of the folder:
1. ```rm -rf dist/assets``` (deletes the `dist/assets/` folder)
2. ```mv temp/index.html dist/``` (moves the `temp/index.html` file into `dist/`)
3. ```mv temp/assets/ dist/``` (moves the `temp/assets/` folder into `dist/`)
## Chrome Installation
1. Open chrome://extensions and enable "developer mode"
2. Click on "load unpacked" and select the `dist` folder
