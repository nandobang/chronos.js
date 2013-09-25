/*
 * Chronos.js v1.0
 *
 */

(function() {
  window.Chronos = Chronos = {};

  /*
   * Holds all events' IDs by their name. Therefore, you cannot have two events
   * using the same name.
   */
  Chronos.events = {};

  /*
   * Creates an event.
   *
   * name: the event name.
   * repeatable: should it repeat itself or run only once?
   * fn: the event's function.
   * delay: delay (in milliseconds) between every execution.
   * args: any arguments needed for the function.
   */
  Chronos.createEvent = function (name, repeatable, fn, delay, args) {
    var eventId;
    var eventArgs = Array.prototype.slice.call(arguments, 2);

    if (repeatable) {
      eventId = setInterval.apply(null, eventArgs);
    } else {
      eventId = setTimeout.apply(null, eventArgs);

      setTimeout(function () { Chronos.destroyEvent(name); }, delay);
    }

    this.events[name] = eventId;
  };

  /*
   * Destroys an event if it still exists.
   *
   * name: the event's name.
   */
  Chronos.destroyEvent = function (name) {
    clearInterval(this.events[name]);
    clearTimeout(this.events[name]);

    delete this.events[name];
  };
})();