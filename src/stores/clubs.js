import { defineStore } from "pinia";

export const useClubsStore = defineStore({
  id: "clubs",
  state: () => ({
    clubs: [
      { id: "001", name: "ACM Öğrenci Topluluğu" },
      { id: "002", name: "AEGEE (Avrupa Öğrencileri Formu)" },
      { id: "003", name: "AIESEC" },
      { id: "004", name: "Amerikan Futbolu Kulübü" },
      { id: "076", name: "Anime Kulübü" },
      { id: "087", name: "Arkeoloji ve Fotoğrafçılık Kulübü" },
      { id: "068", name: "ASME" },
      { id: "005", name: "Atatürkçü Düşünce Kulübü" },
      { id: "081", name: "Bayrak Futbolu Kulübü" },
      { id: "006", name: "Beşiktaşlılar Kulübü" },
      { id: "007", name: "Bilim ve Felsefe Kulübü" },
      { id: "091", name: "Bilişim Teknolojileri Kulübü" },
      { id: "073", name: "Çeviri Kulübü" },
      { id: "008", name: "Çevre Kulübü" },
      { id: "009", name: "Çocuk Hakları Kulübü" },
      { id: "010", name: "Çok Kültürlü Sanat Öğrencileri Kulübü" },
      { id: "011", name: "Dağcılık ve Doğa Sporları Kulübü" },
      { id: "012", name: "Dans Topluluğu" },
      { id: "013", name: "DAÜ Arama Kurtarma Kulübü" },
      { id: "072", name: "DAÜ Bilimsel Araştırma Topluluğu" },
      { id: "014", name: "DAÜ Oyun Platformu" },
      { id: "088", name: "DAÜ Sürdürülebilir Kalkınma Amaçları Kulübü" },
      { id: "015", name: "Edebiyat Kulübü" },
      { id: "016", name: "EESTEC LC Famagusta" },
      { id: "017", name: "Ekonomi ve Finans Kulübü" },
      { id: "085", name: "Elektronik Spor Kulübü" },
      { id: "018", name: "Endüstri Mühendisliği Kulübü" },
      { id: "086", name: "Etkileşim Kulübü" },
      { id: "019", name: "Film ve Drama Kulübü" },
      { id: "020", name: "Futbol Takımı" },
      { id: "021", name: "Gazetecilik ve Yayıncılık Kulübü" },
      { id: "022", name: "Gitar Kulübü" },
      { id: "023", name: "Gönüllüler ve Sosyal Sorumluluk Topluluğu" },
      { id: "074", name: "Görsel Sanatlar Kulübü" },
      { id: "024", name: "Hakemlik Eğitimi Topluluğu" },
      { id: "025", name: "Hayvan Hakları ve Doğal Yaşam Topluluğu" },
      { id: "026", name: "İngilizce Konuşma Topluluğu" },
      { id: "077", name: "İşletme ve Yönetim Kulübü" },
      { id: "027", name: "Japon Kültürü ve Anime Kulübü" },
      { id: "028", name: "Kariyer ve Eğitim Danışma Topluluğu" },
      { id: "029", name: "Kitap Klubü" },
      { id: "030", name: "Kültür ve Sanat Merkezi" },
      { id: "031", name: "Makine Mühendisliği Kulübü" },
      { id: "071", name: "Metal Müzik Kulübü" },
      { id: "032", name: "Mühendislik ve Tasarım Kulübü" },
      { id: "083", name: "Müzik ve Sahne Sanatları Kulübü" },
      { id: "033", name: "Robotik ve Otomasyon Kulübü" },
      { id: "034", name: "Saha ve Deneme Bitirme Projeleri Topluluğu" },
      { id: "084", name: "Sağlıklı Yaşam ve Fitness Kulübü" },
      { id: "035", name: "Sosyal Entelektüel Eylem Topluluğu" },
      { id: "036", name: "Sosyal Yardım ve Destek Topluluğu" },
      { id: "037", name: "Spor Kulübü" },
      { id: "079", name: "Strateji ve Oyuncular Kulübü" },
      { id: "038", name: "Sürdürülebilir Enerji Topluluğu" },
      { id: "039", name: "Tarih ve Kültür Gezileri Topluluğu" },
      { id: "040", name: "Tasarım ve İç Mimarlık Kulübü" },
      { id: "019", name: "Film ve Drama Kulübü" },
      { id: "020", name: "Futbol Takımı" },
      { id: "021", name: "Gazetecilik ve Yayıncılık Kulübü" },
      { id: "022", name: "Gitar Kulübü" },
      { id: "023", name: "Gönüllüler ve Sosyal Sorumluluk Topluluğu" },
      { id: "074", name: "Görsel Sanatlar Kulübü" },
      { id: "024", name: "Hakemlik Eğitimi Topluluğu" },
      { id: "025", name: "Hayvan Hakları ve Doğal Yaşam Topluluğu" },
      { id: "026", name: "İngilizce Konuşma Topluluğu" },
      { id: "077", name: "İşletme ve Yönetim Kulübü" },
      { id: "027", name: "Japon Kültürü ve Anime Kulübü" },
      { id: "028", name: "Kariyer ve Eğitim Danışma Topluluğu" },
      { id: "029", name: "Kitap Klubü" },
      { id: "030", name: "Kültür ve Sanat Merkezi" },
      { id: "031", name: "Makine Mühendisliği Kulübü" },
      { id: "071", name: "Metal Müzik Kulübü" },
      { id: "032", name: "Mühendislik ve Tasarım Kulübü" },
      { id: "083", name: "Müzik ve Sahne Sanatları Kulübü" },
      { id: "033", name: "Robotik ve Otomasyon Kulübü" },
      { id: "034", name: "Saha ve Deneme Bitirme Projeleri Topluluğu" },
      { id: "084", name: "Sağlıklı Yaşam ve Fitness Kulübü" },
      { id: "035", name: "Sosyal Entelektüel Eylem Topluluğu" },
      { id: "036", name: "Sosyal Yardım ve Destek Topluluğu" },
      { id: "037", name: "Spor Kulübü" },
      { id: "079", name: "Strateji ve Oyuncular Kulübü" },
      { id: "038", name: "Sürdürülebilir Enerji Topluluğu" },
      { id: "039", name: "Tarih ve Kültür Gezileri Topluluğu" },
      { id: "040", name: "Tasarım ve İç Mimarlık Kulübü" },
      { id: "041", name: "Teknoloji ve Bilim Topluluğu" },
      { id: "042", name: "Turizm ve Gezi Rehberliği Topluluğu" },
      { id: "043", name: "Uluslararası İlişkiler ve Diplomasi Topluluğu" },
      { id: "044", name: "Video Oyunları ve Konsol Oyunları Kulübü" },
      { id: "045", name: "Yabancı Dil Pratik Topluluğu" },
      { id: "046", name: "Yenilikçi Ürün ve Hizmetler Topluluğu" },
      { id: "047", name: "Yerel ve Doğal Yaşam Topluluğu" },
      { id: "048", name: "Yönetim ve İşletme Etiği Topluluğu" },
      { id: "049", name: "Yurt Dışı Eğitim ve Staj Topluluğu" },
      { id: "050", name: "Zanaat ve El İşleri Topluluğu" },
    ],
  }),

  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },

  getters: {
    evenOrOdd: (state) => {
      if (state.count % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    },
  },
});