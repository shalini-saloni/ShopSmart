import { useEffect } from 'react';
import Hero from '../components/Hero';
import SummerCarousel from '../components/SummerCarousel';
import CategoryGrid from '../components/CategoryGrid';
import MembershipClub from '../components/MembershipClub';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="home-container">
      <section className="sticky-section z-10"><Hero /></section>
      <section className="sticky-section z-20"><SummerCarousel /></section>
      <section className="sticky-section z-30"><CategoryGrid /></section>
      <section className="sticky-section z-40"><MembershipClub /></section>
      <section className="footer-wrap"><Footer /></section>
    </div>
  );
}
