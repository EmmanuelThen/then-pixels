import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import { blackA, mauve, indigo, purple, red, slate, green, violet, blue, yellow, sky } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class', '[data-theme="dark"]'];
export const content = [
  'app/**/*.{ts,tsx}',
  'components/**/*.{ts,tsx}',
  'pages/**/*.{ts,tsx}'
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans]
    },
    colors: {
      ...blackA,
      ...mauve,
      ...red,
      ...purple,
      ...indigo,
      ...slate,
      ...green,
      ...violet,
      ...blue,
      ...yellow,
      ...sky
    },
    keyframes: {
      enterFromRight: {
        from: { opacity: 0, transform: 'translateX(200px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      enterFromLeft: {
        from: { opacity: 0, transform: 'translateX(-200px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      exitToRight: {
        from: { opacity: 1, transform: 'translateX(0)' },
        to: { opacity: 0, transform: 'translateX(200px)' },
      },
      exitToLeft: {
        from: { opacity: 1, transform: 'translateX(0)' },
        to: { opacity: 0, transform: 'translateX(-200px)' },
      },
      scaleIn: {
        from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
        to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
      },
      scaleOut: {
        from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeOut: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
      backgroundShine: {
        from: { backgroundPosition: '0 0' },
        to: { backgroundPosition: '-200% 0' }
      },
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
      hide: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
      slideIn: {
        from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        to: { transform: 'translateX(0)' },
      },
      swipeOut: {
        from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
        to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
      },
      slideDown: {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
      slideUpAndFade: {
        from: { opacity: 0, transform: 'translateY(2px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideRightAndFade: {
        from: { opacity: 0, transform: 'translateX(-2px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      slideDownAndFade: {
        from: { opacity: 0, transform: 'translateY(-2px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideLeftAndFade: {
        from: { opacity: 0, transform: 'translateX(2px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },

    },
  },
  animation: {
    scaleIn: 'scaleIn 200ms ease',
    scaleOut: 'scaleOut 200ms ease',
    fadeIn: 'fadeIn 200ms ease',
    fadeOut: 'fadeOut 200ms ease',
    enterFromLeft: 'enterFromLeft 250ms ease',
    enterFromRight: 'enterFromRight 250ms ease',
    exitToLeft: 'exitToLeft 250ms ease',
    exitToRight: 'exitToRight 250ms ease',
    backgroundShine: 'backgroundShine 2.5s linear infinite',
    overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    hide: 'hide 100ms ease-in',
    slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    swipeOut: 'swipeOut 100ms ease-out',
    slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',

  },
};
export const plugins = [];
