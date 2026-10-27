export const BRAND = {
  name: "WebKu",
  suffix: ".pro",
  email: "service@webkupro.co.id",
  phone: "+62 852 7486 8615",
  address: "DKI JAKARTA",
}

export const WA_NUMBER = "6285274868615"
export const WA_LINK = (text = "Halo, saya ingin konsultasi gratis soal website") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

// ============================================
// GAMBAR DARI SITEGROUND (CDN)
// ============================================
export const IMAGES = {
  hero: "https://static-cdn.siteground.com/img/salespages/web-hosting/web_hosting_hero.webp",
  speed: "https://static-cdn.siteground.com/img/salespages/web-hosting/speed_en.webp",
  security: "https://static-cdn.siteground.com/img/salespages/web-hosting/security_en.webp",
  support: "https://static-cdn.siteground.com/img/salespages/web-hosting/support.webp",
  servicesLaptop: "https://static-cdn.siteground.com/img/salespages/web-hosting/services_laptop.jpg",
  cta: "https://static-cdn.siteground.com/img/salespages/web-hosting/cta_en.jpg",
  customerSuccessMenu: "https://static-cdn.siteground.com/img/blocks/menu/customer_success_menu_about.jpg",
  getInTouch: "https://static-cdn.siteground.com/img/blocks/menu/get_in_touch.jpg",
  chatAgents: "https://static-cdn.siteground.com/img/blocks/chat/chat_agents.png",
  story1: "https://static-cdn.siteground.com/img/blocks/slider-reviews-redesign/alixr-co.webp",
  story2: "https://static-cdn.siteground.com/img/blocks/slider-reviews-redesign/pixweb-fr.png",
  story3: "https://static-cdn.siteground.com/img/blocks/slider-reviews-redesign/inkling-design.png",
  story4: "https://static-cdn.siteground.com/img/blocks/slider-reviews-redesign/marc-perry.png",
  story5: "https://static-cdn.siteground.com/img/blocks/slider-reviews-redesign/japan-ski-experience.png",
}

// ============================================
// NAVIGASI
// ============================================
export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Harga", href: "/harga" },
  { label: "Portofolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
]

// ============================================
// PROMO BAR
// ============================================
export const PROMO_BAR = {
  text: "Penawaran spesial:",
  highlight: "Hemat hingga 30%",
  cta: "Klaim sekarang",
}

// ============================================
// HERO (Teks Indonesia, Gambar SiteGround)
// ============================================
export const HERO = {
  label: "HEMAT HINGGA 30%",
  title: "Website premium untuk kesuksesan bisnis Anda",
  bullets: [
    { icon: "rocket", text: "Performa website super cepat & andal" },
    { icon: "shield", text: "Keamanan tingkat enterprise untuk ketenangan Anda" },
    { icon: "support", text: "Dukungan tim ahli 24/7, bukan bot" },
  ],
  priceLabel: "Mulai dari",
  price: "Rp 2,1 jt",
  priceStrike: "Rp 3 jt",
  priceNote: "/ project",
  cta: "Klaim Penawaran",
  guarantee: "Garansi 30 hari uang kembali",
}

// ============================================
// TRUSTPILOT & STATS
// ============================================
export const TRUSTPILOT = {
  rating: "4.9",
  outOf: "5",
  text: "Dipercaya oleh pemilik 150+ bisnis di Indonesia",
}

export const STATS = [
  { num: "150+", label: "Website Dikerjakan" },
  { num: "100%", label: "Garansi Revisi" },
  { num: "98%", label: "Kepuasan Klien" },
]

export const TRUST_ITEMS = [
  "Full Custom Coding",
  "SEO Friendly",
  "Google Ads Ready",
  "Mobile First",
]

// ============================================
// ABOUT & BENTO (Untuk Komponen Home)
// ============================================
export const ABOUT = {
  eyebrow: "Tentang Kami",
  title: "Kami membangun aset digital yang bekerja untuk Anda 24/7",
  desc: "WebKu adalah studio digital yang berfokus pada pembuatan website premium untuk bisnis Indonesia. Kami percaya website bukan sekadar kartu nama digital — ia adalah mesin pertumbuhan bisnis Anda.",
  points: [
    "Tim developer & desainer berpengalaman 5+ tahun",
    "Teknologi modern: Next.js, Laravel, dan cloud hosting",
    "Pendekatan personal: setiap project ditangani langsung oleh founder",
    "Garansi maintenance & support setelah website live",
  ],
}

