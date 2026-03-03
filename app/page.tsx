import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Floating Header */}
      <header className="fixed top-6 left-6 right-6 z-50 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-pink-100">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <svg className="w-8 h-8 text-pink-600 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <span className="text-2xl font-bold text-pink-800">{siteConfig.name}</span>
          </Link>
          <Link 
            href="/articles"
            className="px-6 py-2 text-pink-700 hover:text-pink-900 font-medium transition-colors duration-200 cursor-pointer"
          >
            浏览文章
          </Link>
        </div>
      </header>

      {/* Hero Section - Asymmetric Layout */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-amber-100 text-pink-800 rounded-full text-sm font-medium">
                    ✨ 专业婚礼音乐顾问
                  </span>
                </div>
                <h1 className="text-6xl lg:text-7xl leading-tight text-gray-900">
                  让音乐
                  <br />
                  <span className="text-pink-600">见证你的爱</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                  从迎宾到退场，从中式到西式，每一个瞬间都值得用最动人的旋律铭记。我们为你精选最适合的婚礼音乐。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={siteConfig.targetProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    AI 定制专属音乐
                  </a>
                  <Link
                    href="/articles"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-700 rounded-xl font-semibold text-lg border-2 border-pink-200 hover:border-pink-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    探索音乐指南
                  </Link>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-amber-200 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl">
                      <svg className="w-10 h-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">迎宾音乐</div>
                        <div className="text-sm text-gray-600">温馨浪漫的开场</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl">
                      <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">仪式音乐</div>
                        <div className="text-sm text-gray-600">神圣庄重的时刻</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-xl">
                      <svg className="w-10 h-10 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">婚宴歌曲</div>
                        <div className="text-sm text-gray-600">欢乐热闹的氛围</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories - Horizontal Scroll */}
            <div className="mb-32">
              <h2 className="text-4xl text-center text-gray-900 mb-12">音乐分类</h2>
              <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
                {siteConfig.theme.categories.map((category, index) => {
                  const icons = [
                    <svg key="1" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    <svg key="2" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                    <svg key="3" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
                    <svg key="4" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>,
                    <svg key="5" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                    <svg key="6" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  ]
                  const colors = ['pink', 'rose', 'amber', 'orange', 'red', 'yellow']
                  const color = colors[index % colors.length]
                  
                  return (
                    <Link
                      key={category}
                      href="/articles"
                      className={`flex-shrink-0 w-64 snap-center group cursor-pointer`}
                    >
                      <div className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-200 border-2 border-${color}-100 hover:border-${color}-300 hover:-translate-y-2`}>
                        <div className={`text-${color}-600 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                          {icons[index]}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{category}</h3>
                        <p className="text-gray-600 text-sm">精选推荐曲目</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Product Promotion - Split Layout */}
            <div className="grid lg:grid-cols-5 gap-8 mb-32 bg-gradient-to-br from-amber-100 via-pink-50 to-rose-100 rounded-3xl p-12 shadow-xl">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-block px-4 py-2 bg-white/80 rounded-full text-amber-700 text-sm font-medium">
                  AI 音乐创作
                </div>
                <h3 className="text-4xl text-gray-900">
                  想要独一无二的婚礼音乐？
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteConfig.targetProduct.description}
                </p>
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  立即开始创作
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="lg:col-span-2 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-amber-400 rounded-full blur-3xl opacity-30"></div>
                  <svg className="relative w-48 h-48 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Features - Three Column */}
            <div className="grid md:grid-cols-3 gap-8 mb-32">
              <div className="text-center space-y-4 p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full">
                  <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">专业精选</h4>
                <p className="text-gray-600">婚礼策划师推荐曲目</p>
              </div>
              
              <div className="text-center space-y-4 p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full">
                  <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">场景匹配</h4>
                <p className="text-gray-600">每个环节都有最佳选择</p>
              </div>
              
              <div className="text-center space-y-4 p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full">
                  <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">AI 定制</h4>
                <p className="text-gray-600">创作专属婚礼音乐</p>
              </div>
            </div>

            {/* Related Sites */}
            <div className="border-t-2 border-pink-200 pt-16">
              <h3 className="text-3xl text-center text-gray-900 mb-10">相关推荐</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {siteConfig.relatedSites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-200 border border-pink-100 hover:border-pink-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-200">{site.name}</span>
                      <svg className="w-5 h-5 text-pink-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-pink-200 py-12 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-700 font-medium mb-2">
            {siteConfig.name} © 2025
          </p>
          <p className="text-gray-600 text-sm">用音乐见证每一份爱</p>
        </div>
      </footer>
    </div>
  )
}
