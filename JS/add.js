const productsDB = {
    "products": [
        { "id": "1", "image": "1", "descraption": "כוס פלסטיק ", "price": "3.5", "category": "1" },
        { "id": "2", "image": "2", "descraption": "כוס פלסטיק פסים ", "price": "5.5 ", "category": "1" },
        { "id": "3", "image": "c1", "descraption": "כוס קרטון גדול 300 מל", "price": "9.5", "category": "1" },
        { "id": "4", "image": "c2", "descraption": "כוס קרטון רגיל 220 מ\"ל ", "price": "4.8", "category": "1" },
        { "id": "6", "image": "4", "descraption": "כוס יהלום", "price": "7.5", "category": "1" },
        { "id": "7", "image": "5", "descraption": "כוס מעוטר", "price": "8.5 ", "category": "1" },
        { "id": "8", "image": "6", "descraption": "צלחת גדול עבה (*50)", "price": "8.5 ", "category": "2" },
        { "id": "9", "image": "7", "descraption": "צלחת קטן עבה (*50)", "price": "6.5 ", "category": "2" },
        { "id": "10", "image": "8", "descraption": "לפתן פשוט(*25)", "price": "2.1", "category": "2" },
        { "id": "11", "image": "9", "descraption": "אובלי לסלט פשוט (*25)", "price": "2.9", "category": "2" },
        { "id": "12", "image": "10", "descraption": "מרקיות פשוטות(*25)", "price": "4.3", "category": "2" },
        { "id": "13", "image": "11", "descraption": "צלחות קטנות פשוטות(*50)", "price": "5.2", "category": "2" },
        { "id": "14", "image": "12", "descraption": "צלחות גדולות פשוטות(*50)", "price": "7.2", "category": "2" },
        { "id": "15", "image": "13", "descraption": "צלחת מרק קשיח(*100)", "price": "16", "category": "2" },
        { "id": "16", "image": "14", "descraption": "צלחת קטן קשיח(*100)", "price": "16", "category": "2" },
        { "id": "17", "image": "15", "descraption": "צלחת גדול קשיח (*100)", "price": "18", "category": "2" },
        { "id": "18", "image": "16", "descraption": "צלחת גדול 1 קג' קשיח (*66)", "price": "24 ", "category": "2" },
        { "id": "19", "image": "17", "descraption": "לפתן צבעוני ", "price": "2.4", "category": "3" },
        { "id": "20", "image": "18", "descraption": "אובליות צבעוני לסלט ", "price": "3.2", "category": "3" },
        { "id": "21", "image": "19", "descraption": "צלחת מרק צבעוני ", "price": "4.6", "category": "3" },
        { "id": "22", "image": "20", "descraption": "צלחת קטן צבעוני ", "price": "4.6", "category": "3" },
        { "id": "23", "image": "21", "descraption": "צלחת גדול צבעוני ", "price": "6.5 ", "category": "3" },
        { "id": "24", "image": "22", "descraption": "צלחות ענקיות צבעוני ", "price": "10 ", "category": "3" },
        { "id": "25", "image": "23", "descraption": "מגש אובלי גדול צבעוני ", "price": "12 ", "category": "3" },
        { "id": "26", "image": "24", "descraption": "מגש אובלי גדול עמוק צבעוני ", "price": "10 ", "category": "3" },
        { "id": "27", "image": "25", "descraption": "קעריות ענק לסלט צבעוני ", "price": "9", "category": "3" },
        { "id": "192", "image": "magashMeutar", "descraption": "מגש מלבני ארוז (16.6*44.5)", "price": "7.5", "category": "3" },
        { "id": "28", "image": "m100", "descraption": "מזלג לבן ", "price": "5", "category": "4" },
        { "id": "29", "image": "cb100", "descraption": "כף לבן ", "price": "5", "category": "4" },
        { "id": "30", "image": "c100", "descraption": "כפיות לבן ", "price": "4.5 ", "category": "4" },
        { "id": "31", "image": "ck1", "descraption": "מזלג שקוף קשיח", "price": "7.5 ", "category": "4" },
        { "id": "32", "image": "ck2", "descraption": "כף שקוף קשיח", "price": "6.9", "category": "4" },
        { "id": "33", "image": "2043", "descraption": "סכין שקוף קשיח", "price": "7.5 ", "category": "4" },
        { "id": "34", "image": "ck4", "descraption": "כפיות שקוף קשיח", "price": "5 ", "category": "4" },
        { "id": "35", "image": "mazleg", "descraption": "מזלג קרם קשיח", "price": "7.5 ", "category": "4" },
        { "id": "36", "image": "ck6", "descraption": "כף קרם קשיח", "price": "6.9", "category": "4" },
        { "id": "37", "image": "ck7", "descraption": "סכין קרם קשיח", "price": "7.5 ", "category": "4" },
        { "id": "38", "image": "ck8", "descraption": "כפיות קרם קשיח", "price": "5 ", "category": "4" },
        { "id": "39", "image": "ck9", "descraption": "כף הגשה", "price": "2.5 ", "category": "4" },
        { "id": "40", "image": "2043", "descraption": "כף הגשה בתפזורת", "price": "2", "category": "4" },
        { "id": "41", "image": "32", "descraption": "מצקת מרק", "price": "4 ", "category": "4" },
        { "id": "43", "image": "34", "descraption": "מפת שלחן שמיניה עבה 2.4 מטר", "price": "7 ", "category": "5" },
        { "id": "46", "image": "37", "descraption": "שקיות מזון (*200)", "price": "3.5 ", "category": "5" },
        { "id": "47", "image": "38", "descraption": "שלישית שקיות מזון בקרטון (*450)", "price": "10 ", "category": "5" },
        { "id": "48", "image": "39", "descraption": "זוג שקיות מזון עבה (*300)", "price": "10 ", "category": "5" },
        { "id": "49", "image": "40", "descraption": "שקיות הקפאה (*100)", "price": "4.5 ", "category": "5" },
        { "id": "50", "image": "nc1", "descraption": "נייר כסף זוג ארוך (15מ')", "price": "11", "category": "6" },
        { "id": "51", "image": "nc2", "descraption": "נייר כסף זוג קצר (15מ')", "price": "10", "category": "6" },
        { "id": "52", "image": "nc3", "descraption": "נייר כסף קצר עבה (60 מ')", "price": "28", "category": "6" },
        { "id": "53", "image": "nc4", "descraption": "נייר כסף ארוך עבה (50 מ')", "price": "37 ", "category": "6" },
        { "id": "54", "image": "117", "descraption": "נילון ניצמד זוג (60 מ')", "price": "10 ", "category": "6" },
        { "id": "55", "image": "118", "descraption": "שקיות צליה (10)", "price": "5.5 ", "category": "6" },
        { "id": "56", "image": "119", "descraption": "נייר אפיה (50)", "price": "9 ", "category": "6" },
        { "id": "172", "image": "", "descraption": "תבניות אינגליש ארוך ארוז", "price": "7", "category": "6" },
        { "id": "57", "image": "t1", "descraption": "תבניות קטן ארוז", "price": "7 ", "category": "6" },
        { "id": "58", "image": "t2", "descraption": "תבניות קטן עמוק ארוז", "price": "7 ", "category": "6" },
        { "id": "60", "image": "t3", "descraption": "תבניות ארוז בינוני ", "price": "7", "category": "6" },
        { "id": "61", "image": "t4", "descraption": "תבניות גדול ארוז", "price": "7 ", "category": "6" },
        { "id": "59", "image": "", "descraption": "תבניות ענק לתנור ארוז ", "price": "7", "category": "6" },
        { "id": "62", "image": "tp2", "descraption": "תבניות קטנות בתפזורת", "price": "0.7 ", "category": "6" },
        { "id": "64", "image": "tp5", "descraption": "תבניות קטנות עמוקת בתפזורת", "price": "0.9 ", "category": "6" },
        { "id": "63", "image": "tp1", "descraption": "תבניות אינגליש בתפזורת", "price": "0.7 ", "category": "6" },
        { "id": "65", "image": "", "descraption": "מכסה לתבניות קטנות עמוקת בתפזורת", "price": "0.9 ", "category": "6" },
        { "id": "66", "image": "tp3", "descraption": "תבניות בינוני", "price": "1", "category": "6" },
        { "id": "67", "image": "tp4", "descraption": "תבניות גדול", "price": "1", "category": "6" },
        { "id": "68", "image": "tp6", "descraption": "תבניות ענק", "price": "2 ", "category": "6" },
        { "id": "69", "image": "122", "descraption": "מארז תבניות עגולות", "price": "10", "category": "6" },
        { "id": "70", "image": "m1", "descraption": "מנג'ט לבן 1.5-", "price": "3.5", "category": "6" },
        { "id": "71", "image": "m2", "descraption": "מנג'ט לבן 2-", "price": "4", "category": "6" },
        { "id": "72", "image": "m3", "descraption": "מנג'ט לבן 3-", "price": "4.5", "category": "6" },
        { "id": "73", "image": "m1c", "descraption": "מנג'ט מעוטר 1.5-", "price": "4", "category": "6" },
        { "id": "74", "image": "m2c", "descraption": "מנג'ט מעוטר 2-", "price": "4.5", "category": "6" },
        { "id": "75", "image": "m3c", "descraption": "מנג'ט מעוטר 3-", "price": "5", "category": "6" },
        { "id": "76", "image": "125", "descraption": "מאפינס בינוני (*20)", "price": "8 ", "category": "6" },
        { "id": "183", "image": "kinuchit", "descraption": "קינוחיות שקופות (*20)", "price": "10", "category": "6" },
        { "id": "77", "image": "ga1", "descraption": "מארז 4 גביע אמרקאי 1 ל'", "price": "7 ", "category": "7" },
        { "id": "78", "image": "ga4", "descraption": "מארז 6 גביע אמרקאי 1/2 ל'", "price": "7 ", "category": "7" },
        { "id": "79", "image": "ga25", "descraption": "מארז 8 גביע אמרקאי 1/4 ל'", "price": "7 ", "category": "7" },
        { "id": "80", "image": "k1", "descraption": "מארז 3 מיכלי אחסון 1 קג'", "price": "7 ", "category": "7" },
        { "id": "81", "image": "k2", "descraption": "מארז 3 מיכלי אחסון 2 קג'", "price": "7.5 ", "category": "7" },
        { "id": "82", "image": "k3", "descraption": "מארז 2 מיכלי אחסון 3 קג'", "price": "8 ", "category": "7" },
        { "id": "83", "image": "k4", "descraption": "מארז 2 מיכלי אחסון 4.5 קג'", "price": "8 ", "category": "7" },
        { "id": "84", "image": "43", "descraption": "גפרורים ענק", "price": "5 ", "category": "7" },
        { "id": "85", "image": "42", "descraption": "גפרורים עשיריה", "price": "4 ", "category": "7" },
        { "id": "86", "image": "44", "descraption": "פתיל צף עגול", "price": "4 ", "category": "7" },
        { "id": "87", "image": "45", "descraption": "פתיל צף משושה גדול", "price": "5", "category": "7" },
        { "id": "88", "image": "nn24", "descraption": "נר נשמה 24 שעות", "price": "1.5 ", "category": "7" },
        { "id": "89", "image": "nn48", "descraption": "נר 48 שעות בזכוכית", "price": "4 ", "category": "7" },
        { "id": "90", "image": "47", "descraption": "נרות חימום (*50)", "price": "10 ", "category": "7" },
        { "id": "200", "image": "mapiotdouble", "descraption": "מפיות אירוח( *150)", "price": "7.5", "category": "8" },
        { "id": "91", "image": "49", "descraption": "מפיות אירוח (*80)", "price": "3.9", "category": "8" },
        { "id": "92", "image": "50", "descraption": "מפיות אירוח מנוקדות(*80)", "price": "4.9", "category": "8" },
        { "id": "93", "image": "51", "descraption": "טישו חמישיה (*500)", "price": "10", "category": "8" },
        { "id": "95", "image": "53", "descraption": "נייר סופג (*6)", "price": "11", "category": "8" },
        { "id": "96", "image": "54", "descraption": "סופר מגבת כ-800 גר'", "price": "20", "category": "8" },
        { "id": "97", "image": "55", "descraption": "שישית גלילי נייר ניגוב (600 מטר)", "price": "50", "category": "8" },
        { "id": "98", "image": "56", "descraption": "נייר טואלט טישו (32 גלילים)", "price": "32", "category": "8" },
        { "id": "99", "image": "57", "descraption": "נייר טואלט חתוך (*9000)", "price": "85", "category": "8" },
        { "id": "100", "image": "58", "descraption": "נייר ניגוב צץ רץ (*4000)", "price": "67", "category": "8" },
        { "id": "101", "image": "59", "descraption": "שקיות נשיאה קטן(*100)", "price": "11", "category": "9" },
        { "id": "102", "image": "60", "descraption": "שקיות נשיאה גדול (*100)", "price": "14", "category": "9" },
        { "id": "103", "image": "61", "descraption": "אשפתון כתום 75/90 (*50)", "price": "9 ", "category": "9" },
        { "id": "104", "image": "62", "descraption": "אשפתון שחור מרשרש 75/90 (*50)", "price": "16 ", "category": "9" },
        { "id": "105", "image": "63", "descraption": "אשפתון עבה 75/85 (*25)", "price": "10 ", "category": "9" },
        { "id": "106", "image": "64", "descraption": "אשפתון עבה מאוד 75/90 גדול (*25)", "price": "13 ", "category": "9" },
        { "id": "107", "image": "sakiot", "descraption": "אשפתון אשפה עם שרוך 52/65 (*60)", "price": "15 ", "category": "9" },
        { "id": "108", "image": "66", "descraption": "שקיות אשפה + ידית 75/90 גדול (*40)", "price": "18", "category": "9" },
        { "id": "109", "image": "67", "descraption": "רבעיית כריות יפני", "price": "10", "category": "10" },
        { "id": "110", "image": "68", "descraption": "רבעיית ננס מתכת", "price": "10", "category": "10" },
        { "id": "111", "image": "69", "descraption": "שלישיית סקוטש ברייט", "price": "10", "category": "10" },
        { "id": "112", "image": "70", "descraption": "זוג ספוג קלין שבת", "price": "8", "category": "10" },
        { "id": "113", "image": "71", "descraption": "צמר פלדה", "price": "4 ", "category": "10" },
        { "id": "114", "image": "72", "descraption": "ספוג הפלא בלוק", "price": "4 ", "category": "10" },
        { "id": "116", "image": "74", "descraption": "חמישית מטליות מיקרופייבר", "price": "12 ", "category": "10" },
        { "id": "117", "image": "75", "descraption": "שלישיית סחבות מיקרופייבר לרצפה", "price": "18 ", "category": "10" },
        { "id": "118", "image": "76", "descraption": "זוג סחבות לרצפה (גדולות)", "price": "12", "category": "10" },
        { "id": "119", "image": "77", "descraption": "מטליות לחות לניקוי רצפות גדול (10)", "price": "10 ", "category": "10" },
        { "id": "120", "image": "79", "descraption": "כפפות ניטריל ללא אבקה (100)", "price": "18", "category": "10" },
        { "id": "121", "image": "81", "descraption": "מגב שיש/חלון", "price": "10", "category": "10" },
        { "id": "122", "image": "82", "descraption": "דלי גדול כ 12 ליטר", "price": "18", "category": "10" },
        { "id": "123", "image": "p1", "descraption": "פח 50 ל'", "price": "65", "category": "10" },
        { "id": "124", "image": "p1", "descraption": "פח 25 ל'", "price": "50", "category": "10" },
        { "id": "125", "image": "p1", "descraption": "פח שובך 10 ל'", "price": "40", "category": "10" },
        { "id": "126", "image": "84", "descraption": "מברשת לאסלה + מתקן", "price": "11", "category": "10" },
        { "id": "178", "image": "MetateTreilor", "descraption": "מטאטא טירולר", "price": "80", "category": "10" },
        { "id": "177", "image": "MagavTreilor", "descraption": "מגב טירולר", "price": "80", "category": "10" },
        { "id": "176", "image": "CafTerilor", "descraption": "כף אשפה טירולר", "price": "75", "category": "10" },
        { "id": "127", "image": "85", "descraption": "כף אשפה עם ידית", "price": "17", "category": "10" },
        { "id": "128", "image": "me3", "descraption": "מטאטא", "price": "10 ", "category": "10" },
        { "id": "130", "image": "me4", "descraption": "מברשת מטאטא איכותי", "price": "15", "category": "10" },
        { "id": "131", "image": "me2", "descraption": "מגב מתכת איכותי 40 סמ'", "price": "15", "category": "10" },
        { "id": "132", "image": "88", "descraption": "מברשת מטאטא כביש (סיבים חזקים)", "price": "18", "category": "10" },
        { "id": "134", "image": "89", "descraption": "אלכוהול 70% (100מל')", "price": "4 ", "category": "11" },
        { "id": "135", "image": "90", "descraption": "מגבונים לחים (72)", "price": "2.5 ", "category": "11" },
        { "id": "136", "image": "91", "descraption": "מגבונים לחים עבים (72)", "price": "3.5 ", "category": "11" },
        { "id": "137", "image": "92", "descraption": "קיסמי שינים מלחיה (300)", "price": "5", "category": "11" },
        { "id": "138", "image": "93", "descraption": "פלסטרים (50)", "price": "7 ", "category": "11" },
        { "id": "139", "image": "94", "descraption": "צמרוני אוזנים מעץ (300)", "price": "4 ", "category": "11" },
        { "id": "140", "image": "95", "descraption": "צמרוני אוזנים מפלסטיק (200)", "price": "5 ", "category": "11" },
        { "id": "141", "image": "96", "descraption": "ספוג רחצה", "price": "10", "category": "11" },
        { "id": "142", "image": "97", "descraption": "צמר גפן (100 גר')", "price": "5 ", "category": "11" },
        { "id": "143", "image": "sano", "descraption": "שלישיית סבון ידים כיף", "price": "22 ", "category": "11" },
        { "id": "190", "image": "Sabon_masheva", "descraption": "סבון נוזלי ליטר משאבה", "price": "10", "category": "11" },
        { "id": "158", "image": "Sabon_Nozli", "descraption": "סבון נוזלי 4 ל'", "price": "25", "category": "11" },
        { "id": "145", "image": "111", "descraption": "מילוי למטהר אויר חשמלי", "price": "14 ", "category": "11" },
        { "id": "155", "image": "98", "descraption": "קשים לשתיה (200)", "price": "8", "category": "12" },
        { "id": "156", "image": "99", "descraption": "שלישית דבק סלוטייפ", "price": "4 ", "category": "12" },
        { "id": "157", "image": "101", "descraption": "נוזל כלים סנו (700 מל׳)", "price": "11 ", "category": "12" },
        { "id": "159", "image": "102", "descraption": "סנובון לאסלה", "price": "12 ", "category": "12" },
        { "id": "161", "image": "103", "descraption": "חלונית מתז 1 ליטר", "price": "7.5", "category": "12" },
        { "id": "162", "image": "109", "descraption": "סנו ז'אוול מרסס", "price": "16", "category": "12" },
        { "id": "164", "image": "112", "descraption": "מסיר שומנים סנו פורטה", "price": "16", "category": "12" },
        { "id": "165", "image": "rases", "descraption": "רסס ונגב סנו", "price": "14", "category": "12" },
        { "id": "166", "image": "hitoi", "descraption": "תרסיס חיטוי משטחים סנו", "price": "14", "category": "12" },
        { "id": "167", "image": "113", "descraption": "מגבוני דלי", "price": "20", "category": "12" },
        { "id": "168", "image": "106", "descraption": "נוזל רצפות סנו פרש 4 ליטר", "price": "23", "category": "12" },
        { "id": "169", "image": "sion", "descraption": "נוזל רצפות שיאון 4 ל'", "price": "13", "category": "12" },
        { "id": "170", "image": "114", "descraption": "ריצפז 2 ליטר", "price": "20", "category": "12" },
        { "id": "171", "image": "107", "descraption": "אקונומיקה מבושמת 4 ליטר", "price": "10", "category": "12" }
    ],
    "category": [
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
        { "image": "12", "p": "שונות - חומרי ניקוי" }
    ]
};

