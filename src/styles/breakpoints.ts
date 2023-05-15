import { css } from '@emotion/react';

export const mediaBreakpoints = [320, 768, 992, 1366, 1440];
export const mediaLimitBreakpoints = [767, 991, 1365, 1439];

export const maxScreen = mediaBreakpoints[mediaBreakpoints.length - 1];

export const breakpoint = {
  mobile: `${mediaBreakpoints[0]}px`,
  tablet: `${mediaBreakpoints[1]}px`,
  tabletLarge: `${mediaBreakpoints[2]}px`,
  desktop: `${mediaBreakpoints[3]}px`,
  extraLarge: `${mediaBreakpoints[4]}px`,
};

export const limitBreakpoint = {
  mobile: `${mediaLimitBreakpoints[0]}px`,
  tablet: `${mediaLimitBreakpoints[1]}px`,
  tabletLarge: `${mediaLimitBreakpoints[2]}px`,
  desktop: `${mediaLimitBreakpoints[3]}px`,
};

const retrieveMediaBreakpoint = (
  screenBreakpoint: number,
  cssProp: string,
  cssPropBreakpoint: string,
  ref: string
) =>
  `
  @media screen and (${ref}: ${screenBreakpoint}px) {
    ${cssProp}: ${cssPropBreakpoint};
  }
  `;

const retrieveMediaBetweenBreakpoint = (
  minScreenBreakpoint: number,
  maxScreenBreakpoint: number,
  cssProp: string,
  cssPropBreakpoint: string
) =>
  `
  @media screen and (min-width:${minScreenBreakpoint}px) and (max-width:${maxScreenBreakpoint}px){
    ${cssProp}: ${cssPropBreakpoint};
 }
 `;

/**
 * Applies media screen to the given property
 * @param cssProp property be changed
 * @param values values for each screen size (sm, md, lg and xl).
 * Always in this order, if only one value is entered, it will be applied to sm, if there are two it will be sm and md, and so on.
 * @returns css
 */
export const cssBreakpoints = (
  cssProp: string,
  values: string[],
  ref?: string
) => {
  let breakpointProps = '';
  values.forEach((value, index) => {
    if (value) {
      breakpointProps += retrieveMediaBreakpoint(
        mediaBreakpoints[index],
        cssProp,
        value,
        ref || 'min-width'
      );
    }
  });

  return css`
    ${breakpointProps}
  `;
};

/**
 * Applies media screen to the between
 * @param cssProp property be changed
 * @param values values for each screen size (sm, md, lg and xl).
 * Always in this order, if only one value is entered, it will be applied to sm, if there are two it will be sm and md, and so on.
 * @returns css
 */
export const cssBetweenBreakpoints = (cssProp: string, values: string[]) => {
  let breakpointProps = '';
  values.forEach((value, index) => {
    if (value) {
      if (index === mediaLimitBreakpoints.length) {
        breakpointProps += retrieveMediaBreakpoint(
          mediaBreakpoints[index],
          cssProp,
          value,
          'min-width'
        );
      } else {
        breakpointProps += retrieveMediaBetweenBreakpoint(
          mediaBreakpoints[index],
          mediaLimitBreakpoints[index],
          cssProp,
          value
        );
      }
    }
  });

  return css`
    ${breakpointProps}
  `;
};

export const cssPaddingContent = () =>
  cssBreakpoints('padding', ['0 1.5rem', '0 2rem', '0 2rem', '0 5.5rem']);

export const retrieveDisplayMobile = () =>
  `(max-width: ${limitBreakpoint.mobile})`;

export const retrieveDisplayTabletLarge = () =>
  `(max-width: ${limitBreakpoint.tabletLarge})`;

export const retrieveDisplayTablet = () =>
  `(min-width: ${breakpoint.tabletLarge})`;

export const retrieveDisplayDesktop = () =>
  `(min-width: ${breakpoint.desktop})`;
