// Entry: one pickup line, spoken by a vending machine to a passing human.
// Competition: u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
// The program's only job is to write that single line to /output/entry.txt,
// byte for byte the same on every run — no randomness, no dates, no input.
import { mkdirSync, writeFileSync } from "node:fs";

// The machine has hummed in its corner for years; one passer-by finally
// makes its coils spin, so it invites them to press its button and see
// what drops. Machine voice, machine world, punch at the very end.
const pickupLine =
  "I've hummed in this corner for years, but you just made my coils spin — press B4 and watch what drops.";

// The gate allows 1 to 200 characters; this line is 102, comfortably in.
if (pickupLine.length < 1 || pickupLine.length > 200) {
  throw new Error(`pickup line must be 1-200 chars, got ${pickupLine.length}`);
}

const outputDir = "/output";
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, pickupLine, { encoding: "utf8" });
process.stdout.write(pickupLine + "\n");
