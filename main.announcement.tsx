export default function Home() {
  const newsList = [
    { id: 1, title: 'ประกาศการเปิดรับสมัครนักเรียนใหม่ ปีการศึกษา 2026', date: '01 พ.ย. 2026', category: 'วิชาการ' },
    { id: 2, title: 'ขอเชิญเข้าร่วมกิจกรรมต้อนรับเปิดเทอม และปฐมนิเทศ', date: '28 ต.ค. 2026', category: 'กิจกรรม' },
    { id: 3, title: 'สรุปผลการแข่งขันวิชาการระดับเขตพื้นที่การศึกษา', date: '15 ต.ค. 2026', category: 'ผลงาน' },
  ]

  return (
    <div className="space-y-8">
      {/* Banner ประชาสัมพันธ์ */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-700 text-white p-8 border-l-8 border-purple-900 shadow-md">
        <span className="bg-purple-900 text-pink-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-none">
          Demo Version 0.1
        </span>
        <h2 className="text-3xl font-extrabold mt-3">ยินดีต้อนรับสู่ เว็บไซต์ทางการโรงเรียนบ้านดุงวิทยา</h2>
        <p className="mt-2 text-pink-100 max-w-2xl">
          ศูนย์รวมข้อมูลข่าวสาร สารสนเทศทางการศึกษา และกิจกรรมต่างๆ ของโรงเรียนบ้านดุงวิทยา
        </p>
      </section>

      {/* บอร์ดข่าวประชาสัมพันธ์ */}
      <section className="bg-white p-6 border border-pink-200 shadow-sm">
        <div className="flex justify-between items-center mb-6 border-b-2 border-pink-500 pb-2">
          <h3 className="text-xl font-bold text-purple-900">ข่าวประชาสัมพันธ์ล่าสุด</h3>
          <button className="bg-pink-600 hover:bg-purple-700 text-white px-4 py-2 text-sm font-semibold rounded-none duration-500">
            ดูข่าวทั้งหมด
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsList.map((news) => (
            <div 
              key={news.id} 
              className="bg-purple-50 border border-purple-200 p-5 hover:border-pink-500 hover:shadow-md transition-all duration-500"
            >
              <span className="bg-pink-200 text-purple-900 px-2 py-1 text-xs font-bold rounded-none">
                {news.category}
              </span>
              <h4 className="font-bold text-purple-950 mt-3 hover:text-pink-600 duration-500 cursor-pointer">
                {news.title}
              </h4>
              <p className="text-xs text-slate-500 mt-2">วันที่ประกาศ: {news.date}</p>
              <button className="mt-4 w-full bg-purple-700 hover:bg-pink-500 text-white text-xs font-bold py-2 rounded-none duration-500">
                อ่านรายละเอียด
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}