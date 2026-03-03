import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50">
      {/* Header */}
      <header className="border-b border-rose-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5">
          <h1 className="text-3xl font-serif text-rose-600 flex items-center gap-2">
            <span className="text-2xl">💐</span>
            {siteConfig.name}
          </h1>
          <p className="text-sm text-gray-600 mt-2 font-light">{siteConfig.description}</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* 主标题区 */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-6xl">💍</span>
            </div>
            <h2 className="text-5xl font-serif text-gray-800 mb-6 leading-tight">
              为你的完美婚礼
              <br />
              <span className="text-rose-500">找到最动人的旋律</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
              从迎宾到退场，从中式到西式<br />
              每一个瞬间都值得用音乐铭记
            </p>
            
            {/* CTA */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              ✨ AI 定制你的专属婚礼音乐
            </a>
          </div>

          {/* Categories - 花卉卡片风格 */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-center text-gray-800 mb-8">
              婚礼音乐分类
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {siteConfig.theme.categories.map((category, index) => {
                const icons = ['🎼', '💒', '🥂', '🌹', '💕', '🏮']
                return (
                  <Link
                    key={category}
                    href="/articles"
                    className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-rose-100 hover:border-rose-300 hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {icons[index]}
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">{category}</h3>
                    <p className="text-sm text-gray-500">精选推荐</p>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* 文章入口 */}
          <div className="text-center mb-16">
            <Link
              href="/articles"
              className="inline-block bg-white px-10 py-4 rounded-full font-medium text-rose-600 border-2 border-rose-400 hover:bg-rose-50 transition-all duration-300 hover:shadow-lg"
            >
              📖 浏览所有婚礼音乐文章
            </Link>
          </div>

          {/* Product Promotion - 优雅卡片 */}
          <div className="relative bg-gradient-to-br from-rose-100 via-pink-50 to-white rounded-3xl p-12 mb-16 overflow-hidden border border-rose-200">
            {/* 装饰性花卉元素 */}
            <div className="absolute top-0 right-0 text-9xl opacity-10">🌸</div>
            <div className="absolute bottom-0 left-0 text-9xl opacity-10">🌺</div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-gray-800 mb-4">
                想要独一无二的婚礼音乐？
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {siteConfig.targetProduct.description}
                <br />
                <span className="text-rose-600 font-medium">让 AI 为你谱写专属的爱情乐章</span>
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                立即开始创作 →
              </a>
            </div>
          </div>

          {/* 特色亮点 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎵</div>
              <h4 className="font-medium text-gray-800 mb-2">专业精选</h4>
              <p className="text-sm text-gray-600">婚礼策划师推荐曲目</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💝</div>
              <h4 className="font-medium text-gray-800 mb-2">场景匹配</h4>
              <p className="text-sm text-gray-600">每个环节都有最佳选择</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="font-medium text-gray-800 mb-2">AI 定制</h4>
              <p className="text-sm text-gray-600">创作专属婚礼音乐</p>
            </div>
          </div>

          {/* Related Sites */}
          <div className="border-t border-rose-100 pt-12">
            <h3 className="text-xl font-serif text-gray-800 mb-6 text-center">相关推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-gradient-to-br from-white to-rose-50 rounded-xl hover:shadow-md transition-all duration-300 border border-rose-100"
                >
                  <span className="text-sm font-medium text-gray-800">{site.name}</span>
                  <span className="text-xs text-rose-500 block mt-2">探索更多 →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-rose-100 mt-20 py-10 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 font-light">
            {siteConfig.name} © 2025 · 用音乐见证每一份爱
          </p>
          <p className="text-xs text-gray-400 mt-2">💐 愿天下有情人终成眷属 💐</p>
        </div>
      </footer>
    </div>
  )
}
