import{r as e,o as a,c as r,a as n,b as o,F as t,d as i,e as l}from"./app.8e9d86b7.js";const s={},d=i('<h1 id="development-standards" tabindex="-1"><a class="header-anchor" href="#development-standards" aria-hidden="true">#</a> Development Standards</h1><h2 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h2><h3 id="version-control" tabindex="-1"><a class="header-anchor" href="#version-control" aria-hidden="true">#</a> Version Control</h3><p>Project X&#39;s code is hosted on GitHub:</p>',4),c=l("Xray Core "),h={href:"https://github.com/XTLS/Xray-core",target:"_blank",rel:"noopener noreferrer"},u=l("xray-core"),p=l("Installation script "),f={href:"https://github.com/XTLS/Xray-install",target:"_blank",rel:"noopener noreferrer"},m=l("Xray-install"),b=l("Configuration template "),g={href:"https://github.com/XTLS/Xray-examples",target:"_blank",rel:"noopener noreferrer"},y=l("Xray-examples"),v=l("Xray documentation "),x={href:"https://github.com/XTLS/Xray-docs-next",target:"_blank",rel:"noopener noreferrer"},w=l("Xray-docs-next"),P=l("You can use "),k={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},X=l("Git"),C=l(" to get the code."),I=n("h3",{id:"branch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#branch","aria-hidden":"true"},"#"),l(" Branch")],-1),T=n("ul",null,[n("li",null,"The main branch is the backbone of this project."),n("li",null,"The main branch is also the release branch of this project."),n("li",null,"It is necessary to ensure that main can be compiled and used normally at any time."),n("li",null,"If you need to develop new features, please create a new branch for development. After development and sufficient testing, merge it back to the main branch."),n("li",null,"Please delete branches that have been merged into the main branch and are no longer necessary.")],-1),j=n("h3",{id:"release",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#release","aria-hidden":"true"},"#"),l(" Release")],-1),_=l(" (Note: this is not translatable as it is a technical tag) "),G=n("ul",null,[n("li",null,[l("Create two release channels: one for the beta version and another for the stable version. "),n("ul",null,[n("li",null,"The beta version, also known as the daily build, is mainly used for specific testing, experimentation, and instant feedback and improvement."),n("li",null,"The stable version, updated regularly (e.g. monthly), merges stable modifications and releases them.")])])],-1),R=n("h3",{id:"citing-other-projects",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#citing-other-projects","aria-hidden":"true"},"#"),l(" Citing other projects")],-1),F=l("Golang "),S=l("It is recommended to use the Golang standard library and libraries under "),q={href:"https://pkg.go.dev/search?q=golang.org%2Fx",target:"_blank",rel:"noopener noreferrer"},B=l("golang.org/x/"),L=l(" for product code;"),O=n("li",null,"If you need to reference other projects, please create an issue for discussion beforehand;",-1),A=n("li",null,[l("Other "),n("ul",null,[n("li",null,"Tools that do not violate the agreement of both parties and are helpful to the project can be used.")])],-1),M=n("h2",{id:"development-process",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#development-process","aria-hidden":"true"},"#"),l(" Development Process")],-1),U=n("h3",{id:"before-writing-code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#before-writing-code","aria-hidden":"true"},"#"),l(" Before Writing Code")],-1),z=l("If you encounter any issues or have any ideas for the project, please create an "),D={href:"https://github.com/XTLS/Xray-core/issues",target:"_blank",rel:"noopener noreferrer"},H=l("issue"),N=l(" for discussion to reduce redundant work and save time spent on coding."),W=n("h3",{id:"modify-the-code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#modify-the-code","aria-hidden":"true"},"#"),l(" Modify the code")],-1),E=l("Golang "),V=l("Please refer to "),Y={href:"https://golang.org/doc/effective_go.html",target:"_blank",rel:"noopener noreferrer"},J=l("Effective Go"),K=l(";"),Q=n("li",null,[l("Run "),n("code",null,"go generate core/format.go"),l(" before each push;")],-1),Z=n("li",null,[l("If you need to modify protobuf, such as adding new configuration items, please run: "),n("code",null,"go generate core/proto.go"),l(";")],-1),$=n("li",null,[l("It is recommended to pass the test before submitting a pull request: "),n("code",null,"go test ./..."),l(";")],-1),ee=n("li",null,"It is recommended to have more than 70% code coverage for newly added code before submitting pull requests.",-1),ae=n("li",null,[l("Other "),n("ul",null,[n("li",null,"Please pay attention to the readability of the code.")])],-1),re=i('<h3 id="pull-request" tabindex="-1"><a class="header-anchor" href="#pull-request" aria-hidden="true">#</a> Pull Request</h3><ul><li>Before submitting a PR, please run <code>git pull https://github.com/xray/xray-core.git</code> to ensure that the merge can proceed smoothly;</li><li>One PR only does one thing. If there are fixes for multiple bugs, please submit a PR for each bug;</li><li>Due to Golang&#39;s special requirements (Package path), the PR process for Go projects is different from other projects. The recommended process is as follows: <ol><li>Fork this project first and create your own <code>github.com/&lt;your_name&gt;/Xray-core.git</code> repository;</li><li>Clone your own Xray repository to your local machine: <code>git clone https://github.com/&lt;your_name&gt;/Xray-core.git</code>;</li><li>Create a new branch based on the <code>main</code> branch, for example <code>git branch issue24 main</code>;</li><li>Make changes on the new branch and commit the changes;</li><li>Before pushing the modified branch to your own repository, switch to the <code>main</code> branch, and run <code>git pull https://github.com/xray/xray-core.git</code> to pull the latest remote code;</li><li>If new remote code is obtained in the previous step, switch to the branch you created earlier and run <code>git rebase main</code> to perform branch merging. If there is a file conflict, you need to resolve the conflict;</li><li>After the previous step is completed, you can push the branch you created to your own repository: <code>git push -u origin your-branch</code></li><li>Finally, send a PR from your new pushed branch in your own repository to the <code>main</code> branch of <code>xtls/Xray-core</code>;</li><li>Please fully describe the purpose of this PR, including the problem solved, the new feature added, or the modifications made in the title and body of the PR;</li><li>Please be patient and wait for the developer&#39;s response.</li></ol></li></ul><h3 id="modifying-code" tabindex="-1"><a class="header-anchor" href="#modifying-code" aria-hidden="true">#</a> Modifying Code</h3><h4 id="functional-issue" tabindex="-1"><a class="header-anchor" href="#functional-issue" aria-hidden="true">#</a> Functional issue</h4><p>Please submit at least one test case to verify changes to existing functionality.</p><h4 id="performance-related" tabindex="-1"><a class="header-anchor" href="#performance-related" aria-hidden="true">#</a> Performance Related</h4><p>Please provide the necessary test data to demonstrate performance issues in existing code or performance improvements in new code.</p><h4 id="new-feature" tabindex="-1"><a class="header-anchor" href="#new-feature" aria-hidden="true">#</a> New Feature</h4><ul><li>If the new feature does not affect the existing functionality, please provide a toggle (such as a flag) that can be turned on/off, and keep the new feature disabled by default.</li><li>For major new features (such as adding a new protocol), please submit an issue for discussion before development.</li></ul><h4 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> Other</h4><p>It depends on the specific situation.</p><h2 id="xray-coding-guidelines" tabindex="-1"><a class="header-anchor" href="#xray-coding-guidelines" aria-hidden="true">#</a> Xray Coding Guidelines</h2><p>The following content is applicable to Golang code in Xray.</p><h3 id="code-structure" tabindex="-1"><a class="header-anchor" href="#code-structure" aria-hidden="true">#</a> Code Structure</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Xray-core\n├── app        // Application module\n│   ├── router // Router\n├── common     // Common code\n├── proxy      // Communication protocol\n│   ├── blackhole\n│   ├── dokodemo-door\n│   ├── freedom\n│   ├── socks\n│   ├── vmess\n├── transport  // Transport module\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="coding-standards" tabindex="-1"><a class="header-anchor" href="#coding-standards" aria-hidden="true">#</a> Coding Standards</h3><p>Basic practices are consistent with the recommendations of the official Golang, with a few exceptions. Written here to help everyone familiarize themselves with Golang.</p><h4 id="naming" tabindex="-1"><a class="header-anchor" href="#naming" aria-hidden="true">#</a> Naming</h4><ul><li>Use a single English word for file and directory names, such as hello.go; <ul><li>If not possible, use a hyphen for directories / underscore for files to connect two (or more) words, such as hello-world/hello_again.go;</li><li>Use _test.go to name test code files;</li></ul></li><li>Use PascalCase for types, such as ConnectionHandler; <ul><li>Do not force lowercase for abbreviations, i.e. HTML does not need to be written as Html;</li></ul></li><li>Use PascalCase for public member variables;</li><li>Use camelCase for private member variables, such as <code>privateAttribute</code>;</li><li>For easy refactoring, it is recommended to use PascalCase for all methods; <ul><li>Place completely private types in <code>internal</code>.</li></ul></li></ul><h4 id="content-organization" tabindex="-1"><a class="header-anchor" href="#content-organization" aria-hidden="true">#</a> Content Organization</h4><ul><li>A file contains a main type and its related private functions;</li><li>Testing-related files, such as Mock tools, should be placed in the testing subdirectory.</li></ul>',21);s.render=function(i,l){const s=e("OutboundLink"),ne=e("Badge");return a(),r(t,null,[d,n("ul",null,[n("li",null,[c,n("a",h,[u,o(s)])]),n("li",null,[p,n("a",f,[m,o(s)])]),n("li",null,[b,n("a",g,[y,o(s)])]),n("li",null,[v,n("a",x,[w,o(s)])])]),n("p",null,[P,n("a",k,[X,o(s)]),C]),I,T,j,o(ne,{text:"WIP",type:"warning"}),_,G,R,n("ul",null,[n("li",null,[F,n("ul",null,[n("li",null,[S,n("a",q,[B,o(s)]),L]),O])]),A]),M,U,n("p",null,[z,n("a",D,[H,o(s)]),N]),W,n("ul",null,[n("li",null,[E,n("ul",null,[n("li",null,[V,n("a",Y,[J,o(s)]),K]),Q,Z,$,ee])]),ae]),re],64)};export default s;
