$wnd.gwtmaterialdemo.runAsyncCallback7("function Jpd(){}\nfunction Lpd(){}\nfunction Ytb(){Xtb()}\nfunction XVb(a,b){a.o=b}\nfunction aWb(a){this.a=a}\nfunction cWb(a){this.a=a}\nfunction eWb(a){this.a=a}\nfunction Ppd(a){this.a=a}\nfunction Rpd(a){this.a=a}\nfunction Dtb(a){!!ttb&&rA(ttb,a)}\nfunction Xtb(){Xtb=Kqb;Wtb=new yy}\nfunction Gtb(){if(!xtb){Dub();xtb=true}}\nfunction UVb(a){YVb(a.k,a.o,a.i,a.f)}\nfunction VVb(a){YVb(a.k,a.o,a.i,a.f)}\nfunction Hpd(a){XVb(a.b,ho(a.a));WVb(a.b)}\nfunction TVb(a){a.k.style[R_e]=S_e+a.e+' '+a.g}\nfunction Vpd(a){var b;if(!a.d){b=new Ipd;a.d=b}return a.d}\nfunction Opd(a){this.a=new Ppd(this);this.b=new Rpd(this);this.c=a}\nfunction Apd(a,b,c){IEb();fFb.call(this,a,b,c,(Phd(),Nhd))}\nfunction Btb(a){Etb();Gtb();return ztb((Xtb(),Xtb(),Wtb),a)}\nfunction Dub(){var b=$wnd.onscroll;$wnd.onscroll=XDe(function(a){try{xtb&&Dtb((ft($doc),gt($doc),new Ytb))}finally{b&&b(a)}})}\nfunction Upd(a){var b,c;if(!a.c){c=new Apd(VBb(PFb(a.a)),(b=Vpd(a),b),Tpd(a));AEb((SFb(a.a),c),MHb(SFb(a.a)));a.c=c}return a.c}\nfunction ZVb(a){if(a.a){a.k.style[zIe]=V_e+a.j+'ms '+a.b;a.k.style[AIe]=V_e+a.j+'ms '+a.b}else{a.k.style[zIe]='';a.k.style[AIe]=''}}\nfunction Ipd(){xFb.call(this);vFb(this,Npd(new Opd(this)));Ihd(this.b);Fo(this.b,new Jpd,Oz?Oz:(Oz=new yy));Fo(this.b,new Lpd,(!Tz&&(Tz=new yy),Tz))}\nfunction SVb(a){$doc.documentElement.style[NGe]=a.p;(Jsb(),a.rb).style[RGe]=(Yu(),TEe);!a.W&&(a.W=new TUc(a));QUc(a.W);if(a.c){Lo(a);a.c=false}Rz(a,a)}\nfunction $Vb(){NMb.call(this,$doc.createElement(LGe),PC(JC(gob,1),eHe,2,6,['material-cutout']));this.d=(ppc(),Qkc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=$doc.createElement(LGe);is((Jsb(),this.rb),this.k);this.rb.style[NGe]=(rw(),XFe);this.rb.style[RGe]=(Yu(),TEe)}\nfunction YVb(a,b,c,d){var e,f,g,h,i;h=Vs(it(b.ownerDocument),b)-(eLb==null&&(eLb=$wnd.$(lJe)),eLb).scrollTop();g=Us(it(b.ownerDocument),b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(PGe,h+bGe);$wnd.$(a).css(RFe,g+bGe);$wnd.$(a).css(QEe,i+bGe);$wnd.$(a).css(PEe,f+bGe)}\nfunction Os(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction WVb(a){var b,c,d,e,f;c=(Jsb(),a.rb).style;c[QEe]=($w(),'100.0%');c[PEe]='100.0%';c[MGe]=(Gw(),_Fe);c[PGe]=OGe;c[RFe]=OGe;c[SGe]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[GKe]=\"''\";c[MGe]=$Fe;c[SGe]='-1';if(!a.o){throw kqb(new qse('The target element should be set before calling open().'))}Os(a.o);a.g==null&&(d=new MMb($doc.createElement(LGe)),bMb(d,a.d),e=d.rb.style,e[MGe]=_Fe,undefined,e[QEe]='1.0px',undefined,e[PEe]='1.0px',undefined,e[RFe]='-10.0px',undefined,e[PGe]='-10.0px',undefined,e[SGe]='-10000',undefined,f=Yfc(a.d),a.n<1&&bte(f.substr(0,4),'rgb(')&&(f=gte(gte(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=b[NGe];b[NGe]=XFe;a.e==null&&(a.e=(eLb==null&&(eLb=$wnd.$(lJe)),eLb).width()+300+bGe);ZVb(a);if(a.a){a.k.style[R_e]='0px 0px 0px 0rem '+a.g;yr((rr(),qr),new aWb(a))}else{a.k.style[R_e]=S_e+a.e+' '+a.g}if(a.f){a.k.style[T_e]=bTe;a.k.style[U_e]=bTe}else{a.k.style[T_e]='';a.k.style[U_e]=''}YVb(a.k,a.o,a.i,a.f);aMb(a,Atb(new cWb(a)));aMb(a,Btb(new eWb(a)));a.rb.style[RGe]='';if(!a.qb){a.c=true;_ub((Ezb(),Izb(null)),a)}Wz(a,a)}\nfunction Npd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new vbc;hLb(b,(c=new R_b,hLb(c,(e=new Gad,As(ho(e.a),(bsb(),(new Rrb(csb(uPe))).a)),jA(e,uPe),e)),hLb(c,(f=new dje,Vdd(f,(g=new Bte,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new Lrb(g.a)).a),yo((Jsb(),f.rb),vPe,true),f)),yo(c.rb,TLe,true),c));hLb(b,(d=new R_b,hLb(d,(h=new Gad,Tdd(h.b,'Click the icon below to show a material cutout.'),As(ho(h.a),(new Rrb(csb(X_e))).a),jA(h,X_e),h)),hLb(d,(i=new N4c,L4c(i,(pJc(),cEc)),lLb(i,a.a),a.c.a=i,i)),hLb(d,(j=new $Vb,hLb(j,(k=new Gad,Tdd(k.b,'Description of your new Feature'),As(ho(k.a),(new Rrb(csb(Y_e))).a),jA(k,Y_e),DMb(k,(ppc(),apc)),k)),hLb(j,(l=new SRb,bMb(l,apc),$Sb(l.j,OPe),l.j.mb||hLb(l,l.j),DMb(l,Qkc),lLb(l,a.b),l)),CMb(j,(xLc(),tLc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),hLb(d,(m=new dje,Vdd(m,(n=new Bte,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new Lrb(n.a)).a),yo(m.rb,vPe,true),m)),hLb(d,(o=new dje,Vdd(o,(p=new Bte,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new Lrb(p.a)).a),yo(o.rb,BPe,true),o)),yo(d.rb,TLe,true),d));return b}\nvar R_e='boxShadow',S_e='0px 0px 0px ',T_e='WebkitBorderRadius',U_e='borderRadius',V_e='box-shadow ',W_e='gwt.material.design.addins.client.cutout',X_e='Material Cut Out',Y_e='New Feature';var xtb=false;Jqb(722,fGe,{},Ytb);_.cd=function Ztb(a){VVb(zD(a,2834).a)};_.dd=function $tb(){return Wtb};var Wtb;var KI=Mre(fEe,'Window/ScrollEvent',722);Jqb(2144,25,CIe,$Vb);_.Me=function _Vb(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var eN=Mre(W_e,'MaterialCutOut',2144);Jqb(2145,1,{},aWb);_.Wc=function bWb(){TVb(this.a)};var bN=Mre(W_e,'MaterialCutOut/lambda$0$Type',2145);Jqb(2146,1,FHe,cWb);_.ud=function dWb(a){UVb(this.a)};var cN=Mre(W_e,'MaterialCutOut/lambda$1$Type',2146);Jqb(2147,1,{9:1,2834:1},eWb);var dN=Mre(W_e,'MaterialCutOut/lambda$2$Type',2147);Jqb(914,55,eIe,Apd);_.ye=function Bpd(){Whe();PEb(this,new Yhe('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var K_=Mre(QQe,'CutOutsPresenter',914);Jqb(1263,63,fIe,Ipd);var Q_=Mre(QQe,'CutOutsView',1263);Jqb(1264,1,LHe,Jpd);_.sd=function Kpd(a){Lad(new Oad(PC(JC(dK,1),wEe,21,0,[])),'Close Event Fired',VIe,null)};var L_=Mre(QQe,'CutOutsView/lambda$0$Type',1264);Jqb(1265,1,wMe,Lpd);_.td=function Mpd(a){Lad(new Oad(PC(JC(dK,1),wEe,21,0,[])),'Open Event Fired',VIe,null)};var M_=Mre(QQe,'CutOutsView/lambda$1$Type',1265);Jqb(1744,1,{},Opd);var P_=Mre(QQe,'CutOutsView_BinderImpl/Widgets',1744);Jqb(1745,1,KIe,Ppd);_.jd=function Qpd(a){Hpd(this.a.c)};var N_=Mre(QQe,'CutOutsView_BinderImpl/Widgets/1',1745);Jqb(1746,1,KIe,Rpd);_.jd=function Spd(a){SVb(this.a.c.b)};var O_=Mre(QQe,'CutOutsView_BinderImpl/Widgets/2',1746);Jqb(758,1,SPe);_.Uc=function _pd(){bJb(this.b,Upd(this.a.a))};XDe(Eq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")
