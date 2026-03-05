// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ashishent.com',
    generateRobotsTxt: true, // Optional: generates a robots.txt file
    // Optional: other options like exclude, transform, etc.
}
