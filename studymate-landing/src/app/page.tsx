'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, 
  Target, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Smartphone,
  Zap,
  Heart,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI 학습 분석",
      description: "학습 데이터를 분석하여 개인 맞춤형 학습 전략을 제시합니다",
      color: "from-blue-500 to-purple-600",
      details: ["개인별 학습 패턴 분석", "취약점 자동 진단", "맞춤형 학습 전략 제시"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "목표 달성 관리",
      description: "계획부터 실행까지 체계적으로 관리하여 목표 성적 달성을 도와줍니다",
      color: "from-green-500 to-teal-600",
      details: ["스마트 목표 설정", "진행률 실시간 추적", "성취도 시각화"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "전문 멘토 매칭",
      description: "서울대 출신 전문 멘토와 1:1 맞춤형 학습 코칭을 제공합니다",
      color: "from-orange-500 to-red-600",
      details: ["과목별 전문 멘토", "주 1회 확인 통화", "개인별 맞춤 피드백"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "실시간 통계",
      description: "학습 진행 상황을 실시간으로 추적하고 시각화된 리포트를 제공합니다",
      color: "from-purple-500 to-pink-600",
      details: ["실시간 학습 현황", "주간/월간 리포트", "성적 변화 추이"]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "시간 관리 최적화",
      description: "효율적인 학습 시간 배분으로 성과를 극대화합니다",
      stat: "30%"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "습관 형성",
      description: "지속 가능한 학습 습관을 만들어 장기적인 성공을 이끕니다",
      stat: "85%"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "동기 부여",
      description: "AI와 멘토의 지속적인 피드백으로 학습 동기를 유지합니다",
      stat: "92%"
    }
  ];

  const testimonials = [
    {
      name: "김○○",
      role: "고등학교 3학년",
      content: "Studymate 덕분에 수능 성적이 2등급에서 1등급으로 올랐어요. AI 분석과 멘토 선생님의 도움이 정말 컸습니다.",
      rating: 5,
      improvement: "+2등급"
    },
    {
      name: "이○○",
      role: "학부모",
      content: "아이가 스스로 학습 계획을 세우고 실행하는 모습을 보니 정말 기쁩니다. 체계적인 관리가 가능해졌어요.",
      rating: 5,
      improvement: "자기주도학습"
    }
  ];

  const stats = [
    { number: "10,000+", label: "활성 사용자", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "만족도", icon: <Heart className="w-6 h-6" /> },
    { number: "2.3등급", label: "평균 성적 향상", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "AI 지원", icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Brain className="w-8 h-8 text-blue-600" />
                </motion.div>
                <span className="ml-2 text-xl font-bold text-gray-900">Studymate</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105">
                기능
              </Link>
              <Link href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105">
                장점
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105">
                가격
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105">
                소개
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105">
                문의
              </Link>
            </div>
            
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                로그인
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                무료 체험
              </motion.button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="메뉴 열기"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </motion.button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "auto" : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2">
              <Link 
                href="#features" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                기능
              </Link>
              <Link 
                href="#benefits" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                장점
              </Link>
              <Link 
                href="#pricing" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                가격
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                소개
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                문의
              </Link>
              <div className="px-4 py-3 space-y-2">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-3 text-blue-600 hover:text-blue-700 transition-colors text-left"
                >
                  로그인
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  무료 체험
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              나만의 AI 학습 코치,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block sm:inline">Studymate</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              학생의 학습 데이터를 트래킹하여 AI가 개인 맞춤형 학습 시간표를 제안하고 
              과목별 학습 방향성을 제시하는 학습 관리 모바일 애플리케이션
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-base sm:text-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl min-h-[48px]"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                앱 다운로드
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 text-base sm:text-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl min-h-[48px]"
              >
                <Play className="w-5 h-5 mr-2" />
                데모 보기
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              AI 기반 개인 맞춤형 학습 관리
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              계획부터 실행, 분석까지 모든 과정을 AI가 함께합니다
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="text-center p-4 sm:p-6 rounded-xl bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <motion.div 
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white shadow-lg`}
                  animate={{
                    scale: hoveredFeature === index ? 1.1 : 1,
                    rotate: hoveredFeature === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {feature.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredFeature === index ? 1 : 0,
                    height: hoveredFeature === index ? "auto" : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              왜 Studymate인가요?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              기존 학습 앱과는 다른 차별화된 경험을 제공합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {benefit.icon}
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <span className="text-xl sm:text-2xl font-bold text-blue-600">{benefit.stat}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              합리적인 가격으로 시작하세요
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              학생과 학부모 모두를 위한 맞춤형 플랜을 제공합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* 무료 플랜 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 sm:p-8 border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 bg-white"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">무료</h3>
              <div className="text-3xl sm:text-4xl font-bold text-gray-600 mb-4 sm:mb-6">
                ₩0<span className="text-base sm:text-lg text-gray-500">/월</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">기본 AI 리포트 제공</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">일부 기능 제한</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">기본 학습 관리</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">커뮤니티 이용</span>
                </li>
              </ul>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 sm:py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl font-semibold min-h-[48px]"
              >
                무료 시작
              </motion.button>
            </motion.div>

            {/* 자녀형 플랜 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 sm:p-8 border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 bg-white"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">자녀형</h3>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">
                ₩49,000<span className="text-base sm:text-lg text-gray-500">/월</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">AI 심층리포트 생성</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">과목별 학습데이터 정밀 분석</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">실시간 학습 가이드</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">학습 컨디션 및 난이도 기반 피드백</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">멘토 추천 {'>'} 추천된 멘토와의 연결 수수료</span>
                </li>
              </ul>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl font-semibold min-h-[48px]"
              >
                시작하기
              </motion.button>
            </motion.div>

            {/* 자녀+학부모 통합형 플랜 - 부각 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="p-6 sm:p-8 border-2 border-blue-600 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-2xl transition-all duration-300 relative transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                  베스트 선택
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">자녀+학부모 통합형</h3>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">
                ₩79,000<span className="text-base sm:text-lg text-gray-500">/월</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">자녀형 기능 <strong className="text-blue-600">모두 포함</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">자녀 학습 상태 기능</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">자녀 학습 지도 제안</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">일간/주간 분석 리포트 자동 수신</span>
                </li>
              </ul>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl font-bold text-lg"
              >
                지금 시작하기
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              사용자들의 생생한 후기
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Studymate와 함께한 학생들과 학부모님들의 이야기를 들어보세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {testimonial.improvement}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white"
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4"
          >
            지금 바로 시작하세요
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-4"
          >
            AI 학습 코치와 함께 목표 성적 달성의 꿈을 현실로 만들어보세요
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl min-h-[48px]"
            >
              <Zap className="w-5 h-5 mr-2" />
              무료 체험 시작
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-base sm:text-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl min-h-[48px]"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              자세히 알아보기
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Brain className="w-8 h-8 text-blue-400" />
                </motion.div>
                <span className="ml-2 text-xl font-bold">Studymate</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                나만의 AI 학습 코치와 함께하는 스마트한 학습 관리
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">서비스</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors duration-300">AI 학습 분석</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">멘토 매칭</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">학습 관리</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">커뮤니티</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">회사</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors duration-300">소개</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors duration-300">팀</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors duration-300">채용</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors duration-300">뉴스</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">지원</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <li><Link href="/support" className="hover:text-white transition-colors duration-300">고객센터</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors duration-300">문의하기</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors duration-300">FAQ</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors duration-300">개인정보처리방침</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 Studymate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 