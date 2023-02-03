const assert = require("assert");
const BlogPage = require("../pages/blog.page.js");

beforeEach("Open page", async () => {
    await BlogPage.navigateTo("https://telnyx.com/resources");
});

describe("Test search input and email input in Blog page ", () => {
    it("Verification Blog page, Expect url and title", async () => {
        await expect(browser).toHaveUrl("https://telnyx.com/resources");
        await expect(browser).toHaveTitle(
            "Read Our Blog Posts, Updates and Tutorials"
        );
        await BlogPage.clickElement(BlogPage.closeCookiesButton);
    });

    it("Result found", async () => {
        await BlogPage.fillInput(BlogPage.blogSearch, "a");
        await browser.pause(200);
        await browser.keys("\uE007");
        await browser.pause(200);
        assert.strictEqual(
            await BlogPage.getElementText(BlogPage.outputSearch),
            'Search results for "a"'
        );
    });
    it("Result not found", async () => {
        await BlogPage.fillInput(BlogPage.blogSearch, "*=");
        await browser.pause(200);
        await browser.keys("\uE007");
        await browser.pause(200);
        assert.strictEqual(
            await BlogPage.getElementText(BlogPage.outputSearch),
            'No results found for "*="'
        );
    });
    it("Positive subscribe", async()=>{
        await BlogPage.fillInput(BlogPage.blogEmail,"FakeMail123123@gmail.com")
        await BlogPage.clickElement(BlogPage.blogButtonSubscribe)
    })
    it("Negative subscribe with not valid email", async()=>{
        await BlogPage.fillInput(BlogPage.blogEmail,"abc")
        await BlogPage.clickElement(BlogPage.blogButtonSubscribe)
        assert.strictEqual(
            await BlogPage.getElementText(BlogPage.errorBlogEmail),
            'Please enter a valid email address.'
        );

    })
});
