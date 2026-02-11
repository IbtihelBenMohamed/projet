import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
                            <span className="font-bold text-2xl text-primary">دليل الصرع التونسي</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                            مبادرة توعوية تهدف لتبسيط المفاهيم العلمية حول الصرع ونشر الوعي في المجتمع التونسي لدعم المصابين وعائلاتهم.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-800 dark:text-white mb-6">روابط سريعة</h4>
                        <ul className="space-y-4">
                            <li><Link to="/definition" className="text-slate-500 hover:text-primary transition-colors">ما هو الصرع؟</Link></li>
                            <li><Link to="/first-aid" className="text-slate-500 hover:text-primary transition-colors">الإسعافات الأولية</Link></li>
                            <li><Link to="/video" className="text-slate-500 hover:text-primary transition-colors">مكتبة الفيديو</Link></li>
                            <li><Link to="/resources" className="text-slate-500 hover:text-primary transition-colors">المراكز الطبية</Link></li>
                        </ul>
                    </div>

                    {/* Contact/Support */}
                    <div>
                        <h4 className="font-bold text-slate-800 dark:text-white mb-6">الدعم</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-slate-500">
                                <span className="material-icons-round text-sm">email</span>
                                support@epilepsy-tn.org
                            </li>
                            <li className="flex items-center gap-2 text-slate-500">
                                <span className="material-icons-round text-sm">phone</span>
                                190 (طوارئ)
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        © 2026 دليل الصرع التونسي. جميع الحقوق محفوظة.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-round">facebook</span></a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-round">youtube_searched_for</span></a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-round">language</span></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
