document.getElementById('randevu-al').addEventListener('click', function (e) {
    e.preventDefault();

    // Formdaki verileri al
    var selectIslem = document.getElementById('selectIslem').value;
    var inputTarih = document.getElementById('inputTarih').value;
    var inputSaat = document.getElementById('inputSaat').value;
    var inputIsim = document.getElementById('inputIsim').value;
    var inputSoyisim = document.getElementById('inputSoyisim').value;
    var inputTelefon = document.getElementById('inputTelefon').value;

    // Önceki randevu sayısını al
    var randevuSayisi = parseInt(localStorage.getItem('randevuSayisi')) || 0;

    // Yeni randevu dizisinin adını oluştur
    var diziAdi = "randevu" + (randevuSayisi + 1);

    // Yeni randevu verilerini oluştur
    var yeniRandevu = {
        islem: selectIslem,
        tarih: inputTarih,
        saat: inputSaat,
        isim: inputIsim,
        soyisim: inputSoyisim,
        telefon: inputTelefon
    };

    // Yeni randevuyu localStorage'a kaydet
    localStorage.setItem(diziAdi, JSON.stringify(yeniRandevu));

    // Yeni randevu sayısını güncelle
    randevuSayisi += 1;

    // Güncellenmiş randevu sayısını localStorage'a kaydet
    localStorage.setItem('randevuSayisi', randevuSayisi);

    // Formu temizle
    document.getElementById('formRandevu').reset();

    // Kullanıcıyı bilgilendir
    alert('Randevu başarıyla kaydedildi!');
});

