var site = window.location;
if (site.search.length > 1) {
    var newSite = site.origin;
    newSite += site.search.substring(0);
    site.replace(newSite);
}