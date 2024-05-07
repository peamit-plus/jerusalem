const productsDB = {
  "products": [
    { "id": 1, "name": "כוס פלסטיק (100)", "price": 3.50, "category": 1 },
    { "id": 2, "name": "כוס פלסטיק פסים (100)", "price": 5.5, "category": 1 },
    { "id": 1002, "name": "כוס קרטון רגיל (50) ", "price": 5, "category": 1 },
    { "id": 1001, "name": "כוס קרטון גדול (50)", "price": 11, "category": 1 },
    { "id": 4, "name": "כוס יהלום (40)", "price": 8.50, "category": 1 },
    { "id": 5, "name": "כוס מעוטר (40)", "price": 8.50, "category": 1 },
    { "id": 6, "name": "צלחת גדול עבה (*50)", "price": 8.50, "category": 2 },
    { "id": 7, "name": "צלחת קטן עבה (*50)", "price": 6.50, "category": 2 },
    { "id": 8, "name": "לפתן פשוט(*25)", "price": 2.20, "category": 2 },
    { "id": 9, "name": "אובלי לסלט פשוט (*25) ", "price": 3, "category": 2 },
    { "id": 10, "name": "מרקיות פשוטות(*25)", "price": 4.5, "category": 2 },
    { "id": 11, "name": "צלחות קטנות פשוטות(*50)", "price": 5.50, "category": 2 },
    { "id": 12, "name": "צלחות גדולות פשוטות(*50)", "price": 7.50, "category": 2 },
    { "id": 13, "name": "צלחת מרק קשיח(*100) ", "price": 18, "category": 2 },
    { "id": 14, "name": "צלחת קטן קשיח(*100) ", "price": 18, "category": 2 },
    { "id": 15, "name": "צלחת גדול קשיח (*100) ", "price": 24, "category": 2 },
    { "id": 16, "name": "צלחת גדול 1 קג' קשיח (*66) ", "price": 24, "category": 2 },
    { "id": 17, "name": "לפתן(*25)", "price": 2.5, "category": 3 },
    { "id": 18, "name": "אובליות לסלט(*25)", "price": 3.50, "category": 3 },
    { "id": 19, "name": "צלחת מרק(*25) ", "price": 5, "category": 3 },
    { "id": 20, "name": "צלחת קטן(*25) ", "price": 5, "category": 3 },
    { "id": 21, "name": "צלחת גדול(*25)", "price": 6.5, "category": 3 },
    { "id": 22, "name": "צלחות ענקיות(*25) ", "price": 10, "category": 3 },
    { "id": 23, "name": "מגש אובלי גדול(*25) ", "price": 12, "category": 3 },
    { "id": 24, "name": "מגש אובלי גדול עמוק(*12) ", "price": 9, "category": 3 },
    { "id": 25, "name": "קעריות ענק לסלט(*10) ", "price": 8, "category": 3 },
    { "id": 1003, "name": " מזלג לבן (*100) ", "price": 6, "category": 4 },
    { "id": 1004, "name": "כף לבן (*100) ", "price": 6, "category": 4 },
    { "id": 1005, "name": "כפיות לבן (*100) ", "price": 4.5, "category": 4 },
    { "id": 1006, "name": "מזלג שקוף קשיח", "price": 7.50, "category": 4 },
    { "id": 1007, "name": "כף שקוף קשיח", "price": 7.50, "category": 4 },
    { "id": 1008, "name": "סכין שקוף קשיח", "price": 7.50, "category": 4 },
    { "id": 1009, "name": "כפית שקוף קשיח", "price": 5, "category": 4 },
    { "id": 1010, "name": "מזלג קרם קשיח", "price": 7.50, "category": 4 },
    { "id": 1011, "name": "כף קרם קשיח", "price": 7.50, "category": 4 },
    { "id": 1012, "name": "סכין קרם קשיח", "price": 7.50, "category": 4 },
    { "id": 1013, "name": "כפית קרם קשיח", "price": 5, "category": 4 },
    { "id": 1014, "name": "כף הגשה ", "price": 2.5, "category": 4 },
    { "id": 32, "name": "מצקת מרק ", "price": 4, "category": 4 },
    { "id": 33, "name": "מפת שלחן שמיניה 2.4 מטר ", "price": 4, "category": 5 },
    { "id": 34, "name": "מפת שלחן שמיניה עבה2.4 מטר ", "price": 7, "category": 5 },
    { "id": 35, "name": "מפת שלחן בגליל עבה 45 מטר", "price": 22, "category": 5 },
    { "id": 36, "name": "מפת אל בד גליל (*25 מ')", "price": 35, "category": 5 },
    { "id": 37, "name": "שקיות מזון(*200)", "price": 3.50, "category": 5 },
    { "id": 38, "name": "שלישית שקיות מזון בקרטון (*450) ", "price": 10, "category": 5 },
    { "id": 39, "name": "זוג שקיות מזון עבה (*300)", "price": 10, "category": 5 },
    { "id": 40, "name": "שקיות הקפאה (*100)", "price": 4.50, "category": 5 },
    { "id": 1015, "name": "נייר כסף זוג ארוך(15מ') ", "price": 10, "category": 6 },
    { "id": 1016, "name": "נייר כסף זוג קצר (15מ') ", "price": 9, "category": 6 },
    { "id": 1017, "name": "נייר כסף קצר עבה (60 מ')", "price": 26, "category": 6 },
    { "id": 1018, "name": "נייר כסף ארוך עבה (50 מ')", "price": 35, "category": 6 },
    { "id": 43, "name": "נילון ניצמד זוג (60 מ') ", "price": 10, "category": 6 },
    { "id": 44, "name": "שקיות צליה(12) ", "price": 5, "category": 6 },
    { "id": 45, "name": "נייר אפיה (50) ", "price": 9, "category": 6 },
    { "id": 1019, "name": " מארזי תבניות קטן", "price": 7, "category": 6 },
    { "id": 1020, "name": "מארזי תבניות קטן עמוק", "price": 7, "category": 6 },
    { "id": 1021, "name": "מארזי תבניות A4", "price": 7, "category": 6 },
    { "id": 1022, "name": "מארזי תבניות גדול", "price": 7, "category": 6 },
    { "id": 1241, "name": "תבניות בתפזורת קטן", "price": 0.70, "category": 6 },
    { "id": 1240, "name": "תבניות בתפזורת אנגליש", "price": 0.70, "category": 6 },
    { "id": 1242, "name": "תבניות בתפזורת קטנות עמוקות", "price": 0.90, "category": 6 },
    { "id":0000, "name": " מכסה לתבניות בתפזורת קטנות עמוקות", "price": 0.35, "category": 6 },
    { "id": 1245, "name": "תבניות ענק בתפזורת", "price": 2, "category": 6 },
    { "id": 1244, "name": "תבניות גדול בתפזורת ", "price": 1, "category": 6 },
    { "id": 1243, "name": "תבניות בינוני בתפזורת", "price": 1, "category": 6 },
    { "id": 50, "name": "מארז תבניות עגולות ", "price": 10, "category": 6 },
    { "id": 1023, "name": "מנג'ט לבן 1.5", "price": 4, "category": 6 },
    { "id": 1024, "name": " מנג'ט לבן 2 ", "price": 4.5, "category": 6 },
    { "id": 1025, "name": " מנג'ט לבן 3", "price": 5, "category": 6 },
    { "id": 1026, "name": "מנג'ט מעוטר 1.5", "price": 4.5, "category": 6 },
    { "id": 1027, "name": "מנג'ט מעוטר 2", "price": 5, "category": 6 },
    { "id": 1028, "name": "מנג'ט מעוטר 3", "price": 5.5, "category": 6 },
    { "id": 53, "name": "מאפינס בינוני (*20)", "price": 8, "category": 6 },
    { "id": 1029, "name": "מארז 4 גביע אמריקאי 1ל", "price": 7, "category": 7 },
    { "id": 1030, "name": "מארז 6 גביע אמריקאי 1/2 ל", "price": 7, "category": 7 },
    { "id": 1031, "name": "מארז 8 גביע אמריקאי 1/4 ל", "price": 7, "category": 7 },
    { "id": 1032, "name": "מארז 3 מיכלי אחסון 1 קג", "price": 7, "category": 7 },
    { "id": 1033, "name": "מארז 3 מיכלי אחסון 2 קג ", "price": 7.5, "category": 7 },
    { "id": 1034, "name": "מארז 2 מיכלי אחסון 3 קג", "price": 8, "category": 7 },
    { "id": 1035, "name": "מארז 2 מיכלי אחסון 4.5 קג ", "price": 8, "category": 7 },
    { "id": 56, "name": "גפרורים ענק", "price": 5, "category": 7 },
    { "id": 57, "name": "גפרורים עשיריה", "price": 4, "category": 7 },
    { "id": 58, "name": "פתיל צף עגול ", "price": 4, "category": 7 },
    { "id": 60, "name": "פתיל צף משושה גדול ", "price": 5, "category": 7 },
    { "id": 1036, "name": "נר נשמה 24 שעות", "price": 1.5, "category": 7 },
    { "id": 1037, "name": " נר 48 שעות בזכוכית ", "price": 4, "category": 7 },
    { "id": 62, "name": "נרות חימום (*50) ", "price": 10, "category": 7 },
    { "id": 63, "name": "מפיות אירוח (*80) ", "price": 4, "category": 8 },
    { "id": 64, "name": "מפיות אירוח מנוקדות(*80) ", "price": 5, "category": 8 },
    { "id": 65, "name": "טישו חמישיה (*500) ", "price": 9, "category": 8 },
    { "id": 66, "name": "נייר טואלט חתוך(*800) ", "price": 14, "category": 8 },
    { "id": 67, "name": "נייר סופג (*6) ", "price": 12, "category": 8 },
    { "id": 68, "name": "סופר מגבת כ-800 גר' ", "price": 20, "category": 8 },
    { "id": 69, "name": "שישית גללי נייר ניגוב (600 מטר) ", "price": 45, "category": 8 },
    { "id": 70, "name": "נייר טואלט טישו (32 גלילים) ", "price": 30, "category": 8 },
    { "id": 71, "name": "נייר טואלט חתוך (*9000) ", "price": 80, "category": 8 },
    { "id": 72, "name": "נייר ניגוב צץ רץ (*4000) ", "price": 65, "category": 8 },
    { "id": 73, "name": "שקיות נשיאה קטן(*100) ", "price": 10, "category": 9 },
    { "id": 74, "name": "שקיות נשיאה גדול (*100) ", "price": 13, "category": 9 },
    { "id": 75, "name": "אשפתון כתום 75/90 (*50)", "price": 9, "category": 9 },
    { "id": 76, "name": "אשפתון שחור 75/90 (*50)", "price": 14, "category": 9 },
    { "id": 77, "name": "אשפתון עבה 75/85 (*25) ", "price": 10, "category": 9 },
    { "id": 78, "name": "אשפתון עבה מאוד 75/90 גדול (*25) ", "price": 12, "category": 9 },
    { "id": 79, "name": "שקיות אשפה עם שרוך 52/65 (*60) ", "price": 15, "category": 9 },
    { "id": 80, "name": "שקיות אשפה + ידית 75/90 גדול (*40) ", "price": 15, "category": 9 },
    { "id": 81, "name": "רביעיית כריות יפני ", "price": 8, "category": 10 },
    { "id": 82, "name": "רביעיית ננס מתכת ", "price": 8, "category": 10 },
    { "id": 83, "name": "שלישיית סקוטש ברייט ", "price": 8, "category": 10 },
    { "id": 84, "name": "זוג ספוג קלין שבת ", "price": 8, "category": 10 },
    { "id": 85, "name": "צמר פלדה ", "price": 3, "category": 10 },
    { "id": 86, "name": "ספוג הפלא בלוק ", "price": 4, "category": 10 },
    { "id": 87, "name": "מטליות לניקוי כללי (*9) ", "price": 10, "category": 10 },
    { "id": 88, "name": "שישיית מטליות מיקרופייבר ", "price": 12, "category": 10 },
    { "id": 89, "name": "שלישיית סחבות מיקרופייבר לרצפה", "price": 18, "category": 10 },
    { "id": 90, "name": "זוג סחבות לרצפה (גדולות) ", "price": 8, "category": 10 },
    { "id": 91, "name": "מטליות לחות לניקוי רצפות גדול (*10) ", "price": 10, "category": 10 },
    { "id": 93, "name": "כפפות ניטריל ללא אבקה (*100) ", "price": 20, "category": 10 },
    { "id": 94, "name": "מגב שיש/חלון ", "price": 8, "category": 10 },
    { "id": 95, "name": "דלי גדול כ 12 ליטר ", "price": 15, "category": 10 },
    { "id": 1038, "name": "פח שובך 10 ל'", "price": 35, "category": 10 },
    { "id": 1039, "name": " פח 25 ל ", "price": 45, "category": 10 },
    { "id": 1040, "name": "<span> פח  50 ל </span>", "price": 60, "category": 10 },
    { "id": 97, "name": "מברשת לאסלה+מתקן ", "price": 10, "category": 10 },
    { "id": 98, "name": "כף אשפה עם ידית ", "price": 13, "category": 10 },
    { "id": 2030, "name": "מטאטא", "price": 8.5, "category": 10 },
    { "id": 2031, "name": "מגב", "price": 8.5, "category": 10 },
    { "id": 10101, "name": "מגב מתכת איכותי 40 סמ'", "price": 15, "category": 10 },
    { "id": 2032, "name": "מברשת מטאטא איכותי ", "price": 15, "category": 10 },
    { "id": 101, "name": "מברשת מטאטא כביש <b>(סיבים חזקים)</b>", "price": 16, "category": 10 },
    { "id": 102, "name": "מקל עץ 1.5 מטר למגב/מטאטא ", "price": 8, "category": 10 },
    { "id": 103, "name": "אלכוהול 70% (100מל') ", "price": 4, "category": 11 },
    { "id": 104, "name": "מגבונים לחים (*72)", "price": 2.5, "category": 11 },
    { "id": 105, "name": "מגבונים לחים עבים (*72).", "price": 3.5, "category": 11 },
    { "id": 106, "name": "קיסמי שינים מלחיה(*300) ", "price": 4, "category": 11 },
    { "id": 107, "name": "פלסטרים (*50) ", "price": 7, "category": 11 },
    { "id": 108, "name": "צמרוני אוזנים מעץ (*300) ", "price": 4, "category": 11 },
    { "id": 109, "name": "צמרוני אזנים מפלסטיק (*200) ", "price": 5, "category": 11 },
    { "id": 110, "name": "ספוג רחצה ", "price": 8, "category": 11 },
    { "id": 111, "name": "צמר גפן (100 גר')", "price": 5, "category": 11 },
    { "id": 112, "name": "קשים לשתיה (*200) ", "price": 6.5, "category": 11 },
    { "id": 113, "name": "שלישית דבק סלוטייפ ", "price": 4, "category": 12 },
    { "id": 114, "name": "זוג סלוטייפ רחב (100 מ׳)", "price": 14, "category": 12 },
    { "id": 115, "name": "מטהר אויר ", "price": 8, "category": 12 },
    { "id": 116, "name": "מילוי למטהר אויר חשמלי ", "price": 14, "category": 12 },
    { "id": 117, "name": "נוזל כלים סנו (700 מל׳) ", "price": 11, "category": 12 },
    { "id": 118, "name": "סנובון לאסלה ", "price": 12, "category": 12 },
    { "id": 119, "name": "סנו 00 לניקוי אסלות ", "price": 9, "category": 12 },
    { "id": 120, "name": "חלונית מתז 1 ליטר ", "price": 8, "category": 12 },
    { "id": 121, "name": "סנו ז'אוול מרסס ", "price": 20, "category": 12 },
    { "id": 122, "name": "מסיר שומנים סנט מוריץ ", "price": 15, "category": 12 },
    { "id": 123, "name": "מסיר שומנים סנו פורטה ", "price": 17, "category": 12 },
    { "id": 21704, "name": "רסס ונגב סנו ", "price": 17, "category": 12 },
    { "id": 204317, "name": "תרסיס חיטוי משטחים סנו ", "price": 16, "category": 12 },
    { "id": 124, "name": "מגבוני דלי ", "price": 22, "category": 12 },
    { "id": 125, "name": "נוזל רצפות סנו פרש 4 ליטר ", "price": 28, "category": 12 },
    { "id": 4040, "name": "נוזל רצפות שיאון 4 ל'", "price": 18, "category": 12 },
    { "id": 126, "name": "ריצפז 2 ליטר", "price": 23, "category": 12 },
    { "id": 127, "name": "אקונומיקה מבושמת 4 ליטר ", "price": 12, "category": 12 },
    { "id": 1000, "name": "שלישית סבון ידים כיף", "price": 22, "category": 12 }

  ]
};

