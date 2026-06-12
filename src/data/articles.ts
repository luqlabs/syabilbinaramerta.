export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] };

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  readTime: string;
  author: string;
  content: ContentBlock[];
};

export const articlesData: Article[] = [
  {
    id: "art-1",
    slug: "tips-visa-jepang-approved-2025",
    title: "Tips Agar Visa Jepang Cepat Approved di Tahun 2025",
    excerpt: "Persiapan matang adalah kunci. Pelajari dokumen wajib dan tips rahasia agar visa Jepang Anda disetujui tanpa drama.",
    category: "Visa ke Luar Negeri",
    imageUrl: "/visa.png", 
    publishedAt: "10 Mei 2025",
    readTime: "5 menit baca",
    author: "Tim CV. Syabil Binar Amerta",
    content: [
      { type: 'paragraph', text: 'Jepang adalah salah satu destinasi favorit wisatawan Indonesia. Namun, proses pengajuan visa Jepang membutuhkan persiapan yang matang. Berikut panduan lengkap agar visa Jepang Anda cepat disetujui.' },
      { type: 'h2', text: '1. Pastikan Paspor Masih Berlaku Minimal 6 Bulan' },
      { type: 'paragraph', text: 'Ini adalah syarat paling mendasar. Paspor Anda harus memiliki masa berlaku minimal 6 bulan sejak tanggal keberangkatan, dan memiliki setidaknya 2 halaman kosong untuk stempel visa.' },
      { type: 'h2', text: '2. Rekening Koran yang Sehat adalah Kunci' },
      { type: 'paragraph', text: 'Kedutaan Jepang sangat memperhatikan kondisi keuangan pemohon. Pastikan rekening koran 3 bulan terakhir Anda menunjukkan:' },
      { type: 'list', items: [
        'Saldo rata-rata minimal Rp 20 juta (idealnya Rp 30 - 50 juta)',
        'Tidak ada saldo yang mendadak melonjak besar sesaat sebelum pengajuan (suspicious funds)',
        'Aliran transaksi yang wajar dan konsisten'
      ]},
      { type: 'h2', text: '3. Lengkapi Dokumen Pendukung dengan Teliti' },
      { type: 'paragraph', text: 'Dokumen yang tidak lengkap adalah alasan utama penolakan visa. Pastikan Anda menyiapkan:' },
      { type: 'list', items: [
        'Formulir aplikasi visa yang diisi dengan huruf kapital dan tinta hitam',
        'Foto terbaru ukuran 4.5 x 4.5 cm dengan background putih bersih',
        'KTP, KK, dan Akte Kelahiran yang masih berlaku',
        'Surat keterangan kerja atau SIUP bagi wirausaha',
        'Booking tiket pesawat dan hotel (tidak harus tiket resmi, booking saja cukup)',
        'Itinerary perjalanan yang detail dan masuk akal'
      ]},
      { type: 'h2', text: '4. Buat Itinerary yang Logis dan Detail' },
      { type: 'paragraph', text: 'Kedutaan Jepang ingin melihat bahwa Anda punya rencana perjalanan yang jelas. Buat itinerary per hari yang mencakup kota tujuan, tempat wisata, dan estimasi biaya harian. Itinerary yang rapi menunjukkan bahwa Anda adalah wisatawan yang serius.' },
      { type: 'h2', text: '5. Ajukan Jauh-Jauh Hari' },
      { type: 'paragraph', text: 'Proses visa Jepang membutuhkan waktu 5 - 10 hari kerja setelah dokumen diterima. Ajukan minimal 3-4 minggu sebelum jadwal keberangkatan untuk menghindari kepanikan jika ada dokumen yang perlu dilengkapi.' }
    ]
  },
  {
    id: "art-2",
    slug: "perbedaan-kitas-dan-kitap",
    title: "Perbedaan KITAS dan KITAP: Mana yang Tepat untuk Anda?",
    excerpt: "Banyak orang asing di Indonesia masih bingung membedakan KITAS dan KITAP. Artikel ini menjelaskan perbedaan mendasar, syarat, dan masa berlakunya.",
    category: "Imigrasi WNA",
    imageUrl: "/kitas.png", 
    publishedAt: "18 Mei 2025",
    readTime: "6 menit baca",
    author: "Tim CV. Syabil Binar Amerta",
    content: [
      { type: 'paragraph', text: 'Bagi orang asing (WNA) yang ingin tinggal di Indonesia dalam jangka waktu lama, dua dokumen yang paling penting adalah KITAS dan KITAP. Meski terdengar mirip, keduanya memiliki perbedaan yang signifikan.' },
      { type: 'h2', text: 'Apa itu KITAS?' },
      { type: 'paragraph', text: 'KITAS adalah singkatan dari Kartu Izin Tinggal Terbatas. Ini adalah dokumen yang memperbolehkan WNA tinggal di Indonesia untuk jangka waktu tertentu, biasanya 6 bulan hingga 2 tahun dan dapat diperpanjang.' },
      { type: 'list', items: [
        'Diberikan untuk: pekerja asing, investor, pasangan WNI, lansia pensiunan (retirement)',
        'Masa berlaku: 6 bulan - 2 tahun (dapat diperpanjang)',
        'Harus diperbarui secara berkala',
        'WNA dengan KITAS belum bisa memiliki properti di Indonesia'
      ]},
      { type: 'h2', text: 'Apa itu KITAP?' },
      { type: 'paragraph', text: 'KITAP adalah Kartu Izin Tinggal Tetap. Ini adalah "permanent residency" versi Indonesia yang memberikan hak tinggal lebih panjang dan lebih banyak kemudahan bagi WNA.' },
      { type: 'list', items: [
        'Berlaku selama 5 tahun dan dapat diperpanjang',
        'Setelah 5x perpanjangan KITAP, WNA bisa mendapat KITAP seumur hidup',
        'WNA dengan KITAP bisa membuka rekening bank lebih mudah',
        'Tidak perlu lapor ke polda (SKLD) setiap ada perpanjangan'
      ]},
      { type: 'h2', text: 'Siapa yang Berhak Mendapat KITAP?' },
      { type: 'paragraph', text: 'Tidak semua WNA bisa langsung mengajukan KITAP. Syarat utamanya adalah:' },
      { type: 'list', items: [
        'Telah memegang KITAS minimal 5 tahun berturut-turut TANPA terputus',
        'Menikah sah dengan WNI (bisa langsung ajukan KITAP)',
        'Mantan WNI yang ingin kembali menetap di Indonesia',
        'Anak dari WNA pemegang KITAP (di bawah 18 tahun)'
      ]}
    ]
  },
  {
    id: "art-3",
    slug: "cara-mendirikan-pt-indonesia",
    title: "Cara Mendirikan PT di Indonesia: Panduan Lengkap 2025",
    excerpt: "Mendirikan PT di Indonesia tidak sesulit yang dibayangkan. Dengan panduan ini, Anda akan memahami prosedur, syarat, dan estimasi biayanya.",
    category: "Perizinan Perusahaan",
    imageUrl: "/legal.png", 
    publishedAt: "22 Mei 2025",
    readTime: "7 menit baca",
    author: "Tim CV. Syabil Binar Amerta",
    content: [
      { type: 'paragraph', text: 'Perseroan Terbatas (PT) adalah badan usaha yang paling populer di Indonesia karena memberikan perlindungan hukum bagi pemiliknya dan dipandang lebih profesional oleh mitra bisnis. Berikut panduan lengkap mendirikan PT di tahun 2025.' },
      { type: 'h2', text: 'Mengapa Pilih Bentuk PT?' },
      { type: 'paragraph', text: 'Sebelum mendirikan, penting untuk memahami keuntungan bentuk PT dibanding CV atau usaha perseorangan:' },
      { type: 'list', items: [
        'Tanggung jawab terbatas — aset pribadi pendiri terlindungi dari hutang perusahaan',
        'Lebih mudah mendapat kepercayaan dari bank, investor, dan klien besar',
        'Dapat memiliki saham dan menarik investor',
        'Lebih mudah mengikuti tender proyek pemerintah',
        'Dapat diwariskan atau dipindahtangankan kepemilikannya'
      ]},
      { type: 'h2', text: 'Langkah 1 — Siapkan Nama Perusahaan' },
      { type: 'paragraph', text: 'Nama PT harus terdiri dari minimal 3 kata (tidak termasuk "PT"). Nama tidak boleh menggunakan kata yang dilarang, dan belum digunakan perusahaan lain. Siapkan 3 pilihan nama sebagai cadangan. Kami akan membantu pengecekan ketersediaan nama melalui sistem AHU Online.' },
      { type: 'h2', text: 'Langkah 2 — Pembuatan Akta Notaris' },
      { type: 'paragraph', text: 'Akta pendirian dibuat oleh notaris berwenang. Dokumen yang dibutuhkan:' },
      { type: 'list', items: [
        'KTP dan NPWP semua pendiri',
        'Susunan pengurus (Direktur dan Komisaris)',
        'Besaran modal dasar dan modal disetor (minimal Rp 50 juta untuk PT kecil)',
        'Persentase kepemilikan saham masing-masing pendiri',
        'Bidang usaha (KBLI)'
      ]},
      { type: 'h2', text: 'Langkah 3 — Pengesahan di Kemenkumham' },
      { type: 'paragraph', text: 'Setelah akta ditandatangani, notaris akan mengajukan permohonan pengesahan ke Kementerian Hukum dan HAM secara online (AHU Online). SK Kemenkumham biasanya terbit dalam 2-14 hari kerja. Dengan SK ini, PT Anda resmi berdiri sebagai badan hukum.' },
      { type: 'h2', text: 'Langkah 4 — Daftarkan NIB melalui OSS' },
      { type: 'paragraph', text: 'Setelah PT berbadan hukum, daftarkan NIB (Nomor Induk Berusaha) melalui sistem OSS (Online Single Submission) di oss.go.id. NIB berlaku sebagai identitas usaha dan menggantikan TDP dan SIUP lama. Proses NIB biasanya selesai dalam 1-3 hari kerja.' }
    ]
  },
  {
    id: "art-4",
    slug: "kesalahan-visa-schengen-ditolak",
    title: "5 Kesalahan yang Sering Menyebabkan Visa Schengen Ditolak",
    excerpt: "Visa Schengen adalah salah satu visa yang paling sering ditolak. Kenali 5 kesalahan fatal ini agar Anda tidak membuang waktu dan biaya.",
    category: "Visa ke Luar Negeri",
    imageUrl: "/visa.png", 
    publishedAt: "1 Juni 2025",
    readTime: "5 menit baca",
    author: "Tim CV. Syabil Binar Amerta",
    content: [
      { type: 'paragraph', text: 'Mendapatkan Visa Schengen membuka pintu ke 27 negara Eropa, namun proses persetujuannya sangat ketat. Banyak pemohon yang mengalami penolakan tanpa memahami alasannya. Berikut adalah 5 kesalahan paling umum yang harus Anda hindari.' },
      { type: 'h2', text: '1. Dana di Rekening Tidak Sesuai Profil' },
      { type: 'paragraph', text: 'Kedutaan besar sangat jeli melihat mutasi rekening. Menyuntikkan dana dalam jumlah besar secara tiba-tiba (suspicious fund) beberapa hari sebelum mencetak rekening koran justru akan menimbulkan kecurigaan bahwa uang tersebut bukan milik Anda.' },
      { type: 'h2', text: '2. Tujuan Perjalanan yang Tidak Jelas' },
      { type: 'paragraph', text: 'Itinerary (rencana perjalanan) yang dibuat asal-asalan, misalnya memesan hotel yang berjarak sangat jauh dari tempat wisata tanpa penjelasan transportasi yang masuk akal, membuat petugas konsuler meragukan tujuan sebenarnya dari perjalanan Anda.' },
      { type: 'h2', text: '3. Kurangnya Bukti Ikatan di Negara Asal' },
      { type: 'paragraph', text: 'Anda harus meyakinkan kedutaan bahwa Anda akan kembali ke Indonesia. Surat Keterangan Kerja yang lemah, ketiadaan aset yang mengikat, atau status pekerjaan yang tidak jelas membuat petugas ragu Anda akan kembali setelah masa berlaku visa habis.' },
      { type: 'h2', text: '4. Kesalahan Memilih Kedutaan' },
      { type: 'paragraph', text: 'Aturan Schengen mengharuskan Anda mengajukan visa di kedutaan negara tempat Anda akan menghabiskan waktu paling lama (hari terbanyak). Jika durasinya sama, ajukan ke negara pertama yang Anda masuki. Banyak yang ditolak karena mengajukan ke kedutaan yang antreannya sepi, padahal bukan destinasi utama.' },
      { type: 'h2', text: '5. Dokumen Reservasi Palsu atau Dibatalkan' },
      { type: 'paragraph', text: 'Petugas konsuler sering mengecek nomor booking tiket pesawat dan hotel secara langsung. Jika mereka menemukan reservasi Anda sudah dibatalkan atau palsu saat mereka melakukan verifikasi, visa pasti ditolak dengan alasan dokumen tidak dapat dipercaya.' }
    ]
  },
  {
    id: "art-5",
    slug: "nib-vs-siup-apa-bedanya",
    title: "NIB vs SIUP: Apa Bedanya dan Mana yang Anda Butuhkan?",
    excerpt: "Sejak berlakunya sistem OSS, banyak pelaku usaha bingung antara NIB dan SIUP. Temukan jawaban lengkapnya dalam artikel ini.",
    category: "Perizinan Perusahaan",
    imageUrl: "/legal.png", 
    publishedAt: "8 Juni 2025",
    readTime: "4 menit baca",
    author: "Tim CV. Syabil Binar Amerta",
    content: [
      { type: 'paragraph', text: 'Dunia perizinan usaha di Indonesia mengalami revolusi dengan hadirnya sistem Online Single Submission (OSS). Hal ini sering menimbulkan kebingungan bagi pelaku usaha lama yang terbiasa dengan SIUP (Surat Izin Usaha Perdagangan), yang kini digantikan perannya oleh NIB (Nomor Induk Berusaha).' },
      { type: 'h2', text: 'Mengenal SIUP' },
      { type: 'paragraph', text: 'Dahulu, SIUP adalah izin operasional wajib bagi setiap perusahaan yang melakukan kegiatan usaha perdagangan. SIUP dikeluarkan oleh pemerintah daerah setempat dan prosesnya seringkali memakan waktu lama dengan persyaratan yang berbeda-beda tiap daerah.' },
      { type: 'h2', text: 'Revolusi Melalui NIB' },
      { type: 'paragraph', text: 'Sejak berlakunya Peraturan Pemerintah Nomor 24 Tahun 2018 tentang Pelayanan Perizinan Berusaha Terintegrasi Secara Elektronik (OSS), NIB resmi diperkenalkan. NIB adalah identitas pelaku usaha (mirip dengan NIK untuk penduduk).' },
      { type: 'h2', text: 'Apakah NIB Menggantikan SIUP?' },
      { type: 'paragraph', text: 'Ya. Bagi sebagian besar bidang usaha dengan tingkat risiko rendah, NIB tidak hanya berlaku sebagai identitas usaha (menggantikan TDP/Tanda Daftar Perusahaan), tetapi juga berlaku sebagai Perizinan Tunggal (termasuk menggantikan SIUP). Anda tidak perlu lagi mengurus SIUP secara terpisah.' },
      { type: 'h2', text: 'Bagaimana Jika Bisnis Saya Berisiko Tinggi?' },
      { type: 'paragraph', text: 'Untuk usaha dengan tingkat risiko menengah-tinggi atau tinggi, NIB saja belum cukup. Setelah mendapatkan NIB, Anda harus mengurus Sertifikat Standar atau Izin operasional lanjutan melalui OSS RBA (Risk Based Approach) sesuai dengan KBLI bisnis Anda.' }
    ]
  },
  {
    id: "art-6",
    slug: "cara-mengurus-visa-australia",
    title: "Cara Mengurus Visa Australia untuk Pertama Kali dari Indonesia",
    excerpt: "Australia adalah destinasi populer untuk wisata, studi, dan bisnis. Pelajari cara mudah mengajukan visa Australia secara online tanpa harus ke VFS.",
    category: "Visa ke Luar Negeri",
    imageUrl: "/visa.png", 
    publishedAt: "15 Juni 2025",
    readTime: "6 menit baca",
    author: "Tim CV. Syabil Binar Amerta",
    content: [
      { type: 'paragraph', text: 'Visa Australia kini 100% diajukan secara elektronik (e-Visa) melalui portal ImmiAccount. Ini adalah kabar baik karena Anda tidak perlu lagi repot datang secara fisik untuk menyerahkan dokumen tumpukan kertas. Berikut panduan langkah demi langkahnya.' },
      { type: 'h2', text: '1. Buat Akun ImmiAccount' },
      { type: 'paragraph', text: 'Langkah pertama adalah membuat akun di portal resmi Departemen Imigrasi Australia (ImmiAccount). Pastikan Anda menggunakan email aktif karena semua notifikasi, termasuk persetujuan visa (Visa Grant Notice), akan dikirim ke email tersebut.' },
      { type: 'h2', text: '2. Siapkan Dokumen Digital' },
      { type: 'paragraph', text: 'Semua dokumen harus di-scan dengan kualitas baik (jelas terbaca) dalam format PDF atau JPG, dengan ukuran maksimal 5MB per file. Dokumen utama meliputi:' },
      { type: 'list', items: [
        'Scan paspor (halaman biodata dan semua halaman yang ada stempel/visa)',
        'Foto ukuran paspor (4.5x3.5cm) background putih',
        'KTP dan Kartu Keluarga (terjemahan bahasa Inggris sangat disarankan)',
        'Bukti keuangan (Rekening koran 3 bulan terakhir)',
        'Surat Keterangan Kerja (dalam bahasa Inggris)'
      ]},
      { type: 'h2', text: '3. Isi Formulir Online' },
      { type: 'paragraph', text: 'Formulir untuk visa turis (Subclass 600) cukup panjang, terdiri dari sekitar 20 halaman pertanyaan seputar data diri, rencana perjalanan, pekerjaan, keuangan, dan riwayat kesehatan/kriminal. Jawablah dengan jujur dan konsisten dengan dokumen yang dilampirkan.' },
      { type: 'h2', text: '4. Biometrik (Pengambilan Sidik Jari dan Foto)' },
      { type: 'paragraph', text: 'Meskipun aplikasi dilakukan online, warga negara Indonesia biasanya diwajibkan melakukan rekam biometrik di VFS Global (Jakarta, Bali, atau Surabaya). Setelah membayar biaya visa, Anda akan menerima surat pengantar (Biometric Requirement Letter) untuk dibawa ke VFS.' },
      { type: 'h2', text: '5. Menunggu Keputusan' },
      { type: 'paragraph', text: 'Waktu pemrosesan bervariasi antara 14 hingga 30 hari. Tidak ada stempel fisik yang akan ditempel di paspor Anda. Visa Anda berbentuk digital dan terhubung langsung dengan nomor paspor. Jika disetujui, Anda akan menerima Visa Grant Notice via email.' }
    ]
  }
];
