window.addEventListener('load', function() {
  const loaderWrapper = document.getElementById('loader-wrapper');
  
  setTimeout(function() {
    loaderWrapper.style.opacity = '0';
    loaderWrapper.style.visibility = 'hidden';
  }, 3000);
});