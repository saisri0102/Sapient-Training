/**
 * The Notification API allows you to use JavaScript to display desktop notifications to the users.
 */
/**
 * Notification permissions
    * Since the Notification API can be easy to abuse, it strictly enforces two security features by default:
    * First, users must explicitly agree to receive the notifications on a per-origin basis.
    * Second, only code runs in a secure context (https) can send the notifications.
    * To request notification permission, you use the Notification global object. This object has the requestPermission() method that returns a Promise, which resolves when the user takes an action on the permission dialog box:
    * 
    * let permission = await Notification.requestPermission();
    * 
    * The permission can be one of the following string 'granted', 'denied', or 'default':

        * 'granted' – users accept to receive the notifications.
        * 'denined' – users deny to have the notifications.
        * 'default' – users choices are unknown and browsers will act as if the values were 'denied'.
 */

/**
 * Creation of notification
 * 
 * const greeting = new Notification('Hi, How are you?',{
  body: 'Have a good day',
  icon: './img/goodday.png'
});
 */

/**
 * Notification Events
 * Notification events
The Notification object provides you with the following events:
    * show – is fired when the notification is displayed.
    * click – is fired when the notification is clicked.
    * close – is fired when the notification is dismissed or closed via the close() method.
    * error – is fired when an error occurs, which blocks the notification from being displayed.
* To handle these events, you use the addEventListener() method of the Notification object.
 */