function WDCarteAPI(n){arguments.length&&(this.m_bModeWebDev=!!n,this.m_clCarte=undefined,this.m_sId="",this.m_tabMarker=[],this.m_tabItineraire=[],this.m_nTypeCarte_Initial=1,this.m_bAfficheControleZoom_Initial=!0,this.m_sImageMarqueur_Initial=null,this.m_nLatitude_Initial=null,this.m_nLongitude_Initial=null,this.m_sAdresse_Initial=null,this.m_nZoom_Initial=null,this.m_fChangementPosition=undefined,this.m_oChamp=undefined,WDCarteAPI.gclSingleton=this)}function WDCarteGoogleMaps(){arguments.length&&WDCarteAPI.prototype.constructor.apply(this,arguments)}WDCarteAPI.CreerIdentifiant=function(){return++WDCarteAPI.gnIdentifiant};WDCarteAPI.gnIdentifiant=-1;WDCarteAPI.gclSingleton=undefined;WDCarteAPI.gsIDClic="";WDCarteAPI.gsRetVal_SetPositionLieux="";WDCarteAPI.gnLatitudeDefaut=48.856558;WDCarteAPI.gnLongitudeDefaut=2.350966;WDCarteAPI.gnZoomDefaut=3;WDCarteAPI.s_pclFactory=function(n,t,i,r,u){var f=new n.prototype.constructor(i);return r&&r(f),f.CreateMap(t,u),f};WDCarteAPI.prototype._SetSize=function(n,t){var i=this.domGetBaliseSupport();i.style.width=n;i.style.height=t};WDCarteAPI.prototype.domGetBaliseSupport=function(){return document.getElementById(this.m_sId)};WDCarteAPI.prototype.EcouteChangementPosition=function(n){this.m_fChangementPosition=n};WDCarteAPI.bValideCoordonnees=function(n,t){return n<-90||n>90||t<-180||t>180?!1:!0};WDCarteGoogleMaps.prototype=new WDCarteAPI;WDCarteGoogleMaps.prototype.constructor=WDCarteGoogleMaps;WDCarteGoogleMaps.URL="http://maps.google.com/maps/api/js?v=3";WDCarteGoogleMaps._nModeCarteWlVersGGl=function(n){return n==1?google.maps.MapTypeId.ROADMAP:n==2?google.maps.MapTypeId.HYBRID:google.maps.MapTypeId.ROADMAP};WDCarteGoogleMaps.prototype.ConvPointToWord256x256=function(n){var u=this.m_clCarte.getProjection(),f=this.domGetBaliseSupport(),o=f.clientWidth,s=f.clientHeight,e=this.m_clCarte.getBounds(),h=e.getNorthEast(),c=e.getSouthWest(),t=u.fromLatLngToPoint(h),r=u.fromLatLngToPoint(c);t.x<r.x&&(t.x+=256);var l=t.x-r.x,a=r.y-t.y,i=new google.maps.Point(0,0);return i.x=r.x+n.x*l/o,i.x>256&&(i.x-=256),i.y=t.y+n.y*a/s,i};WDCarteGoogleMaps.prototype.ConvPointToVue=function(n){var u=this.m_clCarte.getProjection(),f=this.domGetBaliseSupport(),o=f.clientWidth,s=f.clientHeight,e=this.m_clCarte.getBounds(),h=e.getNorthEast(),c=e.getSouthWest(),t=u.fromLatLngToPoint(h),i=u.fromLatLngToPoint(c);t.x<i.x&&(t.x+=256);var l=t.x-i.x,a=i.y-t.y,r=new google.maps.Point(0,0);return r.x=o*(n.x-i.x)/l,r.y=s*(n.y-t.y)/a,r};WDCarteGoogleMaps.prototype._bMarqueurExiste=function(n){for(var i,t=0;t<this.m_tabMarker.length;++t)if(i=this.m_tabMarker[t],i!=null&&i.position.equals(n))return!0;return!1};WDCarteGoogleMaps.prototype._sGetLicence=function(){for(var t,n=0;n<document.scripts.length;++n){var i=document.scripts[n].src,r="//maps.google.com/maps/api/js?",u=i.indexOf(r);if(u>-1)return(t=i.substr(r.length+u),!t)?"":("&"+t).replace("&v=3","")}return""};WDCarteGoogleMaps.prototype._AjouteItineraireDeVers=function(n,t,i,r,u,f){for(var s,h,v,b,l,a,c,e,g,y,k,p,d={visible:!0},o=[],w=0;w<n.length;w++){if(s=n[w],h=undefined,s instanceof Array){if(!WDCarteAPI.bValideCoordonnees(s[0],s[1]))return"";h=new google.maps.LatLng(s[0],s[1]);this._bMarqueurExiste(h)&&(d.visible=!1)}else if(h=s,t==1)if(this.m_bModeWebDev)if(v=clWDAJAXMain.JSONExecute("https://maps.googleapis.com/maps/api/geocode/json?address="+h+this._sGetLicence()),v&&v.results&&v.results.length>0)b=v.results[0].geometry.location,h=new google.maps.LatLng(b.lat,b.lng);else continue;else continue;o.push(h)}l=google.maps.DirectionsTravelMode.DRIVING;switch(t){case 1:l=google.maps.DirectionsTravelMode.DRIVING;break;case 2:l=google.maps.DirectionsTravelMode.WALKING;break;case 3:l=google.maps.DirectionsTravelMode.BICYCLING;break;case 4:l=google.maps.DirectionsTravelMode.DRIVING}if(a=!0,c={},i!==undefined&&(c.strokeColor=i,a=!1),r!==undefined&&(c.strokeOpacity=r/100,a=!1),u!==undefined&&(c.strokeWeight=u,a=!1),o.length>2&&t!=1&&(c.path=o,a=!1),t==1)e=new google.maps.Polyline(c),e.distanceEnMetre=0,e.setPath(o);else{if(e=new google.maps.DirectionsRenderer(a?undefined:{polylineOptions:c,markerOptions:d}),e.distanceEnMetre=undefined,g=new google.maps.DirectionsService,y={origin:o[0],destination:o[o.length-1],travelMode:l},o.length>0){for(k=[],p=1;p<o.length-1;++p)k.push({location:o[p],stopover:!0});y.optimizeWaypoints=!0;y.waypoints=k}g.route(y,function(n,t){if(t==google.maps.DirectionsStatus.OK){e.setDirections(n);e.distanceEnMetre=n.routes[0].legs[0].distance.value;for(var i=1;i<n.routes[0].legs.length;i++)e.distanceEnMetre+=n.routes[0].legs[i].distance.value}else e.distanceEnMetre=0})}return e.setMap(this.m_clCarte),this.m_tabItineraire.push(e),e.m_nID=f||WDCarteAPI.CreerIdentifiant()};WDCarteGoogleMaps.prototype.EcouteChangementPosition=function(){WDCarteAPI.prototype.EcouteChangementPosition.apply(this,arguments);this.m_clCarte!==undefined&&this.m_fChangementPosition!==undefined&&google.maps.event.addListener(this.m_clCarte,"center_changed",this.m_fChangementPosition)};WDCarteGoogleMaps.prototype.CreateMap=function(n,t){var f=WDCarteAPI.gnLatitudeDefaut,e=WDCarteAPI.gnLongitudeDefaut,o,u,i,r;if(this.m_nLatitude_Initial!=null)f=this.m_nLatitude_Initial,e=this.m_nLongitude_Initial;else if(this.m_sAdresse_Initial){o=new google.maps.Geocoder;u=this;o.geocode({address:this.m_sAdresse_Initial},function(i,r){if(r==google.maps.GeocoderStatus.OK){var f=i[0].geometry.location;u.m_nLatitude_Initial=f.lat();u.m_nLongitude_Initial=f.lng();u.CreateMap(n,t)}});return}i=WDCarteAPI.gnZoomDefaut;this.m_nZoom_Initial!=null&&(i=this.m_nZoom_Initial);i==0&&(i=4);r={center:new google.maps.LatLng(f,e),zoom:i,mapTypeControl:!0,mapTypeId:WDCarteGoogleMaps._nModeCarteWlVersGGl(this.m_nTypeCarte_Initial),mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR},navigationControl:!0,zoomControl:!0,panControl:!0,scaleControl:!0,keyboardShortcuts:!1,disableDefaultUI:!0,noClear:!1,streetViewControl:!0,streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_TOP}};r.zoomControl=this.m_bAfficheControleZoom_Initial;r.panControl=this.m_bAfficheControleZoom_Initial;r.scaleControl=this.m_bAfficheControleZoom_Initial;this.m_sId=n;this.m_clCarte=new google.maps.Map(this.domGetBaliseSupport(),r);t&&t(this)};WDCarteGoogleMaps.prototype.MAP_SetPosition=function(n,t,i,r){if(!WDCarteAPI.bValideCoordonnees(n,t))return!1;var u=new google.maps.LatLng(n,t);i?this.m_clCarte.panTo(u):this.m_clCarte.setCenter(u);r&&r(!0)};WDCarteGoogleMaps.prototype.MAP_SetPositionLieux=function(n,t,i){WDCarteAPI.gsRetVal_SetPositionLieux="";var u=new google.maps.Geocoder,r=this;u.geocode({address:n},function(n,u){u==google.maps.GeocoderStatus.OK?(t?r.m_clCarte.panTo(n[0].geometry.location):r.m_clCarte.setCenter(n[0].geometry.location),WDCarteAPI.gsRetVal_SetPositionLieux="1",i&&i(!0)):(WDCarteAPI.gsRetVal_SetPositionLieux="0",i&&i(!1))})};WDCarteGoogleMaps.prototype.MAP_GetPositionLieux=function(n){WDCarteAPI.gsRetVal_SetPositionLieux="";var t=new google.maps.Geocoder;t.geocode({address:n},function(n,t){if(t==google.maps.GeocoderStatus.OK){var i=n[0].geometry.location;WDCarteAPI.gsRetVal_SetPositionLieux=""+i.lat()+","+i.lng()}else WDCarteAPI.gsRetVal_SetPositionLieux="0"})};WDCarteGoogleMaps.prototype.MAP_GetPosition=function(){var n=this.m_clCarte.getCenter();return""+n.lat()+","+n.lng()};WDCarteGoogleMaps.prototype.MAP_GetPositionFromPoint=function(n,t){var i=this.m_clCarte.getProjection();if(i==null)return"";var u=new google.maps.Point(n,t),f=this.ConvPointToWord256x256(u),r=i.fromPointToLatLng(f);return""+r.lat()+","+r.lng()};WDCarteGoogleMaps.prototype.MAP_GetPointFromPosition=function(n,t){var i;if(!WDCarteAPI.bValideCoordonnees(n,t)||(i=this.m_clCarte.getProjection(),i==null))return"";var u=new google.maps.LatLng(n,t),f=i.fromLatLngToPoint(u),r=this.ConvPointToVue(f);return""+r.x+","+r.y};WDCarteGoogleMaps.prototype.MAP_SetZoom=function(n){this.m_clCarte.setZoom(n)};WDCarteGoogleMaps.prototype.MAP_SetZoomAdapte=function(){if(!(this.m_tabMarker.length<=0)){var n=new google.maps.LatLngBounds;for(i=0;i<this.m_tabMarker.length;i++)n.extend(this.m_tabMarker[i].position);this.m_clCarte.fitBounds(n)}};WDCarteGoogleMaps.prototype.MAP_AjouteMarqueur=function(n,t,i,r,u,f){var h,s,e,o;return WDCarteAPI.bValideCoordonnees(n,t)?(h=new google.maps.LatLng(n,t),s="",this.m_sImageMarqueur_Initial!=null&&(s=this.m_sImageMarqueur_Initial,this.m_sImageMarqueur_Initial=null),u&&u.length&&(s=u),e=new google.maps.Marker({position:h,map:this.m_clCarte,icon:s,title:i}),this.m_tabMarker.push(e),e.ID_WD=f||WDCarteAPI.CreerIdentifiant(),r!=""&&(e.ActionClic_WD=r,o=this,google.maps.event.addListener(e,"click",function(){var n,t;if(WDCarteAPI.gsIDClic=e.ActionClic_WD,o.m_oChamp&&o.m_bModeWebDev)for(n=0;n<o.m_oChamp.m_oDonnees.m_tabMarqueurs.length;++n)if(t=o.m_oChamp.m_oDonnees.m_tabMarqueurs[n],t.pszGetIDInterne()==e.ID_WD){window[e.ActionClic_WD]?window[e.ActionClic_WD](t):clWDAJAXMain.AJAXExecuteSynchrone20(e.ActionClic_WD,o.m_oChamp.m_sAliasChamp,1,t);break}})),e.ID_WD):!1};WDCarteGoogleMaps.prototype.MAP_SupprimeMarqueur=function(n){for(var i=[],t=0;t<this.m_tabMarker.length;++t)this.m_tabMarker[t].ID_WD!=n?i.push(this.m_tabMarker[t]):this.m_tabMarker[t].setMap(null);return this.m_tabMarker.length===i.length?!1:(this.m_tabMarker=i,!0)};WDCarteGoogleMaps.prototype.MAP_ModifieMarqueur=function(n,t,i,r,u){var f,e;if(!WDCarteAPI.bValideCoordonnees(t,i))return!1;for(e=0;e<this.m_tabMarker.length;++e)this.m_tabMarker[e].ID_WD==n&&(f=this.m_tabMarker[e]);f&&(f.title=r,f.position=new google.maps.LatLng(t,i),this.m_sImageMarqueur_Initial!=null&&(f.icon=this.m_sImageMarqueur_Initial,this.m_sImageMarqueur_Initial=null),u!==undefined&&u!==null&&(f.icon=u),f.setMap(null),f.setMap(this.m_clCarte))};WDCarteGoogleMaps.prototype.MAP_SupprimeToutMarqueur=function(){for(var n=0;n<this.m_tabMarker.length;++n)this.m_tabMarker[n].setMap(null);this.m_tabMarker=[]};WDCarteGoogleMaps.prototype.MAP_SetModeCarte=function(n){this.m_clCarte.setMapTypeId(WDCarteGoogleMaps._nModeCarteWlVersGGl(n))};WDCarteGoogleMaps.prototype.MAP_GetModeCarte=function(){var n=this.m_clCarte.getMapTypeId();return n==google.maps.MapTypeId.ROADMAP?1:n==google.maps.MapTypeId.HYBRID?2:0};WDCarteGoogleMaps.prototype.MAP_GetZoom=function(){return this.m_clCarte.getZoom()};WDCarteGoogleMaps.prototype.MAP_AjouteItineraire=function(n,t,i,r,u,f,e,o,s){return this._AjouteItineraireDeVers([[n,t],[i,r]],u,f,e,o,s)};WDCarteGoogleMaps.prototype.MAP_AjouteItineraireStr=function(n,t,i,r,u,f,e){return this._AjouteItineraireDeVers([n,t],i,r,u,f,e)};WDCarteGoogleMaps.prototype.MAP_AjouteItineraireArray=function(n,t,i,r,u,f){return this._AjouteItineraireDeVers(n,t,i,r,u,f)};WDCarteGoogleMaps.prototype.MAP_SupprimeItineraire=function(n){for(var i=[],t=0;t<this.m_tabItineraire.length;++t)this.m_tabItineraire[t].m_nID!=n?i.push(this.m_tabItineraire[t]):this.m_tabItineraire[t].setMap(null);return this.m_tabItineraire.length==i.length?!1:(this.m_tabItineraire=i,!0)};WDCarteGoogleMaps.prototype.MAP_DistanceItineraire=function(n){for(var i,t=0;t<this.m_tabItineraire.length;++t)if(this.m_tabItineraire[t].m_nID==n)return(i=this.m_tabItineraire[t],i.distanceEnMetre==undefined)?"":i.distanceEnMetre;return-1};WDCarteGoogleMaps.prototype.MAP_SupprimeToutItineraire=function(){for(var n=0;n<this.m_tabItineraire.length;++n)this.m_tabItineraire[n].setMap(null);return this.m_tabItineraire=[],!0};WDCarteGoogleMaps.prototype.MAP_SetImageMarqueur=function(n){this.m_sImageMarqueur_Initial=n};WDCarteGoogleMaps.prototype.MAP_SuitDeplacement=function(n,t){this.m_clCarte.setTilt(n?45:0);var i=this;GPSSuitDeplacement(function(n){n!=null&&(t(n)||i.MAP_SetPosition(n.GetLatitude(),n.GetLongitude(),!0))})};WDCarteGoogleMaps.prototype.MAP_FinDeplacement=function(){GPSSuitDeplacement(null)};WDCarteGoogleMaps.prototype.UpdateSize=function(){google.maps.event.trigger(this.m_clCarte,"resize")};WDCarteGoogleMaps.prototype.PasseEnLectureSeuleEx=function(n){var t=!n;this.m_clCarte.setOptions({draggable:t,zoomControl:t,scrollwheel:t,disableDoubleClickZoom:!t,disableDefaultUI:!t,panControl:t,streetViewControl:t})};WDCarteGoogleMaps.prototype.PasseEnLectureSeule=function(){this.PasseEnLectureSeuleEx(!0)}