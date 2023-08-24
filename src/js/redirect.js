function reroute() {
    var site = window.location;
    if (site.search.length > 1) {
        var siteExtension = site.search.substring(1);
        return siteExtension;
    }
    return "/";
}