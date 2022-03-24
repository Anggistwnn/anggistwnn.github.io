var tanya = true;
while (tanya) {

    // Menangkap pilihan player

    var p = prompt('pilihan : gajah, semut, orang');

    // Menangkap pilihan komputer
    // membangkitkan bilangan random menggunaakan math
    var comp = Math.random();
    // jika computer memilih kurang dari 0,34 makan computer memilih gajak
    if (comp < 0.34) {
        comp = 'gajah';
        // dan jika computer milih lebih dari 0.34 sampai 0,67 itu comp memilih orang
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
        // dan selain dari itu memilih semut 
    } else {
        comp = 'semut';
    }
    console.log(comp);

    // menentukan rules
    var hasil = '';
    //  ini membuat jika komputer memilih sama dengan yang kita pilih maka hasinya seri
    if (p == comp) {
        hasil = 'SERI!';
        // dan jika kit memilih gajah dan kita orang maka kompuer kalah
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan pilihan yang salah!'
    }

    // tampilkan hasil

    alert('Kamu memilih : ' + p + ' dan komputer memilih ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm(' lagi? ');
}

alert('Terimakasih sudah bermain!')