module.exports = {
  permalink: (data) => {
    // First pass here: data === {}
    if (data.page === undefined) {
      return null;
    }
    // Second pass, don't generate HTML for drafts
    if (data.page.filePathStem.startsWith("/drafts/")) {
      return false;
    }
    // Else, keep the permalink as is
    return data.permalink;
  },
};
