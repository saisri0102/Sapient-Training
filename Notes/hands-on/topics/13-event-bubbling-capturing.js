/**
 * These are two ways of event propagation in DOM tree
 * Let say we have grandParentDiv, parentDiv, childDiv and if child is clicked in which sequence events are called ?
 */

/**
 * Event Bubbling
 * Here even propagates from child to parent to grandParent
 * Babel always comes out
 */

/**
 * Event Capturing or Event trickling
 * Here even propagates from grandparent to parent to child
 */

/**
 * In bubbling event propagates from current click div to top div (bottom to up)
 * In capturing event propagates from top div to currnet div (up to bottom)
 * Trickling down, bubbling up
 * 
 * addClickHandler('click', () => {} , useCaptureValue( it can be true or false ) ) 
 * if useCapture is true then it follow event capturing
 * 
 * by default it is false ( event bubbling )
 */

/**
 * How to stop propagation at certain point of time ?
 * use event.stopPropagation then it won't propagate to next event handler
 */
