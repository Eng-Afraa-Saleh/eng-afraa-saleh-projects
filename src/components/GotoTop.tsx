import { useState, useEffect } from 'react';
import { useLanguage } from '../App';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className={`fixed bottom-6 z-[60] ${lang === 'ar' ? 'right-6' : 'left-6'}`}>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className=" bottom-6 left-6 p-3 bg-pink-300 hover:bg-pink-400 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 z-50"
            aria-label="العودة إلى الأعلى"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default BackToTopButton;