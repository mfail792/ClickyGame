(this.webpackJsonpclickgame=this.webpackJsonpclickgame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Mario","image":"https://mario.nintendo.com/assets/img/home/char-mario.png","occupation":"Plumber","location":"1-1"},{"id":2,"name":"Lara Croft","image":"https://upload.wikimedia.org/wikipedia/en/7/7a/Lara_Croft.png","occupation":"Cave Explorer","location":"Ominous Caves"},{"id":3,"name":"Bowser","image":"https://vignette.wikia.nocookie.net/ironyoshi1212rockz/images/d/d1/Character-bowser.png/revision/latest?cb=20160112162332","occupation":"Bad Guy","location":"8-4"},{"id":4,"name":"Sonic","image":"https://vignette.wikia.nocookie.net/great-characters/images/2/2d/TSR_Sonic.png/revision/latest?cb=20190508153540","occupation":"Ring Gatherer","location":"Emerald Hill"},{"id":5,"name":"Nightcrawler","image":"https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Nightcrawler.PNG/250px-Nightcrawler.PNG","occupation":"Lurker","location":"Dark Alleys"},{"id":6,"name":"Link","image":"https://vignette.wikia.nocookie.net/character-stats-and-profiles/images/d/d6/Adult_Link.png/revision/latest?cb=20170430215801","occupation":"Adventurer","location":"Hyrule"},{"id":7,"name":"Crono","image":"https://vignette.wikia.nocookie.net/characterprofile/images/6/67/Chrono_Trigger_-_Crono_as_he_first_appeared_for_Super_Nintendo.png/revision/latest?cb=20160805045521","occupation":"Time Explorer","location":"The Millennial Fair"},{"id":8,"name":"Blaze","image":"https://vignette.wikia.nocookie.net/streets-of-rage/images/b/bd/Blaze.png/revision/latest?cb=20141023185413","occupation":"Karate Master","location":"The Streets"},{"id":9,"name":"Skate","image":"https://miro.medium.com/max/434/1*LcMhvwYfX_-ElXupUqD_ow.png","occupation":"Blader","location":"The Streets"},{"id":10,"name":"Jason","image":"https://i.redd.it/pbn3fq8247k21.png","occupation":"Camp Terror","location":"Crystal Lake"},{"id":11,"name":"Axel","image":"https://vignette.wikia.nocookie.net/bareknuckle/images/3/37/Axelprofile3.png/revision/latest?cb=20090901052401","occupation":"Martial Artist","location":"The Streets"},{"id":12,"name":"Giygas","image":"https://pbs.twimg.com/profile_images/2996369590/e3bb5a5a69c88bc327bf82a113143766_400x400.jpeg","occupation":"Galaxy Devourer","location":"Earth\'s Core"}]')},,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),c=(a(14),a(4)),l=a(5),s=a(7),m=a(6),u=a(8),d=(a(15),function(e){return r.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Name:")," ",e.name),r.a.createElement("li",null,r.a.createElement("strong",null,"Occupation:")," ",e.occupation),r.a.createElement("li",null,r.a.createElement("strong",null,"Location:")," ",e.location))))});a(16);var p=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(17);var h=function(e){return r.a.createElement("h1",{className:"title"},e.children)};a(18);var g=function(e){return r.a.createElement("h2",{className:"title2"},e.children)},f=(a(19),function(e){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{id:"cur-scor"},r.a.createElement("strong",null,"Current Score: ",e.currentScore)),r.a.createElement("li",{id:"top-scor"},r.a.createElement("strong",null,"Top Score: ",e.topScore))))});a(20);var k=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("h5",null,"Matt Faile, 2019"))},v=a(1);a(21);var E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={games:v,topScore:0,currentScore:0,rightorWrong:"",clicked:[]},a.handleIncrement=function(){var e=a.state.currentScore+1;a.setState({currentScore:e,rightorWrong:""}),e>=a.state.topScore&&a.setState({topScore:e}),a.handleShuffle()},a.handleClick=function(e){-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):a.handleReset()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(v);a.setState({games:e})},a.handleReset=function(){a.setState({currentScore:0,topScore:a.state.topScore,rightorWrong:"",clicked:[]}),a.handleShuffle()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p,null,r.a.createElement(f,{currentScore:this.state.currentScore,topScore:this.state.topScore,rightorWrong:this.state.rightorWrong}),r.a.createElement(h,null,"Video Game Memories"),r.a.createElement(g,null,"Try not to click an image twice, see if you can beat your top score!"),this.state.games.map((function(t){return r.a.createElement(d,{removeGame:e.removeGame,id:t.id,key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,name:t.name,image:t.image,occupation:t.occupation,location:t.location})}))),r.a.createElement(k,null))}}]),t}(n.Component);o.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c4733599.chunk.js.map