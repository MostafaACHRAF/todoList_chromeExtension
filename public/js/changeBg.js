$(document).ready(function() {

    console.log("updated00...");
        var gradients = [
          {"baseBg": "#0cebeb", "firstBg": "#29ffc6", "secondeBg": "#20e3b2", "tirthBg": "#0cebeb"},
          {"baseBg": "#800080", "firstBg": "#ffc0cb", "secondeBg": "#800080"},
          {"baseBg": "#11998e", "firstBg": "", "secondeBg": "#38ef7d"},
          {"baseBg": "#134e5e", "firstBg": "#134e5e", "secondeBg": "#71b280"},
          {"baseBg": "#fdfc47", "firstBg": "#fdfc47", "secondeBg": "#24fe41"},
          {"baseBg": "#a80077", "firstBg": "#a80077", "secondeBg": "#66ff00"},
          {"baseBg": "#8e0e00", "firstBg": "#8e0e00", "secondeBg": "#1f1c18"},
          {"baseBg": "#fe8c00", "firstBg": "#fe8c00", "secondeBg": "##f83600"},
          {"baseBg": "#cc2b5e", "firstBg": "#cc2b5e", "secondeBg": "#753a88"},
          {"baseBg": "#603813", "firstBg": "#603813", "secondeBg": "#b29f94"}
        ];

        function webkit_linear_gradient (g1, g2) {
          return "-webkit-linear-gradient(to right," + g1 + "," + g2 + ")";
        }

      

        var body = $("body");
        var i = 0;

        setInterval(function() {
         
          body.css({"background":gradients[i].baseBg});
          body.css({"background": webkit_linear_gradient(gradients[i].firstBg, gradients[i].secondeBg)});
         
          if (gradients.tirthBg === undefined) {
            body.css({"background":"linear-gradient(to right," + gradients[i].firstBg + "," + gradients[i].secondeBg + ")"});
          } else {
            body.css({"background":"linear-gradient(to right," + gradients[i].firstBg + "," + gradients[i].secondeBg + "," + gradients[i].tirthBg + ")"});
          }
          
          i = i + 1;
          if (i ==gradients.length) {
            i = 0;
          }
        }, 50000);

      });