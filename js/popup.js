let geoIpV4 = null;
let ipv4IsFetching = true;

function fetchGeoLocation() {
    let geoLocate = new GeoLocation();
    geoLocate.fetch({
        success: function () {
            geoIpV4 = geoLocate;
			
            //ipv4IsFetching = false;
            triggerView();
        },
        error: function () {
            //geoIpV4 = null;
            ipv4IsFetching = false;
            handleError();
        }
    });

    
}

function compileHtml(html, obj, clip) {
    for (let prop in obj) {
        html = html.replace(new RegExp(clip + prop + clip, 'g'), obj[prop] ? obj[prop] : '');
    }
    return html;
}

function triggerView() {
    let infosHtml = document.getElementById('ipGeoLocationView').innerHTML;
    let gIPv4 = (geoIpV4 ? geoIpV4.toJSON() : new GeoLocation().toJSON());
    compiledInfosHtml = compileHtml(infosHtml, gIPv4, 'T');
    document.getElementById('ipLocationInfo').innerHTML = compiledInfosHtml;
}

window.addEventListener("load", fetchGeoLocation);