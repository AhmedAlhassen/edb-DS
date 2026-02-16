import * as React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };
const IconBase = ({ size = 20, children, ...props }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>{children}</svg>
);

export const ChevronLeft = (p: IconProps) => <IconBase {...p}><path d="m15 18-6-6 6-6"/></IconBase>;
export const ChevronRight = (p: IconProps) => <IconBase {...p}><path d="m9 18 6-6-6-6"/></IconBase>;
export const ArrowLeft = (p: IconProps) => <IconBase {...p}><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></IconBase>;
export const ArrowRight = (p: IconProps) => <IconBase {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></IconBase>;
export const Check = (p: IconProps) => <IconBase {...p}><path d="m20 6-11 11-5-5"/></IconBase>;
export const X = (p: IconProps) => <IconBase {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconBase>;
export const Info = (p: IconProps) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></IconBase>;
export const Warning = (p: IconProps) => <IconBase {...p}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></IconBase>;
export const ErrorIcon = (p: IconProps) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></IconBase>;
export const Sun = (p: IconProps) => <IconBase {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></IconBase>;
export const Moon = (p: IconProps) => <IconBase {...p}><path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z"/></IconBase>;
export const Globe = (p: IconProps) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconBase>;

export const DirectionalIcon = ({ dir = 'ltr', children }: { dir?: 'ltr'|'rtl'; children: React.ReactElement<IconProps> }) =>
  React.cloneElement(children, { style: { transform: dir === 'rtl' ? 'scaleX(-1)' : undefined, ...(children.props.style ?? {}) } });
