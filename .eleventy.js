const { DateTime } = require("luxon");

// const markdownIt = require('markdown-it');
// const markdownItAnchor = require('markdown-it-anchor');
// const markdownItToc = require('markdown-it-toc-done-right');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

    // eleventyConfig.setLibrary("md",
    //     markdownIt({
    //         html: true,
    //         linkify: true,
    //         typographer: true,
    //     }).use(markdownItAnchor, {})
    //       .use(markdownItToc, {listType: 'ul'})
    // );

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}