# CSP Lens
<img width="1400" height="560" alt="marquee" src="https://github.com/user-attachments/assets/272bb009-dccc-46d5-9b5c-ade771b3c158" />


![csplensdarklight](https://github.com/user-attachments/assets/b5db1d7e-f646-4e8d-8e68-e2373db56a4d)

## Installation
### Download
- Clone the repo or download the Release.

### Chrome Installation
1. Open chrome://extensions and enable "developer mode"
2. Click on "load unpacked" and select the `dist` folder inside what you downloaded.


## Build
If you want to customize and build it yourself:
```
npm i
npm run build
```
### Prepare the extension folder
From the root of the folder:
```
rm -rf dist/assets
mv temp/index.html dist/
mv temp/assets/ dist/
```

(Translation: delete the old assets, move the fresh ones where the extension expects them.)

