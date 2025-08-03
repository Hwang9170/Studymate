import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studymate - 나만의 AI 학습 코치',
  description: '학생의 학습 데이터를 트래킹하여 AI가 개인 맞춤형 학습 시간표를 제안하고 과목별 학습 방향성을 제시하는 학습 관리 모바일 애플리케이션',
  keywords: 'AI 학습, 학습 관리, 멘토링, 수능, 중고등학생, 학습 코칭',
  authors: [{ name: 'Studymate Team' }],
  openGraph: {
    title: 'Studymate - 나만의 AI 학습 코치',
    description: 'AI 기반 개인 맞춤형 학습 관리 플랫폼',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studymate - 나만의 AI 학습 코치',
    description: 'AI 기반 개인 맞춤형 학습 관리 플랫폼',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 