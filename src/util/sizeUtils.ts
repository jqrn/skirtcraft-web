export const getSizeDisplay = (
  sizeInches: string,
  unit: 'in' | 'cm'
): string => {
  if (unit !== 'cm') {
    return sizeInches;
  }
  switch (sizeInches) {
    case '28-29':
      return '70-74';
    case '30-31':
      return '75-79';
    case '32-33':
      return '80-84';
    case '34-35':
      return '85-89';
    case '36-37':
      return '90-94';
    case '38-39':
      return '95-99';
    case '40-41':
      return '100-105';
    case '42-43':
      return '106-110';
    case '44-45':
      return '111-115';
    // tellurian
    case '26-29':
      return '65-74';
    case '30-34':
      return '75-87';
    case '35-40':
      return '88-102';
    case '41-46':
      return '103-118';
    case '47-54':
      return '119-138';
    default:
      return '';
  }
};

export const getSizeDisplayAllUnits = (sizeInches: string): string => {
  return `${sizeInches} in. (${getSizeDisplay(sizeInches, 'cm')} cm.)`;
};
