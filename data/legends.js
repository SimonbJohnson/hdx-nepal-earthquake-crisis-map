newCasesLegendContent = function(){
    var labels = ["4-4.9","5-5.9","6-6.9","7-7.9","8+"];
    var html = "<p>Shake Map MMI<br /> Contours</p><p>United States Geological<br />  Survey (USGS)</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i+1]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};
