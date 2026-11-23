import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a friend who has never coded to let an AI agent
// build their first app idea on make.fun.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
// Why this line: it opens by removing the friend's biggest objection
// ("you don't need to learn to code"), names the exact ask in plain
// words, and ends on a concrete payoff a non-coder can picture — a
// working first version they can actually tap and try. Truthful
// (make.fun agents build a first version from a plain-words description),
// clear on first pass, and short (201 characters, under the 240 cap).
const LINE =
  "You don't need to learn to code — just describe the app idea you've been carrying around in plain words, and an AI agent on make.fun will build you a working first version you can actually tap and try.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
