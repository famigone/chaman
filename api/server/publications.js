import Sensors from "/imports/api/sensors.js";
import Tags from "/imports/api/tags.js";
import Events from "/imports/api/events.js";

import { ReactiveAggregate } from "meteor/tunguska:reactive-aggregate";

Meteor.publish("sensors", function() {
  return Sensors.find({ activo: true });
});

Meteor.publish("tags", function() {
  return Tags.find({ activo: true });
});

Meteor.publish("sensorsOne", function(ids) {
  return Sensors.find({ sensorid: ids, activo: true });
});

Meteor.publish("TagsOne", function(tag) {
  return Sensors.find({ tag: tag, activo: true });
});

Meteor.publish("events", function() {
  return Events.find();
  //return Events.find();
});
Meteor.publish("eventsOne", function(sensorname) {
  return Events.find({ topic: sensorname });
  //return Events.find();
});