// פונקציית העזר לטעינת דף קטגוריה - קריטי להשארת השם הזה!
function initForCategory(categoryID) {
    createGallery(categoryID);
    addSampleProducts();
}

function createGallery(val_filter) {
    var product_json = productsDB.products.filter(item => val_filter == item.category);
    var gallery = `<p class="text-center">נמצאו ${product_json.length} מוצרים בקטגוריה</p><div class="row">`;
    
    product_json.forEach(p => {
        gallery += `
        <div class='col-md-3 col-xs-6' style="margin-bottom:20px;">
            <div class='thumbnail' style="border-radius:10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <img src='../image/${p.image || 2043}.WebP' style='height:180px; width: 100%; object-fit: contain; padding:10px;'>
                <div class='caption text-center'>
                    <h5 style="height:40px; overflow:hidden;"><b>${p.descraption}</b></h5>
                    <p><b style="font-size:16px;">₪${p.price}</b></p>
                    <button class='btn btn-info btn-block' onclick='openPicker(${p.id})'>
                        <span class="glyphicon glyphicon-shopping-cart"></span> הוסף לסל
                    </button>
                </div>
            </div>
        </div>`;
    });
    gallery += `</div>`;
    
    // הוספת ה-sidebar בתוך id_gallery אם הוא חסר
    gallery += `
    <div id="sidebar">
        <div class="sidebar-header"><h3 class="text-center">סל קניות</h3></div>
        <div class="sidebar-content"><div id="productList"></div></div>
        <div class="fixed-buttons">
            <button class="btn btn-primary btn-block" onclick="end()">לסיכום ושליחה</button>
            <button class="btn btn-default btn-block" onclick="closess()">המשך בקנייה</button>
        </div>
    </div>`;

    document.getElementById("id_gallery").innerHTML = gallery;
}

