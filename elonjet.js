(function() 
{
  let header_to_jet = function()
  {
    let header = document.querySelector('a[href="/elonmusk/header_photo"]');

    if(header)
    {
      let iframe = document.createElement("iframe");
      iframe.setAttribute("src", "https://globe.adsbexchange.com/?icao=a835af");
      iframe.setAttribute("scrolling", "no");
      header.replaceWith(iframe)
    }
  }

  let observer = new MutationObserver(header_to_jet);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();