function IsLightModePreffered() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
}

function SetPrefferedMode() {
    if (IsLightModePreffered()) {
        ui("mode","light"); 
        return;
    }

    ui("mode","dark"); 
}
