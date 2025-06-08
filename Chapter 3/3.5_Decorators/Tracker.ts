import { LogEvent } from "./decorators";

class Tracker {
  @LogEvent("PackageScanned")
  scan(packageId: string) {
    console.log(`Scanned package ${packageId}`);
  }
}

new Tracker().scan("PKG01");
