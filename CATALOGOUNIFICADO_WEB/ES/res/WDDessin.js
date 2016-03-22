/*! VersionVI: 30A200066r x */
function oCreerCanvas(){return document.createElement("canvas")}function oDCCanvas(n){return n==null||n.getContext==null?null:n.getContext("2d")}function WDDessinDisponible(){var n=oCreerCanvas(),t=oDCCanvas(n)!=null;return delete n,t}function DessinDisponible(){return gbDessinDispo}function RVB(n,t,i){return i*FACTEUR_BLEU+t*FACTEUR_VERT+n}function RVBBleu(n){return(n&16711680)/FACTEUR_BLEU}function RVBVert(n){return(n&65280)/FACTEUR_VERT}function RVBRouge(n){return n&255}function nWLVersOpacite(n){return n/OPACITE_MAX}function WDDessin(n){if(this.m_oImg=n,this.m_oCanvas=oCreerCanvas(),this.m_oDC=oDCCanvas(this.m_oCanvas),this.m_bOpacite=!1,this.m_nOpaciteFond=OPACITE_MAX,this.m_nOpaciteTrait=OPACITE_MAX,n!=null){this.m_oCanvas.width=n.offsetWidth;this.m_oCanvas.height=n.offsetHeight;this.m_bForcerAffichage=!1;this.m_fAngle=0;try{this.m_oDC.drawImage(n,0,0)}catch(t){}}}function nWDAjoutCoordTableau(n,t,i){return n[++t]=i,t}function nWDAjoutPointTableau(n,t,i,r){return t=nWDAjoutCoordTableau(n,t,i),nWDAjoutCoordTableau(n,t,r)}function sWDComposanteCouleur(n){var t=n.toString(16);return t.length<2?"0"+t:t}function sWDCouleurVersChaine(n){return n.charAt==null&&(n="#"+sWDComposanteCouleur(RVBRouge(n))+sWDComposanteCouleur(RVBVert(n))+sWDComposanteCouleur(RVBBleu(n))),n}function nWDCouleurVersEntier(n){var t,i,r,u;return n!=null&&n.charAt!=null&&(n.charAt(0)=="#"&&n.length==7?n=eval("0x"+n.substring(5,n.length)+n.substring(3,5)+n.substring(1,3)):(t=n.indexOf("("),t>=0&&(i=n.length,t=t+1,r=parseInt(n.substring(t,i)),t=n.indexOf(",",t),t>=0&&(t=t+1,u=parseInt(n.substring(t,i)),t=n.indexOf(",",t),t>=0&&(n=RVB(r,u,parseInt(n.substring(t+1,i)))))))),n}function WDCouleur(n){var i,r,y,p;n=nWDCouleurVersEntier(n);this.m_nRouge=RVBRouge(n);i=this.m_nRouge/255;this.m_nVert=RVBVert(n);r=this.m_nVert/255;this.m_nBleu=RVBBleu(n);var e=this.m_nBleu/255,u=0,o=0,s=0,h=Math.min(i,Math.min(r,e)),t=Math.max(i,Math.max(r,e)),f=t-h,c=t+h;if(o=c/2,t==h)s=0,u=0;else{s=o<=.5?f/c:f/(2-c);var l=(t-i)/f,a=(t-r)/f,v=(t-e)/f;u=i==t?60*(6+v-a):r==t?60*(2+l-v):60*(4+a-l)}u<0&&(u+=360);this.m_nTeinte=Math.round(u)%360;y=Math.round(o*100);this.m_nLuminosite=Math.max(0,Math.min(y,100));p=Math.round(s*100);this.m_nSaturation=Math.max(0,Math.min(p,100));this.MajCouleur()}function CouleurLuminosite(n){var t=new WDCouleur(n),i=t.m_nLuminosite;return delete t,i}function CouleurSaturation(n){var t=new WDCouleur(n),i=t.m_nSaturation;return delete t,i}function CouleurTeinte(n){var t=new WDCouleur(n),i=t.m_nTeinte;return delete t,i}function nWDIndiceImage(n){for(var t=0,t=0;t<gTabDessin.length;t++)if(gTabDessin[t]!=null&&gTabDessin[t].m_oImg==n)break;return t}function bWDIndiceOK(n){return n<gTabDessin.length}function bWDTestFlag(n,t){return(n&t)==t}function oWDInitDessin(n,t,i){if(!DessinDisponible())return null;var r=nWDIndiceImage(n);if(!bWDIndiceOK(r)){for(r=0;r<gTabDessin.length;r++)if(gTabDessin[r]==null)break;gTabDessin[r]=new WDDessin(n);i=!0}return goDessin=gTabDessin[r],goDessin.m_bOpacite=bWDTestFlag(t,dAvecOpacite),goDessin.m_bForcerAffichage=bWDTestFlag(t,dForcerAffichage),goDC=goDessin.m_oDC,i&&(goDC.fillStyle=goDC.strokeStyle=TRANSPARENT),bWDTestFlag(t,dSansEffacer)||goDessin.Effacer(),goDC}function dDebutDessin(n,t){return oWDInitDessin(n,t,!0)}function bWDDessinOK(){return goDC!=null}function WDInitCouleurTrait(n){n!=null&&(goDC.strokeStyle=sWDCouleurVersChaine(n))}function WDInitCouleurFond(n){n!=null&&(goDC.fillStyle=sWDCouleurVersChaine(n))}function WDInitEpaisseurTrait(n){n!=null&&(goDC.lineWidth=n)}function bWDInitTrace(n,t,i,r,u){return bWDDessinOK()?(goDC.save(),WDInitCouleurTrait(i),WDInitCouleurFond(r),WDInitEpaisseurTrait(u),goDC.beginPath(),goDC.moveTo(n,t),!0):!1}function WDChangeOpacite(n,t){n&&(goDC.save(),goDC.globalAlpha=nWLVersOpacite(t))}function WDRestaureOpacite(n){n&&goDC.restore()}function WDFinTrace(n,t,i){var r=!n&&goDessin.m_bOpacite&&goDessin.m_nOpaciteTrait<OPACITE_MAX,u;WDChangeOpacite(r,goDessin.m_nOpaciteTrait);n||i||goDC.stroke();WDRestaureOpacite(r);u=i||!n&&!t;r=u&&goDessin.m_bOpacite&&goDessin.m_nOpaciteFond<OPACITE_MAX;WDChangeOpacite(r,goDessin.m_nOpaciteFond);u&&goDC.fill();WDRestaureOpacite(r);goDC.restore();goDessin.MajImage()}function dAffiche(){goDessin.AfficheImage()}function nWDDistance(n,t){return Math.abs(t-n)}function nWDRayon(n,t,i,r){return Math.min(nWDDistance(n,i),nWDDistance(t,r))/2}function nWDMilieu(n,t){return nWDDistance(n,t)/2}function nWDCentre(n,t,i){return Math.min(n,t)+i}function nWDAngle(n,t,i,r){return Math.PI/2-Math.atan2(i-n,r-t)}function WDArcEchelle(n,t,i,r,u,f,e,o){var s=nWDRayon(n,i,t,r),y=nWDCentre(n,t,s),p=nWDCentre(i,r,s);goDC.beginPath();o&&goDC.moveTo(y,p);var h=nWDDistance(n,t),c=nWDDistance(i,r),l=h>c,a=l?h/c:1,v=l?1:c/h;goDC.save();goDC.scale(a,v);goDC.arc(Math.min(n,t)/a+s,Math.min(i,r)/v+s,s,u,f,e);goDC.restore()}function WDArc(n,t,i,r,u,f,e,o,s){var h=nWDRayon(n,t,i,r),c=nWDCentre(n,i,h),l=nWDCentre(t,r,h);WDArcEchelle(n,i,t,r,nWDAngle(c,l,u,f),nWDAngle(c,l,e,o),!0,s)}function dArc(n,t,i,r,u,f,e,o,s){bWDInitTrace(n,t,s)&&(WDArc(n,t,i,r,u,f,e,o),WDFinTrace(!1,!0))}function dCercle(n,t,i,r,u,f){bWDInitTrace(n,t,f,u)&&(WDArcEchelle(n,i,t,r,0,Math.PI*2,!1),WDFinTrace())}function dChangeMode(n){bWDDessinOK()&&(goDC.globalCompositeOperation=n==dessinXOR?"xor":"source-over")}function nWDParamLargeur(n,t){return t!=null?t:n.offsetWidth}function nWDParamHauteur(n,t){return t!=null?t:n.offsetHeight}function nWDParamCoord(n){return n!=null?n:0}function bWDSwapImg(n){return DessinDisponible()?(goDessinSauv=goDessin,oWDInitDessin(n,dSansEffacer+(bWDDessinOK()&&goDessin.m_bOpacite?dAvecOpacite:0)),bWDDessinOK()):!1}function WDRestaureImg(){goDessinSauv!=null&&(goDessin=goDessinSauv,goDC=goDessin.m_oDC)}function dCopieImage(n,t,i,r,u,f,e,o,s,h,c){bWDSwapImg(t)&&(goDC.save(),goDC.globalCompositeOperation=i==copieSrcEfface?"source-in":i==copieFusionPeint?"source-out":i==copieImage?"source-atop":i==copiePasSrcCopie?"destination-over":i==copieFusionCopie?"destination-in":i==copiePatInverse?"destination-out":i==copiePatPeint?"destination-atop":i==copiePatCopie?"lighter":i==copieSrcInverse?"xor":"source-over",goDC.drawImage(n,nWDParamCoord(r),nWDParamCoord(u),nWDParamLargeur(n,e),nWDParamHauteur(n,f),nWDParamCoord(o),nWDParamCoord(s),nWDParamLargeur(t,c),nWDParamHauteur(t,h)),goDC.restore(),goDessin.MajImage(),WDRestaureImg())}function WDTrait(n,t,i,r){goDC.moveTo(n,t);goDC.lineTo(i,r)}function dCorde(n,t,i,r,u,f,e,o,s,h){bWDInitTrace(n,t,h,s)&&(WDArc(n,t,i,r,u,f,e,o),goDC.closePath(),WDFinTrace())}function WDDetruit(n){gTabDessin[n]!=null&&(gTabDessin[n].Effacer(),gTabDessin[n].destructor(),gTabDessin[n]=null)}function dFinDessin(n){var t=0;if(n!=null){t=nWDIndiceImage(n);bWDDessinOK(t)&&WDDetruit(t);return}for(t=0;t<gTabDessin.length;t++)WDDetruit(t)}function dFond(n,t,i,r){bWDDessinOK()&&(WDInitCouleurFond(t==1?TRANSPARENT:n),r!=null&&(goDessin.m_nOpaciteFond=r))}function dInverseCouleur(n){var i,t;if(!bWDSwapImg(n))return!1;for(i=goDessin.oImage(),t=0;t<goDessin.nNbPixel();t++)goDessin.ModifCouleurIndice(i,t,~goDessin.nCouleurIndice(i,t));return goDessin.ModifImage(i,n),WDRestaureImg(),!0}function dLigne(n,t,i,r,u,f){bWDInitTrace(n,t,u,null,f)&&(goDC.lineTo(i,r),WDFinTrace())}function dModifieTSL(n,t,i,r,u){var e,f,o;if(!bWDSwapImg(n))return!1;for(e=goDessin.oImage(),f=0;f<goDessin.nNbPixel();f++)o=new WDCouleur(goDessin.nCouleurIndice(e,f)),goDessin.ModifCouleurIndice(e,f,o.nModifieTSL(t,i,r),null,!0),delete o;return goDessin.ModifImage(e,u),WDRestaureImg(),!0}function dModifieLuminosite(n,t,i){return dModifieTSL(n,0,0,t,i)}function dModifieSaturation(n,t,i){return dModifieTSL(n,0,t,0,i)}function dModifieTeinte(n,t,i){return dModifieTSL(n,t,0,0,i)}function bWDVerifImgXY(n,t,i,r){return(!n||bWDSwapImg(t))&&bWDDessinOK()&&i>=0&&r>=0&&i<goDessin.nLargeur()&&r<goDessin.nHauteur()}function nWDResultat(n,t,i){return delete n,i&&WDRestaureImg(),t}function dPixelCouleur(n,t,i){var u=n!=null,r,f;return bWDVerifImgXY(u,n,t,i)?(r=goDessin.oImage(),f=goDessin.nCouleurXY(r,t,i),nWDResultat(r,f,u)):0}function dPixelOpacite(n,t,i){var u=n!=null,r,f;return bWDVerifImgXY(u,n,t,i)?(r=goDessin.oImage(),f=goDessin.nOpaciteXY(r,t,i),nWDResultat(r,f,u)):0}function dPoint(n,t,i){if(bWDDessinOK()){var r=goDessin.oImage();goDessin.ModifCouleurXY(r,n,t,nWDCouleurVersEntier(i!=null?i:goDC.strokeStyle));goDessin.ModifImage(r)}}function sWDAjoutAttributPolice(n,t,i){return t&&(n+=(n==""?"":" ")+i),n}function dPolice(n,t,i,r){if(bWDDessinOK()){var u="";u=sWDAjoutAttributPolice(u,bWDTestFlag(i,iItalique),"italic");u=sWDAjoutAttributPolice(u,bWDTestFlag(i,iGras),"bold");u=sWDAjoutAttributPolice(u,t!=null,""+t+"pt");goDC.font=sWDAjoutAttributPolice(u,n!=null,n);goDessin.m_fAngle=-fWDDegreVersRadian(r)}}function dPolygone(){var t,f,i;if(!(arguments.length<1)&&(t=arguments.length<4,!t||!(arguments[0].length<4))){var n=t?arguments[0]:arguments,r=t?n.length/2:n[0],u=2*r+1;if((!t||bWDInitTrace(n[0],n[1],arguments[2],arguments[1]))&&(t||!(n.length<5||!bWDInitTrace(n[1],n[2],n[u+1],n[u])))){for(f=t?0:1,i=f;i<2*r;i+=2)goDC.lineTo(n[i],n[i+1]);goDC.closePath();WDFinTrace()}}}function dPortion(n,t,i,r,u,f,e,o,s,h){bWDInitTrace(n,t,h,s)&&(WDArc(n,t,i,r,u,f,e,o,!0),goDC.closePath(),WDFinTrace())}function dRectangle(n,t,i,r,u,f){bWDInitTrace(n,t,f,u)&&(goDC.rect(Math.min(n,i),Math.min(t,r),nWDDistance(n,i),nWDDistance(t,r)),WDFinTrace())}function WDAjoutCouleurDegrade(n,t,i){t!=null&&n.addColorStop(i/100,sWDCouleurVersChaine(t))}function fWDDegreVersRadian(n){return n*(Math.PI/180)}function dRectangleDegrade(n,t,i,r,u,f,e,o,s,h,c){var y,p,d,a;if(bWDInitTrace(n,t)){var l=fWDDegreVersRadian(e%360),w=l==Math.PI/2||l==3*Math.PI/2,b=w?0:Math.tan(l),g=l==0||l==Math.PI,nt=g?0:Math.tan(l+Math.PI/2),v=n,k=i;l>Math.PI/2&&l<=3*Math.PI/2&&(v=i,k=n);y=t;p=r;l>Math.PI&&(y=r,p=t);d=g?k:w?v:(b*v-nt*k+p-y)/(b-nt);a=goDC.createLinearGradient(v,y,d,b*(d-v)+(w?p:y));WDAjoutCouleurDegrade(a,u,0);WDAjoutCouleurDegrade(a,f,100);WDAjoutCouleurDegrade(a,o,s);WDAjoutCouleurDegrade(a,h,c);goDC.fillStyle=a;goDC.rect(Math.min(n,i),Math.min(t,r),nWDDistance(n,i),nWDDistance(t,r));WDFinTrace(!1,!1,!0)}}function oWDCanvaCopie(){var n=oCreerCanvas();return n.width=goDessin.nLargeur(),n.height=goDessin.nHauteur(),n}function dRedimensionne(n,t,i){if(!bWDSwapImg(n))return!1;var r=oWDCanvaCopie();return oDCCanvas(r).scale(t/goDessin.nLargeur(),i/goDessin.nHauteur()),goDessin.MajImage(null,r),WDRestaureImg(),!0}function dRemplissage(n,t,i,r){if(bWDDessinOK()){var u=goDessin.oImage();goDessin.PropageCouleur(u,n,t,nWDCouleurVersEntier(i!=null?i:goDC.fillStyle),nWDCouleurVersEntier(r));goDessin.ModifImage(u)}}function dRotation(n,t){if(!bWDSwapImg(n))return!1;var r=fWDDegreVersRadian(t),u=goDessin.nLargeur()/2,i=goDessin.nHauteur()/2,f=Math.atan(u/i),e=f-r,o=i/Math.cos(f),s=oWDCanvaCopie(),h=oDCCanvas(s);return h.translate(u-o*Math.sin(e),i-o*Math.cos(e)),h.rotate(r),goDessin.MajImage(null,s),WDRestaureImg(),!0}function dTexte(n,t,i,r,u){(r==null&&(r=goDC.strokeStyle!=TRANSPARENT&&goDC.strokeStyle!="rgba(0, 0, 0, 0.0)"?goDC.strokeStyle:0),bWDInitTrace(n,t,r,r))&&(goDessin.Texte(n,t,i,u),WDFinTrace())}function dSauveImage(n,t,i,r){if(!bWDSwapImg(n))return!1;var u="";try{u=goDessin.m_oCanvas.toDataURL("image/"+r.toLowerCase())}catch(f){}return WDRestaureImg(),u}function dSauveImageBMP(n,t,i){return dSauveImage(n,t,i,"bmp")}function dSauveImageGIF(n,t,i){return dSauveImage(n,t,i,"gif")}function dSauveImageJPEG(n,t,i){return dSauveImage(n,t,null,"jpeg",(i==null?80:i)/100)}function dSauveImagePNG(n,t){return dSauveImage(n,t,null,"png")}function dStylo(n,t,i,r){bWDDessinOK()&&(WDInitCouleurTrait(t==5?TRANSPARENT:n),WDInitEpaisseurTrait(i),r!=null&&(goDessin.m_nOpaciteTrait=r))}function dSymetrieHorizontale(n){if(!bWDSwapImg(n))return!1;var t=oWDCanvaCopie();return oDCCanvas(t).transform(1,0,0,-1,0,goDessin.nHauteur()),goDessin.MajImage(null,t),WDRestaureImg(),!0}function dSymetrieVerticale(n){if(!bWDSwapImg(n))return!1;var t=oWDCanvaCopie();return oDCCanvas(t).transform(-1,0,0,1,goDessin.nLargeur(),0),goDessin.MajImage(null,t),WDRestaureImg(),!0}function InfoBitmap(n){var r="BAD",u=r+"\t\t\t",t,i,f;return n==null||n.length==0?u:(t=new Image,t.src=n,i=n.lastIndexOf("."),f=t.width>0&&t.height>0?(i>Math.max(n.lastIndexOf("\\"),n.lastIndexOf("/"))?n.substring(i+1,n.length):r)+"\t"+t.width+"\t"+t.height+"\t0":u,delete t,f)}function TSL(n,t,i){if(n<0||n>360||t<0||t>100||i<0||i>100)return 0;var r=new WDCouleur(0),u=r.nTSL(n,t,i);return delete r,u}var dessinNormal=13,dessinXOR=7,copieImage=-1,copieToutNoir=0,copieDstInverse=1,copieFusionCopie=2,copieFusionPeint=3,copiePasSrcCopie=4,copiePasSrcEfface=5,copiePatCopie=6,copiePatInverse=7,copiePatPeint=8,copieSrcEt=9,copieSrcCopie=10,copieSrcEfface=11,copieSrcInverse=12,copieSrcPeint=13,copieToutBlanc=14,dAvecOpacite=2,dEffacer=0,dQuadrillageOpacite=4,dSansEffacer=1,dSurGraphe=8,dForcerAffichage=16,OPACITE_MAX=255,FACTEUR_BLEU=65536,FACTEUR_VERT=256,iNormal=1,iSouligne=2,iItalique=4,iGras=8,iBarre=16,SOULIGNE=" underline",TRANSPARENT="transparent",gTabDessin=[],goDessin=null,goDessinSauv=null,goDC=null,gbDessinDispo=WDDessinDisponible();WDDessin.prototype.AfficheImage=function(n){(n!=null?n:this.m_oImg).src=this.m_oCanvas.toDataURL()};WDDessin.prototype.MajImage=function(n,t){if(t!=null){var i=oDCCanvas(t);i.drawImage(this.m_oCanvas,0,0);this.Effacer();this.m_oDC.drawImage(t,0,0);delete t}this.m_bForcerAffichage||this.AfficheImage(n)};WDDessin.prototype.destructor=function(){delete this.m_oCanvas;delete this};WDDessin.prototype.nLargeur=function(){return this.m_oCanvas.width};WDDessin.prototype.nHauteur=function(){return this.m_oCanvas.height};WDDessin.prototype.oImage=function(){return this.m_oDC.getImageData(0,0,goDessin.nLargeur(),goDessin.nHauteur())};WDDessin.prototype.ModifImage=function(n,t){this.m_oDC.putImageData(n,0,0);delete n;this.MajImage(t)};WDDessin.prototype.nIndice=function(n){return n*4};WDDessin.prototype.nIndiceXY=function(n,t){return this.nIndice(n+this.nLargeur()*t)};WDDessin.prototype.nIndiceRouge=function(n){return n};WDDessin.prototype.nIndiceVert=function(n){return n+1};WDDessin.prototype.nIndiceBleu=function(n){return n+2};WDDessin.prototype.nIndiceOpacite=function(n){return n+3};WDDessin.prototype.nCouleur=function(n,t){var i=n.data;return RVB(i[this.nIndiceRouge(t)],i[this.nIndiceVert(t)],i[this.nIndiceBleu(t)])};WDDessin.prototype.nCouleurIndice=function(n,t){return this.nCouleur(n,this.nIndice(t))};WDDessin.prototype.nCouleurXY=function(n,t,i){return this.nCouleur(n,this.nIndiceXY(t,i))};WDDessin.prototype.nOpacite=function(n,t){return n.data[this.nIndiceOpacite(t)]};WDDessin.prototype.nOpaciteXY=function(n,t,i){return this.nOpacite(n,this.nIndiceXY(t,i))};WDDessin.prototype.ModifCouleur=function(n,t,i,r,u){var f=n.data;f[this.nIndiceRouge(t)]=RVBRouge(i);f[this.nIndiceVert(t)]=RVBVert(i);f[this.nIndiceBleu(t)]=RVBBleu(i);u||r==null&&this.nOpacite(n,t)!=0||this.ModifOpacite(n,t,r!=null?r:OPACITE_MAX)};WDDessin.prototype.ModifCouleurIndice=function(n,t,i,r,u){this.ModifCouleur(n,this.nIndice(t),i,r,u)};WDDessin.prototype.ModifCouleurXY=function(n,t,i,r,u,f){this.ModifCouleur(n,this.nIndiceXY(t,i),r,u,f)};WDDessin.prototype.PropageCouleur=function(n,t,i,r,u){var l=[],e=[],f=nWDAjoutPointTableau(e,-1,t,i),v=this.nLargeur(),y=this.nHauteur(),a=null,h;for(r==null&&(r=this.m_oDC.fillStyle);f>0;){var o=e[f--],s=e[f--],c=this.nIndiceXY(s,o);l[c]||s>=0&&s<v&&o>=0&&o<y&&(l[c]=!0,h=this.nCouleur(n,c),u==null&&a==null&&(a=h),(u!=null?h!=u:h==a)&&(h!=r&&this.ModifCouleur(n,c,r),f=nWDAjoutPointTableau(e,f,s-1,o-1),f=nWDAjoutPointTableau(e,f,s,o-1),f=nWDAjoutPointTableau(e,f,s+1,o-1),f=nWDAjoutPointTableau(e,f,s-1,o),f=nWDAjoutPointTableau(e,f,s+1,o),f=nWDAjoutPointTableau(e,f,s-1,o+1),f=nWDAjoutPointTableau(e,f,s,o+1),f=nWDAjoutPointTableau(e,f,s+1,o+1)))}delete l;delete e};WDDessin.prototype.ModifOpacite=function(n,t,i){n.data[this.nIndiceOpacite(t)]=i};WDDessin.prototype.nNbPixel=function(){return this.m_oCanvas.width*this.m_oCanvas.height};WDDessin.prototype.nFinTexteAffiche=function(n,t,i,r,u){var f=n.substring(t,i);return this.m_oDC.textBaseline="top",this.m_oDC.fillText(f,r,u),r+this.m_oDC.measureText(f).width};WDDessin.prototype.Texte=function(n,t,i,r){var o=(r===undefined||!r)&&this.m_oDC.font.indexOf(SOULIGNE)<0,f=0,e,u;for(i.length===undefined&&(i=i.toString()),e=i.length,u=e,this.m_oDC.save(),this.m_oDC.translate(n,t),n=t=0,this.m_oDC.rotate(this.m_fAngle);f<e;)o&&(u=i.indexOf("&",f),u<0&&(u=e)),u>f&&(n=this.nFinTexteAffiche(i,f,u,n,t),f=u+1,u=f+1),f<e&&(this.m_oDC.save(),n=this.nFinTexteAffiche(i,f,u,n,t),this.m_oDC.restore(),f=u,u=f+1);this.m_oDC.restore()};WDDessin.prototype.Effacer=function(){this.m_oDC.clearRect(0,0,this.nLargeur(),this.nHauteur());this.MajImage()};WDCouleur.prototype.MajCouleur=function(){this.m_nCouleur=RVB(this.m_nRouge,this.m_nVert,this.m_nBleu)};WDCouleur.prototype.nComposanteRGB=function(n,t,i){i>360?i=i-360:i<0&&(i=i+360);i<60?n=n+(t-n)*i/60:i<180?n=t:i<240&&(n=n+(t-n)*(240-i)/60);var r=Math.floor(n*255);return r<0?r=0:r>255&&(r=255),r};WDCouleur.prototype.nTSL=function(n,t,i){if(t==0)this.m_nBleu=Math.floor(Math.max(0,Math.min(255,this.m_nLuminosite*255/100))),this.m_nRouge=this.m_nBleu,this.m_nVert=this.m_nBleu;else{var f=n,r=i/100,e=t/100,u=r<=.5?r+r*e:r+e-r*e,o=2*r-u;this.m_nRouge=Math.floor(this.nComposanteRGB(o,u,f+120));this.m_nVert=Math.floor(this.nComposanteRGB(o,u,f));this.m_nBleu=Math.floor(this.nComposanteRGB(o,u,f-120))}return this.MajCouleur(),this.m_nCouleur};WDCouleur.prototype.nModifieLuminositeCompoRGB=function(n,t){return 255&Math.max(0,Math.min(255,Math.floor(n+t)))};WDCouleur.prototype.nModifieTSL=function(n,t,i){return n=Math.floor(255*(n%360)/360),t=Math.floor(255*(t%101)/100),i=Math.floor(255*(i%101)/100),this.m_nTeinte+=n,this.m_nTeinte=this.m_nTeinte%255,this.m_nSaturation=Math.max(0,Math.min(255,this.m_nSaturation+t)),this.nTSL(this.m_nTeinte,this.m_nSaturation,this.m_nLuminosite),i!=0&&(this.m_nRouge=this.nModifieLuminositeCompoRGB(this.m_nRouge,i),this.m_nVert=this.nModifieLuminositeCompoRGB(this.m_nVert,i),this.m_nBleu=this.nModifieLuminositeCompoRGB(this.m_nBleu,i)),this.MajCouleur(),this.m_nCouleur}