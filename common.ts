export const createElement = (args: {
  type: string;
  value?: string;
  id?: string;
  className?: string;
  dataAttr: [{ [key: string]: string }];
}) => {
  const { type, value, id, className } = args;
  if (!type)
    throw new Error(
      'SIMPLE_TABLE: coommon > createElement >> Cannot create element without type'
    );
  const ele = document.getElementById(type);
  className && (ele.className = className);
  id && (ele.id = id);
  value && (ele.innerHTML = value);
};
