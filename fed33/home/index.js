// import("./bootstrap");

async function loadComponent(scope, module) {
  await __webpack_init_sharing__("default");
  const container = window[scope];
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
}

const useDynamicScript = (args) => {
  let ready = false;
  let failed = false;

  if (!args.url) {
    return;
  }

  const element = document.createElement("script");

  element.src = args.url;
  element.type = "text/javascript";
  element.async = true;

  ready = false;
  failed = false;

  element.onload = () => {
    console.log(`Dynamic Script Loaded: ${args.url}`);
    ready = true;
  };

  element.onerror = () => {
    console.error(`Dynamic Script Error: ${args.url}`);
    ready = false;
    failed = true;
  };

  document.head.appendChild(element);

  //   return () => {
  //     console.log(`Dynamic Script Removed: ${args.url}`);
  //     document.head.removeChild(element);
  //   };

  return {
    ready,
    failed,
  };
};

async function System(props) {
  const { ready, failed } = await useDynamicScript({
    url: props.url,
  });

  //   if (!props.system) {
  // console.log("no system");
  // return <h2>Not system specifiedddd</h2>;
  //   }

  if (!ready) {
    console.log("not ready");
    // return <h2>Loading dynamic script: {props.system.url}</h2>;
  }

  if (failed) {
    console.log("it failed");
    // return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  setTimeout(() => {
    const Component = loadComponent(props.scope, props.module);
  }, 1000);

  return true;
}

let comic = {
  url: "http://localhost:1339/remoteEntry.js",
  scope: "lego",
  module: "./lego",
};

System(comic);
