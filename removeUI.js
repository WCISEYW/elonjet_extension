(function() {
  if (window.self === window.top) {
    return;
  }

  document.getElementById("selected_infoblock").remove();
  document.getElementById("altitude_chart").remove();
  document.getElementById("header_top").remove();

  if(document.querySelector("#toggle_sidebar_button") && document.querySelector("#toggle_sidebar_button").className == "sidebar_button hide_sidebar" && document.getElementById("header_side")){
    document.querySelector("#toggle_sidebar_button").click();
    document.getElementById("header_side").remove();
  }else if(document.querySelector("#toggle_sidebar_button") && document.getElementById("header_side")){
    document.getElementById("header_side").remove();
  }
  
  document.getElementById("adsbexchange_mobile_pushdown-pushdown-cls").remove();
  document.querySelector("#map_canvas > div.ol-unselectable.ol-control.layer-switcher.layer-switcher-group-select-style-none.layer-switcher-activation-mode-click.activationModeClick").remove();
  document.querySelector("#map_canvas > div.ol-viewport > div.ol-overlaycontainer-stopevent > div.ol-scale-line.ol-unselectable").remove();
  document.querySelector("#tracking_leaderboard_container > div:nth-child(2)").remove();
})();