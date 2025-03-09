export function calculateThreshold(
  element: HTMLElement | null,
  parent: HTMLElement | null,
): number {
  if (!element) {
    return 0.2;
  }

  if (!parent) {
    return 0.2;
  }

  const elementHeight = element.getBoundingClientRect().height;
  const parentHeight = parent.getBoundingClientRect().height;

  return Math.min(1, Math.max(0.1, elementHeight / parentHeight));
}

const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth' };

export function scrollIntoView(element: HTMLElement): void {
  element.scrollIntoView(scrollOptions);
}
