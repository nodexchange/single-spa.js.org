"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7685],{7557:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(4848),i=s(8453);const r={title:"Top 5 Microfrontend Hosting Solutions"},o="Top 5 Microfrontend Hosting Solutions",l={permalink:"/blog/2024/03/18/top-5-microfrontend-hosting-solutions",source:"@site/blog/2024-03-18-top-5-microfrontend-hosting-solutions.md",title:"Top 5 Microfrontend Hosting Solutions",description:"With rapid growth in recent years, microfrontends have become a popular solution with many companies, from large software organizations to small independent dev teams. Microfrontend hosting can get complicated quickly but it is a crucial aspect of scaling software organizations' development cycle. Whether companies are using single-spa, module federation, or any other microfrontends tools, the management of CI/CD pipelines, deployments, CDNs, and service discovery is something all companies will have to solve.",date:"2024-03-18T00:00:00.000Z",formattedDate:"March 18, 2024",tags:[],readingTime:7.18,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Top 5 Microfrontend Hosting Solutions"},unlisted:!1,prevItem:{title:"April 2024 Core Team Meeting",permalink:"/blog/2024/04/10/core-team-meeting-notes"},nextItem:{title:"March 2024 Core Team Meeting",permalink:"/blog/2024/03/12/core-team-meeting-notes"}},d={authorsImageUrls:[]},a=[{value:"Server-side versus client-side rendering",id:"server-side-versus-client-side-rendering",level:2},{value:"Low-level vs high-level hosting solutions",id:"low-level-vs-high-level-hosting-solutions",level:2},{value:"Solution comparison",id:"solution-comparison",level:2},{value:"1. Baseplate Cloud",id:"1-baseplate-cloud",level:2},{value:"2. Zephyr Cloud",id:"2-zephyr-cloud",level:2},{value:"3. AWS S3 + Cloudfront",id:"3-aws-s3--cloudfront",level:2},{value:"4. GCP Storage + Cloud CDN",id:"4-gcp-storage--cloud-cdn",level:2},{value:"5. Azure Storage + CDN",id:"5-azure-storage--cdn",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"With rapid growth in recent years, microfrontends have become a popular solution with many companies, from large software organizations to small independent dev teams. Microfrontend hosting can get complicated quickly but it is a crucial aspect of scaling software organizations' development cycle. Whether companies are using single-spa, module federation, or any other microfrontends tools, the management of CI/CD pipelines, deployments, CDNs, and service discovery is something all companies will have to solve."}),"\n",(0,t.jsx)(n.p,{children:"So what\u2019s the most effective solution? Because microfrontend hosting is a relatively new space, most companies have a hard time knowing where to start. Fortunately, there are very good options out there, and unless you have a good reason to, you don\u2019t have to build it out yourself. Here you\u2019ll find a list of the best hosting solutions and the important factors you\u2019ll need to consider to make the decision."}),"\n",(0,t.jsx)(n.h2,{id:"server-side-versus-client-side-rendering",children:"Server-side versus client-side rendering"}),"\n",(0,t.jsxs)(n.p,{children:["This article focuses on hosting solutions for client-side rendered microfrontends, since the majority of microfrontend implementations rely solely on ",(0,t.jsx)(n.a,{href:"https://ferie.medium.com/what-is-the-client-side-rendering-and-how-it-works-c90210e2cd14",children:"client-side rendering"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.heavy.ai/technical-glossary/server-side-rendering",children:"Server-side rendering"})," of microfrontends often involves one or more docker containers that run ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Node.js",children:"NodeJS"})," to render ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/React_(software)",children:"React"}),", ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Angular_(web_framework)",children:"Angular"}),", or ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Vue.js",children:"Vue"})," applications. For optimal performance, ",(0,t.jsx)(n.a,{href:"/docs/ssr-overview",children:"single-spa server rendering"})," also supports a single NodeJS runtime (rather than network requests between docker containers)."]}),"\n",(0,t.jsx)(n.p,{children:"If your organization uses server-side rendering, the following rankings will still apply but may require some additional consideration that isn\u2019t covered here."}),"\n",(0,t.jsx)(n.h2,{id:"low-level-vs-high-level-hosting-solutions",children:"Low-level vs high-level hosting solutions"}),"\n",(0,t.jsx)(n.p,{children:"Hosting microfrontends can be accomplished with lower-level cloud services (AWS, GCP, Azure, etc) or via microfrontend-specific cloud hosting solutions such as Baseplate Cloud and Zephyr Cloud. Lower-level services may be more affordable but require much more initial setup and ongoing maintenance. Higher-level microfrontend hosting solutions provide targeted features to streamline the hosting and development process."}),"\n",(0,t.jsx)(n.p,{children:"Companies who wish for sensible defaults and a straightforward implementation path may choose higher-level hosting solutions to save on DevOps and system admin costs. The additional built-in features of higher-level hosting solutions often reduce implementation time for companies migrating to or starting with microfrontends."}),"\n",(0,t.jsx)(n.h2,{id:"solution-comparison",children:"Solution comparison"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.a,{href:"https://baseplate.cloud",children:"Baseplate Cloud"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.a,{href:"https://zephyr-cloud.io/",children:"Zephyr Cloud"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.a,{href:"https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/",children:"S3 + Cloudfront"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.a,{href:"https://cloud.google.com/cdn/docs/overview",children:"GCP Storage + Cloud CDN"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/cdn/cdn-create-a-storage-account-with-cdn",children:"Azure Storage + CDN"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Global availability"}),(0,t.jsx)(n.td,{children:"\u2713 (via Cloudflare)"}),(0,t.jsx)(n.td,{children:"\u2713 (Cloudflare / Netlify)"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Web app hosting ",(0,t.jsx)("sup",{children:"1"})]}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Environments support ",(0,t.jsx)("sup",{children:"2"})]}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Autogenerated CI pipelines ",(0,t.jsx)("sup",{children:"3"})]}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Automated microfrontend creation"}),(0,t.jsx)(n.td,{children:"\u2713 (via API and CLI)"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Custom domains"}),(0,t.jsx)(n.td,{children:"\u2713 (via DNS records)"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Route / layout management ",(0,t.jsx)("sup",{children:"4"})]}),(0,t.jsxs)(n.td,{children:["\u2713 (",(0,t.jsx)(n.a,{href:"/docs/layout-definition",children:"single-spa-layout template"}),")"]}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Self-owned assets storage ",(0,t.jsx)("sup",{children:"5"})]}),(0,t.jsx)(n.td,{children:"\u2713 (optional bring-your-own-s3-bucket)"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Edge-side HTML rendering optimizations ",(0,t.jsx)("sup",{children:"6"})]}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Service discovery ",(0,t.jsx)("sup",{children:"7"})]}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CORS / CSP / Cache Control"}),(0,t.jsx)(n.td,{children:"\u2713 (sensible defaults, fully customizable)"}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Usage metrics"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Full audit trail ",(0,t.jsx)("sup",{children:"8"})]}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Permissions management"}),(0,t.jsx)(n.td,{children:"\u2713 (comprehensive, including microfrontend ownership)"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Shared dependency management ",(0,t.jsx)("sup",{children:"9"})]}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"}),(0,t.jsx)(n.td,{children:"(manual)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Server rendering support"}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Microfrontend marketplace ",(0,t.jsx)("sup",{children:"10"})]}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Rolling deployments ",(0,t.jsx)("sup",{children:"11"})]}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"(planned)"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Web apps hosting"})," refers to hosting the parent/root HTML file that initializes the microfrontends necessary for client-side rendering."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Environment support"})," refers to hosting each microfrontend and web app on both internal test environments and live production environments. CI/CD Pipelines are configured to deploy to environments sequentially."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Auto-generated CI pipelines"})," refers to generating configuration files for ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows",children:"Github workflow"}),", ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/products/devops/pipelines",children:"Azure Pipelines"}),", ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/",children:"Gitlab CI"})," and other CI/CD tools."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Route / layout management"})," refers to managing the in-browser URL routes and DOM layout for microfrontends."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Self-owned assets storage"})," refers to JS, CSS, HTML, font, and image files being stored within a bucket owned by the company implementing microfrontends, rather than by cloud hosting service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Edge-side HTML rendering optimizations"})," refers to dynamically changing the HTML file for a web app via code that runs in ",(0,t.jsx)(n.a,{href:"https://www.macrometa.com/articles/what-is-edge-side-rendering",children:"edge locations"}),". Since edge locations are physically closer to most users than an origin server, this provides maximum performance beneifts. Performance benefits include inlining import maps, ",(0,t.jsx)(n.code,{children:"<link rel=preload>"}),", and ",(0,t.jsx)(n.code,{children:"<script>"})," elements so that the browser begins downloading the necessary resources for the current URL as quickly as possible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Service discovery"})," refers to all available microfrontends easily cross-communicating with each other. This is often done via ",(0,t.jsx)(n.a,{href:"https://github.com/WICG/import-maps",children:"import maps"})," or other manifest files."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Full audit trail"})," refers to logs for all deployments, infrastructure changes, and configuration changes within the microfrontends system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Shared dependency management"})," refers to externalizing or federating shared npm packages between microfrontends, to improve performance by only downloading and executing the code for them once within a web page."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Microfrontend marketplace"})," refers to purchasing or installing pre-made microfrontends into a company's system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Rolling deployments"})," refers to introducing new code changes to a microfrontend to only a fraction of the userbase, to minimize impact of releasing bad code."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-baseplate-cloud",children:"1. Baseplate Cloud"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://baseplate.cloud/",children:"Baseplate Cloud"})," tops the list for its ease of use and specific focus on single-spa hosting. Because it was made by the creator of single-spa, Baseplate's features have been informed by years of microfrontend and single-spa consultancies, making it the easiest microfrontend hosting choice for single-spa. Everything about the product simplifies and automates as much of the complexity as possible, and it\u2019s hard to find advantages in other solutions that beat this fact. Baseplate will probably be the best choice for any company that is prioritizing a streamlined cloud hosting experience."]}),"\n",(0,t.jsx)(n.p,{children:"Baseplate's feature set automates the job functions of multiple software developers and frees up a lot of development resources without increasing the size of the development team. This easily offsets the cost of Baseplate's services."}),"\n",(0,t.jsx)(n.p,{children:"Baseplate supports the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Web apps hosting"}),"\n",(0,t.jsx)(n.li,{children:"Custom domains for web apps and static assets"}),"\n",(0,t.jsx)(n.li,{children:"Unlimited deployable environments"}),"\n",(0,t.jsx)(n.li,{children:"Unlimited microfrontends"}),"\n",(0,t.jsx)(n.li,{children:"Autogenerated CI/CD pipelines"}),"\n",(0,t.jsx)(n.li,{children:"Full audit trail"}),"\n",(0,t.jsx)(n.li,{children:"Microfrontend-specific usage metrics"}),"\n",(0,t.jsx)(n.li,{children:"CORS, CSP, and Cache-Control configuration"}),"\n",(0,t.jsx)(n.li,{children:"Edge-side performance optimizations"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Also of note, ",(0,t.jsx)(n.a,{href:"https://baseplate.cloud/docs/cdn/assets",children:"Baseplate CDN"})," is a source-available ",(0,t.jsx)(n.a,{href:"https://developers.cloudflare.com/workers/",children:"Cloudflare worker"})," designed for maximum performance and best practices. It is globally available at all ",(0,t.jsx)(n.a,{href:"https://www.cloudflare.com/network/",children:"Cloudflare edge locations"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"2-zephyr-cloud",children:"2. Zephyr Cloud"}),"\n",(0,t.jsxs)(n.p,{children:["From the creators of Module Federation, ",(0,t.jsx)(n.a,{href:"https://zephyr-cloud.io/",children:"Zephyr Cloud"})," is the premier hosting solution for module-federation-based microfrontends. It is currently in closed alpha with little publicly documented about its features."]}),"\n",(0,t.jsx)(n.h2,{id:"3-aws-s3--cloudfront",children:"3. AWS S3 + Cloudfront"}),"\n",(0,t.jsxs)(n.p,{children:["Amazon Web Services (AWS) offers the low-level cloud services necessary for companies to set up a microfrontends hosting solution. The most common microfrontends hosting solution within AWS often involves a ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview.html",children:"Cloudflare distribution"})," that acts as a public ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Content_delivery_network",children:"CDN"}),", with a private ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"S3 bucket"})," as the origin containing all static web files (Javascript, CSS, HTML) needed."]}),"\n",(0,t.jsx)(n.p,{children:"The advantage of using lower-level cloud hosting services is their initial lower costs\u2014however, that comes at the expense of increased setup and maintenance complexity compared to microfrontend-specific cloud hosting solutions."}),"\n",(0,t.jsx)(n.p,{children:"Implementation details will vary from company to company. It's common for each microfrontend's files to be stored within a (virtual) folder within the s3 bucket and the manifest or import map listing all microfrontends made available in a JSON file. Web apps using the microfrontends may have their own S3 bucket or be within the same S3 bucket."}),"\n",(0,t.jsx)(n.h2,{id:"4-gcp-storage--cloud-cdn",children:"4. GCP Storage + Cloud CDN"}),"\n",(0,t.jsxs)(n.p,{children:["Google Cloud Platform provides equivalent low-level cloud services to AWS. The same technical details that apply to AWS S3 + Cloudfront also apply to ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/storage?hl=en",children:"GCP Cloud Storage"})," and ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/cdn/docs/overview",children:"GCP Cloud CDN"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"5-azure-storage--cdn",children:"5. Azure Storage + CDN"}),"\n",(0,t.jsxs)(n.p,{children:["Azure Storage provides equivalent low-level cloud services to AWS. The same technical details that apply to AWS S3 + Cloudfront also apply to ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/products/category/storage",children:"Azure Storage"})," and ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/products/cdn",children:"GCP Cloud CDN"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);