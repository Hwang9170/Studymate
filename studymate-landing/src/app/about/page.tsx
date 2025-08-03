'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Heart,
  GraduationCap,
  Lightbulb,
  Globe,
  Rocket,
  MessageCircle
} from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "지종현",
      role: "CEO & Founder",
      description: "수능 전 과목 상위 1% 달성 후 치의학과 입학. 대형학원에서 최상위권 대상 학습 컨설팅과 맞춤 과외 진행. 100건이 넘는 수능 컨설팅 사례 보유.",
      image: "/team/jonghyun.jpg"
    },
    {
      name: "유정원",
      role: "학습관리 총책임자",
      description: "수년간 학습코칭 진행. 수백 명 이상 학생 대상 학습계획 점검, 피드백 경험. 김과외 학습코칭 전체 랭킹 1위 달성.",
      image: "/team/jeongwon.jpg"
    },
    {
      name: "황광호",
      role: "기술 총책임자",
      description: "다수의 개발 프로젝트와 해커톤 수상 경험 보유. AI 기반 자동화 및 Agentic 시스템 설계에 전문성 보유.",
      image: "/team/guangho.jpg"
    },
    {
      name: "구민교",
      role: "기술지원 & 디자인",
      description: "프론트엔드 UI 설계 및 디자인, 백엔드 서버 개발 및 데이터베이스 설계 전문가.",
      image: "/team/mingyo.jpg"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "혁신",
      description: "AI 기술을 활용한 교육 혁신을 통해 모든 학생이 양질의 교육을 받을 수 있도록 합니다."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "공감",
      description: "학생과 학부모의 니즈를 깊이 이해하고, 진정한 도움이 되는 서비스를 제공합니다."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "성과",
      description: "구체적인 성적 향상과 학습 습관 개선을 통해 실질적인 교육 효과를 만들어냅니다."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "포용",
      description: "지역과 소득에 관계없이 모든 학생이 동등한 교육 기회를 가질 수 있도록 합니다."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Studymate 설립",
      description: "교육 격차 해소를 위한 AI 기반 학습 관리 플랫폼 구상"
    },
    {
      year: "2025",
      title: "MVP 개발",
      description: "핵심 기능 구현 및 베타 테스트 진행"
    },
    {
      year: "2025",
      title: "정식 서비스 런칭",
      description: "iOS/Android 앱 출시 및 사용자 확대"
    },
    {
      year: "2026",
      title: "시장 확장",
      description: "전국 주요 도시 진출 및 시드 투자 유치"
    }
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
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                기능
              </Link>
              <Link href="/#benefits" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                장점
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                가격
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                소개
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                문의
              </Link>
            </div>
            <div className="flex items-center space-x-4">
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
          </div>
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              교육 혁신을 이끄는
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Studymate</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              AI 기술과 인간의 따뜻함을 결합하여 모든 학생이 자신의 꿈을 이룰 수 있도록 돕습니다
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                우리의 미션
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                교육 사각지대에 놓인 학생들이 사교육 없이도 원하는 목표 성적에 도달할 수 있도록 
                AI 기반 개인 맞춤형 학습 관리 솔루션을 제공합니다.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                서울대 출신 전문 멘토들과 함께하는 1:1 맞춤형 코칭으로 
                단순한 성적 향상을 넘어 지속 가능한 학습 습관과 자기주도학습 능력을 기릅니다.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                더 자세히 알아보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-12 h-12 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">교육 평등</h3>
                    <p className="text-blue-100">모든 학생을 위한 기회</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>AI 기반 개인 맞춤형 학습</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>전문 멘토 1:1 코칭</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>지속 가능한 학습 습관 형성</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              우리의 가치
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Studymate가 추구하는 핵심 가치들입니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-xl bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              우리 팀
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              교육 혁신을 이끄는 Studymate 팀을 소개합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              성장 여정
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Studymate의 발전 과정을 함께 보세요
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
            className="text-3xl font-bold text-white mb-4"
          >
            함께 성장해나가는 Studymate
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8"
          >
            교육 혁신의 여정에 여러분도 함께해주세요
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <Rocket className="w-5 h-5 mr-2" />
              무료 체험 시작
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Brain className="w-8 h-8 text-blue-400" />
                </motion.div>
                <span className="ml-2 text-xl font-bold">Studymate</span>
              </div>
              <p className="text-gray-400">
                나만의 AI 학습 코치와 함께하는 스마트한 학습 관리
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors duration-300">AI 학습 분석</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">멘토 매칭</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">학습 관리</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">커뮤니티</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">회사</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="text-blue-400 font-semibold">소개</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors duration-300">팀</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors duration-300">채용</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors duration-300">뉴스</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">지원</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/support" className="hover:text-white transition-colors duration-300">고객센터</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors duration-300">문의하기</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors duration-300">FAQ</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors duration-300">개인정보처리방침</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Studymate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 