// פונקציה חדשה: פותחת מודאל לבחירת כמות וצבע
let modalQty = 1;
function openPicker(productId) {
    const p = productsDB.products.find(item => item.id == productId);
    modalQty = 1;
    
    // השתמש במודאל הקיים ב-Bootstrap 3
    const modalHTML = `
    <div class="modal fade" id="pickerModal" role="dialog">
      <div class="modal-dialog modal-sm">
        <div class="modal-content text-right" dir="rtl">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">${p.descraption}</h4>
          </div>
          <div class="modal-body text-center">
            <label>כמות:</label><br/>
            <div class="btn-group">
                <button class="btn btn-default" onclick="changeModalQty(-1)">-</button>
                <button class="btn btn-link" disabled><b id="mQty">1</b></button>
                <button class="btn btn-default" onclick="changeModalQty(1)">+</button>
            </div>
            <hr/>
            <div class="form-group text-right">
                <label>צבע / הערה:</label>
                <input type="text" id="mColor" class="form-control" placeholder="למשל: כחול, חבילה סגורה...">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-block" onclick="finalAdd(${p.id})">הוסף לסל</button>
          </div>
        </div>
      </div>
    </div>`;
    
    $('#pickerModal').remove();
    $('body').append(modalHTML);
    $('#pickerModal').modal('show');
}

