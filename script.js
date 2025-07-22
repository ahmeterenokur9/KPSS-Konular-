// KPSS Lisans Ders ve Konuları (Sitedeki gibi ayrıntılı Türkçe ve Matematik)
const kpssKonulari = [
  {
    ders: 'Türkçe',
    konular: [
      {
        konu: 'Sözcükte Anlam',
        altKonular: [
          'Sözcüğün Anlam Özellikleri',
          'Gerçek Anlam',
          'Mecaz Anlam',
          'Terimsel Anlam',
          'Sözcükte Anlam Olayları',
          'Benzetme (Teşbih)',
          'Eğretileme (İstiare)',
          'Kişileştirme (Teşhis)',
          'Kinaye (Değinmece)',
          'Mecazımürsel (Ad Aktarması)',
          'Dokundurma (Tariz)',
          'Mübalağa (Abartma)',
          'Dolaylama',
          'Güzel Adlandırma',
          'Sözcükler Arası Anlam İlişkileri',
          'Eş - Yakın Anlamlı Sözcükler',
          'Karşıt (Zıt) Anlamlı Sözcükler',
          'Eş Sesli (Sesteş) Sözcükler',
          'Somut - Soyut Anlamlı Sözcükler',
          'Nitel-Nicel Anlamlı Sözcükler',
          'Genel-Özel Anlamlı Sözcükler',
          'Yansıma Sözcükler',
          'Kalıplaşmış Söz Öbekleri',
          'İkilemeler',
          'Pekiştirmeler',
          'Deyimler',
          'Atasözleri',
          'Kalıplaşmamış Söz Öbekleri'
        ]
      },
      {
        konu: 'Cümlede Anlam',
        altKonular: [
          'Cümlenin Yorumu',
          'Cümlenin İletisi',
          'Cümleden Çıkarılacak Kesin Yargı',
          'Cümlede Vurgu',
          'Eş - Yakın Anlamlı Cümleler',
          'Anlamca Çelişen Cümleler',
          'Anlamlarına Göre Cümleler',
          'Olumlu Cümleler',
          'Olumsuz Cümleler',
          'Soru Cümleleri',
          'Ünlem Cümleleri',
          'Emir Cümleleri',
          'İçerdiği Duygu, Düşünce ve Duruma Göre Cümleler',
          'Çıkarım',
          'Kanıksama',
          'Saptama',
          'Değerlendirme',
          'Yakınma - Sitem',
          'Pişmanlık',
          'Ön Yargı',
          'Olasılık',
          'Varsayım',
          'Tahmin',
          'Şaşırma',
          'Kuşku',
          'Uyarı',
          'Öneri',
          'Anlam İlişkilerine Göre Cümleler',
          'Neden - Sonuç (Gerekçe) İlişkisi',
          'Amaç - Sonuç İlişkisi',
          'Koşul (Şart) Cümleleri',
          'Anlatım Özelliklerine Göre Cümleler',
          'Öznel ve Nesnel Anlatım',
          'Tanım Cümleleri',
          'Karşılaştırma Cümleleri',
          'İçerik ve Üslup (Biçem) Bildiren Cümleler',
          'Doğrudan Anlatım (Aktarma) Cümleleri',
          'Dolaylı Anlatım (Aktarma) Cümleleri',
          'Cümle Analizi (Cümle Değerlendirme)',
          'Cümlenin Yapısı',
          'Cümle Tamamlama',
          'Cümle Oluşturma'
        ]
      },
      {
        konu: 'Paragrafta Anlam',
        altKonular: [
          'Paragrafın Yapısı',
          'Paragrafın Bölümleri ve Boşluk Tamamlama',
          'Düşüncenin Akışını Bozan Cümleler',
          'Paragrafı İkiye Bölme',
          'Paragraf Oluşturma',
          'Paragrafta Yer Değiştirme',
          'Paragrafın İçeriği',
          'Ana Düşünce',
          'Yardımcı Düşünceler',
          'Paragrafta Anlatım Biçimleri',
          'Açıklayıcı Anlatım',
          'Tartışmacı Anlatım',
          'Öyküleyici Anlatım',
          'Betimleyici Anlatım',
          'Düşünceyi Geliştirme Yolları',
          'Tanımlama',
          'Karşılaştırma',
          'Örnekleme'
        ]
      },
      {
        konu: 'Ses Bilgisi',
        altKonular: [
          'Sesler',
          'Ünlü Sesler ve Ünlü Uyumları',
          'Ünsüz Sesler',
          'Ses Olayları',
          'Ünsüz Değişimi - Yumuşama',
          'Ünsüz Benzeşmesi (Sertleşme)',
          'Ses Düşmesi',
          'Ses Türemesi',
          'Ulama',
          'Dudak Ünsüzlerinin Benzeşmesi',
          'Ünlü Daralması',
          'Kökte Ünlü Değişimi',
          'Yardımcı Sesler'
        ]
      },
      {
        konu: 'Yapı Bilgisi',
        altKonular: [
          'Kök ve Gövde',
          'Ekler',
          'Yapım Ekleri',
          'Çekim Ekleri',
          'Yapılarına Göre Sözcükler'
        ]
      },
      {
        konu: 'Sözcük Türleri',
        altKonular: [
          'İsim (Ad)',
          'Varlıkların Türüne Göre İsimler',
          'Varlıkların Sayılarına Göre İsimler',
          'İsmin Hâlleri',
          'İsim Tamlamaları',
          'Zamir (Adıl)',
          'Kişi Zamirleri',
          'İşaret Zamirleri',
          'Belgisiz Zamirler',
          'Soru Zamirleri',
          'İlgi Zamiri (Aitlik Eki)',
          'Sıfat (Ön Ad)',
          'Niteleme Sıfatları',
          'Belirtme Sıfatları',
          'Adlaşmış Sıfatlar',
          'Zarf (Belirteç)',
          'Durum Zarfları',
          'Yer-Yön Zarfları',
          'Zaman Zarfları',
          'Ölçü-Miktar Zarfları',
          'Soru Zarfları',
          'Edat (İlgeç)',
          'Bağlaç',
          'Ünlem',
          'Fiil (Eylem)',
          'İş (Kılış) Fiilleri',
          'Oluş Fiileri',
          'Durum Fiileri',
          'Fiillerde Kip',
          'Fiillerde Kişi',
          'Fiillerde Olumsuzluk',
          'Fiillerde Anlam (Zaman) Kayması',
          'Fiillerde Çatı',
          'Fiilimsiler',
          'Fiilimsi Grupları',
          'Yardımcı Fiiller',
          'Ek Fiil (Ek-Eylem)'
        ]
      },
      {
        konu: 'Cümle Bilgisi',
        altKonular: [
          'Cümle Türleri',
          'Yüklemlerine Göre Cümleler',
          'Öge Dizilişine Göre Cümleler',
          'Yapılarına Göre Cümleler',
          'Cümlenin Ögeleri',
          'Yüklem',
          'Özne',
          'Nesne',
          'Dolaylı Tümleç',
          'Zarf Tümleci',
          'Edat Tümleci'
        ]
      },
      {
        konu: 'Yazım Kuralları',
        altKonular: [
          'Büyük Harflerin Kullanıldığı Yerler',
          'Kısaltmaların Yazımı',
          'Sayıların Yazımı',
          'Deyimlerin ve İkilemelerin Yazımı',
          'Birleşik Kelimelerin Yazımı',
          'Bitişik Yazılan Birleşik Kelimeler',
          'Ayrı Yazılan Birleşik Kelimeler',
          'Yabancı Özel Adların Yazımı',
          'Ses Olaylarıyla İlgili Yazım Kuralları'
        ]
      },
      {
        konu: 'Noktalama İşaretleri',
        altKonular: [
          'Nokta ( . )',
          'Virgül ( , )',
          'Noktalı Virgül ( ; )',
          'İki Nokta ( : )',
          'Üç Nokta ( ... )',
          'Soru İşareti ( ? )',
          'Ünlem İşareti ( ! )',
          'Kısa Çizgi ( - )',
          'Uzun Çizgi (–)',
          'Tırnak İşareti ( “ ” )',
          'Parantez ( )',
          'Kesme İşareti ( ’ )'
        ]
      },
      {
        konu: 'Anlatım Bozuklukları',
        altKonular: [
          'Anlama Dayalı Anlatım Bozuklukları',
          'Gereksiz Ek ve Sözcük Kullanımı',
          'Çelişen Sözcüklerin Bir Arada Kullanımı',
          'Yanlış Ek ve Sözcük Kullanımı',
          'Sözcüğün Yanlış Yerde Kullanımı',
          'Deyim-Atasözü Yanlışları',
          'Anlam Belirsizliği',
          'Mantık Hataları',
          'Dil Bilgisine Dayalı Anlatım Bozuklukları',
          'Fiil ve Yüklem Yanlışları',
          'Özne - Yüklem Uyuşmazlığı',
          'Özne Eksikliği',
          'Nesne Eksikliği',
          'Dolaylı Tümleç Eksikliği',
          'Zarf ve Edat Tümleci Eksikliği',
          'Tamlama Yanlışları',
          'Çatı Uyuşmazlığı'
        ]
      }
    ]
  },
  {
    ders: 'Matematik',
    konular: [
      'Temel Kavramlar',
      {
        konu: 'Sayılar',
        altKonular: [
          'Sayı Kümeleri',
          'Doğal Sayılar',
          'Tam Sayılar',
          'Faktöriyel',
          'Sayma Sistemleri',
          'Bölme',
          'Bölünebilme Kuralları'
        ]
      },
      'Ebob - Ekok',
      'Asal Çarpanlara Ayırma',
      'Denklemler',
      {
        konu: 'Rasyonel Sayılar',
        altKonular: [
          'Kesir ve Kesir Türleri',
          'Rasyonel Sayılarda Dört İşlem'
        ]
      },
      {
        konu: 'Eşitsizlik - Mutlak Değer',
        altKonular: [
          'Basit Eşitsizlikler',
          'Mutlak Değer'
        ]
      },
      'Üslü Sayılar',
      'Köklü Sayılar',
      'Çarpanlara Ayırma',
      'Oran - Orantı',
      {
        konu: 'Problemler',
        altKonular: [
          'Denklem Kurma Problemleri',
          'Yaş Problemleri',
          'Yüzde Problemleri',
          'Faiz Problemleri',
          'Kâr – Zarar Problemleri',
          'Karışım Problemleri',
          'İşçi Problemleri',
          'Havuz Problemleri',
          'Hareket Problemleri'
        ]
      },
      'Kümeler',
      'İşlem - Modüler Aritmetik',
      'Permütasyon - Kombinasyon - Olasılık',
      {
        konu: 'Tablo ve Grafikler',
        altKonular: [
          'Tablo ve Yorumlama',
          'Grafik ve Yorumlama'
        ]
      },
      'Sayısal Mantık'
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