/* New code added 1/21/18 for new header with individual advertising links, no Google Adsense.
   New ad information should be added into: adLinkMat, adImgMat, blurbMat
   Use "adHeaderSupport.js" for testing new items before adding here.
   Put

  <!-- load in code for new Header with cycling ads -->
  <script type="text/javascript" src="../../adHeaderSupport.js"></script>

  AFTER loading auxiliary in any test file!
*/

function smallScreenAlert() {
    if (screen.width < 1080) {
        alert("My pages are optimized for screen widths greater than 1080 pixels.  Beautiful math can't easily be scrunched into small spaces. Hope to see you on a bigger screen!");
    }
}


function loadMathematicalCat() {
    //   smallScreenAlert();
    var numCats = 29;
    var ind = rand(-2, numCats - 3); // Olga's 70 starts with #1
    var imgName = "http://www.onemathematicalcat.org/catImagesFromOlga/cat" + ind + ".jpg";
    var theDiv = "<div style='float:left; width:200px; height:240px; text-align:center; margin-right:20px; margin-bottom:10px;'>";
    theDiv += "<img style='width:200px; height:200px; border:2px solid #D05C1E; border-radius:10px; padding:0px; margin-top:0px; margin-right:0px; margin-bottom:0px; margin-left:0px;' src='" + imgName + "' />";
    theDiv += "<br /><small><a href='http://www.onemathematicalcat.org/mathCatGallery.htm'>(more mathematical cats)</a></small><br />";
    theDiv += "<small><a href='https://www.surveymonkey.com/r/XGHKKY2'>Vote for your favorite(s)!</a></small></div>";
    document.getElementById("mathematicalCat").innerHTML = "<a href='https://studio.envato.com/users/CrArt' title='Art by Olga'>" + theDiv + "</a>";
    return;
}



function welcomeMsg() {
    var welMat = ["Welcome!", "Thanks for visiting!", "Hello there!", "Hello!", "Hi!", "Glad you stopped by!", "Good to see you!", "Hope I can be of help to you!", "Hope I can help!", "Hope I have what you're looking for!"];
    var len = welMat.length;
    return "<span style='color: " + chsColor() + "; font-size:xx-large;'>" + welMat[rand(0, len - 1)] + "</span>";
}

function newColors() {
    for (var i = 1; i <= 11; i++) {
        var theID = "ltr" + i;
        var theColor = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
        document.getElementById(theID).style.color = theColor;
    }
    return;
}

numAdsglobal = 30; // update every time I ad a new entry

// adCtrglobal keeps track of the # of clicks
adCtrglobal = 1; // global variable; reset when page is reloaded

currentPageAd = rand(0, numAdsglobal - 1); // the INDEX of the ad that is to display first, default value; may be changed in page header
//currentPageAd = 11; // start with me
//currentPageAd = 25; // start with Fun Stuff
//currentPageAd = 0;
// extra letters: Mathematics is the music of reason


// a random sequence for ads to run thru
randIndsglobal = moveToStart(selectn(0, numAdsglobal - 1, numAdsglobal), currentPageAd);

var commentMat = ["Everything is explained in a way that not a single detail is missed.",
    "... for people who better understand things by reading on their own,<br />I believe the best web resource out there is your website.",
    "Your writing is consistently simple, clear, neither effusive nor dense,<br />patient, and offered in a spirit of service.",
    "I found meat, potatoes, and pie on every page.  It's all dessert.",
    "When I found your site I was amazed<br />at how well the texts simply explain everything.",
    "I absolutely love the book&#151;it is the one I would love to have written<br />if I were going to write a math book.",
    "Your presentation is so crystal clear, that everything I should have known<br />way back when is amazingly easy for me to comprehend today.",
    "When [my son] comes to me, I review your site<br />and then have a GREAT time helping him.",
    "Suddenly, math was fun again! ... [My children] were encouraged<br />and I could see the puzzled, dazed look in their eyes fading away.",
    "... at a crucial time, when [my kids] were ready to admit their defeat<br />and throw in the towel, your Math Cat saved them.",
    "I have tried several online Algebra courses for my math and have always been confused after the first few sections, yours is the best I have ever found, remaining clear, even after it gets into some of the harder materials.",
    "Your site literally brought tears to my eyes&#151;I've never seen anything<br />so supportive and affirming and reassuring and inspiring<br />as the way you talk us through topics.",
    "You never know what amazing knowledge the next day, or hour, will bring.<br />This certainly qualifies.  Thanks for all the ingenuity.",
    "... not only do I think I've got the hang of it, I know that I do<br />because of the interactive problems... Your site is a blessing to me!",
    "THIS IS GREAT!!!! I'm 17 and in algebra 1 and this is helping me get<br />heads above the competition... You rock!!!! OneMathematicalCat drives me wild.",
    "There is a real need for students to understand the ideas in this book...<br />I am convinced that the need for this book is immense.",
    "There are no competitors [for this book]...<br />I've never seen any similar thing before.",
    "It is wonderfully written and crafted with a care you rarely see.",
    "If you can find the right place to put it,<br />this book will do a great service to the mathematical educational world."
];

var whoMat = ["email from Ali Ahsan, Maldives",
    "email from Ali Ahsan, Maldives",
    "email from Robert C. Gordon, Canada",
    "email from Robert C. Gordon, Canada",
    "email from Todd Stone, Washington",
    "email from Carolyn Melo, Pennslyvania",
    "email from Jose Revelo, California",
    "email from Jose Revelo, California",
    "email from Kara C., a home-schooling mother in Georgia",
    "email from Kara C., a home-schooling mother in Georgia",
    "email from Naomi Laeuchli, a home-schooled American living in Austria",
    "guestbook entry from Ann, in Victoria, Australia",
    "guestbook entry from Dick Illyes in East Central Illinois",
    "guestbook entry from Alexandra in the U.S.",
    "guestbook entry from George in Castro, Egypt",
    "from a book reviewer at a major publisher",
    "from a book reviewer at a major publisher",
    "from a book reviewer at a major publisher",
    "from a book reviewer at a major publisher"
];



function textForWhiteBox() {
    var len = commentMat.length;
    var ind = rand(0, len - 1);
    var str;
    str = "<div style='margin-top:0px; font-size:small; text-align:center; padding:2px; padding-top:0px; background-color:#FFFFF0; border:2px solid grey; border-radius:15px; width:614px;'>";
    str += "<table style='width:100%;'>";
    str += "<tr><td colspan='4'><div style=\"text-align:center; color:white; font-size:large; background-color:black; border-radius:5px; margin:0px; margin-bottom:5px; padding:8px; color:white;\"><div style='font-size:x-small; text-align:left; margin-bottom:3px;'>" + whoMat[ind] + " (refresh the page for more):</div>" + commentMat[ind] + "</div></td></tr>";
    str += "<tr style='vertical-align:top;'>";
    str += "<td style='width:25%; text-align:center;'>";
    str += "<div style='text-align:center; font-size:x-small; font-variant:small-caps; margin-bottom:5px;'><a href='http://www.onemathematicalcat.org/cat_book.htm'>DIGITAL VERSION</a></div>";
    str += "<a href=\"https://www.amazon.com/dp/1982985208/ref=as_li_ss_il?ref_=pe_870760_150889320&linkCode=li2&tag=onematcatple-20&linkId=b2082a1133904e9bb344e254709db230\" target=\"_blank\"><img border=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1982985208&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20\" ></a><img src=\"https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=1982985208\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" /></td>";
    str += "<td style='text-align:center; font-size:small; width:25%;'><b>&#8604;</b> <a href='https://amzn.to/2lP3PcJ'>CAT-ON-SWING</a><br />gives new meaning<br />to <em>any</em> math class<br />(middle school up).<br /><br />Or, read it for fun.<br />It's like running into<br />someone you met<br />long ago&#151;<br />and they've changed<br />(in a good way).</td>";
    str += "<td style='text-align:center; font-size:small; width:25%;'>";
    str += "<a href='https://amzn.to/2MOfcwP'>CAT-IN-HAMMOCK</a> <b>&#8605;</b><br />gives cat-on-swing,<br />plus algebra.<br /><br /><br />With both books:<br /><br />You'll never see<br />&lsquo;<em>x</em>&rsquo;<br />the same way again.</td>";
    str += "<td style='width:25%; text-align:center;'>";
    str += "<div style='text-align:center; font-size:x-small; font-variant:small-caps; margin-bottom:5px;'><a href='http://www.onemathematicalcat.org/getFullTextFullBook.htm'>DIGITAL VERSION</a></div>";
    str += "<a href=\"https://www.amazon.com/dp/1983069078/ref=as_li_ss_il?s=books&ie=UTF8&qid=1529520639&sr=1-1&keywords=one+mathematical+cat+a+first+course+in+algebra&linkCode=li2&tag=onematcatple-20&linkId=90531cb5bd39de47a69515b318a4c1c4\" target=\"_blank\"><img border=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1983069078&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20\" ></a><img src=\"https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=1983069078\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" /></td></tr>";
    str += "</table>";
    str += "<table style='width:100%;'>";
    str += "<tr style='text-align:center;'>";
    str += "<td style='width:33%; text-align:center;'><a href='http://www.onemathematicalcat.org/getPrereqsAndObjectiveSheets.htm'>Math Course Materials</a></td>";
    str += "<td style='width:34%; text-align:center;'><a href='http://www.onemathematicalcat.org/cyclingGame.htm'>WHO AM I?<br /><span style='color:red;'>(a little game)</span></a></td>";
    str += "<td style='width:33%; text-align:center;'><a href='http://www.onemathematicalcat.org/main_table_of_contents.htm'>Main Table of Contents</a></td></tr>";
    str += "</table></div>";
    return str;
}

function textForWhiteBox2() {
    var str;
    str = "<div style='margin-top:3px; padding:17px; background-color:#FFFFF0; border:2px solid grey; border-radius:15px; width:450px;'>";
    str += "MY BOOKS:";
    str += "<ul style='margin-top:0px; margin-bottom:10px;'>";
    str += "<li style='margin-bottom:1px;'><a href='https://amzn.to/2OA7iaQ'>Cat-on-swing</a> (math language ideas)</li>";
    str += "<li style='margin-bottom:1px;'><a href='https://amzn.to/2FndTXc'>Cat-in-hammock</a> (algebra)</li>";
    str += "<li><a href='https://amzn.to/2OAS3yK'>Warrior cat</a> (calculus) and <a href='https://amzn.to/2AX6ysV'>complete solution manual</a></li>";
    str += "</ul>";
    str += "OTHER:";
    str += "<ul style='margin-top:3px; margin-bottom:0px;'>";
    str += "<li style='margin-bottom:1px;'><a href='http://www.onemathematicalcat.org/getPrereqsAndObjectiveSheets.htm'>Math course materials</a></li>";
    str += "<li style='margin-bottom:1px;'><a href='http://pub1.bravenet.com/guestbook/57037237/'>Sign my guestbook</a></li>";
    str += "<li style='margin-bottom:1px;'><a href='http://www.onemathematicalcat.org/cyclingGame.htm'>Who am I?</a> (a little game; get a secret message)</li>";
    str += "<li style='margin-bottom:1px;'><a href='http://www.onemathematicalcat.org/Recipes/WhyILoveWalmartOnlineGroceryService.htm'>How I use my online grocery service (and why I love it)</a></li>";
    str += "<li style='margin-bottom:1px;'><a href='http://www.onemathematicalcat.org/main_table_of_contents.htm'>Main table of contents</a> (not just math)</li>";
    str += "<li style='margin-bottom:1px;'><a href='https://www.youtube.com/watch?v=4Ja28EQ2SdQ&feature=youtu.be'>How to use my lessons (YouTube, 5:04)</a></li>";
    str += "<li><a href='http://www.onemathematicalcat.com/donateWithBenefits.htm'>Support my site</a></li>";
    str += "</ul>";
    str += "</div>";
    return str;
}


function linksBelowHomepageLinkPreCalc() { // links from Precalculus curriculum
    var str;
    //  str = "&nbsp;<table id='headerTable' style='width:1024px; margin-bottom:10px; padding:10px;' cellspacing='0'><tr>";
    str = "&nbsp;<table id='headerTable' style='margin-bottom:10px; padding:10px;' cellspacing='0'><tr>";
    str += "<td style='vertical-align:top; width:410px;'>";
    str += "<a href='http://www.onemathematicalcat.org/index.htm'><img src='http://www.onemathematicalcat.org/logo162pxTrans.png' style='border-style:none;' /></a>";
    str += "<ul><li>This is #" + GVSpecificNumInSeqPreCalc + " of " + GVTotalNumInSeqPreCalc + " in: &nbsp; <a href='/Math/Precalculus_obj/tableOfContentsPreCalculus.htm'>Precalculus</a></li>";
    str += "<li style='margin-top:4px;'><a href='http://www.onemathematicalcat.org/algebra_book/online_problems/table_of_contents.htm'>Algebra I</a> &nbsp; <a href='http://www.onemathematicalcat.org/Math/Geometry_obj/table_of_contents_geom.htm'>Geometry</a> &nbsp; <a href='http://www.onemathematicalcat.org/Math/Algebra_II_obj/table_of_contents.htm'>Algebra II</a>   &nbsp; <a href='http://www.onemathematicalcat.org/Math/Calculus_obj/tableOfContentsCalculus.htm'>Calculus</a></li>";
//  str += "<li style='margin-top:4px;'>the &#x2764; of <em>all</em> my lessons: &nbsp; <a href='http://www.onemathematicalcat.org/cat_book.htm'>the cat book</a></li>";
    // str += "<li style='margin-top:4px;'><a href='http://youtu.be/4Ja28EQ2SdQ'>5-minute YouTube intro to Tree of Math</a></li>";
    str += "</ul>";
    str += "<center>" + website_search() + "</center>";
    str += "</td>";
    str += "<td>" + textForWhiteBox2() + "</td>";
    str += "</tr></table>";
    return str;
}

