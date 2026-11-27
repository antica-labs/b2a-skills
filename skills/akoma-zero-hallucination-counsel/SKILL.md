---
name: akoma-zero-hallucination-counsel
description: Strict anti-hallucination legal citation and procedural readiness methodology using Akoma Ntoso 3.0 XML, ELI/ECLI identifiers, non-quashing checks, and SHA-256 proofs across Korpus and ATLAS.
---

# Akoma Zero-Hallucination Legal Counsel (`akoma-zero-hallucination-counsel`)

Enforce zero statutory or case-law hallucination across European and Francophone jurisdictions (`FR`, `EU`, `LU`, `MC`, `AD`):

1. **Never Cite Statutory or Case Law From Parametric Memory**:
   - Probe validity via `probe_norm_validity_status` (`https://www.korpus.lu/api/v1/mcp`), then retrieve the consolidated text at the exact `applicability_date` via `certify_consolidated_statute_akoma` (`akoma_ntoso_xml`, `canonical_eli_uri`, `content_sha256`).
2. **Mandatory Non-Quashing Check on Case Law**:
   - Before relying on any court decision, call `verify_jurisprudence_non_cassation` to confirm it has not been overturned or quashed (strictly respecting French Art. L.111-13 COJ prohibition on individual judge profiling).
3. **Epistemic Groundedness Gate (`>= 0.88`)**:
   - Validate draft legal reasoning with `audit_legal_claim_groundedness` and verify procedural deadlines via `verify_procedural_deadline_compliance` on `https://atlas-legal.lu/api/mcp`.
4. **Counterparty Proof Sharing (`0,00 EUR`)**:
   - Attach `/verify/<proof_id>` URLs so opposing or reviewing agents can verify `SHA-256` + dual `RFC 3161` seals at zero cost.
