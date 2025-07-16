'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaCamera,
  FaCompass,
  FaUpload,
  FaVideo,
  FaCog,
  FaComments,
  FaQuestionCircle,
  FaUsersCog,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

const SideBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNav = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsHeaderVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <div
        className={`mobile-header ${
          isMobile
            ? `transition-transform duration-300 ${
                isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
              }`
            : ''
        }`}
      >
        <div className="menu-icon" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <Image src={'/icons/logo.png'} 
          alt='image'
          height={50}
          width={50} 
          className="logo" />
      </div>

      <div className={`sidebar bg-gray-900 ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleNav('/')}
        >
          <Image src={'/icons/logo.png'} 
          alt='image'
          height={50}
          width={50} 
          className="brand-logo" />

          <Image src={'/icons/icon-192.png'} 
          alt='image'
          height={50}
          width={50} 
          className="logo" />
        </div>

        <ul>
          <li>
            <a onClick={() => handleNav('/')}>
              <FaHeart /> <span>For you</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNav('/model')}>
              <FaCamera /> <span>Models</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNav('/search')}>
              <FaCompass /> <span>Explorer</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNav('/uploadpost')}>
              <FaUpload /> <span>Upload</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNav('/coming-soon')}>
              <FaVideo /> <span>Live</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNav('/setting')}>
              <FaCog /> <span>Setting</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNav('/feedback')}>
              <FaComments /> <span>Feedback</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNav('/help')}>
              <FaQuestionCircle /> <span>Support</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNav('/community')}>
              <FaUsersCog /> <span>Guidelines</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
