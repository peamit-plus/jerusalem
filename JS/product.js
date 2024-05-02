function generateGallery(json) {
var gallery = "";
gallery+=`<p>בדף זה יש ${json.length} מוצרים</p>
<div class="row">`

  for (var i = 0; i < json.length; i++) {
      gallery += `
          <div class='col-md-3 product-container' id='${json[i].image}'>
              <div class='thumbnail'>
               <figure>
                  <img src='../image/${json[i].image}.WebP'  alt='${json[i].image}' style='height:250px; width: 100%;'>
                  <figcaption>
                    <div class='caption product-caption'>
                      <p class='text-center'>
                          <b>${json[i].p}</b><br/>
                          <button class='btn btn-info' id="addToCartBtn" onclick='addToLocalStorage(${json[i].productId})'><span class="glyphicon glyphicon-shopping-cart"></span> הוסף לסל</button>
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
          </div>`;
  }
gallery+=`</div> `


if(json.length<1)
{
  gallery=`<h3 class='text-center' style='color:red;'>
  אין מוצרים בדף זה 
  <br/> עקב תקלה תכנית לא צפויה פנו אלינו בלשונית העזרה שבדף הראשי 
  <br>שנטפל בזה </h3>`
}
displayProductsFromLocalStorageToNuv()
  document.getElementById("id_gallery").innerHTML = gallery;
}


//תוספת למוצרים במבצע
//<br/><span style='color:red;'>במבצע</span>
function page1() {
var json = [
  { "productId":"1","image": "1", "p": "כוס פלסטיק (100) - ₪3.5","price":"" },
  { "productId":"2","image": "2", "p": "₪כוס פלסטיק פסים (100) - 5.5","price":"" },
  { "productId":"1001","image": "c1", "p": 'כוס קרטון גדול 300 מ"ל (50)11₪ '},//
  { "productId":"1002","image": "c2", "p": 'כוס קרטון רגיל 220 מ"ל (50)5₪ ',"price":"" },
  { "productId":"4","image": "4", "p": "כוס יהלום (40)8.5₪","price":"" },
  { "productId":"5","image": "5", "p": "כוס מעוטר (40)8.5₪ ","price":"" }
]
generateGallery(json)
}

function page2() {
var json = [
{ "productId":"6","image": "6", "p": "צלחת גדול עבה (*50) 8.50₪","price":"" },
{ "productId":"7","image": "7", "p": "צלחת קטן עבה (*50) 6.50₪","price":"" },
{ "productId":"8","image": "8", "p": "לפתן פשוט(*25) 2.20₪","price":"" },
{ "productId":"9","image": "9", "p": "אובלי לסלט פשוט (*25) 3₪","price":"" },
{ "productId":"10","image": "10", "p": "מרקיות פשוטות(*25) 4.50₪","price":"" },
{ "productId":"11","image": "11", "p": "צלחות קטנות פשוטות(*50) 5.50₪","price":"" },
{ "productId":"12","image": "12", "p": "צלחות גדולות פשוטות(*50) 7.50₪","price":"" },
{ "productId":"13","image": "13", "p": "צלחת מרק קשיח(*100) 18₪","price":"" },
{ "productId":"14","image": "14", "p": "צלחת קטן קשיח(*100) 18₪","price":"" },
{ "productId":"15","image": "15", "p": "צלחת גדול קשיח (*100) 24₪ ","price":"" },
{ "productId":"16","image": "16", "p": "צלחת גדול 1 קג' קשיח (*66) 24₪","price":"" }]
generateGallery(json)
}

function page3() {
var json = [{ "productId":"17","image": "17", "p": "לפתן צבעוני (*25) 2.50₪","price":"" },
{ "productId":"18","image": "18", "p": "אובליות צבעוני לסלט (*25) 3.50₪","price":"" },
{ "productId":"19","image": "19", "p": "צלחת מרק צבעוני (*25) 5₪","price":"" },
{ "productId":"20","image": "20", "p": "צלחת קטן צבעוני (*25) 5₪","price":"" },
{ "productId":"21","image": "21", "p": "צלחת גדול צבעוני (*25) 6.50₪","price":"" },
{ "productId":"22","image": "22", "p": "צלחות ענקיות צבעוני (*25) 10₪","price":"" },
{ "productId":"23","image": "23", "p": "מגש אובלי גדול צבעוני (*25) 12₪","price":"" },
{ "productId":"24","image": "24", "p": "מגש אובלי גדול עמוק צבעוני (*12) 10₪","price":"" },
{ "productId":"25","image": "25", "p": "קעריות ענק לסלט צבעוני (*10) 10₪","price":"" }]
generateGallery(json)}

