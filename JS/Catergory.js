function createCategory(json)
{
  var gallery = "";
  for (var i = 0; i < json.length; i++) {
  gallery += "<div class='col-md-3' id='category"+i+"'>"+
      "<div class='thumbnail'>"+
        "<img src='../imgctg/"+json[i].image+".WebP' alt='"+json[i].p+"' title='"+json[i].p+"' style='width:100%; height:250px;' class='carsor' onclick='index"+json[i].image+"()'>"+
          "<div class='caption'>"+
            "<p class='text-primary'>"+json[i].p+"<br/>"+
     "<button class='btn btn-primary' onclick='index"+(i+1)+"()'>&laquo; לקטגוריה לחץ</button> </p>"+
          "</div>"+
       "</div>"+
    "</div></div>";
  }

  document.getElementById("id_category").innerHTML = gallery;
  createaadd()
}
function page1() {
  var json = [
    { "image": "1", "p": "כוסות"},
    { "image": "2", "p": "צלחות לבן / מארזי חיסכון"},
    { "image": "3", "p": "צלחת צבעוני"},
    { "image": "4", "p": 'סכו"ם'},
    { "image": "5", "p": "שקיות מזון + מפות"},
    { "image": "6", "p": "אפיה"},
    { "image": "7", "p": "קופסאות אחסון + נרות"},
    { "image": "8", "p": "מוצרי נייר"},
    { "image": "9", "p": "שקיות אשפה"},
    { "image": "10", "p": "עזרי ניקיון"},
    { "image": "11", "p": "היגיינה וטיפוח"},
    { "image": "12", "p": "שונות - חומרי ניקוי"},
    ]
  createCategory(json)
  createModule()


}

function createModule(){
  var module = "";
  
  module +=
    `<div class='modal fade' id='myModal' role='dialog'>
    <div class='modal-dialog modal-lg'>
      <div class='modal-content'>
        <div class='modal-header'>
          <button type='button' class='close' data-dismiss='modal' style='text-align: left; margin-left: 10px;'>&times;</button>
         <h4 class='modal-title text-center'>מידע - יצירת קשר</h4>
          </div><div class='modal-body' style='text-align:right;'>

<img src="../imgctg/ashray.jpg" alt="פרסום אשראי" class="img-responsive center-block" style="border: 1px solid;">
<hr/>
      <!--  <h4 style='text-align: center;'><u>! התחדשנו </u></h2>
          <p> אפשר עכשיו גם למצוא אותנו בגוגל <a href='information.html'>למידע נוסף</a></p>
          <hr/>
       -->
    <h4 style='text-align: center;'><u>? איך משתמשים באתר</u></h2>
      <p><button class='btn btn-primary fade-in text-center loading' onclick='help()'>לצפיה במדריך שימוש באתר</button><br/><br/>  <u><a href='https://forms.gle/UKXF6d81jejVEg4X6' class="btn btn-warning btn-sm loading">לשאלות / הערות / תקלות באתר <br/>פנו אלינו</a></u></p>
    <hr/>
    <!--<h4 style='text-align:center;'><u>שליחת הזמנה</u></h4>
           <p>שדרגנו את המערכת ועכשיו ניתן לשלוח הזמנה באופן נוח ויעיל יותר<br/> נסו עכשיו והכנסו לקטגוריה המבוקשת עבורכם בדף הבית</p><hr/>-->

        <h4 class='text-center'><u>דרכים נוספות ליצירת קשר</u> </h4>
        <p><span><a href='tel:+972556610747'>0556610747</a> ניתן ליצור איתנו קשר במספר </span> avizeev85@gmail.comאו במייל בכתובת  </p>
        </div>
        <div class='modal-footer'>
          <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>
        </div></div></div></div>`;
  
  document.getElementById("id_Module").innerHTML = module;
  createsell()
}

// המבצעים
function createsell(){
  var json=
  [
// {"name":"כוס פלסטיק פסים", "p":"כוס פלסטיק פסים (100)5₪", "link":"https://peamit-plus.github.io/jerusalem/products/index1.html", }, 
// {"name":"כוס מעוטר", "p":"כוס מעוטר (40)7₪", "link":"https://peamit-plus.github.io/jerusalem/products/index1.html", }, 
// {"name":"מזלג לבן", "p":"מזלג לבן (*100) 5₪", "link":"https://peamit-plus.github.io/jerusalem/products/index4.html", }, 
// {"name":"כף לבן", "p":"כף לבן (*100) 5₪", "link":"https://peamit-plus.github.io/jerusalem/products/index4.html", }, 
// {"name":"כפיות לבן", "p":"כפיות לבן (*100) 4₪", "link":"https://peamit-plus.github.io/jerusalem/products/index4.html", }, 
// {"name":"מפיות אירוח ", "p":"מפיות אירוח (*80) 3.5₪", "link":"https://peamit-plus.github.io/jerusalem/products/index8.html", }, 
// {"name":"צלחת גדול קשיח", "p":"צלחת גדול קשיח (*100) 20₪", "link":"https://peamit-plus.github.io/jerusalem/products/index2.html", }, 
// {"name":"קשים לשתיה", "p":"קשים לשתיה (200) 6₪", "link":"https://peamit-plus.github.io/jerusalem/products/index12.html", }, 
// {"name":"זוג סלוטייפ רחב", "p":"זוג סלוטייפ רחב (100 מ׳) 12₪", "link":"https://peamit-plus.github.io/jerusalem/products/index12.html", },
// {"name":"צלחת גדול עבה (*50)","p":"צלחת גדול עבה (*50) 8.50₪","link":"https://peamit-plus.github.io/jerusalem//products/index2.html", },
// {"name":"מרקיות פשוטות(*25)","p":"מרקיות פשוטות(*25) 4.50₪","link":"https://peamit-plus.github.io/jerusalem//products/index2.html"}, 
// {"name":"צלחות קטנות פשוטות(*50)","p":"צלחות קטנות פשוטות(*50) 5.50₪","link":"https://peamit-plus.github.io/jerusalem//products/index2.html"},
// {"name":"אובליות צבעוני/לבן לסלט (*25)","p":"אובליות צבעוני/לבן לסלט (*25) 3.50₪","link":"https://peamit-plus.github.io/jerusalem//products/index3.html"},
// {"name":"מפיות אירוח (*80) 4₪","p":"מפיות אירוח (*80) 3.50₪","link":"https://peamit-plus.github.io/jerusalem//products/index8.html"},
// {"name":'כל הסכו"ם קרם/שקוף קשיח',"p":'7₪ כל הסכו"ם קרם/שקוף קשיח',"link":"https://peamit-plus.github.io/jerusalem//products/index4.html"},
// {"name":"מצקת מרק","p":"מצקת מרק 4₪","link":"https://peamit-plus.github.io/jerusalem//products/index4.html"},


]
  generate(json)
}

