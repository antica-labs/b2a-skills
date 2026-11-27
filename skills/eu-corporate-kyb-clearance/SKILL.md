---
name: eu-corporate-kyb-clearance
description: Methodological B2A workflow for European corporate KYB/UBO verification, statutory deed preflight, and zero-copy URN clearance across Reaper (acte.harlington.eu) and Korpus (www.korpus.lu).
---

# EU Corporate KYB & Statutory Clearance (`eu-corporate-kyb-clearance`)

Follow this deterministic 4-step methodology whenever an autonomous agent or legal/financial operator must clear a European corporate entity before onboarding, contracting, or filing:

1. **Zero-Cost Preflight (`0,00 EUR`)**:
   - Call `validate_statutory_deed_formalities` on `https://acte.harlington.eu/api/mcp` to validate corporate form, share capital rules, and mandatory clauses before any paid registry pull.
2. **Certified Registry & UBO Extraction**:
   - Call `certify_corporate_kyb_and_ubo_extract` (or bundled `execute_full_corporate_and_fiduciary_clearance` for `-15%` URN multi-SaaS handoff) to retrieve verified SIREN/RCS/RNE standing, beneficial owners (`_pct`), BODACC insolvency flags (`_verdict`), and `urn:b2a:entity:...`.
3. **Point-in-Time Statutory Verification**:
   - Pass the `urn:b2a:entity:...` reference to `https://www.korpus.lu/api/v1/mcp` (`certify_consolidated_statute_akoma`) to verify the exact in-force statutory articles in `Akoma Ntoso 3.0` XML (`canonical_eli_uri`).
4. **Continuous Drift Protection & Human Escalation**:
   - Subscribe critical counterparties via `subscribe_corporate_bodacc_drift` and escalate contested deeds via `stage_avocat_deed_countersignature` (`0,00 EUR`).
