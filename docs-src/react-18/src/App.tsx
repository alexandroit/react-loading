import { useState, type ReactNode } from 'react';
import {
  Loading,
  LoadingOverlay,
  useLoadingController
} from '@stackline/react-loading';
import { PlaygroundSection } from './PlaygroundSection';

const INSTALL_CODE = 'npm install @stackline/react-loading@18';
const COMPONENT_CODE = `import { Loading } from '@stackline/react-loading';\n\nexport function LoadingPreview() {\n  return (\n    <Loading\n      visible\n      options={{\n        variant: 'orbit',\n        size: 56,\n        centered: true,\n        label: 'Loading dashboard'\n      }}\n      style={{ minHeight: 180 }}\n    />\n  );\n}`;
const OVERLAY_CODE = `import { LoadingOverlay } from '@stackline/react-loading';\n\nexport function RevenueCard({ isLoading }: { isLoading: boolean }) {\n  return (\n    <LoadingOverlay\n      visible={isLoading}\n      options={{\n        overlay: true,\n        centered: true,\n        variant: 'glass-spinner',\n        label: 'Loading revenue card'\n      }}\n    >\n      <section className="card-shell">...</section>\n    </LoadingOverlay>\n  );\n}`;
const HOOK_CODE = `import { useLoadingController } from '@stackline/react-loading';\n\nexport function WorkspaceAction() {\n  const loading = useLoadingController();\n\n  async function showLoader() {\n    const instance = await loading.show(document.body, {\n      fullscreen: true,\n      overlay: true,\n      centered: true,\n      variant: 'galaxy',\n      label: 'Loading workspace'\n    });\n\n    window.setTimeout(() => {\n      void instance.hide();\n    }, 1200);\n  }\n\n  return <button onClick={showLoader}>Show fullscreen loader</button>;\n}`;

type AppProps = {
  reactLine: string;
};

type DemoSectionProps = {
  title: string;
  description: string;
  code?: string;
  children: ReactNode;
};

function stamp(message: string) {
  return `${new Date().toLocaleTimeString('en-US', { hour12: false })}  ${message}`;
}

function CopyableCodeBlock({ code, compact = false }: { code: string; compact?: boolean }) {
  const [label, setLabel] = useState('Copy');

  async function copyCode() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setLabel('Copied');
    } catch (error) {
      setLabel('Copy failed');
    }

    window.setTimeout(() => {
      setLabel('Copy');
    }, 1200);
  }

  return (
    <div className={`code-block-shell ${compact ? 'is-compact' : ''}`}>
      <div className="code-block-head">
        <button type="button" className="ghost-button copy-button" onClick={copyCode}>
          {label}
        </button>
      </div>
      <pre className={`code-block ${compact ? 'compact' : ''}`}>{code}</pre>
    </div>
  );
}

function DemoSection({ title, description, code, children }: DemoSectionProps) {
  return (
    <section className="demo-card">
      <div className="demo-head">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      {code ? <CopyableCodeBlock code={code} /> : null}
      {children}
    </section>
  );
}