export const BENTO = [
  {
    title: "Desain yang Mewakili Karakter Brand",
    desc: "Website dirancang agar terlihat modern, rapi, dan sesuai identitas bisnis Anda — bukan sekadar template yang terlihat sama dengan banyak website lain.",
    chips: ["UI/UX Modern", "Mobile First", "Fast Loading"],
    big: true,
    icon: "palette",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    title: "Struktur Halaman yang Mudah Dipahami",
    desc: "Setiap halaman disusun agar calon pelanggan cepat memahami siapa Anda dan apa yang ditawarkan.",
    icon: "layout",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
  },
  {
    title: "Siap Dipakai untuk Iklan & SEO",
    desc: "Website disiapkan untuk Google Ads, SEO, dan campaign digital agar promosi terukur.",
    icon: "trending",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "CTA yang Jelas untuk Meningkatkan Leads",
    desc: "Tombol WhatsApp, form kontak, dan navigasi dibuat strategis agar pengunjung mudah bertanya.",
    icon: "cursor",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
]

// ============================================
// SERVICES (Untuk Komponen Layanan Lama)
// ============================================
export const SERVICES = [
  {
    cat: "01 — Credibility",
    title: "Company Profile",
    desc: "Bangun kepercayaan klien dengan website profil profesional yang menampilkan kredibilitas bisnis Anda.",
    icon: "building",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tags: ["Profil", "Portfolio", "Kontak"],
  },
  {
    cat: "02 — Conversion",
    title: "Landing Page",
    desc: "Halaman fokus untuk campaign iklan yang mengubah pengunjung menjadi leads berkualitas.",
    icon: "target",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["Iklan", "Leads", "A/B Test"],
  },
]

// ============================================
// PRICING PLANS (3 kolom tabel)
// ============================================
export const PLANS = [
  {
    name: "StartUp",
    subtitle: "Untuk personal project & website kecil",
    price: "2.100.000",
    priceStrike: "3.000.000",
    save: "Hemat 30%",
    renew: "Perpanjangan Rp 600rb/tahun",
    popular: false,
    cta: "Pilih Paket",
    features: [
      "Host 1 website dengan traffic unlimited",
      "5 GB Premium Storage",
      "Gratis domain 1 tahun",
      "SSL, CDN & Backup harian",
      "Email bisnis 2 akun",
      "Panel admin dasar",
    ],
  },
  {
    name: "GrowBig",
    subtitle: "Sempurna untuk bisnis yang berkembang",
    price: "2.900.000",
    priceStrike: "4.200.000",
    save: "Hemat 31%",
    renew: "Perpanjangan Rp 900rb/tahun",
    popular: true,
    badge: "BEST VALUE",
    cta: "Pilih Paket",
    features: [
      "Host unlimited website, traffic unlimited",
      "20 GB Premium Storage",
      "Semua fitur StartUp",
      "Blog & galeri dinamis",
      "Training panel admin 1 sesi",
      "Google Analytics setup",
      "Speed optimization 85+",
      "Free maintenance 1 bulan",
    ],
  },
  {
    name: "GoGeek",
    subtitle: "Lebih banyak power & fitur untuk website besar",
    price: "4.200.000",
    priceStrike: "6.000.000",
    save: "Hemat 30%",
    renew: "Perpanjangan Rp 1,4jt/tahun",
    popular: false,
    cta: "Pilih Paket",
    features: [
      "Host unlimited website, traffic unlimited",
      "50 GB Premium Storage",
      "Semua fitur GrowBig",
      "Google Ads pixel & tracking",
      "Setup 1 campaign Google Ads",
      "Multi-bahasa (ID & EN)",
      "Backup otomatis mingguan",
      "Prioritas support 30 hari",
      "Free maintenance 3 bulan",
    ],
  },
]

export const PRICING_INCLUDES = [
  "Gratis domain",
  "Gratis transfer website",
  "Backup harian",
  "Support 24/7",
]

// ============================================
// HOST FEATURES & REASONS
// ============================================
export const HOST_FEATURES = [
  {
    icon: "interactive",
    title: "Mulai website baru dengan satu klik",
    desc: "Buat website impian Anda tanpa effort. Gunakan builder drag-and-drop atau install WordPress/CMS lain dalam wizard otomatis kami.",
  },
  {
    icon: "move",
    title: "Pindahkan website lama Anda",
    desc: "Sudah punya website? Biarkan tim ahli kami memindahkannya untuk Anda. Tanpa downtime, tanpa stress, tanpa biaya ekstra.",
  },
  {
    icon: "mail",
    title: "Dapatkan email bisnis profesional",
    desc: "Bangun kredibilitas dengan akun email unlimited di domain Anda, termasuk proteksi spam gratis dan webmail.",
  },
  {
    icon: "cart",
    title: "Mulai berjualan online kapan saja",
    desc: "Buka toko online dengan instalasi gratis shopping cart pilihan Anda. Dapatkan fitur gratis seperti SSL, backup harian, dan lainnya.",
  },
]

export const REASONS = [
  {
    icon: "rocket",
    title: "Kecepatan website super cepat",
    theme: "purple",
    image: IMAGES.speed,
    items: [
      { title: "CDN bawaan gratis", desc: "Di-cache di 170+ lokasi edge, website Anda loading cepat di mana pun pengunjung berada." },
      { title: "MySQL yang dioptimasi", desc: "Konfigurasi MySQL custom memotong query lambat hingga 40%, website tetap cepat saat traffic spike." },
      { title: "Multi-level caching", desc: "NGINX, full-page caching, dan Memcached bekerja bersama membuat website hingga 5x lebih cepat." },
      { title: "PHP super cepat", desc: "Engineer kami mengoptimasi PHP melampaui standar, memotong TTFB dan membuat website hingga 30% lebih cepat." },
      { title: "Infrastruktur premium", desc: "Performa andal di cloud, didukung optimasi server stack custom kami." },
      { title: "Optimasi aplikasi", desc: "Apapun builder atau aplikasi yang Anda gunakan, kami optimasi untuk performa maksimal." },
    ],
  },
  {
    icon: "shield",
    title: "Keamanan tingkat enterprise",
    theme: "indigo",
    image: IMAGES.security,
    items: [
      { title: "Firewall aplikasi web pintar", desc: "Diperbarui otomatis dengan aturan yang ditulis tim keamanan kami, memblokir ancaman baru." },
      { title: "Proteksi anti-bot AI", desc: "AI kami mendeteksi dan menghentikan serangan otomatis dan login attempt berbahaya." },
      { title: "Proteksi DDoS", desc: "Proteksi DDoS selalu aktif memfilter traffic berbahaya di level network." },
      { title: "Backup terdistribusi", desc: "Backup disimpan di multiple lokasi dan restore cepat, aman bahkan dalam skenario terburuk." },
      { title: "Sertifikat SSL gratis", desc: "Setiap website mendapat sertifikat SSL gratis, langsung HTTPS." },
      { title: "Optimizer keamanan WordPress", desc: "Gratis dan terinstal. Membantu memblokir hack, brute-force, malware." },
    ],
  },
  {
    icon: "support",
    title: "Support manusia nyata 24/7",
    theme: "violet",
    image: IMAGES.support,
    items: [
      { title: "98% kepuasan", desc: "Rating pelanggan stabil selama 10+ tahun." },
      { title: "Support live 24/7", desc: "Dukungan ahli, selalu tersedia." },
      { title: "90%+ resolusi", desc: "Diselesaikan pada kontak pertama dengan agen kami." },
    ],
  },
]

// ============================================
// MANAGEMENT & CUSTOMER STORIES
// ============================================
export const MANAGEMENT = [
  { title: "Semua di satu tempat", desc: "Domain, email, website, backup — semua dikelola dari satu dashboard sederhana. Temukan yang Anda butuhkan dalam hitungan detik." },
  { title: "Aksi satu klik", desc: "Ingin menambah toko online? Satu klik. Install WordPress? Satu klik. Setup email? Satu klik. Tanpa pengetahuan teknis." },
  { title: "Otomasi bisnis dengan AI", desc: "Kelola kehadiran online Anda dengan kekuatan AI. Jelajahi studio AI kami untuk otomasi bisnis." },
  { title: "Site Tools kami", desc: "Setiap website mendapat Site Tools sendiri — kelola, bagikan akses, dan beralih antar website secara independen." },
]

export const STORIES = [
  {
    quote: "Website saya jadi jauh lebih cepat di WebKu, yang benar-benar membantu peningkatan traffic organik.",
    site: "renatatour.com",
    role: "Travel & Tour",
    name: "Rina Wijaya",
    image: IMAGES.story1,
    color: "bg-[#1a0b2e]",
  },
  {
    quote: "Saya baru saja menghubungi bank saya dan responnya tidak instan. Saya kecewa karena saya terbiasa dengan standar WebKu.",
    site: "mandiribanana.com",
    role: "Agribisnis",
    name: "Budi Santoso",
    image: IMAGES.story2,
    color: "bg-[#e8edff]",
  },
  {
    quote: "Reliability, performa, support — semuanya di WebKu benar-benar bekerja. Ketika Anda menjalankan tim kecil dengan deadline ketat, ketenangan itu sangat berharga.",
    site: "n1store.com",
    role: "Top Up Game",
    name: "Dimas Pratama",
    image: IMAGES.story3,
    color: "bg-[#e8f7ee]",
  },
]

// ============================================
// CTA FINAL & PROCESS & TESTIMONIALS
// ============================================
export const CTA_FINAL = {
  title: "Bergabunglah dengan 150+ pemilik bisnis yang mempercayai layanan kami.",
  subtitle: "Bangun dan kembangkan kehadiran online Anda di fondasi yang kokoh dengan partner terpercaya.",
  cta: "Mulai Sekarang",
  ctaSecondary: "Punya pertanyaan? Mari bicara",
  image: IMAGES.cta,
}

export const PROCESS = [
  { num: "01", title: "Konsultasi", desc: "Diskusi tujuan, audiens, dan fitur yang dibutuhkan.", duration: "Hari 1" },
  { num: "02", title: "Materi", desc: "Kumpulkan logo, konten, foto, dan informasi penting untuk website.", duration: "Hari 2-3" },
  { num: "03", title: "Struktur", desc: "Susun sitemap dan struktur halaman yang rapi dan mudah dipahami.", duration: "Hari 3-4" },
  { num: "04", title: "Development", desc: "Eksekusi desain modern dan pengembangan website yang cepat.", duration: "Hari 4-7" },
  { num: "05", title: "Testing", desc: "Cek tampilan, kecepatan, dan fungsi di semua perangkat.", duration: "Hari 7-8" },
  { num: "06", title: "Online", desc: "Website siap dipublikasikan dan dipromosikan.", duration: "Hari 8" },
]

export const TESTIMONIALS = [
  {
    name: "Rina Wijaya",
    role: "Owner, Renata Tour",
    quote: "Website yang dibuat tim WebKu benar-benar mengubah cara pelanggan melihat bisnis kami. Booking naik 40% dalam 3 bulan pertama.",
    avatar: "RW",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Founder, Mandiri Banana",
    quote: "Prosesnya transparan, revisi cepat, dan hasilnya melebihi ekspektasi. Timnya responsif dan profesional.",
    avatar: "BS",
    rating: 5,
  },
]

// ============================================
// FAQ (Panjang)
// ============================================
export const FAQ = [
  { q: "Apa itu jasa pembuatan website?", a: "Jasa pembuatan website adalah layanan yang menyediakan teknologi dan infrastruktur untuk menyimpan, mengelola, dan mengirimkan file website Anda (kode, gambar, dll.) ke pengunjung melalui internet. Konten website seperti furnitur di toko, nama domain adalah alamat jalan, dan hosting adalah bangunannya. Tanpa hosting, website Anda tidak punya tempat untuk eksis." },
  { q: "Apa saja jenis jasa pembuatan website?", a: "Ada empat jenis utama: shared hosting (banyak website berbagi satu server — paling terjangkau, cocok untuk website kecil), VPS hosting (partisi server untuk kontrol lebih), dedicated hosting (seluruh server untuk Anda), dan cloud hosting (resource tersebar di multiple server untuk skalabilitas). Paket kami menggunakan model managed hosting yang dibangun di cloud, memberikan reliability tingkat cloud tanpa perlu mengelola infrastruktur sendiri." },
  { q: "Mengapa penyedia jasa pembuatan website penting untuk bisnis Anda?", a: "Hosting langsung mempengaruhi kecepatan, uptime, dan keamanan website Anda. Kecepatan loading yang lambat mempengaruhi pengalaman pengunjung, kepercayaan, dan ranking SEO. Uptime yang buruk bisa membuat website offline di momen kritis. Keamanan yang lemah menciptakan kerentanan yang bisa menyebabkan kebocoran data. Dan ketika masalah teknis muncul, support yang responsif membuat semua perbedaan." },
  { q: "Berapa biaya pembuatan website?", a: "Biaya pembuatan website biasanya berkisar dari gratis (dengan keterbatasan signifikan) hingga Rp 500rb–Rp 5jt untuk shared hosting, hingga Rp 15jt+ untuk VPS atau dedicated hosting. Paket kami mulai dari Rp 2,1 juta untuk project pertama, dengan setiap paket termasuk domain, SSL, backup harian, dan support 24/7 — tanpa biaya tersembunyi untuk kebutuhan esensial." },
  { q: "Apa manfaat memilih layanan managed website?", a: "Manfaat utama managed hosting adalah Anda tidak perlu staf teknis atau keahlian khusus — provider menangani semua terkait server dan infrastruktur. Ini termasuk maintenance, keamanan (SSL, proteksi malware, update otomatis), dan optimasi performa seperti caching bawaan." },
  { q: "Bisakah saya membuat website WordPress dan website lain?", a: "Ya, teknologi hosting kami mendukung sebagian besar platform CMS populer (termasuk WordPress dan WooCommerce), serta website custom static dan dinamis yang dibangun dengan PHP, HTML, atau JavaScript. Pengguna WordPress mendapat instalasi one-click, update core otomatis, dan staging environment untuk testing perubahan dengan aman." },
  { q: "Apakah sertifikat SSL, domain gratis, backup, dan CDN termasuk dalam paket?", a: "Ya, setiap paket hosting kami termasuk: sertifikat SSL gratis (dipasang dan diperbarui otomatis), backup harian otomatis (menyimpan hingga 30 hari restore points), domain gratis satu tahun (.com, .org, atau .net), dan CDN bawaan yang mendistribusikan konten Anda ke 170+ lokasi global. Fitur-fitur ini tersedia sejak hari pertama, tanpa setup manual." },
  { q: "Apakah paket termasuk email bisnis profesional?", a: "Ya — setiap paket termasuk email bisnis profesional dengan akun unlimited menggunakan nama domain Anda tanpa biaya tambahan. Buat akun email seperti Anda@bisnisanda.com dan kelola melalui panel admin. Akses email via webmail, klien email seperti Outlook, atau perangkat mobile." },
  { q: "Bisakah saya migrasi website dari host lain?", a: "Ya, Anda bisa migrasi website dari host lain. Migrasi pertama gratis, dan tim kami menangani transfer teknis untuk meminimalkan gangguan pada website Anda. Website Anda tetap live selama seluruh proses migrasi, jadi Anda tidak kehilangan traffic atau penjualan saat beralih host." },
  { q: "Optimasi keamanan dan performa apa yang termasuk?", a: "Kami menyertakan optimasi performa dan keamanan seperti sertifikat SSL gratis, scanning malware harian, proteksi anti-bot AI, pertahanan DDoS, infrastruktur cloud, teknologi caching, dan CDN gratis di 170+ lokasi. Keamanan: sertifikat SSL auto-renew, scanning malware harian dengan penghapusan gratis, sistem AI memblokir 99.99% traffic berbahaya, dan monitoring proaktif 24/7. Performa: infrastruktur cloud, caching mengurangi waktu load hingga 5x, CDN gratis mendistribusikan konten secara global." },
  { q: "Support seperti apa yang saya dapatkan?", a: "Kami menyediakan support 24/7 via live chat, sistem tiket, dan telepon. Tim ahli in-house kami, tersedia via live chat dan tiket, terlatih secara ekstensif dalam hosting website, WordPress, WooCommerce, dan manajemen website. Mereka membantu dengan masalah teknis kompleks dan spesifik website, bukan hanya masalah hosting dasar." },
  { q: "Berapa banyak traffic yang bisa ditangani?", a: "Paket hosting kami menangani dari 10.000 hingga 400.000+ kunjungan bulanan tergantung paket Anda: StartUp mendukung sekitar 10.000 kunjungan, GrowBig menangani sekitar 100.000, dan GoGeek mengelola 400.000+ bulanan. Semua paket berjalan di infrastruktur cloud yang menangani lonjakan traffic tanpa melambat." },
  { q: "Apakah hosting kami aman?", a: "Ya, kami memberikan keamanan multi-layer, yang memblokir 99.99% traffic berbahaya sebelum mencapai website Anda — melindungi dari infeksi malware, serangan brute force, DDoS, dan pelanggaran data. Setiap akun hosting berjalan di ruang terisolasi, mencegah kompromi keamanan pada website lain mempengaruhi website Anda." },
  { q: "Bisakah saya membuat toko online atau website ecommerce?", a: "Ya! Kami adalah pilihan excellent untuk ecommerce. Platform kami mendukung solusi populer seperti WooCommerce dan PrestaShop dan termasuk SSL gratis, performa yang dioptimasi, dan backup harian untuk menjaga toko Anda cepat dan aman. Infrastruktur kami menangani kedua tantangan — 99.9% uptime meminimalkan kerugian penjualan, dan performa yang dioptimasi menjaga pelanggan melewati checkout." },
  { q: "Di mana server berlokasi dan apakah mempengaruhi performa?", a: "Kami mengoperasikan datacenter di lokasi strategis global di Asia, Eropa, Amerika Utara, dan Australia. Saat signup, Anda memilih lokasi terdekat dengan audiens utama Anda. Lokasi server langsung mempengaruhi kecepatan loading — website yang di-host di US tapi melayani pengunjung Eropa bisa 200-400ms lebih lambat karena jarak fisik." },
  { q: "Apakah saya perlu pengetahuan teknis untuk menggunakan layanan?", a: "Tidak. Kami dibangun agar siapa pun bisa menggunakannya — tanpa skill teknis. Tugas seperti install WordPress, aktivasi SSL, membuat akun email, atau setup staging site semuanya dilakukan melalui tools point-and-click sederhana. Platform menangani kompleksitas teknis secara otomatis — security patch diterapkan tanpa keterlibatan Anda, backup berjalan di background, dan optimasi performa bekerja tanpa konfigurasi." },
]

// ============================================
// DATA HALAMAN LAYANAN (Gaya Support)
// ============================================
export const SERVICE_HERO = {
  title: "Layanan website premium. Tim ahli, pengerjaan cepat, 24/7.",
  subtitle: "Layanan WebKu dirancang untuk bisnis yang ingin tampil profesional, cepat, dan siap mendatangkan pelanggan.",
  features: [
    { icon: "award", title: "150+ Website", desc: "Telah dipercaya oleh berbagai bisnis dan UMKM." },
    { icon: "support", title: "Support 24/7", desc: "Tim ahli siap membantu kapan pun Anda butuhkan." },
    { icon: "check", title: "Garansi 100%", desc: "Revisi sepuasnya sampai Anda benar-benar puas." },
  ],
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
}

export const SERVICE_FEATURES = [
  {
    icon: "building",
    title: "Company Profile",
    desc: "Bangun kredibilitas bisnis Anda dengan website profil yang profesional, rapi, dan mudah ditemukan di Google.",
  },
  {
    icon: "target",
    title: "Landing Page",
    desc: "Halaman fokus yang dirancang khusus untuk mengubah pengunjung iklan menjadi leads atau penjualan.",
  },
  {
    icon: "store",
    title: "Toko Online",
    desc: "Jualan online lebih rapi dengan katalog produk, keranjang belanja, dan sistem pembayaran otomatis.",
  },
]

export const SERVICE_BENTO = {
  title: "Kami bangun website yang bekerja untuk bisnis Anda",
  desc: "Bukan sekadar desain cantik. Kami memastikan struktur, kecepatan, dan SEO website Anda sudah optimal sejak hari pertama agar mendatangkan pelanggan.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
}

export const SERVICE_DARK_FEATURES = [
  { icon: "help", title: "Konsultasi Awal", desc: "Diskusikan kebutuhan, target audiens, dan fitur yang diinginkan." },
  { icon: "sparkle", title: "Desain Custom", desc: "Setiap desain dibuat khusus, tidak menggunakan template pasaran." },
  { icon: "support", title: "Support Setelah Rilis", desc: "Kami tidak hilang setelah website live. Ada garansi dan maintenance." },
]

export const SERVICE_TESTIMONIALS = [
  { text: "Website yang dibuat tim WebKu benar-benar mengubah cara pelanggan melihat bisnis kami. Booking naik 40%.", name: "Rina Wijaya", avatar: "RW", date: "Renata Tour" },
  { text: "Prosesnya transparan, revisi cepat, dan hasilnya melebihi ekspektasi. Timnya responsif dan profesional.", name: "Budi Santoso", avatar: "BS", date: "Mandiri Banana" },
  { text: "Sistem top up otomatis yang mereka buat sangat membantu operasional kami. Tidak perlu standby 24 jam lagi.", name: "Dimas Pratama", avatar: "DP", date: "N1STORE" },
]

// ============================================
// DATA HALAMAN HARGA
// ============================================
export const PRICING_HERO = {
  title: "Harga transparan, hasil maksimal.",
  subtitle: "Pilih paket yang sesuai dengan skala bisnis Anda. Tanpa biaya tersembunyi, semua sudah termasuk domain, hosting, dan support.",
  video: "https://cdn.dribbble.com/userupload/49218917/file/95da409101c0f70bcd9cf2c5501e1bb6.mp4",
}

export const PRICING_CATEGORIES = [
  { id: "company-profile", label: "Company Profile" },
  { id: "landing-page", label: "Landing Page" },
  { id: "toko-online", label: "Toko Online" },
  { id: "booking", label: "Sistem Booking" },
  { id: "topup", label: "Website Top Up" },
  { id: "sistem-custom", label: "Sistem Custom" },
]

export interface PricingTier {
  name: string;
  desc: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  badge?: string;
}

export const PRICING_TIERS: Record<string, PricingTier[]> = {
  "company-profile": [
    {
      name: "Starter",
      desc: "Cocok untuk UMKM yang ingin hadir profesional.",
      price: "2.100.000",
      period: "sekali bayar",
      features: ["Hingga 5 halaman", "Desain custom responsif", "SEO on-page dasar", "Domain & Hosting 1 tahun", "Email bisnis 2 akun", "Form kontak & WhatsApp"],
      popular: false,
    },
    {
      name: "Growth",
      desc: "Untuk bisnis yang ingin kelola konten sendiri.",
      price: "2.900.000",
      period: "sekali bayar",
      features: ["Hingga 8 halaman", "Semua fitur Starter", "Blog & galeri dinamis", "Panel admin (CMS)", "Training 1 sesi", "Google Analytics setup", "Free maintenance 1 bulan"],
      popular: true,
      badge: "Paling Populer",
    },
    {
      name: "Scale",
      desc: "Solusi lengkap untuk perusahaan besar.",
      price: "4.200.000",
      period: "sekali bayar",
      features: ["Hingga 12 halaman", "Semua fitur Growth", "Google Ads pixel & tracking", "Setup 1 campaign Ads", "Multi-bahasa (ID & EN)", "Backup otomatis mingguan", "Free maintenance 3 bulan"],
      popular: false,
    },
  ],
  "landing-page": [
    {
      name: "Starter",
      desc: "Cocok untuk bisnis baru yang butuh halaman promosi cepat.",
      price: "1.100.000",
      period: "sekali bayar",
      features: ["Hingga 6 section", "Desain custom responsif", "Tombol WhatsApp & CTA", "SEO on-page dasar", "Domain & Hosting 1 tahun"],
      popular: false,
    },
    {
      name: "Growth",
      desc: "Untuk bisnis yang mulai beriklan.",
      price: "1.600.000",
      period: "sekali bayar",
      features: ["Hingga 10 section", "Semua fitur Starter", "Copywriting penjualan", "Google Analytics", "Meta Pixel", "Speed optimization"],
      popular: true,
      badge: "Paling Populer",
    },
    {
      name: "Scale",
      desc: "Untuk bisnis fokus iklan berbayar.",
      price: "2.500.000",
      period: "sekali bayar",
      features: ["Hingga 15 section", "Semua fitur Growth", "Multi-CTA & countdown", "Google Tag Manager", "Google Ads tracking", "Setup 1 campaign Ads"],
      popular: false,
    },
  ],
  "toko-online": [
    {
      name: "Starter Shop",
      desc: "Toko online dengan order via WhatsApp.",
      price: "3.300.000",
      period: "sekali bayar",
      features: ["Katalog produk", "Panel admin produk", "Input 50 produk", "Keranjang & checkout", "Order ke WhatsApp", "SEO + Search Console"],
      popular: false,
    },
    {
      name: "Smart Shop",
      desc: "Checkout di website, ongkir otomatis.",
      price: "4.900.000",
      period: "sekali bayar",
      features: ["Semua fitur Starter Shop", "Input 150 produk", "Variasi produk & stok", "Ongkir otomatis", "Invoice otomatis", "Dashboard admin lengkap", "Laporan penjualan"],
      popular: true,
      badge: "Paling Populer",
    },
    {
      name: "Automatic Shop",
      desc: "Pembayaran otomatis, toko jalan 24 jam.",
      price: "6.900.000",
      period: "sekali bayar",
      features: ["Semua fitur Smart Shop", "Input 300 produk", "Payment gateway", "Verifikasi otomatis", "Akun pelanggan & wishlist", "Review produk", "Laporan & export"],
      popular: false,
    },
  ],
  booking: [
    {
      name: "Basic Booking",
      desc: "Website profil + form booking ke WhatsApp.",
      price: "2.900.000",
      period: "sekali bayar",
      features: ["Hingga 8 halaman", "Form booking lengkap", "Booking ke WhatsApp", "Blog & galeri", "SEO + Search Console"],
      popular: false,
    },
    {
      name: "Smart Booking",
      desc: "Booking langsung di website + dashboard.",
      price: "4.500.000",
      period: "sekali bayar",
      features: ["Semua fitur Basic", "Booking di website", "Kode booking otomatis", "Invoice otomatis", "Dashboard admin", "Laporan transaksi"],
      popular: true,
      badge: "Paling Populer",
    },
    {
      name: "Automatic Booking",
      desc: "Pembayaran online, jadwal terkunci otomatis.",
      price: "6.500.000",
      period: "sekali bayar",
      features: ["Semua fitur Smart", "Payment gateway", "Verifikasi otomatis", "Kalender real-time", "Bayar DP atau lunas", "Laporan pendapatan"],
      popular: false,
    },
  ],
  topup: [
    {
      name: "Starter",
      desc: "Website top up, order via WhatsApp.",
      price: "2.500.000",
      period: "sekali bayar",
      features: ["Daftar game & produk", "Panel admin produk", "Form pesanan User ID", "Order ke WhatsApp", "SEO + Search Console"],
      popular: false,
    },
    {
      name: "Smart",
      desc: "Top up otomatis via Digiflazz.",
      price: "4.500.000",
      period: "sekali bayar",
      features: ["Semua fitur Starter", "Integrasi API Digiflazz", "Sinkron produk & harga", "Top up otomatis", "Dashboard admin", "Laporan profit"],
      popular: true,
      badge: "Paling Populer",
    },
    {
      name: "Automatic",
      desc: "Pembayaran otomatis, top up 24 jam.",
      price: "6.500.000",
      period: "sekali bayar",
      features: ["Semua fitur Smart", "Payment gateway", "Verifikasi otomatis", "Top up otomatis 24 jam", "Akun member & reseller", "Laporan & export"],
      popular: false,
    },
  ],
  "sistem-custom": [
    {
      name: "Custom System",
      desc: "Sistem khusus sesuai kebutuhan bisnis Anda.",
      price: "Konsultasi",
      period: "harga menyesuaikan",
      features: ["Analisis kebutuhan & alur bisnis", "Rancangan fitur & mockup", "Desain UI/UX custom", "Dashboard admin & hak akses", "Integrasi API & payment", "Keamanan & backup", "Source code milik Anda"],
      popular: false,
    },
  ],
}

// ============================================
// DATA HALAMAN PORTOFOLIO
// ============================================
export const PORTOFOLIO_HERO = {
  title: "Karya yang berbicara lebih keras dari kata-kata.",
  subtitle: "Jelajahi bagaimana kami membantu bisnis dari berbagai skala membangun kehadiran digital yang memukau.",
  videoBg: "https://cdn.dribbble.com/userupload/17954723/file/original-c33ce0d880b26637e8ad3ddd194159d6.mp4",
}

export const PORTOFOLIO_FEATURED = [
  {
    id: "f1",
    title: "E-Commerce Furniture",
    category: "Web Design & Development",
    video: "https://cdn.dribbble.com/userupload/46713223/file/large-b6c1b001035073e9bd8765dc5a9f657d.mp4",
  },
  {
    id: "f2",
    title: "Travel & Tour App",
    category: "Mobile App UI",
    video: "https://cdn.dribbble.com/userupload/45147949/file/large-8a0ac87e24b6b6a8cfa6a4fd553a52a9.mp4",
  },
]

export const PORTOFOLIO_GALLERY = [
  "https://cdn.dribbble.com/userupload/17741139/file/original-6b93f93903462597128342e09e2531ad.png?resize=752x2225&vertical=center",
  "https://cdn.dribbble.com/userupload/46495110/file/5a0052af5b0e1106285fb2ad3723cecb.jpg?resize=1024x768&vertical=center",
  "https://cdn.dribbble.com/userupload/46495113/file/4283be4042125f07bc6fb9a17a31280a.jpg?resize=752x&vertical=center",
  "https://cdn.dribbble.com/userupload/49328412/file/bf8c9237b553525a3ce369aac79af855.png?format=webp&resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/49314161/file/8aba0465a0079888b7e001ea2250df7c.png?format=webp&resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/49293066/file/0fe449ca697e66bd9ceb8bf7f0319781.png?format=webp&resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/49287386/file/da85b89a23506bd1dc22a07c97156937.png?format=webp&resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/49284296/file/343780fe6dbe90e2d065b27dddee3b53.png?format=webp&resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/49188775/file/16364c625558b472df6383aa4c496448.png?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/49037683/file/57bc9dc892e44cc0c97899aac9424386.png?format=webp&resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/48887461/file/08aea51ec980fa262cb1808a252d9fb2.png?format=webp&resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/48841259/file/c53606fe72cf9fee27c15bf76d5af00e.png?format=webp&resize=400x300&vertical=center",
]

// ============================================
// DATA HALAMAN FAQ
// ============================================
export const FAQ_HERO = {
  title: "Ada yang bisa kami bantu?",
  subtitle: "Temukan jawaban atas pertanyaan yang paling sering diajukan seputar layanan, harga, dan proses pembuatan website di WebKu.",
  videoBg: "https://cdn.dribbble.com/userupload/17954723/file/original-c33ce0d880b26637e8ad3ddd194159d6.mp4",
}

// ============================================
// DATA HALAMAN KONTAK
// ============================================
export const FOUNDER = {
  name: "Rafael Antonius Nababan",
  role: "Founder & Lead Developer",
  image: "https://prod-sribu.sniag.upcloudobjects.com/file/3e7a2a17-01cd-4867-a4d3-823609a9c7b6.jpg",
  quote: "Kami tidak hanya membangun website. Kami membangun fondasi digital untuk pertumbuhan bisnis Anda.",
  story: [
    "Semuanya dimulai dari sebuah laptop tua di kamar kos kecil di Bandung pada tahun 2019. Saat itu, saya melihat banyak sekali UMKM yang memiliki produk luar biasa, tetapi tidak memiliki kehadiran digital yang layak.",
    "Saya mulai membuat website untuk tetangga saya yang berjualan kue. Dari mulut ke mulut, proyek kecil itu berkembang menjadi puluhan pesanan. Saya sadar, bisnis ini bukan sekadar tentang menulis kode, tetapi tentang membantu orang bertumbuh.",
    "Pada tahun 2025, saya merekrut dua teman terbaik saya. Kami sepakat untuk membangun WebKu.pro dengan satu prinsip: kualitas premium, harga yang masuk akal, dan pelayanan yang tulus.",
    "Hari ini, kami telah membantu lebih dari 150 bisnis di seluruh Indonesia. Perjalanan ini masih panjang, dan saya sangat bersemangat untuk membantu lebih banyak lagi bisnis berkembang bersama kami."
  ]
}

export const CHECKOUT_BENEFITS = [
  "Garansi revisi sepuasnya",
  "Gratis domain & hosting 1 tahun",
  "Pengerjaan 4-7 hari kerja",
  "Support 24/7 setelah rilis",
]