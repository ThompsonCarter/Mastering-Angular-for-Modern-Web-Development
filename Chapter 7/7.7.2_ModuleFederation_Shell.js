const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  output: { publicPath: "auto" },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        cart: "cart@http://localhost:3001/remoteEntry.js"
      },
      shared: ["@angular/core", "@angular/router"]
    })
  ]
};