const SCROLL_DURATION_MS = 700;

function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}

function getHeaderOffset(): number {
  const header = document.querySelector("header");

  if (!(header instanceof HTMLElement)) {
    return 24;
  }

  return Math.max(header.getBoundingClientRect().height + 16, 24);
}

export function scrollToSection(sectionId: string): void {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    target.scrollIntoView();
    return;
  }

  const startY = window.scrollY;
  const targetY = Math.max(target.getBoundingClientRect().top + window.scrollY - getHeaderOffset(), 0);
  const distance = targetY - startY;
  const startTime = window.performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      window.requestAnimationFrame(animate);
    }
  };

  window.requestAnimationFrame(animate);
}
