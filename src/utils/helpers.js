const sortObjectByValue = (obj) => {
  let sortable = [];
  for (let item in obj) sortable.push([item, obj[item]]);
  sortable.sort((a, b) => b[1] - a[1]);
  return sortable;
};

export const getSortedCategoriesByCount = (posts) => {
  const cntPerCategory = {};

  posts.forEach(({ categories }) => {
    categories.forEach((category) => {
      cntPerCategory[category] = cntPerCategory[category] ? cntPerCategory[category] + 1 : 1;
    });
  });

  return sortObjectByValue(cntPerCategory).map(([category]) => category);
};
