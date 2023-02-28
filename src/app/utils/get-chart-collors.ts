export const getColors = (tag: string): string => {
  switch (tag) {
    case 'Design':
      return '#6c7ff9';
    case 'Programming':
      return '#624ee5';
    case 'Networks':
      return '#4e37ed';
    case 'Others':
      return '#b4bffb';
    default:
      return 'transparent';
  }
};
