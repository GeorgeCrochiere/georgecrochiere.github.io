var site = window.location;
var newSite = site.origin;
if (site.search.length > 1) {
    newSite += site.search.substring(2);
}
site.replace(newSite);