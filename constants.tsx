
import { Product, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Our Story', href: 'about' },
  { label: 'Shop', href: 'shop' },
  { label: 'The Rituals', href: 'rituals' },
  { label: 'Journal', href: 'journal' },
];

export const TIMELINE_EVENTS = [
  {
    year: '1994',
    title: 'The Seed',
    description: "Ananya discovers her grandmother's handwritten Vedic manuscripts detailing the 'Golden Radiance' rituals used by royal dynasties.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhxUz9uwx-3cUfvT7XM7sv9appxz1bs475OE44XLK-07QuJF4lhb4Z3yxPiQ2d_s8hJ5ywM512s9UUUDsww5dRehRf5dpy0F7sxD5RCkyOGLD9Tay64-dCJFA6yOZBwI_iB1ZouI8Ew1FfnVWZh-XLYsY6mvCn0HrwJbKNUwI1fAeimm4n1AKHp7wJkjCKTM5L_ni7S3VUwhTIl8wL9-6uYK8GRQ9Rg8waFcp_PHertov6LfzVNX1JI6-T-lSRrmNIBa5Wnqm32w'
  },
  {
    year: '2018',
    title: 'The Synthesis',
    description: 'After years of dermatological research, the first successful infusion of 24K gold leaf into biocompatible botanical oils is achieved.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHd-0qDgMY9hZ2i68uUb6DASFAPRE3Oz1Wg3x1LyFdYWsBGjS8FljzZk6_Xsmz48rh4ZwuXZTCU6ZcbM8vzM2oNXDLlDWcTZ5oXR_q7mQthDHk8Ndk50jPXkxu_S32KRaiydrL280ny3auS-Kjfl5rwqRuWIxI6DK3SKodPJLqLpXSEestGoMUm96LMk30sCZ05pfVQi0cx635al3kMoJrMSYQ5tQhIPUBEt8n5tcRHVxkPMhYYaVPk9m-pK22Sx-jtTrnvHkDMg'
  },
  {
    year: 'Today',
    title: 'The Global Glow',
    description: 'Tvasyah is recognized as the pinnacle of sustainable luxury Ayurveda, supporting over 200 regenerative farms across India.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtXHe52gjZekbRlLX5fQOMQTuKPzfuA4ma--gV0927B8JEp4WvvMyNCDf0rn8GK4Rjvo-jAw6aWKZwShGOG-XDNaKEipbUCLohMVIsW5F8U9d7opPJNdXaTGVWH1tvEE586EWVGG_2kTbxOEeU0bM9MSqTrsI5h9PN7onCEZIfA-ENaV0dES3g_WzAtENofRHSK7coRecWoeH8yA4YqGVIsww0KlxSky3-UTXWafARzOuRwrTG01RyCvSPk98ANeUJkvEjy08RbA',
    isPrimary: true
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '24K Radiance Face Oil',
    category: 'Illuminate & Firm',
    price: 124,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhxUz9uwx-3cUfvT7XM7sv9appxz1bs475OE44XLK-07QuJF4lhb4Z3yxPiQ2d_s8hJ5ywM512s9UUUDsww5dRehRf5dpy0F7sxD5RCkyOGLD9Tay64-dCJFA6yOZBwI_iB1ZouI8Ew1FfnVWZh-XLYsY6mvCn0HrwJbKNUwI1fAeimm4n1AKHp7wJkjCKTM5L_ni7S3VUwhTIl8wL9-6uYK8GRQ9Rg8waFcp_PHertov6LfzVNX1JI6-T-lSRrmNIBa5Wnqm32w',
    tagline: 'Quick Buy — $124',
    rating: 5
  },
  {
    id: '2',
    name: 'Silk Cleansing Balm',
    category: 'Deeply Nourishing',
    price: 88,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtXHe52gjZekbRlLX5fQOMQTuKPzfuA4ma--gV0927B8JEp4WvvMyNCDf0rn8GK4Rjvo-jAw6aWKZwShGOG-XDNaKEipbUCLohMVIsW5F8U9d7opPJNdXaTGVWH1tvEE586EWVGG_2kTbxOEeU0bM9MSqTrsI5h9PN7onCEZIfA-ENaV0dES3g_WzAtENofRHSK7coRecWoeH8yA4YqGVIsww0KlxSky3-UTXWafARzOuRwrTG01RyCvSPk98ANeUJkvEjy08RbA',
    tagline: 'Quick Buy — $88',
    rating: 5
  },
  {
    id: '3',
    name: 'Pure Saffron Serum',
    category: 'Brightening Elixir',
    price: 145,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHd-0qDgMY9hZ2i68uUb6DASFAPRE3Oz1Wg3x1LyFdYWsBGjS8FljzZk6_Xsmz48rh4ZwuXZTCU6ZcbM8vzM2oNXDLlDWcTZ5oXR_q7mQthDHk8Ndk50jPXkxu_S32KRaiydrL280ny3auS-Kjfl5rwqRuWIxI6DK3SKodPJLqLpXSEestGoMUm96LMk30sCZ05pfVQi0cx635al3kMoJrMSYQ5tQhIPUBEt8n5tcRHVxkPMhYYaVPk9m-pK22Sx-jtTrnvHkDMg',
    tagline: 'Quick Buy — $145',
    rating: 5
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena P.',
    role: 'Verified Purist',
    content: "The 24K Radiance oil has completely transformed my skin's texture. It's the ritual I look forward to most every single morning.",
    initials: 'EP'
  },
  {
    id: '2',
    name: 'Sonia K.',
    role: 'Holistic Esthetician',
    content: "Finally, a brand that respects ancient wisdom without compromising on clinical efficacy. My melasma has visibly faded.",
    initials: 'SK'
  },
  {
    id: '3',
    name: 'Marcus W.',
    role: 'Loyal Member',
    content: "The scent alone transports me to a luxury spa. It's not just skincare, it's a sensory experience that grounds me.",
    initials: 'MW'
  }
];

export const PUBLICATIONS = [
  'Vogue', 'Harper\'s Bazaar', 'Elle', 'Forbes', 'Town & Country', 'Vanity Fair'
];

export const INGREDIENTS = [
  'Saffron', 'Turmeric', 'Neem', 'Ashwagandha', 'Brahmi'
];
