(function () {
  // FAB slide-in após 2s (defensivo: funciona mesmo se DOM já carregou)
  function initFab() {
    setTimeout(function () {
      var fab = document.querySelector('.rg-wafab');
      if (fab) fab.classList.add('rg-wafab-visible');
    }, 2000);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFab);
  } else {
    initFab();
  }
})();