function page4() {
var json = [
  { "productId":"1003","image": "m100", "p": "מזלג לבן (*100) 6₪ ","price":"" },
  { "productId":"1004","image": "cb100", "p": "כף לבן (*100) 6₪ ","price":"" },
  { "productId":"1005","image": "c100", "p": "כפיות לבן (*100) 4.5₪ ","price":"" },
  { "productId":"1006","image": "ck1", "p":"מזלג שקוף קשיח 7.5₪" ,"price":""},
  { "productId":"1007","image": "ck2", "p": "כף שקוף קשיח 7.5₪","price":"" },
  { "productId":"1008","image": "2043", "p": "סכין שקוף קשיח 7.5₪","price":"" },
  { "productId":"1009","image": "ck4", "p": "כפיות שקוף קשיח 5₪","price":"" },
  { "productId":"1010","image": "2043", "p": "מזלג קרם קשיח 7.5₪","price":"" },
  { "productId":"1011","image": "ck6", "p": "כף קרם קשיח 7.5₪","price":"" },
  { "productId":"1012","image": "ck7", "p": "סכין קרם קשיח 7.5₪","price":"" },
  { "productId":"1013","image": "ck8", "p": "כפיות קרם קשיח 5₪","price":"" },
  { "productId":"1014","image": "ck9", "p": "כף הגשה 2.5₪","price":"" },
  { "productId":"2015","image": "2043", "p": "כף הגשה בתפזורת 1.9₪","price":"" },
  { "productId":"32","image": "32", "p": "מצקת מרק 4₪","price":"" }]
generateGallery(json)}

function page5() {
var json = [
{ "productId":"33","image": "33", "p": "מפת שלחן שמיניה 2.4 מטר 4₪","price":"" },
{ "productId":"34","image": "34", "p": "מפת שלחן שמיניה עבה2.4 מטר 7₪","price":"" },
{ "productId":"35","image": "35", "p": "מפת שלחן בגליל עבה 45 מטר 22₪","price":"" },
{ "productId":"36","image": "36", "p": "מפת אל בד גליל (*25 מ')35₪","price":"" },
{ "productId":"37","image": "37", "p": "שקיות מזון(*200)3.5₪","price":"" },
{ "productId":"38","image": "38", "p": "שלישית שקיות מזון בקרטון (*450) 10₪","price":"" },
{ "productId":"39","image": "39", "p": "זוג שקיות מזון עבה (*300)10₪","price":"" },
{ "productId":"40","image": "40", "p": "שקיות הקפאה (*100) 4.5₪","price":"" }
]
generateGallery(json)}

