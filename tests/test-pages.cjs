const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/../app.js','utf8').replace(/\s*render\(\);\s*$/,'');
const ctx={console,location:{pathname:'/',search:''},URLSearchParams,Date,Intl};
vm.createContext(ctx);
vm.runInContext(source,ctx);
const cases=[
 ['/', 'Deal your property faster', 'home()'],
 ['/about-us','Built for people','about()'],
 ['/properties','All categories','propertiesPage()'],
 ['/services','Real support for every','services()'],
 ['/blog','Real estate knowledge','blog()'],
 ['/agents','Built with purpose','agentsPage()'],
 ['/gallery','Spaces that inspire','gallery()'],
 ['/contact','Submit inquiry','contact()'],
 ['/404','Page not found','notFound()']
];
let total=0;
for(const [route,expected,fn] of cases){ctx.location.pathname=route;ctx.location.search='';let html=vm.runInContext(fn,ctx);assert(html.includes(expected),`${route} lacked ${expected}`);assert(html.length>250,`${route} unusually small`);console.log('PASS',route);total++}
for (const slug of ['cedar-hill-estate','willowbrook-haven','the-skyline-tower','sunset-grove','elmwood-residence','coral-bay-retreat']) {let html=vm.runInContext(`propertyDetail(properties.find(x=>x.slug==='${slug}'))`,ctx);assert(html.includes(slug.replace(/-/g,'-'))===false || html.includes('Contact agent'));assert(html.includes('Contact agent'));console.log('PASS /properties/'+slug);total++}
for(const slug of ['when-is-the-best-time-to-sell-your-property','understanding-the-home-buying-process-step-by-step','what-affects-property-value-in-this-amazing-year-2025']){let html=vm.runInContext(`blogDetail(posts.find(x=>x.slug==='${slug}'))`,ctx);assert(html.includes('All articles'));console.log('PASS /blog/'+slug);total++}
const css=fs.readFileSync(__dirname+'/../styles.css','utf8');
assert(css.includes('@media(max-width:700px)'));assert(css.includes('prefers-reduced-motion'));assert(css.includes('focus-visible'));
const config=JSON.parse(fs.readFileSync(__dirname+'/../vercel.json','utf8'));
assert.equal(config.rewrites.length,10);assert(fs.existsSync(__dirname+'/../index.html'));
console.log('PASS static CSS/config checks');console.log(`${total} route template checks passed; no full-browser behavior verified`);
