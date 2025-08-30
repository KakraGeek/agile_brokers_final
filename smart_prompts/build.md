# smart_prompts/build.md — Build a Slice

You are Cursor’s agent. Implement **one slice** end‑to‑end.

**Before you start**
- If the stack is **not** locked, ask **once** to lock: Next.js + TS / Vite + React + TS / Other.
- After confirmation, proceed without further prompts.

**Do**
1) Implement only the selected slice (keep diffs small).  
2) Honor `.cursor/rules.json` (Windows/PowerShell, parallax transform‑only).  
3) Add/adjust Windows‑safe scripts using `cross-env` and `rimraf`.  
4) Run tests and Lighthouse/axe; fix regressions immediately.  

**Deliver**
- Working code for the slice
- Short summary of changes
- Notes on perf/a11y/security considerations
