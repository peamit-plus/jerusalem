function index1(){window.location.href="../products/index1.html"}
function index2(){window.location.href="../products/index2.html"}
function index3(){window.location.href="../products/index3.html"}
function index4(){window.location.href="../products/index4.html"}
function index5(){window.location.href="../products/index5.html"}
function index6(){window.location.href="../products/index6.html"}
function index7(){window.location.href="../products/index7.html"}
function index8(){window.location.href="../products/index8.html"}
function index9(){window.location.href="../products/index9.html"}
function index10(){window.location.href="../products/index10.html"}
function index11(){window.location.href="../products/index11.html"}
function index12(){window.location.href="../products/index12.html"}
function end(){window.location.href="../page/end.html"}
function btnhome(){window.location.href="../page/main.html"}
function btnsale(){window.location.href="../page/sale.html"  }
function help(){window.location.href="../page/help.html"}
function whatsapp(){window.location.assign("https://wa.me/0556610747")}

function share() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
            
        })
        .then(() => console.log('שותף בהצלחה'))
        .catch(error => console.error('שגיאה בשיתוף', error));
    } else {
        alert('הדפדפן שלך אינו תומך בשיתוף.');
    }
}
function printPage() {window.print();} // פתח את דיאלוג ההדפסה של הדפדפן
function notfound(){alert("אפשרות זאת לא פעילה בדף הנוכחי")}

