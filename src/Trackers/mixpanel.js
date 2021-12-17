import mitt from "mitt";
import mixpanel from "mixpanel-browser";

export const mxpEmitter = mitt();
export const genericEmitter = mitt();

export const emitEvent = (
  eventName,
  eventArgs,
  options = { useMixp: true }
) => {
  if (options.useMixp) {
    mxpEmitter.emit(eventName, eventArgs);
  } else {
    genericEmitter.emit(eventName, eventArgs);
  }
};

mxpEmitter.on("*", (type, e) => {
  mixp.track(type, e);
});

genericEmitter.on("links", (e) => {
  mixp.links(e.id, e.link);
});

export const mixp = {
  init() {
    mixpanel.init("107ae269ae6989ec50a33dce7e79a3ad");
  },

  track(event, attr) {
    mixpanel.track(event, attr);
  },

  getId() {
    const id = mixpanel.get_distinct_id();
    mixp.identify(id);
  },

  identify(id) {
    mixpanel.identify(id);
    mixpanel.people.set({ $name: `user${id}1`, $email: `mail${id}@gmail.com` });
  },

  links(navId, link) {
    mixpanel.track_links(`#${navId}`, link);
  },
};