function page6() {
var json = [
{ "productId":"1015","image": "nc1", "p": "נייר כסף זוג ארוך(15מ') 10₪","price":"" },
{ "productId":"1016","image": "nc2", "p": "נייר כסף זוג קצר (15מ') 9₪","price":"" },
{ "productId":"1017","image": "nc3", "p": "נייר כסף קצר עבה (60 מ')27₪","price":"" },
{ "productId":"1018","image": "nc4", "p": "נייר כסף ארוך עבה (50 מ')37₪","price":"" },
{ "productId":"43","image": "117", "p": "נילון ניצמד זוג (60 מ') 10₪","price":"" },
{ "productId":"44","image": "118", "p": "שקיות צליה(12) 5.5₪","price":"" },
{ "productId":"45","image": "119", "p": "נייר אפיה (50) 9₪","price":"" },
{ "productId":"1019","image": "t1", "p": " תבניות קטן ארוז 8₪","price":"" },
{ "productId":"1020","image": "t2", "p": " תבניות קטן עמוק ארוז 8₪","price":"" },
{ "productId":"1021","image": "t3", "p": " 8₪ ארוז A4 תבניות בינוני ","price":"" },
{ "productId":"1022","image": "t4", "p": " תבניות גדול ארוז 8₪","price":"" },
{ "productId":"1241","image": "tp2", "p": "תבניות קטנות בתפזורת 70 אג' ליחידה","price":"" },
{ "productId":"1240","image": "tp1", "p": "תבניות אינגליש בתפזורת 70 אג' ליחידה","price":"" },
{ "productId":"1242","image": "tp5", "p": "תבניות קטנות עמוקת בתפזורת 90 אג' ליחידה","price":"" },
{ "productId":"0000","image": "2043", "p": "מכסה לתבניות קטנות עמוקת בתפזורת 35 אג' ליחידה" ,"price":""},
{ "productId":"1243","image": "tp3", "p": "תבניות בינוני  1₪ ליחידה","price":"" },
{ "productId":"1244","image": "tp4", "p": "תבניות גדול 1₪ ליחידה","price":"" },
{ "productId":"1245","image": "tp6", "p": " תבניות ענק 2₪ ליחידה","price":"" },
{ "productId":"50","image": "122", "p": "מארז תבניות עגולות 9₪","price":"" },
{ "productId":"1023","image": "m1", "p": "מנג'ט לבן 1.5 4₪","price":"" },
{ "productId":"1024","image": "m2", "p": "מנג'ט לבן 2 4.5₪","price":"" },
{ "productId":"1025","image": "m3", "p": "מנג'ט לבן 3  5₪","price":"" },
{ "productId":"1026","image": "m1c", "p": "מנג'ט מעוטר 1.5 4.5₪","price":"" },
{ "productId":"1027","image": "m2c", "p": "מנג'ט מעוטר 2  5₪","price":"" },
{ "productId":"1028","image": "m3c", "p": "מנג'ט מעוטר 3 5.5₪","price":"" },
{ "productId":"53","image": "125", "p": "מאפינס בינוני (*20) 8₪","price":"" },
]
generateGallery(json)}

function page7() {
//החלפתי בין 42 ל 48
var json = [
  { "productId":"1029","image": "ga1", "p": "מארז 4 גביע אמריקאי 1 ל' 7₪","price":"" },
  { "productId":"1030","image": "ga4", "p": "מארז 6 גביע אמריקאי1/2 ל' 7₪","price":"" },
  { "productId":"1031","image": "ga25", "p": "מארז 8 גביע אמריקאי 1/4 ל' 7₪","price":"" },
  { "productId":"1032","image": "k1", "p":"מארז 3 מיכלי אחסון 1 קג'  7₪","price":"" },
  { "productId":"1033","image": "k2", "p":"מארז 3 מיכלי אחסון 2 קג' 7.5₪","price":"" },
  { "productId":"1034","image": "k3", "p":"מארז 2 מיכלי אחסון 3 קג' 8₪","price":"" },
  { "productId":"1035","image": "k4", "p":"מארז 2 מיכלי אחסון 4.5 קג' 8₪","price":"" },
  { "productId":"56","image": "43", "p": "גפרורים ענק 5₪","price":"" },
  { "productId":"57","image": "42", "p": "גפרורים עשיריה 4₪","price":"" },
  { "productId":"58","image": "44", "p": "פתיל צף עגול 4₪","price":"" },
  { "productId":"60","image": "45", "p": "פתיל צף משושה גדול 6₪","price":"" },
  { "productId":"1036","image": "nn24", "p": "נר נשמה 24 שעות 1.50₪","price":"" },
  { "productId":"1037","image": "nn48", "p": " נר 48 שעות בזכוכית 4₪","price":"" },
  { "productId":"62","image": "47", "p": "נרות חימום (*50) 10₪","price":"" }]
generateGallery(json)}

function page8() {
var json = [
  { "productId":"63","image": "49", "p": "מפיות אירוח (*80) 4₪ ","price":"" },
  { "productId":"64","image": "50", "p": "מפיות אירוח מנוקדות(*80) 5₪","price":"" },
  { "productId":"65","image": "51", "p": "טישו חמישיה (*500) 9₪","price":"" },
  { "productId":"66","image": "52", "p": "נייר טואלט חתוך(*800) 14₪","price":"" },
  { "productId":"67","image": "53", "p": "נייר סופג (*6) 12₪","price":"" },
  { "productId":"68","image": "54", "p": "סופר מגבת כ-800 גר' 20₪","price":"" },
  { "productId":"69","image": "55", "p": "שישית גללי נייר ניגוב (600 מטר) 45₪","price":"" },
  { "productId":"70","image": "56", "p": "נייר טואלט טישו (32 גלילים) 30₪","price":"" },
  { "productId":"71","image": "57", "p": "נייר טואלט חתוך (*9000) 80₪","price":"" },
  { "productId":"72","image": "58", "p": "נייר ניגוב צץ רץ (*4000) 65₪","price":"" }]
generateGallery(json)}

