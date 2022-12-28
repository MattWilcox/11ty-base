// Importing from config folder
const {getPosts, getProjects} = require('./config/collections/index.js');
const postCSS = require('./config/postcss.config.js');

// Plugins
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const pluginPostCSS = require("eleventy-plugin-postcss");
const { EleventyRenderPlugin } = require("@11ty/eleventy");


module.exports = function(eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(pluginWebc, {
		components: "src/_includes/components/**/*.webc"
	});
	eleventyConfig.addPlugin(pluginPostCSS);
	eleventyConfig.addPlugin(EleventyRenderPlugin);

	// Collections
	eleventyConfig.addCollection('posts', getPosts);
	eleventyConfig.addCollection('projects', getProjects);

	// general settings
	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
			layouts: '_layouts'
		}
	}
};