function changeModalQty(val) {
    modalQty = Math.max(1, modalQty + val);
    document.getElementById('mQty').innerText = modalQty;
}

function finalAdd(pid) {
    const p = {...productsDB.products.find(i => i.id == pid)};
    p.quantity = modalQty;
    p.color = document.getElementById('mColor').value || "מה שקיים במלאי";
    
    localStorage.setItem(`product_${pid}`, JSON.stringify(p));
    $('#pickerModal').modal('hide');
    addSampleProducts();
    $('#sidebar').addClass('active');
}

function addSampleProducts() {
    var productList = $('#productList');
    productList.empty();
    let count = 0;
    for (var i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith('product_')) {
            count++;
            let p = JSON.parse(localStorage.getItem(key));
            productList.append(`
                <div class="product-item" style="display:flex; align-items:center; margin-bottom:5px; background:#fff; border:1px solid #ddd; border-radius:5px;">
                    <button class="btn btn-danger btn-xs" onclick="removeItem(${p.id})" style="margin:5px;">&times;</button>
                    <div style="flex-grow:1; padding:5px; text-align:right;">
                        <small><b>${p.descraption}</b></small><br/>
                        <small class="text-muted">${p.quantity} יח' | ${p.color}</small>
                    </div>
                </div>`);
        }
    }
    if (count === 0) productList.append('<p class="text-center text-muted">הסל ריק</p>');
}

