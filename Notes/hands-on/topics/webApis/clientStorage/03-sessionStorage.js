/**
 * The sessionStorage object stores data only for a session. It means that the data stored in the sessionStorage will be deleted when the browser is closed.
 * A page session lasts as long as the web browser is open and survives over the page refresh.
 * When you open a page in a new tab or window, the web browser creates a new session.
 * If you open multiple tabs or windows with the same URL, the web browser creates a separate sessionStorage for each tab or window. So data stored in one web browser tab cannot be accessible in another tab.
 * When you close a tab or window, the web browser ends the session and clears data in the sessionStorage.
 * Data stored in the sessionStorage is specific to the protocol of the page. For example, the same site javascripttutorial.net has different sessionStorage when accessing with the http and https.
 * Since the sessionStorage data is tied to a server session, it’s only available when a page is requested from a server. The sessionStorage isn’t available when the page runs locally without a server.
*/
/**
Because the sessionStorage is an instance of the Storage type, you can manage data using the Storage’s methods:

* setItem(name, value) – set the value for a name
* removeItem(name) – remove the name-value pair identified by name.
* getItem(name) – get the value for a given name.
* key(index) – get the name of the value in the given numeric position.
* clear() – remove all values in the sessionStorage .
 */

/**
 * Accessing Session Storage
 * 
 * window.sessionStorage or sessionStorage
 * ex: sessionStorage.getItem(key)
 * sessionStorage.setItem(key, value)
 * sessionStorage.removeItem(key)
 * sessionStorage.clear()
 * sessionStorage.length
 */

/**
 * USECASE
 * 
 * You’ll build a simple web application that allows users to select the mode, either dark or light mode. By default, it has a light mode. And you’ll use the sessionStorage to remember the mode when the page refreshes.
 * If you refresh the page, the mode that you selected will restore since it’s stored in the sessionStorage.
 * However, if you close the tab or window, the page will reset to the dark mode, which is the default mode.
 */