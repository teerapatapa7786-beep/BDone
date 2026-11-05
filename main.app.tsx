import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'โรงเรียนบ้านดุงวิทยา | Bandungwittaya School',
  description: 'เว็บไซต์ทางการ โรงเรียนบ้านดุงวิทยา (Demo 0.1)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="bg-fuchsia-50 text-slate-800 font-sans min-h-screen flex flex-col">
        {/* Header ทางการ */}
        <header className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white shadow-lg border-b-4 border-pink-400">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white text-purple-900 flex items-center justify-center font-bold text-xl border-2 border-pink-300">
                บ.ด.ว.
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wide">โรงเรียนบ้านดุงวิทยา</h1>
                <p className="text-xs text-pink-200">สำนักงานเขตพื้นที่การศึกษามัธยมศึกษา Udon Thani</p>
              </div>
            </div>
            
            <nav className="flex gap-2">
              <a 
                href="/" 
                className="bg-purple-800 hover:bg-pink-600 text-white px-5 py-2 font-medium rounded-none border border-pink-300 shadow active:scale-95 duration-500"
              >
                หน้าหลัก & ข่าวประชาสัมพันธ์
              </a>
              <a 
                href="/about" 
                className="bg-purple-800 hover:bg-pink-600 text-white px-5 py-2 font-medium rounded-none border border-pink-300 shadow active:scale-95 duration-500"
              >
                เกี่ยวกับโรงเรียน
              </a>
            </nav>
          </div>
        </header>

        {/* เนื้อหาหลัก */}
        <main className="flex-grow max-w-7xl w-full mx-auto p-4 md:p-6">
          {children}
        </main>

        {/* Footer ทางการ */}
        <footer className="bg-purple-950 text-pink-100 border-t-4 border-pink-500 py-6 text-center text-sm">
          <p>© 2026 โรงเรียนบ้านดุงวิทยา — ระบบสารสนเทศเพื่อการบริหาร (Demo 0.1)</p>
        </footer>
      </body>
    </html>
  )
}