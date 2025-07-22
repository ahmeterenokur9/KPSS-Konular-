// KPSS Lisans Ders ve Konuları (Alt başlıklarla)
const kpssKonulari = [
  {
    ders: 'Türkçe',
    konular: [
      'Sözcükte Anlam',
      'Söz Yorumu',
      'Deyim ve Atasözü',
      'Cümlede Anlam',
      {
        konu: 'Paragraf',
        altKonular: [
          'Paragrafta Anlatım Teknikleri',
          'Paragrafta Düşünceyi Geliştirme Yolları',
          'Paragrafta Yapı',
          'Paragrafta Konu-Ana Düşünce',
          'Paragrafta Yardımcı Düşünce'
        ]
      },
      'Ses Bilgisi',
      'Yazım Kuralları',
      'Noktalama İşaretleri',
      'Sözcükte Yapı/Ekler',
      {
        konu: 'Sözcük Türleri',
        altKonular: [
          'İsimler',
          'Zamirler',
          'Sıfatlar',
          'Zarflar',
          'Edat – Bağlaç – Ünlem'
        ]
      },
      {
        konu: 'Fiiller',
        altKonular: [
          'Fiilde Anlam (Kip-Kişi-Yapı)',
          'Ek Fiil',
          'Fiilimsi',
          'Fiilde Çatı'
        ]
      },
      'Sözcük Grupları',
      'Cümlenin Ögeleri',
      'Cümle Türleri',
      'Anlatım Bozukluğu'
    ]
  },
  {
    ders: 'Matematik',
    konular: [
      'Temel Kavramlar',
      'Sayı Basamakları',
      'Bölme ve Bölünebilme',
      'EBOB – EKOK',
      'Rasyonel Sayılar',
      'Basit Eşitsizlikler',
      'Mutlak Değer',
      'Üslü Sayılar',
      'Köklü Sayılar',
      'Çarpanlara Ayırma',
      'Oran Orantı',
      'Denklem Çözme',
      {
        konu: 'Problemler',
        altKonular: [
          'Sayı Problemleri',
          'Kesir Problemleri',
          'Yaş Problemleri',
          'Hareket Hız Problemleri',
          'İşçi Emek Problemleri',
          'Yüzde Problemleri',
          'Kar Zarar Problemleri',
          'Karışım Problemleri',
          'Grafik Problemleri',
          'Rutin Olmayan Problemler'
        ]
      },
      'Kümeler – Kartezyen Çarpım',
      'Mantık',
      'Fonksiyonlar',
      'Polinomlar',
      '2. Dereceden Denklemler',
      'Permütasyon ve Kombinasyon',
      'Olasılık',
      'Veri – İstatistik'
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
      if (typeof konu === 'string') {
        // Düz konu
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
      } else if (typeof konu === 'object' && konu.konu && Array.isArray(konu.altKonular)) {
        // Ana konu + alt başlıklar
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'konu-adi';
        span.textContent = konu.konu;
        li.appendChild(span);
        // Alt başlıklar için iç içe ul
        const altUl = document.createElement('ul');
        altUl.className = 'konu-listesi';
        konu.altKonular.forEach((altKonu, altIdx) => {
          const altLi = document.createElement('li');
          if (durum[`${dersIdx}_${konuIdx}_${altIdx}`]) {
            altLi.classList.add('tamamlandi');
          }
          const altCheckbox = document.createElement('input');
          altCheckbox.type = 'checkbox';
          altCheckbox.className = 'konu-checkbox';
          altCheckbox.checked = !!durum[`${dersIdx}_${konuIdx}_${altIdx}`];
          altCheckbox.addEventListener('change', () => {
            durum[`${dersIdx}_${konuIdx}_${altIdx}`] = altCheckbox.checked;
            saveDurum(durum);
            renderKpssListesi();
          });
          const altSpan = document.createElement('span');
          altSpan.className = 'konu-adi';
          altSpan.textContent = altKonu;
          altLi.appendChild(altCheckbox);
          altLi.appendChild(altSpan);
          altUl.appendChild(altLi);
        });
        li.appendChild(altUl);
        ul.appendChild(li);
      }
    });
    dersDiv.appendChild(ul);
    container.appendChild(dersDiv);
  });
}

document.addEventListener('DOMContentLoaded', renderKpssListesi);