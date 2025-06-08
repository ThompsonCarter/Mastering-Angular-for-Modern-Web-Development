document.getElementById("loadAnalytics")!.addEventListener("click", async () => {
  const mod = await import("./analytics");
  mod.showAnalytics();
});