emailText = "<table cellpadding='1' cellspacing='0' style='font-size:small; margin-left:auto; margin-right:auto; width:auto; background:none; border:none;'>";
emailText += "<tr><td style='border:none;'><img src='http://www.onemathematicalcat.org/graphics/antispamtext-OMC.png' style='height:12px;' /></td>";
emailText += "<td style='border:none;'>(at)</td>";
emailText += "<td style='border:none;'><img src='http://www.onemathematicalcat.org/graphics/antispamtext-outlook.png' style='height:11px;' /></td>";
emailText += "<td style='border:none;'>(dot)</td>";
emailText += "<td style='border:none;'><img src='http://www.onemathematicalcat.org/graphics/antispamtext-com.png' style='height:11px;' /></td></tr></table>";

adLinkMat = [
  "",
  "Inside our <a href='http://www.onemathematicalcat.org/PebbleTour.htm' target='_blank' title='opens in a new window'>tiny house</a> ...<br /><br /><a href='http://amzn.to/2DsGx3G' target='_blank' title='Amazon affiliate link, opens in a new window'>Instant Pot</a><br /><a href='http://amzn.to/2E0RtXh' target='_blank' title='Amazon affiliate link, opens in a new window'>Magic Bullet</a>",
  "Algebra dance shirt<br /><br /><a href='http://amzn.to/2DzB1iX' target='_blank' title='Amazon affiliate link, opens in a new window'>Zoom in at Amazon:</a><br />just hover your mouse<br />over the image.",
  "<a href='http://amzn.to/2BiyEf6' target='_blank' title='Amazon affiliate link, opens in a new window'>50% Air + 50% Water:</a><br />Technically,<br />the glass is completely full.",
  "<a href='http://amzn.to/2G0i1sm' target='_blank' title='Amazon affiliate link, opens in a new window'>Q.E.D.</a><br />Beautey in<br />Mathematical Proof",
  "<a href='http://amzn.to/2Bg1sVC' target='_blank' title='Amazon affiliate link, opens in a new window'>The Dot and the Line:</a><br />a Romance<br />in Lower Mathematics",
  "<a href='http://amzn.to/2mTI0cb' target='_blank' title='Amazon affiliate link, opens in a new window'>Bill Peet Books</a>",
  "<a href='http://amzn.to/2G4Mup2' target='_blank' title='Amazon affiliate link, opens in a new window'>Proverbidioms Poster</a><br /><br />Find the hidden pictures.<br /><small>(There are other versions, too.)</small>",
  "<a href='http://amzn.to/2G4cml1' target='_blank' title='opens in a new window'>I ate some pie</a><br />... and it was delicious!",
  "<br /><br /><a href='https://thecardells.bandcamp.com/releases' target='_blank' title='opens in a new window'>The Cardells 1.0</a><br />(scroll down<br />to hear the scongs<br />and see the lyrics)",
  "<a href='http://amzn.to/2rCBnk5' target='_blank' title='opens in a new window'>Pedi Perfect Foot File</a>",
  "This is me,<br />Dr. Carol JVF Burns,<br />the creator of Tree of Math.",
  "<a href='http://www.onemathematicalcat.org/ScriptureSentenceShuffle/DoctrinalMasteryPassagesNewTestament.htm' target='_blank' title='opens in a new window'>Sentence Shuffle!</a><br />Drag the words into the ovals<br />to make a correct sentence.",
  "<br /><a href='https://www.youtube.com/watch?v=K2K_Q8J3GfA' target='_blank' title='opens in a new window'>Rarity is crazy!</a><br />by <a href='https://www.youtube.com/channel/UCQbBozIu7lIbqYWl0FHBRTg' target='_blank' title='opens in a new window'>Joshua Brony</a>",
  "<br /><a href='https://www.youtube.com/watch?v=4Ja28EQ2SdQ&feature=youtu.be' target='_blank' title='opens in a new window'>This video</a> is nostalgic.<br /><small>(And, you get to hear my voice.)</small>",
  "<a href='http://amzn.to/2C6CeJz' target='_blank' title='Amazon affiliate link, opens in a new window'>Lodge Pan Scrapers</a>",
  "<br /><a href='http://amzn.to/2Ellnsx' target='_blank' title='Amazon affiliate link, opens in a new window' >Scotch Adhesive Dot Rollers</a>",
  "fabric/felt/cardboard<br />collapsible box<br />(any desired size):<br /><br /><a href='http://www.onemathematicalcat.org/OrganizingSolutions/fabricCoveredCollapsibleBox.htm' target='_blank' title='opens in a new window'>instructions</a><br />(and more photos)",
  "It has special significance.<br />(There'ss a bigger image <a href='http://www.onemathematicalcat.org/OrganizingSolutions/images/bigMathPuzzle.htm' title='opens in a new window' target='_blank'>here</a>.)<br /><br /><big><big><b>It's a puzzle!</b></big></big>",
  "<a href='http://amzn.to/2oRZTdi' target='_blank' title='Amazon affiliate link, opens in a new window'>Prime Student</a>",
  "<a href='http://amzn.to/2HfrJ9O' target='_blank' title='Amazon affiliate link, opens in a new window'>Planet Earth II</a>",
  // "<br /><a href='http://amzn.to/2pbmuBv' target='_blank' title='Amazon affiliate link, opens in a new window'>Pi Pie Pan<a>",
  "Our kitchen sink<br />in <a href='http://www.onemathematicalcat.org/PebbleTour.htm' target='_blank' title='opens in a new window'>Pebble</a>",
  "<a href='http://amzn.to/2FF78zL' target='_blank' title='Amazon affiliate link, opens in a new window'>Cherry Blossom wall art</a><br /><a href='http://amzn.to/2GzOkiw' target='_blank' title='Amazon affiliate link, opens in a new window'>Dandelion wall art</a>",
  "<br /><input style='padding:5px; border-radius:15px;' type='button' value='Click for new colors!' onclick='newColors();' /><br /><br /><a href='http://www.onemathematicalcat.org/funStuff.htm' target='_blank' title='opens in a new window'>Need a break<br />from studying math?</a>",
  "",
  "<br /><a href='https://amzn.to/2G6uaj9' target='_blank' title='Amazon affiliate link, opens in a new window'>Spirograph</a>",
  "<a href='https://amzn.to/2G4FDzu' target='_blank' title='Amazon affiliate link, opens in a new window'>Cat's Cradle</a>",
  "<a href='https://amzn.to/2I3TaDY' target='_blank' title='Amazon affiliate link, opens in a new window'>Brave Irene</a>",
  "<a href='https://amzn.to/2pGzlLD' target='_blank' title='Amazon affiliate link, opens in a new window'>Tangram</a>",
  "<a target='_blank' title='Amazon affiliate link, opens in a new window' href='https://amzn.to/2vdkbmW'>Life-size LEGO blocks!</a>"
];

adImgMat = [
  "<div style='font-size:20pt'>On slides 1&#150;29,<br /><em>exactly</em><br />one word<br />has an<br />extra<span style='color:red'>m</span> letter.</div><br />(Slides 30+ are <em>not</em><br />part of the game.)",
  "<img style='width:200px; border-radius:15px;' src='http://www.onemathematicalcat.org/AdImages/PebbleCounterAppliances.jpg' />",
  "<a href='https://www.amazon.com/dp/B075K2D16V/ref=as_li_ss_il?th=1&linkCode=li2&tag=onematcatple-20&linkId=35598bf9a75bc29b5b124c2001f8fb0e' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B075K2D16V&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B075K2D16V' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<a href='https://www.amazon.com/dp/B01MTVIVWS/ref=as_li_ss_il?ie=UTF8&linkCode=li2&tag=onematcatple-20&linkId=d76515bf4cc36c920f5c46dca676f2f6' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MTVIVWS&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B01MTVIVWS' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<a href='https://www.amazon.com/D-Beauty-Mathematical-Proof-Hardcover/dp/B00QOT04GG/ref=as_li_ss_il?ie=UTF8&qid=1516455638&sr=8-1&keywords=qed+beauty+in+mathematical+proof&linkCode=li2&tag=onematcatple-20&linkId=8a509509406f1c2d069e670958d35a5f' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00QOT04GG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B00QOT04GG' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />", // Amazon link
  "<a href='https://www.amazon.com/Dot-Line-Romance-Lower-Mathematics/dp/1587170663/ref=as_li_ss_il?s=books&ie=UTF8&qid=1516456632&sr=1-1&keywords=dot+and+line+romance+in+mathematics&linkCode=li2&tag=onematcatple-20&linkId=e5ec27768304e297252de4027c9ef63d' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1587170663&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=1587170663' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />", // Amazon link
  "<a href='https://www.amazon.com/Cyrus-Unsinkable-Serpent-Bill-Peet/dp/0395313899/ref=as_li_ss_il?s=books&ie=UTF8&qid=1516459491&sr=1-1&keywords=bill+peet+books&linkCode=li2&tag=onematcatple-20&linkId=2def86bbae94a4205aa760dfd5fe7b75' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0395313899&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=0395313899' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />", // Amazon link
  "<a href='https://www.amazon.com/Proverbidioms-Poster-New-Hi-Rez-Breitenbach/dp/B00QB8IBME/ref=as_li_ss_il?ie=UTF8&qid=1516635912&sr=8-2&keywords=proverb+idioms+poster&linkCode=li2&tag=onematcatple-20&linkId=267dce39580c3fa31f30491c47b92069' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00QB8IBME&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B00QB8IBME' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />", // Amazon link
  "<a href='https://www.amazon.com/gp/product/B00SQGQC0M/ref=as_li_ss_il?ie=UTF8&linkCode=li2&tag=onematcatple-20&linkId=6e9c967d34d9e7accd1ffda38a28f05e' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00SQGQC0M&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B00SQGQC0M' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<iframe style='border: 0; width: 100%; height: 42px;' src='https://bandcamp.com/EmbeddedPlayer/album=1755090510/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/' seamless><a href='http://thecardells.bandcamp.com/album/the-cardells-10'>the Cardells 1.0 by the Cardells</a></iframe>",
  "<a href='https://www.amazon.com/gp/product/B00LE99PA2/ref=as_li_ss_il?ie=UTF8&th=1&linkCode=li2&tag=onematcatple-20&linkId=4a4ec22ed6e9ab6b0d44fb6bb17c2fff' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00LE99PA2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B00LE99PA2' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<img style='width:200px; border-radius:15px;' src='http://www.onemathematicalcat.org/homepageNew/images/photos/editedCarolPhotoFromOlga.jpg' />",
  "<a href='http://www.onemathematicalcat.org/ScriptureSentenceShuffle/DoctrinalMasteryPassagesNewTestament.htm' target='_blank' title='opens in a new window'><img style='width:200px; border-radius:15px;' src='http://www.onemathematicalcat.org/AdImages/sentenceShuffle.png' /></a>",
  "<a href='https://www.youtube.com/watch?v=K2K_Q8J3GfA' target='_blank' title='opens in a new window'><img style='width:200px; border-radius:15px;' src='http://www.onemathematicalcat.org/AdImages/JoshuaYoutube.png' /></a>",
  "<a href='https://www.youtube.com/watch?v=4Ja28EQ2SdQ&feature=youtu.be' target='_blank' title='opens in a new window'><img style='width:200px; border-radius:15px;' src='http://www.onemathematicalcat.org/AdImages/SiteYouTubeVideo.png' /></a>",
  "<a href='https://www.amazon.com/Lodge-SCRAPERPK-Durable-Scrapers-2-Pack/dp/B0039UU9UO/ref=as_li_ss_il?ie=UTF8&qid=1518114982&sr=8-2&keywords=lodge+scrapers&dpID=41zVsMY4kJL&preST=_SX300_QL70_&dpSrc=srch&linkCode=li2&tag=onematcatple-20&linkId=5bec0835c5249fae216f37905592bab4' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0039UU9UO&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B0039UU9UO' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<a href='https://www.amazon.com/gp/product/B007VBXC38/ref=as_li_ss_il?ie=UTF8&psc=1&linkCode=li2&tag=onematcatple-20&linkId=55f83349b047b961033d0191c216ff41' target='_blank' title='opens in a new window'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B007VBXC38&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B007VBXC38' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<img style='width:200px; border-radius:15px;' src='http://onemathematicalcat.org/OrganizingSolutions/images/magicHatBox.jpg' />",
  "This is not just a random arrangement of fabric squares:<br /><img style='width:200px; border-radius:15px;' src='http://www.onemathematicalcat.org/OrganizingSolutions/images/mathPuzzle.jpg' />",
  "<a href='http://amzn.to/2oRZTdi' target='_blank' title='Amazon affiliate link, opens in a new window'><img style='width:200px; border-radius:15px;' src='http://www.onemathematicalcat.org/AdImages/AmazonStudentPrime.png' /></a>",
  "<a href=\"https://www.amazon.com/gp/product/B01LTHYIC8/ref=as_li_ss_il?ie=UTF8&psc=1&linkCode=li2&tag=onematcatple-20&linkId=2e899665ff2c5f8072f35f23de76b7f7\" target=\"_blank\"><img border=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LTHYIC8&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20\" ></a><img src=\"https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B01LTHYIC8\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
 // "<a href='https://www.amazon.com/Pi-People-COMINHKR060777-Pie-Pan/dp/B00GTB1X8C/ref=as_li_ss_il?ie=UTF8&qid=1521059747&sr=8-1&keywords=pi+pan&dpID=51aKPlSKELL&preST=_SX300_QL70_&dpSrc=srch&linkCode=li2&tag=onematcatple-20&linkId=6538fba7585e4b3dcf2067ee89cc87f2' target='blank'><img border='0' style='border-radius:15px;' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00GTB1X8C&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B00GTB1X8C' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<img src='http://www.onemathematicalcat.org/AdImages/kitchenSink.jpg' style='width:200px; border-radius:15px;'>",
  "<table><tr><td><img src='http://www.onemathematicalcat.org/AdImages/cherryBlossomWallArt.jpg' style='width:100px; border-radius:15px;' /></td><td><img src='http://www.onemathematicalcat.org/AdImages/dandelionWallArt.jpg' style='width:100px; border-radius:15px;' /></td></tr></table>",
  "<center><marquee style='width:150px;'><font id='ltr1' size='25px' color='red'>F</font><font id='ltr2' size='25px' color='orange'>U</font><font id='ltr3' size='25px' color='blue'>N &nbsp;</font></marquee><br /><marquee style='width:150px;'><font id='ltr4' size='25px' color='green'>S</font><font id='ltr5' size='25px' color='#33CC00'>T</font><font id='ltr6' size='25px' color='pink'>U</font><font id='ltr7' size='25px' color='purple'>F</font><font id='ltr8' size='25px' color='maroon'>F</font></marquee></center>",
  "<img style='width:200px; border-radius:15px;' src='http://www.onemathematicalcat.org/AdImages/missionStatement.png' />",
  "<a href='https://www.amazon.com/Kahootz-01001-S-Spirograph-Deluxe-Design/dp/B009VE38CI/ref=as_li_ss_il?s=toys-and-games&ie=UTF8&qid=1522031929&sr=1-1&keywords=spirograph&dpID=51tvxBYW83L&preST=_SX300_QL70_&dpSrc=srch&linkCode=li2&tag=onematcatple-20&linkId=ab4d3200c77b8968590e07f6aede403b' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B009VE38CI&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B009VE38CI' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />'",
  "<a href='https://www.amazon.com/Klutz-K536-Cats-Cradle-Book/dp/1878257536/ref=as_li_ss_il?ie=UTF8&qid=1522032337&sr=8-2&keywords=cat's+cradle&dpID=51PnrO7jlSL&preST=_SY300_QL70_&dpSrc=srch&linkCode=li2&tag=onematcatple-20&linkId=1b90cea3239715ed045fd6c03818d27e' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1878257536&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=1878257536' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<a href='https://www.amazon.com/Brave-Irene-Picture-William-Steig/dp/0374309477/ref=as_li_ss_il?_encoding=UTF8&qid=1522032551&sr=8-1&linkCode=li2&tag=onematcatple-20&linkId=8540e530b008289ab72c5210b4fe80cb' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0374309477&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=0374309477' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<a href='https://www.amazon.com/Tangram-Classic-Handmade-SiamMandalay-Pictured/dp/B016UO17XS/ref=as_li_ss_il?s=aps&ie=UTF8&qid=1522032950&sr=1-6-catcorr&keywords=tangram+wood&linkCode=li2&tag=onematcatple-20&linkId=1d4173f9ea126dd0669d50140967a514' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B016UO17XS&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B016UO17XS' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
  "<a href='https://www.amazon.com/EverBlock-Modular-Building-Blocks-Combo/dp/B01ITKN478/ref=as_li_ss_il?s=toys-and-games&ie=UTF8&qid=1523848531&sr=1-1&keywords=everblock&dpID=21Vwj8DEi%252BL&preST=_SX300_QL70_&dpSrc=srch&linkCode=li2&tag=onematcatple-20&linkId=91779304eee415a73c0c87967fd067a1' target='_blank'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01ITKN478&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=onematcatple-20' ></a><img src='https://ir-na.amazon-adsystem.com/e/ir?t=onematcatple-20&l=li2&o=1&a=B01ITKN478' width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' />",
];

