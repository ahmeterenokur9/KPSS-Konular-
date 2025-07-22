// KPSS Lisans Ders ve Konuları
const kpssKonulari = [
  {
    ders: 'Türkçe',
    konular: [
      'Sözcükte Anlam',
      'Cümlede Anlam',
      'Paragraf',
      'Dil Bilgisi',
      'Yazım Kuralları',
      'Noktalama İşaretleri',
      'Anlatım Bozuklukları',
      'Sözel Mantık'
    ]
  },
  {
    ders: 'Matematik',
    konular: [
      'Temel Kavramlar',
      'Sayılar',
      'Bölme ve Bölünebilme',
      'EBOB-EKOK',
      'Rasyonel Sayılar',
      'Basit Eşitsizlikler',
      'Mutlak Değer',
      'Üslü Sayılar',
      'Köklü Sayılar',
      'Çarpanlara Ayırma',
      'Oran Orantı',
      'Denklem Çözme',
      'Problemler',
      'Kümeler',
      'Fonksiyonlar',
      'Permütasyon-Kombinasyon-Olasılık',
      'Grafikler',
      'Tablolar'
    ]
  },
  {
    ders: 'Tarih',
    konular: [
      'İlk Türk Devletleri',
      'İslamiyet Öncesi Türk Tarihi',
      'İslam Tarihi ve Uygarlığı',
      'Türk-İslam Devletleri',
      'Osmanlı Devleti Kuruluş',
      'Osmanlı Devleti Yükselme',
      'Osmanlı Devleti Duraklama',
      'Osmanlı Devleti Gerileme',
      'Osmanlı Devleti Dağılma',
      'Kurtuluş Savaşı Hazırlık',
      'Kurtuluş Savaşı Cepheler',
      'Atatürk İlkeleri',
      'İnkılaplar',
      'Çağdaş Türk ve Dünya Tarihi'
    ]
  },
  {
    ders: 'Coğrafya',
    konular: [
      'Türkiye’nin Coğrafi Konumu',
      'Harita Bilgisi',
      'İklim Bilgisi',
      'Yer Şekilleri',
      'Nüfus ve Yerleşme',
      'Ekonomik Faaliyetler',
      'Bölgeler',
      'Çevre ve Toplum'
    ]
  },
  {
    ders: 'Vatandaşlık',
    konular: [
      'Hukukun Temel Kavramları',
      'Anayasa',
      'Yasama',
      'Yürütme',
      'Yargı',
      'Temel Hak ve Hürriyetler',
      'Uluslararası Kuruluşlar'
    ]
  },
  {
    ders: 'Güncel Bilgiler',
    konular: [
      'Son Yıllardaki Gelişmeler',
      'Türkiye ve Dünya Gündemi'
    ]
  }
];

const STORAGE_KEY = 'kpss_konular_takip';

function loadDurum() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

function saveDurum(durum) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(durum));
}

function renderKpssListesi() {
  const durum = loadDurum();
  const container = document.getElementById('kpss-listesi');
  container.innerHTML = '';

  kpssKonulari.forEach((dersObj, dersIdx) => {
    const dersDiv = document.createElement('div');
    dersDiv.className = 'konu-ders';
    const h2 = document.createElement('h2');
    h2.textContent = dersObj.ders;
    dersDiv.appendChild(h2);

    const ul = document.createElement('ul');
    ul.className = 'konu-listesi';

    dersObj.konular.forEach((konu, konuIdx) => {
      const li = document.createElement('li');
      if (durum[`${dersIdx}_${konuIdx}`]) {
        li.classList.add('tamamlandi');
      }
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'konu-checkbox';
      checkbox.checked = !!durum[`${dersIdx}_${konuIdx}`];
      checkbox.addEventListener('change', () => {
        durum[`${dersIdx}_${konuIdx}`] = checkbox.checked;
        saveDurum(durum);
        renderKpssListesi();
      });
      const span = document.createElement('span');
      span.className = 'konu-adi';
      span.textContent = konu;
      li.appendChild(checkbox);
      li.appendChild(span);
      ul.appendChild(li);
    });
    dersDiv.appendChild(ul);
    container.appendChild(dersDiv);
  });
}

document.addEventListener('DOMContentLoaded', renderKpssListesi);