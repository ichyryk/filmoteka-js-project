(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0wUG":function(e,t){window.addEventListener("scroll",(function(e){var t=document.getElementById("gototop"),n=scrollY;t.style.display=n>200?"block":"none"})),$(document).ready((function(){$(".pulse").on("click",(function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},1500,(function(){window.location.hash=t}))}}))}))},JNau:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var l,i,r=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",d=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="card">\r\n    <img src="https://image.tmdb.org/t/p/w500'+d(typeof(i=null!=(i=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?i:s)===c?i.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:3,column:45},end:{line:3,column:60}}}):i)+'" alt="'+d(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:s)===c?i.call(r,{name:"title",hash:{},data:o,loc:{start:{line:3,column:67},end:{line:3,column:76}}}):i)+'" data-id="'+d(typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:s)===c?i.call(r,{name:"id",hash:{},data:o,loc:{start:{line:3,column:87},end:{line:3,column:93}}}):i)+'"\r\n        data-genres='+d(typeof(i=null!=(i=u(n,"genresNames")||(null!=t?u(t,"genresNames"):t))?i:s)===c?i.call(r,{name:"genresNames",hash:{},data:o,loc:{start:{line:4,column:20},end:{line:4,column:35}}}):i)+" data-year="+d(typeof(i=null!=(i=u(n,"year")||(null!=t?u(t,"year"):t))?i:s)===c?i.call(r,{name:"year",hash:{},data:o,loc:{start:{line:4,column:46},end:{line:4,column:54}}}):i)+" data-rating="+d(typeof(i=null!=(i=u(n,"rating")||(null!=t?u(t,"rating"):t))?i:s)===c?i.call(r,{name:"rating",hash:{},data:o,loc:{start:{line:4,column:67},end:{line:4,column:77}}}):i)+" data-poster="+d(typeof(i=null!=(i=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?i:s)===c?i.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:90},end:{line:4,column:105}}}):i)+'>\r\n    <div class="card__text-content">\r\n        <h1 class="films__title">'+d(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:s)===c?i.call(r,{name:"title",hash:{},data:o,loc:{start:{line:6,column:33},end:{line:6,column:42}}}):i)+'</h1>\r\n        <p class="films__paragraph">\r\n            '+(null!=(l=u(n,"each").call(r,null!=t?u(t,"genresNames"):t,{name:"each",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o,loc:{start:{line:8,column:12},end:{line:8,column:52}}}))?l:"")+' | <span class="year">'+d(typeof(i=null!=(i=u(n,"year")||(null!=t?u(t,"year"):t))?i:s)===c?i.call(r,{name:"year",hash:{},data:o,loc:{start:{line:8,column:74},end:{line:8,column:82}}}):i)+'</span>\r\n            <span class="films__rating rating-position">'+d(typeof(i=null!=(i=u(n,"rating")||(null!=t?u(t,"rating"):t))?i:s)===c?i.call(r,{name:"rating",hash:{},data:o,loc:{start:{line:9,column:56},end:{line:9,column:66}}}):i)+"</span>\r\n        </p>\r\n    </div>\r\n</li>\r\n"},2:function(e,t,n,a,o){return e.escapeExpression(e.lambda(t,t))+" "},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:13,column:9}}}))?l:""},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("yjly"),n("JBxO"),n("FdtR"),n("QDHd");var a,o=n("s9S4"),l=n.n(o),i=((a={openTeam:document.querySelector(".footer__link"),filmsList:document.querySelector("#films-section"),dataContainer:document.querySelector("#dataContainer"),backdropClick:document.querySelector(".backdrop"),openModal:document.querySelector(".films"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".button-close"),spinnerInModal:document.querySelector(".spinnerInModal"),searchForm:document.querySelector("#search-form"),spinner:document.querySelector(".spinner")}).dataContainer=document.querySelector("#dataContainer"),a.home=document.querySelector("#home"),a.myLibrary=document.querySelector("#library"),a.homepage=document.querySelector(".nav__homePage"),a.libraryPage=document.querySelector(".header__buttons"),a.logo=document.querySelector("#logo"),a.header=document.querySelector(".header"),a.error=document.querySelector(".nav__error"),a.queue=document.querySelector("#queue"),a.watched=document.querySelector("#watched"),a.modal=document.querySelector(".modal"),a.paginator=document.querySelector("#pagination-container"),a.notification=document.querySelector(".notification"),a.theme=document.querySelector(".theme-switch__title"),a.remove=document.querySelector("#remove"),a),r="https://api.themoviedb.org/3/",s="8e2d6c50ec8673fce37d0988f16fea97",c={searchQuery:"batman",_movieId:321528,fetchTrendingMovies:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=8e2d6c50ec8673fce37d0988f16fea97&per_page=12").then((function(e){if(e.ok)return e.json();throw new Error("Error Fetching data")})).then((function(e){return e.results})).catch((function(e){console.log(e)}))},searchMovies:function(){return fetch("https://api.themoviedb.org/3/search/movie/?api_key=8e2d6c50ec8673fce37d0988f16fea97&query="+this.query).then((function(e){if(e.ok)return e.json();throw new Error("Error Fetching data")})).then((function(e){return e.results})).catch((function(e){console.log(e)}))},getFullInfo:function(){return fetch(r+"movie/"+this.movieId+"?api_key="+s).then((function(e){if(e.ok)return e.json();throw new Error("Error Fetching data")})).catch((function(e){console.log(e)}))},get query(){return this.searchQuery},set query(e){this.searchQuery=e},get movieId(){return this._movieId},set movieId(e){this._movieId=e}},d=(n("Xlt+"),n("DQsX"),n("Muwe"),n("aZFp"),n("JNau")),u=n.n(d);function m(e){var t=u()(e);i.filmsList.insertAdjacentHTML("beforeend",t)}function h(){i.filmsList.innerHTML=""}function p(){i.spinner.classList.remove("spinner-is-hidden")}function y(){i.spinner.classList.add("spinner-is-hidden")}function v(){i.spinnerInModal.classList.add("spinner-is-hidden")}n("lmye"),n("WB5j"),n("uXbS"),n("hi3g"),n("IlJM"),n("D/wG");var f=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var g=function(e){var t=e.map((function(e){return f.find((function(t){return t.id===e}))}));return t=[].concat(t.map((function(e){return e.name})))};var b=function(e){var t=e.map((function(e){var t=e.title,n=e.id,a=e.poster_path,o=e.genre_ids,l=e.release_date,i=e.vote_average,r=l?l.slice(0,4):null,s=String(i).padEnd(3,".0");return{id:n,poster_path:a,genresNames:g(o),year:r,rating:s,title:t}}));return 0===t.length?void i.error.classList.remove("visually-hidden"):t},_={paginationTrendingMovies:function(){$("#pagination-container").pagination({dataSource:"https://api.themoviedb.org/3/trending/movie/day?api_key=8e2d6c50ec8673fce37d0988f16fea97&per_page=12",locator:"results",prevText:"&#8592;",nextText:"&#8594;",pageSize:20,alias:{pageNumber:"page"},totalNumberLocator:function(e){return e.total_results},hideWhenLessThanOnePage:!0,ajax:{beforeSend:function(){h(),p()}},callback:function(e,t){var n=b(e);y(),m(n)}})},paginationSearchMovies:function(e){$("#pagination-container").pagination({dataSource:"https://api.themoviedb.org/3/search/movie/?api_key=8e2d6c50ec8673fce37d0988f16fea97&query="+e,locator:"results",prevText:"&#8592;",nextText:"&#8594;",pageSize:20,alias:{pageNumber:"page"},totalNumberLocator:function(e){return e.total_results},hideWhenLessThanOnePage:!0,ajax:{beforeSend:function(){h(),p()}},callback:function(e,t){var n=b(e);void 0===n&&_.paginationTrendingMovies(),y(),m(n)}})}};function L(e){i.libraryPage.classList.add("visually-hidden"),i.homepage.classList.remove("visually-hidden"),i.home.classList.add("current"),i.myLibrary.classList.remove("current"),i.error.classList.add("visually-hidden"),i.filmsList.innerHTML="",_.paginationTrendingMovies(),i.watched.removeEventListener("click",w),i.queue.removeEventListener("click",S),i.header.classList.remove("library"),i.paginator.classList.remove("visually-hidden"),i.notification.classList.add("visually-hidden")}function w(e){i.watched.classList.add("button--watched"),i.queue.classList.remove("button--watched"),k("watched")}function S(e){i.queue.classList.add("button--watched"),i.watched.classList.remove("button--watched"),k("queue")}function k(e){if(null===localStorage.getItem(""+e))return i.filmsList.innerHTML="",void i.notification.classList.remove("visually-hidden");i.filmsList.innerHTML="",i.notification.classList.add("visually-hidden"),function(e){for(var t=0;t<e.length;t+=1)e[t].genresNames=e[t].genresNames.split(",");var n=u()(e);i.filmsList.insertAdjacentHTML("beforeend",n)}(JSON.parse(localStorage.getItem(""+e)))}function q(e,t){for(var n=i.modal.querySelector("#add-to-"+t),a=JSON.parse(localStorage.getItem(t))||[],o=0;o<a.length;o+=1)if(a[o].title===e.title)return void(n.textContent="was added");a.push(e),n.textContent="Added to "+t,localStorage.setItem(t,JSON.stringify(a))}function M(e,t){for(var n=i.modal.querySelector("#remove"),a=JSON.parse(localStorage.getItem(t))||[],o=0;o<a.length;o+=1)if(a[o].title===e.title)return a.splice(o,1),localStorage.setItem(t,JSON.stringify(a)),n.textContent="removed",void(0===a.length&&localStorage.removeItem(t));n.textContent="Please add film to "+t,n.classList.add("visually-hidden");var l=i.modal.querySelector("#add-to-"+t);l.closest(".button__modal__container").classList.remove("visually-hidden"),l.classList.remove("visually-hidden")}window.onload=function(){i.libraryPage.classList.add("visually-hidden"),i.home.classList.add("current"),i.error.classList.add("visually-hidden"),_.paginationTrendingMovies(),i.notification.classList.add("visually-hidden")},i.myLibrary.addEventListener("click",(function(e){i.homepage.classList.add("visually-hidden"),i.libraryPage.classList.remove("visually-hidden"),i.header.classList.add("library"),i.myLibrary.classList.add("current"),i.home.classList.remove("current"),i.filmsList.innerHTML="",w(),i.watched.addEventListener("click",w),i.queue.addEventListener("click",S),i.paginator.classList.add("visually-hidden")})),i.home.addEventListener("click",L),i.logo.addEventListener("click",L);var E=function(e){i.modal.querySelector("#add-to-watched").addEventListener("click",(function(){q(e,"watched")})),i.modal.querySelector("#add-to-queue").addEventListener("click",(function(){q(e,"queue")})),i.modal.querySelector("#remove").addEventListener("click",(function(){"header library"===i.header.className&&("button button--watched"===i.watched.className?(M(e,"watched"),w()):"button button--watched"===i.queue.className&&(M(e,"queue"),S()))}))};var x=n("pd+p"),T=n.n(x),j=n("yIDU"),N=n.n(j),I=[{name:"Ilya",surname:"Miroshnichenko",photo:"https://i.ibb.co/NySDpV1/photo-2021-03-11-11-02-58.jpg",github:"https://github.com/iliyamiroshnichenko",position:"Team Leader"},{name:"Iryna",surname:"Zotovych",photo:"https://i.ibb.co/R9pwy9G/irynazotovych.jpg",github:"https://github.com/KapirkaZ",position:"Scrum Master"},{name:"Maksym",surname:"Yaryhin",photo:"https://i.ibb.co/DzGphF2/maksym.jpg",github:"https://github.com/myaryhin0201",position:"Developer"},{name:"Snizhana",surname:"Mykhaylova",photo:"https://i.ibb.co/KFLfjWV/snezhana.jpg",github:"https://github.com/Snizhana-Mykhaylova",position:"Developer"},{name:"Iryna",surname:"Chyryk",photo:"https://i.ibb.co/cTS4wqj/iryna.jpg",github:"https://github.com/ichyryk",position:"Developer"},{name:"Anton",surname:"Sannykov",photo:"https://avatars.githubusercontent.com/u/18445638?s=400&u=3e43f255ce088cca58a88ef4c1c4cb39b44aecc5&v=4",github:"https://github.com/AntonSann",position:"Developer"},{name:"Vitalii",surname:"Latka",photo:"https://i.ibb.co/dgRn1rb/vitalii.jpg",github:"https://github.com/vitaliilatka",position:"Developer"}];function D(){i.body.classList.remove("show-modal"),document.querySelector("html").style.overflowY="scroll",i.modal.innerHTML="",window.removeEventListener("keydown",P)}function P(e){"Escape"===e.code&&D()}function C(e){var t,n,a,o=l()(e);i.modal.insertAdjacentHTML("beforeend",o),t=i.modal.querySelector("#add-to-watched"),n=i.modal.querySelector("#add-to-queue"),a=i.modal.querySelector("#remove"),"header"===i.header.className?(t.classList.remove("visually-hidden"),n.classList.remove("visually-hidden"),a.classList.add("visually-hidden"),"visually-hidden"===a.className&&a.closest(".button__modal__container").classList.add("visually-hidden")):"header library"===i.header.className&&(a.classList.remove("visually-hidden"),"button button--watched"===i.watched.className?(t.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),"button button--watched visually-hidden"===t.className&&(t.closest(".button__modal__container").classList.add("visually-hidden"),a.style.marginLeft="15px")):"button button--watched"===i.queue.className&&(t.classList.remove("visually-hidden"),n.classList.add("visually-hidden"),"button button--modal visually-hidden"===n.className&&n.closest(".button__modal__container").classList.add("visually-hidden")))}i.openModal.addEventListener("click",(function(e){i.spinnerInModal.classList.remove("spinner-is-hidden");var t=e.target,n={title:t.alt,id:t.dataset.id,poster_path:t.dataset.poster,genresNames:t.dataset.genres,year:t.dataset.year,rating:t.dataset.rating};if("IMG"!==e.target.nodeName)return;e.target.style.PointerEvent="none",c.movieId=e.target.dataset.id,i.body.classList.add("show-modal"),document.querySelector("html").style.overflow="hidden",c.getFullInfo().then(C).then((function(){E(n)})).catch((function(e){return e})).finally((function(){v()})),window.addEventListener("keydown",P)})),i.closeModalBtn.addEventListener("click",D),i.backdropClick.addEventListener("click",(function(e){e.target===e.currentTarget&&D()}));var O="light-theme",H="dark-theme",F=document.querySelector("#theme-switch-toggle"),A=localStorage.getItem("theme"),J=function(){localStorage.setItem("theme",O),document.body.classList.remove(H),document.body.classList.add(O),i.theme.textContent="light theme"},W=function(){localStorage.setItem("theme",H),document.body.classList.remove(O),document.body.classList.add(H),i.theme.textContent="dark theme"};F.addEventListener("change",(function(){document.body.className===O?W():J()})),null===A||A===O?J():"dark-theme"===A&&(W(),F.setAttribute("checked",!0));var z;n("0wUG"),n("SgDD");i.searchForm.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.query.value;n.trim()?(i.error.classList.add("visually-hidden"),i.filmsList.innerHTML="",_.paginationSearchMovies(n),t.reset()):i.error.classList.remove("visually-hidden")})),z=N()(),i.body.insertAdjacentHTML("beforeend",z);var G={openTeam:document.querySelector(".footer__link"),body:document.querySelector("body"),team:document.querySelector(".team")};function Q(e){"Escape"===e.code&&R()}function R(){G.body.classList.remove("show-modal"),window.removeEventListener("keydown",Q)}G.openTeam.addEventListener("click",(function(e){e.preventDefault(),v(),G.body.classList.add("show-modal"),function(e){var t=T()(I);G.team.insertAdjacentHTML("beforeend",t)}(),window.addEventListener("keydown",Q)}))},"pd+p":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var l,i=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,s="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="team-item">\r\n        <a class="team-item__link" href="'+c(typeof(l=null!=(l=d(n,"github")||(null!=t?d(t,"github"):t))?l:r)===s?l.call(i,{name:"github",hash:{},data:o,loc:{start:{line:4,column:41},end:{line:4,column:51}}}):l)+'" target="_balnk">\r\n            <img class="team-item__img" src="'+c(typeof(l=null!=(l=d(n,"photo")||(null!=t?d(t,"photo"):t))?l:r)===s?l.call(i,{name:"photo",hash:{},data:o,loc:{start:{line:5,column:45},end:{line:5,column:54}}}):l)+'" width="180" alt="'+c(typeof(l=null!=(l=d(n,"position")||(null!=t?d(t,"position"):t))?l:r)===s?l.call(i,{name:"position",hash:{},data:o,loc:{start:{line:5,column:73},end:{line:5,column:85}}}):l)+'" />\r\n            <div class="team-item__text">\r\n                <p class="team-item__name">'+c(typeof(l=null!=(l=d(n,"name")||(null!=t?d(t,"name"):t))?l:r)===s?l.call(i,{name:"name",hash:{},data:o,loc:{start:{line:7,column:43},end:{line:7,column:51}}}):l)+" "+c(typeof(l=null!=(l=d(n,"surname")||(null!=t?d(t,"surname"):t))?l:r)===s?l.call(i,{name:"surname",hash:{},data:o,loc:{start:{line:7,column:52},end:{line:7,column:63}}}):l)+'</p>\r\n                <p class="team-item__position">'+c(typeof(l=null!=(l=d(n,"position")||(null!=t?d(t,"position"):t))?l:r)===s?l.call(i,{name:"position",hash:{},data:o,loc:{start:{line:8,column:47},end:{line:8,column:59}}}):l)+"</p>\r\n            </div>\r\n\r\n        </a>\r\n    </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l;return'<ul class="list team-list">\r\n'+(null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:2,column:4},end:{line:13,column:13}}}))?l:"")+"</ul>"},useData:!0})},s9S4:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var l,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                    <li class="modal__item-details">'+e.escapeExpression("function"==typeof(l=null!=(l=i(n,"name")||(null!=t?i(t,"name"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:o,loc:{start:{line:24,column:52},end:{line:24,column:60}}}):l)+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l,i,r=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",d=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <img class="modal__poster" src="https://image.tmdb.org/t/p/w500'+d(typeof(i=null!=(i=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?i:s)===c?i.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:1,column:67},end:{line:1,column:82}}}):i)+'" alt="poster" />\r\n    <div class="modal__text">\r\n        <h2 class="modal__title">'+d(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:s)===c?i.call(r,{name:"title",hash:{},data:o,loc:{start:{line:3,column:33},end:{line:3,column:42}}}):i)+'</h2>\r\n        <ul class="modal__list">\r\n            <li class="modal__item">\r\n                <p class="modal__item-features">Vote / Votes</p>\r\n                <p class="modal__item-details">\r\n                    <span class="modal__item-vote">'+d(typeof(i=null!=(i=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?i:s)===c?i.call(r,{name:"vote_average",hash:{},data:o,loc:{start:{line:8,column:51},end:{line:8,column:67}}}):i)+'</span> /\r\n                    <span class="modal__item-votes">'+d(typeof(i=null!=(i=u(n,"vote_count")||(null!=t?u(t,"vote_count"):t))?i:s)===c?i.call(r,{name:"vote_count",hash:{},data:o,loc:{start:{line:9,column:52},end:{line:9,column:66}}}):i)+'</span>\r\n                </p>\r\n            </li>\r\n            <li class="modal__item">\r\n                <p class="modal__item-features">Popularity</p>\r\n                <p class="modal__item-details">'+d(typeof(i=null!=(i=u(n,"popularity")||(null!=t?u(t,"popularity"):t))?i:s)===c?i.call(r,{name:"popularity",hash:{},data:o,loc:{start:{line:14,column:47},end:{line:14,column:61}}}):i)+'</p>\r\n            </li>\r\n            <li class="modal__item">\r\n                <p class="modal__item-features">Original Title</p>\r\n                <p class="modal__item-details">'+d(typeof(i=null!=(i=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:o,loc:{start:{line:18,column:47},end:{line:18,column:65}}}):i)+'</p>\r\n            </li>\r\n            <li class="modal__item">\r\n                <p class="modal__item-features">Genre</p>\r\n                <ul>\r\n'+(null!=(l=u(n,"each").call(r,null!=t?u(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:23,column:20},end:{line:25,column:29}}}))?l:"")+'                </ul>\r\n            </li>\r\n        </ul>\r\n        <h3 class="modal__description-title">about</h3>\r\n        <p class="modal__description-text">'+d(typeof(i=null!=(i=u(n,"overview")||(null!=t?u(t,"overview"):t))?i:s)===c?i.call(r,{name:"overview",hash:{},data:o,loc:{start:{line:30,column:43},end:{line:30,column:55}}}):i)+'</p>\r\n        <div class="button-container">\r\n            <div class="button__modal__container">\r\n                <button class="button button--watched" id="add-to-watched" type="button">\r\n                    add to watched\r\n                </button>\r\n            </div>\r\n            <div class="button__modal__container">\r\n                <button class="button button--modal" id="add-to-queue" type="button">add to queue</button>\r\n            </div>\r\n            <div class="button__modal__container">\r\n                <button class="button button--watched" id="remove" type="button">\r\n                    remove\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>'},useData:!0})},yIDU:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){return'<footer class="footer">\r\n    <div class="container">\r\n        <div class="footer__container">\r\n            © 2021 | All Rights Reserved | Developed with\r\n            <div class="heart"></div>\r\n            by\r\n            <a href="#" class="footer__link">Hvorostyany\'s Seven</a>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</footer>\r\n\r\n<div class="js-team"></div>\r\n\r\n'},useData:!0})},yjly:function(e,t,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a9379b18593c9c636e21.js.map