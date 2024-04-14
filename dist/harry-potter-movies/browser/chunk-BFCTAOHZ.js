import{a as I,b as k,c as P}from"./chunk-FTA4F6O7.js";import{$ as y,B as f,D as e,E as t,F as x,H as g,I as i,J as a,K as h,M as b,O as c,P as p,U as M,Y as S,_ as E,h as u,v,w as r,x as l}from"./chunk-GAX5GO4O.js";import"./chunk-TMC7WMLO.js";var A=(()=>{let m=class m{constructor(d,o,n){this.dataService=d,this._activatedRoute=o,this._router=n,this.currentMovie={}}ngOnInit(){let d=this._activatedRoute.snapshot.params.id;this.dataService.getMovieByID(d).subscribe(o=>{o?(this.currentMovie=o,console.log("currentMovie:: ",this.currentMovie)):(console.log("error"),this._router.navigate(["/error"]))})}};m.\u0275fac=function(o){return new(o||m)(l(P),l(S),l(E))},m.\u0275cmp=u({type:m,selectors:[["app-movie-detail"]],standalone:!0,features:[b],decls:47,vars:15,consts:[[1,"row"],[1,"iback-btn",3,"routerLink"],[1,"container-form"],[1,"row","justify-content-md-center"],[1,"col-4","text-end"],["width","200","alt","Poster movie",3,"src"],[1,"col-6","text-start","wrapper-summary"],[1,"col-8"],[1,"text-end"],[1,"text-start"]],template:function(o,n){o&1&&(e(0,"h1"),i(1,"Harry Potter - Details"),t(),e(2,"div",0)(3,"button",1),i(4,"Back"),t(),e(5,"div",2)(6,"div",3)(7,"h2"),i(8),t(),e(9,"div",0)(10,"div",4),x(11,"img",5),t(),e(12,"div",6),i(13),t()()(),e(14,"div",3)(15,"div",7)(16,"h3"),i(17,"Details"),t(),e(18,"table")(19,"tr")(20,"th",8),i(21,"Box office "),t(),e(22,"td",9),i(23),c(24,"numberAmilli"),t()(),e(25,"tr")(26,"th",8),i(27,"Budget"),t(),e(28,"td",9),i(29),c(30,"numberAmilli"),t()(),e(31,"tr")(32,"th",8),i(33,"Duration"),t(),e(34,"td",9),i(35),c(36,"timetoHrmin"),t()(),e(37,"tr")(38,"th",8),i(39,"Producers"),t(),e(40,"td",9),i(41),t()(),e(42,"tr")(43,"th",8),i(44,"Cinematographers"),t(),e(45,"td",9),i(46),t()()()()()()()),o&2&&(r(3),f("routerLink","/"),r(5),a(n.currentMovie.title),r(3),g("src",n.currentMovie.poster,v),r(2),h(" ",n.currentMovie.summary," "),r(10),a(p(24,9,n.currentMovie.box_office)),r(6),a(p(30,11,n.currentMovie.budget)),r(6),a(p(36,13,n.currentMovie.duration)),r(6),a(n.currentMovie.producers),r(5),a(n.currentMovie.cinematographers))},dependencies:[M,y,I,k],styles:[".container-form[_ngcontent-%COMP%]{background:#330000ba;background-image:url(https://i.pinimg.com/originals/ea/c8/ea/eac8ea2365b9bd83d9b36b5bc91fded3.jpg);background-repeat:repeat;padding:12px 20px}.iback-btn[_ngcontent-%COMP%]{display:block;width:fit-content;margin:0 0 12px}.wrapper-summary[_ngcontent-%COMP%]{padding:20px 0;font-family:cursive}"]});let s=m;return s})();export{A as MovieDetailComponent};
