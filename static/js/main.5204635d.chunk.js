(this.webpackJsonpVSM=this.webpackJsonpVSM||[]).push([[0],{74:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(15),r=a.n(c),o=(a(74),a(6)),s=a(61),l=a(130),d=a(131),u=a(59),p=a(10),b=a(28),j=a.n(b),f=a(34),x=new WebSocket("ws://localhost:8765"),h=function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){try{x.send(JSON.stringify(t))}catch(i){console.log("you fucking moron this state should never occur"),a("error")}x.onmessage=function(i){var n=JSON.parse(i.data);n.request===t.request&&(n.error?a(n):e(n))}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=a(106),v=a(134),O=a(107),g=a(108),y=a(109),w=a(110),k=a(111),S=a(112),C=a(2),N=Object(m.a)((function(e){return{appBar:{flexGrow:1,marginBottom:"25px",display:"flex",flexDirection:"column",zIndex:5},menuButton:{marginRight:e.spacing(2)},action:{margin:"8px 0px 8px 0px"}}}));var _=function(e){var t=N();return Object(C.jsx)(v.a,{direction:"down",in:!0,children:Object(C.jsx)(O.a,{className:t.appBar,position:"static",color:"secondary",children:Object(C.jsxs)(g.a,{children:[Object(C.jsx)(y.a,{variant:"h6",color:"primary",style:{flexGrow:1},children:"VSM"}),Object(C.jsxs)("div",{className:t.actions,children:[Object(C.jsx)(w.a,{"aria-label":"account button lol","aria-controls":"menu-appbar","aria-haspopup":"true",edge:"end",color:"inherit",className:t.action,children:Object(C.jsx)(k.a,{})}),Object(C.jsx)(w.a,{"aria-label":"account button lol","aria-controls":"menu-appbar","aria-haspopup":"true",edge:"end",color:"inherit",className:t.action,children:Object(C.jsx)(S.a,{})})]})]})})})},I=a(24),D=a(113),q=a(125),F=a(126),L=a(88),E=a(127),T=a(133),A=a(136),B=a(114),P=Object(m.a)((function(e){return{}}));var M=function(e){P();var t=e.equippedChromaIndex,a=function(){var t=0;return Object.keys(e.levelData).map((function(a){var i=e.levelData[a];i.index>t&&(t=i.index)})),t.toString()}(),n=Object(i.useState)(e.equippedLevelIndex.toString()),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(i.useEffect)((function(){if(1!==t&&r!==a){s(a);var i=Object.values(e.levelData)[a-1];e.setter(i)}}),[t]),Object(i.useEffect)((function(){s(e.equippedLevelIndex.toString())}),[e.equippedLevelIndex]),Object(C.jsx)("div",{style:{width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-start"},children:Object(C.jsx)(A.a,{value:r,exclusive:!0,onChange:function(t,a){if(null!==a){s(a);var i=Object.values(e.levelData)[a-1];e.setter(i)}},"aria-label":"chroma level",style:{width:"90%",height:"95%"},children:Object.keys(e.levelData).map((function(i){var n=e.levelData[i],c=n.index.toString();return Object(C.jsx)(T.a,{title:n.level_type,arrow:!0,children:Object(C.jsx)(B.a,{selected:r===c,value:c,"aria-label":n.index,disabled:!n.unlocked||!(1===t&&1!==c)&&c!==a,children:n.shorthand_display_name})})}))})})},W=Object(m.a)((function(e){return{}}));var z=function(e){W();var t=Object(i.useState)(e.equippedChromaIndex.toString()),a=Object(o.a)(t,2),n=a[0],c=a[1];return Object(i.useEffect)((function(){c(e.equippedChromaIndex.toString())}),[e.equippedChromaIndex]),Object(C.jsx)("div",{style:{width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-end"},children:Object(C.jsx)(A.a,{value:n,exclusive:!0,onChange:function(t,a){if(null!==a){c(a);var i=Object.values(e.chromaData)[a-1];e.setter(i)}},"aria-label":"skin level",style:{width:"90%",height:"95%",justifyContent:"flex-end",marginLeft:0},children:Object.keys(e.chromaData).map((function(t){var a=e.chromaData[t],i=a.index.toString();return null!==a.swatch_icon?Object(C.jsx)(T.a,{title:a.unlocked?a.display_name:"".concat(a.display_name," (Locked)"),arrow:!0,children:Object(C.jsx)(B.a,{selected:n===i,value:i,"aria-label":a.index,disabled:!a.unlocked,children:Object(C.jsx)("img",{src:a.swatch_icon,style:{width:"25px",height:"auto",filter:a.unlocked?"":"grayscale(75%)"}})})}):null}))})})},G=Object(m.a)((function(e){return{weaponPaper:{width:"100%",height:"70px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"0.1s ease-out !important","&:hover":{border:"1px ".concat(e.palette.primary.main," solid")}},container:{width:"93%",height:"90%",display:"flex"},tierImage:{height:"25px",alignSelf:"flex-end",margin:"3px 3px",position:"relative",bottom:"-3px",objectFit:"contain",objectPosition:"left center"},favoriteButton:{alignSelf:"flex-end",right:"2px",height:"25px",objectPosition:"center center"}}}));var V=function(e){var t=G(),a=Object(I.a)(),n=e.skinData,c="2f59173c-4bed-b6c3-2191-dea9b58be9c7"===e.weaponData.uuid,r=e.skinData.favorite,s=Object(i.useState)(n.uuid===e.equipped.uuid),l=Object(o.a)(s,2),d=l[0],u=l[1];return Object(i.useEffect)((function(){e.equipped.uuid===n.uuid?u(!0):u(!1)}),[e.equipped]),Object(C.jsx)(L.a,{variant:"outlined",className:t.weaponPaper,onClick:function(){e.equip(n.uuid)},style:{border:r?"1px ".concat(a.palette.warning.light," solid"):d?"1px ".concat(a.palette.primary.light," solid"):null},children:Object(C.jsx)("div",{className:t.container,style:{backgroundImage:"url(".concat(n.display_icon,")"),backgroundSize:c?"auto 87%":"contain",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",flexDirection:c?"column":"row",justifyContent:c?"flex-end":null},children:Object(C.jsx)("img",{alt:n.content_tier.display_name,src:n.content_tier.display_icon,className:t.tierImage,style:{left:c?"5px":"-5px"}})})})},R=a(117),U=a(115),J=a(116),H=a(118),Y=Object(m.a)((function(e){return{header:{width:"auto",display:"flex",marginTop:"15px",flexWrap:"wrap"},headerButton:{marginLeft:e.spacing(.25)}}}));var K=function(e){var t=Y(),a=Object(I.a)(),i=e.equippedSkinData,n=e.inventoryData,c=e.saving,r=e.saveCallback,o=e.isFavorite,s=e.favoriteCallback;return Object(C.jsxs)("div",{className:t.header,children:[Object(C.jsx)("div",{style:{width:"auto",alignSelf:"center"},children:"Standard"!==i.content_tier.dev_name?Object(C.jsx)("img",{alt:i.content_tier.dev_name,src:i.content_tier.display_icon,style:{width:"auto",height:"40px",justifySelf:"center",marginRight:"10px"}}):null}),Object(C.jsxs)("div",{children:[Object(C.jsx)(y.a,{variant:"h5",children:i.display_name}),Object(C.jsxs)(y.a,{variant:"overline",children:["Battlepass"!==i.content_tier.dev_name?i.content_tier.dev_name:null," ",n.display_name]})]}),Object(C.jsxs)("div",{style:{flexGrow:1,display:"flex",height:"100%",justifyContent:"flex-end"},children:[Object(C.jsx)(T.a,{title:o?"Remove skin from favorites":"Add skin to favorites",className:t.headerButton,children:Object(C.jsx)(w.a,{onClick:s,style:{height:"40px",width:"40px"},children:o?Object(C.jsx)(U.a,{}):Object(C.jsx)(J.a,{})})}),Object(C.jsx)(T.a,{title:"Save",className:t.headerButton,children:c?Object(C.jsx)(R.a,{color:a.palette.secondary.dark,style:{margin:"10px",height:"20px",width:"20px"}}):Object(C.jsx)(w.a,{onClick:r,style:{height:"40px",width:"40px"},children:Object(C.jsx)(H.a,{})})})]})]})},Q=a(119),X=a(120),Z=a(121),$=a(122),ee=a(123),te=a(124),ae=Object(m.a)((function(e){return{equippedActions:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"10px",marginLeft:"10px",padding:"2px"},previewAction:{height:"35px",width:"35px",alignSelf:"center",margin:e.spacing(.25)},previewActionIcon:{width:"20px",height:"20px"}}}));var ie=function(e){var t=ae(),a=(Object(I.a)(),e.hasAlternateMedia),i=e.showingVideo,n=e.changeVideoStateCallback,c=e.isFavoriteLevel,r=e.isFavoriteChroma,o=e.toggleFavoriteLevelCallback,s=e.toggleFavoriteChromaCallback,l=e.canFavoriteLevels,d=e.canFavoriteChromas,u=a||l||d;return Object(C.jsx)(C.Fragment,{children:u?Object(C.jsxs)(L.a,{variant:"outlined",outlinecolor:"secondary",className:t.equippedActions,children:[l?Object(C.jsx)(T.a,{title:c?"Remove level from favorites":"Add level to favorites",children:Object(C.jsx)(w.a,{onClick:o,"aria-label":"favorite level",className:t.previewAction,children:c?Object(C.jsx)(Q.a,{className:t.previewActionIcon}):Object(C.jsx)(X.a,{className:t.previewActionIcon})})}):null,d?Object(C.jsx)(T.a,{title:r?"Remove chroma from favorites":"Add chroma to favorites",children:Object(C.jsx)(w.a,{onClick:s,"aria-label":"favorite chroma",className:t.previewAction,children:r?Object(C.jsx)(Z.a,{className:t.previewActionIcon}):Object(C.jsx)($.a,{className:t.previewActionIcon})})}):null,a?Object(C.jsx)(T.a,{title:i?"Stop video preview":"Play video preview",children:Object(C.jsx)(w.a,{onClick:function(){n(!i)},"aria-label":"preview",className:t.previewAction,children:i?Object(C.jsx)(ee.a,{className:t.previewActionIcon}):Object(C.jsx)(te.a,{className:t.previewActionIcon})})}):null]}):null})},ne=Object(m.a)((function(e){return{backdrop:{zIndex:3},masterGrid:{display:"flex",margin:"auto",height:"100%",width:"100%"},mainPaper:{margin:"auto",width:"100%",height:"90vh",display:"flex",justifySelf:"flex-start",justifyContent:"center",alignContent:"flex-start",flexWrap:"wrap",overflow:"auto","&::-webkit-scrollbar":{width:4},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"darkgrey",outline:"1px solid slategrey",backgroundClip:"padding-box"}},paperOnTopContent:{width:"92%",background:"#424242",paddingBottom:"10px",display:"flex",flexDirection:"column",position:"sticky",top:0,zIndex:4},mainSkinMedia:{width:"100%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",marginTop:"10px",transition:"all .2s ease"},paperCustomizingContent:{width:"92%",height:"auto",marginTop:"5px",display:"flex",flexDirection:"column",overflowY:"auto",alignItems:"stretch",top:0},levelSelectors:{height:"45px",display:"flex",flexDirection:"row",width:"100%",marginBottom:"15px"},skinSelector:{marginBottom:"15px",marginTop:"15px",padding:"2px 2px",display:"flex",justifyContent:"center"}}}));var ce=function(e){var t=ne(),a=(Object(I.a)(),e.inventoryData[e.weaponUuid]),n=a.skins,c=e.initialSkinData,r=Object(i.useState)(n[c.skin_uuid]),s=Object(o.a)(r,2),l=s[0],d=s[1],u=Object(i.useState)(n[c.skin_uuid].levels[e.loadoutWeaponData.level_uuid]),p=Object(o.a)(u,2),b=p[0],j=p[1],f=Object(i.useState)(n[c.skin_uuid].chromas[e.loadoutWeaponData.chroma_uuid]),x=Object(o.a)(f,2),h=x[0],m=x[1],v=Object(i.useState)(n[c.skin_uuid].favorite),O=Object(o.a)(v,2),g=O[0],y=O[1],w=Object(i.useState)(),k=Object(o.a)(w,2),S=k[0],N=k[1],_=Object(i.useState)(),T=Object(o.a)(_,2),A=T[0],B=T[1],P=Object(i.useState)(!0),W=Object(o.a)(P,2),G=W[0],R=W[1],U=Object(i.useState)(!0),J=Object(o.a)(U,2),H=J[0],Y=J[1],Q=Object(i.useState)(!1),X=Object(o.a)(Q,2),Z=X[0],$=X[1],ee=Object(i.useState)(!1),te=Object(o.a)(ee,2),ae=te[0],ce=te[1],re=Object(i.useState)(!0),oe=Object(o.a)(re,2),se=oe[0],le=oe[1],de=Object(i.useState)(!1),ue=Object(o.a)(de,2),pe=ue[0],be=ue[1],je=Object(i.useState)(!1),fe=Object(o.a)(je,2),xe=fe[0],he=fe[1],me=Object(i.useState)(!1),ve=Object(o.a)(me,2),Oe=ve[0],ge=ve[1];function ye(e){for(var t=n[e],a=0,i=0,c=0;c<Object.keys(t.levels).length;c++)!0===t.levels[Object.keys(t.levels)[c]].unlocked&&(a=t.levels[Object.keys(t.levels)[c]].index);for(var r=0;r<Object.keys(t.chromas).length;r++)!0===t.chromas[Object.keys(t.chromas)[r]].unlocked&&(i=t.chromas[Object.keys(t.chromas)[r]].index);d(t),j(t.levels[Object.keys(t.levels)[a-1]]),m(t.chromas[Object.keys(t.chromas)[i-1]]),be(!1)}return Object(i.useEffect)((function(){se&&(document.title="VSM // ".concat(a.display_name))}),[se]),Object(i.useEffect)((function(){he(null!==h.video_preview||null!==b.video_preview),y(l.favorite),function(){for(var e=l.levels,t=[],a=0,i=Object.keys(e);a<i.length;a++){var n=e[i[a]];n.favorite&&t.push(n.uuid)}N(t),t.includes(b.uuid)?$(!0):$(!1);1===Object.keys(e).length?R(!1):R(!0)}(),function(){for(var e=l.chromas,t=[],a=0,i=Object.keys(e);a<i.length;a++){var n=e[i[a]];n.favorite&&t.push(n.uuid)}B(t),t.includes(h.uuid)?ce(!0):ce(!1);1===Object.keys(e).length?Y(!1):Y(!0)}()}),[l,b,h]),null==a&&null==c?null:Object(C.jsx)(q.a,{open:se,className:t.backdrop,children:Object(C.jsx)(F.a,{container:!0,className:t.masterGrid,direction:"row",justifyContent:"center",alignItems:"center",children:Object(C.jsx)(F.a,{item:!0,xl:3,lg:5,md:6,sm:10,xs:12,style:{display:"flex",marginTop:"10px"},children:Object(C.jsxs)(L.a,{className:t.mainPaper,children:[Object(C.jsxs)("div",{className:t.paperOnTopContent,children:[Object(C.jsx)(K,{equippedSkinData:l,inventoryData:a,saving:Oe,saveCallback:function(){ge(!0);var t={weaponUuid:e.weaponUuid,skinUuid:l.uuid,levelUuid:b.uuid,chromaUuid:h.uuid},a=c.skin_uuid,i=c.chroma_uuid,n=c.level_uuid,r=b.uuid===n&&h.uuid===i&&l.uuid===a,o=JSON.stringify(t),s=!1;e.saveCallback(o,r).then((function(){s=!0,le(!1),setTimeout((function(){e.closeEditor()}),300)})),setTimeout((function(){s||(le(!1),setTimeout((function(){e.closeEditor()}),300))}),3e3)},isFavorite:g,favoriteCallback:function(){n[l.uuid].favorite=!g,y(!g)}}),Object(C.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row"},children:[Object(C.jsx)(L.a,{variant:"outlined",outlinecolor:"secondary",className:t.mainSkinMedia,style:{height:pe?"250px":"125px"},children:function(){var e=!1;return null!==h.video_preview&&(e=!0),pe?pe&&null!==b.video_preview?Object(C.jsx)(D.a,{in:!0,children:Object(C.jsx)("video",{src:e?h.video_preview:b.video_preview,type:"video/mp4",autoPlay:!0,onEnded:function(){be(!1)},style:{width:"auto",height:"100%",overflow:"hidden",objectFit:"contain",flexGrow:1,alignSelf:"center"}})}):void be(!1):Object(C.jsx)(D.a,{in:!0,children:Object(C.jsx)("img",{alt:h.display_name,src:h.display_icon,style:{maxWidth:"90%",maxHeight:"85%",objectFit:"contain",alignSelf:"center",overflow:"hidden"}})})}()}),Object(C.jsx)(ie,{hasAlternateMedia:xe,showingVideo:pe,changeVideoStateCallback:be,toggleFavoriteLevelCallback:function(){var e=b.uuid,t=S,a=!t.includes(b.uuid);a&&!t.includes(e)?t.push(e):!a&&t.includes(e)&&t.splice(t.indexOf(e),1),$(a),N(t),n[l.uuid].levels[b.uuid].favorite=a},isFavoriteLevel:Z,toggleFavoriteChromaCallback:function(){var e=h.uuid,t=A,a=!t.includes(h.uuid);a&&!t.includes(e)?t.push(e):!a&&t.includes(e)&&t.splice(t.indexOf(e),1),ce(a),B(t),n[l.uuid].chromas[h.uuid].favorite=a},isFavoriteChroma:ae,canFavoriteLevels:G,canFavoriteChromas:H})]})]}),Object(C.jsxs)("div",{className:t.paperCustomizingContent,children:[Object(C.jsxs)("div",{className:t.levelSelectors,children:[Object(C.jsx)(M,{levelData:l.levels,equippedLevelIndex:b.index,equippedChromaIndex:h.index,setter:j}),Object(C.jsx)(z,{chromaData:l.chromas,equippedChromaIndex:h.index,setter:m})]}),Object(C.jsx)(E.a,{variant:"middle"}),Object(C.jsx)("div",{className:t.skinSelector,children:Object(C.jsx)(F.a,{style:{width:"100%",height:"100%",justifySelf:"center"},container:!0,justifyContent:"left",direction:"row",alignItems:"center",spacing:1,children:Object.keys(n).map((function(e){var t=n[e];return Object(C.jsx)(F.a,{item:!0,xs:4,children:Object(C.jsx)(V,{skinData:t,weaponData:a,equip:ye,equipped:l})})}))})})]})]})})})})},re=a(89),oe=a(128),se={"29a0cfab-485b-f5d5-779a-b59f85e204a8":["100px","20px"],"42da8ccc-40d5-affc-beec-15aa47b42eda":["130px","20px"],"44d4e95c-4157-0037-81b2-17841bf2e8e3":["100px","10px"],"1baa85b4-4c70-1284-64bb-6481dfc3bb4e":["140px","30px"],"e336c6b8-418d-9340-d77f-7a9e4cfe0702":["140px","20px"],"f7e1b454-4ad4-1063-ec0a-159e56b58941":["195px","20px"],"462080d1-4035-2937-7c09-27aa2a5c27a7":["200px","20px"],"910be174-449b-c412-ab22-d0873436b21b":["235px","40px"],"ec845bf4-4f79-ddda-a3da-0db3774b2794":["240px","30px"],"ae3de142-4d85-2547-dd26-4e90bed35cf7":["240px","20px"],"4ade7faa-4cf1-8376-95ef-39884480959b":["240px","60px"],"ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a":["250px","30px"],"9c82e19d-4575-0200-1a81-3eacf00cf872":["240px","30px"],"c4883e50-4494-202c-3ec3-6b8a9284f00b":["250px","70px"],"a03b24d3-4319-996d-0f8c-94bbfba1dfc7":["240px","100px"],"55d8a0f4-4274-ca67-fe2c-06ab45efdf58":["260px","80px"],"63e6c2b6-4a8e-869c-3d4c-e38355226584":["270px","40px"],"2f59173c-4bed-b6c3-2191-dea9b58be9c7":["auto","20px"]},le=Object(m.a)((function(e){return{weaponContainerVideo:{position:"absolute",objectFit:"cover",width:"auto",height:"auto"},weaponPaper:{flexDirection:"row",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:-1,transition:"0.1s ease-out !important","&:hover":{border:"1px ".concat(e.palette.primary.main," solid")}},bottomGradient:{background:"linear-gradient(to bottom, rgba(0,0,0,0) 60%,rgba(0,0,0,.175) 100%)",zIndex:0,width:"100%",height:"100%"},dataContainer:{width:"100%",height:"100%",display:"flex",position:"relative",top:"-100%"},textContainer:{display:"flex",flexDirection:"column",width:"100%",height:"100%",alignSelf:"flex-start",alignItems:"center",justifyContent:"center",backgroundPosition:"center",overflow:"visible",zIndex:1},buddyContainer:{display:"flex",maxWidth:"50px",height:"100%",position:"relative",right:0,bottom:7},buddyImage:{width:"100%",height:"auto",objectFit:"contain",alignSelf:"flex-end"},weaponLabelHolder:{display:"flex",width:"80%",height:"50%",position:"relative",alignSelf:"flex-start",left:12,bottom:-22},weaponLabel:{textAlign:"left",width:"100%",flexGrow:1,height:"auto",alignSelf:"flex-end",textOverflow:"ellipsis"}}}));var de=function(e){var t=le(),a=(Object(I.a)(),!1),n=Object(i.useState)(!0),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(i.useState)(!1),d=Object(o.a)(l,2),u=d[0],p=d[1],b=Object(i.useState)({}),j=Object(o.a)(b,2),f=j[0],x=j[1],h=Object(i.useState)(!1),m=Object(o.a)(h,2),v=m[0],O=m[1];Object(i.useEffect)((function(){if(void 0!==e.data){var t=null!==f?f.chroma_uuid:"";!1===a&&e.data.chroma_uuid!==t&&(a=!0,setTimeout((function(){s(!0),setTimeout((function(){x(e.data),setTimeout((function(){s(!1),a=!1}),g())}),g())}),g())),e.data.buddy_name!==f.buddy_name&&setTimeout((function(){p(!0),setTimeout((function(){x(e.data),setTimeout((function(){p(!1)}),g())}),g())}),g())}}),[e.data]);var g=function(){return 150*Math.random()+100};return Object(C.jsx)(re.a,{in:!r,children:Object(C.jsxs)(L.a,{className:t.weaponPaper,variant:"outlined",onMouseEnter:function(){O(!0)},onMouseLeave:function(){O(!1)},onMouseDown:function(){e.weaponEditorCallback(e.uuid)},style:{backgroundPosition:"2f59173c-4bed-b6c3-2191-dea9b58be9c7"===e.uuid?"50% 35%":e.useLargeWeaponImage?"50% 50%":"50% 40%",backgroundImage:f!=={}?"url(".concat(f.skin_image,")"):'url("https://media.valorant-api.com/weapons/'.concat(e.uuid,'/displayicon.png")'),backgroundSize:"2f59173c-4bed-b6c3-2191-dea9b58be9c7"!==e.uuid?e.useLargeWeaponImage?"calc(".concat(se[e.uuid][0]," + ").concat(se[e.uuid][1],") auto"):"".concat(e.uuid in se?se[e.uuid][0]:"250px"," auto"):"auto 80%"},children:[Object(C.jsx)("div",{className:t.bottomGradient}),Object(C.jsxs)("div",{className:t.dataContainer,children:[Object(C.jsxs)("div",{className:t.textContainer,children:[Object(C.jsx)("div",{className:t.weaponLabelHolder,children:Object(C.jsx)(y.a,{className:t.weaponLabel,variant:"overline",children:e.displayName})}),Object(C.jsx)("div",{style:{width:"80%",alignSelf:"flex-start",position:"relative",left:12},children:Object(C.jsx)(oe.a,{in:v,children:Object(C.jsx)(y.a,{className:t.weaponLabel,variant:"body2",style:{marginTop:"14px",marginBottom:"5px"},children:f.skin_name})})})]}),Object(C.jsx)(D.a,{in:!u,children:Object(C.jsx)("div",{className:t.buddyContainer,style:{width:e.isSidearm?"20%":"14%"},children:"2f59173c-4bed-b6c3-2191-dea9b58be9c7"!==e.uuid?Object(C.jsx)("img",{alt:f.buddy_name,className:t.buddyImage,src:""!==f.buddy_image?f.buddy_image:null}):Object(C.jsx)("img",{alt:"",src:""})})})]})]})})},ue=Object(m.a)((function(e){return{root:{display:"flex",margin:"auto",height:"100%",width:"100%"},collectionMainGridItem:{display:"flex",alignItems:"center"},collectionItem:{height:"113px"}}})),pe=[[{type:"weapon",sidearm:!0,uuid:"29a0cfab-485b-f5d5-779a-b59f85e204a8",displayName:"Classic"},{type:"weapon",sidearm:!1,uuid:"f7e1b454-4ad4-1063-ec0a-159e56b58941",displayName:"Stinger"},{type:"weapon",sidearm:!1,uuid:"ae3de142-4d85-2547-dd26-4e90bed35cf7",displayName:"Bulldog"},{type:"weapon",sidearm:!1,uuid:"c4883e50-4494-202c-3ec3-6b8a9284f00b",displayName:"Marshal"}],[{type:"weapon",sidearm:!0,uuid:"42da8ccc-40d5-affc-beec-15aa47b42eda",displayName:"Shorty"},{type:"weapon",sidearm:!1,uuid:"462080d1-4035-2937-7c09-27aa2a5c27a7",displayName:"Spectre"},{type:"weapon",sidearm:!1,uuid:"4ade7faa-4cf1-8376-95ef-39884480959b",displayName:"Guardian"},{type:"weapon",sidearm:!1,uuid:"a03b24d3-4319-996d-0f8c-94bbfba1dfc7",displayName:"Operator"}],[{type:"weapon",sidearm:!0,uuid:"44d4e95c-4157-0037-81b2-17841bf2e8e3",displayName:"Frenzy"},{type:"weapon",sidearm:!1,uuid:"910be174-449b-c412-ab22-d0873436b21b",displayName:"Bucky"},{type:"weapon",sidearm:!1,uuid:"ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a",displayName:"Phantom"},{type:"weapon",sidearm:!1,uuid:"55d8a0f4-4274-ca67-fe2c-06ab45efdf58",displayName:"Ares"}],[{type:"weapon",sidearm:!0,uuid:"1baa85b4-4c70-1284-64bb-6481dfc3bb4e",displayName:"Ghost"},{type:"weapon",sidearm:!1,uuid:"ec845bf4-4f79-ddda-a3da-0db3774b2794",displayName:"Judge"},{type:"weapon",sidearm:!1,uuid:"9c82e19d-4575-0200-1a81-3eacf00cf872",displayName:"Vandal"},{type:"weapon",sidearm:!1,uuid:"63e6c2b6-4a8e-869c-3d4c-e38355226584",displayName:"Odin"}],[{type:"weapon",sidearm:!0,uuid:"e336c6b8-418d-9340-d77f-7a9e4cfe0702",displayName:"Sheriff"},{type:"placeholder"},{type:"weapon",sidearm:!1,uuid:"2f59173c-4bed-b6c3-2191-dea9b58be9c7",displayName:"Melee"}]];var be=function(e){var t=ue(),a=window.innerWidth<980||window.innerWidth>1500,n=window.innerWidth<980;return Object(i.useEffect)((function(){a=window.innerWidth<980||window.innerWidth>1500,n=window.innerWidth<980}),[]),Object(C.jsx)(F.a,{className:t.root,container:!0,justifyContent:"center",direction:"row",alignItems:"center",spacing:2,children:pe.map((function(i){if(null!==e.loadout)return i.map((function(i){return"weapon"===i.type?Object(C.jsx)(F.a,{className:t.collectionItem,item:!0,md:!0===i.sidearm?2:3,sm:12,xs:12,children:Object(C.jsx)(de,{data:e.loadout[i.uuid],uuid:i.uuid,displayName:i.displayName,useLargeWeaponImage:a,weaponEditorCallback:e.weaponEditorCallback,isSidearm:i.sidearm})}):n?Object(C.jsx)("br",{}):Object(C.jsx)(F.a,{className:t.collectionItem,item:!0,md:6,sm:!1,xs:!1})}))}))})},je=a(129),fe=Object(m.a)((function(e){return{footer:{height:"25vh"},root:{margin:"auto",display:"flex",padding:0,marginBottom:"25px"}}}));var xe=function(e){var t=fe(),a=Object(i.useState)(""),n=Object(o.a)(a,2),c=(n[0],n[1],Object(i.useState)({})),r=Object(o.a)(c,2),s=r[0],l=r[1],d=Object(i.useState)(!1),u=Object(o.a)(d,2),p=u[0],b=u[1],x=Object(i.useState)({}),m=Object(o.a)(x,2),v=m[0],O=m[1],g=Object(i.useState)(),y=Object(o.a)(g,2),w=y[0],k=y[1];function S(){return(S=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({request:"fetch_inventory"}).then((function(e){!0===e.success&&l(e.response.skins)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return I.apply(this,arguments)}function I(){return(I=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({request:"fetch_loadout"}).then((function(e){!0===e.success&&O(e.response)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return q.apply(this,arguments)}function q(){return(q=Object(f.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,i){try{a?e():h({request:"put_weapon",args:{payload:t}}).then((function(t){O(t.response),e()}))}catch(n){e()}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){b(!1),k(null)}return Object(i.useEffect)((function(){N().then((function(){!function(){S.apply(this,arguments)}()})),setInterval((function(){return N()}),5e3)}),[]),Object(i.useEffect)((function(){p||(document.title="VSM // Collection")}),[p]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_,{}),Object(C.jsxs)(je.a,{maxWidth:"xl",className:t.root,children:[w,Object(C.jsx)(be,{weaponEditorCallback:function(e){b(!0),k(Object(C.jsx)(ce,{weaponUuid:e,initialSkinData:v[e],inventoryData:s,loadoutWeaponData:v[e],saveCallback:D,closeEditor:F}))},loadout:v})]})]})},he=a(132),me=Object(m.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));var ve=function(e){var t=me();return Object(C.jsx)(q.a,{className:t.backdrop,open:e.open,children:Object(C.jsx)(he.a,{children:Object(C.jsx)(R.a,{color:"primary"})})})},Oe=Object(s.a)({palette:{type:"dark",primary:{main:"#fa7581"},secondary:{main:"#454545"}},overrides:{MuiCssBaseline:{"@global":{body:{"&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"darkgrey",outline:"1px solid slategrey"}}}}}});var ge=function(e){var t=Object(i.useState)(!0),a=Object(o.a)(t,2),n=a[0],c=a[1],r=Object(i.useState)(!0),s=Object(o.a)(r,2),b=s[0],j=s[1],f=Object(i.useRef)(null);Object(i.useEffect)((function(){x(),f.current=setInterval((function(){x()}),1e3)}),[]);var x=function(){h({request:"handshake"}).then((function(e){e.success&&(j(!1),setTimeout((function(){c(!1),clearInterval(f.current),f.current=null}),100))}))};return Object(C.jsxs)(l.a,{theme:Oe,children:[Object(C.jsx)(d.a,{}),n?Object(C.jsx)(ve,{open:b}):Object(C.jsxs)(u.a,{basename:"/",children:[Object(C.jsx)(p.b,{exact:!0,path:"/",children:Object(C.jsx)(p.a,{to:"/collection"})}),Object(C.jsx)(p.b,{path:"/collection",children:Object(C.jsx)(xe,{})})]})]})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,137)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(ge,{})}),document.getElementById("root")),ye()}},[[86,1,2]]]);
//# sourceMappingURL=main.5204635d.chunk.js.map