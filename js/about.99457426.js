"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[443],{357:function(A,g,C){C.r(g),C.d(g,{default:function(){return AA}});var I=C(252);const t={class:"container mx-auto"},e={class:"container mx-auto"};function n(A,g,C,n,i,r){const o=(0,I.up)("AboutMe"),a=(0,I.up)("AboutCounter"),s=(0,I.up)("AboutClients");return(0,I.wg)(),(0,I.iD)("div",null,[(0,I._)("div",t,[(0,I.Wm)(o)]),(0,I.Wm)(a),(0,I._)("div",e,[(0,I.Wm)(s)])])}var i=C(577),r=C.p+"img/profile.52f48258.jpeg";const o={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},a=(0,I._)("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[(0,I._)("img",{src:r,class:"rounded-xl w-96",alt:""})],-1),s={class:"w-full sm:w-3/4 text-left"};function u(A,g,C,t,e,n){return(0,I.wg)(),(0,I.iD)("div",o,[a,(0,I._)("div",s,[((0,I.wg)(!0),(0,I.iD)(I.HY,null,(0,I.Ko)(t.bios,(A=>((0,I.wg)(),(0,I.iD)("p",{key:A.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},(0,i.zw)(A.bio),1)))),128))])])}var m={setup(){return{bios:[{id:1,bio:"I'm a seasoned Fullstack Engineer with over 12 years of experience in many industries such as oil and gas, broadcast media, payment, and e-commerce. I have a proven track record in designing, testing, and maintaining complex software systems. My expertise spans across multiple tools and technologies, including Elasticsearch, Golang, Kafka, JavaScript, Python, PostgreSQL, AWS, Docker, and GCP."},{id:2,bio:"What sets me apart is not only my extensive experience in back-end and infrastructure development but also my good knowledge in front-end and mobile development. This well-rounded skill set allows me to contribute effectively throughout the entire software development lifecycle."},{id:3,bio:"I thrive in Agile environments, where I have successfully managed projects and collaborated as part of highly productive teams. I am comfortable working in fast-paced, dynamic settings, and I have a strong focus on delivering high-quality results within strict deadlines."},{id:4,bio:"I am passionate about tackling new challenges and driving innovation. With my strong problem-solving abilities and dedication to continuous learning."}]}}},l=C(744);const d=(0,l.Z)(m,[["render",u]]);var c=d;const h={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"},p={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"},Q={class:"mb-20 sm:mb-0"},E={class:"block text-md text-ternary-dark dark:text-ternary-light"},b={class:"mb-20 sm:mb-0"},f={class:"block text-md text-ternary-dark dark:text-ternary-light"},w={class:"mb-20 sm:mb-0"},y={class:"block text-md text-ternary-dark dark:text-ternary-light"},v={class:"mb-20 sm:mb-0"},k={class:"block text-md text-ternary-dark dark:text-ternary-light"};function B(A,g,C,t,e,n){const r=(0,I.up)("counter");return(0,I.wg)(),(0,I.iD)("div",h,[(0,I._)("div",p,[(0,I._)("div",Q,[(0,I.Wm)(r,{ref:"counter",startAmount:0,endAmount:12,duration:1,autoinit:!0,class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2","aria-label":"About Status Counter"},null,512),(0,I._)("span",E,(0,i.zw)(A.experienceTitle),1)]),(0,I._)("div",b,[(0,I.Wm)(r,{ref:"counter",startAmount:0,endAmount:6,duration:1,suffix:"",autoinit:!0,class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,I._)("span",f,(0,i.zw)(A.awsTitle),1)]),(0,I._)("div",w,[(0,I.Wm)(r,{ref:"counter",startAmount:0,endAmount:92,duration:1,suffix:"%",autoinit:!0,class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,I._)("span",y,(0,i.zw)(A.feedbackTitle),1)]),(0,I._)("div",v,[(0,I.Wm)(r,{ref:"counter",startAmount:0,endAmount:this.projectsCompleted,duration:1,autoinit:!0,class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,8,["endAmount"]),(0,I._)("span",k,(0,i.zw)(A.projectsTitle),1)])])])}var x=(0,I.aZ)({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(A){return A>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(A){return A>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=1e3*this.duration,this.remaining=1e3*this.duration,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const A=/(\d+)(\d{3})/;let g=this.currentAmount.toFixed(this.decimals);g+="";let C=g.split("."),I=C[0],t=C.length>1?this.decimalSeparator+C[1]:"",e=!isNaN(parseFloat(this.separator));if(this.separator&&!e)while(A.test(I))I=I.replace(A,"$1"+this.separator+"$2");return I+t}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=1e3*this.duration,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(A){this.timestamp=A,this.startTimestamp||(this.startTimestamp=A);let g=A-this.startTimestamp;this.remaining=this.currentDuration-g,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(g/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(g/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),g<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout((()=>{this.$emit("finished")}),1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function S(A,g,C,t,e,n){return(0,I.wg)(),(0,I.j4)("span",null,(0,i.zw)(A.displayedAmount),1)}x.render=S;var M=(()=>{const A=x;return A.install=g=>{g.component("Vue3Autocounter",A)},A})(),Z=M;const P=[{id:1,name:"STI",completedProjects:1},{id:2,name:"Marinha",completedProjects:1},{id:3,name:"globo.com",completedProjects:6},{id:4,name:"M4U",completedProjects:8},{id:5,name:"OLX",completedProjects:9},{id:6,name:"Route",completedProjects:7},{id:7,name:"Buzzer",completedProjects:3},{id:8,name:"Superhuman",completedProjects:4}];var U=P,D=C(776),j={components:{counter:Z},data:()=>({experienceTitle:"Years of experience",awsTitle:"AWS years of experience",feedbackTitle:"Positive feedback",projectsTitle:"Projects completed",projectsCompleted:U.reduce(((A,{completedProjects:g})=>A+g),0)+D.Z.length})};const T=(0,l.Z)(j,[["render",B]]);var W=T;const F={class:"mt-10 sm:mt-20"},J={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},Y={class:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function K(A,g,C,t,e,n){const r=(0,I.up)("AboutClientSingle");return(0,I.wg)(),(0,I.iD)("div",F,[(0,I._)("p",J,(0,i.zw)(A.clientsHeading),1),(0,I._)("div",Y,[((0,I.wg)(!0),(0,I.iD)(I.HY,null,(0,I.Ko)(A.clients,(A=>((0,I.wg)(),(0,I.j4)(r,{key:A.id,client:A},null,8,["client"])))),128))])])}const R=["src","alt"];function L(A,g,C,t,e,n){return(0,I.wg)(),(0,I.iD)("div",null,[(0,I._)("img",{src:C.client.img,alt:C.client.title,class:"w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"},null,8,R)])}var z={props:["client"]};const G=(0,l.Z)(z,[["render",L]]);var N=G,O={components:{AboutClientSingle:N},data:()=>({clientsHeading:"Some of the brands I have worked with",clients:[{id:1,title:"Superhuman",img:C(706)},{id:2,title:"Buzzer",img:C(988)},{id:3,title:"Jusbrasil",img:C(184)},{id:4,title:"Route",img:C(863)},{id:5,title:"OLX",img:C(395)},{id:6,title:"M4U",img:C(392)},{id:7,title:"Globo.com",img:C(447)},{id:7,title:"PUMA",img:C(342)}]})};const X=(0,l.Z)(O,[["render",K]]);var V=X,H=C(508),q=C.n(H),_={name:"About",components:{AboutMe:c,AboutCounter:W,AboutClients:V},data:()=>({}),mounted(){q().replace()},updated(){q().replace()},methods:{}};const $=(0,l.Z)(_,[["render",n]]);var AA=$},988:function(A,g,C){A.exports=C.p+"img/buzzer_gray.cd316870.png"},447:function(A,g,C){A.exports=C.p+"img/globocom_gray.801d0d6d.jpeg"},184:function(A,g,C){A.exports=C.p+"img/jusbrasil_gray.9eb2b2c4.png"},392:function(A,g,C){A.exports=C.p+"img/m4u_gray.34bd4102.png"},342:function(A,g,C){A.exports=C.p+"img/mar_mil_gray.98e10c73.jpeg"},395:function(A,g,C){A.exports=C.p+"img/olx_gray.de5680e6.png"},863:function(A,g,C){A.exports=C.p+"img/route_gray.d8baba87.jpeg"},706:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAHCBAMAAABF/hpQAAAAw3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBbEsMgCPz3FD0Crygexzw60xv0+IVAZmLbdVw2oBukHO/XszwchFJkaVp7rWCQLp2GCYXAOBlBTj6hApzZKV82SunRj3BeqBHxyueFK+IwtdyMdMvCOhe6RCT9MqII7B253tOopxFTFDANRjwLatd2f8J6wAyNXZxE57Z/vptNb1/sP0x0MDIYM0s0wL658LACGgOrHfTluhkLU5rZQP7N6UL5ADQ4WUeeEUIrAAABg2lDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV/TikUrDnYQcchQneyiIo61CkWoEGqFVh1MLv2CJg1Jiouj4Fpw8GOx6uDirKuDqyAIfoC4ujgpukiJ/0sKLWI8OO7Hu3uPu3eA0KwyzQolAE23zUwqKebyq2LvK/oRRhAhxGRmGXOSlIbv+LpHgK93cZ7lf+7PMaAWLAYEROIEM0ybeIN4ZtM2OO8TR1lZVonPiSdMuiDxI9cVj984l1wWeGbUzGbmiaPEYqmLlS5mZVMjniaOqZpO+ULOY5XzFmetWmfte/IXRgr6yjLXaY4ihUUsQYIIBXVUUIWNOK06KRYytJ/08Y+4folcCrkqYORYQA0aZNcP/ge/u7WKU5NeUiQJ9Lw4zscY0LsLtBqO833sOK0TIPgMXOkdf60JzH6S3uhosSNgcBu4uO5oyh5wuQMMPxmyKbtSkKZQLALvZ/RNeWDoFuhb83pr7+P0AchSV+kb4OAQGC9R9rrPu8Pdvf17pt3fDzYGco6U3u9lAAANemlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo1MTAxZjliMS0zMTMzLTQwYzgtYTlhMy1iMDFhNDZkOWIxYWIiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWE5MDc2YjgtZjE4NC00ZjE3LWJlNjQtNWUzZTMwOWU0Yzg5IgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTNlMjExYTMtYTRkOC00MzU3LWFhZjQtNWY4M2FmYmY3ZDY5IgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJNYWMgT1MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjk5NDEyODYzODE2NDU2IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzQiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMzoxMTowOFQwMDowNzo0Mi0wMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjM6MTE6MDhUMDA6MDc6NDItMDM6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTcyNjJkNS1lODUxLTQ4ZDQtODJhNi00NmQ1NDU4OGYwYjEiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTWFjIE9TKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMy0xMS0wOFQwMDowNzo0My0wMzowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5lfPw/AAAAGFBMVEW8vLyYmJh0dHTo6Og+Pj7Pz88AAAD///+yWeBkAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cLCAMHK5RKSboAAAv4SURBVHja7d1Nl5rIHoDxnkxGt3Pu7Wtvp50Mrm+OR7d5MfR+TqZ7G5WmtyooX38ERQuo+lfRAiY5z7NLH2MLPygpQPsmoR+8G1YBhAQhQQghQUgQEoQQEoQEIUEIIUFIEBKEEBKEBCFBCCFBSBAShBAShAQhQQghQUgQEoQQEoQEIUEIIUFIEBKEEBKEBCFBCCFBSBAShBAShAQhQQghQUgQEoQQEoQEIUEIIUFIEBKEEBKEBCFBCCFBSBAShBAShAQhQQghQUgQEoQQEoQEIUEIIUFIEBKEEBKEBCFBCCFBSBAShBAShAQhQQghQUgQEoQQEoQEIUEIIUFIEBKEEBKEBCFBCCFBSBAShBAShAQhQQghQUgQEoQQEoQEIYQEIUFIEEJIEBKEBCGEBCFBSBBCSBAShAQhhAQhQUgQQkgQEoQEIYQEIUFIEEJIEBKEBCGEBCFBSBBCSBAShAQhhAQhQUgQQkgQEoQEIYQEIUFIEEJIEBKEBCGEBCFBSBBCSBAShAQhhAQhQUgQQkgQEoQEIYQEIUFIEEJIEBKEBCGEBCFBSBBCSBAShAQhhPQjEEZvhrPhH0+smfaLbm5+a4Fw7IdZHwXEzWz2qfyzteZnx2bnhvfitvF1Vu1B+8i1+pBPw18Ty9OWnyWezT7oH7zdP6HLz47dzmafNT+OzatDedB+PVsftF/Sj5UfvpvNnkyEb8O84L/Srw4qrJqfHQsLfZyaX+5jWO1FvxWVHvWpL6yFXvVZdmE41z94pVmvK/O69vTLPTCvjnOT/dP2bQ/a6B7kqz8rEr5XV8ufrRCGi6cWCMPg7mqEYfVXb0MXwvT/PrgQLt0Jt35htYxaIRSW7QJCybBtwqV2iLQSRunL/uZCGLgTllZh8NQKYfihDcJwcTXCwPGnumVwe9TIlXCbPef/9tvHL760Vi4lDO/aIDSPSW0TVpZn64Szy1711IVw7ko4TtWOT/m38Pz1Cfv5UfR/fN0rUghf3A6kC2/yq1/eieusdcKlZhy1Ew7Ed6vixvrkSOip6+W9eaB+NWG6gWbL3G+UMN/iRtciDFx+mGje0HzdG6mO8MWNMH17fS4cnY6aJ0yidD/83DRh8lU4NGidsDSSbkMXwv2TBhPpLVwlDNwIy6ulFyQtECZr85vsBYTpUgVXI1xWx1Er4f5R8419cr/RzQ5MhGWZ6HMrhNl7wLRxwrH5MKl9wsD6M/3CboVjO2XFVkYYE+GjwyylCcLY+LovIYzMx6QtE/ql5UldZnZCL/1fvnVyv1/SuVfe6E2EPdcVeCGheWVfQpiukperEN6XRtJ0E/3bShhlLD3rbpMSxuXDh2sTpou9bJ7QPIi0TDgqvQ3vf7TYWAk32RFB7PK4eVQel02EXleExk3vIsLYqNI24aQwkqbj6IOdZpdtx+vqnE9DmC5BYaw2EQ66Ity1Rbi4DuG6MJKmo97UvhcODu8m1jPdGeG6dEAjDKTfuiJc/EyExQmNlz61nfC4AAPb5D4jTH+DekAjHJEuOiGMfzZCdSTNxlH7e9z6+ADr5P5AGBf3VhPhzuUKJIQawpUyko6z/cW6F+bv3Bvbme4DYVQ8HyKdnXnuaCCdt0J4pSPSwrX7bBy1E+avKbJN7g+EpQMaE+E6dNwNv8/DmUfjBtg+4e60gg/jqH0g9fP/4FuW+UhY3L+MVyp84TLv9z+puNrUfnSAW56PR+174fY0fj6ar72phBmOnbBnue2pwan9Sysn2EbXIjyPpN5ppwnsE3vTytQR7tQDGiPh2n6PWVMn2EaNE8bmd4EOCPPzvsdx1AozOR3/rCzvXjnhVj2gMd87MzjewnA/bZNwY3zRlxB6V7vYNErOI+n4OEDa9kLvtEtFljPdOWGG07cSrk43Pol7YgMXmxITYalvroRj+ZKvpkYJ8y3IO74KG6FyXm0gzwNOhOrdiE73kUpviZdf8p03TbiW7qrqgvAwkm7D8z8Dh4m9eK6qRKieAxII1XuB/2qJULgB9tWE733pLsQuCA8jaZwfaFr2QnUOa5ncnwkn5xUnESb/99u4m1tZ22+FO+/qEQ7z7n35XrAuCA+34OfjqI1QvaIQybexnQm3obpDmgmT6Pa0kP3mCVfZ7YKmsb8eoRtJV4TpDvh7qPwrcJnYyxPaImF2EPHkQLjXvrXcH12fMN9fZqHurkiVMCh+rumDM+FiKhGWnnbmN06YXZY9PU7eC4vPJ0/uFcL4dEBjIzwjNnYTYrEviZmwxqTC9cM2XUwqTjOyZxfC4hl5+TNqCuH5gMZOmL8ltnNDvnmTez2hOAnqhjBWt3p5IJ0ULhKuxDPdKuEk/wUuhEnk1bshP3b/cNq0ecIHp6sC7RJmH1QKpi57oVcc4MTJvUq4Cs8nTO2Ehw+qPZie9fWEH4V1XY/w5lhoOVFcn7D/GsLsqOk5cSCMSocDA+l2CZUwm5A9ORNm5zuWdQgXdsLgk/iR6nqESeVArS3CjRPhRjl6EAfSwoxon2d58LzwtvniThgZt27dEsmEfTeY1xHGoeX+k1qEkZ4wcBgTlUeJe+FOM8WZOhEmx7sRHQnNnxdfaTb7nXkwaJsw8i0nJGsRJpoj8diN8PE84RUJBxrCkRvh4+GhroQ708vQfRKgZ94T2ibMl6shQs3BhXAaUyXcnNeKOJD6GsKlG+HxbkRXQvPL0Kwy4RRD64Rry2fW6xFqlmRifv7CweXMZeg9Xw9y+ph5kTA5fLzCldD8Jq6530M4MG6dsHyX5WWEmuND4WbPAuE/ToSx9nyfI+HhbsQahIFxKefVg4C7qxGO5alhPcJJdbGF7dPTj+HSQFq9T0v6jFqJ8PDxissH0upSSldM2ifcil94UZMwriyKdPrEQCjthV51gxC2kRJh9sZ/Z7wJ8c6VsHqfykR4ye0TFm5KuJRwXdmlY2H7rE+om7X0xGsy8/LLezbekL+orNC5eSmX5c3o2xUJ5alhPcKkMh8eCPt4/YHUMKsOHAmPnyHWEkblbzEQvo6hPBPbSG9GHRDKU8OahOXP1G6l7aP+XjjR/GrhM2oVwrGZcFxa1SuBpVe6qC8OZB0QylPDmoTj0vUw8bnrE2o/A2he1xXCyEzoKSfa81feF9ag8tiNeDjRBaE4NaxJuCquoXVpvVw6kGo3COMHn6uEx5sQdIRfi1eC1hJL9uUx52sgvnhQ3wWhODWsSZhtzKcVkX3X0XPS2F641r5Q82fUqoQb83uhp958mLEspZV9us6aPVSYWndCOJaH/VqEsXIbwNYLxSuytQn11wPMB70b7TewSZ9s2v+CP25ubm79ULyEc/yCo/v9Q9+FofyptlqE5ZtcZl/cCKWpYV3C6HASc7hfuKHlPoP6A2lPu67Mk3sN4c5ImB/rnPosrO2vpe+9nDZEWOnZ8ch80NBnKs5Dlf2bG1+zFxpm8b7wnY9z3f5jODvz1pkl31Kt95x2RihMDWsTli4HfUmaI9wa1sZAuDg7100ITCfYbh23vaR0vl26m6IjQmFqWJ+wsIEupklzA6nJdif8h7lu6Y3nSN+47VjZW6fvJtgRYbZpjhoiTFaem2DtvXBi+MVr01rSEcqnuQ+3W8tfV56PCflD/5IfNxwOpx0QboxTw1p/5CDfD48DUvBBfu23s5luTW1Mf+Tg1vBnG6L9kZt2A1zrXulY+CMHKeKb/Tp3+xMY2UN/1r83s00X7ven7/+F8gd/fvgghJAgJAghJAgJQoIQQoKQICQIISQICUKCEEKCkCAkCCEkCAlCghBCgpAgJAghJAgJQoIQQoKQICQIISQICUKCEEKCkCAkCCEkCAlCghBCgpAgJAghJAgJQoIQQoKQICQIISQICUKCEEKCkCAkCCEkCAlCghBCgpAgJAghJAgJQoIQQoKQICQIISQICUKCEEKCkCAkCCEkCAlCghBCgpAgJAghJAgJQoIQQoKQICQIISQICUKCEEKCkCAkCCEkCAlCghBCgpAgJAghJAgJQoIQQoKQIISQVQAhQUgQQkgQEoQEIYQEIUFIEEJIEBKEBCGEBCFBSBBCSBAShAQhhAQhQUgQQkgQEoQEIYQEIUFIEEJIEBKEVKd/ARbeduqHMbjbAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=about.99457426.js.map