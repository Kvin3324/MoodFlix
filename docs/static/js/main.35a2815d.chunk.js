(this["webpackJsonpwiki-mood"]=this["webpackJsonpwiki-mood"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(90),c=a.n(l),o=(a(103),a(3)),s=a(17),i=(a(104),a(5)),m=a(6);function u(){var e=Object(i.a)(["\n  margin-bottom: 2%;\n  a, a:hover {\n    color: white;\n    text-decoration: none;\n  }\n  font-size: 3em;\n  font-family: Lobster;\n"]);return u=function(){return e},e}var p=m.a.h1(u());var d=function(){return r.a.createElement(p,null,r.a.createElement("a",{href:"/#",alt:"home"},"MoodFlix"))},v=a(4),f=a(2),E=a(93),b=a.n(E);a(121);var g=function(e){return r.a.createElement(b.a,{arrows:!0,className:"",containerClass:"container",dotListClass:"",focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:2,partialVisibilityGutter:10},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2,partialVisibilityGutter:10},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1,partialVisibilityGutter:10}},showDots:!1,sliderClass:"",slidesToSlide:3,swipeable:!0,partialVisible:"right"},e.children)};function h(){var e=Object(i.a)(["\n  {\n    display: inline-flex;\n    margin-bottom: 10%;\n      img {\n        height: 100%;\n        width: 10vw;\n        object-fit: cover;\n      }\n      a {\n        text-decoration: none;\n      }\n      h2 {\n        text-align: center;\n        font-size: 16px;\n        font-weight: bold;\n        margin: 0;\n        color: white;\n        margin-top: 10px;\n      }\n      :hover {\n        cursor: pointer;\n      }\n  }\n"]);return h=function(){return e},e}var y=m.a.div(h());var _=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{className:"movie"},r.a.createElement(o.b,{to:"/aboutMovie/".concat(e.movie.id)},r.a.createElement("div",{className:"movie--body mr-5"},r.a.createElement("div",{className:"movie--img"},null===e.movie.poster_path?r.a.createElement("img",{src:"https://citainsp.org/wp-content/uploads/2016/01/default.jpg",alt:"no__poster"}):r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.movie.poster_path),alt:"poster"})),r.a.createElement("div",{className:"movie--title"},e.movie.title.length>20?r.a.createElement("h2",null,e.movie.title.substr(0,10),"(...)"):r.a.createElement("h2",null,e.movie.title))))))},O=a(171);function N(){var e=Object(i.a)(["\n  text-align: center\n"]);return N=function(){return e},e}var j=m.a.div(N()),w=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null),l=Object(n.useRef)(null);return Object(n.useEffect)((function(){O.a.fromTo([e.current,a.current],0,5,{y:18},{y:18,yoyo:!0,repeat:-1}),O.a.fromTo([t.current,l.current],0,5,{y:-18},{y:18,repeat:-1,yoyo:!0})})),r.a.createElement(j,{className:"loader"},r.a.createElement("svg",{viewBox:"0 0 150 33.2",width:"80",height:"80"},r.a.createElement("circle",{ref:e,cx:"16.1",cy:"16.6",r:"16.1",fill:"#B0E7FF"}),r.a.createElement("circle",{ref:t,cx:"55.2",cy:"16.6",r:"16.1",fill:"#C9EFFF"}),r.a.createElement("circle",{ref:a,cx:"94.3",cy:"16.6",r:"16.1",fill:"#B0E7FF"}),r.a.createElement("circle",{ref:l,cx:"133.4",cy:"16.6",r:"16.1",fill:"#C9EFFF"})))};var k=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/12/recommendations?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432","&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return l(Object(v.a)(e.results))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movies--feed mt-5 col-lg-12"},r.a.createElement("h1",null,"Recommended for you"),r.a.createElement("div",{className:"movies--feed--recommendations"},r.a.createElement(g,null,0===a.length?r.a.createElement(w,null):0!==a.length?a.map((function(e,t){return r.a.createElement(_,{movie:e,key:t})})):void 0))))};var x=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432","&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return l(Object(v.a)(e.results))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movies--feed col-lg-12"},r.a.createElement("h1",null,"Top Rated"),r.a.createElement("div",{className:"movies--feed--top--rated"},r.a.createElement(g,null,0===a.length?r.a.createElement(w,null):0!==a.length?a.map((function(e,t){return r.a.createElement(_,{movie:e,key:t})})):void 0))))};var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(x,null))},P=a(16);function F(){var e=Object(i.a)(["\n  .go--to--home {\n    position: absolute;\n    top: 3%;\n   i {\n     font-size: 1.5em;\n     cursor: pointer;\n   }\n  }\n  color: white;\n  margin-top: 14%;\n  margin-left: 4%;\n  .movie--about--header {\n    margin-bottom: 2%;\n    img {\n      float: left;\n    }\n  }\n  .movie--about--meta {\n    margin-left: 50%;\n    h1 {\n      font-size: 3em;\n    }\n    p {\n      display: inline-flex;\n      padding: 0 5px;\n    }\n  }\n  .movie--about--description {\n    margin: 5% 0;\n    font-size: 1.4em;\n  }\n  button, button:hover {\n    background-color: #21232A;\n    border: none;\n      a {\n        text-decoration: none;\n        color: white;\n      }\n  }\n"]);return F=function(){return e},e}var R=m.a.div(F()),C=a(40),D=a.n(C);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var A=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];function o(){e.history.goBack(-1)}return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e.match.params.id,"?api_key=").concat("3466f7f79dd6bdfaf4b0e8b5480c2432","&language=en-US&append_to_response=videos")).then((function(e){return e.json()})).then((function(e){return c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))}))}),[]),console.log(l.videos),r.a.createElement(r.a.Fragment,null,0===l.length?r.a.createElement(w,null):0!==l.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{className:"movie--about"},r.a.createElement("div",{className:"go--to--home"},r.a.createElement("i",{className:"fas fa-home",onClick:o})),r.a.createElement("div",{className:"movie--about--header"},r.a.createElement("div",{className:"movie--about--backdrop"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(l.backdrop_path),alt:"backdrop"})),r.a.createElement("div",{className:"movie--about--meta"},r.a.createElement("div",{className:"movie--about--title"},r.a.createElement("h1",null,l.title)),r.a.createElement("div",{className:"movie--about--infos"},r.a.createElement("div",{className:"movie--about--infos--vote"},l.vote_average>8?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"rating:"),r.a.createElement("p",null,Object(v.a)(Array(4)).map((function(e,t){return r.a.createElement("i",{className:"fas fa-star",key:t})})),r.a.createElement("i",{className:"fas fa-star-half"})),r.a.createElement("p",null,l.vote_average," ")):l.vote_average>5&&l.vote_average<8?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"rating:"),r.a.createElement("p",null,Object(v.a)(Array(3)).map((function(e,t){return r.a.createElement("i",{className:"fas fa-star",key:t})})),Object(v.a)(Array(2)).map((function(e,t){return r.a.createElement("i",{className:"far fa-star",key:t})}))),r.a.createElement("p",null,l.vote_average," ")):l.vote_average<5?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"rating:"),r.a.createElement("p",null,Object(v.a)(Array(2)).map((function(e,t){return r.a.createElement("i",{className:"fas fa-star",key:t})})),Object(v.a)(Array(3)).map((function(e,t){return r.a.createElement("i",{className:"far fa-star",key:t})}))),r.a.createElement("p",null,l.vote_average," ")):void 0),r.a.createElement("div",{className:"movie--about--infos--genres"},r.a.createElement("p",null,"genres:"),l.genres.map((function(e,t){return r.a.createElement("p",{key:t},e.name)}))),r.a.createElement("div",{className:"movie--about--infos--runtime"},r.a.createElement("p",null,"runtime: ",l.runtime,"min")),r.a.createElement("div",{className:"movie--about--infos--date"},r.a.createElement("p",null,"release date: ",new Date(l.release_date).getFullYear()," "))))),r.a.createElement("div",{className:"movie--about--description"},r.a.createElement("h2",null,"SYNOPSIS"),r.a.createElement("p",null,l.overview)),function(){if(l.videos.results[0])return r.a.createElement(D.a,{url:"https://www.youtube.com/watch?v=".concat(l.videos.results[0].key),width:"60%",controls:!0})}())):void 0)};function z(){var e=Object(i.a)(["\n  .go--back {\n    position: absolute;\n    top: 3%;\n   i {\n     font-size: 1.5em;\n     cursor: pointer;\n   }\n  }\n  color: white;\n  margin-top: 14%;\n  margin-left: 4%;\n  .tv--about--header {\n    margin-bottom: 4%;\n    img {\n      float: left;\n    }\n  }\n  .tv--about--meta {\n    margin-left: 50%;\n    h1 {\n      font-size: 3em;\n    }\n    p {\n      display: inline-flex;\n      padding: 0 5px;\n    }\n  }\n  .tv--about--description {\n    margin: 5% 0;\n    font-size: 1.4em;\n  }\n  .tv--season {\n    display: flex;\n    justify-content: center;\n    font-size: 2em;\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    span {\n      border-left: 1px solid white;\n      height: 127px;\n    }\n    div {\n      margin: 0 10%;\n      p {\n        text-align: center;\n      }\n    }\n  }\n  button, button:hover {\n    background-color: #21232A;\n    border: none;\n      a {\n        text-decoration: none;\n        color: white;\n      }\n  }\n\n  .about--episodes--next--img, .about--episodes--last--img {\n    img {\n      height: 167px;\n      object-fit: contain;\n    }\n  }\n"]);return z=function(){return e},e}var B=m.a.div(z());function M(){var e=Object(i.a)(["\n  padding-left: 10%;\n  padding-top: 40px;\n  span {\n    padding: 2%;\n    background-color: #21232A;\n    text-decoration: none;\n    color: white;\n\n    :hover {\n      border-top: 1px solid #0CD0FC;\n      color: #0CD0FC;\n      background-color: none;\n    }\n  }\n"]);return M=function(){return e},e}var I=m.a.div(M());function U(){var e=Object(i.a)(["\n  color: white;\n  border-top: #21232A solid 2px;\n  margin-top: 5%;\n    .season {\n      display: inline-flex;\n          img {\n            width: 15vw;\n          }\n          a {\n            color: white;\n            text-decoration: none;\n          }\n      }\n"]);return U=function(){return e},e}var Y=m.a.div(U());var G=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null,r.a.createElement("div",{className:"season mt-3 mb-3"},r.a.createElement("div",{className:"season--poster"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.data.poster_path),alt:"poster"})),r.a.createElement("div",{className:" ml-3"},r.a.createElement("div",{className:"season--title"},r.a.createElement(o.b,{to:"/aboutSeason/".concat(e.tv.id,"/season/").concat(e.seasons.season_number)},r.a.createElement("h2",null,e.data.name))),r.a.createElement("div",{className:"season--about"},r.a.createElement("p",null,e.data.episode_count," episodes have started the ",r.a.createElement("strong",null,function(){var t=new Date(e.data.air_date),a=t.getDay(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(a,"/").concat(n,"/").concat(r)}()))),r.a.createElement("div",{className:"season--overview"},r.a.createElement("p",null,e.data.overview))))))};function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var V=function(e){var t=Object(n.useState)({data:[],showSeasons:!1,seasons:[]}),a=Object(f.a)(t,2),l=a[0],c=a[1];function o(){e.history.goBack(-1)}function s(){var e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l);e.showSeasons=!0,c(e)}return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/".concat(e.match.params.id,"?api_key=").concat("3466f7f79dd6bdfaf4b0e8b5480c2432","&language=en-US")).then((function(e){return e.json()})).then((function(e){return c({data:e,showSeasons:!1,seasons:e.seasons})}))}),[]),r.a.createElement(r.a.Fragment,null,0===l.data.length?r.a.createElement(w,null):0!==l.data.length?!0===l.showSeasons?r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,r.a.createElement("span",{onClick:s},"Seasons&Episodes"),function(){if(!0===l.showSeasons)return l.seasons.map((function(e,t){return r.a.createElement(G,{data:e,tv:l.data,seasons:e,key:t})}))}())):r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,r.a.createElement("span",{onClick:s},"Seasons&Episodes")),r.a.createElement(B,{className:"tv--about"},r.a.createElement("div",{className:"go--back"},r.a.createElement("i",{className:"fas fa-home",onClick:o})),r.a.createElement("div",{className:"tv--about--header"},r.a.createElement("div",{className:"tv--about--backdrop"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(l.data.backdrop_path),alt:"backdrop"})),r.a.createElement("div",{className:"tv--about--meta"},r.a.createElement("div",{className:"tv--about--title"},r.a.createElement("h1",null,l.data.original_name)),r.a.createElement("div",{className:"tv--about--infos"},r.a.createElement("div",{className:"tv--about--infos--vote"},l.data.vote_average>8?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Rating:"),r.a.createElement("p",null,Object(v.a)(Array(4)).map((function(e,t){return r.a.createElement("i",{className:"fas fa-star",key:t})})),r.a.createElement("i",{className:"fas fa-star-half"})),r.a.createElement("p",null,l.data.vote_average," ")):l.data.vote_average>5&&l.data.vote_average<8?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Rating:"),r.a.createElement("p",null,Object(v.a)(Array(3)).map((function(e,t){return r.a.createElement("i",{className:"fas fa-star",key:t})})),Object(v.a)(Array(2)).map((function(e,t){return r.a.createElement("i",{className:"far fa-star",key:t})}))),r.a.createElement("p",null,l.data.vote_average," ")):l.data.vote_average<5?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Rating:"),r.a.createElement("p",null,Object(v.a)(Array(2)).map((function(e,t){return r.a.createElement("i",{className:"fas fa-star",key:t})})),Object(v.a)(Array(3)).map((function(e,t){return r.a.createElement("i",{className:"far fa-star",key:t})}))),r.a.createElement("p",null,l.data.vote_average," ")):void 0),r.a.createElement("div",{className:"tv--about--infos--genres"},r.a.createElement("p",null,"Genres:"),l.data.genres.map((function(e,t){return r.a.createElement("p",{key:t},e.name)}))),r.a.createElement("div",{className:"tv--about--infos--runtime"},r.a.createElement("p",null,"Episode run time: ",l.data.episode_run_time[0],"min")),r.a.createElement("div",{className:"tv--about--infos--date"},r.a.createElement("p",null,"Release date: ",new Date(l.data.first_air_date).getFullYear()," ")),r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("a",{href:"https://www.youtube.com/results?search_query=".concat(l.data.original_name),rel:"noopener noreferrer",target:"_blank"},"Watch BA"))))),r.a.createElement("div",{className:"tv--about--description"},r.a.createElement("h2",null,"SYNOPSIS"),r.a.createElement("p",null,l.data.overview)),r.a.createElement("div",{className:"tv--season mb-5"},r.a.createElement("div",{className:"tv--season--number"},r.a.createElement("p",null," ",l.data.number_of_seasons," "),r.a.createElement("p",null,"seasons")),r.a.createElement("span",{className:"separator"}),r.a.createElement("div",{className:"tv--season--number"},r.a.createElement("p",null," ",l.data.number_of_episodes),r.a.createElement("p",null,"episodes"))),r.a.createElement("div",{className:"episodes col-lg-12 mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"about--episodes col-lg-6"},r.a.createElement("div",{className:"about--episodes--last"},r.a.createElement("h3",null,"Last episode:"),r.a.createElement("div",{className:"about--episodes--last--img mb-4"},null===l.data.last_episode_to_air.still_path?r.a.createElement("img",{src:"https://citainsp.org/wp-content/uploads/2016/01/default.jpg",alt:"no__poster"}):r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(l.data.last_episode_to_air.still_path),alt:"last__eps__poster"})),r.a.createElement("div",{className:"about--episodes--last--title"},r.a.createElement("h4",null," ",l.data.last_episode_to_air.name," ")),r.a.createElement("div",{className:"about--episodes--last--number"},r.a.createElement("p",null,"episode number: ",l.data.last_episode_to_air.episode_number," ")),r.a.createElement("div",{className:"about--episodes--last--episode"},r.a.createElement("p",null,"release number: ",l.data.last_episode_to_air.air_date," ")))),r.a.createElement("div",{className:"about--episodes col-lg-6"},function(){if(l.data.next_episode_to_air)return r.a.createElement("div",{className:"about--episodes--next"},r.a.createElement("h3",null,"Next episode:"),r.a.createElement("div",{className:"about--episodes--next--img mb-4"},null===l.data.next_episode_to_air.still_path?r.a.createElement("img",{src:"https://citainsp.org/wp-content/uploads/2016/01/default.jpg",alt:"no__poster"}):r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(l.data.next_episode_to_air.still_path),alt:"next__eps__poster"})),r.a.createElement("div",{className:"about--episodes--next--title"},r.a.createElement("h4",null," ",l.data.next_episode_to_air.name," ")),r.a.createElement("div",{className:"about--episodes--next--number"},r.a.createElement("p",null,"episode number: ",l.data.next_episode_to_air.episode_number," ")),r.a.createElement("div",{className:"about--episodes--next--episode"},r.a.createElement("p",null,"release number: ",l.data.next_episode_to_air.air_date," ")))}()))))):void 0)};var W=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{className:"movie mr-5"},r.a.createElement(o.b,{to:"/aboutTv/".concat(e.movie.id)},r.a.createElement("div",{className:"movie--body mr-5"},r.a.createElement("div",{className:"movie--img"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.movie.poster_path),alt:"poster"})),r.a.createElement("div",{className:"movie--title"},"tv"===e.movie.media_type?r.a.createElement("h2",null,e.movie.original_name," (",e.movie.media_type,")"):r.a.createElement("h2",null,e.movie.original_name))))))};var q=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432")).then((function(e){return e.json()})).then((function(e){return l(Object(v.a)(e.results))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:" mt-3 mb-5"},"Trending Movies & Tv (by week):"),0===a.length?r.a.createElement(w,null):0!==a.length?a.map((function(e,t){return"movie"===e.media_type?r.a.createElement(_,{movie:e,key:t}):"tv"===e.media_type?r.a.createElement(W,{movie:e,key:t}):void 0})):void 0))};var J=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432")).then((function(e){return e.json()})).then((function(e){return l(Object(v.a)(e.results))}))}),[]),r.a.createElement(r.a.Fragment,null,0===a.length?r.a.createElement(w,null):0!==a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Top rated Tv"),r.a.createElement(y,{className:"movie mr-5"},r.a.createElement(g,null,a.map((function(e,t){return r.a.createElement("div",{className:"movie--body mr-5",key:t},r.a.createElement(o.b,{to:"/aboutTv/".concat(e.id)},r.a.createElement("div",{className:"movie--img"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"poster"})),r.a.createElement("div",{className:"movie--title"},r.a.createElement("h2",null,e.name))))}))))):void 0)};var $=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432")).then((function(e){return e.json()})).then((function(e){return l(Object(v.a)(e.results))}))}),[]),r.a.createElement(r.a.Fragment,null,0===a.length?r.a.createElement(w,null):0!==a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Popular Movies"),r.a.createElement(y,{className:"movie mr-5"},r.a.createElement(g,null,a.map((function(e,t){return r.a.createElement("div",{className:"movie--body mr-5",key:t},r.a.createElement(o.b,{to:"/aboutMovie/".concat(e.id)},r.a.createElement("div",{className:"movie--img"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"poster"})),r.a.createElement("div",{className:"movie--title"},r.a.createElement("h2",null,e.title))))}))))):void 0)};var H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement($,null))},K=a(27);var Q=function(){var e=Object(n.useState)({TvResults:[],currentPage:1,totalResults:0,totalPages:0}),t=Object(f.a)(e,2),a=t[0],l=t[1];function c(e){fetch("https://api.themoviedb.org/3/discover/tv?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432","&language=en-US&sort_by=popularity.desc&page=").concat(e,"&timezone=America%2FNew_York&include_null_first_air_dates=false")).then((function(e){return e.json()})).then((function(e){return l({TvResults:e.results,currentPage:e.page,totalResults:e.total_results,totalPages:e.total_pages})}))}return Object(n.useEffect)((function(){c(a.currentPage)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tv Results:"),r.a.createElement(K.a,{onChange:function(e){c(e)},current:a.currentPage,total:a.totalResults,pageSize:a.totalPages,className:"mb-5 mt-3"}),0===a.TvResults.length?r.a.createElement(w,null):0!==a.TvResults.length?a.TvResults.map((function(e,t){return r.a.createElement(y,{className:"mr-5",key:t},r.a.createElement("div",{className:"movie--body mr-5",key:t},r.a.createElement(o.b,{to:"/aboutTv/".concat(e.id)},r.a.createElement("div",{className:"movie--img"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"poster"})),r.a.createElement("div",{className:"movie--title"},r.a.createElement("h2",null,e.name)))))})):void 0)};function X(){var e=Object(i.a)(["\n  padding-left: 20px;\n  :hover {\n    border-left: 1px solid #0CD0FC;\n  }\n  a {\n    h3 {\n    font-weight: bold;\n      :hover {\n        color: #0CD0FC;\n      }\n    }\n    :hover {\n      text-decoration: none;\n    }\n  }\n"]);return X=function(){return e},e}var Z=m.a.div(X());var ee=function(){return r.a.createElement(Z,null,r.a.createElement(o.b,{to:"/trending"},r.a.createElement("h3",null,"Trending")))};var te=function(){return r.a.createElement(Z,null,r.a.createElement(o.b,{to:"/tv&movies"},r.a.createElement("h3",null,"Tv & Movies")))};function ae(){var e=Object(i.a)(["\n  padding-left: 20px;\n  margin-top: 2%;\n  margin-bottom: 10%;\n  :hover {\n    border-left: 1px solid #0CD0FC;\n  }\n  a {\n    text-decoration: none;\n  }\n  h3 {\n    font-weight: bold;\n      :hover {\n        color: #0CD0FC;\n      }\n    }\n    :hover {\n      text-decoration: none;\n    }\n  li {\n    color: white;\n    list-style-type: none;\n  }\n\n"]);return ae=function(){return e},e}var ne=m.a.div(ae());var re=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432")).then((function(e){return e.json()})).then((function(e){return l(Object(v.a)(e.genres))}))}),[]),r.a.createElement(ne,{className:"categories"},r.a.createElement("h3",null,"Categories"),r.a.createElement("div",{className:"categories--names"},0===a.length?"loading":0!==a.length?a.map((function(e,t){return r.a.createElement(o.b,{to:"/byCategory/".concat(e.id),key:e.id},r.a.createElement("li",{key:e.id,className:e.id},e.name))})):void 0))};var le=function(){return r.a.createElement(Z,null,r.a.createElement(o.b,{to:"/tvList"},r.a.createElement("h3",null,"Tv")))};var ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(te,null),r.a.createElement(le,null),r.a.createElement(re,null))};a(168);var oe=function(e){var t=Object(n.useState)({results:[],currentPage:1,totalResults:0,totalPages:0}),a=Object(f.a)(t,2),l=a[0],c=a[1];function o(t){fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432","&with_genres=").concat(e.match.params.id,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){return c({results:e.results,currentPage:e.page,totalResults:e.total_results,totalPages:e.total_pages})}))}return Object(n.useEffect)((function(){o(l.currentPage)}),[e.match.params.id]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Results"),r.a.createElement(K.a,{onChange:function(e){o(e)},current:l.currentPage,total:l.totalResults,pageSize:l.totalPages,className:"mb-5"}),0===l.results.length?r.a.createElement(w,null):0!==l.results.length?(l.results.sort((function(e,t){return e.original_title<t.original_title?-1:e.original_title>t.original_title?1:0})),l.results.map((function(e,t){return r.a.createElement(_,{movie:e,key:t})}))):void 0)};function se(){var e=Object(i.a)(["\nmargin-bottom: 8%;\n  input {\n    color: white;\n    background-color: #232D32;\n    border: none;\n  }\n  i {\n    margin-left: 10px;\n    color: white;\n      :hover {\n        cursor: pointer;\n      }\n  }\n"]);return se=function(){return e},e}var ie=m.a.div(se());function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ue=function(){var e=Object(n.useState)({results:[],searchInput:""}),t=Object(f.a)(e,2),a=t[0],l=t[1];function c(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a);t.searchInput=e.target.value,l(t)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{className:"search--input"},r.a.createElement("input",{type:"search",placeholder:"Search",onChange:function(e){return c(e)}}),r.a.createElement(o.b,{to:"/searchResults?".concat(a.searchInput)},r.a.createElement("i",{className:"fas fa-search"}))))};var pe=function(e){var t=Object(n.useState)({searchResults:[],currentPage:1,totalResults:0,totalPages:0}),a=Object(f.a)(t,2),l=a[0],c=a[1];function o(t){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("3466f7f79dd6bdfaf4b0e8b5480c2432","&language=en-US&query=").concat(e.location.search,"&page=").concat(t,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){return c({searchResults:e.results,currentPage:e.page,totalResults:e.total_results,totalPages:e.total_pages})}))}return Object(n.useEffect)((function(){o(l.currentPage)}),[e.location.search]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Search Results:"),r.a.createElement(K.a,{onChange:function(e){o(e)},current:l.currentPage,total:l.totalResults,pageSize:l.totalPages,className:"mb-5 mt-3"}),0===l.searchResults.length?r.a.createElement(w,null):0!==l.searchResults.length?l.searchResults.map((function(e,t){return r.a.createElement(_,{movie:e,key:t})})):void 0)};function de(){var e=Object(i.a)(["\n  color: white;\n  .season--title {\n    margin-bottom: 6%;\n      h1 {\n        text-align: center;\n        font-size: 2.4em;\n      }\n    }\n    .season--poster {\n      img {\n        width: 13vw;\n      }\n    }\n    .about--people {\n      .about--people--img {\n        img {\n          width: 8vw;\n        }\n      }\n    }\n"]);return de=function(){return e},e}var ve=m.a.div(de());function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ee=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];function o(){var e=new Date(l.air_date),t=e.getDay(),a=e.getMonth()+1,n=e.getFullYear();return"".concat(t,"/").concat(a,"/").concat(n)}return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/".concat(e.match.params.id,"/season/").concat(e.match.params.season_number,"?api_key=").concat("3466f7f79dd6bdfaf4b0e8b5480c2432","&language=en-US&append_to_response=credits,videos")).then((function(e){return e.json()})).then((function(e){return c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))}))}),[e.match.params.id]),console.log(l),r.a.createElement(r.a.Fragment,null,0===l.length?r.a.createElement(w,null):0!==l.length?r.a.createElement(ve,null,r.a.createElement("div",{className:"season--title"},r.a.createElement("h1",null,l.name)),r.a.createElement("div",{className:"season--about col-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"season--poster col-lg-3"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(l.poster_path),alt:"poster"})),r.a.createElement("div",{className:"season--overview col-lg-4"},r.a.createElement("h3",null,"Synopsis"),r.a.createElement("p",null," ",l.overview,"  ")),r.a.createElement("div",{className:"season--infos col-lg-5"},r.a.createElement("h3",null,"Infos Season"),r.a.createElement("p",null,l.episodes.length," episodes  "),r.a.createElement("p",null,"Season released in ",o(),"  ")))),r.a.createElement("div",{className:"season--casting mt-5"},r.a.createElement("div",{className:"season--casting--title"},r.a.createElement("h1",{className:"mb-4"},"Casting")),r.a.createElement("div",{className:"season--cast"},r.a.createElement("div",{className:"row"},l.credits.cast.map((function(e,t){return r.a.createElement("div",{className:"about--people col-lg-3",key:t},r.a.createElement("div",{className:"about--people--img"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:"poster"})),r.a.createElement("div",{className:"about--people--name"},r.a.createElement("p",null," ",e.name," ")),r.a.createElement("div",{className:"about--people--character"},r.a.createElement("p",null,r.a.createElement("em",null,"Character: ",e.character))))}))))),r.a.createElement("div",{className:"season--videos mt-5"},r.a.createElement("div",{className:"season--videos--title"},r.a.createElement("h1",null,"Video(s) of the Season ",l.season_number)),r.a.createElement("div",{className:"season--videos"},function(){if(l.videos.results)return l.videos.results.map((function(e,t){return r.a.createElement(D.a,{url:"https://www.youtube.com/watch?v=".concat(e.key),width:"60%",controls:!0,key:t})}))}())),r.a.createElement("div",{className:"season--list--episode"},r.a.createElement("h1",{className:"mt-5"},"Episodes of the season ",l.season_number),l.episodes.map((function(e,t){return r.a.createElement(Y,null,r.a.createElement("div",{className:"season episode mt-3",key:t},r.a.createElement("div",{className:"episode--poster"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.still_path),alt:"poster"})),r.a.createElement("div",{className:"episode--about ml-3"},r.a.createElement("div",{className:"episode--about--info"},r.a.createElement("p",null,(n=e).season_number>9?"S".concat(n.season_number):"S0".concat(n.season_number),(a=e).episode_number>9?"E".concat(a.episode_number):"E0".concat(a.episode_number)," - ",e.name," "),r.a.createElement("p",null," ",o()," ")),r.a.createElement("div",{className:"episode--about--overview"},r.a.createElement("p",null,e.overview)))));var a,n})))):void 0)};var be=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container App col-12"},r.a.createElement("main",null,r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"left-section col-lg-2"},r.a.createElement(d,null),r.a.createElement(ue,null),r.a.createElement("div",{className:"filters"},r.a.createElement(ce,null))),r.a.createElement("section",{className:"right-section col-lg-9 col-md-7"},r.a.createElement(s.a,{exact:!0,path:"/",component:S}),r.a.createElement(s.a,{exact:!0,path:"/aboutMovie/:id",component:A}),r.a.createElement(s.a,{exact:!0,path:"/aboutTv/:id",component:V}),r.a.createElement(s.a,{exact:!0,path:"/trending",component:q}),r.a.createElement(s.a,{exact:!0,path:"/tv&movies",component:H}),r.a.createElement(s.a,{exact:!0,path:"/tvList",component:Q}),r.a.createElement(s.a,{exact:!0,path:"/byCategory/:id",component:oe}),r.a.createElement(s.a,{exact:!0,path:"/searchResults",component:pe}),r.a.createElement(s.a,{exact:!0,path:"/aboutSeason/:id/season/:season_number",component:Ee}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,a){e.exports=a(169)}},[[98,1,2]]]);
//# sourceMappingURL=main.35a2815d.chunk.js.map