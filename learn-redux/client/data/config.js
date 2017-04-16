import Raven from 'raven-js';

const sentryKey = '18921707e2284bb08387b3d13a009b06';
const sentryApp = '158728';

export const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /* eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
