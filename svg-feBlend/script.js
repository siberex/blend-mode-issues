document.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById('isBlendColorBurnSupported');
  if (SVGFEBlendElement && SVGFEBlendElement.SVG_FEBLEND_MODE_COLOR_BURN) {
    el.classList.add('supported');
  }
  el.style.display = 'block';
  
  document.getElementById('ua').innerHTML =   window.navigator.userAgent;
})