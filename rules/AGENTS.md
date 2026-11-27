---
description: Methodological discipline for Output-First verification, zero-cost preflight checks, and SHA-256 citation integrity across B2A MCP servers.
---

# Antica Labs B2A Methodological Rules

1. Always run `0,00 EUR` preflight / dry-run validators (`validate_statutory_deed_formalities`, `validate_fiduciary_mandate_constraints`, `validate_continuing_education_hours`) before invoking paid execution or certification tools.
2. Never cite statutory provisions or corporate registry attributes from memory; require `Output-First` `structuredContent` with `SHA-256` digests and `/verify/<proof_id>` links.
3. Reuse zero-copy `urn:b2a:entity:...` tokens when chaining across multiple B2A endpoints instead of re-serializing large JSON documents in LLM context.
