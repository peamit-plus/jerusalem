function createCategory(json) {
  var gallery = "";
  json.forEach(element => {
    gallery += `
    <div class='col-md-3' id='category${element.image}'>
    <div class='thumbnail shaow'>
    <img src='../imgctg/${element.image}.WebP' alt='${element.p}' style='width:100%;height:270px;' class='carsor' onclick='index${element.image}()'>
    <div class='caption'>
    <p class='text-primary'>${element.p}<br/>
    <button class='btn btn-primary' onclick='index${element.image}()'>&laquo; לקטגוריה לחץ</button> </p>
    </div></div></div></div>
    `
  });


  document.getElementById("id_category").innerHTML = gallery;
}
function page1() {
  var json = [
    { "image": "1", "p": "כוסות" },
    { "image": "2", "p": "צלחות לבן / מארזי חיסכון" },
    { "image": "3", "p": "צלחת צבעוני" },
    { "image": "4", "p": 'סכו"ם' },
    { "image": "5", "p": "שקיות מזון + מפות" },
    { "image": "6", "p": "אפיה" },
    { "image": "7", "p": "קופסאות אחסון + נרות" },
    { "image": "8", "p": "מוצרי נייר" },
    { "image": "9", "p": "שקיות אשפה" },
    { "image": "10", "p": "עזרי ניקיון" },
    { "image": "11", "p": "היגיינה וטיפוח" },
    { "image": "12", "p": "שונות - חומרי ניקוי" },
  ]
  createCategory(json)
  createModule()


}

function createModule() {
  var module = "";

  module +=
    `<div class='modal fade' id='myModal' role='dialog'>
    <div class='modal-dialog modal-lg'>
      <div class='modal-content'>
        <div class='modal-header'>
          <button type='button' class='close' data-dismiss='modal' style='text-align: left; margin-left: 10px;'>&times;</button>
         <h4 class='modal-title text-center'>מידע - יצירת קשר</h4>
          </div><div class='modal-body' style='text-align:right;'>
      <!--  <h4 style='text-align: center;'><u>! התחדשנו </u></h2>
          <p> אפשר עכשיו גם למצוא אותנו בגוגל <a href='information.html'>למידע נוסף</a></p>
          <hr/>
       -->
    <h4 style='text-align: center;'><u>? איך משתמשים באתר</u></h2>
      <p><button class='btn btn-info fade-in text-center loading' onclick='help()'>לצפיה במדריך שימוש באתר</button><br/><br/>  <u><a href='https://forms.gle/UKXF6d81jejVEg4X6' class="btn btn-warning btn-sm loading">לשאלות / הערות / תקלות באתר <br/>פנו אלינו</a></u></p>
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

}


