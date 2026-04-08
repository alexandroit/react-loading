import { useState } from 'react';
import {
  Loading,
  LoadingOverlay,
  loaderVariants,
  type ReactLoadingOptions
} from '@stackline/react-loading';

type PlaygroundVariant = {
  value: string;
  label: string;
};

type PlaygroundSurface = {
  id: string;
  label: string;
  description: string;
};

type PlaygroundState = {
  variant: string;
  size: number;
  speed: number;
  color: string;
  secondaryColor: string;
  overlay: boolean;
  fullscreen: boolean;
  centered: boolean;
  label: string;
  delay: number;
  minVisible: number;
  reducedMotion: boolean;
};

const VARIANTS: PlaygroundVariant[] = (loaderVariants || []).map((variant) => ({
  value: variant.value,
  label: variant.label
}));

const SURFACES: PlaygroundSurface[] = [
  {
    id: 'default',
    label: 'Default',
    description: 'A clean centered stage for checking size, color, speed, and label choices.'
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Keep product cards visible while the active region stays anchored to a loading state.'
  },
  {
    id: 'table',
    label: 'Table',
    description: 'A common analytics refresh pattern where the user should keep their table context.'
  },
  {
    id: 'page',
    label: 'Page',
    description: 'Simulate a route-level or workspace-level loading state inside the docs shell.'
  },
  {
    id: 'modal',
    label: 'Modal',
    description: 'Load only the modal body while keeping the dialog frame stable.'
  },
  {
    id: 'chart',
    label: 'Chart',
    description: 'Useful for analytical surfaces where movement should feel intentional and data-centric.'
  },
  {
    id: 'upload',
    label: 'Upload',
    description: 'A drop zone preview for uploads, media workflows, and file-heavy forms.'
  }
];

const INITIAL_STATE: PlaygroundState = {
  variant: 'orbit',
  size: 60,
  speed: 900,
  color: '#2563eb',
  secondaryColor: '#c7d2fe',
  overlay: false,
  fullscreen: false,
  centered: true,
  label: 'Loading preview',
  delay: 0,
  minVisible: 240,
  reducedMotion: false
};

function repeat(value: string, count: number) {
  let output = '';

  for (let index = 0; index < count; index += 1) {
    output += value;
  }

  return output;
}

function escapeSingleQuotes(value: string) {
  return String(value).split("'").join("\\'");
}

function buildPreviewOptions(state: PlaygroundState): ReactLoadingOptions {
  const isSimulatedFullscreen = state.fullscreen;
  const isOverlay = state.overlay || isSimulatedFullscreen;
  const nextOptions: ReactLoadingOptions = {
    variant: state.variant as ReactLoadingOptions['variant'],
    size: state.size,
    speed: state.speed,
    color: state.color,
    secondaryColor: state.secondaryColor,
    centered: isOverlay ? true : state.centered,
    delay: state.delay,
    minVisible: state.minVisible
  };

  if (state.label) {
    nextOptions.label = state.label;
  }

  if (isOverlay) {
    nextOptions.overlay = true;
  }

  if (isSimulatedFullscreen) {
    nextOptions.background = 'rgba(15, 23, 42, 0.54)';
  }

  return nextOptions;
}

function buildOptionsObjectLiteral(
  state: PlaygroundState,
  indentLevel: number,
  forceOverlay = false
) {
  const indent = repeat(' ', indentLevel);
  const innerIndent = repeat(' ', indentLevel + 2);
  const lines = [
    '{',
    `${innerIndent}variant: '${state.variant}',`,
    `${innerIndent}size: ${state.size},`,
    `${innerIndent}speed: ${state.speed},`,
    `${innerIndent}color: '${state.color}',`,
    `${innerIndent}secondaryColor: '${state.secondaryColor}',`
  ];

  if (state.overlay || state.fullscreen || forceOverlay) {
    lines.push(`${innerIndent}overlay: true,`);
  }

  if (state.fullscreen) {
    lines.push(`${innerIndent}fullscreen: true,`);
    lines.push(`${innerIndent}background: 'rgba(15, 23, 42, 0.54)',`);
  }

  if (state.centered && !state.fullscreen) {
    lines.push(`${innerIndent}centered: true,`);
  }

  if (state.label) {
    lines.push(`${innerIndent}label: '${escapeSingleQuotes(state.label)}',`);
  }

  if (state.delay > 0) {
    lines.push(`${innerIndent}delay: ${state.delay},`);
  }

  if (state.minVisible !== 240) {
    lines.push(`${innerIndent}minVisible: ${state.minVisible},`);
  }

  lines.push(`${indent}}`);
  return lines.join('\n');
}

