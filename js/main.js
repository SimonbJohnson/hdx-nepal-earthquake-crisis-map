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
    
    var nepalStats = L.geoJson(nepalStatsGeo,{
        style: nepalStatsStyle,
        onEachFeature: function (feature, layer) {
            //layer.bindPopup("<b>" + feature.properties.NAMEUSE + " ("+feature.properties.PCODEUSE+")</b><br />New Cases in the last 4 weeks: "+newCases[feature.properties.PCODEUSE]);
        }
    });
    
    var idps = L.geoJson(idps_geo, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng,idpsStyle());
        },
        onEachFeature: function (feature, layer) {
            //layer.bindPopup("Centre ID: "+feature.properties["Centre ID"]+"<br />Centre Name: "+feature.properties["Center"]+"<br />Type: "+feature.properties["Type"]+"<br />Activity: "+feature.properties["Activity"]+"<br />Org: "+feature.properties["Org"]);
        }        
    });  
    
    var map = L.map('crisis-map', {
        center: [27.72, 85.3333],
        zoom: 10,
        layers: [base_hotosm,nepalStats,shakeContours,idps]
    });
    
    map.scrollWheelZoom.disable();

    L.control.layers({
        'HOT OSM':base_hotosm,
        'OSM':base_osm
    }, {
        'Shake Contours':shakeContours,
        'Deaths':nepalStats,
        'IDPs':idps
    }).addTo(map);   
    
    var shakeContoursLegend = L.control({position: 'bottomleft'});    
    
    shakeContoursLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=newCasesLegendContent();
        return div;
    };
    
    var nepalStatsLegend = L.control({position: 'bottomleft'});    
    
    nepalStatsLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=nepalStatsLegendContent();
        return div;
    };
    
    var idpsLegend = L.control({position: 'bottomleft'});    
    
    idpsLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=idpsLegendContent();
        return div;
    };        

    map.on('overlayadd', function (eventLayer) {
        if(eventLayer.name=="Shake Contours"){
            shakeContoursLegend.addTo(this);
        };
        if(eventLayer.name=="Deaths"){
            nepalStatsLegend.addTo(this);
        };
        if(eventLayer.name=="IDPS"){
            idpsLegend.addTo(this);
        };          
    });
    
    map.on('overlayremove', function (eventLayer) {
        if(eventLayer.name=="Shake Contours"){
            this.removeControl(shakeContoursLegend);
        };
        if(eventLayer.name=="Deaths"){
            this.removeControl(nepalStatsLegend);
        };
        if(eventLayer.name=="IDPs"){
            this.removeControl(idpsLegend);
        };        
    });
    
    nepalStatsLegend.addTo(map);
    shakeContoursLegend.addTo(map);
    idpsLegend.addTo(map);
    
    return map;    
}   

var map = init();