function page9() {
var json = [
  { "productId":"73","image": "59", "p": "שקיות נשיאה קטן(*100) 10₪","price":"" },
  { "productId":"74","image": "60", "p": "שקיות נשיאה גדול (*100) 13₪","price":"" },
  { "productId":"75","image": "61", "p": "אשפתון כתום 75/90 (*50) 9₪","price":"" },
  { "productId":"76","image": "62", "p": "אשפתון שחור 75/90 (*50) 14₪","price":"" },
  { "productId":"77","image": "63", "p": "אשפתון עבה 75/85 (*25) 10₪","price":"" },
  { "productId":"78","image": "64", "p": "אשפתון עבה מאוד 75/90 גדול (*25) 13₪","price":"" },
  { "productId":"79","image": "65", "p": "שקיות אשפה עם שרוך 52/65 (*60) 15₪","price":"" },
  { "productId":"80","image": "66", "p": "שקיות אשפה + ידית 75/90 גדול (*40) 17₪","price":"" }]
generateGallery(json)}

function page10() {
var json = [ { "productId":"81","image": "67", "p": "רביעיית כריות יפני 8₪","price":"" },
{ "productId":"82","image": "68", "p": "רביעיית ננס מתכת 8₪","price":"" },
{ "productId":"83","image": "69", "p": "שלישיית סקוטש ברייט 8₪","price":"" },
{ "productId":"84","image": "70", "p": "זוג ספוג קלין שבת 8₪","price":"" },
{ "productId":"85","image": "71", "p": "צמר פלדה 4₪","price":"" },
{ "productId":"86","image": "72", "p": "ספוג הפלא בלוק 4₪","price":"" },
{ "productId":"87","image": "73", "p": "מטליות לניקוי כללי (*9) 10₪","price":"" },
{ "productId":"88","image": "74", "p": "שישיית מטליות מיקרופייבר 12₪","price":"" },
{ "productId":"89","image": "75", "p": "שלישיית סחבות מיקרופייבר לרצפה ₪ 18","price":"" },
{ "productId":"90","image": "76", "p": "זוג סחבות לרצפה (גדולות) 9₪","price":"" },
{ "productId":"91","image": "77", "p": "מטליות לחות לניקוי רצפות גדול (*10) 10₪","price":"" },
{ "productId":"93","image": "79", "p": "כפפות ניטריל ללא אבקה (*100) 22₪","price":"" },
{ "productId":"94","image": "81", "p": "מגב שיש/חלון 8₪","price":"" },
{ "productId":"95","image": "82", "p": "דלי גדול כ 12 ליטר 16₪","price":"" },
{ "productId":"1038","image": "p1", "p": " פח  50 ל' 60₪","price":"" },
{ "productId":"1039","image": "p1", "p": "פח 25 ל' 46₪","price":"" },
{ "productId":"1040","image": "p1", "p": "פח שובך 10 ל' 35₪","price":"" },
{ "productId":"97","image": "84", "p": "מברשת לאסלה+מתקן 11₪","price":"" },
{ "productId":"98","image": "85", "p": "כף אשפה עם ידית 13₪","price":"" },
{ "productId":"2030","image": "me3", "p": "מטאטא 10₪","price":"" },
{ "productId":"2031","image": "me1", "p": "מגב 10₪","price":"" },
{ "productId":"2032","image":"me4","p":"מברשת מטאטא איכותי 15₪","price":"" },
{ "productId":"10101","image": "me2", "p": " מגב מתכת איכותי 40 סמ' 15₪","price":"" },
{ "productId":"101","image": "88", "p": "מברשת מטאטא כביש <b>(סיבים חזקים)</b> 17₪","price":"" },
{ "productId":"102","image": "200", "p": "מקל עץ 1.5 מטר למגב/מטאטא 8₪","price":"" }]
generateGallery(json)}

