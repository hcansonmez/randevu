document.getElementById('getir').addEventListener('click', function () {
    // Randevu sayısını al
    var randevuSayisi = parseInt(localStorage.getItem('randevuSayisi')) || 0;
  
    // Tablo elementini seç
    var tablo = document.getElementById('randevuTablosu');
  
    // Tablonun içeriğini sıfırla
    tablo.innerHTML = '';
  
    // Her bir randevu için döngü oluştur
    for (var i = 1; i <= randevuSayisi; i++) {
      // Randevu dizisi adını oluştur
      var diziAdi = 'randevu' + i;
  
      // Randevuyu local storage'dan al
      var randevu = JSON.parse(localStorage.getItem(diziAdi));
  
      // Randevu verilerini tabloya ekle
      var row = tablo.insertRow();
  
      var islemCell = row.insertCell();
      islemCell.textContent = randevu.islem;
  
      var tarihCell = row.insertCell();
      tarihCell.textContent = randevu.tarih;
  
      var saatCell = row.insertCell();
      saatCell.textContent = randevu.saat;
  
      var isimCell = row.insertCell();
      isimCell.textContent = randevu.isim;
  
      var soyisimCell = row.insertCell();
      soyisimCell.textContent = randevu.soyisim;
  
      var numaraCell = row.insertCell();
      numaraCell.textContent = randevu.telefon;
    }
  });
  