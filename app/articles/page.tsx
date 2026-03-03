import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50">
      {/* Header */}
      <header className="border-b border-rose-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5">
          <Link href="/" className="text-3xl font-serif text-rose-600 hover:text-rose-700 flex items-center gap-2">
            <span className="text-2xl">💐</span>
            {siteConfig.name}
          </Link>
          <p className="text-sm text-gray-600 mt-2 font-light">婚礼音乐资讯与推荐</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gray-800 mb-4">婚礼音乐文章</h1>
            <p className="text-gray-600 text-lg">专业的婚礼音乐指南，助你打造完美婚礼</p>
          </div>
          
          {/* 分类导航 */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map(category => (
              <a
                key={category}
                href={`#${category}`}
                className="px-5 py-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                {category}
              </a>
            ))}
          </div>

          {/* 按分类显示文章 */}
          {categories.map(category => {
            const categoryArticles = articles.filter(a => a.category === category)
            return (
              <div key={category} id={category} className="mb-16">
                <h2 className="text-2xl font-serif text-gray-800 mb-6 pb-3 border-b-2 border-rose-200">
                  {category}
                </h2>
                <div className="grid gap-6">
                  {categoryArticles.map(article => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="block bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-300 hover:-translate-y-1"
                    >
                      <h3 className="text-xl font-medium text-gray-800 mb-3 hover:text-rose-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{article.date}</span>
                        <span className="text-rose-600 font-medium">阅读更多 →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
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
