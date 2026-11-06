<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>เกี่ยวกับโรงเรียน - โรงเรียนบ้านดุงวิทยา</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade { animation: fadeIn 0.4s ease-out forwards; }
  </style>
</head>
<body class="bg-[#2e1065] text-white font-sans min-h-screen flex flex-col justify-between">

  <!-- Top Bar -->
  <div class="bg-[#1e1b4b] py-2 px-4 text-xs font-semibold border-b border-purple-900/60">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <span class="text-purple-300">สำนักงานเขตพื้นที่การศึกษามัธยมศึกษา อุดรธานี</span>
      <span class="bg-pink-500 text-white px-2 py-0.5 rounded font-bold text-[10px]">About Page</span>
    </div>
  </div>

  <!-- Header / Navigation -->
  <header class="bg-[#3b0764] border-b-4 border-pink-500 shadow-lg sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <a href="index.html" class="flex items-center gap-3">
        <div class="w-12 h-12 bg-pink-500 border-2 border-white flex items-center justify-center font-black text-xl text-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]">
          บดว
        </div>
        <div>
          <h1 class="text-2xl font-extrabold tracking-tight text-white">โรงเรียนบ้านดุงวิทยา</h1>
          <p class="text-[10px] font-bold text-pink-400 tracking-wider">BANDUNGWITTAYA SCHOOL</p>
        </div>
      </a>

      <!-- Links -->
      <nav class="flex flex-wrap gap-2 text-sm font-bold">
        <a href="index.html" class="px-4 py-2 bg-[#4c1d95] hover:bg-pink-600 text-purple-100 border border-purple-700 shadow-[3px_3px_0px_0px_#1e1b4b] transition-all">หน้าแรก</a>
        <a href="about.html" class="px-4 py-2 bg-pink-500 text-white border border-pink-400 shadow-[3px_3px_0px_0px_#1e1b4b]">เกี่ยวกับโรงเรียน</a>
        <a href="news.html" class="px-4 py-2 bg-[#4c1d95] hover:bg-pink-600 text-purple-100 border border-purple-700 shadow-[3px_3px_0px_0px_#1e1b4b] transition-all">ข่าวประชาสัมพันธ์</a>
      </nav>
    </div>
  </header>

  <!-- Main Content Area -->
  <main class="max-w-6xl mx-auto px-4 py-8 w-full flex-grow animate-fade">
    <div class="bg-[#3b0764] border-2 border-pink-500 p-8 shadow-[8px_8px_0px_0px_#ec4899]">
      <h2 class="text-2xl font-black text-pink-400 mb-4 border-b border-purple-700 pb-2">เกี่ยวกับโรงเรียนบ้านดุงวิทยา</h2>
      <div class="space-y-4 text-purple-100 text-sm leading-relaxed">
        <p>โรงเรียนบ้านดุงวิทยา ตั้งอยู่ที่อำเภอบ้านดุง จังหวัดอุดรธานี มุ่งมั่นจัดการศึกษาเพื่อพัฒนาผู้เรียนให้มีความรู้คู่คุณธรรม มีทักษะในศตวรรษที่ 21</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-[#2e1065] p-5 border border-purple-700 shadow-[4px_4px_0px_0px_#1e1b4b]">
            <h3 class="font-bold text-pink-300 text-base mb-1">🎯 ปรัชญาโรงเรียน</h3>
            <p class="text-xs text-purple-200">สุวิชาโน ภวํ โหติ — ผู้รู้ดี เป็นผู้เจริญ</p>
          </div>
          <div class="bg-[#2e1065] p-5 border border-purple-700 shadow-[4px_4px_0px_0px_#1e1b4b]">
            <h3 class="font-bold text-pink-300 text-base mb-1">🎨 สีประจำโรงเรียน</h3>
            <p class="text-xs text-purple-200">สีม่วง (ความมีสติปัญญา) และ สีชมพู (ความรักความสามัคคี)</p>
          </div>
        </div>

        <div class="bg-[#2e1065] p-5 border border-purple-700">
          <h3 class="font-bold text-white text-base mb-2">📍 ข้อมูลการติดต่อ</h3>
          <p class="text-xs text-purple-200">ที่อยู่: อำเภอบ้านดุง จังหวัดอุดรธานี 41190</p>
          <p class="text-xs text-purple-200 mt-1">สังกัด: สำนักงานเขตพื้นที่การศึกษามัธยมศึกษา อุดรธานี</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-[#1e1b4b] border-t-2 border-pink-500 py-6 text-center text-xs text-purple-300">
    <p class="font-bold text-white">โรงเรียนบ้านดุงวิทยา อำเภอบ้านดุง จังหวัดอุดรธานี</p>
    <p class="text-purple-400 mt-1">© 2026 BANDUNGWITTAYA SCHOOL. All rights reserved.</p>
  </footer>
</body>
</html>
