import ReactGA from 'react-ga';

ReactGA.initialize('UA-76517754-2');

function trackCurrentUrl() {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

function useGoogleAnalytics() {
    trackCurrentUrl();
    window.addEventListener("hashchange", trackCurrentUrl, false);
    return () => window.removeEventListener("hashchange", trackCurrentUrl, false);
}

export default useGoogleAnalytics;