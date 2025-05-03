import type React from "react"
import { Battery, Signal, Home, Heart, BookOpen, Coffee, User } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="w-[360px] h-[740px] bg-white border-[10px] border-gray-800 rounded-[40px] shadow-xl relative overflow-hidden">
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[60px] h-[5px] bg-gray-800 rounded-[5px]"></div>
        <div className="w-full h-full bg-[#e6f0fa] overflow-y-auto">
          <header className="bg-[#4a6fa5] text-white p-5 text-center relative">
            <div className="absolute top-[5px] left-[10px] right-[10px] flex justify-between text-xs">
              <span>20:41</span>
              <span className="flex items-center gap-1">
                <Signal className="h-4 w-4" />
                <Battery className="h-4 w-4" />
              </span>
            </div>
            <h1 className="text-2xl mt-7">Chào mừng trở lại</h1>
            <p className="text-sm opacity-80">Theo dõi hành trình của bạn, từng ngày một.</p>
          </header>

          <section className="p-5">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Tổng quan</h2>
            <div className="grid grid-cols-2 gap-4">
              <StatCard title="Bài viết" value="24" note="+2 so với tuần trước" />
              <StatCard title="Cảm xúc" value="Tích cực" note="Đang đi lên" />
              <StatCard title="Thử thách" value="3/5" note="Hoàn thành tuần này" />
              <StatCard title="Chuỗi ngày" value="7 ngày" note="Hãy tiếp tục" />
            </div>
          </section>

          <section className="p-5">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Bài viết gần đây</h2>
            <ArticleCard
              title="Một ngày nhiều hứng khởi"
              content="Hôm nay thật là đáng nhớ! Tôi đã hoàn thành thử thách viết bài cơ bản và cảm thấy rất hài lòng về kết quả. Hành trình của mình đang dần trở nên ý nghĩa hơn."
            />
            <ArticleCard
              title="Suy ngẫm về thử thách"
              content="Hôm nay gặp một số khó khăn khi viết nhật ký, nhưng tôi đã cố gắng vượt qua. Ngẫy mai sẽ là một ngày mới với những khởi đầu mới!"
            />
            <ArticleCard
              title="Kế hoạch cuối tuần"
              content="Đang mong chờ đến cuối tuần! Tôi đã lên kế hoạch đi bộ đường dài và viết lại những suy nghĩ của mình. Hy vọng mọi thứ sẽ cân bằng và ý nghĩa."
            />
          </section>

          <nav className="sticky bottom-0 w-full bg-white flex justify-around p-3 shadow-[0_-2px_5px_rgba(0,0,0,0.1)]">
            <NavItem icon={<Home className="h-5 w-5" />} label="Home" active />
            <NavItem icon={<Heart className="h-5 w-5" />} label="Mood" />
            <NavItem icon={<BookOpen className="h-5 w-5" />} label="Journal" />
            <NavItem icon={<Coffee className="h-5 w-5" />} label="Relax" />
            <NavItem icon={<User className="h-5 w-5" />} label="Profile" />
          </nav>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  note: string
}

function StatCard({ title, value, note }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
      <h3 className="text-sm font-medium mb-1">{title}</h3>
      <p className="text-xl font-bold text-[#4a6fa5]">{value}</p>
      <small className="text-xs text-gray-500">{note}</small>
    </div>
  )
}

interface ArticleCardProps {
  title: string
  content: string
}

function ArticleCard({ title, content }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{content}</p>
    </div>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <a href="#" className={`flex flex-col items-center text-xs ${active ? "text-[#4a6fa5]" : "text-gray-500"}`}>
      {icon}
      <span className="mt-1">{label}</span>
    </a>
  )
}
