button.addEventListener("click", async () => {
  const { heavyFunction } = await import("./heavy");
  heavyFunction();
});
