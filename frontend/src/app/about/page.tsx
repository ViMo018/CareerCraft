"use client";
import { Target, Brain, Users, TrendingUp, ArrowRight } from 'lucide-react';
import './about.css';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                            About <span className="text-blue-600">CareerCraft</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Empowering careers through intelligent technology and personalized guidance
                        </p>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-6 border border-gray-100">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-gray-900">CareerCraft</strong> is an AI-powered career assistance platform designed to help individuals build stronger resumes, discover the right job opportunities, and grow professionally with confidence.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our goal is to simplify the job-seeking process by combining smart resume analysis, accurate job matching, and personalized career guidance in one unified platform.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            CareerCraft empowers students and professionals to understand their strengths, bridge skill gaps, and present themselves effectively in a competitive job market.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                        What Makes Us <span className="text-blue-600">Different</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Card 1: Our Mission */}
                        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-300 hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                    <Target className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To help job-seekers unlock better opportunities through AI-driven insights and career tools.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-300 hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                                    <Brain className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Insights</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We use modern AI and NLP techniques to analyze resumes, match skills, and generate impactful documents.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-300 hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                                    <Users className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">User-First Design</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        CareerCraft is built with simplicity and clarity, ensuring an intuitive experience for every user.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-indigo-300 hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                                    <TrendingUp className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        From resume optimization to skill improvement, we support continuous learning and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-indigo-600">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
                        Your Career Journey with CareerCraft
                    </h2>
                    <p className="text-center text-blue-100 text-lg mb-12">
                        From resume building to landing your dream job
                    </p>

                    <div className="space-y-8">
                        {/* Timeline Item 1 */}
                        <div className="flex gap-6 items-start group">
                            <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-lg">
                                1
                            </div>
                            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                                <h4 className="text-xl font-bold text-white mb-2">Upload Your Resume</h4>
                                <p className="text-blue-100">
                                    Start by uploading your existing resume. Our AI analyzes it instantly.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-lg">
                                2
                            </div>
                            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                                <h4 className="text-xl font-bold text-white mb-2">Get Personalized Insights</h4>
                                <p className="text-blue-100">
                                    Receive detailed feedback on strengths, weaknesses, and improvement areas.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-lg">
                                3
                            </div>
                            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                                <h4 className="text-xl font-bold text-white mb-2">Match with Opportunities</h4>
                                <p className="text-blue-100">
                                    Discover job roles that align perfectly with your skills and experience.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-lg">
                                4
                            </div>
                            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                                <h4 className="text-xl font-bold text-white mb-2">Grow Continuously</h4>
                                <p className="text-blue-100">
                                    Bridge skill gaps with targeted recommendations and resources.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Ready to Transform Your Career?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Join thousands of professionals who are building better careers with CareerCraft
                        </p>
                        <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
