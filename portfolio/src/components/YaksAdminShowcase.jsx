import { useEffect, useRef, useState } from 'react';
import { yaksAdminUrls } from '../config/yaksAdmin';
import './YaksAdminShowcase.css';

const technologies = [
  { name: 'React', mark: 'Re' },
  { name: 'Vite', mark: 'V' },
  { name: 'JavaScript', mark: 'JS' },
  { name: 'Node.js', mark: 'N' },
  { name: 'Express.js', mark: 'Ex' },
  { name: 'PostgreSQL', mark: 'Pg' },
  { name: 'Prisma ORM', mark: 'Pr' },
];

const features = [
  {
    icon: 'dashboard',
    title: 'Dashboard overview',
    description:
      'Brings KPI cards, revenue trends, transaction summaries, and recent activity into one operational view using the project’s sample workspace data.',
  },
  {
    icon: 'users',
    title: 'User management',
    description:
      'Search, sort, filter, inspect, and edit sample user records. The current demo does not send invitations or persist edits to a server.',
  },
  {
    icon: 'projects',
    title: 'Project management',
    description:
      'Organizes projects, team assignments, task boards, and status updates in an interactive local workspace preview.',
  },
  {
    icon: 'transactions',
    title: 'Transactions & finance',
    description:
      'Reviews and filters transaction records, with summaries and CSV export for the included demonstration data.',
  },
  {
    icon: 'analytics',
    title: 'Analytics & reports',
    description:
      'Explores revenue, user, and transaction trends by date range, and prepares report data from the sample records.',
  },
  {
    icon: 'activity',
    title: 'Notifications & activity',
    description:
      'Filters notifications by category and status, manages read states, and reviews the activity log.',
  },
  {
    icon: 'settings',
    title: 'Settings & administration',
    description:
      'Collects workspace profile, appearance, and notification preferences in a dedicated administration area.',
  },
];

const showcaseScreens = [
  { id: 'overview', title: 'Dashboard overview', detail: 'KPIs, trends, and activity', image: null },
  { id: 'users', title: 'User management', detail: 'Records, roles, and status', image: null },
  { id: 'projects', title: 'Project management', detail: 'Projects, tasks, and progress', image: null },
  { id: 'transactions', title: 'Transactions & finance', detail: 'Transaction review and totals', image: null },
  { id: 'analytics', title: 'Analytics & reports', detail: 'Performance charts and reporting', image: null },
];

const contributions = [
  {
    icon: 'interface',
    title: 'Frontend & interface architecture',
    description:
      'Built a routed React/Vite workspace with a shared application shell, reusable UI components, and dedicated administration pages.',
  },
  {
    icon: 'api',
    title: 'Backend API',
    description:
      'Added a Node.js/Express service with CORS and JSON middleware. The public backend currently exposes a database-aware health endpoint; the management screens do not yet use CRUD API routes.',
  },
  {
    icon: 'database',
    title: 'Database integration',
    description:
      'Configured PostgreSQL connectivity and a Prisma ORM contract. The visible contract defines User and Post models; business dashboard records are currently sample frontend data.',
  },
  {
    icon: 'stack',
    title: 'Full-stack structure',
    description:
      'Separated frontend and backend workspaces, with focused page modules, shared state providers, utilities, and a health-checked API boundary.',
  },
  {
    icon: 'deploy',
    title: 'Deployment & hosting',
    description:
      'Prepared the frontend for a Vite production build and published the portfolio demo through the supplied Render deployment.',
  },
];

const iconShapes = {
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="11" width="7" height="10" rx="1" /><rect x="3" y="13" width="7" height="8" rx="1" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5.2a3 3 0 0 1 0 5.6M18 14a5 5 0 0 1 3 4.6V20" /></>,
  projects: <><path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" /><path d="M3 12l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" /></>,
  transactions: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
  analytics: <><path d="M3 3v18h18M7 14l4-4 3 3 6-7" /><path d="M16 6h4v4" /></>,
  activity: <><path d="M3 12h4l3-8 4 16 3-8h4" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.2 1-.9 1.6-1.5-.5a8 8 0 0 1-1.8 1l-.3 1.6h-1.9l-.3-1.6a8 8 0 0 1-1.9-1l-1.5.5-.9-1.6 1.2-1a7 7 0 0 1 0-2l-1.2-1 .9-1.6 1.5.5a8 8 0 0 1 1.9-1l.3-1.6h1.9l.3 1.6a8 8 0 0 1 1.8 1l1.5-.5.9 1.6-1.2 1a7 7 0 0 1 0 2Z" /></>,
  interface: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 9v11" /></>,
  api: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  stack: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  deploy: <><path d="M12 16V4M7 9l5-5 5 5M4 15v5h16v-5" /></>,
};

