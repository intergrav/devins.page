import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: "devin's blog",
		description: "hi, i'm devin! :)",
		site: context.site,
		items: blog.map((post) => ({
			link: `/blog/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			}),
			...post.data,
		})),
	});
}