function generate(json){
  var gallery = "";
gallery+=`<h1 class='text-center' id="demotext" data-aos="fade-left">מבצעים<h1>
<h3 class="text-center"  id="demotext">המבצעים בתוקף עד ה 24/11/2023</h3>`
  gallery+=`<p>בדף זה יש ${json.length} מוצרים</p>`
  for (var i = 0; i < json.length; i++) {
      gallery += `
          <div class="col-md-3">
            <div class="panel panel-primary" style="text-align: center;">
              <div class="panel-heading" style="text-align: center;">
                <h2 class="panel-title" style="text-align: center;">${json[i].name}</h2>
              </div>
              <div class="panel-body" style="text-align: center;">
                <p>${json[i].p}</p>
                <a href="${json[i].link}">לצפייה במוצר</a>
              </div>
            </div>
          </div>`;
  }
  var sell;
  var targetDate = new Date(2023, 10, 25); // החודש מתחיל מ-0, לכן 10 מייצג את נובמבר
  var currentDate = new Date();
  if(json.length<1||currentDate > targetDate)
  {sell="<h1 class='' id='demotext' data-aos='fade-up' data-aos-duration='2000'>אין מבצעים זמינים</h1>";}
  else{sell=gallery}
  document.getElementById("id_sell").innerHTML = sell;
}
function createcarsola(json){
  var gallery=`<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>`;
  for (var i = 0; i < json.length-1; i++)
  {
    gallery += `<li data-target="#myCarousel" data-slide-to="${i+1}"></li>`;
  }
  gallery+=` </ol><div class="carousel-inner">`
  for (var j = 0; j < json.length; j++) {
    if(j==0)
      {
  gallery += `<div class="item active">
        <img src="../image/${json[j].image}.WebP" alt="${json[j].p}" title="${json[j].p}" style="width:100%;">
        <div class="carousel-caption">
         <p class="textcarsola">${json[j].p}<br/>
        <a href="${json[j].onclk}" class="btn btn-info btn-sm">למעבר למוצר</a></p>
        </div>
      </div>`;
      }
      else{
    gallery += `<div class="item">
        <img src="../image/${json[j].image}.WebP" alt="${json[j].p}" style="width:100%;">
        <div class="carousel-caption">
         <p class="textcarsola">${json[j].p}<br/>
        <a href="${json[j].onclk}" class="btn btn-info btn-sm">למעבר למוצר</a></p>
        </div>
      </div>`;
        }
  }
  // window.location.href=""
  gallery+=`</div><a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div> 
`;
document.getElementById("id_carsola").innerHTML= gallery; 
}

function createaadd() {
  var ver = [
    { "onclk": "https://peamit-plus.github.io/jerusalem/products/index3.html", "p": "קעריות ענק לסלט (*10) 8₪", "image": "25" },
    { "onclk": "https://peamit-plus.github.io/jerusalem/products/index4.html", "p": "כף הגשה 2₪", "image": "ck9" },
    { "onclk": "https://peamit-plus.github.io/jerusalem/products/index5.html", "p": "מפת אל בד גליל (25 מ')35₪", "image": "36" },
    { "onclk": "https://peamit-plus.github.io/jerusalem/products/index6.html", "p": "מנג'ט מעוטר 1.5 4.5₪", "image": "m1c" },
    { "onclk": "https://peamit-plus.github.io/jerusalem/products/index7.html", "p": "גפרורים ענק 5₪", "image": "43" },
    { "onclk": "https://peamit-plus.github.io/jerusalem/products/index8.html", "p": "נייר טואלט טישו (32 גלילים) 30₪", "image": "56" },
    { "onclk": "https://peamit-plus.github.io/jerusalem/products/index9.html", "p": "שקיות אשפה + ידית 75/90 גדול (*40) 15₪", "image": "66" },
    { "onclk": "https://peamit-plus.github.io/jerusalem/products/index10.html", "p": "זוג סחבות לרצפה (גדולות) 8₪", "image": "76" },
  ]

  createcarsola(ver)
}