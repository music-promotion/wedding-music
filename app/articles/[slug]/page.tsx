import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

export function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: '文章未找到',
    }
  }

  return {
    title: `${article.title} - ${siteConfig.name}`,
    description: article.description,
    keywords: article.keywords.join(', '),
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50">
      {/* Header */}
      <header className="border-b border-rose-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5">
          <Link href="/" className="text-3xl font-serif text-rose-600 hover:text-rose-700 flex items-center gap-2">
            <span className="text-2xl">💐</span>
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-rose-600 transition-colors">首页</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-rose-600 transition-colors">文章</Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* 文章头部 */}
          <div className="mb-12 text-center">
            <div className="flex items-center gap-3 text-sm justify-center mb-4">
              <span className="px-4 py-1.5 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full font-medium">
                {article.category}
              </span>
              <span className="text-gray-500">{article.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {article.description}
            </p>
          </div>

          {/* 装饰性分隔 */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2">
              <span className="text-rose-300">🌸</span>
              <span className="text-pink-300">💕</span>
              <span className="text-rose-300">🌸</span>
            </div>
          </div>

          {/* 文章内容 */}
          <div className="prose prose-lg max-w-none bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-rose-100">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-serif text-gray-800 mt-8 mb-4 pb-2 border-b border-rose-200">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-serif text-gray-800 mt-6 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">{children}</h3>,
                p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
                li: ({ children }) => <li className="text-gray-700">{children}</li>,
                a: ({ href, children }) => (
                  <a href={href} className="text-rose-600 hover:text-rose-700 underline decoration-rose-300 transition-colors" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                hr: () => <hr className="my-8 border-rose-200" />,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-rose-300 pl-4 italic text-gray-600 my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {/* 返回按钮 */}
          <div className="mt-12 pt-8 border-t border-rose-200 text-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full font-medium hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              ← 返回文章列表
            </Link>
          </div>
        </article>
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
