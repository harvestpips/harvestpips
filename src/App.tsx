/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoUrl from './assets/logo.png';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Phone, 
  Sprout, 
  Utensils, 
  FileText, 
  ShieldCheck,
  TrendingUp,
  Mail,
  MapPin
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-cream/95 backdrop-blur-md py-3 shadow-lg shadow-black/5 border-cream-border' 
            : 'bg-cream/0 py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 transition-transform group-hover:scale-105">
              <img 
                src={logoUrl} 
                alt="HARVEST PIPS Management Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-dark font-bold text-sm tracking-[0.05em]">HARVESTPIPS</div>
              <span className="text-muted text-[9px] tracking-[0.18em] block -mt-1">MANAGEMENT</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['layanan', 'tentang', 'portofolio', 'blog', 'kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item)}
                className="text-mid text-[13px] hover:text-dark transition-colors relative group capitalize"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all group-hover:w-full" />
              </button>
            ))}
            <button 
              onClick={() => scrollTo('kontak')}
              className="bg-gold hover:bg-gold-dim text-dark text-[11px] font-medium tracking-[0.08em] px-6 py-2.5 rounded transition-all active:scale-95"
            >
              KONSULTASI GRATIS
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-dark"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-cream pt-24 px-12 lg:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-6">
              {['layanan', 'tentang', 'portofolio', 'blog', 'kontak'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-dark text-2xl font-light text-left capitalize"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('kontak')}
                className="bg-gold text-dark font-medium tracking-wider px-8 py-4 rounded text-sm w-fit mt-4"
              >
                KONSULTASI GRATIS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative pt-20 overflow-hidden bg-cream-dark">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:min-h-[calc(100vh-80px)]">
          <div className="flex-1 p-8 lg:p-12 xl:p-24 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold-muted text-[10px] tracking-[0.22em] font-medium mb-6 uppercase"
            >
              PT HARVEST PIPS MANAGEMENT · LAMPUNG TENGAH
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl lg:text-7xl xl:text-8xl text-dark leading-[1.05] mb-6"
            >
              Dari Akar<br />
              ke <span className="italic text-dark font-normal">Pasar.</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif italic text-xl lg:text-2xl text-muted mb-8"
            >
              Finansial Tertakar, Bisnis Makin Besar.
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-mid text-sm lg:text-base leading-relaxed mb-10 max-w-md font-light"
            >
              Satu mitra strategis untuk bisnis nyata di lapangan dan peluang di pasar finansial. Kami dampingi trader dan pelaku UMKM membangun bisnis yang kuat dan finansial yang sehat.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://wa.me/6285183153125?text=Halo%20HARVESTPIPS%2C%20saya%20tertarik%20untuk%20konsultasi."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dim text-dark text-xs font-semibold tracking-widest px-10 py-4 rounded transition-all active:scale-95 shadow-lg shadow-gold/20 flex items-center justify-center"
              >
                MULAI KONSULTASI
              </a>
              <button 
                onClick={() => scrollTo('layanan')}
                className="border-1.5 border-dark text-dark hover:bg-dark hover:text-gold px-8 py-4 rounded text-xs tracking-widest transition-all"
              >
                PELAJARI LAYANAN ↓
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-full lg:w-[42%] bg-dark flex flex-col justify-center gap-1 p-6 lg:p-8 border-l border-dark2"
          >
            <div className="grid grid-cols-2 bg-dark2 gap-px">
              {[
                { n: '80+', l: 'UMKM Dibina' },
                { n: '88%', l: 'Klien Lanjut ke Sesi Berikutnya', highlight: true },
                { n: '3+', l: 'Tahun Pengalaman' },
                { n: '150+', l: 'Sesi Mentoring Selesai' },
              ].map((stat, i) => (
                <div key={i} className={`p-5 lg:p-7 group cursor-default transition-colors ${stat.highlight ? 'bg-gold' : 'bg-dark2 hover:bg-dark3'}`}>
                  <div className={`font-serif text-3xl lg:text-4xl font-bold leading-none mb-1.5 ${stat.highlight ? 'text-dark' : 'text-gold'}`}>
                    {stat.n}
                  </div>
                  <div className={`text-[10px] tracking-wider leading-tight uppercase font-medium ${stat.highlight ? 'text-gold-muted' : 'text-muted'}`}>
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#161616] py-5 px-8 border-t border-dark2">
              <p className="text-[11px] leading-relaxed text-muted font-light">
                Melayani klien di <span className="text-gold font-medium">seluruh Indonesia</span> — baik secara tatap muka maupun pendampingan online.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRIP */}
      <div className="bg-dark py-4 overflow-hidden border-y border-dark2">
        <div className="max-w-7xl mx-auto px-6 whitespace-nowrap flex items-center justify-center gap-8 lg:gap-16">
          {['KONSULTASI BISNIS', 'AGRIBISNIS', 'F&B UMKM', 'LAPORAN KEUANGAN', 'TAX PLANNING', 'MENTORING TRADER'].map((text, i) => (
            <div key={i} className="flex items-center gap-8 lg:gap-16">
              <span className="text-[10px] font-bold tracking-[0.15em] text-gold/80">{text}</span>
              {i < 5 && <div className="w-1 h-1 bg-white/10 rounded-full shrink-0 hidden md:block" />}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-12 bg-cream" id="layanan">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-gold-muted text-[10px] tracking-[0.25em] font-semibold uppercase block mb-3">LAYANAN KAMI</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-dark leading-tight">Tiga Pilar, <span className="italic text-gold">Satu Misi</span></h2>
            <p className="text-muted text-sm lg:text-base max-w-xl mt-4 font-light">Pendampingan menyeluruh — dari ladang, dapur bisnis, pembukuan, hingga eksekusi di chart trading.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* LEFT: Business & Finance */}
            <div className="space-y-16">
              {/* Pilar 1 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[9px] tracking-[0.2em] font-bold text-gold-muted uppercase">PILAR 01</span>
                  <div className="h-px flex-1 bg-cream-border" />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-dark mb-10">Manajemen & Pengembangan Bisnis</h3>
                
                <div className="space-y-6">
                  <ServiceCard 
                    icon={<Sprout className="text-dark" />}
                    title="Agribisnis"
                    desc="Pendampingan bisnis pertanian & perkebunan dari hulu ke hilir. Kami bantu penyusunan business plan, analisis kelayakan usaha, optimasi rantai pasok, hingga strategi akses pasar — untuk petani, koperasi, maupun distributor agro."
                    tags={['Business Plan', 'Supply Chain', 'Akses Pasar', 'Kelayakan Usaha']}
                    colorClass="bg-cream-dark"
                  />
                  <ServiceCard 
                    icon={<Utensils className="text-[#B89A30]" />}
                    title="F&B UMKM"
                    desc="Strategi pertumbuhan untuk usaha kuliner — dari dapur rumahan hingga skala distribusi yang lebih luas. Kami bantu penyusunan SOP operasional, analisis profitabilitas menu, strategi branding, hingga roadmap ekspansi yang realistis."
                    tags={['Branding', 'SOP Operasional', 'Skalabilitas', 'Analisis Menu']}
                    colorClass="bg-[#FDF8D8]"
                  />
                </div>
              </div>

              {/* Pilar 2 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[9px] tracking-[0.2em] font-bold text-gold-muted uppercase">PILAR 02</span>
                  <div className="h-px flex-1 bg-cream-border" />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-dark mb-10">Keuangan & Perpajakan UMKM</h3>
                
                <div className="space-y-6">
                  <ServiceCard 
                    icon={<FileText className="text-mid" />}
                    title="Laporan Keuangan"
                    desc="Penyusunan laporan keuangan terstandar — Laba Rugi, Neraca, dan Arus Kas — sesuai standar akuntansi UMKM Indonesia. Cocok untuk pengajuan kredit bank (KUR), due diligence investor, maupun kebutuhan internal manajemen."
                    tags={['Pembukuan', 'Bulanan', 'Audit Ready', 'KUR Ready']}
                    colorClass="bg-[#F2F0EA]"
                  />
                  <ServiceCard 
                    icon={<ShieldCheck className="text-gold-dim" />}
                    title="Tax Planning"
                    isTax
                    desc="Perencanaan pajak yang legal, efisien, dan aman secara regulasi. Kami bantu pengelolaan SPT Masa PPN, PPh 21/23, SPT Tahunan Badan, hingga strategi minimalisasi beban pajak yang sesuai ketentuan DJP — tanpa risiko sanksi."
                    tags={['PPh Final UMKM', 'PKP', 'SPT Tahunan', 'PPh Badan']}
                    colorClass="bg-[#FDF8E0]"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Trading */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] tracking-[0.2em] font-bold text-gold-muted uppercase">PILAR 03</span>
                <div className="h-px flex-1 bg-cream-border" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-dark mb-10">Mentoring Trader</h3>
              
              <div className="bg-dark2 rounded-xl shadow-2xl overflow-hidden border border-white/5">
                <div className="p-8 lg:p-10 border-b border-white/5 bg-dark/20">
                  <p className="text-white/80 text-sm leading-relaxed font-light">Program mentoring intensif 1-on-1 maupun kelompok kecil — dirancang untuk trader yang ingin naik kelas dari pemula menjadi trader yang disiplin dan punya edge di pasar. Berbasis sistem, bukan insting.</p>
                </div>
                <div className="grid grid-cols-2 bg-white/5 gap-px">
                  <Indicator title="Analisis Teknikal" sub="Porsi Materi" value={88} />
                  <Indicator title="Risk Management" sub="Porsi Materi" value={92} />
                  <Indicator title="Trading Psychology" sub="Porsi Materi" value={80} />
                  <Indicator title="1-on-1 Mentoring" sub="Sesi Personal" value={100} />
                </div>
                <div className="p-6 bg-dark/40 flex flex-wrap items-center gap-4 border-t border-white/5">
                  <span className="text-[9px] tracking-[0.2em] text-gold-muted font-bold opacity-60">PASAR YANG DIPELAJARI</span>
                  {['Forex', 'Saham', 'Indeks', 'Kripto'].map((m) => (
                    <span key={m} className={`text-[10px] px-3 py-1.5 rounded-full border transition-all ${m === 'Forex' ? 'bg-gold text-dark border-gold font-bold' : 'text-faint border-white/10 hover:border-gold hover:text-gold cursor-default'}`}>
                      {m}
                    </span>
                  ))}
                </div>
                <div className="px-6 py-4 bg-black/40 border-t border-white/5">
                  <p className="text-[9px] leading-relaxed text-white/30 font-light">
                    ⚠️ <span className="font-medium text-white/40">Peringatan Risiko:</span> Trading di pasar finansial mengandung risiko kehilangan modal. Program ini bersifat edukatif dan tidak menjamin hasil atau keuntungan tertentu. Kinerja masa lalu bukan jaminan hasil di masa depan.
                  </p>
                </div>
                <button 
                  onClick={() => scrollTo('kontak')}
                  className="w-full bg-gold hover:bg-gold-dim py-5 px-10 flex items-center justify-between text-dark font-bold text-xs tracking-widest transition-all"
                >
                  DAFTAR PROGRAM MENTORING
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="bg-dark/60 border-t border-white/5">
                  <div className="px-8 pt-6 pb-3 flex items-center justify-between">
                    <div className="text-[9px] tracking-[0.22em] text-gold-muted font-bold">PROGRAM IB BROKER</div>
                    <span className="text-[8px] tracking-[0.1em] text-emerald-400/70 border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5 rounded-sm font-semibold">✓ IB RESMI</span>
                  </div>
                  <p className="px-8 pb-5 text-[11px] text-faint/70 leading-relaxed font-light">
                    Daftar trading lewat <span className="text-gold font-semibold">HARVESTPIPS</span> dan dapatkan <span className="text-white/60">rebate per lot</span> langsung ke akun Anda.
                  </p>
                  <div className="grid grid-cols-5 border-t border-white/5">
                    {[
                      { name: 'Exness',          reg: 'CySEC · FCA' },
                      { name: 'Markets4You',     reg: 'FSA' },
                      { name: 'Vantage',         reg: 'ASIC · FCA' },
                      { name: 'Fusion Markets', reg: 'ASIC' },
                      { name: 'B2Prime',         reg: 'MFSA' },
                    ].map((b) => (
                      <div key={b.name} className="flex flex-col items-center justify-center gap-1 py-4 px-1 border-r border-white/5 last:border-r-0 hover:bg-white/5 transition-colors cursor-default group">
                        <span className="text-[9px] font-bold text-white/70 group-hover:text-gold transition-colors text-center leading-tight whitespace-pre-line">{b.name}</span>
                        <span className="text-[7px] text-white/25 tracking-wide text-center leading-tight">{b.reg}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-8 py-4 border-t border-white/5">
                    <button
                      onClick={() => { const el = document.getElementById('kontak'); if(el) el.scrollIntoView({behavior:'smooth'}); }}
                      className="w-full text-[10px] tracking-widest text-gold border border-gold/20 py-2.5 rounded hover:bg-gold hover:text-dark transition-all font-semibold"
                    >
                      DAFTAR VIA HARVESTPIPS → DAPAT REBATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-dark2" id="tentang">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          {/* Left: Narrative + Values */}
          <div className="flex-1 p-12 lg:px-12 lg:py-24 xl:px-24 xl:py-24 lg:border-r border-dark flex flex-col gap-12">
            <div>
              <span className="text-gold text-[9px] tracking-[0.25em] font-bold mb-6 block uppercase">TENTANG KAMI</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-8 leading-tight">Menjembatani<br /><span className="italic text-gold font-normal">Akar & Pasar.</span></h2>
              <p className="text-faint text-sm lg:text-base leading-relaxed mb-10 font-light">
                <span className="font-bold tracking-[0.05em] text-cream not-italic">HARVESTPIPS</span> lahir dari keyakinan bahwa bisnis yang kuat dan literasi finansial yang baik harus bisa dimiliki siapa saja — mulai dari petani di Lampung hingga trader di kota besar. Kami hadir sebagai mitra yang turun langsung, bukan sekadar memberi saran dari jauh.
              </p>
              <div className="space-y-5">
                <AboutValue text="Setiap rekomendasi didukung analisis yang terukur dan relevan." strong="Berbasis data" />
                <AboutValue text="Kami mendampingi proses, bukan hanya memberikan laporan pasif." strong="Pendampingan nyata" />
                <AboutValue text="Memahami ekosistem bisnis di Indonesia dari akar hingga hilir." strong="Berakar lokal" />
              </div>
            </div>

            {/* Founder Card */}
            <div className="border border-white/8 bg-dark/40 p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                <span className="font-serif text-xl text-gold font-bold">AN</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-cream font-bold text-sm tracking-wide">Ainun Muslimin Najib</span>
                  <span className="text-[8px] tracking-[0.15em] text-gold border border-gold/20 bg-gold/5 px-2 py-0.5 rounded-sm font-bold">CEO</span>
                </div>
                <p className="text-faint/60 text-[10px] tracking-wide mb-3">Founder & Chief Executive Officer</p>
                <p className="text-faint text-xs leading-relaxed font-light">
                  Memimpin HARVESTPIPS dengan visi mendemokratisasi akses terhadap pendampingan bisnis dan literasi keuangan berkualitas di Indonesia. Berpengalaman di bidang manajemen usaha, keuangan UMKM, dan pasar finansial.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Process Steps */}
          <div className="w-full lg:w-[45%] flex flex-col divide-y divide-dark">
            <div className="p-8 lg:p-10 bg-dark/20">
              <span className="text-[9px] tracking-[0.2em] text-gold-muted font-bold uppercase">Cara Kerja Kami</span>
            </div>
            <Step num="01" name="DIAGNOSA" desc="Audit menyeluruh kondisi bisnis, potensi, dan gap yang perlu dibenahi. Kami mulai dari memahami konteks Anda, bukan asumsi." />
            <Step num="02" name="STRATEGI" desc="Roadmap realistis dan terukur, disesuaikan dengan kapasitas, target, dan ekosistem bisnis Anda saat ini." />
            <Step num="03" name="IMPLEMENTASI" desc="Jalankan bersama — kami mendampingi di setiap langkah eksekusi, bukan hanya memberi dokumen lalu pergi." />
            <Step num="04" name="SCALE" desc="Review berkala, evaluasi capaian, dan dorong pertumbuhan ke level berikutnya secara terstruktur." />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-12 bg-cream-dark" id="portofolio">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-gold-muted text-[10px] tracking-[0.25em] font-semibold uppercase block mb-3">TESTIMONI</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-dark">Cerita <span className="italic">Nyata</span> dari Lapangan</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestiCard 
              quote={<>
                <span className="font-bold tracking-[0.05em] text-dark not-italic">HARVESTPIPS</span> bantu merapikan pembukuan kami yang berantakan. Sekarang laporan kami sudah siap untuk pengajuan kredit ke bank.
              </>}
              author="Pak Edi S."
              role="Petani Cabai & Tomat"
              location="Lampung Tengah"
              service="Laporan Keuangan"
              initial="ES"
            />
            <TestiCard 
              quote={<>
                Setelah mentoring 3 bulan, saya akhirnya bisa lebih disiplin dan konsisten dalam eksekusi strategi trading saya. Yang paling berubah itu mindset dan manajemen risiko.
              </>}
              author="Zefanya K."
              role="Trader Forex"
              location="Alumni Batch 3"
              service="Mentoring Trader"
              initial="ZK"
            />
            <TestiCard 
              quote={<>
                Tax planning dari <span className="font-bold tracking-[0.05em] text-dark not-italic">HARVESTPIPS</span> sangat membantu kami berhemat pajak secara legal. Sangat membantu untuk UMKM seperti kami.
              </>}
              author="Adi N."
              role="Owner, PT Evandra Media Anugerah Digital"
              location="Subang, Jawa Barat"
              service="Tax Planning"
              initial="AN"
            />
            <TestiCard 
              quote={<>
                <span className="font-bold tracking-[0.05em] text-dark not-italic">HARVESTPIPS</span> sangat membantu kami dalam pengelolaan SPT Masa PPN, PPh, dan SPT Tahunan Perusahaan. Semuanya rapi dan sesuai regulasi — tenang jadinya.
              </>}
              author="Agus S."
              role="Owner, PT AGS Anugerah Gemilang Sejati"
              location="Jombang, Jawa Timur"
              service="Tax Planning"
              initial="AS"
            />
            <TestiCard 
              quote={<>
                Kami sempat kewalahan mengurus administrasi keuangan sambil fokus jualan. Sejak dibantu <span className="font-bold tracking-[0.05em] text-dark not-italic">HARVESTPIPS</span>, pembukuan jadi rapi dan kami bisa lebih fokus mengembangkan bisnis.
              </>}
              author="Ismail M."
              role="Owner, Xperfumery Parfum"
              location="Surabaya, Jawa Timur"
              service="Laporan Keuangan"
              initial="IM"
            />
            <TestiCard 
              quote={<>
                <span className="font-bold tracking-[0.05em] text-dark not-italic">HARVESTPIPS</span> membantu kami mengelola laporan keuangan dan perpajakan dengan sangat profesional. Prosesnya cepat, transparan, dan hasilnya bisa kami pertanggungjawabkan ke semua pihak.
              </>}
              author="Samsul B."
              role="Direktur, CV Almas Karunia Semesta"
              location="Bengkulu Utara, Bengkulu"
              service="Laporan Keuangan"
              initial="SB"
            />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24 px-6 lg:px-12 bg-cream" id="blog">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-gold-muted text-[10px] tracking-[0.25em] font-semibold uppercase block mb-3">EDUKASI & WAWASAN</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-dark">Dari <span className="italic text-gold">Lapangan.</span></h2>
              <p className="text-muted text-sm mt-4 font-light max-w-md">Insight praktis seputar keuangan UMKM, agribisnis, dan trading — ditulis dari pengalaman lapangan, bukan teori semata.</p>
            </div>
            <button className="text-[10px] tracking-widest text-gold border border-gold/30 px-6 py-3 hover:bg-gold hover:text-dark transition-all font-semibold shrink-0 self-start lg:self-auto">
              SEMUA ARTIKEL →
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                tag: 'Keuangan UMKM',
                tagColor: 'bg-blue-50 text-blue-700 border-blue-100',
                title: 'Kenapa UMKM Wajib Punya Laporan Keuangan Sebelum Ajukan KUR',
                excerpt: 'Banyak pelaku UMKM ditolak pengajuan KUR bukan karena omzetnya kecil, tapi karena tidak punya laporan keuangan yang rapi. Ini yang perlu Anda siapkan.',
                date: 'Mei 2025',
                readTime: '5 menit',
              },
              {
                tag: 'Trading',
                tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
                title: '5 Kesalahan Risk Management yang Sering Dilakukan Trader Pemula',
                excerpt: 'Dari tidak menetapkan stop loss hingga overtrade setelah profit besar — kenali 5 kesalahan manajemen risiko yang paling umum dan cara menghindarinya.',
                date: 'April 2025',
                readTime: '7 menit',
              },
              {
                tag: 'Agribisnis',
                tagColor: 'bg-green-50 text-green-700 border-green-100',
                title: 'Dari Kebun ke Pasar: Strategi Supply Chain untuk Petani Skala Kecil',
                excerpt: 'Rantai pasok yang panjang seringkali menggerus margin petani. Pelajari cara memangkas rantai distribusi dan meningkatkan harga jual hasil panen Anda.',
                date: 'Maret 2025',
                readTime: '6 menit',
              },
            ].map((post, i) => (
              <article key={i} className="bg-white border border-cream-border hover:border-gold-dim transition-all group flex flex-col cursor-pointer">
                <div className="h-44 bg-cream-dark flex items-center justify-center border-b border-cream-border group-hover:bg-cream transition-colors">
                  <span className="font-serif text-5xl text-gold/20 group-hover:text-gold/30 transition-colors">✦</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className={`text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border rounded-sm ${post.tagColor}`}>
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-dark leading-snug mb-3 group-hover:text-gold transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed font-light mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-cream-border">
                    <span className="text-[10px] text-faint">{post.date}</span>
                    <span className="text-[10px] text-faint">{post.readTime} baca</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20 px-8 lg:px-24" id="kontak">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-4xl lg:text-6xl text-dark leading-tight mb-4">Siap Mulai<br /><span className="italic">Perjalanan Anda?</span></h2>
            <p className="text-gold-muted text-sm lg:text-base font-light max-w-sm">Sesi konsultasi pertama gratis. Ceritakan bisnis atau tujuan trading Anda — tanpa komitmen.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/6285183153125?text=Halo%20HARVESTPIPS%2C%20saya%20ingin%20konsultasi%20bisnis." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-dark hover:opacity-90 text-gold font-bold tracking-widest text-[11px] px-10 py-5 rounded transition-all active:scale-95 shadow-xl shadow-black/20 text-center"
            >
              JADWALKAN SEKARANG
            </a>
            <a 
              href="https://wa.me/6285183153125?text=Halo%20HARVESTPIPS%2C%20saya%20tertarik%20untuk%20konsultasi." 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-dark text-dark hover:bg-dark hover:text-gold font-bold tracking-widest text-[11px] px-10 py-5 rounded transition-all text-center"
            >
              WHATSAPP KAMI
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button removed */}

      {/* FOOTER */}
      <footer className="bg-cream-dark pt-24 pb-12 px-8 lg:px-16 text-mid border-t border-cream-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src={logoUrl} alt="Logo" className="w-10 h-10 object-contain" />
                  <div>
                    <div className="text-dark font-bold text-sm tracking-[0.05em]">HARVESTPIPS</div>
                    <span className="text-muted text-[9px] tracking-[0.18em] block -mt-1">MANAGEMENT</span>
                  </div>
                </div>
                <p className="text-xs leading-[1.8] font-light max-w-xs text-muted">
                  <span className="font-bold tracking-[0.05em] text-dark not-italic">HARVESTPIPS</span> adalah Konsultan Bisnis, keuangan & pajak UMKM, sekaligus mentor trader pasar finansial. Berbasis di Lampung, Indonesia.
                </p>
              </div>
              <div className="flex gap-3">
                <SocialIcon icon={<Instagram size={14} />} link="https://www.instagram.com/harvestpips_com" />
                <SocialIcon icon={<Linkedin size={14} />} />
                <SocialIcon icon={<Phone size={14} />} />
              </div>
            </div>
            
            <FooterCol title="LAYANAN" links={['Agribisnis', 'F&B UMKM', 'Laporan Keuangan', 'Tax Planning', 'Mentoring Trader']} />
            <FooterCol title="PERUSAHAAN" links={['Tentang Kami', 'Tim & Founder', 'Portofolio Klien', 'Insight & Blog']} />
            
            <div className="space-y-6">
              <h4 className="text-[9px] tracking-[0.25em] font-bold uppercase text-gold-muted">HUBUNGI KAMI</h4>
              <div className="space-y-4">
                <FooterContact icon={<MapPin size={12} />} text="Lampung Tengah, Lampung" />
                <a href="mailto:hello@harvestpips.com" className="block">
                  <FooterContact icon={<Mail size={12} />} text="hello@harvestpips.com" />
                </a>
                <a href="https://wa.me/6285183153125" target="_blank" rel="noopener noreferrer" className="block">
                  <FooterContact icon={<TrendingUp size={12} />} text="Chat WhatsApp" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-cream-border flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-[10px] tracking-wide font-medium text-muted/80">© 2026 PT HARVEST PIPS MANAGEMENT. Seluruh hak cipta dilindungi.</p>
            <p className="text-[11px] tracking-wide font-medium text-dark">
              Memberikan Solusi dari <span className="text-gold-dim italic font-bold">Hulu ke Hilir</span>, dari <span className="text-emerald-800 italic font-bold">Akar ke Pasar.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// SUB-COMPONENTS

function ServiceCard({ icon, title, desc, tags, colorClass, isTax }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-white border border-cream-border p-8 transition-shadow hover:shadow-xl hover:shadow-black/5 flex gap-6 ${isTax ? 'border-l-4 border-l-gold' : ''}`}
    >
      <div className={`w-14 h-14 rounded shrink-0 flex items-center justify-center ${colorClass}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-dark font-bold text-base mb-2">{title}</h4>
        <p className="text-muted text-xs leading-relaxed mb-6 font-light">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <span key={t} className={`text-[9px] px-3 py-1.5 font-medium tracking-tight ${isTax ? 'bg-gold-pale text-gold-muted' : 'bg-cream-dark text-mid'}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Indicator({ title, sub, value }: any) {
  return (
    <div className="bg-dark/20 p-6 group hover:bg-dark/40 transition-all">
      <div className="text-gold/90 font-bold text-sm mb-1">{title}</div>
      <div className="text-[10px] text-faint font-medium tracking-wide mb-4 whitespace-nowrap">{sub}</div>
      <div className="h-0.5 bg-white/5 overflow-hidden rounded-full">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gold shadow-[0_0_10px_rgba(245,194,0,0.3)]"
        />
      </div>
    </div>
  );
}

function Step({ num, name, desc }: any) {
  return (
    <div className="p-10 group hover:bg-dark3/30 transition-all cursor-default">
      <div className="font-serif text-5xl text-gold/20 group-hover:text-gold/70 transition-all leading-none mb-4">{num}</div>
      <div className="text-gold text-[10px] font-bold tracking-[0.2em] mb-2">{name}</div>
      <p className="text-cream/90 text-xs font-light leading-relaxed max-w-sm group-hover:text-cream transition-colors">{desc}</p>
    </div>
  );
}

function AboutValue({ text, strong }: any) {
  return (
    <div className="flex gap-4 group">
      <div className="w-6 h-px bg-gold mt-[11px] shrink-0 origin-left transition-all group-hover:w-8" />
      <p className="text-faint text-sm leading-relaxed group-hover:text-cream transition-colors">
        <strong className="text-gold font-bold">{strong}</strong> — {text}
      </p>
    </div>
  );
}

const SERVICE_COLORS: Record<string, string> = {
  'Laporan Keuangan': 'bg-blue-50 text-blue-700 border-blue-100',
  'Tax Planning': 'bg-amber-50 text-amber-700 border-amber-100',
  'Mentoring Trader': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Agribisnis': 'bg-green-50 text-green-700 border-green-100',
  'F&B UMKM': 'bg-orange-50 text-orange-700 border-orange-100',
};

function TestiCard({ quote, author, role, location, service, initial }: any) {
  const tagClass = SERVICE_COLORS[service] || 'bg-cream-dark text-mid border-cream-border';
  return (
    <div className="bg-white border border-cream-border p-8 hover:border-gold-dim transition-all group flex flex-col">
      {/* Service tag */}
      <div className="mb-5">
        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border rounded-sm ${tagClass}`}>
          {service}
        </span>
      </div>
      {/* Quote */}
      <div className="font-serif text-4xl text-gold/30 mb-3 transition-colors group-hover:text-gold leading-none">"</div>
      <p className="text-mid text-sm font-light italic leading-relaxed mb-8 flex-1">
        {quote}
      </p>
      {/* Author row */}
      <div className="flex items-center gap-3 pt-5 border-t border-cream-border">
        <div className="w-9 h-9 rounded-full bg-cream-dark border border-cream-border flex items-center justify-center shrink-0">
          <span className="text-[10px] font-bold text-gold tracking-wide">{initial}</span>
        </div>
        <div className="min-w-0">
          <div className="text-dark font-bold text-xs mb-0.5 flex items-center gap-1.5">
            {author}
            <span className="text-[8px] text-emerald-600 font-semibold tracking-wide border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 rounded-sm">✓ KLIEN</span>
          </div>
          <div className="text-faint text-[10px] leading-tight">{role}</div>
          <div className="text-faint/60 text-[9px] tracking-wide mt-0.5">{location}</div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link = "#" }: any) {
  return (
    <a 
      href={link} 
      target={link !== "#" ? "_blank" : undefined}
      rel={link !== "#" ? "noopener noreferrer" : undefined}
      className="w-8 h-8 rounded border border-cream-border flex items-center justify-center hover:bg-gold hover:text-dark transition-all text-muted"
    >
      {icon}
    </a>
  );
}

function FooterCol({ title, links }: any) {
  return (
    <div className="space-y-6">
      <h4 className="text-[9px] tracking-[0.25em] font-bold uppercase text-dark">{title}</h4>
      <div className="flex flex-col gap-3">
        {links.map((l: string) => (
          <a key={l} href="#" className="text-xs hover:text-gold transition-colors font-light text-mid">{l}</a>
        ))}
      </div>
    </div>
  );
}

function FooterContact({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="text-gold-muted/60 group-hover:text-gold transition-colors">{icon}</div>
      <span className="text-xs font-light text-muted">{text}</span>
    </div>
  );
}