blurbMat = [
  "Write down these extra letters,<br />in order:<br /><div style='text-align:left;'><ul><li style='margin-bottom:3px;'>The extra letter from #1 (this slide)<br />is &lsquo;<span style='color:red'>m</span>&rsquo;.</li><li style='margin-bottom:3px;'>The extra letter from #2 is ___ .</li><li>... and so on ...</li></ul></div>Insert appropriate spaces.<br /><br />What does it say?",
  "<div style='text-align:center;'><a href='http://www.onemathematicalcat.org/PebbleTour.htm' target='_blank' title='opens in a new window'>&lsquo;Pebble&rsquo;</a> is our tiny house.<br />It's under 400 square feet.<br /><br /><small>Only three appliances stay on my counter!<br />I use them all the time.<br />(I made the custom covers.)<br /><br />I can't find the <a href='http://amzn.to/2DvAeMv' target='_blank' title='Amazon affiliate link, opens in a new window'>mini breadmaker</a> anymore.<br />So sad...<br />it makes a perfect loaaf of bread in 45 minutes!</small></div>",
  "I love to dance.<br />I love math.<br />So, I love this shirt!<br /><br />Study <a title='Basic Function Models, opens in a new window' target='_blank' href='http://www.onemathematicalcat.org/Math/Precalculus_obj/basicFctModels.htm'>this section</a>:<br />there are some matth issues with this shirt.<br />See if you can find and fix them!",
  "Aren't <a target='_blank' title='Changing Percents to Decimals, opens in a new window' href='http://www.onemathematicalcat.org/algebra_book/online_problems/percent_to_dec.htm'>percents</a> great?<br />Yep, 0.5 + 0.5 = 1.<br /><br />That's even mhore optimistic than<br /><em>the glass is half full </em>!",
  "QED is Latin for<br />&lsquo;quod erat demonstrandum&rsquo;&#151;roughly,<br />&lsquo;that which was to be shown&rsquo;.<br />It is often used<br />as an end-of-proof marker.<br /><br />Every page offers a proof by picture.<br />The illustrations are exquisite.",
  "<small>A straight line is hopelessly in love with a dot.<br />The dot is infatuated by a wild squiggle.<br />How can the dull, conventional line compete?</small><br /><br />I lovem this book.<br /><br />(But at the end,<br />I always have the same thought...<br />the line deserves much better!)",
  "There's moare to life than math.<br />There's also reading to kids.<br /><br />We love <em>all</em> of Bill Peet's books.<br />This is just one of many!",
  "<small>This poster was always in my classroom or office.<br /><br />I typed up (and laminated)<br />all the proverbs and idioms.<br />I put teeny bits of velcro<br />by the matching pictures on the poster.<br /><br />Students would pick a slip,<br />find it on the poster, and attach it.<br /><br />It was a <em>tremendous</em> hit, year after year!<br />So much fun to wattch it fill up!</small>",
  "<div style='text-align:left;'><ul><li style='margin-bottom:5px;'><big><b>I</b></big>: the imaginary number <em>i</em><br />(the square root of negative one)</li><li style='margin-bottom:5px;'><big><b>ate</b></big>: two cubed equals eight</li><li style='margin-bottom:5px;'><big><b>some</b></big>: the summation symbol</li><li style='margin-bottom:5px;'><big><b>pie</b></big>: the iirrational number pi</li></ul></div>",
  "<div style='text-align:center;'>Ray is my husband.<br /><a href='http://www.thecardells.net/' target='_blank' title='opens in a new window' >The Cardells</a> (Doug & Shay)<br />are his parents.<br /><br />Doug and Shay been performing together<br />for almost 40 years.<br /><br />My personal favorite in this collection:<br />&lsquo;I Wish that You Could Be Me&rsquo;</div>",
  "I go for long walks.<br />I dance.<br />I'm hard on my feet.<br /><br />I can go through socks in a few weeks.<br /><br />I decided to give this a try<br />(based on all the possitive reviews).<br /><br />It really does work!",
  "My credentials are <a href='http://www.onemathematicalcat.org/carol_vita_web.htm' target='_blank' title='opens in a new window'>here</a>.<br /><br />It may be more fun for you to learn<br />from someone you &lsquo;know&rsquo;...<br />so there's a random Fun Fact<br />about me at the<br /><a href='#justBeforeFunFact'>bottom of every page</a>.<br /><br />To see <em>all</em> my Fun Facts, <a href='http://www.onemathematicalcat.org/linkUnderMainTitle.htm' target='_blank' title='opens in a new window'>cliick here</a>.",
  "We're creating fun activities for this site,<br />so you can &lsquo;linger longer&rsquo;<br />with key concepts.<br /><br /><a href='http://www.onemathematicalcat.org/ScriptureSentenceShuffle/DoctrinalMasteryPassagesNewTestament.htm' target='_blank' title='opens in a new window'>Sentence Shuffle</a><br />is our first prototype!<br /><br />This game (and lots more stuff)<br />iss available from<br />my <a href='http://www.onemathematicalcat.org/main_table_of_contents.htm' target='_blank' title='opens in a new window'>main Table of Contents</a>.",
  "Joshua ist my &lsquo;bonus son&rsquo;.<br />(He's Ray's son.<br />&lsquo;Step-anything&rsquo;<br />has such a bad rap...)<br /><br />He uploaded his<br />first-ever Youtube video.<br />Check it out!<br />(It's only 17 seconds long.)",
  "<span style='color:red'>Some things have changed!</span><br /><br /><span style='color:red'>Now:</span><br />I've put over 11,000 hours into this site.<br />I have over 400 lessons.<br /><br /><span style='color:green'>Shome things haven't changed!</span><br /><br />&bullet; online exercises<br />&bullet; time yourself (Algebra Pinball)<br />&bullet; unlimited worksheets",
  "I love scrambled eeggs<br />(especially from our own <a title='opens in a new window' target='_blank' href='http://www.onemathematicalcat.org/chickens.htm'>chickens</a>).<br /><br />I used to <em>hate</em> cleaning<br />the bottom of the pan.<br /><br />Now:<br />hold pan over trash can,<br />scoop out mess&#151;so easy.<br /><br />Love it when a cheap solution is best!!",
  "My daughter and I made valentines.<br /><br />She tried this and exclaimmed<br />&lsquo;This is great!<br />I didn't know such things existed!&rsquo;",
  "I like to make useful things<br />from fabric scraps and cardboard.<br /><br />This is a special box<br />to hold my Dad's Magic Hat.<br />Couldn't find what I wanted online,<br />so I creauted it myself.<br /><br /><small>(You can hide secret messages<br />in the inside pockets.)</small>",
  "<div style='text-align:left; padding-left:5px;'>To get you started:<ul><li style='margin-bottom:5px;'>this is the correct orientation<br />to view the puzzle</li><li>the border has no significance;<br />it is decorative only</li></ul></div><small>Feel free to email me for hints or the solution<br />(or just to say hello):</small><br /><br />" + emailText,
  "Just in case you didn't know,<br />there's a special (cheaper)<br /><a href='http://amzn.to/2oRZTdi' target='_blank' title='Amazon affiliate link, opens in a new window'>Amazon Prime for students</a>.<br /><br />You'll need a &lsquo;<tt>.edu</tt>&rsquo; address to qualify.<br /><br />You might want to check out<br />the <a href='http://amzn.to/2oVjwkG' target='_blank' title='Amazon affiliate link, opens in a new window'>rent/buy/sell textbooks</a><br />on Amazon, ailso.",
  "I had a week kitty-sitting<br />for my daughter,<br />and got to watch a few episodes.<br /><br /><big>WOW!!!</big><br /><br />(I ordered it forc myself right away,<br />so I could watch them <em>all</em>.)",
 // "Enjoy &lsquo;pi day&rsquo; year round!",
  "We hand-wash our dishes.<br />I've tried <em>many</em> spoonge holders.<br />They all get <em>really gucky</em>. Yuck.<br /><br />Finally, the perfect solution!<br />I put my <a href='http://amzn.to/2FJPJSc' target='_blank' title='Amazon affiliate link, opens in a new window'>dobie sponge</a><br />on top of a <a href='http://amzn.to/2FJHV2S' target='_blank' title='Amazon affiliate link, opens in a new window'>magic eraser</a>.<br />(The order is important!)<br /><br /><small>The magic eraser absorbs the drips.<br />No stink. No mess. It works great.",
  "My daughter introduced me to<br />vinyl wall art.<br /><br />I love the variety on our walls.<br /><br />I moved these<br />fromf our old house to <a target='_blank' title='opens in a new window' href='http://www.onemathematicalcat.org/PebbleTour.htm'>Pebble</a>.<br />They both re-applied great!",
  "Since 1999,<br />I've scoured the web<br />for the absolute best fun stuff.<br /><br />There's a brit of everything <a href='http://www.onemathematicalcat.org/funStuff.htm' target='_blank' title='opens in a new window'>here</a>:<br /><font id='ltr9' color='red'>math and logic games</font><br /><font id='ltr10' color='green'>word puzzles</font><br /><font id='ltr11' color='blue'>optical illusions</font><br />lots more<br /><br />Hope you find something you like!",
  "This is part of mey<br /><a target='_blank' title='opens in a new window' href='http://www.onemathematicalcat.org/FamilyHomeEvening/CarolMissionStatement.htm'>personal mission statement</a>.<br /><br />Here's another part:<br /><br /><div style=\"font-family:'French Script MT'; font-size:15pt; text-align:center;\">Strive to understand ideas well enough<br />so that they become simple.<br />In explaining them to others,<br />remember their complexity.</div>",
  "I have such goaod memories<br />of playing with this!",
  "We have losads of the Klutz books.<br /><br />This is one of our favorites.",
  "We have an enormous libraory<br />of kid's books.<br /><br />This one is in our<br />&lsquo;Special hardcover&rsquo; section.",
  "<a href='https://amzn.to/2Gb9QsC' target='_blank' title='Amazon affiliate link, opens in a new window'>Here's sonme inspiration.</a>",
  "<div style='text-align:left;'>&nbsp; BUILD:<br />&nbsp; tables<br />&nbsp; &nbsp; &nbsp;chairs<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;stairs<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;desks<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;partitions<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;forts<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;castles ...</div><br />Want to re-decorate? Re-build!<br />These are so cool!!"
];



