import { useEffect, useState, type ReactElement } from 'react';

type IconName = 'file' | 'code' | 'mail' | 'arrow' | 'github' | 'linkedin' | 'download' | 'sun' | 'moon';

const profileLinks = {
  github: 'https://github.com/Rounakrishna',
  linkedin: 'https://www.linkedin.com/in/krishna-singh012/',
  email: 'mailto:krishnakumarqaz0@gmail.com',
  resume: '/resume.pdf',
} as const;

const Icon = ({ name }: { name: IconName }) => {
  const paths: Record<IconName, ReactElement> = {
    file: <><path d="M5 2.8h5l3 3V15H5z" /><path d="M10 2.8v3h3M7.4 9h3.2M7.4 11.5h3.2" /></>,
    code: <><path d="m6 5-3 3 3 3M10 5l3 3-3 3M9 3.8 7 12.2" /></>,
    mail: <><rect x="2.5" y="4" width="11" height="8" rx="1" /><path d="m3 5 5 4 5-4" /></>,
    arrow: <><path d="M3 8h10M9 4l4 4-4 4" /></>,
    github: <><path d="M8 2.5a5.5 5.5 0 0 0-1.7 10.7c.3.1.4-.1.4-.3v-1.1c-1.5.3-1.8-.7-1.8-.7-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.6 0 .9.6.9.6.5.9 1.4.6 1.7.5.1-.4.2-.6.4-.7-1.2-.1-2.4-.6-2.4-2.6 0-.6.2-1.1.6-1.5-.1-.1-.3-.7.1-1.5 0 0 .5-.2 1.6.6a5.5 5.5 0 0 1 2.9 0c1.1-.8 1.6-.6 1.6-.6.4.8.2 1.4.1 1.5.4.4.6.9.6 1.5 0 2-1.2 2.5-2.4 2.6.2.2.4.5.4 1v1.5c0 .2.1.4.4.3A5.5 5.5 0 0 0 8 2.5Z" /></>,
    linkedin: <><path d="M3.4 6.5V13M3.4 3.3v.1M6.4 13V6.5M6.4 9.3c0-2.1 3.9-2.4 3.9.1V13M6.4 8.2c.3-1.1 1-1.8 2.1-1.8 1.2 0 2.2.7 2.2 2.6V13" /></>,
    download: <><path d="M8 2.5v7M5.3 7.2 8 9.8l2.7-2.6M3 12.8h10" /></>,
    sun: <><circle cx="8" cy="8" r="2.6" /><path d="M8 1.5v1.3M8 13.2v1.3M1.5 8h1.3M13.2 8h1.3M3.4 3.4l.9.9M11.7 11.7l.9.9M12.6 3.4l-.9.9M4.3 11.7l-.9.9" /></>,
    moon: <path d="M13 10.7A5.7 5.7 0 0 1 5.3 3a5.8 5.8 0 1 0 7.7 7.7Z" />,
  };
  return <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

const codeViews: Record<string, { path: string; lines: ReactElement[] }> = {
  'about.py': {
    path: 'krishna / about.py',
    lines: [
      <><span className="syntax-comment"># about.py</span></>,
      <><span className="syntax-key">from</span> <span className="syntax-type">dataclasses</span> <span className="syntax-key">import</span> dataclass</>,
      <><span className="syntax-key">from</span> <span className="syntax-type">typing</span> <span className="syntax-key">import</span> Final</>,
      <></>,
      <><span className="syntax-key">ABOUT</span>: <span className="syntax-type">Final</span>[dict] = {'{'}</>,
      <>    <span className="syntax-string">"name"</span>: <span className="syntax-string">"Krishna"</span>,</>,
      <>    <span className="syntax-string">"role"</span>: <span className="syntax-string">"Data Engineer"</span>,</>,
      <>    <span className="syntax-string">"location"</span>: <span className="syntax-string">"Bengaluru, India"</span>,</>,
      <>    <span className="syntax-string">"domain"</span>: <span className="syntax-string">"investment banking / BFSI"</span>,</>,
      <>    <span className="syntax-string">"experience"</span>: <span className="syntax-string">"1.5+ years in data engineering"</span>,</>,
      <>{'}'}</>,
      <></>,
      <><span className="syntax-key">STACK</span>: <span className="syntax-type">Final</span>[dict] = {'{'}</>,
      <>    <span className="syntax-string">"python"</span>: [<span className="syntax-string">"PySpark"</span>, <span className="syntax-string">"Airflow"</span>, <span className="syntax-string">"pandas"</span>],</>,
      <>    <span className="syntax-string">"cloud"</span>: [<span className="syntax-string">"AWS Glue"</span>, <span className="syntax-string">"S3"</span>, <span className="syntax-string">"Lambda"</span>],</>,
      <>    <span className="syntax-string">"platforms"</span>: [<span className="syntax-string">"Databricks"</span>, <span className="syntax-string">"Delta Live Tables"</span>],</>,
      <>    <span className="syntax-string">"warehouses"</span>: [<span className="syntax-string">"Snowflake"</span>, <span className="syntax-string">"Redshift"</span>, <span className="syntax-string">"Oracle"</span>],</>,
      <>{'}'}</>,
      <></>,
      <><span className="syntax-key">def</span> <span className="syntax-type">build_reliable_pipelines</span>() -&gt; <span className="syntax-type">str</span>:</>,
      <>    <span className="syntax-string">"""Turn raw events into decisions people can trust."""</span></>,
      <>    <span className="syntax-key">return</span> <span className="syntax-string">"reliable data, boring operations, useful outcomes"</span><span className="cursor" /></>,
    ],
  },
  'work.md': {
    path: 'krishna / projects.md',
    lines: [
      <><span className="syntax-comment"># Selected projects</span></>,
      <></>,
      <><span className="syntax-key">## SmartETL</span></>,
      <>Self-healing, cost-intelligent data pipelines for Home Credit Risk.</>,
      <>Stack: <span className="syntax-value">AWS · PySpark · Claude API · S3</span></>,
      <></>,
      <><span className="syntax-key">## DataGuard</span></>,
      <>Automated PII detection and compliance masking for regulated data.</>,
      <>Stack: <span className="syntax-value">Python · PySpark · RBI · GDPR</span></>,
      <></>,
      <><span className="syntax-key">## Banking Data Quality</span></>,
      <>Schema validation, deduplication, masking, and reconciliation.</>,
      <>Outcome: <span className="syntax-string">fewer surprises before SLA</span><span className="cursor" /></>,
    ],
  },
  'experience.py': {
    path: 'krishna / experience.py',
    lines: [
      <><span className="syntax-comment"># Production experience</span></>,
      <></>,
      <><span className="syntax-key">role</span> = <span className="syntax-string">"Data Engineer @ TCS"</span></>,
      <><span className="syntax-key">period</span> = <span className="syntax-string">"Feb 2025 - present"</span></>,
      <><span className="syntax-key">project</span> = <span className="syntax-string">"SEI / Investment Banking"</span></>,
      <></>,
      <><span className="syntax-key">achievements</span> = [</>,
      <>    <span className="syntax-string">"owned production pipeline recovery against SLA"</span>,</>,
      <>    <span className="syntax-string">"built batch and FTP incremental loads"</span>,</>,
      <>    <span className="syntax-string">"automated nightly warehouse refresh"</span>,</>,
      <>    <span className="syntax-string">"built internal report automation framework"</span>,</>,
      <>    <span className="syntax-string">"worked with two core banking source systems"</span>,</>,
      <>{']'}</>,
      <></>,
      <><span className="syntax-key">previous</span> = <span className="syntax-string">"Freelance Backend Developer (2022 - 2024)"</span><span className="cursor" /></>,
    ],
  },
  'stack.py': {
    path: 'krishna / stack.py',
    lines: [
      <><span className="syntax-comment"># Tools I use to move data safely</span></>,
      <></>,
      <><span className="syntax-key">LANGUAGES</span> = [<span className="syntax-string">"Python"</span>, <span className="syntax-string">"SQL"</span>]</>,
      <><span className="syntax-key">BIG_DATA</span> = [<span className="syntax-string">"PySpark"</span>, <span className="syntax-string">"Databricks"</span>, <span className="syntax-string">"Kafka"</span>]</>,
      <><span className="syntax-key">ORCHESTRATION</span> = [<span className="syntax-string">"Airflow"</span>]</>,
      <><span className="syntax-key">AWS</span> = [<span className="syntax-string">"Glue"</span>, <span className="syntax-string">"Lambda"</span>, <span className="syntax-string">"S3"</span>, <span className="syntax-string">"IAM"</span>]</>,
      <><span className="syntax-key">DATABASES</span> = [<span className="syntax-string">"Snowflake"</span>, <span className="syntax-string">"Redshift"</span>, <span className="syntax-string">"Oracle"</span>]</>,
      <><span className="syntax-key">PRACTICES</span> = [<span className="syntax-string">"Docker"</span>, <span className="syntax-string">"Linux"</span>, <span className="syntax-string">"Git"</span>, <span className="syntax-string">"System Design"</span>]<span className="cursor" /></>,
    ],
  },
  'contact.py': {
    path: 'krishna / contact.py',
    lines: [
      <><span className="syntax-comment"># Start a conversation</span></>,
      <></>,
      <><span className="syntax-key">def</span> <span className="syntax-type">contact</span>() -&gt; <span className="syntax-type">dict</span>:</>,
      <>    <span className="syntax-string">"""For data platforms, pipelines, and thoughtful problems."""</span></>,
      <></>,
      <>    <span className="syntax-key">return</span> {'{'}</>,
      <>        <span className="syntax-string">"email"</span>: <span className="syntax-string">"krishnakumarqaz0@gmail.com"</span>,</>,
      <>        <span className="syntax-string">"location"</span>: <span className="syntax-string">"Bengaluru, India"</span>,</>,
      <>        <span className="syntax-string">"availability"</span>: <span className="syntax-string">"open to thoughtful conversations"</span>,</>,
      <>        <span className="syntax-string">"resume"</span>: <span className="syntax-string">"available to download"</span>,</>,
      <>    {'}'}</>,
      <></>,
      <><span className="syntax-comment"># Reach out when a useful conversation is in order.</span><span className="cursor" /></>,
    ],
  },
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function App() {
  const [activeTab, setActiveTab] = useState('about.py');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.title = 'Krishna — Data Engineer in Bengaluru';
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const view = codeViews[activeTab];

  return (
    <div className="portfolio-shell">
      <div className="workspace">
        <header className="topbar">
          <div className="brand-mark">
            <span className="brand-dot" />
            <strong>krishna.dev</strong>
          </div>
          <div className="topbar-meta">
            <span className="status">● available</span>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'day' : 'dark'} mode`}
              aria-pressed={theme === 'light'}
              title={`Switch to ${theme === 'dark' ? 'day' : 'dark'} mode`}
              onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
              <span>{theme === 'dark' ? 'day mode' : 'dark mode'}</span>
            </button>
          </div>
        </header>
        <main id="top" className="workspace-grid">
          <aside className="profile-rail section-anchor" id="contact">
            <div className="profile-top">
              <div className="avatar" aria-label="Krishna initials">K</div>
              <div>
                <h1 className="profile-name">Krishna</h1>
                <p className="profile-role">Data Engineer<br />Python &amp; SQL specialist</p>
                <p className="location">Bengaluru, India</p>
              </div>
            </div>
            <div className="rail-rule" />
            <p className="profile-copy">I turn raw events into <strong>dependable systems</strong> — pipelines, models, and interfaces that help teams make decisions without second-guessing the data.</p>
            <div className="rail-spacer" />
            <div className="availability">
              <p className="availability-label">Current status</p>
              <p className="availability-text">Open to good data problems.</p>
            </div>
            <div className="terminal sidebar-terminal" id="work">
              <div className="terminal-head">session.log</div>
              <div className="terminal-body"><div><span className="cmd">$</span> whoami</div><div>krishna / data-engineer / bengaluru</div><div><span className="cmd">$</span> status</div><div className="ready">ready for a useful conversation<span className="cursor" /></div></div>
            </div>
            <div className="socials" aria-label="Social links">
              <a className="social-link" href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub profile"><Icon name="github" /></a>
              <a className="social-link" href={profileLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn profile"><Icon name="linkedin" /></a>
              <a className="social-link" href={profileLinks.email} aria-label="Email Krishna" title="Email Krishna"><Icon name="mail" /></a>
              <a className="social-link" href={profileLinks.resume} download="Krishna-Kumar-Data-Engineer-Resume.pdf" aria-label="Download resume" title="Download resume"><Icon name="download" /></a>
            </div>
          </aside>

          <section className="editor-area" aria-label="Portfolio editor">
            <nav className="tab-strip" aria-label="Portfolio sections">
              {Object.keys(codeViews).map((tab) => (
                <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)} aria-current={activeTab === tab ? 'page' : undefined}>
                  <Icon name={tab.includes('contact') ? 'mail' : tab.endsWith('.py') ? 'code' : 'file'} />{tab}
                </button>
              ))}
            </nav>
            <div className="editor-content">
              <div className="editor-heading">
                <div className="file-path"><span>~/</span>{view.path}</div>
                <div className="line-count">{String(view.lines.length).padStart(2, '0')} lines</div>
              </div>
              <div className="code-block" role="region" aria-live="polite" aria-label={`${activeTab} content`}>
                {view.lines.map((line, index) => (
                  <div className="code-row" key={`${activeTab}-line-${index}`}>
                    <div className="line-number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="code-line">{line}</div>
                  </div>
                ))}
              </div>
              {activeTab === 'about.py' && <button className="editor-cta" onClick={() => setActiveTab('contact.py')}><Icon name="arrow" /> open contact.py</button>}
              {activeTab === 'contact.py' && <a className="editor-cta" href={profileLinks.email}><Icon name="mail" /> email Krishna</a>}
              {activeTab === 'work.md' && (
                <div className="project-grid">
                  <a className="project-card" href="https://github.com/Rounakrishna/incremental_load_glue" target="_blank" rel="noreferrer" aria-label="Open warehouse-starter repository on GitHub" title="Open warehouse-starter repository on GitHub"><h3>warehouse-starter</h3><p>A clean first mile for teams setting up analytics foundations.</p><div className="project-meta"><span>Python</span><span>dbt</span></div></a>
                  <a className="project-card" href="https://github.com/Rounakrishna/Banking-Data-Quality-Pipeline" target="_blank" rel="noreferrer" aria-label="Open pipeline-health repository on GitHub" title="Open pipeline-health repository on GitHub"><h3>pipeline-health</h3><p>Checks, alerts, and context for data workflows that run overnight.</p><div className="project-meta"><span>Airflow</span><span>Observability</span></div></a>
                </div>
              )}
            </div>
            <footer className="footer-bar">
              <span>© 2025 Krishna. Built with care and plain text.</span>
              <a href="#top" onClick={(event) => { event.preventDefault(); scrollTo('top'); }}>back to top ↑</a>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;