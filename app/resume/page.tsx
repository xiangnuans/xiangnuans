import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import { Navigation } from "@/components/nav";
import { ResumeCard } from "@/components/resumeCard";

export default async function Resume() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <section className="pt-20">
        <div className=" px-4 mx-auto md:max-w-4xl">
          <div className=" flex justify-between pb-10 border-b border-line-color">
            <div>
              <div className=" w-36x h-36 border border-solid border-line-color rounded-full flex justify-center items-center">
                <img
                  className=" w-36 h-36 rounded-full"
                  src="https://avatars.githubusercontent.com/u/24558814"
                  alt=""
                />
              </div>
            </div>
            <div className=" w-full max-w-[600px]">
              <div className=" mb-2">
                <h1 className=" text-zinc-100">xiangnuan</h1>
              </div>
              <div className=" mb-2">
                <p className=" text-zinc-300">Full Stack Developer, He/Him</p>
              </div>
              <Link
                className=" mb-6 flex items-center w-fit h-6 text-zinc-100"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/xiangnuans"
              >
                <span className="flex items-center relative mr-3 border-b">
                  xiangnuan
                </span>
                <FaLink />
              </Link>
              <div>
                <p className=" mb-4 text-zinc-300">
                  Hi, I'm xiangnuan(向暖) 😄, a Fronted Engineer from China 🇨🇳.
                  Currently resides in Hangzhou. The tech stacks I specialize in
                  are the following:
                </p>
                <p className=" mb-0 text-zinc-300">
                  TypeScript | React 全家桶 | Next | Tailwindcss｜ ReactNative |
                  MySQL | Redis | MongoDB ｜ PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 mx-auto md:max-w-4xl">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">
              Work Experience
            </p>
          </div>
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020 - now</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10 border-b border-line-color">
              <h2 className=" text-zinc-100 mb-4">Senior Software Engineer</h2>
              <div>
                <p className=" mb-2 text-zinc-300">
                  In an online education company, the company belongs to the ToG
                  category, the customers are mainly schools, education bureau,
                  etc.
                </p>
                <p className=" mb-2 text-zinc-300">
                  <br />
                  The current team is the middle office team, responsible for
                  the middle and backend system development, using the micro
                  front-end architecture, from different dimensions to improve
                  the code reuse degree, reduce development costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 mx-auto md:max-w-4xl">
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2018 - 2020</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10  border-b border-line-color">
              <h2 className=" text-zinc-100 mb-4">Full Stack Engineer</h2>
              <div>
                <p className=" mb-2 text-zinc-300">
                  In an e-commerce company, our team mainly does development
                  work in various e-commerce scenarios.
                </p>
                <p className=" mb-2 text-zinc-300">
                  <br />
                  Operation of the backend system: WeChat message aggregation
                  and distribution, live material library development, etc., as
                  well as responsible for the development of front and back-end
                  tas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 pt-10 mx-auto md:max-w-4xl">
          <div className="flex justify-between">
            <div className="whitespace-nowrap">
              <p className="text-zinc-300">2017 - 2018</p>
            </div>
            <div className="w-full max-w-[600px] pb-10 border-b border-line-color">
              <h2 className="text-zinc-100 mb-4">Node Development Engineer</h2>
              <p className=" mb-2 text-zinc-300">
                The company is mainly doing big data analysis business, our team
                is mainly based on the cleaned data to do the application layer
                Node server development, docking front-end team to show the page
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2015 - 2017</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10">
              <h2 className=" text-zinc-100 mb-4">Node Development Engineer</h2>
              <p className=" mb-2 text-zinc-300">
                Doing the development of the server side of the application
                level of the intelligent Internet of Things (IoT), and
                participating in several IoT projects, such as the intelligent
                campus
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 pt-10 mx-auto md:max-w-4xl">
          <div className="mb-8">
            <p className="leading-6 font-medium text-zinc-100">Projects</p>
          </div>
          <div className="flex justify-between">
            <div className="whitespace-nowrap">
              <p className="text-zinc-300">2023</p>
            </div>
            <div className="w-full max-w-[600px] pb-10 justify-between flex">
              <img
                src="https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png"
                alt=""
                className=" w-[180px] mr-6 rounded-lg"
              />
              <div>
                <Link href="https://www.npmjs.com/package/egg-ts-pay">
                  <h3 className=" text-zinc-100">micro-bff</h3>
                </Link>
                <p className="mb-1 text-zinc-300">
                  <br />
                  Based on the micro front-end framework Qiankun, the actual
                  business scenarios built in the middle and back office project
                  framework, but also supports the use of the module federation,
                  support for applications that do not pass the repository,
                  cross-project page reuse, component reuse capability.
                </p>
                {/* <p className="mb-1 text-zinc-300">
                  <br />
                  基于微前端框架Qiankun，实际业务场景搭建的中后台项目性框架，同时也支持模块联邦的使用，支持应用在不通的仓库、跨项目的页面复用、组件复用的能力
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 pt-10 mx-auto md:max-w-4xl">
          <div className="flex justify-between">
            <div className="whitespace-nowrap">
              <p className="text-zinc-300">2023</p>
            </div>
            <div className="w-full max-w-[600px] pb-10 justify-between flex">
              <img
                src="https://shopify-app.sanqiaotech.com/logo.png"
                alt=""
                className=" w-[180px] mr-6 rounded-lg"
              />
              <div>
                <Link href="https://www.npmjs.com/package/egg-ts-pay">
                  <h3 className=" text-zinc-100">shopify</h3>
                </Link>
                <p className="mb-1 text-zinc-300">
                  <br />
                  Our client shopify the seller's suppliers. But the customer
                  does not have any goods, all the goods are basically purchased
                  from 1688. The seller pays our client, the client goes to 1688
                  to buy, receives the courier from 1688, and then packs the
                  goods to be shipped by international logistics. A shopify
                  seller will work with multiple vendors, and our client may
                  just be one of his vendors!
                </p>
                {/* <p className="mb-1 text-zinc-300">
                  <br />
                  基于微前端框架Qiankun，实际业务场景搭建的中后台项目性框架，同时也支持模块联邦的使用，支持应用在不通的仓库、跨项目的页面复用、组件复用的能力
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className="flex justify-between">
            <div className="whitespace-nowrap">
              <p className="text-zinc-300">2019</p>
            </div>
            <div className="w-full max-w-[600px] pb-10 justify-between flex">
              <img
                src="https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
                alt=""
                className=" w-[180px] mr-6 rounded-lg"
              />
              <div>
                <Link href="https://www.npmjs.com/package/egg-ts-pay">
                  <h3 className=" text-zinc-100">egg-ts-pay</h3>
                </Link>
                <p className=" text-zinc-300">
                  <br />
                  bodyParser parameter analysis xml2js xml conversion
                  aliSignVerify Alipay Signature Verification wxSignVerify
                  WeChat Signature Verification createOrderNum create unique
                  order number based on redis, support high concurrency
                </p>
                {/* <p className="mb-1 text-zinc-300">
                  <br />
                  wxPay 微信支付， 查看更多API alipay 支付宝支付， 查看更多API
                  bodyParser 参数解析 xml2js xml转换 aliSignVerify
                  支付宝签名校验 wxSignVerify 微信签名校验 createOrderNum
                  创建唯一订单号，基于redis，支持高并发
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">Education</p>
          </div>
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020 - now</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10">
              <h3 className=" text-zinc-100 mb-4">
                Bachelor of Software Engineering
              </h3>
              <div>
                <p className=" mb-2 text-zinc-300">Shanxi University</p>
                <p className=" text-zinc-300">Taiyuan, Shanxi Province</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">Code Samples</p>
          </div>
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2021</p>
            </div>
            <div className=" w-full max-w-[600px] px-6 py-4 mr-4 bg-[#272727] rounded-lg mb-4">
              <Link
                href="https://github.com/xiangnuans/spa-template"
                className="flex flex-row items-center text-zinc-100"
              >
                <h2 className="mb-4 border-b mr-3">spa-template</h2>
                <FaLink size={28} />
              </Link>
              <div>
                <p className=" text-zinc-300">
                  Create a react project based on create-react-app and
                  personalize it with craco instead of react-script.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between pb-4">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020</p>
            </div>
            <div className=" w-full max-w-[600px] px-6 py-4 mr-4 bg-[#272727] rounded-lg mb-4">
              <Link
                href="https://github.com/xiangnuans/large-number"
                className="flex flex-row items-center text-zinc-100"
              >
                <h2 className="mb-4 border-b mr-3">larger-number</h2>
                <FaLink size={28} />
              </Link>
              <div>
                <p className=" text-zinc-300">
                  1. Need to package compressed and uncompressed versions.
                </p>
                <p className=" text-zinc-300">
                  2. Until the introduction of AMD/CJS/ESM modules
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 mx-auto md:max-w-4xl flex justify-between">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">Contacts</p>
          </div>
          <div className="w-full max-w-[600px] pb-10 flex flex-row">
            <div className="mr-6">
              <p className=" text-zinc-100 mb-6 ">Github</p>
              <p className=" text-zinc-100 mb-6 mr-6">Email</p>
              <p className=" text-zinc-100 mb-6 mr-6">Twitter</p>
            </div>
            <div className="">
              <Link
                href="https://github.com/xiangnuans"
                className="text-zinc-100 mb-6 flex flex-row items-center"
              >
                <p className="border-b">https://github.com/xiangnuans</p>
                <FaLink className="ml-2" />
              </Link>
              <Link
                href="https://mail.google.com/mail/u/0/#inbox"
                className="text-zinc-100 mb-6 flex flex-row items-center"
              >
                <p className="border-b">@cocoguo7636@gmail.com </p>
                <FaLink className="ml-2" />
              </Link>
              <Link
                href="https://twitter.com/coco69564520"
                className="text-zinc-100 mb-6 flex flex-row items-center"
              >
                <p className=" border-b">@coco69564520</p>
                <FaLink className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
