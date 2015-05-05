var color = ["none","#bdbdbd","#969696","#737373","#525252","#252525"];

var shakeContoursStyle = function(feature){
        console.log(feature.properties);
            if(feature.properties.value>7.9){
                return {color: color[5],fillColor: color[5],fillOpacity:0,opacity:0.7,weight:4};
            } else if(feature.properties.value>6.9){
                return {color: color[4],fillColor: color[4],fillOpacity:0,opacity:0.7,weight:4};
            } else if(feature.properties.value>5.9){
                return {color: color[3],fillColor: color[3],fillOpacity:0,opacity:0.7,weight:4};
            } else if(feature.properties.value>4.9){
                return {color: color[2],fillColor: color[2],fillOpacity:0,opacity:0.7,weight:4};
            }
                return {color: color[1],fillColor: color[1],fillOpacity:0,opacity:0.7,weight:4};
};

var basecolor = ["none","#fed976","#feb24c","#fd8d3c","#f03b20"];

var nepalStatsStyle = function(feature){
        console.log(feature.properties);
            if(feature.properties.deaths>1000){
                return {color: basecolor[4],fillColor: basecolor[4],fillOpacity:0.5,opacity:0.7,weight:3};
            } else if(feature.properties.deaths>100){
                return {color: basecolor[3],fillColor: basecolor[3],fillOpacity:0.5,opacity:0.7,weight:3};
            } else if(feature.properties.deaths>10){
                return {color: basecolor[2],fillColor: basecolor[2],fillOpacity:0.5,opacity:0.7,weight:3};
            } else if(feature.properties.deaths>0){
                return {color: basecolor[1],fillColor: basecolor[1],fillOpacity:0.5,opacity:0.7,weight:3};
            }
                return {color: basecolor[0],fillColor: basecolor[0],fillOpacity:0.5,opacity:0.7,weight:3};
};

idpsStyle = function(){
    return   {radius: 5,
                fillColor: "#91a7ff",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.7};
};