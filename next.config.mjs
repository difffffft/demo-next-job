const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://cdn.mydomain.com/_next/static
  // 打包之后会变成 <script src="https://cdn.mydomain.com/_next/static/chunks/webpack-9a7189b6bad9927d.js" async=""></script>
  //   assetPrefix: isProd ? "https://cdn.mydomain.com" : undefined,

  // 全局基础路径加前缀
  //   basePath: "/v1",

  /**
   * 设置为anonymous，请求图片时，不会携带cookie
   * anonymous代表同域会带上cookie，跨域则不带上cookie
   */
  // crossOrigin: "use-credentials",

  distDir: "dist",

  /**
   * 打包时可能存在Eslint导致构建失败，你可以禁用它
   */
  // ignoreDuringBuilds: true,


  /**
   * Next构建期间，会为每一个版本生产不一样的ID，如果要生成一样的，可使用以下函数
   */
  // generateBuildId: async () => {
  //   return process.env.GIT_HASH
  // },


  /**
   * 标头允许您在响应给定路径上的传入请求时设置自定义 HTTP 标头
   */
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  }

  compiler: {
    // removeConsole:true
  },
};

export default nextConfig;
