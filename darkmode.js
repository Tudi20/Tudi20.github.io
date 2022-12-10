function IsLightModePreffered() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
}

if (IsLightModePreffered()) {
 ui("mode","light"); 
  return;
}

ui("mode","light"); 
