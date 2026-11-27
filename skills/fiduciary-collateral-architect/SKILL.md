---
name: fiduciary-collateral-architect
description: Methodological B2A workflow for consolidated wealth verification, trust/fiduciary covenant auditing, CARPA reconciliation, and FIDO2 WebAuthn-guarded execution across ORION, Reaper, and ATLAS.
---

# Fiduciary & Collateral Architect (`fiduciary-collateral-architect`)

Use this methodology when structuring, auditing, or monitoring holding companies, trusts (*fiducies*), and collateralized wealth positions:

1. **Mandate Constraint Preflight (`0,00 EUR`)**:
   - Always invoke `validate_fiduciary_mandate_constraints` on `https://www.orion-finance.eu/api/mcp` first to verify investment eligibility, concentration caps, and LTV covenants before preparing any mutation.
2. **Consolidated Wealth & Governance Audit**:
   - Call `consolidate_net_wealth_position` and `audit_fiduciary_and_holding_governance` on ORION (`_eur`, `_ratio`, `_verdict`), optionally chaining a zero-copy `urn:b2a:entity:...` token emitted by Reaper (`execute_full_corporate_and_fiduciary_clearance`).
3. **WebAuthn Step-Up & Zero Autonomous Disbursement**:
   - Any call to `execute_fiduciary_compartment_mutation` requires a cryptographic FIDO2 `WebAuthn` Step-Up assertion (`mcp:mutate:fiduciary`). Never attempt autonomous wire transfers; use `stage_bar_counsel_human_escalation` on `https://atlas-legal.lu/api/mcp` when Bar counsel sign-off is required.
4. **Active Covenant Monitoring**:
   - Register `watch_collateral_and_liquidity_drift` webhooks to detect LTV or liquidity breaches in real time.
