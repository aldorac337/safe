function forceRefetch() {
  window.location.reload(true);
}

function performClientLoad() {
  const jsLink = [...document.querySelectorAll('script[type="module"]')].find(
    (script) => script.src.includes('/assets/index-') || script.src.includes('src/main.ts')
  ).src;
  const banner = document.querySelector('#js-error-banner');
  const loadTestClient = new XMLHttpRequest();

  function handleJsLoadError() {
    banner.style.display = 'flex';
  }

  loadTestClient.onerror = () => {
    console.error('Unable to load', loadTestClient);
    handleJsLoadError();
  };

  loadTestClient.onloadend = () => {
    if (loadTestClient.status !== 200) {
      console.error('Loaded unsuccessfully', loadTestClient);
      handleJsLoadError();
    }
  };

  loadTestClient.open('GET', jsLink);
  loadTestClient.send();
}

performClientLoad();
