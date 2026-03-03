import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Floating Header */}
      <header className="fixed top-6 left-6 right-6 z-50 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-pink-100">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <svg className="w-8 h-8 text-pink-600 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <span className="text-2xl font-bold text-pink-800">{siteConfig.name}</span>
          </Link>
          <div className="text-sm text-gray-600">婚礼音乐资讯与推荐</div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-amber-100 text-pink-800 rounded-full text-sm font-medium">
                  专业指南
                </span>
              </div>
              <h1 className="text-5xl text-gray-900 mb-6">婚礼音乐文章</h1>
              <p className="text-xl text-gray-700">专业的婚礼音乐指南，助你打造完美婚礼</p>
            </div>
            
            {/* Category Navigation - Pill Style */}
            <div className="flex flex-wrap gap-3 mb-16 justify-center">
              {categories.map(category => (
                <a
                  key={category}
                  href={`#${category}`}
                  className="px-6 py-3 bg-white text-pink-700 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-pink-200 hover:border-pink-400 cursor-pointer"
                >
                  {category}
                </a>
              ))}
            </div>

            {/* Articles by Category - Staggered Layout */}
            {categories.map((category, catIndex) => {
              const categoryArticles = articles.filter(a => a.category === category)
              return (
                <div key={category} id={category} className="mb-24">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-amber-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h2 className="text-3xl text-gray-900">{category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryArticles.map((article, index) => {
                      const isEven = index % 2 === 0
                      return (
                        <Link
                          key={article.slug}
                          href={`/articles/${article.slug}`}
                          className={`group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-pink-100 hover:border-pink-300 hover:-translate-y-2 cursor-pointer ${isEven ? 'md:mt-0' : 'md:mt-8'}`}
                        >
                          <div className="p-8">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-200">
                                  {article.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                  {article.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-pink-100">
                              <span className="text-sm text-gray-500">{article.date}</span>
                              <div className="flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all duration-200">
                                <span>阅读更多</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {/* CTA Section */}
            <div className="mt-24 bg-gradient-to-br from-amber-100 via-pink-50 to-rose-100 rounded-3xl p-12 text-center shadow-xl">
              <h3 className="text-3xl text-gray-900 mb-4">
                准备好为婚礼选择音乐了吗？
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                或者，让 AI 为你创作独一无二的专属婚礼音乐
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-700 rounded-xl font-semibold border-2 border-pink-200 hover:border-pink-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  返回首页
                </Link>
                <a
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI 定制音乐
                </a>
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
