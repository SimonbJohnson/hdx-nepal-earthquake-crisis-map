newCasesLegendContent = function(){
    var labels = ["3","3.5","4","4.5","5","5.5","6"];
    var html = "<p>Shake Map MMI<br /> Contours</p><p>United States Geological<br />  Survey (USGS)</p>";
    for(i=0;i<7;i++){
        html = html +'<p><i style="background-color:' + color[i+1]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};
