/*! VersionVI: 30A200066r x */
function WDTdb(){if(arguments.length){WDChampParametresHote.prototype.constructor.apply(this,arguments);var n=new WDStyleCache(!0);n.Creation();n.CreationFin();this.m_oStyleCacheDimension=n;this.m_oTdbModeEdition=null;this.m_tabCacheDivWidget=[];this.m_bAncrageHauteur=!1}}function WDMenuContextuelTdb(n,t){var f,e,u;if(arguments.length){var r=t.m_oDonnees,o=r.m_bEnModeEdition,i=[];r.m_bFAAEdition&&(f={m_oLibelle:{m_sTraduction:"EDITION",sLibelle:"Mode \u00e9dition"},m_pfAction:function(n){t.OnModeEdition(n)}},o&&(f.m_sImage="CocheActif.png"),i.push(f));r.m_bFAARestaureConfigInitiale&&i.push({m_oLibelle:{m_sTraduction:"CONFINIT",sLibelle:"Restaurer la configuration initiale"},m_pfAction:function(n){t.OnConfigurationInitiale(n)}});e=r.m_tabConfigCourante;r.m_bSupprime&&r.m_bFAAAjouteSupprime&&0<e.length&&(i.length&&(i[i.length-1].m_bSeparateur=!0),clWDUtil.bForEach(e,function(n,r){var u={m_oLibelle:{sLibelle:n.m_sLibelle}};return n.m_bVisible?(u.m_pfAction=function(i){t.OnMasqueWidget(i,n,r)},u.m_sImage="CocheActif.png"):u.m_pfAction=function(i){t.OnAfficheWidget(i,n,r)},i.push(u),!0}));u=this.ms_eOuvreBasDroite;switch(t.m_oParametres.m_eBoutonMenuPosition){case 2:u=this.ms_eOuvreBasGauche;break;case 3:u=this.ms_eOuvreHautDroite;break;case 4:u=this.ms_eOuvreHautGauche}WDMenuContextuel.prototype.constructor.apply(this,[n,i,u])}}function WDTdbModeEdition(n,t,i){if(arguments.length){WDDrag.prototype.constructor.apply(this,[0,50]);this.m_oTdb=n;this.m_bAnnuleOnDragExit=!1;var u=this,r=[];clWDUtil.bForEach(n.m_oDonnees.m_tabConfigCourante,function(n,f){return r.push(new WDDnDElementModeEditionWidget(u,f,t,i)),!0});this.m_tabElements=r;this.m_tabElementsVides=[];this.m_oRedimensionnement=null;clWDUtil.ActiveDesactiveClassName(n.m_oHote,"wbTdbRedim",i);this.m_tabAffichageCourant=[];this.__Affiche(!0)}}function WDDnDElementModeEdition(n,t,i,r){var u,f;arguments.length&&(u=t.cloneNode(!0),u.id=t.id+"_"+r,u=n.m_oTdb.m_oHote.appendChild(u),f=clWDUtil.tabGetElementsByClass(u,"wbTdbME")[0]||u,WDDnDNatif.prototype.constructor.apply(this,[i,1,f,this.ms_nOperationDeplacement]),this.m_oTdbModeEdition=n,this.m_sModeleClasses=t.className,this.m_oElement=u,this.m_oElementDnD=f)}function WDDnDElementModeEditionWidget(n,t,i,r){var f,u,e;arguments.length&&(f=i?1:0,WDDnDElementModeEdition.prototype.constructor.apply(this,[n,n.m_oTdb.m_oModeleModeEdition,f,t]),this.m_nWidget=t,this.m_bRedimensionne=r,u=[],e=this.m_oElement,clWDUtil.bForEach(this.ms_tabRedimensionnmentClasse,function(n){return u.push({m_fMouseDown:null,m_oDiv:clWDUtil.tabGetElementsByClass(e,n)[0]}),!0}),this.m_tabRedimensionnement=u)}function WDDnDElementModeEditionVide(n,t){arguments.length&&WDDnDElementModeEdition.prototype.constructor.apply(this,[n,n.m_oTdb.m_oModeleModeEditionVide,0,t])}WDTdb.prototype=new WDChampParametresHote;WDTdb.prototype.constructor=WDTdb;WDTdb.prototype.ms_sClasseBase="WDTDB-Base";WDTdb.prototype.ms_sClasseWidget="WDTDB-Widget";WDTdb.prototype.ms_sClasseMasque="WDTDB-Masque";WDTdb.prototype.ms_sClasseLigne="WDTDB-Ligne";WDTdb.prototype.ms_sClasseColonne="WDTDB-Colonne";WDTdb.prototype.ms_sClasseLargeur="WDTDB-Largeur";WDTdb.prototype.ms_sClasseHauteur="WDTDB-Hauteur";WDTdb.prototype.ms_sActionAjoute="TDBAJO";WDTdb.prototype.ms_sActionSupprime="TDBSUP";WDTdb.prototype.ms_sActionDeplace="TDBDEP";WDTdb.prototype.ms_sActionRedimensionne="TDBRED";WDTdb.prototype.ms_sActionConfigInitiale="TDBCI";WDTdb.prototype.ms_nDeplace=1;WDTdb.prototype.ms_nSupprime=2;WDTdb.prototype.ms_nRedimensionne=4;WDTdb.prototype.Init=function(){WDChampParametresHote.prototype.Init.apply(this,arguments);this.__Affiche(!0)};WDTdb.prototype.OnDisplay=function(n,t){WDChampParametresHote.prototype.OnDisplay.apply(this,arguments);t&&this.__Affiche(!0)};WDTdb.prototype._vOnResize=function(){WDChampParametresHote.prototype._vOnResize.apply(this,arguments);this.__AncrageEnHauteur(!0);this.__Affiche(!0)};WDTdb.prototype._vLiaisonHTML=function(){var n,t;WDChampParametresHote.prototype._vLiaisonHTML.apply(this,arguments);this.m_oParametres.m_sBoutonMenuAlias&&(this.m_oBoutonMenu=_JGE(this.m_oParametres.m_sBoutonMenuAlias,document,!0));this.m_oModeleModeEdition=this.oGetIDElement("ME");this.m_oModeleModeEditionVide=this.oGetIDElement("MEV");clWDUtil.SetDisplay(this.m_oModeleModeEdition,!1);clWDUtil.SetDisplay(this.m_oModeleModeEditionVide,!1);this.m_bAncrageHauteur=0==this.m_oHote.offsetHeight;this.__AncrageEnHauteur(!1);n=this.m_tabCacheDivWidget;n.length||(t=this,clWDUtil.bForEach(this.m_oDonnees.m_tabConfigCourante,function(i,r){var u=t.oGetIDElement(r+1);return n[r]={m_oDiv:u,m_sClasses:u?u.className:""},!0}))};WDTdb.prototype.__AncrageEnHauteur=function(n){var i,r,u,t,f;if(this.m_bAncrageHauteur){if(n&&clWDUtil.SetDisplay(this.m_oHote,!1),i=this.m_oHote.parentNode,r=i.clientHeight,0==r&&bIEAvec11&&!bIEQuirks){for(u=i.offsetParent,t=u.offsetParent,f=document.body;t&&t!=f&&!clWDUtil.bBaliseEstTag(t,"td");)t=t.parentNode;r=t.clientHeight-u.getBoundingClientRect().height}this.m_oHote.style.height=r+"px";n&&clWDUtil.SetDisplay(this.m_oHote,!0)}};WDTdb.prototype.__Affiche=function(n){this.m_oHote&&clWDUtil.bEstDisplay(this.m_oHote,document,!0)&&this.__AfficheInterne(n)};WDTdb.prototype.__AfficheInterne=function(n){this.__PreparePositionnement();n|=this.__bCalculeOrganisation();n&&this.__AfficheContenu();this.__AfficheModeEdition();this.__AfficheBouton()};WDTdb.prototype.__PreparePositionnement=function(){this.PreparePositionnement(this.m_oDonnees.m_tabConfigCourante)};WDTdb.prototype.__CalculeNbLignesColonnesEffectives=function(n){var t=this.m_oParametres.m_nNbColonnes,r=this.m_oParametres.m_nTaille1CaseX,u=this.m_oParametres.m_nMargeX,f=r+u,e=this.m_oHote.offsetWidth,o=e+u,s=u/2,i;switch(this.m_oParametres.m_eMiseEnPage){case 0:s=Math.max(0,Math.floor((o-t*f)/2));break;case 1:t=Math.max(t,Math.floor(o/f));break;case 2:r=Math.max(r,Math.floor(e/t)-u)}this.m_nNbColonnesEffectif=t;this.m_nTaille1CaseXEffective=r;this.m_nOffsetCentrage=s;i=0;clWDUtil.bForEach(n,function(n){return n.m_bVisible&&(i=Math.max(i,n.m_nLigne+n.m_nHauteur)),!0});this.m_nNbLignesEffectif=i;this.m_nNbLignesVisiblesEffectif=Math.max(i,Math.ceil((this.m_oHote.offsetHeight-this.m_oParametres.m_nMargeY)/(this.m_oParametres.m_nTaille1CaseY+this.m_oParametres.m_nMargeY)))};WDTdb.prototype.__CalculeClassePositionnement=function(){var t=this.m_oStyleCacheDimension,s,h;t.Creation();var i="#"+this.sGetNomElement(this.ms_sSuffixeHote)+" .",c=this.m_oParametres.m_nMargeX,f=this.m_oParametres.m_nMargeY,e=this.m_nTaille1CaseXEffective,o=this.m_oParametres.m_nTaille1CaseY,n,u,r;for(u=this.m_nNbColonnesEffectif,r=c+e,s=this.m_nOffsetCentrage,n=0;n<u;n++)t.Ajoute(i+this.ms_sClasseColonne+n,["left:"+(s+r*n)+"px"]),t.Ajoute(i+this.ms_sClasseLargeur+(n+1),["width:"+(e+r*n)+"px"]);for(u=this.m_nNbLignesVisiblesEffectif,r=f+o,h=Math.floor(f/2),n=0;n<u;n++)t.Ajoute(i+this.ms_sClasseLigne+n,["top:"+(h+r*n)+"px"]),t.Ajoute(i+this.ms_sClasseHauteur+(n+1),["height:"+(o+r*n)+"px"]);t.Ajoute(i+this.ms_sClasseBase,["position:absolute;"+clWDUtil.m_sPrefixeCSS+"box-sizing: border-box;overflow:hidden"]);t.Ajoute(i+this.ms_sClasseWidget,["z-index:0"]);t.Ajoute(i+this.ms_sClasseMasque,["z-index:1"]);t.CreationFin()};WDTdb.prototype.__bCalculeOrganisation=function(){var n=!1;return clWDUtil.bPageStatique&&(n|=this.__bAutoCompacte()),n};WDTdb.prototype.__bAutoCompacte=function(){var n=!1;return this.m_oParametres.m_bAutoCompacte&&(n=this.__bBoucheTrous(),n&&this.__PreparePositionnement()),n};WDTdb.prototype.__bBoucheTrous=function(){for(var t,c,i,r,e,o,v,s,y,u=this.m_oDonnees.m_tabConfigCourante,l=oWidgetExterne.m_nNbLignesEffectif,f=oWidgetExterne.m_nNbColonnesEffectif,h=!1,a=new Array(l*f),n=0;n<l;n++)for(t=0;t<f;t++)if(!a[n*f+t]&&(c=this.nGetPosition(u,n,t),i=null,clWDUtil.nElementInconnu!=c?i=u[c]:(r=null,e=0,clWDUtil.bForEach(u,function(i){var o=i.m_nLargeur*i.m_nHauteur,f;return i.m_bVisible&&e<=o&&(n<i.m_nLigne||n==i.m_nLigne&&t<i.m_nColonne)&&(f={m_nLigne:n,m_nColonne:t,m_nLargeur:i.m_nLargeur,m_nHauteur:i.m_nHauteur},WDTdb.prototype.__s_bPositionDisponible(u,f,i)&&(e=e,r=i)),!0}),r&&(r.m_nColonne=t,r.m_nLigne=n,h=!0,i=r)),i))for(v=n+i.m_nHauteur,o=n;o<v;o++)for(y=t+i.m_nLargeur,s=t;s<y;s++)a[o*f+s]=!0;return h&&this.__CalculeNbLignesColonnesEffectives(u),h};WDTdb.prototype.__s_bPositionDisponible=function(n,t,i){return clWDUtil.bForEach(n,function(n){return!(n!==i&&n.m_bVisible&&WDTdb.prototype.__s_bIntersectionPositions(n,t))})};WDTdb.prototype.__s_bIntersectionPositions=function(n,t){return n.m_nColonne<t.m_nColonne+t.m_nLargeur&&t.m_nColonne<n.m_nColonne+n.m_nLargeur&&n.m_nLigne<t.m_nLigne+t.m_nHauteur&&t.m_nLigne<n.m_nLigne+n.m_nHauteur};WDTdb.prototype.__bEgalePositions=function(n,t){return n.m_nColonne==t.m_nColonne&&n.m_nLigne==t.m_nLigne&&n.m_nHauteur==t.m_nHauteur&&n.m_nLargeur==t.m_nLargeur};WDTdb.prototype.__AfficheContenu=function(){clWDUtil.bForEachThis(this.m_oDonnees.m_tabConfigCourante,this,this.bAfficheUnWidget)};WDTdb.prototype.__AfficheModeEdition=function(){this.m_oTdbModeEdition&&(this.m_oTdbModeEdition.Fin(),this.m_oTdbModeEdition=null);this.m_oDonnees.m_bEnModeEdition&&(this.m_oTdbModeEdition=new WDTdbModeEdition(this,this.m_oDonnees.m_bDeplace,this.m_oDonnees.m_bRedimensionne))};WDTdb.prototype.__AfficheBouton=function(){var n=this.m_oBoutonMenu,i,r,u,e,f;if(n){i=!1;r=!1;switch(this.m_oParametres.m_eBoutonMenuPosition){default:case 0:return;case 1:break;case 2:i=!0;break;case 3:r=!0;break;case 4:i=!0;r=!0}var t=this.m_oHote,o=t.parentNode,s=6;i&&(u=t.offsetWidth,0==u&&(u=o.offsetWidth),s=u-6-n.offsetWidth);e=6;r&&(f=t.offsetHeight,0==f&&(f=o.offsetHeight),e=f-6-n.offsetHeight);n.style.left=clWDUtil.nGetBoundingClientRectLeft(t,!1,!1)+s-clWDUtil.nGetBoundingClientRectLeft(n.offsetParent,!1,!1)+"px";n.style.top=clWDUtil.nGetBoundingClientRectTop(t,!1,!1)+e-clWDUtil.nGetBoundingClientRectTop(n.offsetParent,!1,!1)+"px";n.style.right="";n.style.bottom=""}};WDTdb.prototype.__AppelPCode=function(n,t,i){this.RecuperePCode(n)(t,this.m_oDonnees.m_tabConfigCourante[i].m_sNomFI)};WDTdb.prototype.__ActionServeur=function(n,t){this.m_oChampFormulaire.value=t+","+(this.m_oDonnees.m_bEnModeEdition?"1":"0")+","+this.sSauveConfiguration();try{var i=clWDUtil.sGetPageAction();_PAGE_.action=i+"#"+this.m_oHote.id;_JSL(_PAGE_,this.m_sAliasChamp,"_self",undefined,undefined,n)}finally{_PAGE_.action+=i}};WDTdb.prototype.__OnDisplayWidget=function(n,t){var i=this.m_tabCacheDivWidget[n].m_oDiv;i&&AppelMethode(WDChamp.prototype.ms_sOnDisplay,[i,t])};WDTdb.prototype.__s_AppelChangeTailleDeplace=function(n,t,i){var r,u;this instanceof WDTdb&&clWDUtil.bEstFils(n,this.m_oHote,document)&&(r=this.m_tabCacheDivWidget,r.length&&(clWDUtil.bForEach(r,function(t,i){return clWDUtil.bEstFils(n,t.m_oDiv,document)?(u=i,!1):!0})||(i.unshift(u),t.apply(this,i))))};WDTdb.prototype.__WLAfficheUnWidget=function(n,t,i){if(t.m_bVisible){var r=window[t.m_sAlias+"_PIR"];r&&r(n);this.OnAfficheWidget(n,t,i)}};WDTdb.prototype.OnOuvreMenu=function(n){WDMenuContextuelTdb.prototype.s_Ouvre(n,this)};WDTdb.prototype.OnModeEdition=function(){this.m_oDonnees.m_bEnModeEdition=!this.m_oDonnees.m_bEnModeEdition;this.m_oDonnees.m_bRedimensionne=!0;this.m_oDonnees.m_bDeplace=!0;this.m_oDonnees.m_bAjoute=!0;this.m_oDonnees.m_bSupprime=!0;this.__AfficheModeEdition()};WDTdb.prototype.OnConfigurationInitiale=function(){var n=[];clWDUtil.bForEachIn(this.m_oParametres.m_tabConfigInitiale,function(t,i){var r={};return clWDUtil.bForEachIn(i,function(n,t){return r[n]=t,!0}),n.push(r),!0});this.m_oDonnees.m_tabConfigCourante=n;this.__AfficheInterne(clWDUtil.bPageStatique);clWDUtil.bPageStatique||this.__ActionServeur(this.ms_sActionConfigInitiale,-1)};WDTdb.prototype.OnAfficheWidget=function(n,t,i){var r=this.m_oDonnees.m_tabConfigCourante;clWDUtil.bPageStatique&&(this.__s_bPositionDisponible(r,t)||this.s_CopiePosition(t,this.oGetNouvellePosition(t,r)));t.m_bVisible=!0;this.__AfficheInterne(clWDUtil.bPageStatique);clWDUtil.bPageStatique&&this.__OnDisplayWidget(i,!0);this.__AppelPCode(this.ms_nEventNavTdbAjoute,n,i);clWDUtil.bPageStatique||this.__ActionServeur(this.ms_sActionAjoute,i)};WDTdb.prototype.OnMasqueWidget=function(n,t,i){t.m_bVisible=!1;this.__AfficheInterne(clWDUtil.bPageStatique);clWDUtil.bPageStatique&&this.__OnDisplayWidget(i,!1);this.__AppelPCode(this.ms_nEventNavTdbSupprime,n,i);clWDUtil.bPageStatique||this.__ActionServeur(this.ms_sActionSupprime,i)};WDTdb.prototype.OnChangementConfiguration=function(n,t,i,r){var u=this.m_oDonnees.m_tabConfigCourante,f;if(this.__bEgalePositions(u[i],t[i]))return!0;clWDUtil.bForEach(u,function(n,i){return WDTdb.prototype.s_CopiePosition(n,t[i]),!0});this.__PreparePositionnement();this.__bCalculeOrganisation();f=r?this.ms_sActionRedimensionne:this.ms_sActionDeplace;this.__AppelPCode(r?this.ms_nEventNavTdbRedimensionnement:this.ms_nEventNavTdbDeplacement,n,i);clWDUtil.bPageStatique||this.__ActionServeur(f,i)};WDTdb.prototype.bAfficheUnWidget=function(n,t){var r,u,i;return n.m_bVisible&&(r=this.m_tabCacheDivWidget,t<r.length&&(u=r[t],i=u.m_oDiv,i&&(i.style.left="",i.style.top="",i.style.width="",i.style.height="",clWDUtil.SetDisplay(i,!0),i.className=u.m_sClasses+" "+this.sGetClassesPositionnement(!0,n.m_nLigne,n.m_nColonne,n.m_nLargeur,n.m_nHauteur)))),!0};WDTdb.prototype.bMasqueUnWidget=function(n){var i=this.m_tabCacheDivWidget,t;n<i.length&&(t=i[n].m_oDiv,t&&clWDUtil.SetDisplay(t,!1))};WDTdb.prototype.PreparePositionnement=function(n){this.__CalculeNbLignesColonnesEffectives(n);this.__CalculeClassePositionnement()};WDTdb.prototype.sGetClassesPositionnement=function(n,t,i,r,u){var f=[this.ms_sClasseBase];return n?f.push(this.ms_sClasseWidget):f.push(this.ms_sClasseMasque),f.push(this.ms_sClasseLigne+t),f.push(this.ms_sClasseColonne+i),f.push(this.ms_sClasseLargeur+r),f.push(this.ms_sClasseHauteur+u),f.join(" ")};WDTdb.prototype.oGetNouvellePosition=function(n,t,i){for(var o=n.m_bVisible,e=Math.min(n.m_nLargeur,this.m_nNbColonnesEffectif),s=n.m_nHauteur,u,h=this.m_nNbColonnesEffectif-e+1,f,r=0;r<1024;r++)for(u=0;u<h;u++)if(f={m_bVisible:o,m_nLigne:r,m_nColonne:u,m_nLargeur:e,m_nHauteur:s},(r!=n.m_nLigne||u!=n.m_nColonne)&&(!i||!this.__s_bIntersectionPositions(f,i))&&this.__s_bPositionDisponible(t,f,n))return f;return n};WDTdb.prototype.bColonneValidePourLargeur=function(n,t){return n+t<=this.m_nNbColonnesEffectif};WDTdb.prototype.s_CopiePosition=function(n,t){n.m_bVisible=t.m_bVisible;n.m_nLigne=t.m_nLigne;n.m_nColonne=t.m_nColonne;n.m_nLargeur=t.m_nLargeur;n.m_nHauteur=t.m_nHauteur};WDTdb.prototype.s_oDupliquePosition=function(n){var t={};return WDTdb.prototype.s_CopiePosition(t,n),t};WDTdb.prototype.nGetPosition=function(n,t,i){var r=clWDUtil.nElementInconnu;return clWDUtil.bForEach(n,function(n,u){return n.m_nLigne<=t&&t<n.m_nLigne+n.m_nHauteur&&n.m_nColonne<=i&&i<n.m_nColonne+n.m_nLargeur&&n.m_bVisible?(r=u,!1):!0}),r};WDTdb.prototype.bFaitDeLaPlace=function(n,t,i){for(var e=!1,f=t.m_nLigne,s=f+t.m_nHauteur,r,o,u;f<s;f++)for(r=t.m_nColonne,o=r+t.m_nLargeur;r<o;r++)u=this.nGetPosition(n,f,r),clWDUtil.nElementInconnu!=u&&i!=u&&(n[u]=this.oGetNouvellePosition(n[u],n,t),e=!0);return e};WDTdb.prototype.Affiche=function(n){var t,i;switch(typeof n){case"string":if(clWDUtil.bForEach(this.m_tabConfigCourante,function(r,u){return r.m_sNomFI==n?(t=r,i=u,!1):!0}))return;break;case"number":t=this.m_tabConfigCourante[n];i=n;break;default:clWDUtil.bForEach(this.m_tabConfigCourante,function(n,t){return this.__WLAfficheUnWidget(null,n,t),!0});return}this.__WLAfficheUnWidget(null,t,i)};WDTdb.prototype.bChargeConfiguration=function(n){var r=JSON.parse(n),i=this.m_oDonnees.m_tabConfigCourante,t=new Array(i.length);if(!clWDUtil.bForEach(r,function(n,u){return n?(clWDUtil.bForEach(i,function(n,i){return undefined!==t[i]?!0:n.m_sNomFI!=i.m_sNomFI?(t[i]=u,!1):!0})&&(r[u]=null),!0):!1}))return!1;clWDUtil.bForEach(i,function(n,i){return undefined!==t[i]&&(n.m_bVisible=!1),!0});clWDUtil.bForEach(i,function(n,u){var f,e,o,h,s,c,l;if(undefined!==t[u]){if(f=r[t[u]],e=!0,f.m_bVisible)for(o=f.m_nLigne,h=o+f.m_nHauteur;o<h&&e;o++)for(s=f.m_nColonne,c=s+f.m_nLargeur;s<c&&e;s++)l=this.nGetPosition(i,o,s),e&=clWDUtil.nElementInconnu!=l;e&&(WDTdb.prototype.s_CopiePosition(n,f),t[u]=undefined)}return!0});this.__AfficheInterne(clWDUtil.bPageStatique)};WDTdb.prototype.ConfigurationInitiale=function(n,t,i,r,u){var f,e;switch(typeof n){case"string":default:if(clWDUtil.bForEach(this.m_tabConfigCourante,function(t,i){return t.m_sNomFI==n?(f=t,e=i,!1):!0}))return;break;case"number":f=this.m_tabConfigCourante[n];e=n}undefined!==t&&(f.m_nColonne=Math.max(Math.min(t-1,this.m_nNbColonnesEffectif-1),0));undefined!==i&&(f.m_nLigne=Math.max(i-1,0));undefined!==r&&(f.m_nLargeur=Math.max(Math.min(r,this.m_nNbColonnesEffectif),1));undefined!==u&&(f.m_nHauteur=Math.max(u,1));this.__AfficheInterne(clWDUtil.bPageStatique)};WDTdb.prototype.nInfoXY=function(n,t){var i=this.m_oParametres.m_nMargeX,s=this.m_oParametres.m_nMargeY,r=this.m_nTaille1CaseXEffective,u=this.m_oParametres.m_nTaille1CaseY,f=i+r,e=i+u,h=this.m_nOffsetCentrage+i,o=0;return clWDUtil.bForEach(this.m_oDonnees.m_tabConfigCourante,function(i,c){if(i.m_bVisible){var l=(i.m_nColonne-1)*f+h,a=(i.m_nLigne-1)*e+s,v=l+(i.m_nLargeur-1)*f+r,y=a+(i.m_nHauteur-1)*e+u;if(l<=n&&n<=v&&a<=t&&t<=y)return o=c,!1}return!0}),o};WDTdb.prototype.SetMode=function(n){var t=this.m_oDonnees;0==n?t.m_bEnModeEdition=!1:(t.m_bRedimensionne=0!=(n&this.ms_nRedimensionne),t.m_bDeplace=0!=(n&this.ms_nDeplace),t.m_bSupprime=0!=(n&this.ms_nRedimensionne),t.m_bEnModeEdition=t.m_bRedimensionne||t.m_bDeplace);this.__AfficheModeEdition()};WDTdb.prototype.nGetMode=function(){var n=this.m_oDonnees;return(n.m_bRedimensionne?this.ms_nRedimensionne:0)+(n.m_bDeplace?this.ms_nDeplace:0)+(n.m_bSupprime?this.ms_nSupprime:0)};WDTdb.prototype.nOccurrence=function(n){switch(n){case 1:return this.m_oDonnees.m_tabConfigCourante.length;case 4:var t=0;return clWDUtil.bForEach(this.m_oDonnees.m_tabConfigCourante,function(n){return n.m_bVisible&&t++,!0}),t;default:return 0}};WDTdb.prototype.sSauveConfiguration=function(){return JSON.stringify(this.m_oDonnees.m_tabConfigCourante)};WDTdb.prototype.s_ChangeTailleWidget=function(n,t,i,r){WDChamp.prototype._AppelMethodePtr(WDTdb.prototype.__s_AppelChangeTailleDeplace,[n,WDTdb.prototype.ChangeTailleWidget,[t,i,r]])};WDTdb.prototype.ChangeTailleWidget=function(n,t,i,r){var h=this.m_oDonnees.m_tabConfigCourante,u,f,e,o,s;0!=(r&1)?(u=1,f=1,e=this.m_nTaille1CaseXEffective,e<t&&(u+=Math.round((t-e)/(e+this.m_oParametres.m_nMargeX))),o=this.m_oParametres.m_nTaille1CaseY,o<i&&(f+=Math.round((i-o)/(o+this.m_oParametres.m_nMargeY)))):(u=t,f=i);s=h[n];s.m_nLargeur=Math.max(Math.min(u,this.m_nNbColonnesEffectif),1);s.m_nHauteur=Math.max(f,1);0==(r&2)&&this.bFaitDeLaPlace(h,s,n);this.__AfficheInterne(clWDUtil.bPageStatique)};WDTdb.prototype.s_DeplaceWidget=function(n,t,i,r){WDChamp.prototype._AppelMethodePtr(WDTdb.prototype.__s_AppelChangeTailleDeplace,[n,WDTdb.prototype.DeplaceWidget,[t,i,r]])};WDTdb.prototype.DeplaceWidget=function(n,t,i,r){var o=this.m_oDonnees.m_tabConfigCourante,f,e,u;0!=(r&1)?(t-=this.m_nOffsetCentrage,t-=this.m_oParametres.m_nMargeX,i-=this.m_oParametres.m_nMargeY,f=Math.round(t/(this.m_nTaille1CaseXEffective+this.m_oParametres.m_nMargeX)),e=Math.round(i/(this.m_oParametres.m_nTaille1CaseY+this.m_oParametres.m_nMargeY))):(f=t-1,e=i-1);u=o[n];u.m_nColonne=Math.max(Math.min(f,this.m_nNbColonnesEffectif-1),0);u.m_nLigne=Math.max(e,0);0==(r&2)&&this.bFaitDeLaPlace(o,u,n);this.__AfficheInterne(clWDUtil.bPageStatique)};WDMenuContextuelTdb.prototype=new WDMenuContextuel;WDMenuContextuelTdb.prototype.constructor=WDMenuContextuelTdb;WDMenuContextuelTdb.prototype.ms_sNomTraductions="TDB_MENU";WDMenuContextuelTdb.prototype._vAction=function(n,t){t.m_pfAction(n)};WDMenuContextuelTdb.prototype.s_Ouvre=function(n,t){new WDMenuContextuelTdb(n,t)};WDTdbModeEdition.prototype=new WDDrag;WDTdbModeEdition.prototype.constructor=WDTdbModeEdition;WDTdbModeEdition.prototype.ms_eAutoriseNon=0;WDTdbModeEdition.prototype.ms_eAutorisePlus=1;WDTdbModeEdition.prototype.ms_eAutoriseMoins=2;WDTdbModeEdition.prototype.ms_eAutorisePlusMoins=3;WDTdbModeEdition.prototype._vbOnMouseDown=function(n,t,i,r,u){if(!WDDrag.prototype._vbOnMouseDown.apply(this,arguments))return!1;this.m_oRedimensionnement&&this.__LibereRedimensionnement();this.m_oRedimensionnement={m_sCurseurBody:document.body.style.cursor,m_nWidget:t,m_oVariationX:i,m_oVariationY:r,m_nOffsetGrilleXDernier:0,m_nOffsetGrilleYDernier:0};document.body.style.cursor=u+" !important"};WDTdbModeEdition.prototype._vbFiltrePremierMouseMove=clWDUtil.m_pfVide;WDTdbModeEdition.prototype._vOnMouseMove=function(n){var h,c,l,a,i;WDDrag.prototype._vOnMouseMove.apply(this,arguments);var t=this.m_oRedimensionnement,f=t.m_oVariationX,e=t.m_oVariationY,o=this.m_oTdb,s=o.m_oParametres,r=0,u=0;f&&(h=Math.max(Math.min(this.nGetOffsetPosX(n),f.m_nMax),f.m_nMin),c=s.m_nMargeX+o.m_nTaille1CaseXEffective,r=Math.round(h/c));e&&(l=Math.max(Math.min(this.nGetOffsetPosY(n),e.m_nMax),e.m_nMin),a=s.m_nMargeY+s.m_nTaille1CaseY,u=Math.round(l/a));(r!=t.m_nOffsetGrilleXDernier||u!=t.m_nOffsetGrilleYDernier)&&(this.__RAZAffichageCourant(),i=o.s_oDupliquePosition(this.m_tabAffichageCourant[t.m_nWidget]),f&&(f.m_bBasOuDroite?i.m_nLargeur+=r:(i.m_nLargeur-=r,i.m_nColonne+=r),t.m_nOffsetGrilleXDernier=r),e&&(e.m_bBasOuDroite?i.m_nHauteur+=u:(i.m_nHauteur-=u,i.m_nLigne+=u),t.m_nOffsetGrilleYDernier=u),o.bFaitDeLaPlace(this.m_tabAffichageCourant,i,t.m_nWidget),o.s_CopiePosition(this.m_tabAffichageCourant[t.m_nWidget],i),this.__Affiche(!1,!0))};WDTdbModeEdition.prototype._vOnMouseUp=function(n){this.m_oTdb.OnChangementConfiguration(n,this.m_tabAffichageCourant,this.m_oRedimensionnement.m_nWidget,!0);this.__LibereRedimensionnement();this.__Affiche(!0);WDDrag.prototype._vOnMouseUp.apply(this,arguments)};WDTdbModeEdition.prototype.__RAZAffichageCourant=function(){var n=this.m_tabAffichageCourant;clWDUtil.VideTableau(n);clWDUtil.bForEach(this.m_oTdb.m_oDonnees.m_tabConfigCourante,function(t){return n.push(WDTdb.prototype.s_oDupliquePosition(t)),!0})};WDTdbModeEdition.prototype.__Affiche=function(n,t){var u,a,o,s,v,r,e,f,c,k,l,d,y,p;n&&this.__RAZAffichageCourant();u=this.m_oTdb;a=this.m_tabAffichageCourant;u.PreparePositionnement(a);o=this.m_tabElementsVides;this.m_tabElementsVides=[];s=this.m_tabElementsVides;v=this.m_tabElements;t||clWDUtil.bForEach(v,function(n){return n.vMasque(),u.bMasqueUnWidget(n.m_nWidget),!0});for(var w=u.m_nNbLignesVisiblesEffectif,h=u.m_nNbColonnesEffectif,b=new Array(w*h),i=0;i<w;i++)for(r=0;r<h;r++)if(!b[i*h+r])if(e=u.nGetPosition(this.m_tabAffichageCourant,i,r),clWDUtil.nElementInconnu!=e)for(f=a[e],v[e].vAffiche(f.m_nLigne,f.m_nColonne,f.m_nLargeur,f.m_nHauteur,t),u.bAfficheUnWidget(f,e),k=i+f.m_nHauteur,c=i;c<k;c++)for(d=r+f.m_nLargeur,l=r;l<d;l++)b[c*h+l]=!0;else y=u.nGetPosition(o,i,r),clWDUtil.nElementInconnu!=y?s.push(o.splice(y,1)[0]):(p=new WDDnDElementModeEditionVide(this,s.length),p.vAffiche(i,r,1,1,t),s.push(p));this.__LibereElements(o)};WDTdbModeEdition.prototype.__LibereElements=function(n){while(0<n.length)n.pop().vLibereElement()};WDTdbModeEdition.prototype.__LibereRedimensionnement=function(){document.body.style.cursor=this.m_oRedimensionnement.m_sCurseurBody;this.m_oRedimensionnement=null};WDTdbModeEdition.prototype.__bOnDragSurvolWidget=function(n,t){var i=n.m_nWidget,f=t.m_nWidget,r=this.m_tabAffichageCourant[i],e={m_bVisible:!0,m_nLigne:t.m_nLigne,m_nColonne:t.m_nColonne,m_nLargeur:r.m_nLargeur,m_nHauteur:r.m_nHauteur},u=!0;return i!=f?r.m_bVisible=!1:u=!1,this.m_oTdb.bFaitDeLaPlace(this.m_tabAffichageCourant,e,i),this.__Affiche(!1),this.m_bAnnuleOnDragExit=!0,u};WDTdbModeEdition.prototype.__bOnDragSurvolVide=function(n,t){var r=!1,u=n.m_nWidget,i=this.m_tabAffichageCourant[u],f;return i.m_bVisible&&(i.m_bVisible=!1,r=!0),f={m_nLigne:t.m_nLigne,m_nColonne:t.m_nColonne,m_nLargeur:i.m_nLargeur,m_nHauteur:i.m_nHauteur},this.m_oTdb.bFaitDeLaPlace(this.m_tabAffichageCourant,f,u)&&(r=!0),r&&this.__Affiche(!1),!0};WDTdbModeEdition.prototype.__OnDnDAnnule=function(){this.m_bAnnuleOnDragExit=!1;this.__Affiche(!0)};WDTdbModeEdition.prototype.__tabGetPositionsCibleReelle=function(n,t){var i,r,o,u;if(undefined===t.m_oOffsetDernierDnDDest)return[];var s=this.m_oTdb,f=n.m_oOffsetDernierDnDSrc,e=t.m_oOffsetDernierDnDDest;var v=e.m_nCelluleX-f.m_nCelluleX,y=e.m_nCelluleY-f.m_nCelluleY,h=Math.min(Math.max(0,t.m_nColonne+v),s.m_nNbColonnesEffectif-1),c=Math.max(0,t.m_nLigne+y),p=h+n.m_nLargeur,w=c+n.m_nHauteur,l=[],a=[];for(i=c;i<w;i++)for(r=h;r<p;r++)o={m_nLigne:i,m_nColonne:r,m_nLargeur:1,m_nHauteur:1},u=s.nGetPosition(this.m_tabAffichageCourant,i,r),clWDUtil.nElementInconnu==u||clWDUtil.bDansTableau(a,u)||(o.m_nWidget=u,a.push(u)),l.push(o);return l};WDTdbModeEdition.prototype.Fin=function(){this.__LibereElements(this.m_tabElements);this.__LibereElements(this.m_tabElementsVides)};WDTdbModeEdition.prototype.fAttacheUnRedimensionnement=function(n,t,i,r,u){var f=this,e=function(n){return f.bOnMouseDown(n||event,t,i,r,u)?f._bStopPropagation(n):!0};return this._AttacheDetacheMouseDown(!0,n,e),e};WDTdbModeEdition.prototype.DetacheUnRedimensionnement=function(n,t){this._AttacheDetacheMouseDown(!1,n,t)};WDTdbModeEdition.prototype.OnOperationSurDropSans=function(n,t){var i=this.__tabGetPositionsCibleReelle(n,t);this.__OnDnDAnnule(n,i)};WDTdbModeEdition.prototype.bColonneValidePourLargeur=function(n,t){var i=this.__tabGetPositionsCibleReelle(n,t),r=i[0],u=this.m_tabAffichageCourant[n.m_nWidget];return this.m_oTdb.bColonneValidePourLargeur(r.m_nColonne,u.m_nLargeur)};WDTdbModeEdition.prototype.OnDragSurvol=function(n,t){var i=this.__tabGetPositionsCibleReelle(n,t);clWDUtil.bForEachThis(i,this,function(t,i){return undefined!==t.m_nWidget?this.__bOnDragSurvolWidget(n,t):0==i?this.__bOnDragSurvolVide(n,t):void 0})};WDTdbModeEdition.prototype.OnDragExit=function(n,t){var i=this.__tabGetPositionsCibleReelle(n,t);this.m_bAnnuleOnDragExit?this.m_bAnnuleOnDragExit=!1:this.__OnDnDAnnule(n,i)};WDTdbModeEdition.prototype.OnDrop=function(n,t){var e=t.m_oEvent,u=this.__tabGetPositionsCibleReelle(n,t),r,i,f;u&&u.length&&(r=u[0],i=this.m_tabAffichageCourant[n.m_nWidget],f=t!==n?!0:i.m_nColonne!=r.m_nColonne||i.m_nLigne!=r.m_nLigne,!1!=f&&(i.m_bVisible=!0,i.m_nColonne=r.m_nColonne,i.m_nLigne=r.m_nLigne,this.m_oTdb.OnChangementConfiguration(e,this.m_tabAffichageCourant,n.m_nWidget,!1)));this.__OnDnDAnnule(n,u)};WDDnDElementModeEdition.prototype=new WDDnDNatif;WDDnDElementModeEdition.prototype.constructor=WDDnDElementModeEdition;WDDnDElementModeEdition.prototype._vnGetOperationSurDrop=function(n){var t=this.ms_oDnDSource,i;return!(t instanceof WDDnDElementModeEdition)||this.m_oTdbModeEdition!==t.m_oTdbModeEdition?(this.m_oTdbModeEdition.OnOperationSurDropSans(t,this),this.ms_nOperationSans):(i=this._voGetOffsetAction(),this._bDropPossible(n,i)&&(this.m_oOffsetDernierDnDDest=i,!this.m_oTdbModeEdition.bColonneValidePourLargeur(t,this)))?(this.m_oTdbModeEdition.OnOperationSurDropSans(t,this),this.ms_nOperationSans):WDDnDNatif.prototype._vnGetOperationSurDrop.apply(this,arguments)};WDDnDElementModeEdition.prototype._vOnDragExit=function(){this.m_oTdbModeEdition.OnDragExit(this.ms_oDnDSource,this);delete this.m_oOffsetDernierDnDDest;WDDnDNatif.prototype._vOnDragExit.apply(this,arguments)};WDDnDElementModeEdition.prototype._vOnDrop=function(){WDDnDNatif.prototype._vOnDrop.apply(this,arguments);this.m_oTdbModeEdition.OnDrop(this.ms_oDnDSource,this)};WDDnDElementModeEdition.prototype._vbEmuleIE9=function(){return bIE&&nIE<10};WDDnDElementModeEdition.prototype.vAffiche=function(n,t,i,r){this.m_oElement.className=this.m_sModeleClasses+" "+this.m_oTdbModeEdition.m_oTdb.sGetClassesPositionnement(!1,n,t,i,r);clWDUtil.SetDisplay(this.m_oElement,!0);this.m_bVisible=!0;this.m_nLigne=n;this.m_nColonne=t;this.m_nLargeur=i;this.m_nHauteur=r};WDDnDElementModeEdition.prototype.vMasque=function(){clWDUtil.SetDisplay(this.m_oElement,!1)};WDDnDElementModeEdition.prototype.vLibereElement=function(){this._LibereElement(this.m_oElementDnD);clWDUtil.oSupprimeElement(this.m_oElement);delete this.m_oElementDnD;delete this.m_oElement};WDDnDElementModeEdition.prototype._bDropPossible=function(n,t){var i=this.ms_oDnDSource;if(this!==i||this.ms_nDnDSortieChamp==n)return!0;var r=i.m_oOffsetDernierDnDSrc,e=r.m_nCelluleX,o=r.m_nCelluleY,u=t.m_nCelluleX,f=t.m_nCelluleY;return-1!=u&&-1!=f&&(e!=u||o!=f)?!0:!1};WDDnDElementModeEdition.prototype._oGetOffsetAction=function(n,t){var r=this._oGetEvent(),u=this.m_oElement,f=this.m_oTdbModeEdition.m_oTdb,i=f.m_oParametres,e=this.__nGetCellule(this.oGetOffsetElementSiAutre(r,u,!1),n,f.m_nTaille1CaseXEffective,i.m_nMargeX),o=this.__nGetCellule(this.oGetOffsetElementSiAutre(r,u,!0),t,i.m_nTaille1CaseY,i.m_nMargeY);return{m_nCelluleX:e,m_nCelluleY:o}};WDDnDElementModeEdition.prototype.__nGetCellule=function(n,t,i,r){var f=i+r,u=Math.floor(n/f);return u<t?u:n-u*f<i?u:-1};WDDnDElementModeEditionWidget.prototype=new WDDnDElementModeEdition;WDDnDElementModeEditionWidget.prototype.constructor=WDDnDElementModeEditionWidget;WDDnDElementModeEditionWidget.prototype.ms_tabRedimensionnmentClasse=["wbTdbHG","wbTdbH","wbTdbHD","wbTdbD","wbTdbBD","wbTdbB","wbTdbBG","wbTdbG"];WDDnDElementModeEditionWidget.prototype.ms_tabRedimensionnmentCurseur=["SE-resize","N-resize","NE-resize","E-resize","SE-resize","N-resize","NE-resize","E-resize"];WDDnDElementModeEditionWidget.prototype._vSetDonneesDnD=function(){WDDnDElementModeEdition.prototype._vSetDonneesDnD.apply(this,arguments);this._SetEventDataSelonTypeAvecCorrection(this.ms_tabTypes[0],this.m_nWidget+"");this.m_oOffsetDernierDnDSrc=this._voGetOffsetAction()};WDDnDElementModeEditionWidget.prototype._vOnDragEnd=function(){WDDnDElementModeEdition.prototype._vOnDragEnd.apply(this,arguments);delete this.m_oOffsetDernierDnDSrc;delete this.m_oOffsetDernierDnDDest};WDDnDElementModeEditionWidget.prototype._vnOnDragSurvol=function(n,t){return t=WDDnDElementModeEdition.prototype._vnOnDragSurvol.apply(this,arguments),this._bDropPossible(n,this._voGetOffsetAction())&&this.m_oTdbModeEdition.OnDragSurvol(this.ms_oDnDSource,this),t};WDDnDElementModeEditionWidget.prototype.vAffiche=function(n,t,i,r,u){if(WDDnDElementModeEdition.prototype.vAffiche.apply(this,arguments),!u&&this.m_bRedimensionne){var o=this.m_oTdbModeEdition.m_oTdb,s=o.m_oParametres,f=s.m_nMargeX+o.m_nTaille1CaseXEffective,e=s.m_nMargeY+s.m_nTaille1CaseY,h=this.__oConstruitVariation(-t,i-1,!1,f,e),c=this.__oConstruitVariation(-n,r-1,!1,f,e),l=this.__oConstruitVariation(1-i,o.m_nNbColonnesEffectif-t-i,!0,f,e),a=this.__oConstruitVariation(1-r,1024,!0,f,e);this.__AttacheUnRedimensionnement(0,h,c);this.__AttacheUnRedimensionnement(1,null,c);this.__AttacheUnRedimensionnement(2,l,c);this.__AttacheUnRedimensionnement(3,l,null);this.__AttacheUnRedimensionnement(4,l,a);this.__AttacheUnRedimensionnement(5,null,a);this.__AttacheUnRedimensionnement(6,h,a);this.__AttacheUnRedimensionnement(7,h,null)}};WDDnDElementModeEditionWidget.prototype.vMasque=function(){this.__DetacheRedimensionnement();WDDnDElementModeEdition.prototype.vMasque.apply(this,arguments)};WDDnDElementModeEditionWidget.prototype.vLibereElement=function(){this.__DetacheRedimensionnement();WDDnDElementModeEdition.prototype.vLibereElement.apply(this,arguments)};WDDnDElementModeEditionWidget.prototype._voGetOffsetAction=function(){var n=this.m_oTdbModeEdition.m_tabAffichageCourant[this.m_nWidget];return this._oGetOffsetAction(n.m_nLargeur,n.m_nHauteur)};WDDnDElementModeEditionWidget.prototype.__oConstruitVariation=function(n,t,i,r,u){return n<=0&&0<=t&&n<t?{m_nMin:n*r,m_nMax:t*u,m_bBasOuDroite:i}:null};WDDnDElementModeEditionWidget.prototype.__AttacheUnRedimensionnement=function(n,t,i){var r=this.m_tabRedimensionnement[n],f,e,u,o;if(r.m_oDiv&&!r.m_fMouseDown){if(f=!!t,e=!!i,f&&e)u=n;else if(f)u=3;else if(e)u=1;else{r.m_oDiv.style.cursor="auto";return}o=this.ms_tabRedimensionnmentCurseur[u];r.m_oDiv.style.cursor=o;r.m_fMouseDown=this.m_oTdbModeEdition.fAttacheUnRedimensionnement(r.m_oDiv,this.m_nWidget,t,i,o)}};WDDnDElementModeEditionWidget.prototype.__DetacheRedimensionnement=function(){var n=this.m_oTdbModeEdition;clWDUtil.bForEach(this.m_tabRedimensionnement,function(t){return t.m_fMouseDown?(n.DetacheUnRedimensionnement(t.m_oDiv,t.m_fMouseDown),t.m_fMouseDown=null):t.m_oDiv&&(t.m_oDiv.style.cursor=""),!0})};WDDnDElementModeEditionVide.prototype=new WDDnDElementModeEdition;WDDnDElementModeEditionVide.prototype.constructor=WDDnDElementModeEditionVide;WDDnDElementModeEditionVide.prototype._vnOnDragSurvol=function(n,t){return t=WDDnDElementModeEdition.prototype._vnOnDragSurvol.apply(this,arguments),this.ms_nDnDEntreeChamp==n&&this.m_oTdbModeEdition.OnDragSurvol(this.ms_oDnDSource,this),t};WDDnDElementModeEditionVide.prototype._voGetOffsetAction=function(){return this._oGetOffsetAction(1,1)}