function moveToStart(mat, numToMove) {
    // mat is an array containing a number "numToMove"
    // returns the same matrix, with "numToMove" moved to the first position
    // e.g., moveToStart([1,5,3],5) returns [5,1,3]
    for (var i = 0; i <= mat.length - 1; i++) {
        if (mat[i] == numToMove) {
            mat.unshift(numToMove); // copy to beginning of mat
            mat.splice(i + 1, 1); // move original element
            return mat;
        }
    }
    return mat;
}


function moreAds() { // when button is pressed
    document.getElementById('numOnAdButton').innerHTML = "#" + (randIndsglobal[adCtrglobal % numAdsglobal] + 1) + "<br />";
    document.getElementById('adImg').innerHTML = adImgMat[randIndsglobal[adCtrglobal % numAdsglobal]];
    document.getElementById('adLink').innerHTML = adLinkMat[randIndsglobal[adCtrglobal % numAdsglobal]];
    document.getElementById('blurb').innerHTML = blurbMat[randIndsglobal[adCtrglobal % numAdsglobal]];
    adCtrglobal++; // increment to the next ad
    return;
}

function selectn(x, y, n) {
    var hold, choose, holdlen;
    // randomly selects  n  distinct integers between  x  and  y  (inclusive)
    // there are  y-x+1  choices, so  n  must be  <= y-x+1
    hold = new Array(); // index starts at 0
    choose = rand(x, y); // first selection
    hold = hold.concat(choose); // "hold" now has length 1;  need  n-1  more numbers
    holdlen = 1; // the length of "hold" will keep increasing by 1
    for (var i = 1; i <= (n - 1) ; i++) {
        choose = rand(x, y); // choose a potential new number
        // must check that it's not the same as anything else in "hold"
        innerloop:
            for (var j = 0; j < holdlen; j++) {
                while (choose == hold[j]) {
                    choose = rand(x, y);
                    j = -1;
                } // start over again; will be incremented to 0 on next pass
            } // end of innerloop
        hold = hold.concat(choose);
        holdlen++;
    }
    return hold;
}


/* original code is below; */


var GVTotalNumInSeqCalc = 7; // total number in Calculus course
if (typeof (GVSpecificNumInSeqCalc) == 'undefined') {
    GVSpecificNumInSeqCalc = "(coming soon)";
}

var GVTotalNumInSeqPreCalc = 160; // total number in Precalculus course
if (typeof (GVSpecificNumInSeqPreCalc) == 'undefined') {
    GVSpecificNumInSeqPreCalc = "(coming soon)";
}

dailyNews = "";

numberLineWordsMat = ["daring", "adventurous", "courageous", "fearless", "nervy", "venturesome", "unafraid",
"nerdy", "geeky", "mathy",
"supportive", "charitable", "kind", "thoughtful", "good-hearted", "benevolet", "philanthropic"];
lengthNumLine = numberLineWordsMat.length;
firstSen = "Be " + numberLineWordsMat[rand(0, lengthNumLine - 1)];

searchWordMat = ["3D printer",
"cat's cradle", "chemistry set",
"drones", "duplos",
"electricity kit", "electronics kit", "erector sets", "Euler's disk",
"galileo thermometer",
"hanabi",
"Klutz Book of Knots", "koosh ball",
"legos", "logic puzzle",
"mastermind", "math puzzle", "mazes", "mouse trap game",
"perquackey", "perpetual motion", "pi (not pie)", "pogo stick", "puzzle boxes",
"quilling kit",
"Sizzix Big Shot", "slinky", "spirograph", "stereograms", "stilts", "sudoku",
"tangram", "tinker toys", "Azul"];

function numLineIncentive() {
    var homeMat = ["ABODE", "APARTMENT", "COTTAGE", "DOMICILE", "DWELLING", "HOME", "HOMESTEAD", "HOUSE", "LODGING", "RESIDENCE"];
    var homeWord = "&ldquo;" + homeMat[rand(0, homeMat.length - 1)] + "&rdquo;";
    var saleMat = ["FOR LEASE", "FOR RENT", "FOR SALE", "READY FOR OCCUPANCY", "READY FOR INHABITANCE", "READY FOR TENANCY", "UP FOR LEASE", "UP FOR RENT", "UP FOR SALE"];
    var saleWord = saleMat[rand(0, saleMat.length - 1)];
    var almostMat = ["ALMOST", "APPROXIMATELY", "ESSENTIALLY", "PRACTICALLY", "VIRTUALLY", "CLOSE TO", "JUST ABOUT", "PRETTY NEAR"];
    var almostWord = almostMat[rand(0, almostMat.length - 1)];
    var freeMat = ["FREE", "FREE OF COST", "BEING GIVEN AWAY", "NO COST"];
    var freeWord = freeMat[rand(0, freeMat.length - 1)];
    var longMat = ["long", "lengthy", "elongated", "far-reaching", "never-ending"];
    var articleMat = ["a", "a", "an", "a", "a"];
    var chs = rand(0, longMat.length - 1);
    var longWord = longMat[chs];
    var articleWord = articleMat[chs];
    var narrowMat = ["narrow", "cramped", "slender", "thin", "tight", "attenuated", "confining", "constricted", "threadlike"];
    var narrowWord = narrowMat[rand(0, narrowMat.length - 1)];
    var roadMat = ["road", "avenue", "boulevard", "expressway", "highway", "lane", "pathway", "roadway", "route", "street", "thoroughfare", "trail", "alley", "throughway", "thruway", "turnpike"];
    var roadWord = roadMat[rand(0, roadMat.length - 1)];
    var str = "<div style='margin-top:40px; margin-left:auto; margin-right:auto; text-align:center; width:100%;'>";
    //str += "<a href='http://www.legacy.com/obituaries/berkshire/obituary.aspx?page=lifestory&pid=181238725'>obituary, Pauline Vreeland</a> (my Mom): 1931 to 2016";
    //str += "August 29, 2016: &nbsp; <a href='http://www.onemathematicalcat.org/Carol_blog.htm'>A sad day</a>";
    //str += "<a href='http://www.onemathematicalcat.org/numberLinePopulation.htm' style='color:red; font-weight:bold;'>";
    //str += homeWord + " " + saleWord + ":<br />" + almostWord + " " + freeWord + "</a><br />";
    //str += "<span style='color:blue;'><em>" + "on" + " " + articleWord + " " + longWord + ", " + narrowWord + " " + roadWord + "</em></span>";
    //str += "<br /><small><tt>(refresh the page to see the randomness)</tt></small>";
    //str += "</div>";
    //str += "<div style='text-align:center; width:60%; margin-left:auto; margin-right:auto; margin-top:10px; border:3px solid blue; padding:5px; background-color:yellow;'><a href='https://giveaway.amazon.com/p/b5d985a800adf457'>AMAZON GIVE-AWAY</a><br />1/250 Chance of Winning a Hanabi Game!<br />(ends July 13)</div>";
    return str;
}

var CarolClickSound = new Audio('http://www.onemathematicalcat.org/Audio/CarolClick.m4a');

function needAShortBreak() {
    var str = "<h2>Need a short break? &nbsp; ";
    str += "<a href=\"http://pub1.bravenet.com/guestbook/57037237/\">Sign my Guestbook</a></h2>"
    str += "<table style='width:100%;'><tr><td style='width:50%; vertical-align:top;'>"; // added line 6/7/18
    str += "<div style='width:600px;'>";
    str += "<ul>";
    str += "<li style='margin-bottom:5px;'>See lots of <a href=\"http://www.onemathematicalcat.org/linkUnderMainTitle.htm\">fun facts</a> about author/creator Dr. Burns</a>.<br />";
    str += "(It might be more fun for you to learn from someone you &lsquo;know&rsquo;!)</li>";
    str += "<li style='margin-bottom:5px;'>Reward yourself for your hard work&#151;";
    str += "get something mathy/nerdy/geeky/fun!<br />";
    str += "Suggestions from Dr. Burns:<br />";
    str += "<table cellpadding='5' cellspacing='0' style='margin-left:auto; margin-right:auto; margin-top:5px; width:80%; text-align:center;'>";
    str += "<tr>";
    str += "<td>search</td>";
    str += "<td>" + amazonLink + "</td>";
    str += "<td>for:</td>"; // on line below, changed from 2px solid grey to 4px solid red on 9/6/18 for better visibility of button, and added a word:  Click HERE for ...
    str += "<td rowspan='2'><button onMouseOver='this.style.backgroundColor=\"DarkSeaGreen\"' onMouseOut='this.style.backgroundColor=\"LightGreen\"' type='button' style='background-color:LightGreen; font-size:10px; padding:15px; border-radius:45%; border:4px solid red;' onclick='CarolClickSound.play(); changeWord();'><big><big>Click here for more ideas!<br />(Look left!)</big></big></button></td>";
    str += "</tr><tr>";
    // changed from color:green to color:red to make words more visible
    str += "<td id='putWordHere' colspan='3' style='width:50%; font-size:large; color:red; border:1px solid black; padding:10px;'>" + searchWordMat[rand(0, searchWordMat.length - 1)] + "</td>";
    str += "</tr></table></li>";
    str += "</ul>";
    str += "</div>";
    str += "</td><td>"; // below is code from ClustrMaps.com, added 6/7/18
    str += "<script type=\"text/javascript\" id=\"clustrmaps\" src=\"//cdn.clustrmaps.com/map_v2.js?d=C6tcX8B1OWXp754ZSuG6zN732ZBDo4Wdz-AqHizYk8I&cl=ffffff&w=a\"><\/script>"; // added line 6/7/18
    str += "<center><small>Click on the map to see users, in real time, from all over the world.</small></center>"; // added line 6/7/18
    str += "</td></tr></table>"; // added line 6/7/18
    return str;
}

function changeWord() {
    var theWord = searchWordMat[rand(0, searchWordMat.length - 1)];
    document.getElementById('putWordHere').innerHTML = theWord;
    return true;
}

function commonHeader() {
    /* changed to new header, 1/21/18 */
    var str;
    str = "&nbsp;<table  id='headerTable' style='width:1024px; margin-bottom:10px; padding:10px;' cellspacing='0'><tr>";
    str += "<td style='vertical-align:top; width:410px;'>";
    str += "<a href='http://www.onemathematicalcat.org/index.htm'><img src='../../logo162pxTrans.png' style='border-style:none;' /></a><ul>";
    str += "<li style='margin-top:4px;'><a href='http://www.onemathematicalcat.org/algebra_book/online_problems/table_of_contents.htm'>Algebra I</a> &nbsp; <a href='http://www.onemathematicalcat.org/Math/Geometry_obj/table_of_contents_geom.htm'>Geometry</a> &nbsp; <a href='http://www.onemathematicalcat.org/Math/Algebra_II_obj/table_of_contents.htm'>Algebra II</a></li>";
    str += "<li style='margin-top:4px;'><a href='http://www.onemathematicalcat.org/Math/Precalculus_obj/tableOfContentsPreCalculus.htm'>Precalculus</a> &nbsp; <a href='http://www.onemathematicalcat.org/Math/Calculus_obj/tableOfContentsCalculus.htm'>Calculus</a></li>";
    str += "<li style='margin-top:4px;'>the &#x2764; of <em>all</em> my lessons: &nbsp; <a href='http://www.onemathematicalcat.org/cat_book.htm'>the cat book</a></li>";
    str += "</ul>";
    str += "<center>" + website_search() + "</center>";
    str += "</td>";
    str += "<td>" + textForWhiteBox2() + "</td>";
    str += "</tr></table>";
    return str;
}

function commonHeaderTest() {
    var str;
    str = "<table id='headerTable' style='width:1024px; margin-bottom:20px;'>";
    str += "<tr><td><img src='http://www.onemathematicalcat.org/logo162pxTrans.png' style='border-style:none;'></td>";
    str += "<td><ul>";
    str += "<li style='margin-top:4px;'><a href=\"http://www.onemathematicalcat.org/algebra_book/online_problems/table_of_contents.htm\">Algebra I</a> &nbsp; <a href=\"http://www.onemathematicalcat.org/Math/Geometry_obj/table_of_contents_geom.htm\">Geometry</a> &nbsp; <a href=\"http://www.onemathematicalcat.org/Math/Algebra_II_obj/table_of_contents.htm\">Algebra II</a>";
    str += "&nbsp; &nbsp; <a href=\"http://www.onemathematicalcat.org/Math/Precalculus_obj/tableOfContentsPreCalculus.htm\">PreCalculus</a> &nbsp; <a href=\"http://www.onemathematicalcat.org/Math/Calculus_obj/tableOfContentsCalculus.htm\">Calculus</a></li>";
    //str += "<li style='margin-top:4px;'><a href='http://youtu.be/4Ja28EQ2SdQ'>5-minute YouTube:</a> &nbsp; <a href='http://www.onemathematicalcat.org/pinball_home.htm'>Algebra Pinball</a>, tips for my lessons, more</li>";
    // str += "<li style='margin-top:4px;'>For a 5-minute YouTube intro on using this website, <a href='http://youtu.be/4Ja28EQ2SdQ'>click here</a>.</li>";
    str += "<li style='margin-top:4px;'><a href=\"http://onemathematicalcat.org/webSiteIncome.htm\">Please support my site.</a></small> &nbsp; ";
    str += "<a href='http://www.onemathematicalcat.org/donation_thank_you.htm'>Many thanks!</a></li>";
    str += "<li style='margin-top:4px;'><a href='http://www.onemathematicalcat.org/index.htm'>homepage for Tree of Math: Dr. Carol JVF Burns</a></li>";
    str += "</ul>";
    str += numLineIncentive();
    //str += "<br /><br /><marquee style='width:460px;'>"+dailyNews+"</marquee>";
    str += "</td>";
    str += "<td>" + donationGlobalTopTest() + "</td></tr></table>";
    return str;
}

