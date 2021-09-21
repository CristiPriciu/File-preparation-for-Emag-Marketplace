const fs = require('fs'); //pentru creare fisiere
const xlsx = require('xlsx') //pentru citire si scriere fisiere .xlsx

const myXLSX = xlsx.readFile('listadeEAN.xlsx'); //citeste fisierul .xlsx
const sheet = myXLSX.Sheets[myXLSX.SheetNames[0]]; //selecteaza primul sheet
const tableRange = xlsx.utils.decode_range(sheet['!ref']); //numara de row-urile din primul sheet

for (let i = 2; i < tableRange.e.r + 2; i++) {
    
    myRowString = "myXLSX.Sheets.Sheet1.A"+i+".v"; //EAN-ul din tabel. Va deveni nume de director

    //Face directorul folosind EAN-ul de mai sus
    fs.mkdirSync(("./target/" + eval(myRowString)), function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Noul director " + eval(myRowString) + " a fost creat cu succes.")
        }
      })

      //copiaza un fisier dintr-un loc in altul, schimband numele (in cazul de mai jos este acelasi nume)
      fs.copyFileSync("./source/main.jpg", "./target/" + eval(myRowString) + "/main.jpg");
      fs.copyFileSync("./source/2.jpg", "./target/" + eval(myRowString) + "/1.jpg");
      fs.copyFileSync("./source/2.jpg", "./target/" + eval(myRowString) + "/2.jpg");
      fs.copyFileSync("./source/3.jpg", "./target/" + eval(myRowString) + "/3.jpg");
      //pentru mai multe poze, copiaza linia de deasupra si schimba numele pozei in 4.jpg (sau cum vrei tu)

      console.log("Am creat si populat directorul " + eval(myRowString));
  }
  console.log("Am terminat de creat si populat directoarele");