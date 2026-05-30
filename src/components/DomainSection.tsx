"use client";

import type { DomainContent } from "@/data/domains";
import {
  BentoLayout,
  CinematicLayout,
  EditorialSplitLayout,
  HeroCardsLayout,
  ManifestoLayout,
  ReliefLayout,
  SocialFeedLayout,
  TimelineLayout,
} from "@/components/domain-layouts/DomainLayouts";

type DomainSectionProps = {
  domain: DomainContent;
};

const LAYOUTS = {
  "editorial-split": EditorialSplitLayout,
  cinematic: CinematicLayout,
  "hero-cards": HeroCardsLayout,
  relief: ReliefLayout,
  timeline: TimelineLayout,
  "social-feed": SocialFeedLayout,
  bento: BentoLayout,
  manifesto: ManifestoLayout,
} as const;

export function DomainSection({ domain }: DomainSectionProps) {
  const Layout = LAYOUTS[domain.layout];
  return <Layout domain={domain} />;
}
