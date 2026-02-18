import { Building2, Heart, PartyPopper, Rocket } from "lucide-react";
import {
  corporate1, corporate2, corporate3, corporate4,
  wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7, wedding8,
  birthday1, birthday2, birthday3, birthday4, birthday5,
} from "../assets";

export const SERVICES = [
  {
    icon: Building2,
    title: "Corporate Events",
    desc: "Conferences, seminars, and team-building experiences crafted for impact.",
    detail: "From large-scale conferences to intimate boardroom seminars, we design corporate experiences that inspire, engage, and leave a lasting impression on your stakeholders.",
    images: [corporate1, corporate2, corporate3, corporate4],
  },
  {
    icon: Rocket,
    title: "Product Launches",
    desc: "High-energy events that put your brand in the spotlight.",
    detail: "Launch your product with maximum impact. We create immersive brand experiences with cutting-edge staging, media coordination, and audience engagement strategies that generate buzz.",
    images: [corporate1, corporate3, corporate2, corporate4],
  },
  {
    icon: Heart,
    title: "Weddings",
    desc: "Timeless celebrations designed to reflect your unique love story.",
    detail: "Every love story is unique. We craft bespoke wedding experiences — from grand ceremonies to intimate gatherings — with meticulous attention to every floral arrangement, lighting cue, and heartfelt moment.",
    images: [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7, wedding8],
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    desc: "Birthdays, anniversaries, and milestones made truly memorable.",
    detail: "Whether it's a milestone birthday, a golden anniversary, or a surprise celebration, we turn your personal occasions into extraordinary memories with stunning décor and seamless coordination.",
    images: [birthday1, birthday2, birthday3, birthday4, birthday5],
  }
];

export const SERVICE_NAMES = [
  "Corporate Events",
  "Weddings",
  "Birthday Parties",
  "Product Launches",
  "Custom Packages",
];
