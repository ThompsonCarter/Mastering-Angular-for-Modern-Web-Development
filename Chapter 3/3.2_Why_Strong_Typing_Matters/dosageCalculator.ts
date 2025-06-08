interface DosageInput {
  weightKg: number;
  concentrationMgPerMl: number;
}

function calculateDosage(input: DosageInput): number {
  return input.weightKg * input.concentrationMgPerMl;
}
