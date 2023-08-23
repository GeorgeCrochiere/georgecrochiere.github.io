function reroute() {
    var site = window.location;
    if (site.search.length > 1) {
        var newSite = site.origin;
        newSite += site.search.substring(1);
        site.replace(newSite);
    }
}