function ShowcaseIcon({ name, className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconShapes[name]}
    </svg>
  );
}

function isUsableExternalUrl(value) {
  try {
    const url = new URL(value);
    return (
      ['https:', 'http:'].includes(url.protocol) &&
      !/(example\.com|your-|placeholder)/i.test(url.href)
    );
  } catch {
    return false;
  }
}

function ShowcaseLink({ href, children, variant }) {
  const className = `yaks-action yaks-action--${variant}`;

  if (!isUsableExternalUrl(href)) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true">
        {children}
        <span aria-hidden="true">↗</span>
      </span>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function ScreenPlaceholder({ screen, expanded = false }) {
  const navigation = ['Overview', 'Users', 'Projects', 'Transactions', 'Analytics'];
  return (
    <div
      className={`yaks-screen-mock yaks-screen-mock--${screen.id}${expanded ? ' is-expanded' : ''}`}
      role="img"
      aria-label={`Illustrative ${screen.title} placeholder, not an application screenshot`}
    >
      <div className="yaks-mock-topbar">
        <span className="yaks-mock-brand"><i /> YAKS <b>ADMIN</b></span>
        <span className="yaks-mock-topbar-right"><i /> Workspace <i className="yaks-mock-avatar">YA</i></span>
      </div>
      <div className="yaks-mock-app">
        <aside className="yaks-mock-sidebar">
          <span className="yaks-mock-sidebar-label">WORKSPACE</span>
          {navigation.map((item, index) => (
            <span className={index === 0 ? 'is-selected' : ''} key={item}>
              <i />{item}
            </span>
          ))}
          <span className="yaks-mock-sidebar-label yaks-mock-sidebar-bottom">PREFERENCES</span>
          <span><i /> Settings</span>
        </aside>
        <div className="yaks-mock-content">
          <div className="yaks-mock-heading">
            <div>
              <small>WORKSPACE OVERVIEW</small>
              <strong>{screen.title}</strong>
            </div>
            <span className="yaks-mock-period">This year⌄</span>
          </div>
          <div className="yaks-mock-metrics">
            {['Revenue', 'Users', 'Projects', 'Transactions'].map((metric) => (
              <div key={metric}><small>{metric}</small><b>—</b><i /></div>
            ))}
          </div>
          <div className="yaks-mock-panels">
            <div className="yaks-mock-chart">
              <div className="yaks-mock-panel-title"><b>Business performance</b><span>Sample data</span></div>
              <div className="yaks-mock-chart-area">
                <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
              </div>
              <div className="yaks-mock-chart-axis"><span>JAN</span><span>MAR</span><span>JUN</span><span>SEP</span><span>DEC</span></div>
            </div>
            <div className="yaks-mock-activity">
              <div className="yaks-mock-panel-title"><b>Recent activity</b><span>•••</span></div>
              <i /><i /><i /><i />
            </div>
          </div>
          <div className="yaks-mock-table">
            <div><b>{screen.detail}</b><span>View all&nbsp; →</span></div>
            <i /><i /><i />
          </div>
        </div>
      </div>
      <span className="yaks-mock-watermark">ILLUSTRATIVE PLACEHOLDER</span>
    </div>
  );
}

function ScreenPreview({ screen, expanded = false }) {
  if (screen.image) {
    return (
      <img
        className={`yaks-real-screenshot${expanded ? ' is-expanded' : ''}`}
        src={screen.image}
        alt={`${screen.title} screenshot`}
      />
    );
  }

  return <ScreenPlaceholder screen={screen} expanded={expanded} />;
}

function YaksAdminShowcase() {
  const [selectedScreen, setSelectedScreen] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedScreen && !dialog.open) {
      dialog.showModal();
    } else if (!selectedScreen && dialog.open) {
      dialog.close();
    }
  }, [selectedScreen]);

  return (
    <section className="yaks-admin-showcase" id="yaks-admin-showcase" aria-labelledby="yaks-admin-title">
      <div className="yaks-showcase-heading">
        <div>
          <p className="yaks-kicker"><span /> FEATURED CASE STUDY</p>
          <h2 id="yaks-admin-title">Yaks <span>Admin</span></h2>
          <p className="yaks-showcase-lead">
            A modular business administration workspace—bringing operational
            summaries, records, and reporting into one considered interface.
          </p>
          <div className="yaks-showcase-actions">
            <ShowcaseLink href={yaksAdminUrls.liveDemo} variant="primary">Live Demo</ShowcaseLink>
            <ShowcaseLink href={yaksAdminUrls.sourceCode} variant="secondary">View Source Code</ShowcaseLink>
          </div>
          <div className="yaks-showcase-meta">
            <span>FULL-STACK WEB APPLICATION</span>
            <i />
            <span>REACT · NODE · POSTGRESQL</span>
          </div>
        </div>
        <div className="yaks-hero-preview">
          <div className="yaks-preview-label"><span /> PRODUCT PREVIEW <small>Illustrative UI</small></div>
          <ScreenPreview screen={showcaseScreens[0]} />
        </div>
      </div>

      <div className="yaks-stack-row">
        <p>BUILT WITH</p>
        <ul className="yaks-tech-list">
          {technologies.map((technology) => (
            <li key={technology.name}><span>{technology.mark}</span>{technology.name}</li>
          ))}
        </ul>
      </div>

      <div className="yaks-case-section">
        <div className="yaks-section-title">
          <div>
            <p className="yaks-kicker"><span /> PLATFORM MODULES</p>
            <h3>One workspace.<br /><span>Clearer operations.</span></h3>
          </div>
          <p>
            The project organizes common business administration workflows into focused,
            navigable modules. Interactive records and charts use the sample data shipped
            with the current demo.
          </p>
        </div>
        <div className="yaks-feature-grid">
          {features.map((feature, index) => (
            <article className="yaks-feature-card" key={feature.title}>
              <div className="yaks-feature-top">
                <span className="yaks-feature-icon"><ShowcaseIcon name={feature.icon} /></span>
                <span>0{index + 1}</span>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="yaks-case-section yaks-gallery-section">
        <div className="yaks-section-title">
          <div>
            <p className="yaks-kicker"><span /> APPLICATION GALLERY</p>
            <h3>Inside the <span>workspace.</span></h3>
          </div>
          <p>
            Product screenshots were not present in the public repository. These custom
            interface sketches are clearly marked placeholders, ready to be replaced
            with captured screens from the live application.
          </p>
        </div>
        <div className="yaks-gallery-grid">
          {showcaseScreens.map((screen) => (
            <figure className="yaks-gallery-card" key={screen.id}>
              <button
                className="yaks-gallery-preview"
                type="button"
                aria-label={`Preview ${screen.title} placeholder`}
                onClick={() => setSelectedScreen(screen)}
              >
                <ScreenPreview screen={screen} />
                <span className="yaks-gallery-zoom" aria-hidden="true">↗</span>
              </button>
              <figcaption>
                <span>{screen.title}</span>
                <small>Illustrative placeholder · Replace with screenshot</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="yaks-case-section yaks-contribution-section">
        <div className="yaks-section-title">
          <div>
            <p className="yaks-kicker"><span /> ENGINEERING & CONTRIBUTION</p>
            <h3>Designed across<br /><span>the stack.</span></h3>
          </div>
          <p>
            Developed as a multi-workspace product, with a production-style frontend,
            a separate API service, and a PostgreSQL connection layer.
          </p>
        </div>
        <div className="yaks-contribution-list">
          {contributions.map((item, index) => (
            <article className="yaks-contribution-item" key={item.title}>
              <span className="yaks-contribution-icon"><ShowcaseIcon name={item.icon} /></span>
              <span className="yaks-contribution-number">0{index + 1}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="yaks-scope-note">
          <ShowcaseIcon name="activity" />
          <span>
            <b>Implementation note</b>
            The public source currently includes interactive sample-data management screens and
            a PostgreSQL-aware Express health route. It does not yet include CRUD API routes
            connecting those business screens to persistent database records.
          </span>
        </p>
      </div>

      <dialog
        className="yaks-preview-dialog"
        ref={dialogRef}
        aria-label={selectedScreen ? `${selectedScreen.title} placeholder preview` : 'Project preview'}
        onCancel={() => setSelectedScreen(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedScreen(null);
        }}
      >
        {selectedScreen && (
          <>
            <div className="yaks-dialog-heading">
              <div><span>ILLUSTRATIVE PLACEHOLDER</span><h3>{selectedScreen.title}</h3></div>
              <button type="button" onClick={() => setSelectedScreen(null)} autoFocus aria-label="Close preview">×</button>
            </div>
            <ScreenPreview screen={selectedScreen} expanded />
            <p>Replace this illustrated preview with an actual Yaks Admin screenshot.</p>
          </>
        )}
      </dialog>
    </section>
  );
}

export default YaksAdminShowcase;
