import{V as a,k as n,n as o,r as s}from"./chunk-GAX5GO4O.js";var u=(()=>{let t=class t{transform(r){let i=Number(r),c=~~(i/60),m=i%60;return`${c}h ${m}min`}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=n({name:"timetoHrmin",type:t,pure:!0,standalone:!0});let e=t;return e})();var l=(()=>{let t=class t{transform(r){return`$${r} million`}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=n({name:"numberAmilli",type:t,pure:!0,standalone:!0});let e=t;return e})();var y=(()=>{let t=class t{constructor(r){this.http=r}getMovies(){return this.http.get("/movies")}getMovieByID(r){return this.http.get("/movies/"+r)}};t.\u0275fac=function(i){return new(i||t)(s(a))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{u as a,l as b,y as c};