function buildSurfaceMarkup(surface: string) {
  if (surface === 'modal') {
    return [
      '<div className="modal-shell">',
      '  <div className="modal-header" />',
      '  <div className="modal-body">',
      '    <div className="modal-line" />',
      '    <div className="modal-line short" />',
      '    <div className="modal-line" />',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  if (surface === 'table') {
    return [
      '<div className="table-shell">',
      '  <div className="table-head">',
      '    <span>Status</span>',
      '    <span>Customer</span>',
      '    <span>Plan</span>',
      '    <span>MRR</span>',
      '  </div>',
      '  <div className="table-row">...</div>',
      '  <div className="table-row">...</div>',
      '</div>'
    ].join('\n');
  }

  if (surface === 'chart') {
    return [
      '<div className="chart-panel">',
      '  <div className="chart-bar" />',
      '  <div className="chart-bar" />',
      '  <div className="chart-bar" />',
      '</div>'
    ].join('\n');
  }

  if (surface === 'upload') {
    return [
      '<div className="upload-zone">',
      '  <div className="upload-icon" />',
      '  <p>Drop files here</p>',
      '</div>'
    ].join('\n');
  }

  if (surface === 'page') {
    return [
      '<section className="page-shell">',
      '  <header className="page-topbar" />',
      '  <div className="page-grid">...</div>',
      '</section>'
    ].join('\n');
  }

  return [
    '<section className="dashboard-cards">',
    '  <div className="card" />',
    '  <div className="card" />',
    '  <div className="card card-wide" />',
    '</section>'
  ].join('\n');
}

function buildGeneratedCode(state: PlaygroundState, surface: string) {
  if (state.fullscreen) {
    return [
      "import { useLoadingController } from '@stackline/react-loading';",
      '',
      'export function WorkspaceAction() {',
      '  const loading = useLoadingController();',
      '',
      '  async function showLoader() {',
      `    const instance = await loading.show(document.body, ${buildOptionsObjectLiteral(state, 6, true)});`,
      '    window.setTimeout(() => {',
      '      void instance.hide();',
      '    }, 1200);',
      '  }',
      '',
      '  return <button onClick={showLoader}>Show fullscreen loader</button>;',
      '}'
    ].join('\n');
  }

  if (surface === 'default' && !state.overlay) {
    return [
      "import { Loading } from '@stackline/react-loading';",
      '',
      'export function LoadingPreview() {',
      '  return (',
      '    <Loading',
      '      visible={isLoading}',
      `      options=${buildOptionsObjectLiteral(state, 6)}`,
      '      style={{ minHeight: 220 }}',
      '    />',
      '  );',
      '}'
    ].join('\n');
  }

  return [
    "import { LoadingOverlay } from '@stackline/react-loading';",
    '',
    'export function LoadingSurface() {',
    '  return (',
    '    <LoadingOverlay',
    '      visible={isLoading}',
    `      options=${buildOptionsObjectLiteral(state, 6, true)}`,
    '    >',
    buildSurfaceMarkup(surface)
      .split('\n')
      .map((line) => `      ${line}`)
      .join('\n'),
    '    </LoadingOverlay>',
    '  );',
    '}'
  ].join('\n');
}

type SurfacePreviewProps = {
  fullscreen: boolean;
  options: ReactLoadingOptions;
  surface: string;
  visible: boolean;
};

function SurfacePreview({ fullscreen, options, surface, visible }: SurfacePreviewProps) {
  if (surface === 'default' && !options.overlay) {
    return (
      <div className={`playground-surface playground-surface--clean ${fullscreen ? 'is-fullscreen-simulated' : ''}`}>
        <Loading
          visible={visible}
          options={options}
          className="playground-loader-host"
          style={{ minHeight: fullscreen ? 400 : 320, width: '100%' }}
        />
      </div>
    );
  }

  if (surface === 'table') {
    return (
      <LoadingOverlay
        visible={visible}
        options={options}
        className={`playground-surface surface-table ${fullscreen ? 'is-fullscreen-simulated' : ''}`}
      >
        <div className="playground-table-head">
          <span>Status</span>
          <span>Customer</span>
          <span>Plan</span>
          <span>MRR</span>
        </div>
        {Array.from({ length: 4 }, (_, index) => (
          <div className="playground-table-row" key={`row-${index}`}>
            <span><i /></span>
            <span><i /></span>
            <span><i /></span>
            <span><i /></span>
          </div>
        ))}
      </LoadingOverlay>
    );
  }

  if (surface === 'page') {
    return (
      <LoadingOverlay
        visible={visible}
        options={options}
        className={`playground-surface surface-page ${fullscreen ? 'is-fullscreen-simulated' : ''}`}
      >
        <div className="page-topbar" />
        <div className="page-grid">
          <div className="page-tile" />
          <div className="page-tile" />
          <div className="page-tile" />
          <div className="page-tile" />
        </div>
      </LoadingOverlay>
    );
  }

  if (surface === 'modal') {
    return (
      <div className={`playground-surface surface-modal ${fullscreen ? 'is-fullscreen-simulated' : ''}`}>
        <div className="modal-shell">
          <div className="modal-header" />
          <LoadingOverlay visible={visible} options={options} className="modal-body">
            <div className="modal-line" />
            <div className="modal-line short" />
            <div className="modal-line" />
          </LoadingOverlay>
        </div>
      </div>
    );
  }

  if (surface === 'chart') {
    return (
      <LoadingOverlay
        visible={visible}
        options={options}
        className={`playground-surface surface-chart ${fullscreen ? 'is-fullscreen-simulated' : ''}`}
      >
        <div className="chart-bar" style={{ height: '28%' }} />
        <div className="chart-bar" style={{ height: '46%' }} />
        <div className="chart-bar" style={{ height: '60%' }} />
        <div className="chart-bar" style={{ height: '38%' }} />
        <div className="chart-bar" style={{ height: '72%' }} />
        <div className="chart-bar" style={{ height: '55%' }} />
      </LoadingOverlay>
    );
  }

  if (surface === 'upload') {
    return (
      <LoadingOverlay
        visible={visible}
        options={options}
        className={`playground-surface surface-upload ${fullscreen ? 'is-fullscreen-simulated' : ''}`}
      >
        <div className="upload-icon" />
        <div className="upload-title">Drop files here</div>
        <div className="upload-caption">PNG, SVG, PDF up to 25 MB</div>
      </LoadingOverlay>
    );
  }

  return (
    <LoadingOverlay
      visible={visible}
      options={options}
      className={`playground-surface surface-card-grid ${fullscreen ? 'is-fullscreen-simulated' : ''}`}
    >
      <div className="surface-card-cell" />
      <div className="surface-card-cell" />
      <div className="surface-card-cell wide" />
    </LoadingOverlay>
  );
}

export function PlaygroundSection() {
  const [state, setState] = useState<PlaygroundState>(INITIAL_STATE);
  const [activeSurface, setActiveSurface] = useState('default');
  const [copyButtonLabel, setCopyButtonLabel] = useState('Copy code');
  const [previewVisible, setPreviewVisible] = useState(true);

  const previewOptions = buildPreviewOptions(state);
  const generatedCode = buildGeneratedCode(state, activeSurface);

  function updateState<K extends keyof PlaygroundState>(key: K, value: PlaygroundState[K]) {
    setState((current) => ({
      ...current,
      [key]: value
    }));
  }

  function replayTiming() {
    setPreviewVisible(false);
    window.setTimeout(() => {
      setPreviewVisible(true);
    }, 40);
  }

  async function copyCode() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(generatedCode);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = generatedCode;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setCopyButtonLabel('Copied');
    } catch (error) {
      setCopyButtonLabel('Copy failed');
    }

    window.setTimeout(() => {
      setCopyButtonLabel('Copy code');
    }, 1200);
  }

  const activeDescription = SURFACES.find((surface) => surface.id === activeSurface)?.description || '';

  return (
    <section className="demo-card playground-card" id="playground">
      <div className="demo-head">
        <div>
          <h3>Playground</h3>
          <p>Use the React wrapper against the same kind of interactive preview shell as the core docs.</p>
        </div>
      </div>

      <div className="playground-shell">
        <form className="playground-controls">
          <div className="field">
            <label htmlFor="playground-variant">Variant</label>
            <select
              id="playground-variant"
              value={state.variant}
              onChange={(event) => updateState('variant', event.target.value)}
            >
              {VARIANTS.map((variant) => (
                <option key={variant.value} value={variant.value}>{variant.label}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="playground-size">Size <span>{state.size}px</span></label>
            <input
              id="playground-size"
              type="range"
              min="18"
              max="96"
              value={state.size}
              onChange={(event) => updateState('size', Number(event.target.value))}
            />
          </div>

          <div className="field">
            <label htmlFor="playground-speed">Speed <span>{state.speed}ms</span></label>
            <input
              id="playground-speed"
              type="range"
              min="300"
              max="2200"
              step="50"
              value={state.speed}
              onChange={(event) => updateState('speed', Number(event.target.value))}
            />
          </div>

          <div className="field two-up">
            <div>
              <label htmlFor="playground-color">Primary</label>
              <input
                id="playground-color"
                type="color"
                value={state.color}
                onChange={(event) => updateState('color', event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="playground-secondary-color">Secondary</label>
              <input
                id="playground-secondary-color"
                type="color"
                value={state.secondaryColor}
                onChange={(event) => updateState('secondaryColor', event.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="playground-label">Label</label>
            <input
              id="playground-label"
              type="text"
              value={state.label}
              onChange={(event) => updateState('label', event.target.value)}
            />
          </div>

          <div className="field two-up">
            <div>
              <label htmlFor="playground-delay">Delay</label>
              <input
                id="playground-delay"
                type="number"
                min="0"
                step="50"
                value={state.delay}
                onChange={(event) => updateState('delay', Number(event.target.value))}
              />
            </div>
            <div>
              <label htmlFor="playground-min-visible">Min visible</label>
              <input
                id="playground-min-visible"
                type="number"
                min="0"
                step="50"
                value={state.minVisible}
                onChange={(event) => updateState('minVisible', Number(event.target.value))}
              />
            </div>
          </div>

          <div className="toggle-row">
            <label><input type="checkbox" checked={state.overlay} onChange={(event) => updateState('overlay', event.target.checked)} /> Overlay</label>
            <label><input type="checkbox" checked={state.fullscreen} onChange={(event) => updateState('fullscreen', event.target.checked)} /> Fullscreen</label>
            <label><input type="checkbox" checked={state.centered} onChange={(event) => updateState('centered', event.target.checked)} /> Centered</label>
            <label><input type="checkbox" checked={state.reducedMotion} onChange={(event) => updateState('reducedMotion', event.target.checked)} /> Reduced motion</label>
          </div>

          <div className="playground-actions">
            <button type="button" onClick={replayTiming}>Replay timing</button>
            <button type="button" className="ghost-button" onClick={copyCode}>{copyButtonLabel}</button>
          </div>
        </form>

        <div className="playground-preview">
          <div className="playground-preview-tabs" role="tablist" aria-label="Preview surfaces">
            {SURFACES.map((surface) => (
              <button
                key={surface.id}
                type="button"
                role="tab"
                className={`playground-preview-tab ${activeSurface === surface.id ? 'is-active' : ''}`}
                aria-selected={activeSurface === surface.id}
                onClick={() => setActiveSurface(surface.id)}
              >
                {surface.label}
              </button>
            ))}
          </div>

          <p className="playground-description">{activeDescription}</p>

          <div className={`playground-stage ${state.reducedMotion ? 'is-reduced-motion' : ''}`}>
            <SurfacePreview
              fullscreen={state.fullscreen}
              options={previewOptions}
              surface={activeSurface}
              visible={previewVisible}
            />
          </div>

          <pre className="code-block code-preview">{generatedCode}</pre>
        </div>
      </div>
    </section>
  );
}
