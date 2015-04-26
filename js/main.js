function init(){
    
    var base_hotosm = L.tileLayer(
        'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
        attribution: '&copy; OpenStreetMap contributors, <a href="http://hot.openstreetmap.org/">Humanitarian OpenStreetMap Team</a>'}
    );

    var base_osm = L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            attribution: '&copy; OpenStreetMap contributors'}
    );

    var shakeContours = L.geoJson(shakeContoursGeo,{
        style: shakeContoursStyle,
        onEachFeature: function (feature, layer) {
            //layer.bindPopup("<b>" + feature.properties.NAMEUSE + " ("+feature.properties.PCODEUSE+")</b><br />New Cases in the last 4 weeks: "+newCases[feature.properties.PCODEUSE]);
        }
    });
    
    var map = L.map('crisis-map', {
        center: [27.9, 84.7333],
        zoom: 8,
        layers: [base_hotosm,shakeContours]
    });
    
    map.scrollWheelZoom.disable();

    L.control.layers({
        'HOT OSM':base_hotosm,
        'OSM':base_osm
    }, {
        'Shake Contours':shakeContours
    }).addTo(map);   
    
    var shakeContoursLegend = L.control({position: 'bottomleft'});
    
    shakeContoursLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=newCasesLegendContent();
        return div;
    };

    map.on('overlayadd', function (eventLayer) {
        if(eventLayer.name=="Shake Contours"){
            shakeContoursLegend.addTo(this);
        };        
    });
    
    map.on('overlayremove', function (eventLayer) {
        if(eventLayer.name=="Shake Contours"){
            this.removeControl(shakeContoursLegend);
        };          
    });
    
    shakeContoursLegend.addTo(map);
    
    return map;    
}


function resize(){
    $('#map').height($(window).height()-$('#header').height()-10);
    map.invalidateSize(false);
}

$(window).load(function(){
    resize();
});
$(window).resize(function(){
    resize();
});
    

var map = init();
