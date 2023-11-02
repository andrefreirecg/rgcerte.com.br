export const SpacingClassGenerator = ({ attributes }) => {
  let mobileClass = `ms-mobile-spacing msmmt-${attributes.msMarginMobileTop} msmmr-${attributes.msMarginMobileRight} msmmb-${attributes.msMarginMobileBottom} msmml-${attributes.msMarginMobileLeft}`;
  let tabletClass = `ms-tablet-spacing mstmt-${attributes.msMarginTabletTop} mstmr-${attributes.msMarginTabletRight} mstmb-${attributes.msMarginTabletBottom} mstml-${attributes.msMarginTabletLeft}`;
  let desktopClass = `ms-desktop-spacing msdmt-${attributes.msMarginDesktopTop} msdmr-${attributes.msMarginDesktopRight} msdmb-${attributes.msMarginDesktopBottom} msdml-${attributes.msMarginDesktopLeft}`;
  let spacingClass = `${mobileClass} ${tabletClass} ${desktopClass}`;
  return spacingClass;
};

