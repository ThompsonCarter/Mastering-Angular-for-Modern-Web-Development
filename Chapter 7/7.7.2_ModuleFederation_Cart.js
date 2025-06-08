plugins: [
  new ModuleFederationPlugin({
    name: "cart",
    filename: "remoteEntry.js",
    exposes: { "./CartModule": "./projects/cart/src/app/cart/cart.module.ts" },
    shared: ["@angular/core", "@angular/router"]
  })
]