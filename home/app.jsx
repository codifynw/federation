function loadComponent(scope, module) {
  console.log("log one BC");
  return async () => {
    console.log("log two BC");
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    console.log("log one");
    const container = window[scope]; // or get the container somewhere else
    console.log("log two");
    console.log("container: ", container);
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    console.log("log three");
    const factory = await window[scope].get(module);
    console.log("log four");
    const Module = factory();
    console.log("log five");
    return Module;
  };
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

  return {
    ready,
    failed,
  };
};

function System(props) {
  const { ready, failed } = useDynamicScript({
    url: props.url,
  });

  if (!ready) {
    console.log("Loading dynamic script: ", props.url);
  }

  if (failed) {
    console.log("Failed to load dynamic script: ", props.url);
  }

  console.log('scope: ', props.scope);
  console.log('module: ', props.module);

  return loadComponent(props.scope, props.module);
}

const App = System({
  url: "http://localhost:1338/remoteEntry.js",
  scope: "comic",
  module: "./XKCD",
});

App();

export default App;
