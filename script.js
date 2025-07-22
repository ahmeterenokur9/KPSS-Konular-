// KPSS Konuları (accordion için aynı veri yapısı)
// KPSS Lisans Ders ve Konuları (Sitedeki gibi ayrıntılı Türkçe, Matematik, Geometri, Tarih, Coğrafya, Vatandaşlık)
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
    ders: 'Geometri',
    konular: [
      {
        konu: 'Geometrik Kavramlar Ve Doğruda Açılar',
        altKonular: [
          'Geometrik Kavramlar',
          'Üçgende Açılar',
          'Dik Üçgen',
          'Üçgende Açıortay Teoremleri',
          'Üçgende Kenarortay Teoremleri',
          'Özel Üçgenler',
          'Üçgende Alan',
          'Üçgende Benzerlik',
          'Üçgende Açı-Kenar Bağıntıları'
        ]
      },
      {
        konu: 'Çokgenler Ve Dörtgenler',
        altKonular: [
          'Çokgenler',
          'Dörtgenler',
          'Paralelkenar-Eşkanar-Dörtgen',
          'Dikdörtgen-Kare',
          'Yamuk-Deltoid'
        ]
      },
      {
        konu: 'Çember Ve Daire',
        altKonular: [
          'Çemberde Açı',
          'Çemberde Uzunluk',
          'Dairede Alan'
        ]
      },
      {
        konu: 'Analitik Geometri',
        altKonular: [
          'Noktanın Analitik İncelenmesi',
          'Analitik Düzlem',
          'Doğrunun Analitik İncelenmesi',
          'Doğrunun Grafiğinin Çizimi',
          'Doğrunun Denklemleri',
          'Simetriler',
          'Eşitsizlikler'
        ]
      },
      {
        konu: 'Katı Cisimler',
        altKonular: [
          'Prizma',
          'Dikdörtgenler Prizması',
          'Küp',
          'Silindir',
          'Dönel Silindir',
          'Piramit',
          'Düzgün Piramit',
          'Kesik Piramit',
          'Koni',
          'Küre'
        ]
      }
    ]
  },
  {
    ders: 'Tarih',
    konular: [
      'İslamiyet Öncesi Türk Tarihi',
      'İlk Türk - İslam Devletleri ve Beylikleri',
      'Osmanlı Devleti Kuruluş ve Yükselme Dönemleri',
      'Osmanlı Devleti’nde Kültür ve Uygarlık',
      'XVII. Yüzyılda Osmanlı Devleti (Duraklama Dönemi)',
      'XVIII. Yüzyılda Osmanlı Devleti (Gerileme Dönemi)',
      'XIX..Yüzyılda Osmanlı Devleti (Dağılma Dönemi',
      'XX. Yüzyılda Osmanlı Devleti',
      'Kurtuluş Savaşı Hazırlık Dönemi',
      'I. TBMM Dönemi',
      'Kurtuluş Savaşı Muharebeler Dönemi',
      'Atatürk İnkılapları',
      'Atatürk İlkeleri',
      'Partiler ve Partileşme Dönemi (İç Politika)',
      'Atatürk Dönemi Türk Dış Politikası',
      'Atatürk Sonrası Dönem',
      'Atatürk’ün Hayatı ve Kişiliği',
      'Çağdaş Türk ve Dünya Tarihi'
    ]
  },
  {
    ders: 'Coğrafya',
    konular: [
      {
        konu: 'Türkiye’nin Coğrafi Konumu',
        altKonular: [
          'Matematik (Mutlak) Konum',
          'Türkiye’nin Matematik (Mutlak) Konumu ve Sonuçları',
          'Türkiye’nin Özel (Göreceli) Konumu ve Sonuçları.',
          'Türkiye’nin Jeopolitiği'
        ]
      },
      {
        konu: 'Türkiye’nin Yerşekilleri ve Özellikleri',
        altKonular: [
          'Türkiye’nin Yerşekillerinin Genel Özellikleri',
          'Fiziki Haritalar',
          'Türkiye’nin Jeolojik Geçmişi',
          'Türkiye’nin Platoları ve Ovaları',
          'Türkiye’de Dış Güçlerin Oluşturduğu Yer Şekilleri',
          'Türkiye’nin Kıyı Tipleri',
          'Türkiye’de Toprak Oluşumu ve Tipleri',
          'Türkiye’nin Su Varlığı',
          'Türkiye’de Doğal Afetler'
        ]
      },
      {
        konu: 'Türkiye’nin İklimi ve Bitki Örtüsü',
        altKonular: [
          'Türkiye’nin İklimi',
          'Türkiye’de Sıcaklık',
          'Türkiye’de Nemlilik ve Yağış',
          'Türkiye’de İklim Tipleri',
          'Türkiye’nin Bitki Örtüsü',
          'Türkiye’nin İklim Tipleri ve Bitki Örtüsü'
        ]
      },
      {
        konu: 'Türkiye’de Nüfus ve Yerleşme',
        altKonular: [
          'Türkiye’de Nüfus Özellikleri',
          'Türkiye’de Nüfusun Dağılışı ve Nüfus Yoğunluğu',
          'Türkiye’nin Nüfusu ve Nüfus Sayımları',
          'Türkiye’nin Nüfus Politikaları',
          'Türkiye’de Nüfus Projeksiyonları: Türkiye Nüfusunun Geleceği',
          'Türkiye’de Göçler',
          'Türkiye’de Yerleşme',
          'Türkiye’de Mesken Tipleri'
        ]
      },
      {
        konu: 'Türkiye’de Tarım, Hayvancılık ve Ormancılık',
        altKonular: [
          'Anadolu Uygarlıkları',
          'Türkiye’de Arazi Kullanımı',
          'Türkiye Ekonomisinin Sektörel Dağılımı',
          'Türkiye Ekonomisini Etkileyen Faktörler',
          'Türkiye’de Tarım',
          'Türkiye’de Hayvancılık',
          'Türkiye’de Ormancılık'
        ]
      },
      {
        konu: 'Türkiye’de Madenler, Enerji Kaynakları ve Sanayi',
        altKonular: [
          'Türkiye’de Madenler',
          'Türkiye’de Enerji Kaynakları.',
          'Türkiye’de Sanayi'
        ]
      },
      {
        konu: 'Türkiye’de Ulaşım, Ticaret ve Turizm',
        altKonular: [
          'Türkiye’de Ulaşım',
          'Türkiye’de Ticaret',
          'Türkiye’de Turizm'
        ]
      },
      {
        konu: 'Türkiye’nin Millî Parkları Türkiye’de Şehirler ve Özellikleri',
        altKonular: []
      },
      {
        konu: 'Türkiye’nin Coğrafi Bölgeleri',
        altKonular: [
          'Türkiye’de Bölge Sınıflandırması',
          'Türkiye’nin Bölgesel Kalkınma Projeleri',
          'Türkiye’nin Coğrafi Bölgeleri',
          'Karadeniz Bölgesi',
          'Marmara Bölgesi',
          'Ege Bölgesi',
          'Akdeniz Bölgesi',
          'İç Anadolu Bölgesi',
          'Doğu Anadolu Bölgesi',
          'Güneydoğu Anadolu Bölgesi',
          'Bölgelerin Özelliklerinin Karşılaştırılması'
        ]
      }
    ]
  },
  {
    ders: 'Vatandaşlık',
    konular: [
      {
        konu: 'Hukukun Temel Kavramları',
        altKonular: [
          'Hukukun Tanımı',
          'Hukuk Kaynaklarıyla İlgili Kavramlar',
          'Yazısız Kaynaklar (Örf Ve Adet Hukuku)',
          'Yardımcı Kaynaklar',
          'Hukuk Kurallarının Yaptırımları',
          'Kamu Hukuku Dalları',
          'Ceza Ve Ehliyet',
          'Özel Hukuk Dalları.',
          'Hakkın Tanımı Ve Türleri'
        ]
      },
      {
        konu: 'Devlet Biçimleri Demokrasi Ve Kuvvetler Ayrılığı',
        altKonular: [
          'Devlet Biçimleri Ve Hükümet Sistemleri',
          'Devlet Kavramı',
          'Devlet Kurucu Unsurları',
          'Devlet Kavramına İlişkin Ayrımlar',
          'Yapılarına Göre Devlet Şekilleri',
          'Egemenliğin Kaynağına Göre Devlet Şekilleri',
          'Hükümet Sistemleri'
        ]
      },
      {
        konu: 'Anayasa Hukukuna Giriş Temel Kavramlar Ve Türk Anayasa Tarihi',
        altKonular: [
          'Anayasa',
          'Anayasa Kavramına İlişkin Ayrımlar',
          'Yazılı Anayasa - Yazısız Anayasa Ayrımı',
          'Türk Anayasa Tarih',
          'Kanun-U Esasî (1876)',
          'Kanun-U Esasî’de 1909 Değişiklikleri (İkinci Meşrutiyet)',
          '1921 Teşkilât-I Esasiye Kanunu',
          'Teşkilat-I Esasiye Kanunu’nda 29 Ekim 1923 Tarihli Değişiklikler',
          '1924 Anayasası',
          '1961 Anayasası',
          '1971-1973 Anayasa Değişiklikleri',
          '1982 Anayasası',
          '1982 Anayasasının Temel Özellikleri',
          '2017 Anayasasının Temel Özellikleri',
          'Türk Tarihindeki Referandumlar'
        ]
      },
      {
        konu: '1982 Anayasasının Temel İlkeleri',
        altKonular: [
          '1982 Anayasası’nın Temel İlkeleri'
        ]
      },
      {
        konu: 'Yasama',
        altKonular: [
          'Yasama Organı',
          'Yasama İşlemleri',
          'Tbmm İç Yapı Ve Çalışma Düzeni',
          'Toplantı Ve Karar Yeter Sayısı',
          'Tbmm Görev Ve Yetkileri',
          'Tbmm Bilgi Edinme Ve Denetim Yolları'
        ]
      },
      {
        konu: 'Yürütme',
        altKonular: [
          'Yürütme',
          'Kanun Hükmünde Kararnameler',
          'Cumhurbaşkanlığı Kararnamesi',
          'Yönetmelik',
          'Cumhurbaşkanı’nın Görev Ve Yetkileri'
        ]
      },
      {
        konu: 'Yargı',
        altKonular: [
          'Yargı',
          'Yargı Organı',
          'Hakimler Ve Savcılar Kurulu',
          'Yüksek Mahkemeler',
          'Anayasa Mahkemesi',
          'Yargıtay',
          'Danıştay',
          'Uyuşmazlık Mahkemesi',
          'Sayıştay'
        ]
      },
      {
        konu: 'Temel Hak Ve Hürriyetler',
        altKonular: [
          'Temel Hak Ve Hürriyetler',
          'Temel Hakların Türleri'
        ]
      },
      {
        konu: 'İdare Hukuku',
        altKonular: [
          'İdare Hukuku',
          'İdare (Kamu Yönetimi)',
          'Yerel Yönetim Organları',
          'Kamu Kuruluşları'
        ]
      },
      {
        konu: 'Uluslararası Kuruluşlar Ve Güncel Olaylar',
        altKonular: [
          'Uluslararası Kuruluşlar Ve Güncel Olaylar',
          'Uluslararası Örgüt Ve Kuruluşlar',
          'Kpss Güncel Bilgiler',
          'Türkiye’ye Vize Uygulamayan Ülkeler',
          'Unesco’nun Dünya Mirası Listesindeki Doğal Ve Kültürel Varlıklarımız',
          '1982 Anayasası Tam Metni',
          'T.C. Anayasası Madde Dizini',
          '1982 Anayasasında 2007 Değişiklikleri',
          '1982 Anayasasında 2010 Değişiklikleri',
          '1982 Anayasasında 2017 Değişiklikleri'
        ]
      }
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

function createAccordion() {
  const durum = loadDurum();
  const container = document.getElementById('kpss-accordion');
  container.innerHTML = '';
  const accordion = document.createElement('div');
  accordion.className = 'accordion';

  kpssKonulari.forEach((dersObj, dersIdx) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    // Header
    const header = document.createElement('button');
    header.className = 'accordion-header';
    header.innerHTML = `<span class="arrow">▶</span> ${dersObj.ders}`;
    header.setAttribute('aria-expanded', 'false');
    header.addEventListener('click', function() {
      const isOpen = content.classList.toggle('open');
      header.classList.toggle('open', isOpen);
      header.setAttribute('aria-expanded', isOpen);
      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });

    // Content
    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.style.maxHeight = null;
    content.appendChild(renderKonuListesi(dersObj.konular, `${dersIdx}`, durum));

    item.appendChild(header);
    item.appendChild(content);
    accordion.appendChild(item);
  });
  container.appendChild(accordion);
}

function renderKonuListesi(konular, keyPrefix, durum) {
  const ul = document.createElement('ul');
  ul.className = 'konu-listesi';
  konular.forEach((konu, idx) => {
    const li = document.createElement('li');
    const thisKey = `${keyPrefix}_${idx}`;
    if (typeof konu === 'string') {
      // En alt düzey konu, checkbox göster
      if (durum[thisKey]) li.classList.add('tamamlandi');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'konu-checkbox';
      checkbox.checked = !!durum[thisKey];
      checkbox.addEventListener('change', () => {
        durum[thisKey] = checkbox.checked;
        saveDurum(durum);
        createAccordion();
      });
      const span = document.createElement('span');
      span.className = 'konu-adi';
      span.textContent = konu;
      li.appendChild(checkbox);
      li.appendChild(span);
    } else if (typeof konu === 'object' && konu.konu) {
      // Alt başlık varsa, iç içe accordion
      const subAccordion = document.createElement('div');
      subAccordion.className = 'sub-accordion';
      const subHeader = document.createElement('button');
      subHeader.className = 'sub-accordion-header';
      subHeader.innerHTML = `<span class="arrow">▶</span> ${konu.konu}`;
      subHeader.setAttribute('aria-expanded', 'false');
      const subContent = document.createElement('div');
      subContent.className = 'sub-accordion-content';
      subContent.style.maxHeight = null;
      subContent.appendChild(renderKonuListesi(konu.altKonular, `${thisKey}`, durum));
      subHeader.addEventListener('click', function() {
        const isOpen = subContent.classList.toggle('open');
        subHeader.classList.toggle('open', isOpen);
        subHeader.setAttribute('aria-expanded', isOpen);
        if (isOpen) {
          subContent.style.maxHeight = subContent.scrollHeight + 'px';
        } else {
          subContent.style.maxHeight = null;
        }
      });
      subAccordion.appendChild(subHeader);
      subAccordion.appendChild(subContent);
      li.appendChild(subAccordion);
    }
    ul.appendChild(li);
  });
  return ul;
}

document.addEventListener('DOMContentLoaded', createAccordion);