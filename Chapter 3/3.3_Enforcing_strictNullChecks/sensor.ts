export interface Sensor {
  id: string;
  temperature?: number;
  humidity?: number;
}

export function displayReading(sensor: Sensor) {
  const temp = sensor.temperature ?? "N/A";
  const humidity = sensor.humidity != null ? `${sensor.humidity}%` : "N/A";
  console.log(`Sensor ${sensor.id} — Temp: ${temp}°C, Humidity: ${humidity}`);
}

displayReading({ id: "A1", temperature: 22 });
displayReading({ id: "B2" });
