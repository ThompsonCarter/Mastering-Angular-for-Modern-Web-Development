openMenu() {
  const overlayRef = this.overlay.create();
  const portal = new ComponentPortal(MenuComponent);
  overlayRef.attach(portal);
}