export function App({ reactLine }: AppProps) {
  const fullscreen = useLoadingController();
  const [logs, setLogs] = useState<string[]>([stamp(`React ${reactLine} docs ready.`)]);
  const [surfaceVisible, setSurfaceVisible] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(false);

  function pushLog(message: string) {
    setLogs((current) => [stamp(message), ...current].slice(0, 16));
  }

  async function runFullscreenDemo() {
    pushLog('Showing fullscreen loader from useLoadingController.');

    const instance = await fullscreen.show(document.body, {
      fullscreen: true,
      overlay: true,
      centered: true,
      variant: 'galaxy',
      color: '#38bdf8',
      secondaryColor: '#bfdbfe',
      minVisible: 500,
      label: 'Loading workspace'
    });

    window.setTimeout(() => {
      void instance.hide().then(() => {
        pushLog('Fullscreen loader hidden.');
      });
    }, 1300);
  }

  function replayCardSurface() {
    setSurfaceVisible(false);
    window.setTimeout(() => {
      setSurfaceVisible(true);
      pushLog('Dashboard overlay replayed.');
    }, 40);
  }

  function replayButtonSurface() {
    setButtonVisible(true);
    pushLog('Button loading state activated.');
    window.setTimeout(() => {
      setButtonVisible(false);
      pushLog('Button loading state cleared.');
    }, 1200);
  }

  return (
    <div className="app-shell">
      <header className="hero-grid">
        <section className="hero-card hero-main">
          <span className="badge">React {reactLine} · Loading wrapper</span>
          <h1>@stackline/react-loading</h1>
          <p>
            Maintained React bindings for the Stackline loading toolkit. Keep the loading
            engine framework-agnostic, then add React-native ergonomics for declarative
            components, container overlays, and fullscreen programmatic states.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#playground">Open playground</a>
            <a
              className="button secondary"
              href="https://github.com/alexandroit/react-loading#readme"
              rel="noreferrer"
              target="_blank"
            >
              README
            </a>
          </div>
          <div className="hero-notes">
            <div><strong>Declarative</strong> Use a plain React component when the loader itself is what you want to render.</div>
            <div><strong>Overlay-ready</strong> Wrap a card, table, modal body, chart shell, or upload zone without rewriting the surface.</div>
            <div><strong>Programmatic</strong> Use a hook for fullscreen or route-level loading where document-level control is useful.</div>
          </div>
        </section>

        <section className="hero-card hero-setup">
          <h2>Setup in 3 steps</h2>
          <div className="step">
            <span>1</span>
            <div>
              <strong>Install the wrapper</strong>
              <CopyableCodeBlock code={INSTALL_CODE} compact />
            </div>
          </div>
          <div className="step">
            <span>2</span>
            <div>
              <strong>Render a component or wrap a surface</strong>
              <CopyableCodeBlock code={`<Loading visible options={{ variant: 'orbit' }} />`} compact />
            </div>
          </div>
          <div className="step">
            <span>3</span>
            <div>
              <strong>Use a hook for fullscreen workflows</strong>
              <CopyableCodeBlock code={`const loading = useLoadingController();`} compact />
            </div>
          </div>
        </section>
      </header>

      <div className="playground-row">
        <PlaygroundSection />
      </div>

      <main className="content-grid" id="examples">
        <section className="examples-column">
          <DemoSection
            title="Basic component"
            description="Use the React component when the loading element itself is the thing being rendered in the tree."
            code={COMPONENT_CODE}
          >
            <div className="surface-frame">
              <Loading
                visible
                options={{
                  variant: 'orbit',
                  size: 56,
                  centered: true,
                  color: '#2563eb',
                  secondaryColor: '#bfdbfe',
                  label: 'Loading dashboard'
                }}
                className="component-stage"
                style={{ minHeight: 220 }}
              />
            </div>
          </DemoSection>

          <DemoSection
            title="Dashboard card overlay"
            description="Wrap an existing card surface and let the loader overlay the active region while the rest of the UI stays stable."
            code={OVERLAY_CODE}
          >
            <div className="inline-actions">
              <button type="button" className="button secondary" onClick={replayCardSurface}>
                Replay card loader
              </button>
            </div>
            <LoadingOverlay
              visible={surfaceVisible}
              options={{
                overlay: true,
                centered: true,
                variant: 'glass-spinner',
                color: '#2563eb',
                secondaryColor: '#dbeafe',
                label: 'Loading revenue card',
                minVisible: 400
              }}
              className="card-shell"
            >
              <div className="card-metric">$128,400</div>
              <div className="card-caption">Quarterly expansion pipeline</div>
              <div className="card-bars">
                <span style={{ height: '46%' }} />
                <span style={{ height: '68%' }} />
                <span style={{ height: '54%' }} />
                <span style={{ height: '79%' }} />
              </div>
            </LoadingOverlay>
          </DemoSection>

          <DemoSection
            title="Button and submit states"
            description="Use the same overlay wrapper around a button group when a request should stay anchored to the action that triggered it."
          >
            <div className="button-surface">
              <LoadingOverlay
                visible={buttonVisible}
                options={{
                  overlay: true,
                  centered: true,
                  variant: 'liquid-pill',
                  size: 42,
                  label: ''
                }}
                className="button-shell"
              >
                <button type="button" className="cta-button" onClick={replayButtonSurface}>
                  Sync invoice
                </button>
              </LoadingOverlay>
            </div>
          </DemoSection>

          <DemoSection
            title="Fullscreen and programmatic hook"
            description="Use the hook when the loading state is tied to navigation, bootstrapping, or a larger workspace transition."
            code={HOOK_CODE}
          >
            <div className="inline-actions">
              <button type="button" className="button primary" onClick={runFullscreenDemo}>
                Show fullscreen loader
              </button>
            </div>
          </DemoSection>
        </section>

        <aside className="sidebar-column">
          <section className="demo-card side-card">
            <div className="demo-head">
              <div>
                <h3>Wrapper surface</h3>
                <p>The public API stays intentionally small so the real behavior continues to live in the core loading package.</p>
              </div>
            </div>
            <ul className="feature-list">
              <li><code>{'<Loading />'}</code> for component-first loading states.</li>
              <li><code>{'<LoadingOverlay />'}</code> for cards, tables, modals, charts, and buttons.</li>
              <li><code>useLoadingController()</code> for fullscreen and programmatic flows.</li>
              <li>Core exports like <code>loaderVariants</code>, <code>createLoader</code>, and theme helpers stay available.</li>
            </ul>
          </section>

          <section className="demo-card side-card">
            <div className="demo-head">
              <div>
                <h3>Release lines</h3>
                <p>Each maintained runtime line gets its own docs build and npm release.</p>
              </div>
            </div>
            <div className="release-links">
              <a href="../react-17/">React 17</a>
              <a href="../react-18/">React 18</a>
              <a href="../react-19/">React 19</a>
            </div>
          </section>

          <section className="demo-card side-card">
            <div className="demo-head">
              <div>
                <h3>Event log</h3>
                <p>Small runtime notes from the docs interactions while you test the wrapper.</p>
              </div>
            </div>
            <div className="event-log">
              {logs.map((entry) => (
                <div className="log-line" key={entry}>{entry}</div>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
