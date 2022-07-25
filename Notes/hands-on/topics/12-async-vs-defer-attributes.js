/**
 * async and defer are boolean attributes which are used along with script tags which used to load external script efficiently into our webpage
 * When we load webpage two things happen in browser
    1. HTML parsing
    2. Loading of the scripts ( can be fetching script from external or running scripts line by line)
 */

/**
 * In the normal browser when the browser is parsing the html and suddenly encounters script tag then browser pause or stops the parsing and then fetches script from network and execute then and there
 * html parsing continue after that
 * So here script tag is blocking the html parsing
 */

/**
 * With async tag
 * With async tag scripts fetched from network asynchronously ( script tags are fetched in parellel with html parsing)
 * and once scripts are fetched then it pauses html parsing and executes the script tag. one execute is done it will continue html parsing
 * Does not Maintains the order of execution of script
 */

/**
 * with defer
 * In this case html parsing will go on and scripts are fetched parallel and this script tag executes only after completion of html parsing
 * sequence of running scripts tags maintained
 * Maintains the order of execution of script
 */

/**
 * Reference Check the 12-async-defer.png
 * black color - html parsing
 * blue color - script fetching
 * orange color - script execution
 */

/**
 * If any script is independent of our code ex: google analytics etc we can use async
 * If there are any dependent things then prefer defer
 */