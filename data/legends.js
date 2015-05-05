newCasesLegendContent = function(){
    var labels = ["4-4.9","5-5.9","6-6.9","7-7.9","8+"];
    var html = "<p>Shake Map MMI Contours</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i+1]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

nepalStatsLegendContent = function(){
    var labels = ["0","1-10","11-100","101-1000","1000+"];
    var html = "<p>Deaths per District</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + basecolor[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

idpsLegendContent = function(){
    var html = "<p>IDPs</p>";
    html = html +'<p><i style="background-color:#91a7ff"></i>Medical Centre</p>';
    return html;
};
