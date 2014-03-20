/**
 * Loggy - just log prettier
 * 
 * @param message - the message to log
 * @param type - default is 'error' - (0-3: Error, Warning, Info, Success)
 * @author https://github.com/GabrielWanzek/loggy.js
 * Colors by http://bootswatch.com/cyborg/ (THOMAS PARK - http://thomaspark.me/)
 */

function loggy(message, type) {
  type = (typeof type) !== 'undefined' ? type : 0;
  
  var colors = [
    "#cc0000", // error   - type 0
    "#ff8800", // warning - type 1
    "#2a9fd6", // info    - type 2
    "#77b300"  // success - type 3
  ];
  
  var type_str = ["ERROR  ","WARNING","INFO   ","SUCCESS"];
  
  var str = [
    "%c " + type_str[type] + " %c" + message + " ",
    "margin:1px 0;padding:1px;background:#060606;color:" + colors[type],
    "margin:1px 0;padding:1px;background:#060606;color:#ffffff"
  ];
  
  console.log.apply(console,str);
}