function removeItem(id) {
    localStorage.removeItem('product_' + id);
    addSampleProducts();
}

function closess() { $('#sidebar').removeClass('active'); }

// פונקציה לחיפוש בתוך קטגוריה
function InputSearchInCategory(category) {
    var val = document.getElementById("InputSearch").value.toLowerCase();
    if (val.length == 0) return createGallery(category);
    var filtered = productsDB.products.filter(p => p.descraption.toLowerCase().includes(val) && p.category == category);
    var gallery = `<p class="text-center">נמצאו ${filtered.length} תוצאות</p><div class="row">`;
    filtered.forEach(p => { gallery += getProductHTML_Simple(p); });
    gallery += `</div>` + getSidebarHTML();
    document.getElementById("id_gallery").innerHTML = gallery;
    addSampleProducts();
}

function getProductHTML_Simple(p) {
    return `
    <div class='col-md-3 col-xs-6' style="margin-bottom:20px;">
        <div class='thumbnail'>
            <img src='../image/${p.image || 2043}.WebP' style='height:150px; width: 100%; object-fit: contain;'>
            <div class='caption text-center'>
                <h5 style="height:35px; overflow:hidden;">${p.descraption}</h5>
                <button class='btn btn-info btn-xs' onclick='openPicker(${p.id})'>הוסף</button>
            </div>
        </div>
    </div>`;
}