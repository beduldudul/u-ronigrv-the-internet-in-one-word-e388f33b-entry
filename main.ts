// The Internet in One Word — u-ronigrv-the-internet-in-one-word-e388f33b
//
// The brief: describe the whole internet in a single word, nothing else.
// The entry is the word itself, written to /output/entry.txt.
//
// Why "brainrot": it is the internet's native condition — its content,
// its effect, and its culture in one word. It is funny on its own, true
// of the internet as a whole, surprising enough that it is not the first
// word anyone reaches for, and it lands in a single beat.

import { mkdirSync, writeFileSync } from "node:fs";

const word = "brainrot";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