amazonLink = "<a target='_blank' title='opens in a new window' href='http://www.amazon.com/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.com%2F%3Fie%3DUTF8%26tag%3Donematcatple-20%26linkCode%3Dur1%26camp%3D216797%26adid%3D0MVX3J15JCVWFSZ518FS%26creative%3D394565&tag=onematcatple-20&linkCode=ur2&camp=1789&creative=390957'><img src='http://www.onemathematicalcat.org/graphics/amazonDotComSmall.png' /></a>";
etsyLink = "<a title='opens in a new window' href='https://www.awin1.com/awclick.php?mid=6220&id=271615' target='_blank'><img src='http://www.onemathematicalcat.org/graphics/Etsy.png' style='height:30px; padding:0px; margin:0px; border:1px solid black;' /></a>";

function donationGlobalTop() {
    var string;
    string = "<center>" + website_search() + "</center>";
    string += "<div style=\"color: #2C4314; text-align:center; width:325px; padding:5px; border:2px solid grey; background-color:white; margin-left:auto; margin-right:auto; margin-top:15px; border-radius:15px;\">";
    string += "<div style='margin-bottom:10px;'>" + adtext3 + "</div>";
    string += "<table style='width:100%;'><tr>";
    string += "<td>" + amazonLink + "</td>";
    string += "<td style='font-size:xx-large;'>&#8604;</td>";
    string += "<td><div style='font-size:small; color:green;'>search for:<br /><span style='color:red;'>" + searchWordMat[rand(0, searchWordMat.length - 1)] + "</span></div></td>";
    //string += "<td style='font-size:xx-large;'>&#8605;</td>";
    //string += "<td>"+etsyLink+"</td>";
    string += "</tr></table>";
    string += "</div>";
    string += "<div style='text-align:center; margin-left:auto; margin-right:auto; margin-top:10px;'><table style='margin-left:auto; margin-right:auto; width:90%;'><tr><td style='vertical-align:top; text-align:center; color:red;'>Please share &rightarrow;<br />(click on icons)</td><td>" + socialIcons + "</td></tr></table></div>";
    return string;
}

