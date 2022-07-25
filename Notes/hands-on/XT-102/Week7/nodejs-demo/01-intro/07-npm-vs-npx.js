/**
 * Npm is a tool that use to install packages. Npx is a tool that use to execute packages. Packages used by npm are installed globally you have to care about pollution for the long term. Packages used by npx are not installed globally so you have to carefree for the pollution for the long term
 * 
 * NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package. The npx is useful during a single time use package.
 */


/**
 * Difference
1. 
npm: If you wish to run package through npm then you have to specify that package in your package.json and installed it locally.
npx: A package can be executable without installing the package, it is an npm package runner so if any packages that aren’t already installed it will installed automatically.

2. 
npm: To use create-react-app in npm the commands are npm install create-react-app then create-react-app myApp(Installation required).npx: But in npx you can use that without installing like npx create-react-app myApp, this command is required in every app’s life cycle only once.

3. 
npm : Npm is a tool that use to install packages.	 Npx is a tool that use to execute packages.
Packages used by npm are installed globally you have to care about pollution for the long term.	 
npx: Packages used by npx are not installed globally so you have to carefree for the pollution for the long term. 
 */