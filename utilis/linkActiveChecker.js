// is active link check
export const isActiveLink = (menuPath, routePath) => {
  if (menuPath && routePath) {
    return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
  }
};
