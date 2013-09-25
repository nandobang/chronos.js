chronos.js
==========

Ultra simple timeout and interval manager for JavaScript.

Usage
-----

Chronos is dead simple. A global object `Chronos` is created, and offers you
one property and two methods:

    Chronos.events
    Chronos.createEvent
    Chronos.destroyEvent

To create a repeatable event (aka `setInterval`):

    Chronos.createEvent(
      "myEventName",
      true,
      myFunction,
      2000,
      someArgument,
      anotherArgument
    );

And a timeoutable event:

    Chronos.createEvent(
      "myTimeout",
      false,
      myFunction,
      3000,
      myArgument
    );

You don't need to store the events' IDs, as Chronos does it for you. To destroy
any event, simply pass its name:

    Chronos.destroyEvent("myEventName");
    Chronos.destroyEvent("myTimeout");

As a side note, Chronos will automagically destroy timeouts after their
execution.

License
-------

This is full open-source, no need to credit me. But you can still read the
license file.