function page11() {
var json = [{ "productId":"103","image": "89", "p": "אלכוהול 70% (100מל') 4₪","price":"" },
{ "productId":"104","image": "90", "p": "מגבונים לחים (*72) 2.50₪","price":"" },
{ "productId":"105","image": "91", "p": "מגבונים לחים עבים (*72)3.50₪","price":"" },
{ "productId":"106","image": "92", "p": "קיסמי שינים מלחיה(*300) 4₪","price":"" },
{ "productId":"107","image": "93", "p": "פלסטרים (*50) 7₪","price":"" },
{ "productId":"108","image": "94", "p": "צמרוני אוזנים מעץ (*300) 4₪","price":"" },
{ "productId":"109","image": "95", "p": "צמרוני אזנים מפלסטיק (*200) 5₪","price":"" },
{ "productId":"110","image": "96", "p": "ספוג רחצה 8₪","price":"" },
{ "productId":"111","image": "97", "p": "צמר גפן (100 גר')5₪","price":"" },
{ "productId":"1000","image": "sano", "p": "שלישית סבון ידים כיף 22₪","price":"" }
            ]
generateGallery(json)}

function page12() {
var json = [
{ "productId":"112","image": "98", "p": "קשים לשתיה (200) 6.50₪ ","price":"" },
{ "productId":"113","image": "99", "p": "שלישית דבק סלוטייפ 4₪","price":"" },
{ "productId":"114","image": "100", "p": "זוג סלוטייפ רחב (100 מ׳) 14₪ " ,"price":""},
{ "productId":"115","image": "110", "p": "מטהר אויר 8₪","price":"" },
{ "productId":"116","image": "111", "p": "מילוי למטהר אויר חשמלי 14₪","price":"" },
{ "productId":"117","image": "101", "p": "נוזל כלים סנו (700 מל׳) 11₪","price":"" },
{ "productId":"118","image": "102", "p": "סנובון לאסלה 12₪","price":"" },
{ "productId":"119","image": "108", "p": "סנו 00 לניקוי אסלות 10₪","price":"" },
{ "productId":"120","image": "103", "p": "חלונית מתז 1 ליטר 8₪","price":"" },
{ "productId":"121","image": "109", "p": "סנו ז'אוול מרסס 18₪" ,"price":""},
{ "productId":"122","image": "104", "p": "מסיר שומנים סנט מוריץ 15₪","price":"" },
{ "productId":"123","image": "112", "p": "מסיר שומנים סנו פורטה 17₪","price":"" },
{ "productId":"21704","image": "rases", "p": "רסס ונגב סנו 17₪ ","price":"" },
{ "productId":"204317","image": "hitoi", "p": "תרסיס חיטוי משטחים סנו 16₪ ","price":"" },
{ "productId":"124","image": "113", "p": "מגבוני דלי 22₪","price":"" },
{ "productId":"125","image": "106", "p": "נוזל רצפות סנו פרש 4 ליטר 28₪","price":"" },
{"productId":"4040","image": "sion", "p": "נוזל רצפות שיאון 4 ל' 18₪","price":"" },
{ "productId":"126","image": "114", "p": "ריצפז 2 ליטר - 23₪","price":"" },
{ "productId":"127","image": "107", "p": "אקונומיקה מבושמת 4 ליטר 12₪","price":"" }]
generateGallery(json)}

$(document).ready(function(){
  $("#openButton").click(function(){
      $("#sideMenu").collapse('toggle');
  });
});
$(document).ready(function(){
  $("#BtnCloseNuv").click(function(){
      $("#sideMenu").collapse('hide');
  });
});



function displayProductsFromLocalStorageToNuv() {
  const productsContainer = document.getElementById('productsContainerInNuv');
  productsContainer.innerHTML = ""; // רוקן את התוכן של productsContainer

  if (localStorage.length < 1) {
    var productCard = `<h4 class="text-center" style="color:red;">אין מוצרים בסל<h4/>`;
    productsContainer.innerHTML = productCard;
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let product = JSON.parse(localStorage.getItem(key));

      let NuvProduct = `<li>${product.descraption}</li>`;
      productsContainer.innerHTML += NuvProduct; // הוסף את המוצר ל productsContainer
    }
  }
}
querySelector("#productsContainerInNuv").innerHTML=productsContainer
  
