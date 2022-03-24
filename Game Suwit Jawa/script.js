function getPilihanComp() {
    const comp = Math.random();
    // jika computer memilih kurang dari 0,34 makan computer memilih gajak
    if (comp < 0.34) return 'gajah';
    // dan jika computer milih lebih dari 0.34 sampai 0,67 itu comp memilih orang
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    // dan selain dari itu memilih semut 
    return 'semut';

}

function getHasil(comp, player) {
    //  ini membuat jika komputer memilih sama dengan yang kita pilih maka hasinya seri
    if (player == comp) return 'SERI!';
    // dan jika kita memilih gajah dan komputer memilih orang maka kompuer kalah
    // == tanda ini berguna unutk mengecek hasil
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    // selain dari orang dan semut (gajah tidak mungkin karna sudah dihandle di baris 14)
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

// membuat event yang akan memunculkan gambar pada pilihan computer
// mengambil parent
const pGajah = document.querySelector('.gajah');
// merancang vasnya dengan parent
pGajah.addEventListener('click', function () {
    // mengambil pilihan komputer, pilihan random dan masuk menjadi pilihan computer
    const PilihanComp = getPilihanComp();
    // mengambil pilihan player sebagai gajah 
    const PilihanPlayer = pGajah.className;
    // menentukan hasil pilihan player dan computer
    const Hasil = getHasil(PilihanComp, PilihanPlayer);
    // mengganti gambarnya sebagai pilihan dari computer
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + PilihanComp + '.png');
    // memasukan info dari hasilnya
    const info = document.querySelector('.info');
    // memunculkan hasil dengan manipulasi InnerHTML = hasil
    info.innerHTML = Hasil;
});

// membuat event yang akan memunculkan gambar pada pilihan computer
// mengambil parent
const pOrang = document.querySelector('.orang');
// merancang vasnya dengan parent
pOrang.addEventListener('click', function () {
    // mengambil pilihan komputer, pilihan random dan masuk menjadi pilihan computer
    const PilihanComp = getPilihanComp();
    // mengambil pilihan player sebagai gajah 
    const PilihanPlayer = pOrang.className;
    // menentukan hasil pilihan player dan computer
    const Hasil = getHasil(PilihanComp, PilihanPlayer);
    // mengganti gambarnya sebagai pilihan dari computer
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + PilihanComp + '.png');
    // memasukan info dari hasilnya
    const info = document.querySelector('.info');
    // memunculkan hasil dengan manipulasi InnerHTML = hasil
    info.innerHTML = Hasil;
});

// membuat event yang akan memunculkan gambar pada pilihan computer
// mengambil parent
const pSemut = document.querySelector('.semut');
// merancang vasnya dengan parent
pSemut.addEventListener('click', function () {
    // mengambil pilihan komputer, pilihan random dan masuk menjadi pilihan computer
    const PilihanComp = getPilihanComp();
    // mengambil pilihan player sebagai gajah 
    const PilihanPlayer = pSemut.className;
    // menentukan hasil pilihan player dan computer
    const Hasil = getHasil(PilihanComp, PilihanPlayer);
    // mengganti gambarnya sebagai pilihan dari computer
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + PilihanComp + '.png');
    // memasukan info dari hasilnya
    const info = document.querySelector('.info');
    // memunculkan hasil dengan manipulasi InnerHTML = hasil
    info.innerHTML = Hasil;
});