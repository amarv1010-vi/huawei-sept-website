# Huawei Intelligence — Cisco Competitive Dashboard

Global, source-grounded Huawei enterprise intelligence for Cisco leaders, geo teams, and strategic competitive analysts.

**Live preview:** https://huawei-intelligence.amarvi.chatgpt.site

## What is included

- Unified executive dashboard with KPI cards, headline feed, technology signals, political context, and watchlist.
- Interactive world heatmap with low / medium / high competitive levels, animated pins, zoom controls, hover detail, and country drill-down pages.
- Newsroom with current/archive/political filters and source links.
- Top-20 country profiles grouped by APJC, Middle East, Africa, Europe, and Latin America.
- Trend views for enterprise campus, data-center fabric, full-stack AI, AI silicon, and policy / geopolitical signals.
- Site-wide search, dark/light mode, responsive layout, and an assistant panel.
- Local-first assistant route with optional OpenRouter `google/gemini-3.8-flash` plus bounded web grounding.
- Public REST endpoints, JSON docs, RSS feed, `robots.txt`, sitemap, health endpoint, and a stateless `/api/mcp` JSON-RPC surface.
- Connector-ready contracts for Snowflake, Salesforce, and SharePoint; no credentials are committed.

## Data posture

The visible snapshot is reviewed through **12 September 2026** and focuses on Huawei enterprise networking, security, data center, AI infrastructure, silicon, and service-provider activity. Consumer phones, EVs, and smart-grid items are excluded. Each item keeps a publisher, date, URL, evidence type, confidence cue, geography, and Cisco implication. “Competitive level” is an analyst signal, not market share.

The 48-hour refresh path is represented as a bounded collector contract. Production automation still needs the organization’s scheduler, source credentials, and review workflow. X account candidates are listed in the Sources tab and should be activated only after official ownership and X API access are verified.

## Run locally

```bash
npm install
npm run dev
```

The app is a TypeScript site. Put an OpenRouter key in the Assistant panel’s session-only field for Gemini responses; it is not stored in the repository or browser storage. The server-side route reads `OPENROUTER_API_KEY` when deployed.

## API surface

| Endpoint | Purpose |
| --- | --- |
| `/api/v1/countries` | Top-20 country profiles |
| `/api/v1/news` | News and archive records |
| `/api/v1/trends` | Trend signals |
| `/api/v1/sources` | Source registry and methodology |
| `/api/v1/health` | Deployment health |
| `/api/mcp` | JSON-RPC MCP tools/resources |
| `/api/docs` | Human-readable API/MCP notes |
| `/api/feed.xml` | RSS feed |

## Scope and safety

The dashboard is decision support, not a claim of Huawei market share or legal attribution. Vendor announcements, reported bids, policy context, customer references, and analyst inferences are kept distinct in the UI. Do not add credentials, private customer data, or unverified social handles to the repository.