var pageTitle = document.title;
var pageURL = document.URL;
woHTTP = pageURL.replace(/http:\/\//i, ""); // remove the http://
liCSS = "margin-right:10px; display:inline-block;";
aCSS = "text-decoration:none; display:inline-block; text-align:center; color:#3d3d3d; font-size:1.25em;";
socialIcons = "<link rel='stylesheet' href='http://www.onemathematicalcat.org/homepageNew/css/font-awesome.css' media='screen' /> ";
socialIcons += "<ul style='margin-top:0px;'>";
socialIcons += "<li style='" + liCSS + "'><a style='" + aCSS + "' href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F" + woHTTP + "&t=" + pageTitle + "' target='_blank' title='Facebook'><i class='icon-facebook-sign'></i></a></li>";
socialIcons += "<li style='" + liCSS + "'><a style='" + aCSS + "' href='https://twitter.com/intent/tweet?source=http%3A%2F%2F" + woHTTP + "&text=" + pageTitle + ":%20http%3A%2F%2F" + woHTTP + "' target='_blank' title='Twitter'><i class='icon-twitter'></i></a></li>";
socialIcons += "<li style='" + liCSS + "'><a style='" + aCSS + "' href='https://plus.google.com/share?url=http%3A%2F%2F" + woHTTP + "' target='_blank' title='Google+'><i class='icon-google-plus-sign'></i></a></li>";
socialIcons += "<li style='" + liCSS + "'><a style='" + aCSS + "' href='http://www.tumblr.com/share?v=3&u=http%3A%2F%2F" + woHTTP + "&t=" + pageTitle + "&s=' target='_blank' title='Tumblr'><i class='icon-tumblr-sign'></i></a></li>";
socialIcons += "<li style='" + liCSS + "'><a style='" + aCSS + "' href='http://pinterest.com/pin/create/button/?url=http%3A%2F%2F" + woHTTP + "&description=" + pageTitle + "' target='_blank' title='Pinterest'><i class='icon-pinterest-sign'></i></a></li>";
socialIcons += "<li style='" + liCSS + "'><a style='" + aCSS + "' href='http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2F" + woHTTP + "&title=" + pageTitle + "&summary=Beautiful%20math!&source=http%3A%2F%2F" + woHTTP + "' target='_blank' title='LinkedIn'><i class='icon-linkedin-sign'></i></a></li>";
socialIcons += "</ul>";

adtext3 = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>";
adtext3 += "<!-- mobile banner 320x50 -->";
adtext3 += "<ins class=\"adsbygoogle\" ";
adtext3 += "     style=\"display:inline-block;width:320px;height:50px\" ";
adtext3 += "     data-ad-client=\"ca-pub-9842842191946147\" ";
adtext3 += "     data-ad-slot=\"3948034566\"></ins>";
adtext3 += "<script>";
adtext3 += "(adsbygoogle = window.adsbygoogle || []).push({});";
adtext3 += "</script>";

mathJaXImgAnchor = "<a href=\"http://www.mathjax.org/\" style=\"text-align:center; vertical-align:middle;\"><img style='width:128px; height:37px;' src='http://onemathematicalcat.org/graphics/MathJaxBadge.gif' border=\"0\" alt='Powered by MathJax' title='Powered by MathJax' /></a>";
jsxGraphImgAnchor = "<a href=\"http://jsxgraph.uni-bayreuth.de/wp/index.html\" style=\"text-align:center; vertical-align:middle;\"><img style='width:128px; height:37px;' src='http://onemathematicalcat.org/graphics/jsxgraphLogo.png' border=\"0\" alt='JSXGraph' title='JSXGraph' /></a>";

/* all footers replaced by this common footer, March 2016 */
function commonFooter() {
    var text;
    text = botTable();
    text += "<table style='margin-bottom:40px; margin-top:20px; width:100%;'>";
    text += "<tr><td style='text-align:left; vertical-align:bottom;'>" + foot1() + "</td>";
    text += "<td id='tdMathJaXFooter' style='text-align:center; vertical-align:bottom;'>" + mathJaXImgAnchor + "<br />beautiful math</td>";
    text += "<td id='tdJSXGraphFooter' style='text-align:center; vertical-align:bottom;'>" + jsxGraphImgAnchor + "<br />beautiful graphics</td>";
    text += "<td id='tdTermsOfUseFooter' style='text-align:right; vertical-align:bottom;'>" + foot3() + "<td></tr>";
    text += "</table>";
    return text;
}

// Added next to my "Fun Facts" near the footer, 1/24/18, so there is still an Adsense presence on my page (but at bottom)
// This way, I can get the benefit of "hits" without bothering the reader.
footerGoogleAdSense = "<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script><ins class='adsbygoogle' style='display:inline-block;width:300px;height:250px;' data-ad-client='ca-pub-9842842191946147' data-ad-slot='5579803390'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>";

// MyLiveChat installed 1/28/2018
// MyLiveChatStr = "<script type='text/javascript'>function add_chatinline(){var hccid=84132055;var nt=document.createElement('script');nt.async=true;nt.src='https://mylivechat.com/chatinline.aspx?hccid='+hccid;var ct=document.getElementsByTagName('script')[0];ct.parentNode.insertBefore(nt,ct);} add_chatinline(); </script>";
MyLiveChatStr = "";

function botTable() {
    var string;
    string = "<a name='justBeforeFunFact'><div id='botTableDiv' style='margin-left:auto; margin-right:auto;'><table style=\"width:80%; padding-bottom:0px; padding-top:40px; text-align:center;margin-left:auto;margin-right:auto;\"><tr>";
    string += "<td style='padding-right:20px;'>" + footerGoogleAdSense + "</td>";
    string += "<td id='tdBlurbFooter' style='text-align:center;'>Wouldn't it be great<br />if ads gave the best performance<br />at the <em>bottom</em> of pages?<br /><br />No distraction<br />when you're trying to<br />get your information...<br /><br />It would certainly<br />make web surfing<br />more enjoyable for <em>me</em>!</td>"
    string += "<td id='tdFunFactFooter' style=\"padding-right:20px; font-family: 'Comic Sans MS', cursive;\">";
    string += "<div style=\"border:3px solid green; width:440px; margin-left:auto; margin-right:auto;\">";
    string += "<div style=\"border:3px solid purple;\">";
    string += "<table style='width:440px; height:250px;'>";
    string += "<tr><td style='font-size:small; height:40px; padding-top:0px; padding-bottom:7px; text-align:center; vertical-align:middle;'>A random " + funFact() + " about Dr. Fisher Burns<br />(the creator of this web site):</td></tr>";
    string += "<tr><td style='font-size:medium; text-align:center;'>" + getToKnowMe() + "</td></tr>";
    string += "<tr><td style='height:20px; font-size:small; text-align:center; padding-top:7px; padding-bottom:3px; vertical-align:bottom;'><a href=\"http://www.onemathematicalcat.org/linkUnderMainTitle.htm\">Need a break? Click here for more fun facts.</a></td></tr>";
    string += "</table>";
    string += "</div></div></td>";
    string += "</tr></table></div>";
    string += MyLiveChatStr;
    return string;
}

// CAROL:  copy this from other auxiliary file to restore to original!
// I'm fiddling with it to try and get the same output as in my MathJax/TeX document!!

function loadMathJax() {
    var text;
    text = "<script type=\"text/x-mathjax-config\">";
    text += "  MathJax.Hub.Config({";
    text += "    extensions: [\"TeX/cancel.js\"],";
    text += "    tex2jax: {";
    text += "      inlineMath: [ ['$','$'] ],";
    text += "      displayMath: [ ['$$','$$'] ],";
    text += "      processEscapes: true";
    text += "}});";
    text += "<\/script>";
    text += "<script type='text/javascript' src='/MathJax2_7_1/MathJax.js?config=TeX-AMS_CHTML'>";
    text += "<\/script>";
    return text;
}

function loadJSXGraph() {
    var text;
    text = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/jsxgraph0/distrib/jsxgraph.css\" />";
    text += "<script type=\"text/javascript\" src=\"/jsxgraph0/distrib/jsxgraphcore.js\"><\/script>";
    return text;
}

var clickOnNewProblem = "Click on &ldquo;new problem&rdquo; to get started!";
var pracParticularProbType = "Want to practice a particular problem type?";

var probInstructionsTypeInAns = "To get a randomly-generated practice problem,<br/>";
probInstructionsTypeInAns += "click the &ldquo;new problem&rdquo; button above.<br />";
probInstructionsTypeInAns += "Type your answer in the box below,<br />";
probInstructionsTypeInAns += "and then press &ldquo;Enter&rdquo;.";

var probInstructionsRadioButton = "To get a randomly-generated practice problem,<br/>";
probInstructionsRadioButton += "click the &ldquo;new problem&rdquo; button above.<br />";
probInstructionsRadioButton += "Select the correct radio button below,<br />";
probInstructionsRadioButton += "and then press &ldquo;Enter&rdquo;.";

var probInstructionsUntimed = "To get a randomly-generated practice problem,<br/>";
probInstructionsUntimed += "click the &ldquo;new problem&rdquo; button above.<br />";
probInstructionsUntimed += "Think about your answer,<br />";
probInstructionsUntimed += "and then press &ldquo;Enter&rdquo;.";

var typeInAnsInstructions = "Type your answer here, and then press &ldquo;Enter&rdquo;:";

var timingButtonInstructions1 = "Want to time yourself?";
var timingButtonInstructions2 = "When you &ldquo;End Timing&rdquo; you'll get a summary sheet of your results. Good luck!";
var worksheetInstructions = "";

var typeDesiredNumWkshtProblems = "Type the desired number of worksheet problems here:";
var typeExtraSpaceWkshtProblems = "Want some extra work-space for each problem?<br />Type the desired amount here (units are pixels):";

/* for ad at top of page */
var adtext = "<script type=\"text/javascript\"><!--";
adtext += "\n";
adtext += "google_ad_client = \"pub-9842842191946147\";";
adtext += "google_ad_slot = \"4582603325\";";
adtext += "google_ad_width = 728;";
adtext += "google_ad_height = 90;";
adtext += "//-->";
adtext += "</script>";
adtext += "<script type=\"text/javascript\" src=\"http://pagead2.googlesyndication.com/pagead/show_ads.js\"></script>";


function myHeaderCalc() {
    return "";
}

function myHeaderPreCalc() {
    return "";
}

function myHeader2PreCalc() {
    return "";
}

function videos() {
    var string = "<a href='../../movies/movies_toc.htm'>Videos:<br />How to use this website</a>";
    return string;
}

function rentalHome() {
    var string;
    string = "Enjoy our &ldquo;Hill Cottage&rdquo;<br /><a href=\"../../MHome2/RentHome.htm\">Vacation Rental Home</a>";
    return string;
}

function website_search() {
    var str;
    str = "<style type=\"text/css\">";
    str += "@import url(http://www.google.com/cse/api/branding.css);";
    str += "</style>";
    str += "<div class=\"cse-branding-bottom\" style=\"border-radius:10px; padding-left:7px;padding-top:7px;padding-bottom:10px;padding-right:0px;width:300px;background-color:#999999;color:#000000\">";
    str += "  <div class=\"cse-branding-form\">";
    str += "    <form action=\"http://www.google.com/cse\" id=\"cse-search-box\" target=\"_blank\">";
    str += "      <div>";
    str += "        <input type=\"hidden\" name=\"cx\" value=\"partner-pub-9842842191946147:vgql7d-ioid\" />";
    str += "        <input type=\"hidden\" name=\"ie\" value=\"ISO-8859-1\" />";
    str += "        <input type=\"text\" name=\"q\" size=\"31\" value=\"search my entire site\" />";
    str += "        <input type=\"submit\" name=\"sa\" value=\"Search\" />";
    str += "      </div>";
    str += "    </form>";
    str += "  </div>";
    str += "  <div class=\"cse-branding-logo\">";
    str += "    <img src=\"http://www.google.com/images/poweredby_transparent/poweredby_999999.gif\" alt=\"Google\" />";
    str += "  </div>";
    str += "  <div class=\"cse-branding-text\">";
    str += "    Custom Search";
    str += "  </div>";
    str += "</div>";
    // str += "<div style='text-align:center;font-size:small;margin-top:2px;'>Have other math questions? &nbsp; Search my site.</div>";
    return str;
}

function table_structure2(text1, text2, text3) { // for footer
    var string;
    string = "<table style=\"width:1035px; background-image: url(http://www.onemathematicalcat.org/css/furley_bg.png); padding-left:0px; padding-right:0px; margin-top:10px; \">";
    string += "<tr>";
    string += "<td style=\"vertical-align:top;    width:33%; text-align:left;\"   >" + text1 + "</td>";
    string += "<td style=\"vertical-align:middle; width:34%; text-align:center;\" >" + text2 + "</td>";
    string += "<td style=\"vertical-align:top;    width:33%; text-align:right;\"  >" + text3 + "</td></tr></table>";
    return string;
}

function botTableCalc() {
    /*
    var string;
    string = "<div style='width:1032px;'><table style=\"padding-bottom:0px; padding-top:40px; text-align:center;margin-left:auto;margin-right:auto;\"><tr>";
    string += "<td style=\"padding-right:20px; font-family: 'Comic Sans MS', cursive;\">";
    string += "<div style=\"border:3px solid green; width:600px;\">";
    string += "<div style=\"border:3px solid purple;\">";
    string += "<table style='width:100%; height:150px;'>";
    string += "<tr><td style='font-size:small; padding-top:0px; padding-bottom:7px; text-align:center; vertical-align:top;'>A random "+funFact()+" about Dr. Fisher Burns (the creator of this web site):</td></tr>";
    string += "<tr><td style='font-size:large; text-align:center;'>"+getToKnowMe()+"</td></tr>";
    string += "<tr><td style='font-size:small; text-align:center; padding-top:7px; padding-bottom:3px; vertical-align:bottom;'><a href=\"../../linkUnderMainTitle.htm\">Need a break? Click here for more fun facts.</a></td></tr>";
    string += "</table>";
    string += "</div></div></td>";
    string += "</tr></table></div>";
    */
    return "";
}

function rand(a, b) {
    // randomly selects an integer between integers  a  and  b
    var c = Math.floor((b + 1 - a) * Math.random() + a);
    return c;
}

function chsColor() {
    var hexmat, col1, col2, col3, col4, col5, col6, hexcolor;
    hexmat = ["0", "1", "2", "3", "4", "5", "6", "7", "9", "A", "B", "C", "D", "E", "F"];
    col1 = hexmat[rand(0, 14)];
    col2 = hexmat[rand(0, 14)];
    col3 = hexmat[rand(0, 14)];
    col4 = hexmat[rand(0, 14)];
    col5 = hexmat[rand(0, 14)];
    col6 = hexmat[rand(0, 14)];
    hexcolor = "#" + col1 + col2 + col3 + col4 + col5 + col6; // global variable
    return hexcolor;
}

function funFact() {
    var str;
    str = "<span style='font-size:large; font-weight:bold;'>&nbsp;";
    str += "<span style='color:" + chsColor() + ";'>F</span>";
    str += "<span style='color:" + chsColor() + ";'>U</span>";
    str += "<span style='color:" + chsColor() + ";'>N</span>&nbsp;";
    str += "<span style='color:" + chsColor() + ";'>F</span>";
    str += "<span style='color:" + chsColor() + ";'>A</span>";
    str += "<span style='color:" + chsColor() + ";'>C</span>";
    str += "<span style='color:" + chsColor() + ";'>T</span>&nbsp;</span>";
    return str;
}

function getToKnowMe() {
    var numCases, str, chs;
    // a completely random version, for each content page
    // I've chosen a few favorites; complete list is in linkUnderMainTitle.htm
    // All the ones here have a MAX of 4 lines
    numCases = 80; // update every time you add something new, Carol!
    chs = rand(1, numCases);
    switch (chs) {
        case 1:
            str = "My favorite number is 7.";
            break;
        case 2:
            str = "I was born on August 28, 1958.<br />(You do the math!)";
            break;
        case 3:
            str = "I have one biological daughter, Julia.<br /><br />She got her undergraduate degree<br />in math from Carleton College.<br />";
            str += "She got both her<br />Masters in Statistics<br />"
            str += "and PhD in Linguistics<br />from the University of Arizona."
            break;
        case 4:
            str = "When we fostered a litter of kittens,<br />I named the tiniest one Epsilon.<br /><br />";
            str += "(It's a math thing.<br />If you've had Calculus, you'll get it.)";
            break;
        case 5:
            str = "I have lived in:<br /><br />Lenox, Massachusetts;<br />Norman, Oklahoma;<br />Pocatello, Idaho;<br />Monterey, Massachusetts.<br /><br />";
            str += "I'm currently living in Sahuarita, Arizona.<br />I consider myself a country girl.";
            break;
        case 6:
            str = "I (try to) walk three to four miles each day.<br />";
            str += "I do some of my best thinking on my walks.";
            break;
        case 7:
            str = "I love to swing.<br /><br />(On swings.<br />I love tree swings.)";
            break;
        case 8:
            str = "I have a lifelong love affair with trees.<br />";
            str += "One of my dreams is to live in a tree house.";
            break;
        case 9:
            str = "I play a mean game of ping-pong.<br />Low, fast, defensive.<br /><br />";
            str += "When I was an undergrad at UMass,<br />I drove the guys crazy.<br />";
            str += "I'd just return everything.<br />Eventually, they'd slam it off the table!";
            break;
        case 10:
            str = "My favorite color is green.<br />(Green, blue&#151;pretty close.)";
            break;
        case 11:
            str = "I believe we have great power to heal ourselves.<br /><br />";
            str += "I think the greatest health advances<br />in the next century<br />will come not from drugs,<br />";
            str += "but from learning to tap into<br />our own abilities to self-heal.";
            break;
        case 12:
            str = "I love chocolate.<br />Milk, dark, white&#151;I'm not picky.<br /><br />";
            str += "(I love Idaho Spud bars.<br />They're hard to find out my way...)";
            break;
        case 13:
            str = "I call one of my daily philosophies<br />&ldquo;the little Prince approach&rdquo;";
            str += " (from <i>le Petit Prince</i>).<br /><br />";
            str += "I just try to accomplish a little bit every day.<br />";
            str += "After a while, it adds up.<br />(My web site is a good example.)";
            break;
        case 14:
            str = "I vacuum (or wet-wipe floors)<br />to keep my life in order.<br /><br />";
            str += "(My house filters never get very dirty,<br />";
            str += "since I vacuum so much.)";
            break;
        case 15:
            str = "My Myers-Briggs personality type is INTJ:<br />Introverted, iNtuitive, Thinking, Judging.";
            break;
        case 16:
            str = "I love a lot of Elton John's songs,<br />particularly the older stuff<br />he did with Bernie Taupin.<br /><br />";
            str += "A few favorites are<br />&ldquo;Seasons&rdquo;, &ldquo;Friends&rdquo;, and &ldquo;Michelle's Song&rdquo;.<br /><br />";
            str += "(I play them on the piano, and add harmonies.<br />I'm an alto.)";
            break;
        case 17:
            str = "I love to sing&#151;I'm an alto.<br /><br />";
            str += "I've sung in many choirs and choruses<br />";
            str += "throughout my life.<br />";
            str += "Really tight acapella is the best!";
            break;
        case 18:
            str = "I went to Monument Mountain Regional High School<br />in Great Barrington, Massachusetts.<br /><br />";
            str += "(I was the valedictorian.<br />I hiked to the top of Monument Mountain<br />to write my speech.)";
            break;
        case 19:
            str = "I type really fast (well over 100 words per minute).<br /><br />";
            str += "In college, I typed papers to make money,<br />specializing in math typing.<br />";
            str += "I still have my selectric typewriter<br />with custom-made math elements.";
            break;
        case 20:
            str = "My daughter and I read books together<br />every day of her life<br />";
            str += "(without missing a day) until about age ten.<br /><br />";
            str += "At first, I read to her.<br />Later on, we read to each other.<br />";
            str += "We have an enormous library of children's books.";
            break;
        case 21:
            str = "My strong preference is to get to bed early<br />and get up early.<br />";
            str += "I've always been a morning person.<br /><br />";
            str += "During graduate school, I'd get up at 2-3 AM<br />";
            str += "(while my daughter was sleeping) to get things done.";
            break;
        case 22:
            str = "I was a cell-phone late-comer.<br />";
            str += "I prefer email to talking on the phone.<br />";
            str += "I'm learning to appreciate texting.";
            break;
        case 23:
            str = "I want to hike<br />every national park in the United States.<br /><br />";
            str += "I love to hike.";
            break;
        case 24:
            str = "My daughter gets me to see the world.<br /><br />";
            str += "When she spent a year in Taiwan, I visited her.<br />";
            str += "When she volunteered at an orphanage in Peru,<br />";
            str += "we hiked Colca Canyon (intense!) and Machu Picchu.";
            break;
        case 25:
            str = "I was married for twenty years,<br />then for ten years I had a husbandnot.<br /><br />";
            str += "On September 23, 2011 I married Ray Burns.<br /><br />";
            str += "I have been blessed<br />with wonderful partners in my life.";
            break;
        case 26:
            str = "I drink whole milk and I cook with real butter.<br /><br />";
            str += "I try to avoid anything<br />with &ldquo;partially hydrogenated&rdquo; in the ingredients.";
            break;
        case 27:
            str = "I believe in moderation in all things.<br /><br />";
            str += "(Even moderation in moderation.<br />";
            str += "You need to go overboard on some stuff,<br />like math-on-the-web.)";
            break;
        case 28:
            str = "I'm a hopeless romantic.<br /><br />";
            str += "I love romantic comedies.<br /><br />";
            str += "On my walks, I sometimes find heart-shaped rocks.<br />";
            str += "(Had a great pile near the herb garden<br />at my former Hill Cottage.)";
            break;
        case 29:
            str = "The &ldquo;JVF&rdquo; in my name stands for<br />&ldquo;Jane Vreeland Fisher&rdquo;.<br /><br />";
            str += "Jane is my father's birth-mother's name.<br />";
            str += "Vreeland is my maiden name.<br />";
            str += "Fisher is the name from my first marriage.";
            break;
        case 30:
            str = "I had my first pair of glasses by age 7.<br /><br />";
            str += "As a teenager and younger adult,<br />I wore hard contacts.<br />";
            str += "(I didn't have the patience for the soft ones.)<br /><br />";
            str += "I was classic&#151;at age 40, I needed bifocals.";
            break;
        case 31:
            str = "I love velcro.";
            break;
        case 32:
            str = "I have loved a golden retriever<br />named Jesse.<br /><br />";
            str += "(Photos of her are <a href=\"http://www.onemathematicalcat.org/photos_Jesse.htm\" target=\"_blank\">here</a>;<br />the link opens in a new window.)";
            break;
        case 33:
            str = "I like puzzles.<br />";
            str += "One of my students at Miss Hall's School<br />gave me a ";
            str += "Japanese puzzle box,<br />which I treasure.";
            break;
        case 34:
            str = "I always choose natural over synthetic.<br />";
            str += "I always want my home to be<br />filled with wood, stone, tile.<br /><br />";
            str += "(My Dad's dad made woodenware,<br />using tiny wooden pegs instead of nails.)";
            break;
        case 35: // updated in July 2012 to over 9000
            // updated in October 2014 to over 10000
            // updated in March 2016 to over 11000
            str = "Since 1999,<br />I've put about 11,000 hours into this site.<br />(More every day.)<br /><br />";
            str += "It's my passion.<br />It gives meaning to my life.<br /><br />";
            str += "I didn't have any advertising until October 2010.";
            break;
        case 36:
            str = "When I lived in Massachusetts,<br />I used to love to sit<br />";
            str += "in front of my woodstove<br />";
            str += "and collect my thoughts.";
            break;
        case 37:
            str = "I believe that out of discipline comes flexibility.";
            break;
        case 38:
            str = "People ask me if it was hard to rent my home.<br />";
            str += "A little.<br /><br />";
            str += "But, the income helped me<br />pursue my math-on-the-web passion<br />";
            str += "(and eat at the same time).";
            break;
        case 39:
            str = "I prefer very casual attire.<br />";
            str += "(Used to be&#151;I'd wear jeans whenever possible.)<br /><br />";
            str += "Now, I often wear dresses<br />";
            str += "(as a gift to my husband).";
            break;
        case 40:
            str = "I keep my email inbox practically empty.<br /><br />";
            str += "If I get more than three to four emails in there,<br />";
            str += "I have to go thru them immediately.<br />";
            str += "(Most days, I check email very frequently.)";
            break;
        case 41:
            str = "I'm not a good multi-tasker.<br />";
            str += "But, I'm a fantastic single-tasker.";
            break;
        case 42:
            str = "I like things that are in my locus of control.<br /><br />";
            str += "(For example, I prefer a hand can-opener<br />to an electric one.)";
            break;
        case 43:
            str = "I'm the least picky eater I know.<br /><br />";
            str += "Make me something,<br />and I'll enjoy it and be appreciative.<br /><br />";
            str += "(If it's spicy, I'll definitely need sour cream.)";
            break;
        case 44:
            str = "I was very thin<br />(with no effort on my part)<br />until about age 40.<br /><br />";
            str += "At that point, my metabolism seemed to change.<br />Now I have to work on maintaining a good weight.";
            break;
        case 45:
            str = "TeX transformed my professional life<br />the first time.<br /><br />";
            str += "MathML + MathPlayer transformed it<br />the second time.<br /><br />";
            str += "MathJax + JSXGraph has now transformed it<br />for the third time.";
            break;
        case 46:
            str = "I'm very organized.<br />";
            str += "(I love my label-maker.)";
            break;
        case 47:
            str = "For breakfast,<br />I typically have bran cereal or oatmeal.<br /><br />";
            str += "(It's best with blueberries or raspberries,<br />that I picked myself and froze.)";
            break;
        case 48:
            str = "The O'Reilly &ldquo;in-a-nutshell&rdquo; books are my favorites<br />";
            str += "for learning any new technical skill.<br /><br />";
            str += "(I always give back to the publisher<br />by submitting errata.<br />";
            str += "I'm a good proof-reader.<br />I have keen attention to detail.)";
            break;
        case 49:
            str = "Crosswinds.net has been my web server<br />from the very beginning.<br /><br />";
            str += "I love them.<br />There's a real person on the other end.";
            break;
        case 50:
            str = "When I use my credit card,<br />";
            str += "I immediately subtract the amount in my checkbook.<br /><br />";
            str += "When the bill comes,<br />I put the same check # by each entry.<br /><br />";
            str += "I never get any surprises,<br />and I always live within my means.";
            break;
        case 51:
            str = "I'm proud of my &ldquo;starter-bag&rdquo; concept<br />for the woodstove.<br /><br />";
            str += "I get paper (not plastic) bags when I food-shop.<br />";
            str += "Fill them with dry sticks from our property.<br />";
            str += "Plop one in the woodstove, light the bag&#151;<br />effortless fire-starting!";
            break;
        case 52:
            str = "I've crocheted a bunch of afghans.<br />";
            str += "Kept a couple, the rest were gifts.<br />";
            str += "Mostly, I make granny-square afghans.";
            break;
        case 53:
            str = "I've sewed a lot.<br />";
            str += "Clothes, crafts, quilts, curtains.<br /><br />";
            str += "I made a gorgeous baptismal gown for my daughter.<br /><br />";
            str += "(My mice Christmas ornaments<br />are one of my all-time favorites.)";
            break;
        case 54:
            str = "One of my greatest frustrations/sadnesses<br />is that I haven't been able to monetize this site.<br /><br />";
            str += "Donations and ads don't seem to work.<br />";
            str += "(Now, I'm trying Amazon.)";
            break;
        case 55:
            str = "I had back pain in my early adult life.<br />";
            str += "Used to say: &ldquo;I inherited it from my Dad.&rdquo;<br />";
            str += "My back would just &ldquo;go out&rdquo; and I could barely move.<br /><br />";
            str += "Since reading John Sarno's book (Healing Back Pain),<br />I've had no back problems at all.<br /><br />";
            str += "(It helps to believe in<br />the body's ability to heal itself, which I do.)";
            break;
        case 56:
            str = "I love desitin.<br /><br />";
            str += "Know how the Dad thinks windex can cure anything,<br />";
            str += "in &ldquo;My Big Fat Greek Wedding&rdquo;?<br />";
            str += "That's me, with desitin.";
            break;
        case 57:
            str = "In Massachusetts, we composted all our food scraps (no meat).<br />";
            str += "(Jesse got the meat scraps,<br />";
            str += "so they weren't wasted.)<br /><br />";
            str += "I made my own compost bin<br />using large rocks from our property.<br />";
            break;
        case 58:
            str = "Here's my undergraduate degree:<br /><br />Bachelor of Science,<br />Magna Cum Laude,<br />Civil Engineering,<br />";
            str += "University of Massachusetts, Amherst,<br />February 1981";
            break;
        case 59:
            str = "I got a Master's degree<br />enroute to my doctorate:<br /><br />Master of Arts in Mathematics,<br />";
            str += "University of Oklahoma, Norman,<br />May 1984<br />(GPA: 4.0/4.0)";
            break;
        case 60:
            str = "Here's my doctorate:<br /><br />Doctor of Arts in Mathematics,<br />";
            str += "Idaho State University, Pocatello,<br />May 1994<br />(GPA: 4.0/4.0)";
            break;
        case 61:
            str = "My dissertation title:<br /><br />";
            str += "&ldquo;Detecting Hidden Periodicities<br />in Discrete-Domain Data&rdquo;<br /><br />";
            str += "(in other words:<br />finding hidden patterns in data sets)";
            break;
        case 62:
            str = "Every major appliance<br />that I've purchased in my adult life,<br />";
            str += "I've researched through Consumer Reports first.<br /><br />";
            str += "I trust them completely.<br />";
            str += "They've never let me down.";
            break;
        case 63:
            str = "I'll never forget when I saw my first stereogram.<br />";
            str += "It was hard for me&#151;took about 3 hours.<br />";
            str += "What a thrill when that 3D image<br />emerged from the page!<br />";
            str += "Now, it's easy.<br /><br />";
            str += "The technique I use:<br />glasses off; touch nose to book;<br />pull away <em>very slowly</em> without focusing";
            break;
        case 64:
            str = "I have one older brother,<br />one older sister (now deceased),<br />and two younger sisters.<br />";
            str += "<br />(So, I'm a middle child.)";
            break;
        case 65:
            str = "Every day, I try to do something good<br />for my mind, my body, and my spirit.";
            break;
        case 66:
            str = "I often do face exercises on my walks.<br /><br />";
            str += "Push lower lip over upper to stretch out neck.<br />";
            str += "Mouth and eyes WIDE open.<br />(and so on)<br /><br />";
            str += "(I have to make sure no cars or people are nearby.<br />";
            str += "It's pretty scary looking.)";
            break;
        case 67:
            str = "I love whipped cream.<br /><br />";
            str += "For example, people might say to me:<br />";
            str += "&ldquo;Would you like some hot chocolate<br />with your whipped cream?&rdquo;<br /><br />";
            str += "&ldquo;Would you like some tapioca<br />with your whipped cream?&rdquo;<br />";
            str += "(I also love tapioca.)";
            break;
        case 68:
            str = "I have three wonderful stepchildren:<br />";
            str += "Joshua, Marybelle, and Bethany.<br /><br />";
            str += "They have been incredibly loving and patient with me<br />";
            str += "as I've come into their family.";
            break;
        case 69:
            str = "my #1 parenting philosophy:<br /><br />";
            str += "if everything you do is done with love as the basis,<br />";
            str += "then you can make a bunch of mistakes<br />";
            str += "and everything will still turn out fine";
            break;
        case 70:
            str = "Just because something ends<br />doesn't mean it wasn't good.<br /><br />";
            str += "Something can end<br />";
            str += "that was good.";
            break;
        case 71:
            str = "Of course I want you to look at my ads.<br />";
            str += "But, not while you're thinking about math.<br /><br />";
            str += "So, I keep my big ads (and fun facts)<br />at the top/bottom,<br />";
            str += "so you won't have any distraction<br />in the middle (math) parts.<br />";
            str += "(Sometimes there's a small &lsquo;support me&rsquo; link<br />in the middle.)";
            break;
        case 72:
            str = "As a kid,<br />I sucked my thumb for a loooonnngg time.<br />";
            str += "(My Mom can't fully recall,<br />but we think I may have been about age 7<br />when I stopped.)<br /><br />";
            str += "I'd always hold a piece of fabric close to my nose.<br />"
            str += "(Fresh pillowcases were the best.)";
            break;
        case 73:
            str = "I ran a lot as a young adult.<br /><br />";
            str += "My best five-mile time<br />was in the Rainbow Couples Classic<br />";
            str += "in mid-Kansas:<br />30 minutes, 12 seconds<br />";
            str += "(just a bit slower than 6-minute pace)";
            break;
        case 74:
            str = "I started playing the piano at about age 6.<br />";
            str += "I'm an excellent sight-reader.<br /><br />";
            str += "I've accompanied many choirs/choruses<br />over the years.<br /><br />";
            str += "I love to play duets<br />with my Mom, brother, and husband.";
            break;
        case 75:
            str = "I made about 600 paper flowers<br />for my daughter's wedding.<br /><br />";
            str += "Did a couple months of research<br />on different types and techniques.<br />";
            str += "Then I made up samples, had color charts,<br />and Julia &lsquo;placed an order&rsquo;!";
            break;
        case 76:
            str = "If it's just me, I won't cook for myself.<br />";
            str += "But, I love to cook for my family.<br /><br />";
            str += "My new family is especially appreciative of my meals.<br />";
            str += "We have a wonderful family dinner every night.";
            break;
        case 77:
            str = "If I'm uninspired, here are my fall-back meal plans:<br /><br />";
            str += "Meatball Monday (pasta); Taco Tuesday;<br />";
            str += "Wokky Wednesday;<br />Tater Thursday (super potatoes);<br />";
            str += "Fishy Friday; Soupy Saturday;<br />";
            str += "Scrambly Sunday (like quiche)";
            break;
        case 78:
            str = "I get lost in parking lots.<br />";
            str += "I've had to walk around entire malls<br />looking for my car.<br /><br />";
            str += "To avoid this, I have a technique:<br />";
            str += "Before leaving the car,<br />say ALOUD something like<br />&lsquo;I'm right by the &lt;blah&gt;&rsquo;.";
            break;
        case 79:
            str = "I met my current husband through dancing.<br /><br />";
            str += "We <em>love</em> to social dance:<br />";
            str += "waltz, foxtrot, rumba, tango, Viennese, cha-cha, swing, polka, quickstep, more.<br /><br />";
            str += "(He loves to compete&#151;I don't.)";
            break;
        case 80:
            str = "I hold my pencil the wrong way.<br />";
            str += "I used to have meticulous hand-writing,<br />";
            str += "but hurt myself writing up thousands of index cards.<br /><br />";
            str += "I now <em>know</em> how to hold it correctly,<br />but don't (old habits die hard).";
            break;
    } // end switch
    return str;
}



function myFooterCalc() { // use in Calculus course
    var text = commonFooter();
    /*
    var text;
    text = botTableCalc();
    text += "<table style='width:1035px; margin-top:30px;'><tr>";
    text += "<td style='text-align:center; width:50%; border:1px solid black;'>"+videos()+"</td>";
    text += "<td style='text-align:center; width:5o%; border:1px solid black;'>"+rentalHome()+"</td></tr></table>";
    text += table_structure2(foot1(),foot2(),foot3());
    */
    return text;
}

/* must edit #3 in Geometry separately */

function linksBelowHomepageLink() { // this one has the cycling ads in it
    var str;
    str = "&nbsp;<table id='headerTable' style='width:1024px; margin-bottom:10px; padding:10px;' cellspacing='0'><tr>";
    str += "<td style='vertical-align:top; width:410px;'>";
    str += "<a href='http://www.onemathematicalcat.org/index.htm'><img src='http://www.onemathematicalcat.org/logo162pxTrans.png' style='border-style:none;' /></a>";
    str += "<ul><li style='margin-top:4px;'><a href='http://www.onemathematicalcat.org/algebra_book/online_problems/table_of_contents.htm'>Algebra I</a>  &nbsp; <a href='http://www.onemathematicalcat.org/Math/Geometry_obj/table_of_contents_geom.htm'>Geometry</a> &nbsp; <a href='http://www.onemathematicalcat.org/Math/Algebra_II_obj/table_of_contents.htm'>Algebra II</a></li>";
    str += "<li><a href='http://www.onemathematicalcat.org/Math/Precalculus_obj/tableOfContentsPreCalculus.htm'>Precalculus</a> &nbsp; <a href='/Math/Calculus_obj/tableOfContentsCalculus.htm'>Calculus</a></li>";
    str += "<li style='margin-top:4px;'>the &#x2764; of <em>all</em> my lessons: &nbsp; <a href='http://www.onemathematicalcat.org/cat_book.htm'>the cat book</a></li>";
    str += "</ul>";
    str += "<center>" + website_search() + "</center><br />";
    str += "<center>Support this site: <a href='http://amzn.to/2FrfvKY' title='Amazon affiliate link' target='_blank'>Amazon</a> / <a href='http://www.onemathematicalcat.com/donateWithBenefits.htm'>more ways</a><br />";
    // Bravenet Remote Service Code 
    str += "<big><big>&#9786;</big></big> <a href=\"http://pub1.bravenet.com/guestbook/57037237/\">Sign my Guestbook</a></center></td>"; str += "<td style='width:614px;'><table id='adTable' style='background-color:#FFFFF0; border:2px solid grey; border-radius:15px; width:614px;' cellspacing='0'><tr>";
    str += "<td style='vertical-align:middle; padding-left:10px; width: 200px; text-align:center;'>";
    str += "<div id='adImg'>" + adImgMat[currentPageAd] + "</div><div id='adLink'>" + adLinkMat[currentPageAd] + "</div></td>";
    str += "<td style='border-right:1px solid black; padding-left:10px; padding-right:10px; width:100px; font-size:small; text-align:center;'>";
    str += "<button onclick='moreAds();' style='border-radius:15px; padding:8px; background-color:#3333FF'><div id='numOnAdButton' style='color:red; font-size:xx-large;'>#" + (currentPageAd + 1) + "</div><div style='color:red'>of " + numAdsglobal + "</div></button><br />Click<br />for more<br /><br />#12 is me!</td>";
    str += "<td style='width:314px;'>";
    str += "<table style='height:100%; width:100%;' cellspacing='0'>";
    str += "<tr><td style='padding-bottom:5px; text-align:center; height:210px; border-bottom:1px solid black;'><div id='blurb'>" + blurbMat[currentPageAd] + "</div></td></tr>";
    str += "<tr><td style='text-align:center; padding:10px;'><a style='border:2px solid grey; border-radius:15px; padding:5px; background-color:#F5F5F5;' href='http://www.onemathematicalcat.com/donateWithBenefits.htm'>Buy me some velcro?</a></td></tr>";
    str += "<tr><td style='text-align:center; padding-bottom:10px;'><a href='http://www.onemathematicalcat.org/donation_thank_you.htm'>Have a wonderful day!</a></td></tr>";
    str += "</table>";
    str += "</td></tr></table>";
    str += "<center><span style='font-size:small; color:red;'>(The single misspelled word on each slide is intentional.  Click to slide #1 for instructions.)</span></center>";
    str += "</td></tr></table>";
    return str;
}


function linksBelowHomepageLinkCalc() { // links from Calculus curriculum
    /* changed 1/21/18 */
    var str;
    str = "&nbsp;<table id='headerTable' style='width:1024px; margin-bottom:10px; padding:10px;' cellspacing='0'><tr>";
    str += "<td style='vertical-align:top; width:410px;'>";
    str += "<a href='http://www.onemathematicalcat.org/index.htm'><img src='http://www.onemathematicalcat.org/logo162pxTrans.png' style='border-style:none;' /></a>";
    // str += "<ul><li>This is #" + GVSpecificNumInSeqCalc + " of " + GVTotalNumInSeqCalc + " in: &nbsp; <a href='/Math/Calculus_obj/tableOfContentsCalculus.htm'>Calculus</a></li>";
    str += "<ul><li>A complete, free, online course: <a href='/Math/Calculus_obj/tableOfContentsCalculus.htm'>Calculus</a></li>";
    str += "<li style='margin-top:4px;'><a href='http://www.onemathematicalcat.org/algebra_book/online_problems/table_of_contents.htm'>Algebra I</a>  &nbsp; <a href='http://www.onemathematicalcat.org/Math/Geometry_obj/table_of_contents_geom.htm'>Geometry</a> &nbsp; <a href='http://www.onemathematicalcat.org/Math/Algebra_II_obj/table_of_contents.htm'>Algebra II</a> &nbsp; <a href='http://www.onemathematicalcat.org/Math/Precalculus_obj/tableOfContentsPreCalculus.htm'>Precalculus</a></li>";
    str += "<li style='margin-top:4px;'>the &#x2764; of <em>all</em> my lessons: &nbsp; <a href='http://www.onemathematicalcat.org/cat_book.htm'>the cat book</a></li>";
    //  str += "<li style='margin-top:4px;'><a href='http://youtu.be/4Ja28EQ2SdQ'>5-minute YouTube intro to Tree of Math</a></li>";
    str += "</ul>";
    str += "<center>" + website_search() + "</center>";
    str += "</td>";
    str += "<td>" + textForWhiteBox2() + "</td>";
    str += "</tr></table>";
    return str;
}

function linksBelowHomepageLinkIncome() {
    return "";
}

/* replaced with new version, 1/21/18 */

/*
function linksBelowHomepageLinkPreCalc() { // links from Precalculus curriculum
var str;
str = "<table style='width:1024px;'><tr>";
str += "<td style='vertical-align:top;'><img src='../../logo162pxTrans.png' style='border-style:none;'></td>";
str += "<td style='vertical-align:top;'><ul>";
str += "<li>this lesson is #"+GVSpecificNumInSeqPreCalc+" of "+GVTotalNumInSeqPreCalc+ " in: &nbsp; <a href=\"tableOfContentsPreCalculus.htm\">Precalculus</a></li>";
str += "<li style='margin-top:4px;'>also see: &nbsp; <a href=\"../../algebra_book/online_problems/table_of_contents.htm\">Algebra I</a> &nbsp; &nbsp; <a href=\"../../Math/Geometry_obj/table_of_contents_geom.htm\">Geometry</a> &nbsp; &nbsp; <a href=\"../../Math/Algebra_II_obj/table_of_contents.htm\">Algebra II</a>   &nbsp; &nbsp; <a href=\"../../Math/Calculus_obj/tableOfContentsCalculus.htm\">Calculus</a></li>";
  //str += "<li style='margin-top:4px;'><a href='http://youtu.be/4Ja28EQ2SdQ'>5-minute YouTube:</a> &nbsp; <a href='http://www.onemathematicalcat.org/pinball_home.htm'>Algebra Pinball</a>, tips for my lessons, more</li>";
str += "<li style='margin-top:4px;'>For a 5-minute YouTube intro on using this website, <a href='http://youtu.be/4Ja28EQ2SdQ'>click here</a>.</li>";
str += "<li style='margin-top:4px;'><a href=\"http://onemathematicalcat.org/webSiteIncome.htm\">Please support my site.</a> &nbsp; ";
str += "<a href='http://www.onemathematicalcat.org/donation_thank_you.htm'>Many thanks!</a></li>";
str += "<li style='margin-top:4px;'><a href='../../index.htm'>homepage for Tree of Math: Dr. Carol JVF Burns</a></li>";
str += "</ul>";
//str += numLineIncentive();
str += "<br /><br /><div style='width:460px; padding:3px; margin-left:auto; text-align:center; margin-right:auto;'>"+dailyNews+"</div>";
str += "</td>";
str += "<td style='text-align:center;'>"+donationGlobalTop()+"</td>";
str += "</tr></table>";
return str;
}
*/

function linksBelowHomepageLink2PreCalc() { // links from Precalculus curriculum
    var str;
    str = "<table><tr>";
    str += "<td style='vertical-align:top;'><img src='../../logo162pxTrans.png'' style='border-style:none;'></td>";
    str += "<td style='vertical-align:top;'><ul>";
    str += "<li>this lesson is #" + GVSpecificNumInSeqPreCalc + " of " + GVTotalNumInSeqPreCalc + " in: &nbsp; <a href=\"tableOfContentsPreCalculus.htm\">Precalculus</a></li>";
    str += "<li style='margin-top:4px;'>also see: &nbsp; <a href=\"../../algebra_book/online_problems/table_of_contents.htm\">Algebra I</a> &nbsp; &nbsp; <a href=\"../../Math/Geometry_obj/table_of_contents_geom.htm\">Geometry</a> &nbsp; &nbsp; <a href=\"../../Math/Algebra_II_obj/table_of_contents.htm\">Algebra II</a>   &nbsp; &nbsp; <a href=\"../../Math/Calculus_obj/tableOfContentsCalculus.htm\">Calculus</a></li>";
    str += "<li style='margin-top:4px;'>the &#x2764; of <em>all</em> my lessons: &nbsp; <a href='http://www.onemathematicalcat.org/cat_book.htm'>the cat book</a></li>";
    //str += "<li style='margin-top:4px;'><a href='http://youtu.be/4Ja28EQ2SdQ'>5-minute YouTube:</a> &nbsp; <a href='http://www.onemathematicalcat.org/pinball_home.htm'>Algebra Pinball</a>, tips for my lessons, more</li>";
    //str += "<li style='margin-top:4px;'>For a 5-minute YouTube intro on using this website, <a href='http://youtu.be/4Ja28EQ2SdQ'>click here</a>.</li>";
    str += "<li style='margin-top:4px;'><a href='../../index.htm'>homepage for Tree of Math: Dr. Carol JVF Burns</a></li>";
    str += "</ul></td></tr></table>";
    return str;
}

function foot1() {
    var str;
    str = "<small><script>document.write(\"last modified<br />\" + document.lastModified)</script><br>";
    str += "copyright 2004&#150;2018<br />Dr. Carol JVF Burns</small><br>";
    return str;
}

function foot2() {
    var str;
    str = donation();
    return str;
}


function foot3() {
    var str;
    str = "<!-- Creative Commons License -->";
    str = str + "<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc/2.5/\">";
    str = str + "<img alt=\"Creative Commons License\" border=\"0\" src=\"http://www.onemathematicalcat.org/graphics/cc_somerights.gif\" /></a><br />";
    str = str + "Please read my<br/><a href=\"http://www.onemathematicalcat.org/algebra_book/online_problems/terms_of_use.htm\">TERMS OF USE</a>";
    str = str + "<!-- /Creative Commons License -->";
    str = str + "<!-- <rdf:RDF xmlns=\"http://web.resource.org/cc/\"";
    str = str + "xmlns:dc=\"http://purl.org/dc/elements/1.1/\"";
    str = str + "xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">";
    str = str + "<Work rdf:about=\"\"><license rdf:resource=\"http://creativecommons.org/licenses/by-nc/2.5/\" />";
    str = str + "</Work><License rdf:about=\"http://creativecommons.org/licenses/by-nc/2.5/\">";
    str = str + "<permits rdf:resource=\"http://web.resource.org/cc/Reproduction\" />";
    str = str + "<permits rdf:resource=\"http://web.resource.org/cc/Distribution\" />";
    str = str + "<requires rdf:resource=\"http://web.resource.org/cc/Notice\" />";
    str = str + "<requires rdf:resource=\"http://web.resource.org/cc/Attribution\" />";
    str = str + "<prohibits rdf:resource=\"http://web.resource.org/cc/CommercialUse\" />";
    str = str + "<permits rdf:resource=\"http://web.resource.org/cc/DerivativeWorks\" /></License>";
    str = str + "</rdf:RDF> -->";
    return str;
}

var donationString = "<form action='https://www.paypal.com/cgi-bin/webscr' method='post'>";
donationString += "<input type='hidden' name='cmd' value='_s-xclick'>";
donationString += "<input type='hidden' name='hosted_button_id' value='5006438'>";
donationString += "<input type='image' src='https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'>";
donationString += "<img alt='' border='0' src='https://www.paypal.com/en_US/i/scr/pixel.gif' width='1' height='1'>";


function donation() {
    var string;
    string = "<center><a  href=\"../../linkUnderMainTitle.htm\"><img src=\"../../graphics/amazonDotComSmall.png\" /></a><br />";
    string += "<a href=\"../../linkUnderMainTitle.htm\">Support my site at no cost to you</a><br />";
    string += "No pain. No money. Many thanks.</center>";
    return string;
}


function donationTop() {
    var string;
    string = "<div style=\"text-align:center; width:315px; padding:5px; border:2px solid grey; background-color:white; margin-left:auto; margin-top:20px; border-radius:15px;\">";
    string += "My sister is selling her home in Lenox, MA:<br />";
    string += "<a href='http://www.zillow.com/homedetails/52-Hubbard-St-Lenox-MA-01240/59220987_zpid/'>Zillow: 52 Hubbard Street</a><br />";
    string += "I'm biased (since I grew up there), but<br /> I can't imagine a better place for a second home.<br />";
    string += "Get a renter/caretaker to live upstairs;<br />";
    string += "have your own place downstairs<br />for year-round enjoyment of the Berkshires.<br />";
    string += "(And, of course, enjoy Tanglewood!)";
    string += "<br /><small><a href=\"/webSiteIncome.htm\">Support my site.</a> &nbsp; &nbsp; &nbsp; ";
    string += "Many thanks.</small>";
    string += "</div>";
    return string;
}

/*
function donationGlobalTop() { 
var string;
string = "<center>" + website_search() + "</center>";
string += "<div style=\"color: #2C4314; text-align:center; width:315px; padding:5px; border:2px solid grey; background-color:white; margin-left:auto; margin-right:auto; margin-top:15px; border-radius:15px;\">";
string += "<a href='http://www.amazon.com/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.com%2F%3Fie%3DUTF8%26tag%3Donematcatple-20%26linkCode%3Dur1%26camp%3D216797%26adid%3D0MVX3J15JCVWFSZ518FS%26creative%3D394565&tag=onematcatple-20&linkCode=ur2&camp=1789&creative=390957'><img src=\"http://www.onemathematicalcat.org/graphics/amazonDotComSmall.png\" /></a>";
string += " &nbsp; &nbsp; &nbsp; <a href=\"https://www.awin1.com/awclick.php?mid=6220&id=271615\"\"><img src='http://www.onemathematicalcat.org/graphics/Etsy.png' style='height:32px;' /></a><br />";
string += "<small><a href=\"http://onemathematicalcat.org/webSiteIncome.htm\">Please support my site.</a></small> &nbsp; &nbsp; ";
string += "<small><a href='http://www.onemathematicalcat.org/donation_thank_you.htm'>Many thanks.</a></small>";
string += "</div>";
return string;
}
*/

