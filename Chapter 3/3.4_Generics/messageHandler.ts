import { Queue } from "./Queue";

interface PatientMessage {
  patientId: string;
  timestamp: Date;
  content: string;
}

const messageQueue = new Queue<PatientMessage>();

messageQueue.enqueue({ patientId: "P01", timestamp: new Date(), content: "Checkup due" });
messageQueue.enqueue({ patientId: "P02", timestamp: new Date(), content: "Lab results available" });

while (messageQueue.size() > 0) {
  const msg = messageQueue.dequeue()!;
  console.log(`[${msg.timestamp.toISOString()}] Patient ${msg.patientId}: ${msg.content}`);
}