function searchProducts() {
  checkDataList()
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultBody = document.getElementById('resultBody');

  // ניקוי הטבלה מהתוצאות הקודמות
  resultBody.innerHTML = '';

  // בדיקה אם שדה החיפוש ריק
  if (searchTerm === '') {
    document.getElementById("resultTable").style.display = "none";
    const row = resultBody.insertRow();
    const cell = row.insertCell(0);
    cell.colSpan = 4;
    cell.innerHTML = 'אנא הזן מונח חיפוש';
    return; // יוצא מהפונקציה ואין המשך לבדוק ולהציג תוצאות
  }


  // חיפוש והצגת התוצאות בטבלה
  for (const product of productsDB.products) {
    if (product.name.toLowerCase().includes(searchTerm)) {
      const row = resultBody.insertRow();
      const cell2 = row.insertCell(0);
      const cell3 = row.insertCell(1);
      // const cell4 = row.insertCell(2);

      cell2.innerHTML = product.name;
      cell3.innerHTML = `<a href="https://peamit-plus.github.io/jerusalem/products/index${product.category}.html" >מעבר לקטגוריה</a>`;
      // cell4.innerHTML = ;
    }
  }

  // אם אין תוצאות, הצג הודעה
  if (resultBody.innerHTML === '') {

    const row = resultBody.insertRow();
    const cell = row.insertCell(0);
    cell.colSpan = 4;
    cell.innerHTML = '<span style="color:red;">לא נמצאו תוצאות</span>';
  } else {
    document.getElementById("resultTable").style.display = "block";
  }
}
function checkDataList() {
  var searchInput = document.querySelector("#searchInput").value
  if (searchInput.lenth > 2) {
    AddToDataList()
  }
  else{
    return;
  }
}
function AddToDataList(){
  var data_list;
  productsDB.forEach(element => {
  data_list +=`<option>${element.product.name}</option>`;
});
document.querySelector("#datalist").innerHTML=data_list;
}