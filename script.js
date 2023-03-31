// 1- "Elma, Armut, Muz, Çilek" elemanlarina sahip bir dizi olusturunuz.

    let meyveler = ["elma", "armut", "muz", "cilek"];
    console.log(meyveler);

// 2- Dizi kaç elemanlidir?

     console.log(meyveler.length);
// 3- Dizinin ilk ve son eleman1 nedir?d
    console.log(meyveler[0]); // ilk elamani
    console.log(meyveler[meyveler.length - 1 ]); // son elemani


// 4- Elma dizinin bir elemanimidir?
    console.log(meyveler.includes("elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

    meyveler[meyveler.length] = "kiraz"; // method kullanmadan ekleme
    meyveler.push("erik"); // sonuna ekleme
    meyveler.unshift("ayva");   // basina ekleme
    console.log(meyveler);  

// 6- Dizinin son 2 eleman1n1 siliniz.
    /*
    meyveler.pop();
    console.log(meyveler);
    */
    meyveler.splice(meyveler.length - 2, 2);
    console.log(meyveler)


// 7- Așaidaki bilgileri dizi içerisinde saklay1n1z ve her örencinin yasini hesaplayiniz.
     /*
         örenci 1: Yigit Bilgi 2010 (70,60,80)
         Örenci 2: Ada Bilgi 2012
                                        (80,80,90)
         Örenci 3: Ahmet Turan 2009 (60,60,70)
     */

         let ogr1 = ["yigit", "bilgi", 2010, [70, 60, 80]];
         let ogr2 = ["ada", "bilgi", 2012, [80, 80, 00]];
         let ogr3 = ["ahmet", "turan", 2009, [60, 60, 70]];

        let ogrenciler = [ogr1, ogr2, ogr3];
        
    let yigityas = new Date().getFullYear() - ogrenciler[0][2];
    let adayas = new Date().getFullYear() - ogrenciler[1][2];
    let ahmetyas = new Date().getFullYear() - ogrenciler[2][2];
    let yigitnot = ogrenciler[0][3];
    let adanotort = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2] )/ 3 ;
    

    console.log(yigityas, adayas, ahmetyas);
    console.log(yigitnot);
    console.log(adanotort.toFixed(1));
    

    

