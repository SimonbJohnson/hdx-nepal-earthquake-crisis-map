var color = ["none","#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"];

var shakeContoursStyle = function(feature){
        console.log(feature.properties);
            if(feature.properties.value>7.9){
                return {color: color[5],fillColor: color[5],fillOpacity:0.7,opacity:0.7,weight:3};
            } else if(feature.properties.value>6.9){
                return {color: color[4],fillColor: color[4],fillOpacity:0.7,opacity:0.7,weight:3};
            } else if(feature.properties.value>5.9){
                return {color: color[3],fillColor: color[3],fillOpacity:0.7,opacity:0.7,weight:3};
            } else if(feature.properties.value>4.9){
                return {color: color[2],fillColor: color[2],fillOpacity:0.7,opacity:0.7,weight:3};
            }
                return {color: color[1],fillColor: color[1],fillOpacity:0.7,opacity:0.7,weight:3};

};