# NS Store V3 Multi-Page Architecture Explanation

## Architecture
- **Routing Engine Constraint**: Transitioned purely to `react-router-dom` to fulfill "when I click a button I will go to that page" without dropping the UX.
- **Frontend Constraints (One Page CSS & Empty Images)**: Refactored `client/src/index.css` to absorb all media queries, Intersection Observers, and stagger-delay classes (`.summer-card:nth-child`) enabling butter-smooth landing pages. Dropped all `img` domains and successfully deployed tinted color grids (`#D6D1C4`, etc.) mapping directly to the DB!
- **Emoji Purge**: Replaced universally with purely coded `SVG` fragments directly in `App.jsx` avoiding file sprawl and ensuring maximum visual luxury.

## Workflow
1. CI checks ESLint across all newly developed routing contexts. 
2. Playwright strictly audits the clickable router loops (Landing -> Shop -> Category Shop).
3. Post deployment, the `deploy.sh` script executes unconditionally via standard EC2 SSH pipelines guaranteeing uptime!

## Challenges & Solutions
**Handling Observers vs React Router**: Since Intersection Observer triggers off viewport mounts, dropping it natively into `Home.jsx` ensured it resets independently from `Shop.jsx` mounting.
**Single CSS Route Bleeding**: Because CSS lives in 1 file, unique wrappers (`.shop-header`, `.summer-grid`) had to be perfectly decoupled logically in the stylesheet so navigating from Home to Shop wouldn't bleed absolute-positioned `.hero-titles` randomly on the DOM.
