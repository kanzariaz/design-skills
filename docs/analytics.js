// TelemetryDeck (privacy-first, cookieless). Sends a pageview on load and
// exposes window.tdSignal for custom signals (used by the Copy Skill buttons).
import TelemetryDeck from 'https://cdn.jsdelivr.net/npm/@telemetrydeck/sdk/+esm';

const APP_ID = 'D058535D-9CE8-4B56-909C-92C02B4841AE'; // TelemetryDeck App ID

let td = null;

if (APP_ID) {
  let user = localStorage.getItem('td-user');
  if (!user) {
    user = crypto.randomUUID();
    localStorage.setItem('td-user', user);
  }
  td = new TelemetryDeck({ appID: APP_ID, clientUser: user });
  td.signal('pageview', { path: location.pathname });
}

window.tdSignal = (type, payload) => {
  if (td) td.signal(type, payload).catch(() => {});
};
