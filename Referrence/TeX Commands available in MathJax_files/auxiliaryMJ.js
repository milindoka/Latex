function myHeading() {
var text;
text = "<table style='width:100%;'><tr><td style='width:14%; text-align:left;'>";
text += "<a href='http://www.onemathematicalcat.org'><img src='catLogoTeXDoc.png' style='vertical-align:middle; border:2px solid black;'></a></td>";
text += "<td style='width:36%; text-align:left;'><table><tr><td style='text-align:center;'><a href='http://www.onemathematicalcat.org/index.htm'>my website: Dr. Carol JVF Burns</a></td></tr><tr><td style='text-align:center;'>(see MathJax in action)</td></tr></table></td>";
text += "<td style='width:36%; text-align:right;'><a href='http://www.mathjax.org'>Beautiful math in all browsers</a></td>";
text += "<td style='width:14%; text-align:right;'><a href='http://www.mathjax.org'><img src='MathJaxBadge.gif' style='vertical-align:middle;'></a></td></tr></table>";
return text;
}

function myWarning() {
var text,warningText;
warningText = "THIS PAGE IS IN PROGRESS<br />CONTENTS ARE NOT VERIFIED<br />USE AT YOUR OWN RISK";
text = "<div style='text-align:center; font-size:x-large; color:green; margin-bottom:15px;'>"+warningText+"</div>";
return text;
}


