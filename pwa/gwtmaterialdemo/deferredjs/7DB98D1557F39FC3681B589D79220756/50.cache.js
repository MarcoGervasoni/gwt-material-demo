$wnd.gwtmaterialdemo.runAsyncCallback50("function G8d(a){this.a=a}\nfunction oqe(a){this.a=a}\nfunction qqe(a){this.a=a}\nfunction sqe(a){this.a=a}\nfunction uqe(a){this.a=a}\nfunction wqe(a){this.a=a}\nfunction xqe(a){this.a=a}\nfunction zqe(a){this.a=a}\nfunction F8d(a){this.a=new G8d(this);this.b=a}\nfunction Kqe(a,b,c){nt.call(this,a,b);this.a=c}\nfunction w8d(a,b,c){yEb();XEb.call(this,a,b,c,(Hhd(),Fhd))}\nfunction gqe(a,b){Mgc((!a.d&&(a.d=new Ngc(a)),a.d),b)}\nfunction kqe(a){J7c(a);gic((!a.a&&(a.a=new hic(a,sNe)),a.a),true);so(a,a.b)}\nfunction jqe(a){gic((!a.a&&(a.a=new hic(a,sNe)),a.a),false);(Msb(),a.rb).style[HHe]=qKe}\nfunction dqe(a){a.e=TLb(a,C$b(a,new xqe(a)));a.c=TLb(a,B$b(a,new zqe(a)))}\nfunction K8d(a){var b;if(!a.d){b=new D8d;a.d=b}return a.d}\nfunction D8d(){nFb.call(this);lFb(this,E8d(new F8d(this)))}\nfunction hqe(){cqe();P7c.call(this);yo((Msb(),this.rb),'inline-search',true)}\nfunction lqe(){cqe();hqe.call(this);yo((Msb(),this.rb),'expandable-search',true)}\nfunction Mqe(){Jqe();return HC(BC(Xmb,1),kIe,345,0,[Hqe,Iqe,Gqe])}\nfunction Jqe(){Jqe=Nqb;Hqe=new Kqe(nIe,0,'');Iqe=new Kqe('LIGHT',1,'light');Gqe=new Kqe('DARK',2,'dark')}\nfunction J8d(a){var b,c;if(!a.c){c=new w8d(LBb(FFb(a.a)),(b=K8d(a),b),I8d(a));qEb((IFb(a.a),c),DHb(IFb(a.a)));a.c=c}return a.c}\nfunction fqe(a){I7c(a);sFe((wue(qmb),qmb.i));'This ['+yue(a.yh)+L0e;ujc(qjc((ljc(),djc),HC(BC(FR,1),mHe,225,0,[])),Oqb(uqe.prototype.rf,uqe,[a]),new wqe(a))}\nfunction E8d(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=new mbc;$Kb(b,(c=new I_b,$Kb(c,(e=new yad,xs(ho(e.a),(esb(),(new Urb(fsb(hbf))).a)),bA(e,hbf),e)),$Kb(c,(f=new x6c,u6c(f,(g=new C6c,$Kb(g,g.a),ho(g.a).textContent=y8e,(Msb(),g.rb).style[INe]=(Sw(),uPe),g)),u6c(f,(h=new G6c,e2b(h,new P8c((i=new hqe,ZLb(i,(Cqc(),nqc)),i.rb.style[HHe]=RVe,gqe(i,(Jqe(),Iqe)),ho(i.D).setAttribute(oSe,xZe),Bdd(i.A).length==0||qo(i.A,fLe),i))),h)),f)),$Kb(c,(j=new Sle,Ndd(j,(k=new rwe,k.a+='\\u2003&lt;m:MaterialNavBar&gt;<br> \\u2003&lt;m:MaterialNavBrand text=\"App Title\" paddingLeft=\"16\" /&gt;<br> \\u2003&lt;m:MaterialNavSection&gt;<br> \\u2003\\u2003&lt;incubator:search.InlineSearch ui:field=\"search\" theme=\"LIGHT\" width=\"50%\" placeholder=\"Search\" display=\"INLINE\"/&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br> &lt;/m:MaterialNavBar&gt;<br>',new Orb(k.a)).a),yo(j.rb,mSe,true),j)),yo(c.rb,HOe,true),c));$Kb(b,(d=new I_b,$Kb(d,(l=new yad,xs(ho(l.a),(new Urb(fsb(ibf))).a),bA(l,ibf),l)),$Kb(d,(m=new x6c,u6c(m,(n=new C6c,$Kb(n,n.a),ho(n.a).textContent=y8e,n.rb.style[INe]=uPe,n)),u6c(m,(o=new G6c,e2b(o,new P8c((p=new W4c,FRb(p,(hJc(),nFc)),cLb(p,a.a),p))),e2b(o,new P8c((q=new lqe,ZLb(q,nqc),q.b=RVe,gqe(q,Iqe),ho(q.D).setAttribute(oSe,xZe),Bdd(q.A).length==0||qo(q.A,fLe),a.b.a=q,q))),aMb(o,(Jv(),Iv)),o)),m)),$Kb(d,(r=new Sle,Ndd(r,(s=new rwe,s.a+='\\u2003&lt;m:MaterialNavBar&gt;<br> \\u2003&lt;m:MaterialNavBrand text=\"App Title\" paddingLeft=\"16\" /&gt;<br> \\u2003&lt;m:MaterialNavSection float=\"RIGHT\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"SEARCH\" ui:field=\"openSearch\"/&gt;<br> \\u2003\\u2003&lt;incubator:search.ExpandableInlineSearch ui:field=\"expandableInline\" <br> theme=\"LIGHT\" width=\"50%\" placeholder=\"Search\" display=\"INLINE\"/&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br> &lt;/m:MaterialNavBar&gt;<br>',new Orb(s.a)).a),yo(r.rb,mSe,true),r)),$Kb(d,(t=new Sle,Ndd(t,(u=new rwe,u.a+='\\u2003// Opening your expandable search<br> @UiHandler(\"openSearch\")<br> void openSearch(ClickEvent e) {<br> \\u2003expandableInline.open();<br> }',new Orb(u.a)).a),yo(t.rb,sSe,true),t)),yo(d.rb,HOe,true),d));return b}\nvar hbf='Default Behaviour',ibf='Expandable Behaviour';Mqb(986,54,TKe,w8d);_.ze=function x8d(){_he();FEb(this,new bie(o$e,'Extending MaterialSearch component that be inlined in the navigation bar.','addins/signature/InlineSearchView',''))};var $hb=Cue(YYe,'InlineSearchPresenter',986);Mqb(1529,62,UKe,D8d);var bib=Cue(YYe,'InlineSearchView',1529);Mqb(2043,1,{},F8d);var aib=Cue(YYe,'InlineSearchView_BinderImpl/Widgets',2043);Mqb(2044,1,xLe,G8d);_.kd=function H8d(a){kqe(this.a.b.a)};var _hb=Cue(YYe,'InlineSearchView_BinderImpl/Widgets/1',2044);Mqb(871,1,ISe);_.Vc=function Q8d(){UIb(this.b,J8d(this.a.a))};Mqb(649,423,SMe,hqe);_.Fc=function iqe(){fqe(this)};var Wmb=Cue(jbf,'InlineSearch',649);Mqb(2545,649,SMe,lqe);_.Fc=function mqe(){fqe(this);sFe((wue(qmb),qmb.i));wue(Rmb);TLb(this,Fo(this,new S7c(new oqe(this)),Gz?Gz:(Gz=new qy)));TLb(this,B$b(this,new qqe(this)));TLb(this,C$b(this,new sqe(this)))};_.wc=function nqe(a){this.b=a};var Rmb=Cue(jbf,'ExpandableInlineSearch',2545);Mqb(2546,1,AKe,oqe);_.td=function pqe(a){jqe(this.a)};var Omb=Cue(jbf,'ExpandableInlineSearch/lambda$0$Type',2546);Mqb(2547,1,tKe,qqe);_.hd=function rqe(a){yo(jo(this.a),UNe,true)};var Pmb=Cue(jbf,'ExpandableInlineSearch/lambda$1$Type',2547);Mqb(2548,1,C4e,sqe);_.md=function tqe(a){yo(jo(this.a),UNe,false)};var Qmb=Cue(jbf,'ExpandableInlineSearch/lambda$2$Type',2548);Mqb(3081,$wnd.Function,{},uqe);_.rf=function vqe(a){dqe(this.a)};Mqb(2551,1,{},wqe);var Smb=Cue(jbf,'InlineSearch/lambda$1$Type',2551);Mqb(2549,1,C4e,xqe);_.md=function yqe(a){yo(jo(this.a),'wide',true)};var Tmb=Cue(jbf,'InlineSearch/lambda$2$Type',2549);Mqb(2550,1,tKe,zqe);_.hd=function Aqe(a){yo(jo(this.a),'wide',false)};var Umb=Cue(jbf,'InlineSearch/lambda$3$Type',2550);Mqb(345,29,{53:1,345:1,4:1,44:1,29:1},Kqe);_.bd=function Lqe(){return this.a};var Gqe,Hqe,Iqe;var Xmb=Due('gwt.material.design.incubator.client.search.constants','Theme',345,Mqe);NGe(Dq)(50);\n//# sourceURL=gwtmaterialdemo-50.js\n")
