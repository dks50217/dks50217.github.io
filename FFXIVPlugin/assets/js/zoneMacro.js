import{b as se,d as Se,u as ve,c as G,h as me,r as fe,a as ee,w as Ie,i as R,e as Q,f as T,g as Ee,j as v,k as j,l as Ne,m as xe,n as be,o as K,p as Xe,q as Ce,s as we,t as ge,v as f,x as Y,y as ke,z as _e,A as ze,B as Fe,C as Le,D as E,E as X,F as a,G as P,H as p,I as $e,J as z,K as $,L as Ve,M as Re,N as We,O as Ue,P as Je,Q as x,R as F,S as h,T as q,U as pe,V as je,W as qe,X as re,Y as ce,Z as Ge,_ as Qe,$ as Ke,a0 as eS}from"./index.js";import{E as SS}from"./el-card.js";import{E as Ze}from"./el-input-number.js";import{E as tS}from"./el-input.js";import{E as OS}from"./el-switch.js";import{E as DS}from"./el-row.js";import{E as nS,a as aS}from"./el-select.js";import{z as g,C as TS}from"./clipboard.js";import{E as M}from"./index2.js";import{E as d}from"./index3.js";import{P as b,i as Ae,a as BS}from"./vnode.js";import"./scroll.js";const pS=se({prefixCls:{type:String}}),ie=Se({name:"ElSpaceItem",props:pS,setup(e,{slots:O}){const B=ve("space"),S=G(()=>`${e.prefixCls||B.b()}__item`);return()=>me("div",{class:S.value},fe(O,"default"))}}),oe={small:8,default:12,large:16};function rS(e){const O=ve("space"),B=G(()=>[O.b(),O.m(e.direction),e.class]),S=ee(0),u=ee(0),s=G(()=>{const c=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${u.value}px`}:{},A={alignItems:e.alignment};return[c,A,e.style]}),m=G(()=>{const c={paddingBottom:`${u.value}px`,marginRight:`${S.value}px`},A=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[c,A]});return Ie(()=>{const{size:c="small",wrap:A,direction:o,fill:D}=e;if(R(c)){const[t=0,I=0]=c;S.value=t,u.value=I}else{let t;Q(c)?t=c:t=oe[c||"small"]||oe.small,(A||D)&&o==="horizontal"?S.value=u.value=t:o==="horizontal"?(S.value=t,u.value=0):(u.value=t,S.value=0)}}),{classes:B,containerStyle:s,itemStyle:m}}const cS=se({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:j([String,Object,Array]),default:""},style:{type:j([String,Array,Object]),default:""},alignment:{type:j(String),default:"center"},prefixCls:{type:String},spacer:{type:j([Object,String,Number,Array]),default:null,validator:e=>Ee(e)||Q(e)||Ne(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:xe,validator:e=>Q(e)||R(e)&&e.length===2&&e.every(Q)}}),AS=Se({name:"ElSpace",props:cS,setup(e,{slots:O}){const{classes:B,containerStyle:S,itemStyle:u}=rS(e);function s(m,c="",A=[]){const{prefixCls:o}=e;return m.forEach((D,t)=>{Ae(D)?R(D.children)&&D.children.forEach((I,l)=>{Ae(I)&&R(I.children)?s(I.children,`${c+l}-`,A):A.push(T(ie,{style:u.value,prefixCls:o,key:`nested-${c+l}`},{default:()=>[I]},b.PROPS|b.STYLE,["style","prefixCls"]))}):BS(D)&&A.push(T(ie,{style:u.value,prefixCls:o,key:`LoopKey${c+t}`},{default:()=>[D]},b.PROPS|b.STYLE,["style","prefixCls"]))}),A}return()=>{var m;const{spacer:c,direction:A}=e,o=fe(O,"default",{key:0},()=>[]);if(((m=o.children)!=null?m:[]).length===0)return null;if(R(o.children)){let D=s(o.children);if(c){const t=D.length-1;D=D.reduce((I,l,Z)=>{const C=[...I,l];return Z!==t&&C.push(T("span",{style:[u.value,A==="vertical"?"width: 100%":null],key:Z},[Ee(c)?c:v(c,b.TEXT)],b.STYLE)),C},[])}return T("div",{class:B.value,style:S.value},D,b.STYLE|b.CLASS)}return o.children}}}),iS=be(AS);const oS="/ff14-overlay-vue/assets/png/actWS.png",De={0:0,1:1039,2:1037,3:1038,4:1036,5:172,6:1040,7:162,8:1041,9:163,10:159,11:1042,12:170,13:171,14:167,15:1043,16:1044,17:160,18:349,19:350,20:362,21:360,22:363,23:361,24:373,25:365,26:367,27:1062,28:387,29:189,30:188,31:1109,32:1063,33:420,34:1066,35:430,36:434,37:1064,38:1110,39:1065,40:510,41:511,42:214,43:190,44:215,45:216,46:191,47:192,48:220,49:219,50:221,51:222,52:223,53:298,54:299,55:300,56:1045,57:1046,58:1047,59:292,60:293,61:294,62:0,63:295,64:296,65:297,66:1067,67:364,68:348,69:509,70:353,71:354,72:281,73:359,74:368,75:369,76:366,77:374,78:375,79:377,80:378,81:142,82:394,83:0,84:426,85:396,86:432,87:446,88:436,89:447,90:437,91:448,92:174,93:241,94:242,95:243,96:244,97:245,98:355,99:356,100:357,101:358,102:372,103:380,104:381,105:382,106:383,107:193,108:194,109:195,110:196,111:151,112:442,113:443,114:444,115:445,116:449,117:450,118:451,119:452,120:508,121:0,122:0,123:0,124:0,125:0,126:0,127:376,128:0,129:0,130:431,131:512,132:514,133:515,134:517,135:524,136:520,137:521,138:522,139:523,140:519,141:1111,142:0,143:0,144:0,145:0,146:0,147:529,148:530,149:531,150:532,151:537,152:538,153:539,154:540,155:541,156:542,157:543,158:544,159:545,160:546,161:547,162:548,163:549,164:550,165:551,166:552,167:533,168:556,169:559,170:566,171:1112,172:557,173:560,174:561,175:562,176:563,177:564,178:565,179:558,180:554,181:571,182:1113,183:576,184:577,185:0,186:580,187:581,188:582,189:583,190:584,191:585,192:586,193:587,194:592,195:579,196:578,197:589,198:590,199:591,200:0,201:0,202:624,203:625,204:593,205:594,206:595,207:596,208:597,209:598,210:599,211:600,212:601,213:602,214:603,215:604,216:605,217:606,218:607,219:1114,220:627,221:617,222:633,223:637,224:638,225:630,226:0,227:0,228:0,229:0,230:0,231:0,232:0,233:0,234:656,235:616,236:663,237:665,238:626,239:679,240:623,241:660,242:661,243:674,244:677,245:707,246:688,247:689,248:708,249:709,250:710,251:711,252:691,253:692,254:693,255:694,256:695,257:696,258:697,259:698,260:717,261:705,262:662,263:719,264:720,265:722,266:718,267:713,268:712,269:684,270:706,271:715,272:716,273:714,274:723,275:690,276:725,277:729,278:730,279:731,280:733,281:734,282:403,283:732,284:742,285:743,286:748,287:749,288:750,289:751,290:746,291:758,292:752,293:753,294:754,295:755,296:233,297:225,298:226,299:227,300:234,301:235,302:228,303:229,304:230,305:231,306:236,307:237,308:238,309:239,310:240,311:232,312:248,313:249,314:253,315:254,316:255,317:256,318:257,319:258,320:259,321:260,322:261,323:251,324:266,325:267,326:268,327:269,328:262,329:263,330:264,331:265,332:252,333:272,334:280,335:270,336:271,337:273,338:274,339:275,340:277,341:278,342:279,343:301,344:302,345:285,346:286,347:287,348:288,349:289,350:303,351:304,352:305,353:306,354:307,355:290,356:291,357:308,358:309,359:310,360:311,361:312,362:313,363:314,364:315,365:316,366:317,367:318,368:319,369:320,370:321,371:322,372:323,373:324,374:325,375:326,376:327,377:328,378:329,379:330,380:379,381:404,382:405,383:406,384:407,385:408,386:409,387:410,388:411,389:412,390:413,391:414,392:415,393:453,394:454,395:455,396:456,397:457,398:458,399:459,400:460,401:461,402:464,403:465,404:466,405:467,406:468,407:469,408:470,409:471,410:472,411:473,412:474,413:475,414:476,415:477,416:479,417:480,418:481,419:482,420:483,421:484,422:485,423:486,424:487,425:488,426:489,427:490,428:491,429:492,430:493,431:494,432:495,433:496,434:497,435:498,436:499,437:500,438:501,439:502,440:503,441:513,442:664,443:667,444:669,445:673,446:703,447:704,448:699,449:700,450:647,451:648,452:726,453:721,454:701,455:702,456:640,457:678,458:668,459:675,460:672,461:676,462:666,463:670,464:659,465:685,466:671,467:686,468:687,469:634,470:657,471:658,472:757,473:741,474:761,475:762,476:0,477:760,478:0,479:0,480:0,481:417,482:391,483:389,484:390,485:391,486:389,487:390,488:389,489:391,490:390,491:389,492:390,493:391,494:390,495:389,496:391,497:390,498:389,499:391,500:390,501:389,502:391,503:390,504:389,505:391,506:390,507:389,508:391,509:390,510:389,511:391,512:390,513:389,514:391,515:390,516:389,517:391,518:390,519:389,520:391,521:390,522:389,523:391,524:390,525:389,526:391,527:390,528:389,529:391,530:390,531:389,532:391,533:390,534:389,535:391,536:768,537:778,538:779,539:777,540:770,541:771,542:772,543:782,544:773,545:783,546:774,547:784,548:775,549:785,550:776,551:781,552:506,553:506,554:506,555:506,556:506,557:506,558:506,559:506,560:506,561:506,562:506,563:506,564:506,565:506,566:506,567:506,568:506,569:506,570:506,571:506,572:506,573:506,574:506,575:506,576:506,577:506,578:506,579:506,580:0,581:763,582:769,583:790,584:788,585:789,586:794,587:798,588:799,589:800,590:801,591:802,592:803,593:804,594:805,595:806,596:810,597:811,598:795,599:791,600:792,601:792,602:792,603:792,604:792,605:792,606:792,607:792,608:792,609:797,610:796,611:793,612:796,613:796,614:796,615:796,616:796,617:796,618:796,619:796,620:796,621:796,622:796,623:796,624:796,625:796,626:796,627:796,628:796,629:796,630:796,631:796,632:796,633:796,634:796,635:796,636:826,637:824,638:825,639:827,640:832,641:832,642:832,643:831,644:831,645:831,646:834,647:839,648:830,649:821,650:831,651:823,652:838,653:849,654:853,655:840,656:836,657:845,658:858,659:822,660:0,661:841,662:861,663:862,664:863,665:864,666:846,667:848,668:865,669:866,670:867,671:868,672:869,673:870,674:871,675:872,676:837,677:0,678:873,679:874,680:860,681:859,682:851,683:855,684:850,685:854,686:876,687:847,688:879,689:852,690:856,691:875,692:884,693:885,694:887,695:796,696:796,697:796,698:796,699:796,700:882,701:888,702:893,703:894,704:0,705:899,706:899,707:899,708:899,709:899,710:899,711:899,712:899,713:899,714:898,715:902,716:906,717:897,718:912,719:903,720:907,721:900,722:901,723:911,724:914,725:913,726:904,727:908,728:905,729:909,730:900,731:900,732:900,733:900,734:900,735:920,736:917,737:916,738:922,739:923,740:925,741:926,742:929,743:932,744:0,745:924,746:933,747:943,748:947,749:942,750:946,751:944,752:948,753:939,754:796,755:940,756:941,757:0,758:945,759:949,760:936,761:937,762:934,763:935,764:954,765:955,766:831,767:831,768:831,769:831,770:900,771:900,772:900,773:900,774:900,775:900,776:0,777:938,778:975,779:966,780:977,781:950,782:951,783:952,784:986,785:969,786:978,787:974,788:968,789:970,790:995,791:996,792:973,793:1011,794:976,795:1014,796:997,797:994,798:1013,799:1016,800:1008,801:1009,802:992,803:993,804:1012,805:1015,806:1006,807:1007,808:1002,809:1003,810:1004,811:1005,812:1010,813:1022,814:1020,815:1018,816:1021,817:1023,818:1017,819:1e3,820:1019,821:0,822:0,823:0,824:0,825:0,826:0,827:0,828:0,829:0,830:1048,831:0,832:0,833:0,834:0,835:1032,836:1033,837:1034,838:1032,839:1033,840:1034,841:1032,842:1033,843:1034,844:1050,845:1051,846:998,847:1032,848:1033,849:1034,850:1032,851:1033,852:1034,853:1032,854:1033,855:1034,856:1032,857:1033,858:1034,859:1032,860:1033,861:1034,862:1058,863:1059,864:1060,865:1049,866:1054,867:1052,868:1069,869:1070,870:1071,871:1072,872:1081,873:1082,874:1091,875:0,876:1085,877:1086,878:1075,879:1076,880:1083,881:1084,882:0,883:1087,884:1088,885:1068,886:1095,887:1032,888:1033,889:1034,890:1032,891:1033,892:1034,893:1032,894:1033,895:1034,896:1097,897:0,898:0,899:0,900:0,901:0,902:0,903:0,904:0,905:0,906:0,907:0,908:0,909:1123,910:1120,911:1118,912:1116,913:1116,914:1116,915:1116,916:1116,917:1116,918:1116,919:1116,920:1116,921:1116,922:1116,923:1117,924:1096,925:0,926:1121,927:1098,928:1098,929:1098,930:1098,931:1098,932:1098,933:1098,934:1098,935:1098},Ye={};for(const e in De)Ye[De[e]]=Number(e);function ne(e){return Ye[e]??e}function uS(e){return De[e]??e}function L(e){return callOverlayHandler({call:"PostNamazu",c:"DoTextCommand",p:e})}function lS(e){return callOverlayHandler({call:"PostNamazu",c:"DoWaymarks",p:JSON.stringify(e)})}function ue(e,O,B=5){return O.MapID=ne(e),O.Name=`Slot${B}`,callOverlayHandler({call:"PostNamazu",c:"DoInsertPreset",p:JSON.stringify(O)})}function ae(e){return e.forEach(O=>{typeof O.p=="object"&&(O.p=JSON.stringify(O.p))}),callOverlayHandler({call:"PostNamazu",c:"DoQueueActions",p:JSON.stringify(e)})}let Me=0;const V=K("macro-slot-index",5);addOverlayListener("PartyChanged",e=>Me=e.party.length);const[te,le]=Xe(!0),sS=Ce("macro",{state:()=>({data:K("my-macros",we(y)),selectZone:K("my-zone",ee("1003")),zoneNow:K("my-zone-now",ee("129")),fastEntrance:[{text:"幻魔神",value:"1090"},{text:"P5S",value:"1082"},{text:"P6S",value:"1084"},{text:"P7S",value:"1086"},{text:"P8S",value:"1088"},{text:"絕龍詩",value:"968"},{text:"絕歐米茄",value:"1122"},{text:"異聞水道",value:"1075"},{text:"零式異聞水道",value:"1076"}],show:te,toggleShow:le}),getters:{defaultX:e=>{var O;return((O=g[Number(e.selectZone)])==null?void 0:O.offsetX)??0},defaultY:e=>{var O;return((O=g[Number(e.selectZone)])==null?void 0:O.offsetY)??0}},actions:{editMacroMacro(e){this.data.zoneId[this.selectZone].map(O=>Reflect.deleteProperty(O,"Editable")),e.Editable=!0,e.Text=i(e.Text)},submitMacroMacro(e){Reflect.deleteProperty(e,"Editable"),e.Text=i(e.Text)},editMacroPlace(e){this.data.zoneId[this.selectZone].map(O=>Reflect.deleteProperty(O,"Editable")),e.Editable=!0},submitMacroPlace(e){Reflect.deleteProperty(e,"Editable")},formatAllWaymarkPlaceData(){for(const e in this.data.zoneId)this.formatSelectZoneWaymarkPlaceData(e)},formatSelectZoneWaymarkPlaceData(e){for(const O in this.data.zoneId[e])if(Reflect.deleteProperty(this.data.zoneId[e][O],"Editable"),this.data.zoneId[e][O].Type==="place"){const B=this.data.zoneId[e][O];this.data.zoneId[e][O].Place={A:B.Place.A??{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},B:B.Place.B??{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},C:B.Place.C??{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},D:B.Place.D??{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},One:B.Place.One??{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Two:B.Place.Two??{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Three:B.Place.Three??{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Four:B.Place.Four??{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1}}}},newOne(e="macro"){for(const B in this.data.zoneId)for(const S in this.data.zoneId[B])Reflect.deleteProperty(this.data.zoneId[B][S],"Editable");const O=Number(this.selectZone);if(this.data.zoneId[O]===void 0&&(this.data.zoneId[O]=[]),this.data.zoneId[O]){if(e==="macro")this.data.zoneId[O].push({Type:e,Name:"New Macro",Text:"",Editable:!0});else if(e==="place"){const B=this.data.zoneId[O].push({Name:"New WayMark",Type:e,Editable:!0,Place:{A:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},B:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},C:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},D:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},One:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Two:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Three:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Four:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1}}});return this.data.zoneId[O][B-1]}}},async importPPJSON(){const e=Number(this.selectZone),O={A:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},B:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},C:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},D:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},One:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Two:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Three:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1},Four:{X:-this.defaultX,Y:0,Z:-this.defaultY,Active:!1}};M.prompt("輸入PPJSON","Import PPJSON",{confirmButtonText:"確定",cancelButtonText:"取消",inputPattern:/^(\{.*\})$/,inputErrorMessage:"無效的格式"}).then(async({value:B})=>{const S=Object.assign({MapID:-1,Name:"json"},Object.assign(O,JSON.parse(B))),u=ne(e),s=g[e],m=g[uS(S.MapID)];let c=!0;if(S.MapID!==u&&await M.confirm(`PPJSON中的地圖${m.name.cn??m.name.ja??""+m.name.en}(${S.MapID})), 與目前選擇的地圖${s.name.cn??s.name.ja??""+s.name.en}(${u})不一致, 是否繼續?`,"警告",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"})!=="confirm"&&(c=!1),!c)return;const A=this.newOne("place");A.Name=S.Name,A.Place=S,Reflect.deleteProperty(A,"Editable");const o=s.offsetX-m.offsetX,D=s.offsetY-m.offsetY;try{["A","B","C","D","One","Two","Three","Four"].map(t=>{A.Place[t].X-=o,A.Place[t].Z-=D})}catch{}Reflect.deleteProperty(A.Place,"MapID"),Reflect.deleteProperty(A.Place,"Name"),d.success("匯入成功")}).catch(()=>d.error("解析失敗"))},deleteMacro(e){var O,B,S,u,s,m,c,A,o,D,t,I,l,Z,C,W;if(e.Type==="macro"&&((e==null?void 0:e.Text)??"").length<=5||e.Type==="place"&&((B=(O=e.Place)==null?void 0:O.A)==null?void 0:B.Active)===!1&&((u=(S=e.Place)==null?void 0:S.B)==null?void 0:u.Active)===!1&&((m=(s=e.Place)==null?void 0:s.C)==null?void 0:m.Active)===!1&&((A=(c=e.Place)==null?void 0:c.D)==null?void 0:A.Active)===!1&&((D=(o=e.Place)==null?void 0:o.One)==null?void 0:D.Active)===!1&&((I=(t=e.Place)==null?void 0:t.Two)==null?void 0:I.Active)===!1&&((Z=(l=e.Place)==null?void 0:l.Three)==null?void 0:Z.Active)===!1&&((W=(C=e.Place)==null?void 0:C.Four)==null?void 0:W.Active)===!1){let N=this.data.zoneId[this.selectZone].indexOf(e);N>-1&&this.data.zoneId[this.selectZone].splice(N,1)}else M.confirm("確定要刪除嗎?","警告",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then(()=>{let N=this.data.zoneId[this.selectZone].indexOf(e);N>-1&&this.data.zoneId[this.selectZone].splice(N,1)}).catch(()=>{})},exportWaymarksJson(e){const O=JSON.parse(JSON.stringify(e.Place));O.MapID=ne(Number(this.selectZone)),O.Name=e.Name;let B=new TS(".export",{text:()=>JSON.stringify(O)});B.on("success",()=>{d.success("已複製到剪貼簿"),B.destroy()}),B.on("error",()=>{M.alert(JSON.stringify(O),"Export Waymarks"),B.destroy()})},sendMacroParty(e){M.confirm("確定要發送到隊伍頻道嗎?","警告",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then(()=>{Oe(e,"p")}).catch(()=>{})},sendMacroEcho(e){Oe(e,"e")},doLocalWayMark(e){lS(e),d.success("已標點")},doSlotWayMark(e){M({title:"選擇插槽",message:()=>me(Ze,{modelValue:V.value,min:1,max:5,size:"large","onUpdate:modelValue":O=>{V.value=O}}),showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then(()=>{ue(Number(this.selectZone),e,V.value),ae([{c:"DoTextCommand",p:"/waymark preset "+V.value,d:750}]),d.success("插槽"+V.value+"已設定並標記")}).catch(()=>{})},positioning(){this.selectZone=this.zoneNow},handleChangeZone(e){this.selectZone=e.zoneID.toString(),this.zoneNow=e.zoneID.toString(),de(e.zoneName)||d(`未知區域 ${e.zoneName} ${e.zoneID}`)},handleLogLine(e){var O,B,S,u,s,m;if(e.line[2]==="0038"){if(/^duty$/i.test(e.line[4])){le();return}const c=e.line[4].match(/^(?:發宏|宏|macro|hong|fahong)\s*(?<channel>e|p)?(?<party>[!！])?\s*$/i);if(c){const o=(O=c==null?void 0:c.groups)!=null&&O.party?"p":((B=c==null?void 0:c.groups)==null?void 0:B.channel)??"e",D=(S=this.data.zoneId[this.zoneNow])==null?void 0:S.filter(t=>t.Type==="macro");(D==null?void 0:D.length)===0||!D?L("/e 目前地圖沒有宏<se.3>"):D.length===1&&D[0].Type==="macro"?Oe(D[0].Text,o):D.length>1?(L("/e 本地圖存在多個宏，無法使用快捷發宏，請手動在網頁中指定。"),te.value=!0):console.error(D);return}const A=e.line[4].match(/^(?:標點|標記|場景標記|place|biaodian)(?:插槽|預設|)\s*(?<slot>[1-5])?.*?(?<mark>[!！])?\s*$/i);if(A){const o=Number(((u=A==null?void 0:A.groups)==null?void 0:u.slot)??5),D=(s=this.data.zoneId[this.zoneNow])==null?void 0:s.filter(t=>t.Type==="place");(D==null?void 0:D.length)===0||!D?L("/e 目前地圖沒有標點<se.3>"):D.length===1?(ue(Number(this.zoneNow),D[0].Place,o),L(`/e 已寫入第${o}格<se.9>`),(m=A==null?void 0:A.groups)!=null&&m.mark&&ae([{c:"DoTextCommand",p:`/waymark preset ${o}`,d:500}])):D.length>1?(te.value=!0,L("/e 本地圖存在多個場景標記預設，無法使用快捷插槽，請手動在網頁中指定。")):console.error(D);return}}},resetZone(){M.confirm("確定要重置目前地圖的所有標點嗎？","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.data.zoneId[this.selectZone].length=0,this.data.zoneId[this.selectZone].push(...JSON.parse(JSON.stringify(y.zoneId[this.selectZone]))),this.formatSelectZoneWaymarkPlaceData(this.selectZone),d.success("重置成功")}).catch(()=>{})},resetAllData(){M.confirm("要重置所有數據嗎？","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then(()=>{M.confirm("你確定嗎？","警告",{confirmButtonText:"確定！",cancelButtonText:"取消",type:"warning"}).then(()=>{this.data=JSON.parse(JSON.stringify(y)),this.formatSelectZoneWaymarkPlaceData(this.selectZone),d.success("重置成功")})}).catch(()=>{})},updateZone(){M.confirm("將所有地圖的使用者目前數據與自帶數據取並集？這將恢復你曾經刪除的預設數據","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then(()=>{for(const e in this.data.zoneId)this.data.zoneId[e]=Array.from(new Set([...y.zoneId[e],...this.data.zoneId[e]].map(O=>JSON.stringify(O)))).map(O=>JSON.parse(O));d.success("更新成功")}).catch(()=>{})}}});function i(e){return e=e.replaceAll(/\n{2,}/gm,`
`),e=e.replaceAll(/^\s+/gm,""),e=e.replaceAll(/ /gm," "),e}function de(e){for(const O in g){const B=g[O];for(const S in B.name){const u=B.name[S];if((u==null?void 0:u.toUpperCase())===e.toUpperCase()||u===e.replaceAll(/[\(\)]/gi,""))return O}}}async function Oe(e,O){O==="p"&&Me===0&&L("/e 單人時無法發送小隊宏<se.3>");const S=e.replaceAll(/^\s*\/[pe]\s/gm,"").split(`
`).map(u=>({c:"DoTextCommand",p:`/${O} `+u,d:125}));ae(S),d.success("已發送")}const y={zoneId:{1003:[{Name:"P1S被窩",Type:"macro",Text:i(`
          /p 【基本八方】|【P1鎖鏈換位】同色標點
          /p D3 MT D4    | MTD3 STD2 H1D1 H2D4
          /p H1  ◎   H2   |【冰火侵蝕】
          /p D1  ST  D2   |MT和D3第二次固定換顏色
          /p                         |第三次根據顏色站位
          /p 【四連鎖】
          /p 紅3                 紅8
          /p              紫3
          /p     紫18 ◎ 紫8
          /p             紫13
          /p 紅18              紅13
          /p 【定時鎖鏈】
          /p 人群：紅 點名：白
  `)},{Name:"P1S WayMark",Type:"place",Place:{A:{X:100,Y:0,Z:96,ID:0,Active:!0},B:{X:104,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:104,ID:2,Active:!0},D:{X:96,Y:0,Z:100,ID:3,Active:!0},One:{X:90,Y:0,Z:90,ID:4,Active:!0},Two:{X:110,Y:0,Z:90,ID:5,Active:!0},Three:{X:110,Y:0,Z:110,ID:6,Active:!0},Four:{X:90,Y:0,Z:110,ID:7,Active:!0}}}],1005:[{Name:"P2S被窩",Type:"macro",Text:i(`
          /p 【跳躍分攤】
          /p    原地：MTH1D1D3
          /p    水路：ST H2D2D4
          /p 【麻將】
          /p    紫三角1234→【1234】（無連線）
          /p    藍方塊13：對面 藍方塊24：原地（有連線）
          /p 【第二次對衝】
          /p 非對衝的H固定站污水地板對角，其餘人靈性分散
          /p 【多重刻印&污水】←T 分攤 DPS→
          /p 【多重刻印&俯衝】DPS：角落 T：邊上
          /p 【散開→接線】T：對面 人群：原地
  `)},{Name:"P2S WayMark",Type:"place",Place:{A:{X:87.5,Y:.5,Z:87.5,ID:0,Active:!0},B:{X:112.5,Y:.5,Z:87.5,ID:1,Active:!0},C:{X:112.5,Y:.5,Z:112.5,ID:2,Active:!0},D:{X:87.5,Y:.5,Z:112.5,ID:3,Active:!0},One:{X:100,Y:0,Z:90,ID:4,Active:!0},Two:{X:110,Y:0,Z:100,ID:5,Active:!0},Three:{X:100,Y:0,Z:110,ID:6,Active:!0},Four:{X:90,Y:0,Z:100,ID:7,Active:!0}}}],1007:[{Name:"P3S魔法少女",Type:"macro",Text:i(`
          /p ┌───■暗之炎────┬─■十字地火─┐
          /p │　⑴　│●大球：　　　│
          /p │　⑷　　　　　　　⑵　│　　　北西　　│
          /p │　⑶　│●小球：　　　│
          /p │※順時針擊殺暗之炎　　│　　　11/1點  │
          /p ├───────────┴───────┤
          /p ├─────■俯衝─────┬─■靈泉─┤
          /p │【兩側發光】│【中央發光】│塔：　　　│
          /p │↓　　　　↓│西　↓↓　東│　西北│
          /p │　　│　│　東南│
          /p │　　├──────┘　　　　　│
          /p │　　│點名：→→　│
          /p │　　│　　　→→　│
          /p └──────┴────────────┘
          /p ┌─■炎暗劫火分散─┬─■火龍捲站位──┐
          /p │　　　　　│　　　　　　│
          /p │　　　　　│　　　　　　　　│
          /p │　　　　　│　　★　　│
          /p │　　　　　│　　　　　　│
          /p ├─────────┴─────────┤
          /p ├■火龍捲三穿一分散┬■火龍捲擊退後分散┤
          /p │　　　　　　　　　│　　　　黑　　　　│
          /p │　　　　　│　　　　　　　　　│
          /p │　　　　　│　　　　　│
          /p │　　　　★　　　　│　　　　　│
          /p │　　　　　│　　　　　│
          /p │　　　　　│　　　　　　　│
          /p │　　　　　　　　　│　　　　　│
          /p └─────────┴─────────┘
  `)},{Name:"P3S WayMark 魔法少女",Type:"place",Place:{A:{X:100,Y:0,Z:80,ID:0,Active:!0},B:{X:120,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:120,ID:2,Active:!0},D:{X:80,Y:0,Z:100,ID:3,Active:!0},One:{X:100,Y:0,Z:94,ID:4,Active:!0},Two:{X:106,Y:0,Z:100,ID:5,Active:!0},Three:{X:100,Y:0,Z:106,ID:6,Active:!0},Four:{X:94,Y:0,Z:100,ID:7,Active:!0}}},{Name:"P3S WayMark 被窩",Type:"place",Place:{A:{X:100,Y:0,Z:91.19,ID:0,Active:!0},B:{X:108.81,Y:0,Z:100.277,ID:1,Active:!0},C:{X:100,Y:0,Z:108.81,ID:2,Active:!0},D:{X:91.19,Y:0,Z:100,ID:3,Active:!0},One:{X:93.966,Y:.007,Z:93.921,ID:4,Active:!0},Two:{X:105.988,Y:.007,Z:93.938,ID:5,Active:!0},Three:{X:106.035,Y:.008,Z:106.026,ID:6,Active:!0},Four:{X:93.989,Y:.008,Z:105.995,ID:7,Active:!0}}}],1009:[{Name:"P4S被窩門神",Type:"macro",Text:i(`
          /p 【P1拉線 + P3踩塔】     |【踩塔時拉線】
          /p    D1/MT　　 D2/ST     |     H1/D3
          /p                     ◎                    |     MT/D1
          /p    D3/H1  [1]  D4/H2   |     ST/D2
          /p                                             |     H2/D4
          /p 接毒順序：D1D2D3D4/MTSTH1H2
          /p 【劇場分散】雷火為6點|【撞球】
          /p             MT    ST                |D3 MT H2
          /p   D3    D1◎D2    D4     |D1 ◎  D2
          /p             H1    H2               |H1 ST  D4
          /p 【劇場分攤】                   |同組一起順時針連撞兩個
          /p   前：MTH1D1D3         |D1D3→A開始 D2D4→C開始
          /p   后： STH2D2D4          |MTH2→B開始 STH1→D開始
          /p 【死刑】MT無敵→ST無敵→換T（戰士無敵）
  `)},{Name:"P4S被窩本體",Type:"macro",Text:i(`
          /p          【一運】    | 【三運】MTD4引導
          /p  D3　　　  D4  | H1                    |                     MT
          /p   　MT　ST        | D3        D1      |        H1      D1
          /p   　　   ◎            |              ◎ ST  →   D3◎
          /p   　D1　D2       | D4       D2       |        H2      D2
          /p  H1　　　H2    | H2                    |                     ST
          /p 【二運】以第一次A/B的安全區為12點
          /p 無T：11點鐘拉線→12點鐘踩塔→3點鐘分攤  紅T：12點鐘分攤→3點鐘分攤
          /p 紫H：5點鐘拉線→6點鐘踩塔→3點鐘踩塔   紅H：6點鐘分攤→9點鐘踩塔
          /p 紅D：12點鐘分攤→9點分攤[D1234]3點分攤 綠D：6點鐘分攤→9點鐘分攤
          /p 【五運】D3　D1　　　ST　H2
          /p 　　           荊棘         ◎        荊棘
          /p                 D4    D2            MT   H1
          /p 【四運】順時針，藍三紫一【六運】DPS：10s TH：5s
  `)},{Name:"P4S WayMark 被窩門神",Type:"place",Place:{A:{X:100,Y:0,Z:85,ID:0,Active:!0},B:{X:115,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:115,ID:2,Active:!0},D:{X:85,Y:0,Z:100,ID:3,Active:!0},One:{X:100,Y:0,Z:102.5,ID:4,Active:!0},Two:{X:100,Y:0,Z:107.5,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}},{Name:"P4S WayMark 被窩本體",Type:"place",Place:{A:{X:99.058,Y:0,Z:81.135,ID:0,Active:!0},B:{X:119.352,Y:0,Z:99.316,ID:1,Active:!0},C:{X:100.747,Y:0,Z:119.114,ID:2,Active:!0},D:{X:80.574,Y:0,Z:101.415,ID:3,Active:!0},One:{X:105.052,Y:0,Z:84.859,ID:4,Active:!0},Two:{X:114.869,Y:0,Z:104.923,ID:5,Active:!0},Three:{X:95.007,Y:0,Z:114.873,ID:6,Active:!0},Four:{X:85,Y:0,Z:95.019,ID:7,Active:!0}}},{Name:"P4S WayMark Melee Uptime",Type:"place",Place:{A:{X:102.5,Y:0,Z:90,ID:0,Active:!0},B:{X:110,Y:0,Z:102.5,ID:1,Active:!0},C:{X:97.5,Y:0,Z:110,ID:2,Active:!0},D:{X:90,Y:0,Z:97.5,ID:3,Active:!0},One:{X:97,Y:0,Z:82,ID:4,Active:!0},Two:{X:118,Y:0,Z:97,ID:5,Active:!0},Three:{X:103,Y:0,Z:118,ID:6,Active:!0},Four:{X:82,Y:0,Z:103,ID:7,Active:!0}}}],1072:[{Name:"宏"+w("https://nga.178.com/read.php?tid=34756217"),Type:"macro",Text:i(`/p 【散開基準】咒發突襲：BOSS面向基準　其它：北（A）基準
        /p 【基本散開】 【十字分攤】
        /p D3 MT D4　　　MTD3
        /p H1　　H2　 H1D1　 H2D4
        /p D1 ST D2　 　　 STD2
        /p 【咒法突襲（分攤/分散）】
        /p D3H1D1MT←▲→STD2H2D4　※分散：T原地不動,D1D2在扇形結束后往內側走
        /p 【距離衰減+分攤】【PS連線：TH固定法】
        /p 　　MT　　ST　　　　　　   MT(A)
        /p 　　　　◎ 　 　 　　　H1(D)  DPS  H2(B)
        /p 　　　分攤　　　　　　　　　ST(C)  ※T分攤死刑點名T無敵單吃
        /p 【咒發拘束1】①③標記處分攤
        /p 【咒發拘束2/PS連線】DPS：順時針（左）　TH：逆時針（右）
        /p 【4連黃圈】C點集合，順時針放圈
        /p 【PS連線2分攤】對組分攤：全員靠近后和鄰組分攤  鄰組分攤：無點名找點名分攤`)},{Name:"標點",Type:"place",Place:{A:{X:99.845,Y:0,Z:93.175,ID:0,Active:!0},B:{X:107.21,Y:0,Z:100.694,ID:1,Active:!0},C:{X:99.657,Y:0,Z:107.984,ID:2,Active:!0},D:{X:91.972,Y:0,Z:100.319,ID:3,Active:!0},One:{X:106.731,Y:0,Z:94.095,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1},Three:{X:92.535,Y:0,Z:107.564,ID:6,Active:!0},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}}],1082:[{Name:"P5S 苦茶子（和game8一樣）",Type:"macro",Text:i(`/p 【基本散開】 【捕食毒塔】ST自由
      /p D3 MT D4　　　　　　MT(無敵)
      /p H1　　H2　　　H1D3　　 H2D4
      /p D1 ST D2　　　　　　 D1D2
      /p 【毒塔（近戰內側 / 遠端外側）】
      /p MTST / H1D3：12點位置逆時針找塔
      /p D1D2 / H2D4：1點位置順時針找塔
      /p 【毒液泉涌（染色分攤)】
      /p 內側：MTH1D1D3 外側：STH2D2D4
      /p  【毒池 + 毒液風暴】
      /p 　　毒D1H1D3外
      /p 　　　　MT
      /p 　　　　☆
      /p 　　　　ST
      /p 外D4H2D2毒　※毒如果相反則站位相反
      /p MT組：標記1or4 找毒圈
      /p ST組： 標記2or3 找毒圈
      /p AOE放在外側，內側分攤
      /p 【染色+衝鋒 找3個水晶的對側房間分攤染色】`)},{Name:"P5S game8",Type:"macro",Text:i(`
          /p 【基本散開】　　　【十字毒塔】STフリー
          /p D3 MT D4　　　　　　MT(無敵)
          /p H1　　H2　　　H1D3　　 H2D4
          /p D1 ST D2　　　　　　 D1D2
          /p 【毒塔（近接內側 / 遠隔外側）】
          /p MTST / H1D3：12時から反時計回り
          /p D1D2 / H2D4：1時から時計回り
          /p 【ベノムサージ(東西受け)/スプラッシュ】
          /p 西/內壁：MTH1D1D3 東/外壁：STH2D2D4
          /p 【毒沼 + ベノムスコール】
          /p 　　毒D1H1D3外
          /p 　　　　MT
          /p 　　　　☆
          /p 　　　　ST
          /p 　外D4H2D2毒　※毒が逆位置の場合反転
          /p MT組：マーカー1or4に出た毒に合わせて移動
          /p ST組：マーカー2or3に出た毒に合わせて移動
          /p AOEは外周に捨ててMT/STの位置で頭割り
          /p 【4部屋ベノムスプラッシュ：3個部屋の対角】
  `)},{Name:"P5S Standard",Type:"place",Place:{A:{X:100,Y:-300,Z:93,ID:0,Active:!0},B:{X:107,Y:-300,Z:100,ID:1,Active:!0},C:{X:100,Y:-300,Z:107,ID:2,Active:!0},D:{X:93,Y:-300,Z:100,ID:3,Active:!0},One:{X:112.5,Y:-300,Z:87.5,ID:4,Active:!0},Two:{X:112.5,Y:-300,Z:112.5,ID:5,Active:!0},Three:{X:87.5,Y:-300,Z:112.5,ID:6,Active:!0},Four:{X:87.5,Y:-300,Z:87.5,ID:7,Active:!0}}},{Name:"P5S Quadrants",Type:"place",Place:{A:{X:100,Y:-300,Z:86,ID:0,Active:!0},B:{X:114,Y:-300,Z:100,ID:1,Active:!0},C:{X:100.009,Y:-300,Z:114,ID:2,Active:!0},D:{X:86,Y:-300,Z:100,ID:3,Active:!0},One:{X:92,Y:-300,Z:92,ID:4,Active:!0},Two:{X:108,Y:-300,Z:92,ID:5,Active:!0},Three:{X:108,Y:-300,Z:108,ID:6,Active:!0},Four:{X:92,Y:-300,Z:108,ID:7,Active:!0}}},{Name:"P5S 子言",Type:"place",Place:{A:{X:100,Y:-300,Z:86,ID:0,Active:!0},B:{X:114,Y:-300,Z:100,ID:1,Active:!0},C:{X:100.009,Y:-300,Z:114,ID:2,Active:!0},D:{X:86,Y:-300,Z:100,ID:3,Active:!0},One:{X:108,Y:-300,Z:92,ID:5,Active:!0},Two:{X:108,Y:-300,Z:108,ID:6,Active:!0},Three:{X:92,Y:-300,Z:108,ID:7,Active:!0},Four:{X:92,Y:-300,Z:92,ID:4,Active:!0}}}],1084:[{Name:"P6S 千星流月夜（推薦）"+w("https://www.bilibili.com/video/BV1RG4y1u78L"),Type:"macro",Text:i(`
      /p ※MT組：MTH1D1D3　ST組：STH2D2D4
      /p 　【基本散開】　　【惡病質】
      /p MT/D3　ST/D4　　　　20　20
      /p 　　　★　　　　　　8　★　8
      /p H1/D1　H2/D2　　　12　　　12
      /p 　　　　　　　　　　16　　16
      /p 【分攤分組】　　　　｜【苦痛爆發+寄生之舞】
      /p 西：MT組 東：ST組　｜DPS分攤：場地4點 TN分攤：場地3點
      /p ※順時針移動處理分攤｜DPS大圈：D1→B D2→4 D3→右下 D4→D
      /p 【致病胞流】　　　　｜TN 大圈：MT→3 ST→D H1→左上 H2→B
      /p 奇數：場地1點　　　 ｜【苦痛爆發+界外劈砍】
      /p 偶數：場地2點　　 　｜DPS分攤：場地4點 TN分攤：場地3點
      /p 　　　　　　　　　　｜DPS大圈：B /TN大圈：D
      /p 【惡病質+多元以太】
      /p 安全格中上半兩格→AoE　下半兩格→分攤
      `)},{Name:"P6S 苦茶子（和game8一樣）",Type:"macro",Text:i(`/p ※MT組：MTH1D1D3 ST組：STH2D2D4
    /p 【基本散開】 【惡病體質第一次】
    /p MT/D3　ST/D4 　 　 8　　 　 　8
    /p 　　 　 ★　　 　 12　20 ★ 20　12
    /p H1/D1　H2/D2　　  16 　 　 　 16
    /p 【 分攤+扇型攻擊 】｜ 【4：4分攤】
    /p 西：MT組 東：ST組 ｜西側→MT組 東側→ST組
    /p ※順時針移動分攤   ｜※內側標記集合
    /p 【麻將】　　　　 　｜【苦痛交換第二次】
    /p 西：奇數　　　 　　｜西→T・H    東→DPS
    /p 東：偶數　　 　　　｜※AOE放置方向同上
    /p 【惡病體質第二次】
    /p 西：紫DEBUFF　東：綠DEBUFF
    /p 北・南外側標記→AoE　內側標記→分攤`)},{Name:"P6S game8",Type:"macro",Text:i(`
          /p ※MT組：MTH1D1D3 ST組：STH2D2D4
          /p 　【基本散開】　　【カヘキシー1回目】
          /p MT/D3　ST/D4 　 　 8　　 　 　8
          /p 　　 　 ★　　 　 　12　20 ★ 20　12
          /p H1/D1　H2/D2　　16 　 　 　 16
          /p 【 頭割り+扇範囲 】｜ 【4：4頭割り】
          /p 西：MT組 東：ST組｜西側→MT組 東側→ST組
          /p ※時計回りで頭割り｜※內周4マスを使用
          /p 【サイコロ】　　 　｜【チェンジバースト2回目】
          /p 西：奇數　　　　　｜西→T・H 東→DPS
          /p 東：偶數　　　　　｜※AOEも上記方向に捨てる
          /p 【カヘキシー2回目】
          /p 西：紫デバフ　東：緑デバフ
          /p 北・南外周マス→AoE　內周マス→頭割り
  `)},{Name:"P6S 千星",Type:"place",Place:{A:{X:100,Y:0,Z:81.818,ID:0,Active:!0},B:{X:90.91,Y:0,Z:109.09,ID:1,Active:!0},C:{X:100,Y:0,Z:118.182,ID:2,Active:!0},D:{X:109.09,Y:0,Z:90.91,ID:3,Active:!0},One:{X:98,Y:0,Z:98,ID:4,Active:!0},Two:{X:102,Y:0,Z:98,ID:5,Active:!0},Three:{X:92.728,Y:0,Z:92.728,ID:6,Active:!0},Four:{X:107.272,Y:0,Z:107.272,ID:7,Active:!0}}},{Name:"P6S Box Setup",Type:"place",Place:{A:{X:100.071,Y:0,Z:90.053,ID:0,Active:!0},B:{X:110.043,Y:0,Z:99.861,ID:1,Active:!0},C:{X:99.954,Y:0,Z:110.023,ID:2,Active:!0},D:{X:89.937,Y:0,Z:99.946,ID:3,Active:!0},One:{X:109.937,Y:0,Z:90.068,ID:4,Active:!0},Two:{X:109.992,Y:0,Z:109.859,ID:5,Active:!0},Three:{X:89.9,Y:0,Z:109.926,ID:6,Active:!0},Four:{X:89.969,Y:0,Z:90.134,ID:7,Active:!0}}},{Name:"P6S Diamond Limit Cut",Type:"place",Place:{A:{X:100,Y:0,Z:81.25,ID:0,Active:!0},B:{X:115,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:118.75,ID:2,Active:!0},D:{X:85,Y:0,Z:100,ID:3,Active:!0},One:{X:93.5,Y:0,Z:90,ID:4,Active:!0},Two:{X:106.5,Y:0,Z:90,ID:5,Active:!0},Three:{X:93.5,Y:0,Z:110,ID:6,Active:!0},Four:{X:106.5,Y:0,Z:110,ID:7,Active:!0}}},{Name:"P6S Diamond + Timer Strat Marker",Type:"place",Place:{A:{X:111.5,Y:0,Z:95.5,ID:0,Active:!0},B:{X:111.5,Y:0,Z:104.5,ID:1,Active:!0},C:{X:88.5,Y:0,Z:104.5,ID:2,Active:!0},D:{X:88.5,Y:0,Z:95.5,ID:3,Active:!0},One:{X:106,Y:0,Z:88,ID:4,Active:!0},Two:{X:106,Y:0,Z:112,ID:5,Active:!0},Three:{X:94,Y:0,Z:112,ID:6,Active:!0},Four:{X:94,Y:0,Z:88,ID:7,Active:!0}}}],1086:[{Name:"被窩國際P7S站位宏",Type:"macro",Text:i(`
        /p MT組：MTH1D1D3　ST組：STH2D2D4
        /p 　【基礎分散】　　　 【擊退+分散+鳥】
        /p MT/D1　ST/D2　　　　　D1　　　　D2
        /p 　　 ★ 　　　　　　D3　MT　　　ST　D4
        /p H1/D3　H2/D4　　　　過道　　　　過道
        /p 　　　　　　　　　　　H1　　　　　　H2
        /p 【生命的果實:分攤】　 │【魔印創造:分散】
        /p 北側：MT組 南測：ST組 │基礎分散※分攤在中心
        /p 【左右分攤】　　　　　│【鳥+塔】
        /p 西：MT組　東：ST組　 │相對基礎分散※貼近引導
        /p 【魔印創造·獄】
        /p 　　▼西平臺▼　　　　　　▼東平臺▼
        /p 分攤　　MT/D1　|　　　　MT/D1　分攤
        /p ST/D2　H2/D4　|　　H2/D4　ST/D2
        /p 　　　H1/D3　　|　　　H1/D3
  `)},{Name:"P7S 苦茶子",Type:"macro",Text:i(`
        /p ■4:4分攤　　─ ─┬■魔印(以北為準)+鳥塔(面向外側)
        /p MT組 北、西　　│　MT/D1　　ST/D2 ※2第二回
        /p ST組 南、東　　│ 　　　　　　　　　　的分攤在
        /p 　　　　　　　　│　H1/D3　　H2/D4　橋前集合
        /p ■擊退+分散    ─┴┬■獄8人      
        /p 　D1　　D2　　　│　　 　MT/D1　北西＞北東
        /p D3 MT　ST D4   │ 分攤 　　　※相反則翻轉站位
        /p 　　　　　　　  │  　　H2/D4
        /p 　H1　　H2　　　│ ST/D2　　　 　道  道
        /p 　　　　　　　　│ 　　H1/D3 　　　路
        /p ■兇無敵處理(以牛為北) -■生命的繁茂【亂】 
        /p ※T沒有牛通路無敵 │　牛…按基本分散
        /p H1　　　　 H2 　　│　鳥…躲避牛頭人的線開防擊退
        /p 　　　牛　　　　 │ 牛頭人…平行於橋拉線
        /p D3 D1　D2 D4  　│
  `)},{Name:"P7S game8",Type:"macro",Text:i(`
          /p MT組：MTH1D1D3　ST組：STH2D2D4
          /p 　【基本散開】　　　　　【ノックバック+鳥】
          /p MT/D1　ST/D2　　　　 D1　　 　 　 D2
          /p 　　 　 ★　　　　　　D3　 MT　 　ST　 D4
          /p H1/D3　H2/D4　　　　通路 　 　 　 通路
          /p 　　　　　　　　　　　H1　　　　　　　H2
          /p 【生命の果実：頭割り】　│【魔印創成：散開】
          /p 北側：MT組　南側：ST組 │基本散開※頭割りと被ったら通路
          /p 【エクサ+頭割り】　 　 　 │【鳥誘導＋塔】
          /p 西：MT組　東：ST組　　 │基本散開準拠でズレたら時計回り
          /p 【魔印創成：獄】
          /p 　 ▼西島▼　　　　　　　 　 ▼東島▼
          /p 頭割り　MT/D1 　 　 　 MT/D1　頭割り
          /p ST/D2　H2/D4　通路　H2/D4　ST/D2
          /p 　　　　H1/D3　 　　　H1/D3
  `)},{Name:"P7S WayMark",Type:"place",Place:{A:{X:114.29,Y:0,Z:83,ID:0,Active:!0},B:{X:121.87,Y:0,Z:87.38,ID:1,Active:!0},C:{X:121.87,Y:0,Z:96.13,ID:2,Active:!0},D:{X:114.29,Y:0,Z:100.5,ID:3,Active:!0},One:{X:85.71,Y:0,Z:83,ID:4,Active:!0},Two:{X:78.13,Y:0,Z:87.38,ID:5,Active:!0},Three:{X:78.13,Y:0,Z:96.13,ID:6,Active:!0},Four:{X:85.71,Y:0,Z:100.5,ID:7,Active:!0}}}],1088:[{Name:"P8S 菓子 門神",Type:"macro",Text:i(`
        /p 《菓子系列》P8S門神專用宏
        /p ------------------------------------------------------------------
        /p ◆基本分攤/多重灼炎/二蛇傳統
        /p     MT/D3  →  ST/D4
        /p         ↑                  ↓
        /p     H1/D1  ←  H2/D2
        /p ------------------------------------------------------------------
        /p ◆一蛇順位
        /p 從A起順時針：MTD1＞STD2＞H1D3＞H2D4
        /p ------------------------------------------------------------------
        /p ◆一獸分散            | ◆一獸跳躍
        /p     D3  MT  D4      | 1、3輪=1點
        /p     H1  H2   ST      |  2、4輪=中間
        /p     D1          D2      |  安全區=A/D點
        /p ------------------------------------------------------------------
        /p ◆八方/二蛇固定   | ◆二蛇順位
        /p        MT    D4         | 閑人：TH西北、DPS東南
        /p     D3           ST      | 石光/邪毒：
        /p     H1           D2     | 西北    MT>ST>H1>H2   
        /p        D1     H2        |             D1>D2>D3>D4    東南
        /p ------------------------------------------------------------------
        /p ◆四重同側分散　　| ◆四重對角分散　| ◆四重分攤
        /p 　 　　MT　　　　|　　　 中央　　　｜MT→D1
        /p D3 D1 ST D2 D4  ｜　　　近D　　　｜ST→D2
        /p 　　H1　H2　　　|　   H　○　T　　 | D3→H1
        /p (MT組西、ST組東)  |　　 　遠D　　 　 | D4→H2 
        /p ------------------------------------------------------------------
        /p ◆二獸分攤
        /p 二分：BOSS＞MTH1D1D2＞STH2D3D4
        /p 四分：BOSS＞MTD1＞STD2＞H1D3＞H2D4
  `)},{Name:"P8S 門神標點",Type:"place",Place:{A:{X:100,Y:0,Z:91.6,ID:0,Active:!0},B:{X:108.4,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:108.4,ID:2,Active:!0},D:{X:91.6,Y:0,Z:100,ID:3,Active:!0},One:{X:91.6,Y:0,Z:91.6,ID:4,Active:!0},Two:{X:108.4,Y:0,Z:91.6,ID:5,Active:!0},Three:{X:108.4,Y:0,Z:108.4,ID:6,Active:!0},Four:{X:91.6,Y:0,Z:108.4,ID:7,Active:!0}}},{Name:"P8S NO CCHH 本體",Type:"macro",Text:i(`
        /p 【 NO CCHH 】P8S本體 專用宏
        /p -----------------------------------------------------------------------
        /p ■第一次術式記述（分攤分散）
        /p 　八方分散站位　　　　　　左右刀+分散
        /p　D1　MT　D2　　　　　　ST　 MT |　MT　ST
        /p　H1　　　ST　　　　　　　D1　 H1 |　H1　D1
        /p　D3　H2　D4　　　　　　D2　 H2 |　H2　D2
        /p　　　　　　　　　　　 　　D3　 D4 |　D4　D3
        /p　-----------------------------------------------------------------------
        /p　NGA冰火 固定站位（標點） |　冰點名優先順序（從左到右）
        /p　MT (4) H1 (D) H2 (2) ST　　|　D1>D2>D3>D4
        /p　D1 (4) D2 (D) D3 (2) D4　 |　H1>MT>ST >H2
        /p　-----------------------------------------------------------------------
        /p ■第一次概念支配
        /p 短αβγ→ABC　　　　　|　2分攤+長α→ 2　| 3分攤+長βγ→ 3　|
        /p 未合成短buff去原位 |　2分攤>3分攤　→　A > B > C 　|
        /p -----------------------------------------------------------------------
        /p ■萬象灰燼腦死 　　　|　 ■第二次術式分散＆支配者的一擊
        /p　　　　MT　 D1　　　|　　MT　H1　D3　D1
        /p　 ST　　　　　　D2　|　　ST　H2　D4　D2
        /p 　H1　　　　　　D3　|　■支配者一擊踩塔優先順序(從左到右)
        /p　　　　H2　 D4　　　| MT>ST>H1>H2>D4>D3>D2>D1　　　　　　　　 
        /p　-----------------------------------------------------------------------
        /p　■第二次概念支配
        /p　短αβγ→ABC　|　無→4 | 2分攤+長→ 2 | 單人→ 3　|
        /p　2火+2踩塔 → 場中十字站位引導後續分身
        /p　左下左上 → 左2塔中間　|　右上右下→ 右2塔中間 
        /p　-----------------------------------------------------------------------
  `)},{Name:"P8S 本體 青瓜 角大圈",Type:"place",Place:{A:{X:82,Y:0,Z:82,ID:0,Active:!0},B:{X:82,Y:0,Z:118,ID:1,Active:!0},C:{X:118,Y:0,Z:118,ID:2,Active:!0},D:{X:100,Y:0,Z:90,ID:3,Active:!0},One:{X:99.5,Y:0,Z:99,ID:4,Active:!0},Two:{X:108,Y:0,Z:90,ID:5,Active:!0},Three:{X:100.5,Y:0,Z:99,ID:6,Active:!0},Four:{X:92,Y:0,Z:90,ID:7,Active:!0}}},{Name:"P8S 苦茶子門神",Type:"macro",Text:i(`
        p ■四重核爆/引導/蛇2     ■基本散開
        /p MT/D3　→　ST/D4　　　D3 MT D4
        /p ↑　　　☆　　↓ 　　　 H1    ST
        /p H1/D1　←　H2/D2 　　 D1 H2 D2
        /p ■巨蛇模式(第一次)
        /p 蛇：從北順時針MTD1>STD2>H1D3>H2D4
        /p ■四足步行
        /p 1,3次→1(北西)　2,4次→中央　待機→A(北)
        /p ■幻影創造
        /p ◎龍龍×散開 　　│ ◎鳳凰×散開
        /p 　　D3 　　　　│　D3 MT D4
        /p 　　MT　ST　D4 │　H1 ☆ ST
        /p H1　D1　D2 　　│　D1 H2 D2
        /p 　　　　H2 　　│
        /p ■四重炎嵐(橫豎) ｜■四重炎嵐(角)
        /p 　　　MT 　　　│ 　　中央　　※MT組：西優先
        /p 　D1 ST D2 　 ｜ T　近
        /p D3 H1 H2 D4 　│ 遠　H
        /p ◎分攤：靠近H位置(MTD1/STD2/H1D3/H2D4)
        /p ■巨蛇模式(第二次) 4:4分攤
        /p DEBUFF：北西>MT/D1>ST/D2>H1/D3>H2/D4>南東
        /p 其餘：北西TH/南東DPS
        /p ■四重核爆/雙重核爆
        /p 四重：(BOSS)MT/D1>ST/D2>H1/D3>H2/D4
        /p 雙重：(BOSS)MTH1D1D2>STH2D3D4
        
  `)},{Name:"P8S 奶油咖啡門神",Type:"macro",Text:i(`
/p 【辣翅辣尾分散】         
/p D3  D4    D3 MT ST D4      
/p MT  ST    H1 D1 D2 H2   【蛇優先順序】   
/p D1  D2          A逆←MT ST H1 H2→2順
/p H1  H2          A逆←D1 D2 D3 D4→2順
/p 【八方站位】            【超級跳引導】
/p D3 MT D4         1,3→2點
/p H1        H2        2,4→場中
/p D1 ST  D2        待機→A點或B點
/p 【火龍捲分散站位(對角/並排)】
/p     BOSS                     MT
/p MT D1 | D2 ST     D3 D1  D2 D4
/p D3 H1 | H2 D4       H1 ST H2
/p 【火龍捲分攤】坦克→近戰；遠端→奶媽
/p 【加強獸分攤】
/p MT D1   MT H1 D1 D3
/p ST  D2    ST  H2 D2 D4
/p H1 D3
/p H2 D4
/p 【加強蛇固定站位】
/p      MT D4
/p D3            H2
/p H1            D2
/p      D1 ST
/p 【加強蛇後半分組/換位優先順序】
/p 預設左上←MT ST H1 H2→換位右下
/p 換位左上←D1 D2 D3 D4→預設右下
  `)},{Name:"P8S game8門神",Type:"macro",Text:i(`
          /p ■テトラオクタ/誘導/蛇2　 ■基本散會
          /p 　MT/D3　→　ST/D4　　　D3 MT D4
          /p 　　↑　　 ☆　　↓　 　　　H1(H2) ST
          /p 　H1/D1　←　H2/D2 　　D1 H2 D2
          /p ■イントゥシャドウ(1回目)
          /p 　蛇：北から時計回りMTD1>STD2>H1D3>H2D4
          /p ■フェイタルストンプ
          /p 　1,3回目→1(北西)　2,4回目→中央　待機→A(北)
          /p ■幻影創造
          /p ◎竜竜×散開　　　　 │◎フェニ×散開
          /p 　　　　D3　　　 　 │　D3 MT D4
          /p 　　　　MT　ST　D4│　H1 ☆ ST
          /p 　　H1 D1　D2　　 │　D1 H2 D2
          /p 　　　　　　 H2　　 │
          /p ■四重炎嵐(縦橫) ｜■四重炎嵐(角)
          /p 　　　 MT　　　│　　中央　※MT組：西優先
          /p 　 D1 ST D2 　　｜T　近
          /p 　D3 H1 H2 D4 │遠　H
          /p ◎頭割り：近H位置(MTD1/STD2/H1D3/H2D4)
          /p ■イントゥシャドウ(2回目) 4:4頭割り
          /p 　デバフ持ち：北西>MT/D1>ST/D2>H1/D3>H2/D4>南東
          /p 　無職：北西TH/南東DPS
          /p ■テトラ/ディフレア
          /p 　テトラ：(ボス)MT/D1>ST/D2>H1/D3>H2/D4
          /p 　ディフレア：(ボス)MTH1D1D2>STH2D3D4
  `)},{Name:"P8S game8本體",Type:"macro",Text:i(`
          /p 【術式1回目(頭割は西)】【術式炎氷(TH西 DPS東) 】
          /p 　 　★　　　紫 　 ST│ ▼炎:中央前詰め　▼氷誘導
          /p D1 MT D2　　 MT　│ MT>ST >H1>H2 西 D1>ST
          /p H1　　H2　H1　D2│ D1>D2>D3>D4 東MT>D2
          /p D3 S T D4　 　 D1　│【術式2回目散開 】
          /p 　※左安置は　H2　D3│　STMT 紫 D3D1
          /p 　　左右反転→　 D4 　│　　 H1H2D4D2
          /p 【概念1回目①】　　【概念1回目②】
          /p 　　　　早α　　 　 │　　　遅α
          /p 複/遅α　　　　　　│
          /p 　　　　　　 早β 　│ 生物　　　　遅β
          /p 重/遅βγ　　　　　 │
          /p 　　　　早γ　　 　 │　　　遅γ
          /p ※4塔：遅αβγ→北で合成
          /p 　 　 　 複/重/早余り→南で合成
          /p 【萬象灰燼：はいじあ/ビジョン式】
          /p 　　MT　　D1
          /p ST　 +　　　+　D2　※1,3番塔は前+で範囲捨て
          /p H1　+　　　+　D3　※2,4番塔は後+で範囲捨て
          /p 　 　H2　　D4
          /p 【概念2回目①】 　 　【概念2回目②】
          /p 　　 無/早α　　　 │　　　　遅α
          /p 単　　　　　 　 　 │ 生物
          /p 　　　　　　早β　│ ｲﾌ ｲﾌ　　　　遅β
          /p 複/遅　　　　　　 │ 生物
          /p 　　　 早γ 　　 　 │　　　　遅γ
          /p ※4塔：遅αβ→北で合成　遅γ/早余り→南で合成
          /p 【支配者の一撃】　　　　　【塔優先度】
          /p 　MTH1 D3 D1　西>MTSTH1H2D4D3D2D1>東
          /p 　ST H2 D4 D2
  `)},{Name:"P8S WayMark 本體",Type:"place",Place:{A:{X:100,Y:0,Z:81.5,ID:0,Active:!0},B:{X:118.5,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:118.5,ID:2,Active:!0},D:{X:81.5,Y:0,Z:100,ID:3,Active:!0},One:{X:100,Y:0,Z:85,ID:4,Active:!0},Two:{X:100,Y:0,Z:95,ID:5,Active:!0},Three:{X:90,Y:0,Z:90,ID:6,Active:!0},Four:{X:110,Y:0,Z:90,ID:7,Active:!0}}},{Name:"P8S WayMark High Concept",Type:"place",Place:{A:{X:117.531,Y:0,Z:82.394,ID:0,Active:!0},B:{X:117.7,Y:0,Z:117.216,ID:1,Active:!0},C:{X:82.823,Y:0,Z:117.213,ID:2,Active:!0},D:{X:104.985,Y:0,Z:94.741,ID:3,Active:!0},One:{X:88.489,Y:0,Z:80.738,ID:4,Active:!0},Two:{X:80.601,Y:0,Z:90.739,ID:5,Active:!0},Three:{X:89.753,Y:0,Z:81.265,ID:6,Active:!0},Four:{X:105.044,Y:0,Z:83.843,ID:7,Active:!0}}}],1090:[{Name:"候鳥",Type:"place",Place:{A:{X:0,Y:.074,Z:-11.161,ID:0,Active:!0},B:{X:5.7,Y:.082,Z:-18.5,ID:1,Active:!0},C:{X:-5.7,Y:.082,Z:-18.5,ID:2,Active:!0},D:{X:0,Y:0,Z:0,ID:3,Active:!1},One:{X:4.171,Y:.07,Z:-6.632,ID:4,Active:!0},Two:{X:.08,Y:.048,Z:-1.98,ID:5,Active:!0},Three:{X:7.038,Y:.074,Z:4.041,ID:6,Active:!0},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}}],968:[{Name:"莫古力P1",Type:"macro",Text:i(`
          /p P1鎖鏈點名 索尼 ｜ 白球衝鋒：騎士12點，下半場躲避
          /p    △H  ×T   □T   ｜ 深仁厚澤打斷：ST→遠敏→MT
          /p    ○D          ○D   ｜ 鋼鐵：全維空間/月環：無維空間
          /p    □D  ×H  △D   ｜ P1.5引導：奶→遠→近→T
          /p                              右 左 右 左
      `)},{Name:"莫古力P2",Type:"macro",Text:i(`
          /p 一運雷分散   ｜ 二運分組：D12補位
          /p         奶          ｜ MTH1       STH2
          /p    近  T  遠     ｜  D1D3       D2D4
          /p  3C4D-MT組 |     2刀            1刀
          /p  1A2B-ST組  |     腳下           對面
          /p ————————————————
          /p              MTD1             ｜ 固定AC隕石整組換位（除非BD正好出現隕石）
          /p  H1D3            H2D4  ｜ 第一次踩塔：隕石＞DPS＞TN，對應塔：場外中左右＞場內左手
          /p              STD2              ｜ 第二次踩塔：隕石＞DPS＞TN，按換位后的組同色標點塔正＞斜
      `)},{Name:"莫古力P3",Type:"macro",Text:i(`
          /p 【莫古力龍詩站位宏P3】
          /p 牙尾的連旋：分攤-鋼鐵-月環
          /p 尾牙的連旋：分攤-月環-鋼鐵
          /p ————————————————
          /p 【麻將階段】預站位｜【麻將階段】小抄 
          /p               A               ｜  注意麻將組內點名，B上D下
          /p       4②       ②1       ｜ 處理麻將時請注意鋼鐵月環
          /p           ③③③           ｜ ①C：放塔-回人群-分攤-踩3塔-引導
          /p   B①          ①D    ｜  ①BD：放塔-回人群-踩2塔-引導-回人群-分攤
          /p       3      ①     2       ｜  ② BD：分攤-連旋-放塔-回人群-分攤-踩3塔-引導
          /p                C               ｜  ③BCD：分攤-踩1塔-引導-連旋-放塔-回人群
          /p ————————————————
          /p 【8人4塔階段】 ｜ 4近戰負責補塔，順序：左→右→中
          /p MTD3      STD4 ｜組內只有1座塔，補位；組內超過2座塔，不動
          /p H1D1      H2D2｜死刑：MT接本體，ST接分身，本體/分身腳下處理
      `)},{Name:"莫古力P4~P7",Type:"macro",Text:i(`
          /p 【P4撞球階段】      ｜【隕石流】D12→D34→第一輪點名
          /p 場中換色，DPS先撞｜ 左上角開始順、逆時針數的第一個點名
          /p         MT    ST          ｜  MT       ST
          /p D12藍      紅D34    ｜       人群（藍龍眼）
          /p         H1    H2         ｜  H2       H1
          /p ————————————————
          /p  【P5死宣+鎖鏈】｜ 【P7接刀】D12→D34→H12
          /p   △無  X無  □無   ｜ 【死亡輪迴/狂暴】BOSS面向！
          /p   ○死           ○死  ｜ H1D3D1           H2D4D2
          /p   □死  X無  △死   ｜                  MTST
          /p 【P6傳毒】DTTDD最後一次原地，其他全部場中處理
          /p 【P6十字火階段↓】｜ 【P6光翼死刑】MT固定中，ST找位置
          /p V字放地火，從場邊跑到場中時的面向處理點名
          /p 攻擊1 2 3 4 ←o→ 鎖鏈2禁止2 鎖鏈1禁止1
          /p 【P6雙龍俯衝+P7地火左右出】MT去左，ST去右
      `)},{Name:"莫古力減傷宏",Type:"macro",Text:i(`
          /p 【莫古力龍詩減傷宏P1~P7】只安排目標減傷，場地減傷請隊內自行溝通
          /p P1至聖：MT雪仇、D1牽制                     ｜P2古代爆震：MT雪仇、D1牽制、D4昏亂
          /p P1鎖鏈點名：ST雪仇、D2牽制、D4昏亂｜P2碎屏斬：ST雪仇、D2牽制、D4昏亂
          /p ————————————————
          /p P3第一次連旋：MT雪仇、D1牽制               ｜P4隕石流：給不給都可以
          /p P3第二次連旋：ST雪仇、D2牽制、D4昏亂 ｜P4.5純潔心靈：ST雪仇、D2牽制、D4昏亂
          /p ————————————————
          /p P5第一次古代爆震：MT雪仇、D1牽制              ｜P6兩次血量檢測：MT雪仇
          /p P5第二次古代爆震：ST雪仇、D2牽制、D4昏亂｜P6死亡輪迴：ST雪仇、D1牽制、D4昏亂
          /p ————————————————
          /p 轉場，超大AOE注意減傷嗷！別好不容易要進P7了結果噶了嗷！MTST給D34減傷，H12D12開特色減傷，龍騎找奶媽要
          /p ————————————————
          /p P7第一次死亡輪迴：MT雪仇、D1牽制、D4昏亂  ｜P7第一次隕石：ST雪仇、D2牽制
          /p P7第二次死亡輪迴：MT雪仇                 ｜P7第二次隕石：ST雪仇  、D1牽制、D4昏亂
          /p P7第三次死亡輪迴：別看了！有什麼給什麼！留著過年嗎？
          （如果覺得第二次死亡輪迴的壓力過大，可以考慮2死亡輪迴D2牽制）
      `)},{Name:`隕石逃課宏 需要連打+鎖60幀 ${w("https://docs.qq.com/doc/DSkpLTVNTT2doT2Rz")}`,Type:"macro",Text:i(`
          /mlock
          /merror off
          /automove on <wait.1>
          /automove off
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
          /echo
      `)},{Name:"隕石宏 @竹取輝夜姬",Type:"macro",Text:i(`
          /automove on <wait.1>
          /automove off
      `)},{Name:"黑色分散buff-攻擊標",Type:"macro",Text:i(`
          /macrolock
          /macroicon attack1 marking
          /mk attack <me>
          /wait 1
      `)},{Name:"白色分攤buff-鎖鏈標",Type:"macro",Text:i(`
          /macrolock
          /macroicon bind1 marking
          /mk bind <me>
          /wait 1
      `)},{Name:"無buff-禁止標",Type:"macro",Text:i(`
          /macrolock
          /macroicon stop1 marking
          /mk stop <me>
          /wait 1
      `)},{Name:"一鍵清除標記",Type:"macro",Text:i(`
          /mk attack1 <attack1>
          /mk attack2 <attack2>
          /mk attack3 <attack3>
          /mk attack4 <attack4>
          /mk attack5 <attack5>
          /mk bind1 <bind1>
          /mk bind2 <bind2>
          /mk bind3 <bind3>
          /mk stop1 <stop1>
          /mk stop2 <stop2>
      `)},{Name:"P1 門神",Type:"place",Place:{A:{X:94.265,Y:0,Z:90.057,ID:0,Active:!0},B:{X:105.559,Y:0,Z:89.944,ID:1,Active:!0},C:{X:105.687,Y:0,Z:109.95,ID:2,Active:!0},D:{X:94.363,Y:0,Z:109.892,ID:3,Active:!0},One:{X:89.994,Y:0,Z:94.231,ID:4,Active:!0},Two:{X:110.13,Y:0,Z:94.36,ID:5,Active:!0},Three:{X:110.003,Y:0,Z:105.871,ID:6,Active:!0},Four:{X:90.049,Y:0,Z:105.51,ID:7,Active:!0}}},{Name:`P2 @竹取輝夜姬 ${w("https://nga.178.com/read.php?tid=31807681")}`,Type:"place",Place:{A:{X:100,Y:0,Z:86.8,ID:0,Active:!0},B:{X:113.2,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:113.2,ID:2,Active:!0},D:{X:86.8,Y:0,Z:100,ID:3,Active:!0},One:{X:109.333809,Y:0,Z:90.66619,ID:4,Active:!0},Two:{X:109.333809,Y:0,Z:109.333809,ID:5,Active:!0},Three:{X:90.66619,Y:0,Z:109.333809,ID:6,Active:!0},Four:{X:90.66619,Y:0,Z:90.66619,ID:7,Active:!0}}}],1122:[{Name:"絕歐米茄八方標準點4A1"+w("https://nga.178.com/read.php?tid=35178002"),Type:"place",Place:{A:{X:100,Y:0,Z:86.99,ID:0,Active:!0},B:{X:113.01,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:113.01,ID:2,Active:!0},D:{X:86.99,Y:0,Z:100,ID:3,Active:!0},One:{X:109.2,Y:0,Z:90.8,ID:4,Active:!0},Two:{X:109.2,Y:0,Z:109.2,ID:5,Active:!0},Three:{X:90.8,Y:0,Z:109.2,ID:6,Active:!0},Four:{X:90.8,Y:0,Z:90.8,ID:7,Active:!0}}}],1036:[{Name:"天然要害沙斯塔夏溶洞",Type:"macro",Text:`15溶洞
沿途：地圖直走的筆記文字提示了老一需要打開的機關的顏色。貝殼不用打。
開完機關之後出現BOSS，打就行了。
沿途需擊殺門口小怪撿鑰匙
最後出洞窟之後需要貼左側前進,儘量不拉到右側小怪`}],1037:[{Name:"地下靈殿塔姆·塔拉墓園",Type:"macro",Text:`16墓園
擊殺虛無魂魔之後 取下祭壇上的寶珠
第三個祭壇有封印結界 要玩家一直前進 在最深處擊殺所有小怪取得念珠解除結界.
最終BOSS 主宰者 加爾梵斯沒有特別需要注意的技能 當它與其他小怪連線時 BOSS會變為無敵 需要DPS優先擊殺被連線的小怪.`}],1038:[{Name:"封鎖坑道銅鈴銅山",Type:"macro",Text:`17銅山
老一憤怒的科托斯 沒有任何難度 
坐電梯下行之後 擊殺「爆破爆彈怪」 后撿起掉落的火藥 
老二怒水腐液 需要T拉住粘液膠 其他人啟動機關 T同時拉住出現的爆彈怪和粘液膠 讓爆彈怪把粘液膠炸碎。魔石精 需要DPS擊殺 粘液膠被炸碎3次之後 就可以正常擊殺
老三強腕的居格斯 直接打BOSS即可`}],162:[{Name:"魔獸領域日影地修煉所",Type:"macro",Text:`20修煉所
老一熾熱火叢 直接打BOSS即可
擊殺老一之後點選火堆中的「魔力的奔流」傳送
 道中需要沿途打開「絞車鎖鏈」 
老二霹靂雷蛟腳下是一個雷池 T把BOSS拉到場邊的斜坡上 每過一段時間 BOSS就會返回雷池中央無敵 並召喚小怪 此時雷池帶電 請不要踩雷池…清理小怪後繼續攻擊BOSS 
老三獸鬥士 坦伽塔 T把BOSS放在中場 T拉住小怪 只擊殺最後一隻毒火即可 
當BOSS腳下出現火圈時會無敵 需要轉火火元精  `}],1039:[{Name:"監獄廢墟托托·拉克千獄",Type:"macro",Text:`24千獄
路上需要撿拾4個「魔導感光器」 
抵達第二個房間時身上應該有3個感光器 此時左轉 在愚者大廳下方會有第4個感光器 
老三霸星蛛蝎 BOSS血量下降到一定程度之後 會出現尾刺
需要DPS立刻集中攻擊尾刺 場中重新整理的小怪需要由T拉住 奶媽如果是小怪第一仇恨 請把小怪帶到T身邊 `}],1040:[{Name:"名門府邸靜語莊園",Type:"macro",Text:`28莊園
進門之後沿左側前進 在第一間屋子裡能撿到小鑰匙 沿途女僕的讀條AOE可以使用眩暈技能打斷
老一 隨從女工 沒有特別需要注意的
打完老一撿了鑰匙要原地向後,轉開門后不走樓梯 直接跳下去
下樓之後最後一間房子(地圖左下角)里有BOSS房間的鑰匙 
老二 莊園的小丑總管 打就完了
打完老二之後需要使用通用技能「返回」 然後前行上樓梯 
老三阿芒迪娜女士 打BOSS就行，如果新人較多可以考慮關燈、打大眼睛小怪。`}],1041:[{Name:"休養勝地佈雷福洛克斯野營地",Type:"macro",Text:`32營地
進門之後在佈雷福洛克斯監視小屋的跟哥布林說話拿到鑰匙
老一大黃鵜鶘 T拉住小怪和BOSS 奶媽注意驅散DEbuff
沿途的怪能不打就不打 直接去BOSS房
老二獄炎火蛟每隔一段時間會追一段時間哥布林，無視仇恨，不必慌張。
老三水棲蠑螈 奶媽注意驅散淤泥DEBUFF 出水泡打水泡
最終BOSS阿杰特 出啥躲啥 BOSS會隨機點名一名玩家吐一攤毒 BOSS站在毒里會回血 需要T將其帶離毒潭`}],163:[{Name:"古代遺蹟喀恩埋沒聖堂",Type:"macro",Text:`35聖堂
DPS第一時間集火聖堂峰，不然會讀條能秒殺T的大傷害技能「終結針」
老一巨齒牛頭魔會讀條技能「致命射線」 同時螢幕提示「巨齒牛頭魔發出了詭異的咆哮！」
此時需要所有人找到發光的石板踩上去解除buff
路上遇到的「常衡石面」需要把它放在石板上擊殺 石板不發光說明位置正確
老二聖堂守衛 DPS要先集火巨像兵的魂石 把魂石打掉之後 才能攻擊本體 
老三審判化身 石面同樣要在石板上擊殺 BOSS會喚權杖，可以無視，也可以打掉。`}],170:[{Name:"流沙迷宮樵鳴洞",Type:"macro",Text:`38樵鳴洞
打掉螞蟻、跳進流沙 
老一靈蟻禁軍公主 出啥打啥
沿途一路狂奔 不要回頭 不要摸怪 跑到流沙之後迅速下潛即可 
老二巨型地道蠕蟲 奶媽注意驅散debuff 
BOSS下潛后 所有人貼邊躲開傷害範圍即可
老三奇美拉 讀條雷電咆哮接近BOSS 讀條寒冰咆哮遠離BOSS 被點名者遠離人群`}],1042:[{Name:"對龍城塞石衛塔",Type:"macro",Text:`41石衛塔
小怪A人巨疼!
老一丘都尤都 當BOSS突然離開走向場邊或角落時 請立刻跟過去 躲到他身側或身後
老二柯西切 T把BOSS拉到門口 面沖外 奶媽站到場地內側
當螢幕提示「足枷冰龍從天而降」時 可以開對應位置的炮打斷。
老三足枷冰龍 BOSS血量降低到一定程度之後會上天 對場地進行俯衝 被俯衝的地面會變白 所有人注意躲避 
第二次俯衝后注意躲開冰圈
俯衝結束之後 所有人遠離T BOSS降落時會對周圍造成一定的傷害 `}],171:[{Name:"山中戰線澤梅爾要塞",Type:"macro",Text:`44要塞
小怪拉到水晶紗帳裡面打
老一全視之眼平時是無敵的 需要拉進水晶紗帳
老二 躲好AOE
老三巴特拉爾 BOSS血量下降到一定程度時 會和場邊的水晶連線並變為無敵 需要轉火水晶`}],172:[{Name:"毒霧洞窟黃金谷",Type:"macro",Text:`47黃金谷
貼著左邊走!
老一鎖匠花 會每隔一段時間全屏上buff buff會讓玩家持續掉血 2層吃果子解buff 
老二數幣巨人 十噸橫掃」 需要T穿過BOSS躲避；「百噸迴轉」 吃到即死 所有人遠離
老三守財夫人 2層buff就要吃果子 注意轉火花苞`}],361:[{Name:"財寶傳說破艦島",Type:"macro",Text:`50破艦島
老一大腳巨猿 當BOSS開始全屏AOE時 需要調查場邊的樹 讓BOSS吃掉掉下來的香蕉
沿途的寶箱都要開 有些會出擬態怪 開箱子或者擬態怪會掉石板 需要湊齊4個石板才能開門 
老二肖魯姆 開場BOSS會在場周召喚一堆水泡 不要離得太近 會被吸進去 當BOSS偶潛入地底 出現大漩渦時 需要鉆到水泡里躲避
老三克拉肯 每個島上會出2只腕足 還有2只觸手 觸手請優先擊殺
BOSS會隨機點一名玩家 頭上出現綠色的小石頭 需要跳到隔壁沒人的島上 等隕石消失並出現漩渦后 才能返回`}],350:[{Name:"惡靈府邸靜語莊園",Type:"macro",Text:`50莊園
老一莊園的小丑 T拉住小怪 DPS集火即可
老二阿修 BOSS有順劈 正面不要有人 注意躲避AOE和旋轉劍 小怪出場請轉火
老三哈利卡納蘇斯 小怪請第一時間轉火 否則會有滅團級AOE 第二次小怪重新整理后 DPS酌情停手等第三波重新整理后擊殺`}],1063:[{Name:"幻龍殘骸密約之塔",Type:"macro",Text:`50幻龍
老一獨爪妖禽 T把BOSS放在場邊 請打飛水箱 DPS和H注意身後和四周也不要有水箱
老二魔導炮艇 BOSS會隨機點名一名玩家飛過去並沿途扔一堆火圈 被點名的玩家最好前往場邊引導火圈的位置 
老三塵世幻龍 場地上有兩條小龍 BOSS血量下降到一定程度后就會復活小龍 第一條龍需要遠離BOSS 而第二條龍需要接近BOSS 
小龍打到一定程度后 會重新整理一個魔導機器 第一時間集火 場地上出現全場藍色的範圍AOE時 打開魔導屏障發生器 並且躲進去`}],1062:[{Name:"凜冽洞天披雪大冰壁",Type:"macro",Text:`50大冰壁
老一冰錐萬迪爾 「風雪」之後2~4s會出現暴風雪，保持移動或跳躍可以避免被疊buff。爆彈怪爆炸也會疊buff，4層就會被凍住，並持續掉血。
中間有暴風雪的區域，不要站在裡面，會持續掉血。
老二大腳雪人，需要T把BOSS拉到場邊，並面向場中。場上會刷兩種小怪，魔石精不打，BOSS會讀條超大範圍扇形攻擊，把魔石精凍成雪球。當BOSS讀條全屏AOE時，需要打一下雪球將其推向BOSS打斷。DPS第一時間擊殺小怪。
沿途注意打斷的異端者讀條「龍血」
老三芬里爾 偶數次冰柱掉下來之後，躲在僅剩的一根冰柱之後。
`}],160:[{Name:"領航明燈天狼星燈塔",Type:"macro",Text:`50燈塔
老一不沉者 西蒙德 出啥打啥
老二祖 別碰鳥蛋 鳥蛋過一段時間就會孵化 先打公的
BOSS上天后所有人遠離T
老三暴君 直接打即可
塞壬 T開怪后把BOSS放在場中央背對人群 優先擊殺 爬行小怪
BOSS讀條「死者之歌」后 奶媽需要奶滿有BUFF的玩家 注意躲避俯衝`}],349:[{Name:"騷亂坑道銅鈴銅山",Type:"macro",Text:`50銅山
老一百臂主腦巨人 T把BOSS帶走到沒有火的地方 重新整理爆彈怪需要DPS第一時間擊殺
老二比吉 需要DPS啟動裝置 撿起炸彈 並放在BOSS腳下 炸彈炸幾次之後 BOSS就會從石頭人上下來 此時全員攻擊BOSS即可
老三複仇者 烏拉諾斯 開場T把BOSS拉到場地邊緣 螢幕提示「沙蟲在找吃的」時 奶媽或者遠端DPS把水晶搬到沙地上 
DPS優先擊殺小怪`}],367:[{Name:"甦醒遺蹟喀恩埋沒聖堂",Type:"macro",Text:`50聖堂
老一受損的審判化身 開戰後不久 會有某個部位發光 集火該部位即可
途中的蛇會石化需要注意
老二仙人刺女皇 BOSS讀條「十萬針刺」時 需要集火攻擊打斷詠唱 場上出現「仙人掌守衛」 先打掉守衛接下來馬上集火BOSS
老三審理神代言者 四周會升起棺材 裡面會跑出木乃伊 躲開它的直線前進方向 BOSS讀條「怨恨的斬擊」 是對隨機一名玩家的直線範圍AOE 
BOSS還會隨機連線一名玩家 被連線的人遠離BOSS 繞場狂奔`}],434:[{Name:"冰雪廢堡暮衛塔",Type:"macro",Text:`51暮衛塔
老一角牙古象 出啥躲啥
沿途走過去就有很多怪會爬起來打你
老二寒光劍 尤埃爾默里克  BOSS每使用一次全屏AOE，就會隨機復活2只小怪，小怪站起來后，會立刻讀條對它周圍的怪釋放增益buff。當發現小怪在BOSS身邊復活時，T要注意把BOSS帶走。
沿途有暴風雪的地方會對全團施加不斷掉血的傷害。
老三獅身巨鷹，場地上會有2~4塊石頭，當BOSS跳回場地中央讀條「迴轉牢獄」時，所有人立刻就近找石頭躲避，否則會被吸入中間的龍捲風里並造成大量傷害。BOSS的凜冬之風會摧毀石塊。`}],1064:[{Name:"天山絕頂索姆阿爾靈峰",Type:"macro",Text:`53靈峰
一優先擊殺龍毒草。打完后遠端點掉途中的毒粉塊。吃到爆炸會中毒
老一破鎖花王 直接打BOSS，無視蜜蜂。
沿途會有大龍突然降落。冰柱和冰元精都可以無視。
老二邁斯龍，隔一段時間會出現一大堆粘液，紅色分攤藍色單吃，綠色粘液讀條會對全團造成大傷害。
老三刁曼 頭頂出現綠色彗星之後，被點彗星的玩家遠離人群放下彗星，然後迅速返回。打到一半后，BOSS會停在場中央不斷放AOE，全員攻擊兩個翅膀。`}],1066:[{Name:"聖教中樞伊修加德教皇廳",Type:"macro",Text:`55教皇廳
老一光輝劍 阿代爾斐爾 滿場亂竄留下光球，光球過一會就會炸開
老二戰爭狂 格里諾 正面有順劈，要注意。T把BOSS放中場，BOSS會點名一名玩家方向放黑洞，接近黑洞就會被連線並持續掉血。當BOSS氣泡說要把你們都吹飛時，玩家會被擊飛。
老三聖騎士沙里貝爾 被連線的兩名玩家需要向相反方向移動扯斷(只有一個人跑是扯不斷的)，場地北邊會重新整理棋子士兵，注意溜縫躲避。當BOSS消失之後所有人一起輸出場上刷出來的「聖火」。`}],1065:[{Name:"邪龍王座龍巢神殿",Type:"macro",Text:`55龍巢
老一瑯妲巫龍 當發現自己被BOSS連線時，跑到石柱附近，把線傳遞給石柱即可。
沿途會遇到大龍+兩隻小龍，T只把小龍帶走就行了，大龍不必招惹。
老二格亞斯庫圖斯 爆彈怪吃掉兩三層氣體后，注意轉火打掉爆彈怪。
老三尼德霍格，BOSS會轉身向玩家吐火球，注意發現BOSS面衝自己就要及時躲閃(不會有提示)，BOSS偶爾會點名玩家「漆黑之珠」，因為BOSS會順劈，所以請T不要亂動，由另一名DPS和奶媽打掉珠子解救。BOSS上天后，所有小龍都要及時擊殺。如果DPS太慢，奶媽酌情給大師兄(NPC)加一加血。最後一條小龍擊殺后，大師兄會開啟一個罩子，躲裡面等BOSS回來即可。`}],416:[{Name:"學識寶庫迦巴勒幻想圖書館",Type:"macro",Text:`59圖書館
老一惡魔書墻 注意躲開地上黑色的傷害。當BOSS合上之後，跑到書背後去。
沿途會遇到64頁優先擊殺。
老二比布魯斯 BOSS回到場地中央后，打落在場上的書，打掉之後書會與一名玩家連線，這名玩家帶著線穿過BOSS，讓連線的球與BOSS相撞，就可以解除BOSS的無敵。
老三永世珍本 點名跑到場邊放球，當BOSS回到場中央並開始讀條時，場地四周的圓陣也會發光，需要所有人去踩滅光點。每個陣N個點，所以需要N名玩家同時去踩才行。`}],430:[{Name:"博物戰艦無限迴廊",Type:"macro",Text:`60戰艦
老一 幻影光 出啥躲啥。BOSS會釋放連續1/4場面積的AOE，建議遠端職業也接近BOSS，方便躲避。
沿途大鳥人會AOE旋風比較疼，奇美拉冰遠離雷接近優先擊殺。
老二 彌諾陶洛斯 橫掃繞背側，迴轉遠離。當BOSS開始橫衝直撞之後，注意關注BOSS最後停下的位置和麵向，它會立刻使用正面小扇形巨疼AOE，需要繞側背躲避。當BOSS讀條全屏AOE時(場地變藍)，隨手開一個培養皿打斷讀條…DPS擊殺小怪。
老三 博物總管 遠離地上的紅圈地雷不要碰到。BOSS會給玩家身上掛炸彈buff，需要奶媽驅散，否則會炸到隊友。場邊出現警報小怪時，需要轉火擊殺。`}],511:[{Name:"草木庭園聖茉夏娜植物園",Type:"macro",Text:`60植物園艦
老一玫瑰園 這個BOSS會放出幾個小魔界花苗，然後大大小小一家子一起噴，BOSS會一邊噴一邊轉，但是不會噴滿一圈，所以找到BOSS的方向，轉到它噴的末點就不用跑了。場上出現名為果實的氣球的時候，注意轉火擊殺(不打的話會炸掉，不過也沒有很疼)。
老二鷹蜂女王，平時場邊會有很多蜜蜂飛來飛去打人也挺疼。BOSS讀攻擊指令時，出啥躲啥即可。BOSS讀防禦指令時，周圍的蜜蜂會來到場地中央與BOSS連線，此時要打掉所有蜜蜂。BOSS讀協作指令時，場周圍的蜜蜂會4只一組並排，此時要離開蜜蜂連面對的方向，它們會向場地內放無提醒的十字或X形的AOE，所有人貼場邊站在兩組蜜蜂中間即可迴避。
老三劇毒美人 沒啥特別的，出啥躲啥，有啥躲啥，眼睛記得背對`}],557:[{Name:"黑渦傳說破艦島",Type:"macro",Text:`60EX破艦島
牛和長鬚豹會在腳下放buff圈，所有人優先擊殺，T注意把怪帶出buff圈。
老一紅血聖女團 一堆小怪，長鬚豹請優先擊殺。其他出啥躲啥。
老二尤彌爾，被點名一萬伏特的玩家踩水，連線扯斷。
老三愛因扎爾·斯拉菲爾辛正漩將 變身後會在場周圍的寶箱裡放入藥和炸彈，注意觀察哪些是解藥，並在箱子關閉後走到那個箱子附近解毒。BOSS還會點名一名玩家並讀條，這名玩家需要遠離其他人，治療注意準備驅散這名玩家身上的減速buff。`}],615:[{Name:"堅牢鐵壁巴埃薩長城",Type:"macro",Text:`60長城
浮空裝甲會隨機連線並持續攻擊，弓箭手小怪會無視仇恨給玩家上毒，拉多了非常容易團滅。
老一魔導獵手 出啥打啥出啥躲啥。
老二武裝重甲，BOSS會隔一段時間讀條「運動物體探知干擾器」，讀條結束後會給所有玩家上buff「慎行警告」，所有人立刻停手，不要移動、轉視角，近戰和物遠請按ESC直到彈出系統對話方塊。等buff倒計時結束后就可以移。
老三鐵面公卿，他會突然跑到場地一邊對大半場放AOE，所以所有人儘量接近中場站以方便躲避。當天降一堆刀並出現滿場AOE時，所有人打中間那把刀即可製造躲避的空間。其他的出啥打啥有啥躲啥。`}],420:[{Name:"空中神域不獲島",Type:"macro",Text:`60不獲島
進門跟NPC拿東西開傳送點
老一奴涅努克怪鳥 出啥打啥，出啥躲啥。BOSS消失需要玩家找到「奴涅努克之影」，站在怪圈裡面才能攻擊到它，打掉后濃霧就會散去。
老二卡努瓦努 當發現黑圈裡有圖騰時，需要玩家把圈內的圖騰搬出去。
老三招雷巨蛇 場第四周會掉下去而且不能救。BOSS會點名一名玩家放一個水泡，被點名的人站到BOSS身下。出風元精儘快打掉，擊殺后BOSS會立刻讀條吹飛並且變得可以被攻擊，不要被吹下去`}],578:[{Name:"秘本寶庫迦巴勒幻想圖書館",Type:"macro",Text:`60圖書館
老一 書中惡魔 出啥躲啥。
老二液態火焰 被連線衝鋒的遠離，BOSS變為火龍捲時會點名正負極，和BOSS同極接近，異極遠離；變為手掌時攻擊上升。頭頂出現太陽月亮徽章，找同色地板躲避。
老三博學林鸮 爆震之章→隨便踩一本浮空；龍捲之章→踩黑色的圈；河童之章→變成河童之後踩綠色的圈。BOSS扔完一圈書之後會召喚貝爺，如果DPS不夠的話記得注意在隕石後面躲噶哦哦。`}],519:[{Name:"神聖遺蹟無限城市街古蹟",Type:"macro",Text:`60EX無限城
老一阿卡莫特 BOSS讀條「幻惑鱗粉」時，所有人都要轉身面向場外，這個技能會製造玩家的幻象，並放出超大範圍的AOE攻擊
沿途會遇到巨大的光圈照在地上，T注意把怪都放進去。
老二雙翼飛獅 出啥打啥，尤其BOSS身下的球，優先打掉。地上會出現土風圈，玩家會被上耐性降低的buff，土降低的踩風，風降低的踩土
老三基路伯 死了還會復活的渣渣。第二次復活之後優先擊殺連線小怪。它還會讀條聖療，並在腳下出個魔法陣，站進去的人越多，傷害越少。`}],555:[{Name:"天龍宮殿憶罪宮",Type:"macro",Text:`60憶罪宮
老一長老莫古靈 優先擊殺即可護衛團長莫古森。如果團隊DPS較高，可以無視剩下兩個小怪。另外BOSS也會召喚復活圈，注意把小怪推出去。
老二卜奇喇吉 T把BOSS放在場地一頭，BOSS過一會就會起飛，記得找墻做掩護。BOSS讀條類星射電源和雷雲都是會破壞墻的，發現這兩個技能的時候儘量找沒墻的地方站。
老三聖龍子嗣 場地是一個3X3的石臺，有小旋風作為傳送點。有單點一名玩家的連續攻擊，預兆大概是全屏白光一閃，當你發現自己身上有白色光柱哐哐哐砸的時候，就是被點名了，注意換個地方。BOSS隔一段時間會起飛並俯衝，當出現俯衝的黑綠光之後，離開臺子即可。檯子上的聖元精可以提供大量LB，如果檯子上有記得順手擊殺。`}],617:[{Name:"天山深境索姆阿爾靈峰",Type:"macro",Text:`60EX靈峰
地上會噴氣兒，把怪放在那個噴氣孔附近可以獲得易傷buff。
老一萊頓瓦德 它會在地上扔孢囊，躲開即可，大號的孢囊是全屏傷害距離衰減。
老二高牢怪龍 抬手是打T，抬尾巴可能是掃尾，也有可能掃一圈(沒事不要站屁股后)，側身單肩下垂是衝刺，雙手抱胸是吐火球或噴火(躲開正面)。BOSS血量下降到一定程度后，BOSS會變紅，抬手橫掃一片帶旋風，掃尾變大回旋，並附帶承療減低效果，注意躲避。
第一時間擊殺聖山之血，如果有兩隻就由T標號依序集火擊殺，這個讀條可以擊暈打斷。治療注意抬血。
老三熔巖蝎 「飛躍重壓」會讓場上出現巨大的熔巖地帶，被點名的玩家注意儘量站到場邊。BOSS讀條「呼喚」會召喚小怪，優先打紅的，第二次呼喚時會召喚4只小怪，遠端DPS可以預讀LB`}],572:[{Name:"險峻峽谷塞爾法特爾溪谷",Type:"macro",Text:`60溪谷
地上的AOE圈對小怪同樣有傷害，但不必強求
老一飛天槍 奴扎爾·懷羅克，BOSS昇天后，會出現小怪和氣球炮塔，打掉氣球炮塔后需要到BOSS身下，等著氣球爆炸。氣球的氣浪會幫你把BOSS戳下來。然後出啥打啥，有啥躲啥。
猩猩會120°AOE…注意不要站太遠，地刺是有傷害的。沿途有豬籠
老二旋風扇 德托裡·西羅克，被點名的玩家儘量把點名的風放在兩個擋板之間，BOSS讀條「大扇風」的時候，自己找有擋板的位置站好等著被吹飛 。BOSS讀條「身輕如燕」后使用的技能非常快。
沿途會看到氣球載著一大堆鳥人飄過來，氣球要第一優先擊殺，如果沒有打掉，它就會回去載第二批鳥人。
老三晴天霹靂 托佐爾·法托特爾，出啥躲啥，分散集合。`}],516:[{Name:"星海空間顛倒塔",Type:"macro",Text:`60顛倒塔
老一歌聖 茲羅·羅格，呱呱愛唱歌，眩暈可驅散，解救T愛他，水泡要躲開，變呱打呱呱。
老二瑞吉 場地上出現大石頭和不斷擴大的AOE圈時，不要害怕，趕緊打掉石頭然後再找安全的地方躲避即可。被連線的玩家要躲在石頭後面，並與石頭保持一段距離防止受傷。
老三卡爾克布莉娜 進門6個娃娃都沒仇恨，快速抽掉即可。合體后變成一個大娃娃。當玩家被點名大眼睛技能時，BOSS會對這名玩家施加扇形AOE，背對即可。當它讀條抱頭防禦后，所有人(包括法系)都只能站在它正面輸出，否則就會被彈飛。當有人變成娃娃后，記得及時解救(尤其記得救奶媽…)`}],438:[{Name:"血戰蒼穹魔科學研究所",Type:"macro",Text:`60研究所
老一 雷古拉·范·休著斯 出啥打啥，出啥躲啥
沿途路上會遇到一個球卡在臺子上的怪，會放全場AOE電療，DPS優先擊殺，四周的培養皿會重新整理小怪，T注意拉住小怪
老二 赫魯瑪奇斯 蛇就是疼，奶媽注意抬血。第二個會讀條石化需要背對，另外會隨機點名扔火圈。腳下出現一個金色小圈圈需要另外一個人站在裡面(一共2個人)，否則被定身的人會受到高額傷害。頭頂出現紅色細線需要分攤。
老三 拉哈佈雷亞和以格約姆 隨便先打哪個都行。冰球一炸，就往原來冰球的地方跑…BOSS血量下降到一定程度后，會合體來到場中央，並連線一冰一火兩個球，優先打冰球。當BOSS讀條「法則改變」的時候，所有人躲到黑洞里躲避即可(黑洞只能容納1人)。`}],626:[{Name:"漂流海域妖歌海",Type:"macro",Text:`61妖歌海
一波小怪拉到右舷莉塞的位置，她會幫你放一些AOE。
老一 盧加特 出啥躲啥，記得分攤。
老二 獄長 出啥躲啥。DPS被抓后立刻遠離BOSS扯斷身上的影子。
BOSS前的守門怪讀條「誘惑嘯聲」時，請使用眩暈打斷，否則接下來會容易受到大量傷害。
老三羅蕾萊，它會讀條讓玩家強制前進或後退，當發現BOSS讀條時，看清方向，調整面向，避免自己走進藍圈裡即可。`}],616:[{Name:"海底宮殿紫水宮",Type:"macro",Text:`63紫水宮
老一切網蝦蛄 打掉切網蝦蛄的腳，BOSS就會肚肚向上…出現小怪后優先擊殺小怪，頭頂藍色圓球時跟其他人分散。
老二紅玉公主 當BOSS讀條誘惑時，前往BOSS四個角落的箱子里變成老朽…就不會被誘惑了。BOSS使用海底火山後，會有大傷害技能追著被點名玩家跑，請狂奔回避。
老三紫水妖妃 BOSS下水之後會出現3個禍泡，為玩家疊3層掉血buff，打掉一個減一層。打掉泡泡之後，注意水面的波紋，躲開BOSS即將出現的地方。`}],623:[{Name:"試煉行路巴兒達木霸道",Type:"macro",Text:`65霸道
熊和牛打人都非常疼，建議慎重拉怪。
老一加魯拉 衝鋒傷害為距離衰減
老二巴兒達木巨像 真·出啥躲啥
老三胡鷹 出啥躲啥，大眼睛背對。小怪階段，BOSS會出現在場外並向場內衝鋒，小怪出現在哪，衝鋒就從哪裡開始，注意躲避。BOSS第二次上天並落地后，所有人集火雙翼。`}],660:[{Name:"解放決戰多瑪王城",Type:"macro",Text:`67多瑪
小怪很疼。
老一 魔導後衛 出啥躲啥
老二魔導六輪裝甲 注意踩塔，不要撞電網，寧可炸塔也不要變成彈珠。
老三強化格林瓦特 BOSS讀條「鏈鋸」后，T挪一步離開原位即可躲避。當發現自己成為落點中心的時候，遠離人群找個角落，等落點確認后返回人群集合即可。BOSS掃射是單獨點一名玩家支線AOE，不可迴避，儘量不要牽連到其他人。`}],661:[{Name:"巨炮要塞帝國白山堡",Type:"macro",Text:`69白山堡
老一魔導機車大魔 當BOSS開始衝鋒時，打掉炮塔旁邊的帝國兵，並趁BOSS規劃路徑時開炮即可
老二024號 踩完塔后BOSS會讀條「護盾轉換」，並喊話「XX屬性以太充能中……護盾轉換！」，未被充能的屬性即是它的弱點，去踩對應顏色的圈再攻擊BOSS即可，如果屬性不對，對BOSS的攻擊就會被反彈。
老三煉獄炎魔 基本上是出啥躲啥有啥打啥，但是在戰鬥中BOSS會經過強化，被強化后的BOSS打人更疼。發現流血buff記得及時驅散。`}],689:[{Name:"鏖戰紅蓮阿拉米格",Type:"macro",Text:`70阿拉米格
老一守衛機蝎 出啥躲啥
老二奧盧斯·瑪爾·亞希納 BOSS核心技能會讓你靈魂出竅，需要找回身體。碰到鐳射會被眩暈，而碰到浮游爪會被推遠
老三 芝諾斯·耶·加爾烏斯 和BOSS連線的人接近BOSS，並向場外或無人的方向引導BOSS的扇形AOE。風斷一閃接近風球等待被吹飛，雷切一閃遠離，妖刀一閃分散引導直線AOE。偶爾會有連線+風閃的情況，請保持站在風球與被連線NPC之間，接近風球的位置引導躲避。打到一定程度后，BOSS會拔出3把妖刀，DPS請火力全開集火妖刀，打的越快，接下來AOE傷害越低。另外打刀的同事，BOSS還會釋放3種一閃，注意應對。`}],731:[{Name:"沉沒神殿斯卡拉遺蹟",Type:"macro",Text:`70斯卡拉
老一 凱爾派 開打後場邊會變紅，不能踩進去。「魚雷」是死刑。「水平面上升」是AOE，BOSS會讀條「水力吸引」或「水力推行」，所有人吸引遠離推行接近。另外BOSS還會點名一個紅圈，需要玩家把它放在場邊，放下後立刻遠離，這個球會跟著玩家走(如果撞上被連線玩家則會持續掉血)。
老二 舊日靈偶 BOSS隔一段時間會無敵並連線若干個靈偶分身，第一次需要玩家打掉，第二次開始，玩家會被變身為魔石精，技能欄變為放炸彈。需要用炸彈把分身都炸死
沿途平臺之間有深溝，需要擊倒所有小怪后，站在魔法陣上，就會獲得一個變身buff，並變成贊比托飄過去。
老三 直言不諱 赫羅德里克 抬手/抬起尾巴，則需要躲開正面/背面。當BOSS出現抱胸蓄力的動作時，注意躲開BOSS正面`}],662:[{Name:"惡黨孤城黃金閣",Type:"macro",Text:`70黃金閣
老一瑞光丸 被小怪連線的玩家接近場邊，或與另一隻小怪接近擊殺，方便躲避小怪自爆。別的沒啥要注意的。
沿途遇到會通靈術的忍者請第一時間擊殺。
老二道順丸 出啥躲啥
老三 保鏢 打到一半，場外老闆就開始撒錢，在BOSS的狗撿完錢之前把錢撿完即可，否則剩的錢越多，AOE越疼。天上落下蝴蝶之後，先站外側躲避，再前往內場躲避即可。龍頭不打也沒事，但會妨礙撿錢。`}],768:[{Name:"風水靈廟巖燕廟",Type:"macro",Text:`70巖燕廟
老一 大天狗 BOSS會召喚全場火球，撞上一次火球會疊一層易傷。看到BOSS身上有個大眼睛的話記得轉身。
老二 大太法師 推薦所有人接近BOSS站位，當BOSS抬手時，立刻到反方向躲避。DPS發現自己身上出現點名時，注意保持移動(會連續5次從地下扎出石柱)。當BOSS把場中央砸出一灘水之後，所有人注意儘量在前半場活動，防止扇形AOE無處可躲，那一灘水會逐漸擴大，不要踩進去。
老三 齊天大聖 當BOSS讀條如意大旋風並伸長金箍棒時，所有人注意觀察棒子，若棒子巨長而且帶火花閃電，則接近BOSS；如果棒子不是特別長並且沒有特效，則遠離BOSS。後半場BOSS會一分為二並同時使用這個技能，注意找棒子帶有電光的大聖身下躲避。`}],743:[{Name:"瘋狂戰艦無限迴廊",Type:"macro",Text:`70EX戰艦
米諾陶迴轉攻擊(讀條遠離)，奇美拉的冰雷(冰遠離雷接近，可以打斷)需要注意。
老一浮游炮主板 大部分時候是出什麼躲什麼，當魔導浮游炮並列一列的時候，注意要躲到炮筒後面去。
老二究極戰士 平時會有蓄力正面直線AOE，有讀條和非常明顯的蓄力綠球。女神的技能是黑白圈，需要被點名黑白圈的人重疊站位。鬼神的技能則是冰焰之紋，踩顏色相同的圈。魔神的技能是點名玩家到場邊放點名，點名的球會慢慢變大，注意不要踩到。其他出啥打啥
沿途會有米諾陶撞墻
老三究極神獸 BOSS抬手遠離BOSS，BOSS起立到身下躲避。BOSS會隨機點名一名玩家釋放8方向箭頭的波動炮攻擊，其他人注意遠離。當T身上出現白色向外的箭頭時，其他人要注意遠離T(傷害隨距離衰減)。`}],742:[{Name:"紅玉火山獄之蓋",Type:"macro",Text:`70紅玉火山
老一 大岳丸 經典技能百噸迴轉注意遠離BOSS。BOSS會把自己手中的武器丟到場上，然後點名一名玩家追著他吐巖漿，被點名玩家注意繞場奔跑，不要被嘔吐物砸到。另外所有人也要注意遠離BOSS丟在地上的武器，BOSS吐完會撿起武器接著打。
老二鐮鼬，遠端也稍微接近BOSS站，BOSS會使用半屏AOE，如果站的太遠可能來不及躲避。BOSS上天之後注意一邊躲避場上的各種風、線一邊打小怪，BOSS會沿著連線的順序衝刺，務必當心。
老三玄武，基本上是出啥躲啥，有圈分散。特殊的技能是迷潮，場地上的六邊形地磚會出現箭頭的形狀，並且其中一塊地磚上有一個水球，水球會按照地磚上的箭頭所指的方向前進。觀察水球的位置和地磚上的箭頭來回避水球的行進路線。`}],789:[{Name:"死亡大地終末焦土",Type:"macro",Text:`70終末焦土
道中會有落石
老一 赫德提特 被點名的玩家要躲到柱子後面，全屏AOE也要躲到柱子後面；點名所有玩家不要讓圈罩上柱子
老二 次品無人機 被點名的玩家去場邊放毒，當BOSS從側面消失後，冒著煙那條跑道就是安全的。
老三霧龍 被藍色標記點名的玩家注意儘可能往場邊站，治療準備驅散+抬血，非常疼。BOSS霧散之後會出現3只小怪，此時攻擊BOSS就會直接被凍住。
BOSS使用濃霧之後會消失，玩家開啟疾跑沿場邊奔跑尋找霧龍`}],788:[{Name:"污染庭園聖茉夏娜植物園",Type:"macro",Text:`70EX植物園
老一 泥口花 放180°範圍的AOE是多次判定的，不要提早回去。
老二 拉哈穆 核心技能滑坡，場地上會出現箭頭傳送帶，讀條結束后擊退。
沿途有水閘，可以放水洗怪
老三 枯腐泥妖 當地面下污泥涌動時，所有人站在綠色實地板上。當BOSS讀條污泥並出現點名範圍圈時，所有人站在網格地板上。BOSS召喚泥丸子小怪，這個小怪會被玩家的任意有初始傷害的技能擊飛，需要由玩家把它打到綠色實地板上，不要讓下面噴出來的泥，或者上面點名掉下來的泥碰到它，也不要讓BOSS或者小怪的攻擊打到它。`}],663:[{Name:"修行古剎星導寺",Type:"macro",Text:`70星導寺
老一兇豹所聞，兇豹所憶，剛開場的時候只有一隻，在打到一定程度后第二隻才會登場，T注意及時拉怪。后出現的紅豹子會用扇形AOE，比較麻煩，需要關注。
沿途小怪不要放在機關上打，近戰會感謝你。
老二額部陀，BOSS會使用「前後雙斬」和「左右雙斬」，斬前後躲兩側，斬兩側躲前後即可。BOSS讀條「預判」后，會立刻出現動畫效果，3面護盾，只有一面可以攻擊，注意方向(法系也要注意)。頭頂太陽月亮標記時，找同色發光地板即可。
老三雙豹伊沃恩，被點名的玩家會遭到一次巨大傷害，奶媽注意抬血，由於固定點名距離最遠的玩家，所以如果有遠端DPS的話可以適當引導。當BOSS與場上鬥氣連線時，所有玩家去撞球，全部撞掉則AOE傷害較小。`}],885:[{Name:"哈迪斯孤念殲滅戰",Type:"macro",Text:`極哈迪斯
■P1散開　　 　　　■隕石(塔)処理
D3　MT　D4　　　北→東：MT　南→西：ST
ST　◎　　D2　　 　■牢獄
H1　D1　H2　　　西北H1　東南H2
■分攤 ←MT/D1/D3/H1 　ST/D2/D4/H2→
■接線 北：T 南：H
■法則改變　　　 　■殉教者的記憶
　　D4/MT　　　　　　D1　D2
D3H1 ◎ H2D2　　 ST/H1 ◎  H2/MT
　　D1/ST　　　　　 　D3　D4
(※TH站點上（地標線○的交點）)
■魔法記述陣 圓：沒有的缺口
鏡子：沒有的缺口對向的缺口/中央鏡子背面的缺口
■深淵　←ST/D1/H1| ↑ | ↑ | MT/D2/H2→ (分攤)
　　　　　　　  ← D3 (放球) D4 → `}],373:[{Name:"慘劇靈殿塔姆·塔拉墓園",Type:"macro",Text:`EX墓園
老一證婚人，不要打任何小怪，不要用任何AOE技能，站在一起等BOSS放技能打掉小怪即可。
沿途要把的怪都打掉才行。調查棺材會眩暈開棺材的人並讀條AOE，需要眩暈打斷
老二備用的軀體，黑洞需要玩家去撞掉，無減傷裸吃的話最多吃2個，奶媽要注意加血。大球建議2~3名玩家一起去撞。BOSS會點名淤泥，T注意帶位，自己不要站進去，給DPS留出輸出空間。中間的NPC不能死，如果血量過低可以考慮奶媽加血。
老三雄壯的OOO，中央發黑的區域不要去，會持續掉血。過一段時間場周圍會出現一堆小怪，需要所有人迅速擊殺，小怪爬到場中央後會點亮符文，一般點亮4~5個之後就很容易團滅了。`}],362:[{Name:"紛爭要地佈雷福洛克斯野營地",Type:"macro",Text:`EX野營地
老一青藍之手指揮官 連線可以傳遞 注意躲好十字雷 
老二3號哥布林裝甲 出啥躲啥 有隨機點名衝鋒 躲開路徑即可 
老三6號哥布林坦克 BOSS打一會就會繞場旋轉 轉火小怪 
接下來BOSS會往場里扔炸彈 需要用技能把炸彈打到場邊去`}],363:[{Name:"腐壞遺蹟無限城市街古蹟",Type:"macro",Text:`EX無限城
老一腐壞貪吃鬼 BOSS每過一段時間會吞下一名玩家 需要剩下的人集火貪婪大口
老二阿里奧克 開場只有小怪 需要由T獨自擊殺小怪 DPS儘量不要碰小怪
老三迪亞波羅斯 開場場邊會有8個門 開怪之後門上會出現標記 相同圖案兩兩一組 一共4組 
門上的圖案過幾秒就會消失 正攻需要除了T的3名玩家使用遊戲的目標標點功能 對門做標記以作應對 
「噩夢」需要打斷 「破滅預兆」需要打開圖案相同的兩扇門 以躲避接下來的巨大傷害 `}],365:[{Name:"激戰城塞石衛塔",Type:"macro",Text:`EX石衛塔
老一格里尼奇惡龍，當BOSS跑到場邊的時候，立刻到身後
沿途「激昂異端者」會讀條「龍血」，需要使用眩暈打斷
老二庫卡龍龜 當BOSS讀條變硬時，會反彈弩炮的攻擊。當BOSS讀條全場AOE的時候，需要使用弩炮的第二個技能「雷彈」打斷(平時不要使用)。
老三吉魯維伽諾斯。BOSS抬手是正面順劈，抬屁股是背面順劈，雙手抱胸離開正面方向，單手護胸側身是直線衝刺，還會無提示噴火。`}],360:[{Name:"劍斗領域日影地修煉所",Type:"macro",Text:`EX修煉所
老一皮拉刻蒙 BOSS讀條百噸橫掃時 T穿背躲避 百噸迴轉所有人遠離BOSS
當場地變藍時 點BOSS身後的裝置 所有人去吃魔法人偶身邊的buff
老二卡托布萊帕斯 當BOSS讀條「惡魔之瞳」 吃場邊的幽暗珠 出現「不凈的魔眼」需儘快擊殺魔眼
老三退位主教 穆穆埃珀 T拉好開場小怪 主教會隨機定身2名玩家 需要自由的玩家觸控咒具解開束縛
請務必去救人`}],387:[{Name:"逆轉要害沙斯塔夏溶洞",Type:"macro",Text:`EX溶洞
老一真紅龍蝦 所有人稍微分散一些站位，被吐痰的玩家需要奶媽驅散。BOSS還會讀條螺旋尾對目標玩家造成巨大傷害(大約90%)，可以打斷。
沿途 水泡接觸到XX怪會給XX怪加很多血。
老二麥迪遜原船長 當BOSS標記一名玩家並射擊的時候，需要集火BOSS打斷。召喚的小怪打人並不疼，注意先打地上爬的就可以了(它會定身)。
沿途的大怪會召喚一大堆小怪
老三克拉肯 打腕足，腕足都打掉之後再打本體即可，觸手可以不打。`}],188:[{Name:"武裝聖域放浪神古神殿",Type:"macro",Text:`EX冬貝利
老一折角騎士 寇黑加 老一每隔一會就會往地上扔一把標槍 注意及時轉火打掉標槍 
老二濕皮妖師 佐爾加 會滿地插圖騰 圖騰有4個效果：變蛙、傷害增加、火耐性降低和加重
顏色和效果的對應每次進本都是隨機的 需要找到傷害圖騰且踩掉
老三光鱗兄弟 莫拉加加 當BOSS插戰旗時 T要帶著BOSS離開戰旗範圍 而插祭器時 需要DPS集火打掉祭器 
BOSS會隨機點名玩家死亡宣告 需要奶媽為該玩家加滿血`}],159:[{Name:"神靈聖域放浪神古神殿",Type:"macro",Text:`PT冬貝利
老一聖地守護者 出啥躲啥 
打倒冬貝利之後 拾取燈油 開機關用 第四個機關一般由T開疾跑衝過去引怪/冬貝利 奶媽開疾跑跟著過去開
老二巨大奶凍怪 小怪及時轉火清理即可 
老三冬貝利王 無視小怪直接打BOSS即可 `}],167:[{Name:"邪教駐地無限城古堡",Type:"macro",Text:`PT無限城
小怪會讀條召喚妖異 眩暈/沉默打斷即
老一奪神魔  出啥打啥
老二惡魔墻 地板變黑請立刻躲避 躲完黑地板后移動到中央 BOSS會讀條擊退
老三阿難塔波嘉 這個BOSS有超巨大範圍的掃尾技能 T請側過來拉
BOSS讀條「天災降臨」時 需要所有玩家躲避到石像之後躲避 `}],142:[{Name:"艾瑪吉娜杯鬥技大會決賽",Type:"macro",Text:`艾瑪吉娜杯鬥技大會決賽
BOSS各種吹飛，所有人別被吹下去
拉提豐的T，不要離場邊太近
提豐和章魚一人一個背對背拉好，先打章魚
被變河童之後，去章魚正面吃泡泡
會獲得濕潤，當提豐去場中央放超鼻息的時候
河童對著老師用河童拳，1層愉悅打一層buff
打掉8層就能打斷BOSS讀條
第二次BOSS會旋轉噴氣，注意躲避
拉章魚的T不要亂跑，繼續讓河童被洗
不要被BOSS噴氣噴到，會直接掉下臺子
沒有河童以後，鼻息所有人往場中央的BOSS跑
其他的出啥躲啥`}],394:[{Name:"奧丁殲滅戰",Type:"macro",Text:`奧丁殲滅戰
出啥打啥，有啥躲啥，解限不躲也死
減速圈治療注意驅散
BOSS 15%以下血讀條斬鐵劍，LB大招死勁擼`}],189:[{Name:"邪念妖地無限城古堡",Type:"macro",Text:`炒冷飯無限城
老一安可哈格 T開場注意不要讓BOSS面對任何一個石像 當某名玩家被點名時 請立刻躲到石像后 等BOSS傷害連線消失後再出來 
老二夜魔人 當BOSS隱身時 攻擊場上的「幻光球」 踩一下留下光圈獲得含光的buff 帶有這個buff玩家去找隱身的BOSS 把BOSS炸出來 
老三弗迪亞 當BOSS回到中場並有小怪連線時 要注意迅速擊殺小怪 當玩家被一個粘液膠一樣的玩意兒定身時 也請注意解救`}],366:[{Name:"大橋上的決鬥",Type:"macro",Text:`大橋上的決鬥
變成青蛙的繞著場邊跑，出啥躲啥
第二階段某人逃跑后，BOSS會隨機點名混亂
治療加滿血，即可驅散`}],369:[{Name:"海德拉討伐戰",Type:"macro",Text:`海德拉討伐戰
T別拉在中場，所有人遠離中場
BOSS放恐懼迷霧，所有人去BOSS圈內躲避即可
小怪ST拉住，打不打都行，小怪遠離BOSS
如果打的慢，小龍記得轉火，近戰DPS遠離正面`}],758:[{Name:"白虎詩魂戰",Type:"macro",Text:`極白虎
[紫圈]
　　　     Aー坦克
　Bー治療　    CーDPS`}],378:[{Name:"希瓦殲殛戰",Type:"macro",Text:`極冰神
場上結冰請不要進行任何移動！真的會死！
劍分攤,杖分散,弓背後集合
ST拉小怪,轉場完換T
九連環目前MT開減傷硬吃,不要動！
分散時,T和近戰去前半場,奶媽遠端去後半場
冰河怒擊全體遠離正面,冰弓點名全體背後集合`}],297:[{Name:"迦樓羅殲殛戰",Type:"macro",Text:`極風神
螺旋氣流躲背後,寒風之歌躲石柱后
羽毛擊殺順序:柔羽—>剛羽,刺羽St挑釁走,請不要打
分身處理方法:MT拉美翼本體去最北面,ST拉妙翅去最南面
擊殺順序:妙翅->美翼`}],638:[{Name:"祖爾宛殲殛戰",Type:"macro",Text:`極鬼神
                 ■飛翔一■                                    ■飛翔二■
                   |      T                                     \\    T
       D1       |                                     D1     \\                D2
                   |                 D2                             )一一一一一一
      D3         |  \\                              D3      /              D4
                      |     \\      D4                   /      奶媽
       奶媽       |      \\
【小怪階段】讀條隕石快速擊殺 注意迴避恐懼
【南十字座】人群[除了MT]→右   MT→左
【藍色點名】BOSS左側 右側打身位`}],677:[{Name:"須佐之男殲殛戰",Type:"macro",Text:`極豪神
■強襲:死刑 ■禍泡:停手
■八尺鏡+晴嵐+斷海:擊退後回來分攤
■雷雲出現后斷海不要形成三點一線
■P2 一T接刀，另一T開減傷撞球，其餘人打罩子
■海嵐斬:死刑換T
■閃電:被點名者跑到場地另一側
■石牢點名:集火攻擊仇恨列表BOSS上一個的石牢`}],295:[{Name:"伊弗利特殲殛戰",Type:"macro",Text:`極火神
奶媽:灼熱咆哮注意點名,灼熱去場邊,無事站中間
T:BOSS拉東邊,三灼傷快換T
DPS:先打柱子后打怪,三層易傷快停手
全體:鏈子接近,遠離灼熱奶媽,炎柱至多吃一片`}],375:[{Name:"拉姆殲殛戰",Type:"macro",Text:`極雷神
吃三個電球后扛BOSS,buff到時間補一紅,另一個T找機會吃三個電球換T
被點名混亂去A點集合,其他人分一個人去用電圈電醒
場上留三個電球,多餘的由奶和st收取(每人每次最多兩個)
被連線不要放技能,吃三個電球解除連線
出小怪集火小怪
不要和MT站 不要站水裡`}],720:[{Name:"吉祥天女殲殛戰",Type:"macro",Text:`極美神
■ 開場先殺左側小怪
■ 死刑: 光之奔流  ■ 藍球: 點名二仇波動炮
■ 誘惑之腕: 場邊放置
■ 完全拒絕: 接近BOSS ■完全引誘: 遠離BOSS
■ P2小怪需均勻削血，留一點HP
等待小怪開啟以太后立即擊殺
擊殺小怪后開啟以太防護
■P3后吃地面球可以增加一次以太使用機會`}],524:[{Name:"薩菲洛特殲殛戰",Type:"macro",Text:`極魔神
【P1分攤】
左ST治療　右DPS 
單綠圈接近誘導
【綠紫圈、巨人化后散開位置共通】
　 　　BOSS
　　　  紫(orA標記)
近1　MT　ST　近2
　遠1　　　　遠2
　 　學　　 白
小怪大MT　小ST　順序→小大小小大小
【巨人化】
塔(Debuff有)　左坦克治療　右DPS
塔(Debuff無)　左MT　右ST
撼地　左TH　右DPS
LB（物理遠端＞法系）`}],364:[{Name:"莫古力賢王殲殛戰",Type:"macro",Text:`極莫古力
奶媽關注全隊狀態列,及時驅散怒髮衝冠debuff和莫古亂亂亂debuff
MT拉壁去左下角,ST拉斧去右下角,小怪3層buff挑釁BOSS換T
全體小怪平均削血,沒事別站中間`}],577:[{Name:"索菲婭殲殛戰",Type:"macro",Text:`極女神
信徒階段2→3→1。魔槍背對人群. 猛突進一人承傷。
▼▼　不平衡之罰散開　▼▼
　　　 　MT/D1
H1/D2　▲女神▲ H2/D3
　　　 　ST/D4
兩邊連線相差0條去藍色對面+大傾斜
兩邊連線相差1條去線多那邊+小傾斜
兩邊連線相差2條去線多那邊+大傾斜
睿智之秤(綠色的氣息預兆)時換T。`}],448:[{Name:"圓桌騎士幻想殲滅戰",Type:"macro",Text:`極騎神
P1龍眼之邪背對
天踵 死刑減傷
P2衝刺和人群站場邊花紋根部
p2小怪: MT右 ST左 先打劍姿
穿天 南→北→南
龍眼之光后MT將BOSS拉到龍眼處
聖盾猛擊 被點名的奶站最後面,ST最前面,除MT其他人站中間 MT不參與`}],825:[{Name:"青龍詩魂戰",Type:"macro",Text:`極青龍
《菓子系列》極青龍專用宏
——————————————
◆ 升龍踩塔
——————————————
　　 　　 
　MT/D1　ST/D2
　 　 　　 　 　
 H1/D3 H2/D4
　　 　　 
——————————————
◆ 截線：MT左、ST右
◆ 沉默：MT → ST
◆ 順序：小大小大小
◆ 分攤：A方向H1、坦克
　　 　　C方向H2、DPS`}],730:[{Name:"神龍夢幻殲滅戰",Type:"macro",Text:`極神龍
《菓子系列》極神龍專用宏
——————————————————
　　MT ST　　　|■ 連線+分攤
D1　　　　D2　| MT/D1　ST/D2
　D3　　D4　　| 　　 　 A
 H1　 H2　　| H1/D3 H2/D4
——————————————————
■ 放尾巴
【奶右下 → DPS左下 → T左上or中間】
■ 死亡輪迴
【分攤 → MT無敵 → ST無敵 → 分攤】
■ 鑽石星辰：H2滑冰
■ 大地吐息：奶媽=左、DPS=右
■ 小怪階段：MT=中間大龍、ST=其他`}],359:[{Name:"利維亞桑殲殛戰",Type:"macro",Text:`極水神
奶媽驅散減速,多用再生和能力,少疊水鏡
T頭尾各一人拉,魔法魚人記得下踢,不要站在人群方向
DPS遠敏近戰打尾巴,法師打頭
全體出泡泡集火泡泡,BOSS下水迅速開以太防護罩,拍地板開防擊退`}],296:[{Name:"泰坦殲殛戰",Type:"macro",Text:`極泰坦
躲衝拳 躲衝拳 躲衝拳
石牢:dps場中,H→南
先打場中,擊退後等衝拳結束打奶
MT將BOSS拉最北側,ST→小怪→東
炸彈巖石儘量躲,如果躲不掉站石頭上,不要吃兩次爆炸
3層易傷換T`}],848:[{Name:"無瑕靈君殲殛戰",Type:"macro",Text:`極完美神
◆ 中場小怪： 
　ＭT - 西（9點） 
　ST - 東（3點） 
◆ 晶石引爆安全點：場地4點方向`}],446:[{Name:"羅波那殲殛戰",Type:"macro",Text:`極武神
光焰序遠離,光焰破去背後
突進找第一個分身,按分身出現方向走
沖天擊找柵欄,白圈來分攤`}],566:[{Name:"尼德霍格傳奇征龍戰",Type:"macro",Text:`極邪龍
小怪擊殺順序法拉克ＳＴ→布羅賓雅克ＭＴ→變種龍(學誘導)
ＳＴ遠離貼邊處理線傷害
          塔散開
　｜   Ａ 　 ↑　    　↑   H2 Ｂ
　｜  　   [D1]  　  [D2] MT ↓
  ｜　
　｜　  ST [D3]  Ｃ  [D4]
　｜    ↑H1   ↓　   　↓　
      燃燒之翼后散開
　｜ＡSt　　　　　　 MtＢ
　｜D1　　　　　　　　 D2
　｜
　｜D3　　　 Ｃ　       D4
　｜ H1　　　　　　 H2
燃燒之翼
不可視AOE,以BOSS為中心直線範圍安全,兩側傷害
燃燒之尾
不可視AOE,以BOSS為中心直線範圍傷害,兩側安全`}],858:[{Name:"緹坦妮雅殲殛戰",Type:"macro",Text:`極妖靈王
◆ 踩水圈 
H1　MT      H2 
 　 ST    D2 
D3    D1      D4  
◆ 火分攤
西1點：ST  H1 D1 D3
東2點：MT H2 D2 D4 
◆ 荊棘扯線
西北：TH     東南：D    ※順時針旋轉
◆ 雷截線
西1點：D1→D2→D3→D4→H1→ST
◆ 小怪
西：ST     北：MT`}],779:[{Name:"月讀幽夜殲滅戰",Type:"macro",Text:`極月讀
《菓子系列》極月讀專用宏
—————————————————
■ 銃彈分攤：BOSS背後
■ 長矛分散：BOSS面向為基準
　　　 T
　   H  ●
　　　 D
—————————————————
■ 月讀隕石
坦克：A（月牙角上）
奶媽：B或D（月牙對面）
DPS：C（月牙角上）`}],447:[{Name:"俾斯麥殲殛戰",Type:"macro",Text:`極云神
打BOSS的殼和核心時記得上背！
MT拉左側蛇,ST拉右側蛇
雷雨天不打水泡分散站位,其他天氣打水泡中間集合`}],811:[{Name:"朱雀詩魂戰",Type:"macro",Text:`極朱雀
《菓子系列》極朱雀專用宏
———————————————————————
◆羽毛X型/小鳥復活｜◆羽毛十型/P3踩塔
———————————————————————
　MT/D1　ST/D2　 ｜　 　　MT/D1
　　　 　　　 　　 　 ｜H1/D3　　　ST/D2
 H1/D3 H2/D4　｜　 　 H2/D4`}],294:[{Name:"迦樓羅殲滅戰",Type:"macro",Text:`PT迦樓羅
開場拉在12點背對人群，其他人遠離4個柱子
BOSS 讀條螺旋氣流，MT穿過BOSS躲避
BOSS第一次上天，所有人柱子後面躲避
BOSS讀完寒風嘯后，就可以出來了
BOSS召喚小羽毛，第一時間打掉，會炸掉柱子
BOSS喊話四分五裂，根據柱子剩餘情況掉血，注意抬血
爆炸后MT前往7-8點方向等BOSS（可以事先提前標記位置）
旋風躲好，小怪殺掉，先殺綠色的，紅的ST拉住，打不打隨意
打的慢的話，出現柔羽及時打掉，MT暴風技能一步一步的躲好`}],374:[{Name:"拉姆殲滅戰",Type:"macro",Text:`PT拉姆
進門陸地6點方向標A，核心技能混亂衝擊
儘量去A點集合用電擊圈電醒。電圈躲好
留下的電球回收好，電球越多AOE越疼
開場電球MT可以考慮吃3個獲得BUFF，其他人隨時注意遠離MT
小怪階段一定先打小怪，打BOSS太多血，會團滅
P3階段讀條滾雷，並且連線兩名玩家
這個階段的電球儘量留下3個以上，被連線的任意玩家連吃3個即可解除
`}],281:[{Name:"利維亞桑殲滅戰",Type:"macro",Text:`PT利維亞桑
開場左側（長邊）中央標A，頭尾有仇恨，分別拉
DPS法系打頭，物理打尾
治療站中央，彼此適度分開
真神跳水不會掉下去，但建議掌握觀察方法
（第一次下潛，觀察長邊即A點，出水柱往反方向跑
之後下潛，看短邊，如果短邊出水柱，就往沒水柱的半場跑
如果長邊（甲板兩側）出水柱，就轉身往後面跑
如果有聲音但沒水柱，往前跑到甲板邊）
吹水泡，第一時間擊殺。提示可以使用魔法壁障，BOSS下潛后
打開壁障抵禦巨浪，不然會團滅
要注意BOSS血量30%，如果屬性轉換以太不足30，則無法打開壁障
小怪波齒魚人不能打斷，優先擊殺`}],1067:[{Name:"莫古力賢王殲滅戰",Type:"macro",Text:`PT莫古力
P1 出啥打啥，P2 背口訣 「力音愈壁斧弓障」
P2BOSS出現，MT帶到場邊，ST帶力和斧去另外一邊
其他不管，按照口訣快速擊殺
小怪不死別碰BOSS！注意！`}],426:[{Name:"那布里亞勒斯討伐戰",Type:"macro",Text:`那布里亞勒斯
BOSS讀條二重/三重之後，會接電火花
治療注意提前預讀加血，T在三重接電火花的時候記得開減傷
BOSS之後去中央，所有人撞球，一紅一黑的撞
不要撞到同一顏色，撞多了會死，儘量把球撞光
出現的小怪順路打掉即可
BOSS20%血后，會去中央放裂縫
所有人先遠離，上好各種BUFF，比如騎士可以開無敵
DPS開爆發，開好後進入裂縫，BUFF會延時10倍時間
進去後會掉隕石，注意踩圈
打完裂縫，直接擼`}],368:[{Name:"死化奇美拉討伐戰",Type:"macro",Text:`死化奇美拉討伐戰
T把奇美拉拉出洞，拉到山頂
寒冰咆哮打斷，其他出啥躲啥
不拉出山洞，治療壓力大
`}],293:[{Name:"泰坦殲滅戰",Type:"macro",Text:`PT泰坦
躲好直線技能，躲好流沙，不要太分散
雷分兩種，圓圈雷和川字雷
圓圈雷中央集合，等外圈第一個炸了以後立刻跑過去躲
川字雷先去旁邊，中央炸了後去中央躲避
場地會越來越小，注意別掉下去
BOSS隨機點名花剛牢獄，建議走到BOSS附近方便集火打掉
打掉后治療注意驅散他的debuff
MT注意BOSS用另外的手打你，之後就是掀桌
掀桌要開減傷！`}],396:[{Name:"無限城的死鬥",Type:"macro",Text:`無限城的死鬥
兩個怪拉開先打鳥人，這個副本的連線是靠近，是靠近，是靠近！
被變雞的人去踩風，其他人注意躲開風
P2點名一個治療，讀條捕獲，發現讀條時，治療遠離BOSS
DPS解救治療，如果治療和BOSS太近，會越難打，T注意太近拉開
其他出啥打啥，出啥躲啥`}],377:[{Name:"希瓦殲滅戰",Type:"macro",Text:`PT希瓦
MT穿越BOSS躲好冰河怒擊技能
BOSS說嚴冰之刃將守護我的兄弟，MT開好減傷
地上的圈盡力躲，躲不開硬吃一個，別多吃
小怪不及時打會團滅，但小怪剛出BOSS就起飛了
說明打BOSS太快，下次慢點打`}],292:[{Name:"伊弗利特殲滅戰",Type:"macro",Text:`PT伊芙利特
一定轉火契，BOSS衝鋒時，3只12點順時針方向依次衝鋒，盡力躲
別慌張，實在不行吃一個，1個不會死，3個必死
三階段BOSS讀條光輝炎柱，T注意打斷，掉血很多`}],837:[{Name:"遇襲集落水灘村",Type:"macro",Text:`71水灘村
老一 會在場地上召喚一些光球，光球會使用十字AOE，藍色方形AOE是衝鋒，後面會接扇形AOE。「頸手枷」注意減傷和回覆。
老一到老二
路上的小怪會給MT上減速，注意驅散。
老二 頭頂出現1~4餅的圖案，所有人4方向分散圍住BOSS即可。處理完分攤之後，地面會出現冰圈
老三 斐利亞 「鐘擺」是雙重距離衰減傷害，T貼場邊放點名，其他人反方躲避。BOSS會隨機捆綁一名玩家，其他人注意轉火解救隊友，「左/右鞭打」是左右連續施放的(均有讀條)，要注意。最後的「激烈捶打」，BOSS會按照箭頭方向使用技能並旋轉，只有在BOSS兩側是安全的。它會旋轉使用多次，注意躲避。`}],821:[{Name:"水妖幻園多恩美格禁園",Type:"macro",Text:`73水妖本
老一之前：注意打斷「澆水」。
老一美眼 因克·佐恩，「水脈亂打」水塘砸一次會變成小噴泉，第三次就會噴發，注意迴避。
老一到老二，注意打斷「澆水」。
老二格里奧勒，需要所有人一人擋住一根線，攔截營養。剩下的出啥躲啥有啥打啥。
老三樂聖 因克·佐恩，「痛打」對MT死刑，殘酷狂想曲」是全屏AOE。
「青蛙歌唱隊」正面施放120°變呱光線，穿背躲避。
 「獨木橋幻想曲」，會把所有玩家擊退到場邊，並在場地中央出現一個獨木橋，如果掉下去的話就會回到起點重來，前進到BOSS身下，打掉夢幻的絃樂器就可以阻止「終章」的詠唱，終章詠唱結束就會團滅。
BOSS使用自身變異幻想曲之後，會變為另一種形態，如果發現BOSS突然轉身，注意躲避正面；發現BOSS四隻觸腳抬起，注意躲開觸腳下方。`}],823:[{Name:"文明古蹟奇坦那神影洞",Type:"macro",Text:`75神影洞
老一之前：被連線的石像會發出鐳射，需要所有人找石板躲避。
老一洛查特爾洛查特爾，讀條「洛查特爾的罵聲」，場地北面的石像會發動半場AOE，所有人躲避到沒發光半場。「赤熱化」BOSS會隨機轉向並使用半場AOE，所有人注意躲避。這兩個技能同時出現時，必定會有1/4場地是安全的，冷靜觀察躲避即可。
老二大腳野蝠，「亞音速」全場AOE附帶天上掉石頭AOE，最後天上會掉下來兩根大鐘乳石，BOSS的「聲波」讀條會推到這些鐘乳石，往場邊躲避是比較安全的(石柱一定會倒向場內)。
老三艾洛斯，被連線的玩家需要遠離BOSS。BOSS使用吸氣+吐息時，會先把玩家吸引過去，然後沿場地箭頭方向擊退，注意避開場地上的毒潭。BOSS讀條「信仰宣言」之後，如果是分攤，請在BOSS正中央分攤，如果是紅圈點名，請分散到BOSS兩側躲避。`}],836:[{Name:"避暑離宮馬利卡大井",Type:"macro",Text:`77大井
老一 大犰狳，「大回旋」是近身360度迴轉攻擊。「重錘碎擊」需要先遠離，再靠近，同時伴有小AOE，冷靜躲避即可。
老二 水陸兩用塔羅斯，技能「鉆井」，先遠離躲避AOE，之後場地會出現噴泉，緊接著「高壓」全屏擊退(防擊退有效)，不要被擊退到水裡。
「強制排水」，週身出現旋轉箭頭，一邊使用範圍技能一邊旋轉，躲在BOSS身後跟著它轉即可安全迴避。
老三 斯托爾戈BOSS讀條「異端十字叉」，同時身邊出現4個三角形白光，站在三角底邊交點處的地方即安全。「碎輪」站在BOSS圈內安全。召喚的4個羽毛和BOSS本體會輪流發動上述兩個技能，注意觀察，冷靜尋找安全點。`}],822:[{Name:"偽造天界格魯格火山",Type:"macro",Text:`79火山
老一得到寬恕的殘忍，「流明無限」躲開正面。「颱風之翼」，同時身下出現3個風球，需要站在2個風球之間躲避。
第三次颱風之翼開始，所有人需要遠離BOSS同時遠離場邊的風球。
老二得到寬恕的無常，當BOSS轉完了之後，有臉的格子對應我方場地上就會出現AOE。在後半程除了有臉之外，場地上還會出現2個光球，光球會用環形AOE。
「審判日」是場地上出現光圈，需要有玩家站在裡面，直到天上的球落下。
老三得到寬恕的猥褻瀆條「神削弱」，同時出現自身腳下範圍AOE，躲避時請緊貼範圍圈躲避，BOSS強化之後的這個技能在外圈會再多加一層AOE。
BOSS週身出現金色圓形，需要躲開BOSS正面及金色圓形正面。BOSS使用「羽制傀儡」會召喚4個傀儡，本體頭頂會有金光，同時會復讀上述2個技能。`}],912:[{Name:"紅寶石神兵狂想作戰",Type:"macro",Text:`極紅玉神兵
《地面液化》
　　 　　ST
　　 D1　　　D2
　 H1　　　　 H2
　　 D3　　　D4
　　　　 MT
☆掘地雷：順時針方向放置
《利爪突進》
　　 D1　　　D2
　 H1　　　　 H2
　 D3　　　　　D4
　　 MT　　　ST
☆隕石1：以北為起始點，順時針放置
☆隕石2：MT西南/ST東北`}],923:[{Name:"光之戰士幻耀殲滅戰",Type:"macro",Text:`極光戰
■基本站位　　 　　　　■LB3/塔8連/戰士引導/忍者(防擊退)
D3　MT　 D4　　　　　　 　MT/D3
 H1　 ★ 　 H2　　　　　H1/D1 ★ H2/D4
 D1　 ST 　D2　　　 　　　　ST/D2
―――――――――――――――――――
■巴哈線/暗四角　 　　■LB1/詩人距離衰減(中央分攤)
 MT/D3　　H2/D4　　　　　   T
　　　　　　　　　　　　　  H　　 H
 H1/D1 　　ST/D2　　　　　 DPS
―――――――――――――――――――
■LB2/小怪(線TH塔DPS)
　西：MTH1D1D3　　東：STH2D2D4
―――――――――――――――――――
※※【隕石十字】【忍者防擊退】※※`}],913:[{Name:"博茲雅堡壘追憶戰",Type:"macro",Text:`極老屁股
    【基本分散】       I           【分攤】
  H1　MT　D4       I
                             　  I MT/H1          ST/H2　
  D1　　  　D2       I D1/D3          D2/D4
 　　　        　     　 I
  D3　 ST  H2　  I  ※南北(順時針轉)
 ーーーーーーーーーーーーーーーーーーーー
    【魔導電火花】   I           【更強】 
  MT                   ST   I   ①基本分散
    H1               H2    |   ②內側移動
       D1         D2       I   ③順時針移動
            D3 D4          I   ④逆時針移動`}],930:[{Name:"希瓦幻巧戰",Type:"macro",Text:`幻希瓦
◆ X型分散　｜◆ 十型分散
———————————————————
D3　　　D4  ｜　 　 D3
 　MT　ST　 ｜　 　 MT
 　 　　 　 ｜H1 D1　　ST D4
 　D1　D2　 ｜　 　 D2
H1　　　H2  ｜　 　 H2
———————————————————`}],436:[{Name:"俾斯麥殲滅戰",Type:"macro",Text:`PT云神
打BOSS的殼和核心時記得上背！
一藍一綠兩隻小怪記得拉開
胖鳥的aoe會把人推下平臺
掉下去無法復活！`}],437:[{Name:"圓桌騎士殲滅戰",Type:"macro",Text:`PT騎神
出啥躲啥，P1「龍眼之邪」需要轉身背對
中間有一個階段會從地面冒出塔來，記得踩塔。
P2結束之後轉場記得往BOSS方向移動，會有一個持續擊退`}],559:[{Name:"尼德霍格征龍戰",Type:"macro",Text:`PT邪龍
出啥躲啥，被點名不要重合
小怪按「四腿蜥蜴龍→蛇形龍→變種龍」的順序打`}],637:[{Name:"祖爾宛殲滅戰",Type:"macro",Text:`PT鬼神
出啥躲啥
小怪先打「智慧」，然後「意志」然後其他
踩同屬性的塔，冰踩冰，火踩火`}],576:[{Name:"索菲婭殲滅戰",Type:"macro",Text:`PT女神
暴風(鋼鐵)後接暴雷(月環)
小怪儘快打掉，不然會團滅，順序231
傾斜天平之前向線少,或沒線的方向移動，以免掉下去
P2後會有隨機四名成員被點黑白圈，2黑2白，黑+白靠近即可解除`}],719:[{Name:"吉祥天女殲滅戰",Type:"macro",Text:`PT美神
核心機制「元氣」，在你的技能欄上方會有一個小技能欄，藍色的圖示
可以通過場上出現的藍色小球補充
轉階段時使用的「」魅惑擁抱」請開啟「元氣」處理`}],679:[{Name:"神龍殲滅戰",Type:"macro",Text:`PT神龍
神龍普攻會同時打兩個T
場地隨機一個方向出現水柱，迅速靠近水柱，或者防擊退以免被衝下平臺死亡。
巨浪之後，會出現幾個水圈，踩上去減少所受火屬性傷害，增加所受雷屬性傷害`}],778:[{Name:"月讀殲滅戰",Type:"macro",Text:`PT月讀
黃泉的鐵尖：讀條技能，BOSS前方的可見範圍的扇形Aoe，走位迴避
黃泉的銃彈：讀條技能，點名隨機1人釋放的直線分攤，請集合分攤
P1會出現兩團互相連線的煙霧，請集火打掉
P3場地會變成黑白兩色區域，長時間在一個顏色的區域站著會直接死亡
P4讀條「月刀左斬&月刀右斬」去相反方向躲避`}],838:[{Name:"末日暗影亞馬烏羅提",Type:"macro",Text:`80末日暗影
沿途會有小怪給隊友連線，被連線的玩家會中火屬性耐性降低或治療魔法效果降低的debuff，建議優先擊殺。
老一第一之獸，「流星群」會點名DPS玩家一個巨大的黑圈和紅色點名，請互相分散(但不要過於貼邊)，點名消失後離開原位，在原位會有隕石落下(附帶範圍AOE)，之後BOSS讀條「末日流星」的時候，需要躲在隕石后才能迴避。其他的出啥躲啥就行。
老二到老三 和前面一樣，有連線的小怪需要打掉。
老二終末的指引，都是小怪。
老三至大災獸，讀條「啓示錄」，需要到場地兩側的耳臺躲避，注意發紫光的耳臺會碎，不能站人，鐳射時間很長。距離衰減AOE「災獸衝鋒」會伴隨BOSS向前挺進。場地兩側出現人頭時，會隨機一側發出鐳射，鐳射是持續傷害，一側結束后另一側發出鐳射。另外BOSS還會單點1名玩家發射直線鐳射，注意躲避。`}],840:[{Name:"異界遺構希爾科斯孿晶塔",Type:"macro",Text:`80孿晶塔
老一紮戈斧龍：「預兆」是一個無範圍預警扇形AOE。玩家頭頂出現刀形狀的點名時，BOSS會按照刀數量的順序使用直線AOE，互相不要重疊，不要打到兩側的罩子。巨大綠色圓圈點名分散以及集合分攤同理，如果小怪被打出來了，記得優先處理小怪。
老二米特里達梯，場地上出現的雷球需要適當遠離，其他的出啥躲啥。
老三泰空，讀條「魔導交叉鐳射」時，身體前後左右會出現一個光點，遠離光點，這裡會發射鐳射，站在兩個光點之間略靠外躲避。鐳射發射出來之後，會出現暫停的紫粉色傷害區域，不要撞進去，時間結束後會發展爲直線AOE。
另外還有從場邊發射鐳射的「魔導防護鐳射」，和前面同理，會有鐳射炮蓄力的光點。
「人造重力」讀條后，地上出現紅黑色的小圓點，這個小圓點會擴大，注意尋找安全區。`}],841:[{Name:"創造機構阿尼德羅學院",Type:"macro",Text:`80創造機構
老一之前：沒什麼特別的
老一裂口鯊 和 原祖鯊，藍色的鯊魚會釋放近身圓形AOE，紅的會釋放扇形AOE。當一隻鯊魚跳下水后，另外一個顏色的鯊魚會來到臺上捱揍，水下的鯊魚會繞著檯子游，當它停下的時候，會在原位向場內放自己的AOE(藍色是圓形AOE，紅的是扇形AOE)，如果水下是藍色鯊魚，只要遠離藍鯊魚所在半場即可，如果水下是紅鯊魚，則需要靠近鯊魚並貼場地兩側躲避扇形AOE。雙方會不斷交換，直到結束。
老一到老二 沒什麼特別的
老二侯爵魔界花，出啥躲啥，當魔界花4只腳抬起的時候，需要站在兩隻腳之間躲避，它會一邊轉一邊抬腳砸地5次，在最後一次砸地后，還會釋放正面AOE，因此所有人需要在BOSS的側面/背面躲避跺腳。在後半程戰鬥中，還有部分草地場地會變紫，遠端可以站在環形無毒地板上輸出，需要同時注意紫色有毒地板和BOSS抬腳砸地。
老二到老三 惡魔裝甲會讀條「新烈光」(全屏AOE)，可打斷。
老三克察爾科亞特爾，出啥躲啥，BOSS會點名玩家和場地隨機放雷圈，場地雷圈在點名之後會留下一個電球，撞球吃球可以獲得傷害提高的buff，不吃球的話會導致BOSS傷害提高，因此玩家需要儘可能回收場地上的雷球。另外BOSS還會跳到場邊並擊飛玩家，AOE后T儘可能把BOSS帶回場地中央，以便處理後續機制。`}],884:[{Name:"魔法宮殿宇宙宮",Type:"macro",Text:`80宇宙宮
老一之前：小怪會從周圍的墻上、畫上跑下來。T注意不要悶頭跑過頭了。
老一宮殿的隱者，碰到掃帚會被擊飛，並獲得1層受傷加重，注意不要吃太多層。
老二涼南希，玩家需要在「育芽之謠」讀條結束之前，把種子從草地方塊搬到荒地方塊上，否則種子就會發芽變成小怪。第二次播種之後會吹風，吹風會把種子按照箭頭方向吹1格距離。
老三盧格斯，「左/右炎獄斬」，BOSS會轉身，注意看好BOSS面向再躲。「鬼炎斬」，玩家頭頂會出現紅色點名，會留下一個中等範圍的十字AOE，切記不要讓十字AOE打到場邊的傢俱。「必滅之炎」，玩家需要把藍點名的火焰傳遞給場邊的傢俱。「炎獄殺」，會依次點名4名玩家並出現連線，玩家需要遠離到連線變為紫色，BOSS會按順序衝向玩家，並立刻使用扇形順劈AOE，所有人遠離的同時身後不要有傢俱。`}],845:[{Name:"緹坦妮雅殲滅戰",Type:"macro",Text:`PT妖精王
「幻之符文」根據AOE範圍提示決定靠近還是遠離
「魔之符文」對MT扇形AOE+大傷害。
「水之符文」水圈需要一人站一個
「火之符文」水塘里分攤即可
「根之符文」植物的根會沿著預警方向伸長。
「冰之符文」和冰神希瓦的九連環是完全一樣的，如果實在不會就原地硬吃一層。
小怪階段，2個T分別拉住西場的豌豆花和北場的帕克，其他人全力進攻3點的芥子，由於T負責的小怪有正面順劈死刑，所以推薦原地拉住即可，不要帶著跑來跑去。打掉芥子之後再轉火另外2只小怪。
全部打掉小怪復活變大，再來一次。
小怪全部打掉之後會進入轉場動畫，可以適當佈置減傷，動畫結束之後進入P3。P3的基本技能在P1都見過了。`}],846:[{Name:"無瑕靈君殲滅戰",Type:"macro",Text:`PT無瑕靈君
開場后不久BOSS就會召喚小怪，T全部拉住即可，小怪會讀條AOE。小怪打掉之後場上會出現4個圈，需要踩圈+背對BOSS處理。
「斷罪飛翔」有兩種效果，一個是召喚2根雷柱，釋放3根AOE傷害，需要鉆縫隙躲避；一種是召喚電風扇AOE，需要順著AOE彎曲的方向前進。
「斷罪迴旋」BOSS放出的劍會停留在場地外緣，翻轉180°再飛回來，因此不要急於移動位置，否則有可能吃到第二次傷害。
小怪階段請按照藍色連線的順序擊殺，打掉所有小怪之後，BOSS會發動轉場技能，如果身上疊了超過1層的斬擊耐性降低debuff，請務必大量佈置減傷，否則極易團滅。
接下來就是各種躲AOE，當BOSS前往場邊的時候，需要按照AOE範圍預警提示的流動方向，儘可能往遠離BOSS的兩側躲避。重複幾次就過了。`}],847:[{Name:"哈迪斯殲滅戰",Type:"macro",Text:`PT哈迪斯
死刑是範圍AOE，不要隨便靠近MT
「失信」，在沒有箭頭的方向躲避
天上會掉下藍色發光的魔法陣，注意遠離
小怪階段中途會出現分攤+圓圈點名的標記，被點名圓圈的玩家注意遠離，剩下的玩家場中分攤
「暗影流」，向場地兩側躲避。「雙重強襲」是對當前仇恨前2的玩家點名大傷害，ST注意保持二仇
當BOSS伸出1隻手，需要走到手臂外側
當BOSS伸出2隻手，需要停留在場地中央
「囚禁」被點名的玩家需要遠離其他人
場地變黑並所有人附加死亡宣告時，需要所有人踩亮地上的光環
場地上出現箭頭流動的時候，需要走到箭頭起源的方向
頭頂出現金色點名的玩家，BOSS會向該方向釋放扇形AOE，引導到場邊。
鎖鏈捆綁之後提示「動態演練」，臉滾鍵盤即可解除
最後BOSS會使用「黑暗侵蝕」造成全場AOE，每5次是一次大傷害，同時場地外週會被侵蝕。`}],174:[{Name:"水晶塔 古代人迷宮",Type:"macro",Text:`50水晶塔1
BOSS1 骸骨龍 出啥躲啥和人群站一起
道中 三個岔路口從左到右分別對應ABC三隊，等人齊了再進！等人齊了再進！等人齊了再進！
BOSS2 塔納托斯 身上有星極體buff的才能攻擊BOSS，其他沒被連線的人可以打小怪 連線順序是A隊-B隊-C隊
道中 三個沙瓦克一隊負責一個，沙瓦克打完再擊殺中間的爆彈怪。
BOSS3 貝希摩斯王 鐵巨人由DPS儘快擊殺。綠色點名的放在場地內。  BOSS 讀條黃道隕石的時候躲到彗星背面。
BOSS4 提坦 T拉到中央偏六點方向，BOSS回場中讀條古代核爆時所有人立刻回到本隊標點的檯子上。`}],372:[{Name:"水晶塔 希爾科斯塔",Type:"macro",Text:`50水晶塔2
BOSS1 妖艷無比的六獸妖 連線紫球撞場邊柱子。藍色連線不用管被凍住后等紅色連線的人撞你。boss讀條古代核爆就站在解凍后的水裡
BOSS2 金剛不壞的守護者，打就行。
BOSS3 才思敏捷的亞蒙 第一時間擊殺魔科學物質66，被紫球連線的去撞庫姆庫姆使他變小，變小后擊殺，變青蛙的注意躲蛇，青蛙可以救解凍的人但記得留點冰塊躲後面的核爆
BOSS4 始皇帝贊德 黑圈需要分攤 所有人都集中在boss身下就行，別一個人跑出去`}],144:[{Name:"噴風相對安全點",Type:"place",Place:{A:{X:0,Y:0,Z:0,ID:0,Active:!1},B:{X:0,Y:0,Z:0,ID:1,Active:!1},C:{X:0,Y:0,Z:0,ID:2,Active:!1},D:{X:0,Y:0,Z:0,ID:3,Active:!1},One:{X:67.3074951,Y:-4.4768095,Z:-24.3381348,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1},Three:{X:0,Y:0,Z:0,ID:3,Active:!1},Four:{X:0,Y:0,Z:0,ID:3,Active:!1}}}]}};ge(()=>{[["亞歷山大絕境戰",{Name:"亞歷山大絕境戰",MapID:694,A:{X:100.003,Y:0,Z:80.801,ID:0,Active:!0},B:{X:119.115,Y:0,Z:99.922,ID:1,Active:!0},C:{X:99.995,Y:0,Z:113.659,ID:2,Active:!0},D:{X:86.131,Y:0,Z:99.805,ID:3,Active:!0},One:{X:106.833,Y:0,Z:99.988,ID:4,Active:!0},Two:{X:100.026,Y:0,Z:111.451,ID:5,Active:!0},Three:{X:116.01,Y:0,Z:98.394,ID:6,Active:!0},Four:{X:116.008,Y:0,Z:101.664,ID:7,Active:!0}}],["究極神兵絕境戰",{Name:"絕神兵",MapID:539,A:{X:100.8771,Y:9536743e-13,Z:82.41628,ID:0,Active:!0},B:{X:118.813377,Y:9536743e-13,Z:98.87351,ID:1,Active:!0},C:{X:99.95222,Y:0,Z:118.287018,ID:2,Active:!0},D:{X:82.2875,Y:0,Z:99.7309647,ID:3,Active:!0},One:{X:100.186066,Y:0,Z:99.2162247,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["究極神兵絕境戰",{Name:"絕神兵三連桶",MapID:539,A:{X:100.563751,Y:-190734863e-14,Z:93.5459,ID:0,Active:!0},B:{X:106.757942,Y:-381469727e-14,Z:99.5804443,ID:1,Active:!0},C:{X:100.4052,Y:-381469727e-14,Z:105.739433,ID:2,Active:!0},D:{X:92.96501,Y:762939453e-14,Z:99.20858,ID:3,Active:!0},One:{X:100.186066,Y:0,Z:99.2162247,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["巴哈姆特絕境戰",{Name:"巴哈P1",MapID:280,A:{X:-.211925328,Y:0,Z:-23.8155136,ID:0,Active:!0},B:{X:-.0276765823,Y:-9536743e-13,Z:-7.898926,ID:1,Active:!0},C:{X:-7.373253,Y:0,Z:3.969863,ID:2,Active:!0},D:{X:8.005841,Y:-190734863e-14,Z:4.147682,ID:3,Active:!0},One:{X:.07961208,Y:-190734863e-14,Z:.0431003571,ID:4,Active:!0},Two:{X:.072705254,Y:-476837158e-15,Z:9.053114,ID:5,Active:!0}}],["巴哈姆特絕境戰",{Name:"巴哈p3+p5",MapID:280,A:{X:-.07233447,Y:-9536743e-13,Z:-22.2067833,ID:0,Active:!0},B:{X:21.9503174,Y:-9536743e-13,Z:.206903815,ID:1,Active:!0},C:{X:.0709118545,Y:476837158e-15,Z:22.0522575,ID:2,Active:!0},D:{X:-21.9782677,Y:0,Z:-.287322283,ID:3,Active:!0},One:{X:.07961208,Y:-190734863e-14,Z:.0431003571,ID:4,Active:!0},Two:{X:.01625178,Y:9536743e-13,Z:8.986297,ID:5,Active:!0}}],["巴哈姆特絕境戰",{Name:"巴哈p4",MapID:280,A:{X:-.186353147,Y:-9536743e-13,Z:-23.1870365,ID:0,Active:!0},B:{X:0,Y:0,Z:0,ID:1,Active:!1},C:{X:9.838067,Y:-190734863e-14,Z:-6.76200962,ID:2,Active:!0},D:{X:0,Y:0,Z:0,ID:3,Active:!1},One:{X:.07961208,Y:-190734863e-14,Z:.0431003571,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1}}],["巴哈姆特絕境戰",{Name:"倒三角",MapID:280,A:{X:-.07233447,Y:-9536743e-13,Z:-22.2067833,ID:0,Active:!0},B:{X:8.039988,Y:190734863e-14,Z:-3.37868881,ID:1,Active:!0},C:{X:.290453434,Y:-381469727e-14,Z:9.521973,ID:2,Active:!0},D:{X:-7.49105072,Y:-190734863e-14,Z:-3.033144,ID:3,Active:!0},One:{X:.07961208,Y:-190734863e-14,Z:.0431003571,ID:4,Active:!0},Two:{X:.104299545,Y:0,Z:-9.92495,ID:5,Active:!0}}],["巴哈姆特絕境戰",{Name:"絕巴哈倒三角p3+p5",MapID:280,C:{X:.0709118545,Y:476837158e-15,Z:22.0522575,ID:0,Active:!0},D:{X:-21.9782677,Y:0,Z:-.287322283,ID:1,Active:!0},A:{X:-.07233447,Y:-9536743e-13,Z:-22.2067833,ID:2,Active:!0},B:{X:21.9503174,Y:-9536743e-13,Z:.206903815,ID:3,Active:!0},One:{X:.07961208,Y:-190734863e-14,Z:.0431003571,ID:4,Active:!0},Two:{X:.104299545,Y:0,Z:-9.92495,ID:5,Active:!0}}],["伊甸零式希望樂園 再生之章4",{Name:"E12S",MapID:759,A:{X:-.051,Y:75,Z:-84.346,ID:0,Active:!0},B:{X:9.639,Y:75,Z:-75.061,ID:1,Active:!0},C:{X:-.019,Y:75,Z:-65.039,ID:2,Active:!0},D:{X:-9.623,Y:75,Z:-75.007,ID:3,Active:!0},One:{X:7.124,Y:75,Z:-82.047,ID:4,Active:!0},Two:{X:7.079,Y:75,Z:-68.021,ID:5,Active:!0},Three:{X:-7.198,Y:75,Z:-68.006,ID:6,Active:!0},Four:{X:-7.006,Y:75,Z:-82.012,ID:7,Active:!0}}],["伊甸零式希望樂園 再生之章3",{Name:"E11S",MapID:752,A:{X:100.022,Y:0,Z:90.173,ID:0,Active:!0},B:{X:109.805,Y:0,Z:99.85,ID:1,Active:!0},C:{X:100.064,Y:0,Z:110.009,ID:2,Active:!0},D:{X:90.066,Y:0,Z:100.047,ID:3,Active:!0},One:{X:106.875,Y:0,Z:92.82,ID:4,Active:!0},Two:{X:106.885,Y:0,Z:106.837,ID:5,Active:!0},Three:{X:93.119,Y:0,Z:107.076,ID:6,Active:!0},Four:{X:93.154,Y:0,Z:92.941,ID:7,Active:!0}}],["伊甸零式希望樂園 再生之章2",{Name:"E10S",MapID:748,A:{X:99.951,Y:0,Z:85.696,ID:0,Active:!0},B:{X:114.055,Y:0,Z:99.873,ID:1,Active:!0},C:{X:100.035,Y:0,Z:113.913,ID:2,Active:!0},D:{X:85.976,Y:0,Z:100.091,ID:3,Active:!0},One:{X:114.408,Y:0,Z:85.232,ID:4,Active:!0},Two:{X:114.333,Y:0,Z:114.398,ID:5,Active:!0},Three:{X:85.747,Y:0,Z:114.304,ID:6,Active:!0},Four:{X:86.266,Y:0,Z:86.21,ID:7,Active:!0}}],["伊甸零式希望樂園 再生之章1",{Name:"E9S",MapID:750,A:{X:99.848,Y:0,Z:81.259,ID:0,Active:!0},B:{X:118.795,Y:0,Z:99.783,ID:1,Active:!0},C:{X:99.984,Y:0,Z:118.863,ID:2,Active:!0},D:{X:81.267,Y:0,Z:100.201,ID:3,Active:!0},One:{X:111.671,Y:0,Z:87.924,ID:4,Active:!0},Two:{X:111.868,Y:0,Z:111.561,ID:5,Active:!0},Three:{X:88.489,Y:0,Z:111.755,ID:6,Active:!0},Four:{X:88.4,Y:0,Z:87.633,ID:7,Active:!0}}],["伊甸零式希望樂園 共鳴之章4",{Name:"E8S內DD",MapID:729,A:{X:99.982,Y:0,Z:83.858,ID:0,Active:!0},B:{X:116.107,Y:0,Z:100.05,ID:1,Active:!0},C:{X:99.849,Y:0,Z:115.99,ID:2,Active:!0},D:{X:83.868,Y:0,Z:100.243,ID:3,Active:!0},One:{X:94.216,Y:0,Z:105.596,ID:4,Active:!0},Two:{X:105.674,Y:0,Z:105.697,ID:5,Active:!0},Three:{X:94.392,Y:0,Z:94.402,ID:6,Active:!0},Four:{X:105.68,Y:0,Z:94.413,ID:7,Active:!0}}],["伊甸零式希望樂園 共鳴之章4",{Name:"E8S",MapID:729,A:{X:99.982,Y:0,Z:83.858,ID:0,Active:!0},B:{X:116.107,Y:0,Z:100.05,ID:1,Active:!0},C:{X:99.849,Y:0,Z:115.99,ID:2,Active:!0},D:{X:83.868,Y:0,Z:100.243,ID:3,Active:!0},One:{X:88.461,Y:0,Z:111.284,ID:4,Active:!0},Two:{X:111.292,Y:0,Z:111.234,ID:5,Active:!0},Three:{X:88.517,Y:0,Z:88.768,ID:6,Active:!0},Four:{X:111.538,Y:0,Z:88.907,ID:7,Active:!0}}],["伊甸零式希望樂園 共鳴之章3",{Name:"E7S",MapID:727,A:{X:94.971,Y:0,Z:81.107,ID:0,Active:!0},B:{X:119.297,Y:0,Z:94.201,ID:1,Active:!0},C:{X:105.09,Y:0,Z:118.921,ID:2,Active:!0},D:{X:80.79,Y:0,Z:104.581,ID:3,Active:!0},One:{X:98.935,Y:0,Z:98.541,ID:4,Active:!0},Two:{X:101.153,Y:0,Z:101.152,ID:5,Active:!0},Three:{X:108.988,Y:0,Z:91.111,ID:6,Active:!0},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["伊甸零式希望樂園 共鳴之章2",{Name:"E6S",MapID:720,A:{X:100.34,Y:0,Z:87.646,ID:0,Active:!0},B:{X:113.004,Y:0,Z:100.46,ID:1,Active:!0},C:{X:99.54,Y:0,Z:113.13,ID:2,Active:!0},D:{X:86.71,Y:0,Z:99.536,ID:3,Active:!0},One:{X:95.152,Y:0,Z:95.508,ID:4,Active:!0},Two:{X:105.858,Y:0,Z:95.713,ID:5,Active:!0},Three:{X:105.54,Y:0,Z:106.498,ID:6,Active:!0},Four:{X:95.513,Y:0,Z:106.422,ID:7,Active:!0}}],["伊甸零式希望樂園 共鳴之章1",{Name:"E5S",MapID:716,A:{X:89.901,Y:0,Z:89.616,ID:0,Active:!0},B:{X:109.807,Y:0,Z:89.888,ID:1,Active:!0},C:{X:109.872,Y:0,Z:109.909,ID:2,Active:!0},D:{X:90.357,Y:0,Z:109.704,ID:3,Active:!0},One:{X:95.97,Y:0,Z:94.666,ID:4,Active:!0},Two:{X:104.077,Y:0,Z:94.714,ID:5,Active:!0},Three:{X:104.035,Y:0,Z:104.712,ID:6,Active:!0},Four:{X:96.008,Y:0,Z:104.818,ID:7,Active:!0}}],["伊甸零式希望樂園 覺醒之章4",{Name:"E4S",MapID:0,A:{X:89.25536,Y:0,Z:88.5073242,ID:0,Active:!0},B:{X:110.960938,Y:190734863e-14,Z:88.38228,ID:1,Active:!0},C:{X:89.05167,Y:9536743e-13,Z:111.250984,ID:2,Active:!0},D:{X:110.799,Y:9536743e-13,Z:111.164795,ID:3,Active:!0},One:{X:91.20058,Y:190734863e-14,Z:93.7162552,ID:4,Active:!0},Two:{X:90.92575,Y:9536743e-13,Z:107.869553,ID:5,Active:!0}}],["伊甸零式希望樂園 覺醒之章3",{Name:"E3S",MapID:683,A:{X:90.69979,Y:0,Z:81.42189,ID:0,Active:!0},B:{X:108.98317,Y:9536743e-13,Z:81.5657349,ID:1,Active:!0},C:{X:81.33156,Y:0,Z:104.841118,ID:2,Active:!0},D:{X:118.817116,Y:0,Z:104.770538,ID:3,Active:!0},One:{X:95.10125,Y:-9536743e-13,Z:99.67487,ID:4,Active:!0},Two:{X:105.042946,Y:0,Z:99.52861,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["伊甸零式希望樂園 覺醒之章2",{Name:"E2S",MapID:685,A:{X:99.9372559,Y:0,Z:102.468506,ID:0,Active:!0},B:{X:86.2714844,Y:0,Z:81.48967,ID:1,Active:!0},C:{X:86.9898148,Y:0,Z:118.055969,ID:2,Active:!0},D:{X:113.07515,Y:381469727e-14,Z:117.857727,ID:3,Active:!0},One:{X:86.9008942,Y:-9536743e-13,Z:100.3936,ID:4,Active:!0},Two:{X:113.457932,Y:-9536743e-13,Z:100.293045,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["伊甸零式希望樂園 覺醒之章1",{Name:"E1S",MapID:654,A:{X:91.13257,Y:0,Z:91.52951,ID:0,Active:!0},B:{X:108.877335,Y:9536743e-13,Z:92.16696,ID:1,Active:!0},C:{X:91.39729,Y:0,Z:108.440056,ID:2,Active:!0},D:{X:108.298889,Y:0,Z:108.410675,ID:3,Active:!0},One:{X:99.81162,Y:476837158e-15,Z:82.28877,ID:4,Active:!0},Two:{X:100.027077,Y:476837158e-15,Z:118.3746,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["歐米茄零式時空狹縫 阿爾法幻境4",{Name:"O12S門神",MapID:594,A:{X:99.83304,Y:9536743e-13,Z:80.21912,ID:0,Active:!0},B:{X:118.769211,Y:476837158e-15,Z:100.394394,ID:1,Active:!0},C:{X:100.046577,Y:9536743e-13,Z:119.10936,ID:2,Active:!0},D:{X:80.58852,Y:476837158e-15,Z:99.97452,ID:3,Active:!0},One:{X:0,Y:0,Z:0,ID:4,Active:!1},Two:{X:0,Y:0,Z:0,ID:5,Active:!1}}],["歐米茄零式時空狹縫 阿爾法幻境4",{Name:"O12S本體",MapID:594,A:{X:99.83304,Y:9536743e-13,Z:80.21912,ID:0,Active:!0},B:{X:118.453392,Y:-9536743e-13,Z:93.64815,ID:1,Active:!0},C:{X:100.046577,Y:9536743e-13,Z:119.10936,ID:2,Active:!0},D:{X:81.26986,Y:9536743e-13,Z:93.63288,ID:3,Active:!0},One:{X:100.116158,Y:0,Z:103.755928,ID:4,Active:!0},Two:{X:100.007416,Y:-9536743e-13,Z:111.029564,ID:5,Active:!0}}],["歐米茄零式時空狹縫 阿爾法幻境3",{Name:"O11S",MapID:593,A:{X:90.0306549,Y:0,Z:80.07129,ID:0,Active:!0},B:{X:119.689781,Y:0,Z:89.95763,ID:1,Active:!0},C:{X:109.997,Y:0,Z:119.707291,ID:2,Active:!0},D:{X:80.1643448,Y:0,Z:109.9063,ID:3,Active:!0},One:{X:100.026291,Y:0,Z:100.218727,ID:4,Active:!0},Two:{X:99.95635,Y:0,Z:109.840851,ID:5,Active:!0}}],["歐米茄零式時空狹縫 阿爾法幻境2",{Name:"O10S",MapID:592,A:{X:100.036873,Y:-9536743e-13,Z:80.13774,ID:0,Active:!0},B:{X:119.288452,Y:-9536743e-13,Z:99.52209,ID:1,Active:!0},C:{X:99.83287,Y:0,Z:119.035995,ID:2,Active:!0},D:{X:80.38637,Y:0,Z:99.80568,ID:3,Active:!0},One:{X:100.236496,Y:0,Z:106.1256,ID:4,Active:!0},Two:{X:104.780678,Y:9536743e-13,Z:101.296326,ID:5,Active:!0}}],["歐米茄零式時空狹縫 阿爾法幻境1",{Name:"O9SX字",MapID:591,A:{X:96.32393,Y:-190734863e-14,Z:95.60237,ID:0,Active:!0},B:{X:103.289055,Y:-9536743e-13,Z:96.70901,ID:1,Active:!0},C:{X:103.600288,Y:0,Z:103.315353,ID:2,Active:!0},D:{X:96.48285,Y:0,Z:103.007729,ID:3,Active:!0},One:{X:99.68421,Y:9536743e-13,Z:87.40692,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1}}],["歐米茄零式時空狹縫 西格瑪幻境4",{Name:"O8S門神",MapID:69,A:{X:.0896936655,Y:-9536743e-13,Z:-4.80771637,ID:0,Active:!0},B:{X:4.37434959,Y:0,Z:.428713232,ID:1,Active:!0},C:{X:-.00514018536,Y:0,Z:4.85788536,ID:2,Active:!0},D:{X:-4.363811,Y:0,Z:.404521555,ID:3,Active:!0},One:{X:1.05671811,Y:-9536743e-13,Z:-18.2012253,ID:4,Active:!0},Two:{X:-.34018302,Y:9536743e-13,Z:18.8458672,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["歐米茄零式時空狹縫 西格瑪幻境4",{Name:"O8s本體",MapID:295,A:{X:.6233097,Y:190734863e-14,Z:-18.5594025,ID:0,Active:!0},B:{X:19.2229443,Y:0,Z:-1.67351913,ID:1,Active:!0},C:{X:-.2087488,Y:0,Z:19.4362221,ID:2,Active:!0},D:{X:-19.0983086,Y:190734863e-14,Z:-.507885,ID:3,Active:!0},One:{X:-12.9519014,Y:0,Z:14.4428806,ID:4,Active:!0},Two:{X:13.9547405,Y:0,Z:13.1799335,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["歐米茄零式時空狹縫 德爾塔幻境4",{Name:"O4S",MapID:259,A:{X:-.191439867,Y:0,Z:-19.5519123,ID:0,Active:!0},B:{X:19.8772144,Y:-9536743e-13,Z:-.1288662,ID:1,Active:!0},C:{X:-.017939806,Y:0,Z:19.6729469,ID:2,Active:!0},D:{X:-19.79152,Y:-190734863e-14,Z:.098944664,ID:3,Active:!0},One:{X:.00287008286,Y:9536743e-13,Z:.0327014923,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["亞歷山大零式機神城 天動之章4",{Name:"A12S",MapID:193,A:{X:11.8757782,Y:400,Z:-20.3100662,ID:0,Active:!0},B:{X:21.2444363,Y:400,Z:11.8267078,ID:1,Active:!0},C:{X:-12.1610489,Y:400,Z:21.08806,ID:2,Active:!0},D:{X:-19.8631439,Y:400,Z:-11.9138031,ID:3,Active:!0},One:{X:0,Y:0,Z:0,ID:4,Active:!1},Two:{X:0,Y:0,Z:0,ID:5,Active:!1}}],["亞歷山大零式機神城 律動之章4",{Name:"A8S",MapID:150,A:{X:.236430019,Y:10.5000019,Z:-22.8561821,ID:0,Active:!0},B:{X:23.0866966,Y:10.5,Z:-.236469269,ID:1,Active:!0},C:{X:-.0179607868,Y:10.5000019,Z:21.8828621,ID:2,Active:!0},D:{X:-22.583107,Y:10.5,Z:-.3021698,ID:3,Active:!0},One:{X:10.8583527,Y:10.4999981,Z:-.397441864,ID:4,Active:!0},Two:{X:.111641228,Y:10.5000038,Z:9.996191,ID:5,Active:!0}}],["鑽石神兵狂想作戰",{Name:"鑽石神兵狂想作戰",MapID:782,A:{X:80.008,Y:0,Z:100.076,ID:0,Active:!0},B:{X:120.034,Y:0,Z:99.897,ID:1,Active:!0},C:{X:0,Y:0,Z:0,ID:2,Active:!1},D:{X:0,Y:0,Z:0,ID:3,Active:!1},One:{X:88.626,Y:0,Z:81.626,ID:4,Active:!0},Two:{X:111.198,Y:0,Z:81.499,ID:5,Active:!0},Three:{X:88.771,Y:0,Z:118.481,ID:6,Active:!0},Four:{X:111.349,Y:0,Z:118.481,ID:7,Active:!0}}],["紅寶石神兵破壞作戰",{Name:"極紅兵",MapID:718,A:{X:99.719,Y:0,Z:118.477,ID:0,Active:!0},B:{X:88.42,Y:0,Z:114.409,ID:1,Active:!0},C:{X:81.484,Y:0,Z:96.386,ID:2,Active:!0},D:{X:89.63,Y:0,Z:85.026,ID:3,Active:!0},One:{X:101.501,Y:0,Z:81.279,ID:4,Active:!0},Two:{X:114.05,Y:0,Z:85.897,ID:5,Active:!0},Three:{X:118.882,Y:0,Z:99.233,ID:6,Active:!0},Four:{X:111.467,Y:0,Z:115.661,ID:7,Active:!0}}],["綠寶石神兵狂想作戰",{Name:"綠寶石神兵狂想作戰",MapID:763,A:{X:108.435,Y:0,Z:82.009,ID:0,Active:!0},B:{X:118.916,Y:0,Z:86.765,ID:1,Active:!0},C:{X:94.038,Y:0,Z:118.32,ID:2,Active:!0},D:{X:82.407,Y:0,Z:112.211,ID:3,Active:!0},One:{X:112.197,Y:0,Z:81.463,ID:4,Active:!0},Two:{X:118.671,Y:0,Z:91.679,ID:5,Active:!0},Three:{X:89.665,Y:0,Z:118.247,ID:6,Active:!0},Four:{X:82.778,Y:0,Z:108.454,ID:7,Active:!0}}],["哈迪斯孤念殲滅戰",{Name:"極哈安全點",MapID:693,A:{X:100.11734,Y:-9536743e-13,Z:95.47624,ID:0,Active:!0},B:{X:104.621529,Y:0,Z:99.83995,ID:1,Active:!0},C:{X:100.047348,Y:190734863e-14,Z:104.507813,ID:2,Active:!0},D:{X:95.30611,Y:0,Z:99.79571,ID:3,Active:!0},One:{X:94.99098,Y:9536743e-13,Z:95.6959839,ID:4,Active:!0},Two:{X:104.888252,Y:0,Z:96.08912,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["緹坦妮雅殲殛戰",{Name:"妖靈王",MapID:658,A:{X:100.002243,Y:-196695328e-14,Z:81.3506546,ID:0,Active:!0},B:{X:118.654472,Y:-196695328e-14,Z:100.006805,ID:1,Active:!0},C:{X:100.023895,Y:-5960464e-14,Z:118.626984,ID:2,Active:!0},D:{X:81.3446045,Y:-196695328e-14,Z:99.9919739,ID:3,Active:!0},One:{X:93.317215,Y:-5960464e-14,Z:100.022911,ID:4,Active:!0},Two:{X:106.674713,Y:1847744e-12,Z:100.017967,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["無瑕靈君殲殛戰",{Name:"肥宅",MapID:667,A:{X:100.137268,Y:.0038394928,Z:81.16358,ID:0,Active:!0},B:{X:117.04,Y:.006846428,Z:100.089066,ID:1,Active:!0},C:{X:99.9696655,Y:.00439071655,Z:118.513931,ID:2,Active:!0},D:{X:82.58859,Y:.006201744,Z:99.69995,ID:3,Active:!0},One:{X:0,Y:0,Z:0,ID:4,Active:!1},Two:{X:0,Y:0,Z:0,ID:5,Active:!1},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["月讀幽夜殲滅戰",{Name:"月讀",MapID:538,A:{X:99.60663,Y:0,Z:82.8387451,ID:0,Active:!0},B:{X:117.821754,Y:0,Z:99.82191,ID:1,Active:!0},C:{X:100.040916,Y:-9536743e-13,Z:117.491928,ID:2,Active:!0},D:{X:82.4726257,Y:-9536743e-13,Z:99.78953,ID:3,Active:!0},One:{X:0,Y:0,Z:0,ID:4,Active:!1},Two:{X:0,Y:0,Z:0,ID:5,Active:!1}}],["朱雀詩魂戰",{Name:"朱雀",MapID:597,A:{X:100.426468,Y:0,Z:82.81605,ID:0,Active:!0},B:{X:118.567696,Y:190734863e-14,Z:99.98941,ID:1,Active:!0},C:{X:99.9193344,Y:-9536743e-13,Z:118.764473,ID:2,Active:!0},D:{X:81.94909,Y:190734863e-14,Z:99.9024048,ID:3,Active:!0},One:{X:99.96159,Y:0,Z:106.399796,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1}}],["青龍詩魂戰",{Name:"青龍",MapID:638,A:{X:100.356552,Y:-6700576e-12,Z:81.95613,ID:0,Active:!0},B:{X:119.661438,Y:-925636868e-15,Z:100.777023,ID:1,Active:!0},C:{X:100.057991,Y:-8440299e-12,Z:118.584145,ID:2,Active:!0},D:{X:80.47084,Y:-5249853e-11,Z:100.648651,ID:3,Active:!0},One:{X:99.91794,Y:-74129357e-13,Z:94.52867,ID:4,Active:!0},Two:{X:100.070107,Y:-8775128e-12,Z:104.833641,ID:5,Active:!0}}],["無盡寒夜",{Name:"任務目標(只能本地標點)",A:{X:124.824,Y:10.5,Z:-226.483,ID:0,Active:!0},B:{X:296.918,Y:10.799,Z:-397.124,ID:1,Active:!0}}],["終極之戰",`/p 分攤站位
/p MT H1 D1 D2左上
/p ST  H2 D3 D4 右下
/p 踩塔站位
/p  MT   D1
/p  ST    D2
/p  H1   D3 
/p  H2   D4
/p 三連點名基礎分散站位
/p D1 MT D2
/p H1  ○  ST　
/p D3  H2 D4
/p 三連點名最終站位
/p          核爆t
/p 大圈    ○   核爆d
/p          核爆n`,"子言評論區 @輔助不萌"+w("https://www.bilibili.com/video/BV1PU4y1e72C/?vd_source=583984e97858d637c7db9eb92b042c91")],["終極之戰",{Name:"小鳥",MapID:4130,A:{X:100,Y:0,Z:83,ID:0,Active:!0},B:{X:117,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:100,ID:2,Active:!0},D:{X:83,Y:0,Z:100,ID:3,Active:!0},One:{X:88,Y:0,Z:88,ID:4,Active:!0},Two:{X:112,Y:0,Z:88,ID:5,Active:!0},Three:{X:88,Y:0,Z:112,ID:6,Active:!0},Four:{X:112,Y:0,Z:112,ID:7,Active:!0}},"斜點角尖擊退點 @竹取輝夜姬"+w("https://nga.178.com/read.php?tid=33015568")],["異形樓閣佐特塔",`Boss1：三妹拉格
人趣毒菌：讀條對MT釋放的單體大傷害，附加13秒中毒Debuff，注意減傷，驅散和回覆。
人趣冰封：讀條釋放的射線狀AoE，在縫隙處迴避。
人趣爆炎：讀條釋放的環形AoE，靠近BOSS迴避。
人趣暴雷 ：讀條釋放的步進式圓形AoE，在縫隙處迴避。
人趣劇毒菌：讀條對正前方釋放的半場AoE，遠離BOSS正面迴避。
人趣火炎/冰結/閃雷：：讀條點名隨機非T玩家釋放的單體傷害，注意回覆。
德魯帕德：點名3位非T玩家分別釋放一次附加「火傷」「凍傷」「感電」的12秒DoT傷害，請注意回覆。
魔力操縱：冰封/暴雷/爆炎/劇毒菌：戰鬥後半BOSS會發射四種屬性的球，冰火雷毒，可以根據讀條來判斷球的屬性，球碰到場地內的發光點就會以發光點為起點釋放對應屬性的魔法攻擊(冰封/爆炎/暴雷/劇毒菌)，相當於BOSS製作了一個放技能的分身，我們正常處理即可。

Boss2：二姐多格
物創滅：讀條對MT釋放的單體大傷害，注意減傷和回覆。
身所達：讀條釋放的直線AoE，走位迴避。
人趣狂暴：讀條後場地會出現5個球。
起爆：讀條后剛剛出現的5個球會爆炸，我們需要提前前往沒球的角落迴避，沒躲開球爆炸的玩家會陷入7秒的狂暴Debuff，Debuff期間角色會變得無法控制，會自動靠近BOSS。
大愿成：讀條釋放以BOSS為圓心的圓形AoE，如果角色中了之前的人趣狂暴就會無法迴避。
人趣停止：讀條后我方會依次陷入5秒的停止Debuff，Debuff期間BOSS會依次對我方釋放直線AoE身所達，無法迴避，需要分散站位處理，避免傷害重疊。
人趣混亂：BOSS第二次釋放5個球的機制(人趣狂暴+起爆)時會先讀條使用人趣混亂把球偽裝成自己的樣子混淆視聽，此時我方隊友也會變成BOSS的樣子，球變成的BOSS幻影會擺出各種情感動作，我們靠近沒有做出任何動作的BOSS本體即可躲開球的爆炸。

Boss3：梅加斯三姐妹
輪迴：大姐馬格讀條釋放的全屏AoE，請注意回覆。當二姐拉格和三妹多格先於大姐馬格被擊殺時，此技能會復活另外兩體BOSS，所以我們必須先擊殺大姐馬格。
人趣閃耀：大姐馬格頻繁對MT釋放的無讀條單體傷害，請注意回覆。
物創滅：二姐多格讀條對MT釋放的單體大傷害，注意減傷和回覆。
身所達：二姐多格讀條釋放的直線AoE，走位迴避。
德魯帕德：三妹拉格讀條對3位非T玩家分別釋放一次附加「火傷」「凍傷」「感電」的12秒DoT傷害，請注意回覆。
人道火炎/冰結/閃雷：三妹拉格讀條點名隨機非T玩家釋放的單體傷害，注意回覆。
三角攻擊+人趣信仰+人趣反射：三體BOSS釋放的組合技，根據屬性有三種不同效果，可以根據BOSS的臺詞以及技能特效來判斷是哪種屬性。
1.冰屬性-三角冰封：2次距離衰減傷害和若干直線和射線AoE的組合，請遠離距離衰減傷害的落點以降低吃到的傷害，同時不停走位躲避即可。距離衰減傷害的落點必定第一次在12點，第二次在6點。
2.雷屬性-三角暴雷：若干可迴避的圓形AoE和直線AoE后，接一個圓形分攤傷害點名，在躲避AoE后要迅速集中站位進行分攤。
3.火屬性-三角爆炎：兩次環形AoE和若干直線AoE后，接一個需要分散的圓形點名傷害，最後記得散開即可。
注意：消滅三姐妹的大姐馬格(最胖的那位)后，BOSS們就無法使用組合技了，後續戰鬥則會變成和之前的兩場BOSS戰類似的模式，她們的技能也會變成前兩場BOSS戰時的配置。在擊殺大姐馬格后，二姐多格會釋放人趣狂暴，此時為三個狂暴球，安全點依舊為狂暴球之間的場邊。三體BOSS的推薦擊殺順序為：馬格→多格→拉格。`],["魔導神門巴別塔",`BOSS1 巴爾納伯
地面重擊：讀條對前方釋放的直線AoE，遠離正面迴避。
超電磁迴轉碎頸臂：BOSS讀條釋放週身圓形AoE，同時BOSS和我們身上會出現磁極，場外產生電流陷阱，同極相斥需要靠近BOSS，異極相吸需要遠離BOSS，不要被BOSS的週身圓形AoE打到或者被磁極彈到電流陷阱里。
超電磁地面重擊：BOSS走到場邊後會發動磁極和直線AoE的組合機制，直線AoE固定打中間，同時直線AoE和我們身上會出現磁極，我們和直線AoE的磁極相同就靠近，不同就遠離，不要讓自己的角色被吸到場中的直線AoE里或者被彈到外場的電流陷阱里。
高壓放電：讀條點名隨機1人釋放的圓形分攤傷害，集合分攤處理。
招雷：讀條後會令場內出現造成圓形爆炸的雷球，同時BOSS使用週身圓形AoE迴轉碎頸臂，我們同時遠離BOSS和雷球迴避。

BOSS2 盧格
火力壓制：讀條釋放的全屏傷害，注意回覆。
魔導飛彈：讀條釋放的圓形AoE，請走位迴避。
魔導鐳射：轉向隨機玩家釋放的直線鐳射攻擊，請遠離BOSS正面迴避。
水刑：讀條後場地內會被毒水充滿，我方全體會不停疊加窒息Debuff，積累8層窒息Debuff后我方就會被憋死，此時需要我們踩一下青蛙圖案的地磚，成功后就會變成青蛙，如此一來就不會被憋死了。在此期間BOSS會釋放3波圓形AoE魔導飛彈，需要走位迴避。注意變成青蛙的倒計時期間如果角色再次踩到青蛙地磚上就會解除青蛙狀態，有自信的話也可以自行縮短變青蛙的時間，比如在故意等窒息Debuff累計6~7層時去變成青蛙，然後再馬上變回來，如此操作就可以保證角色能在儘量多地攻擊BOSS的同時不會被憋死，但需要注意的是角色不變成青蛙時在水中的移動速度會變慢，在迴避魔導飛彈時需要更加小心。
魔導炸彈：讀條後場內會出現三個造成十字爆炸的炸彈，我們找縫隙迴避即可。訣竅是先找沒有炸彈的那一排，然後儘可能遠離炸彈即可。
魔導輪：讀條後場內會出現兩波全屏AoE，我們需要踩一下縮小圖案的地磚，成功后就會變小，這樣就可以躲開戰輪的攻擊了，注意期間如果角色再次踩縮小地磚也會變回來。

BOSS3 阿尼瑪
攻擊：頻繁對MT釋放的無讀條單體傷害，注意減傷和回覆。
異形之楔：讀條後後場地會出現若干楔子，楔子之間會連線並對框起來的區域造成AoE傷害，需要我們觀察場地四角，沒有楔子的角落就是安全區。
百萬重力：讀條釋放的全屏傷害，同時場地四角會出現黑洞，黑洞會連線我方，需要我們遠離連線自己的黑洞並將粉刺連線拉成黃色連線，成功后就不會被黑洞傷到了。
祖國之父：讀條釋放的直線AoE，走位迴避。
無際痛苦：讀條後會將我方強制吸到場地中間，同時場中會產生持續判定的圓形AoE，並且AoE區域還會擴大，我們直接往四角跑來處理，治療要及時回覆。
英白拉多：讀條後會將我們拉到它自己的空間內，我們需要和它的下半部分戰鬥。此時會進入輸出檢測環節，我們需要在螢幕上出現的計量表到達100前將其血量清空，否則會強制團滅。
忘卻之爪：同一種讀條，有兩種攻擊模式。
1.BOSS在場地兩邊以先後順序放置兩波爪子，爪子會對所在的橫排造成直線AoE，我們先去後出現的那波爪子所在的橫排待機，等第一波爪子判定後去空地即可。
2.BOSS點名隨機2人釋放跟蹤型圓形AoE，請被點名者不停跑動迴避。
混沌次元：在計量表累計滿或BOSS下半身的血量清零后，它就會釋放這招造成全屏傷害，只要計量表不到100我們就不會被秒殺，治療注意回覆即可。此時我們再次回到一開始的戰鬥場地，直到戰鬥結束。
痛苦噴發：讀條點名我方全體釋放的圓形AoE，請分散處理。`],["佐迪亞克殲滅戰",`P1
悲痛：讀條讓我方全體HP歸1，治療迅速回復。
外紋：BOSS讀條在場邊製造紋章，分為2種攻擊型別。
1.紫色的三角紋章代表即將對場中釋放扇形AoE神秘切割，我們需要靠近該紋章的兩側來躲避。
2.紅色的方塊紋章代表即將對場中釋放半場範圍的矩形AoE神秘二分，我們需要遠離該紋章所在的半場來躲避
悲傷：讀條對MT釋放的高傷害圓形AoE，請MT出人群開減傷處理。
範式：讀條后，BOSS會在場內將魔物的概念實體化，分為2種攻擊型別。
1.當出現四足猛獸貝希摩斯時，代表會造成圓形AoE，我們去空地躲避。
2.當出現蛇狀魔物巨蟒時，代表會造成直線AoE，需要我們離開蛇所在的那一排來回避。
冥火：讀條釋放的3連圓形AoE，走位迴避。
仇恨：讀條點名隨機玩家釋放需要分攤的多段圓形AoE，集合分攤，注意回覆。
完全控制：演出技能，進入P2。

P2
範式+星極超流：P2 BOSS會召喚貝希摩斯或巨蟒，接著讀條星極超流將場地連同AoE範圍一起按照場邊箭頭的方向旋轉90度，這裡需要一點空間想像力，我們要提前判斷出旋轉后的安全區來回避，在場地旋轉期間我們是無法移動的，我們必須在BOSS的星極超流讀條結束前就到達安全區。
不義：讀條用雙拳砸地造成圓形AoE，去12點或6點回避。
痛苦：BOSS隨機飛到左上角或右上角讀條對正前方釋放的矩形衝擊波，附帶擊退效果，我們跑去另一組對角迴避。
三重神秘光線：BOSS會以先後順序製造2波綠色紋章發射直線鐳射，我們先去後出現的紋章前待機，等第1波紋章的傷害判定后，去空地迴避。
星蝕：讀條后BOSS會固定沿逆時針飛行一週，途中會在三邊方向以先後順序各產生一組星星圖樣(先後順序固定為9點邊→6點邊→3點邊)，等BOSS繞圈結束后，三組圖樣會根據產生順序依次扣在場地上造成對應圖案的圓形AoE，我們連續走位迴避。這裡請把每組圖案都當成一個印章，想像一下這個印章扣在場地上的樣子。第一組圖案出現后先彆著急轉視角，先去第一組圖案的安全區，然後再看第二組圖案和第三組圖案，在心裡默唸后兩組圖案的安全區，等第一組流星落下後，立刻去剛剛默唸的后兩組安全區迴避。`],["末日樹海萬相森國",`BOSS1 終末的掠奪
絕望的叫聲：讀條釋放的全屏傷害，請注意回覆。
空口白話：BOSS讀條後會在場地內產生若干嘴巴，張開的嘴會釋放圓形AoE，閉合的嘴巴則什麼都不會做，所以我們只要靠近閉合的嘴巴就安全了。
哀訴：讀條對MT釋放的單體大傷害，請注意減傷和回覆。
污穢的左手/右手：BOSS讀條對左側或右側釋放的半場AoE，需要我們根據讀條進行判斷，然後前往安全的半場迴避。
恍惚的叫聲：BOSS讀條後會賦予我方全體14秒的精神失常DeBuff，效果期間我方角色頭上會出現旋轉的手指圖示，此時我方無法自由行進，當按下任意方向的位移鍵時都只能朝著此時頭頂的手指圖示所指向的方向前進，鬆開按鍵時可以停止移動。該技能會和空口白話組合使用，我們需要在精神失常的狀態下來到閉合的嘴巴處，比較推薦的處理方式是不停按移動鍵來試錯，直到選到了自己想要的方向為止，在Debuff消失後距嘴巴的傷害判定前大約還有1秒多的時間來調整自己的位置。
嗚咽：BOSS點名我方全體釋放的圓形AoE，分散處理。

BOSS2 終末的破壞
絕望中的狂亂：讀條釋放的全屏傷害，同時場外出現火焰陷阱區。
水牢彈：BOSS讀條後場邊會出現若干水球，角色靠近水球后會被吸入，不要隨便靠近。
屬性吸收：BOSS讀條隨機吸收場外的水或火，請把屬性記在心裡。
屬性放出：根據BOSS吸入的屬性不同有兩種攻擊效果：
1.水屬性，BOSS釋放以場中為起點的全屏擊退攻擊，請靠近場中，並且調整角度讓角色不會被擊退到水球里。
2.火屬性，BOSS釋放全屏傷害，請主動靠近水球被水球吸入，以大幅降低角色受到的火焰傷害。
極盡破壞：讀條對MT釋放的單體大傷害，注意減傷和回覆。
毒液塊：讀條點名隨機1人釋放的圓形分攤傷害，集合分攤處理。

BOSS3 斯伐婆奴
絕望之炎：讀條釋放的全屏傷害，請注意回覆。
地脈失控：讀條後場地會被劃分成標著兩種圖案的區域，三角和圓形，同時我們的螢幕上會隨機出現一個大三角或大圓，這代表著BOSS即將對和螢幕上的圖案相同的地板發動攻擊，我們去和螢幕上的圖案不同的地板上即可安全迴避。
召喚流星：同一種讀條，分為三種攻擊模式。
1.BOSS點名我方全員釋放的圓形AoE，分散處理。
2.BOSS釋放以場地中心為起點的全屏擊退攻擊，會和地脈失控組合使用，需要我們調整位置主動被擊退到安全的地板處理，或者直接站在安全的地板開防擊退處理。
3.BOSS飛上天在自己身邊生出三組隕石，需要我們調整視角進行觀察，每組隕石只會有3顆並且只會呈橫向排列，隕石的攻擊範圍對應場地的4排方格，由於場地方格有3格，且每組隕石都只有3顆，則每組隕石都有一個空位，空位所對應的那排方格就是安全的，我們需要迅速來到那裡進行迴避。隕石一共有三波，同時場內還會有黃圈AoE進行干擾，需要我們同時躲避這些攻擊。
啃咬：讀條對T釋放的單體大傷害，注意減傷和回覆。`],["創造環境極北造物院",`BOSS1 呂薩
鐵顱猛擊：讀條對MT釋放的單體大傷害，注意減傷和回覆。
寒霜尋影：BOSS讀條後會消失，場地內會出現BOSS的腳印軌跡，BOSS會在腳印的終點處跳出並攻擊內場造成AoE傷害，我們跟著腳印來到終點的場邊處即可安全迴避。
召喚冰柱：BOSS讀條召喚冰柱釋放米字型或三角形的直線AoE，走位迴避。
嚴寒踏壓：讀條釋放的全屏傷害，請注意回覆。
重揮碎擊：讀條點名隨機玩家釋放的需要分攤的圓形傷害，請集合分攤，注意回覆。

BOSS2 拉冬之王
抓擊：讀條對MT釋放的單體大傷害，注意減傷和回覆。
吸氣+燃燒吐息：BOSS讀條後會用三顆頭中的一顆或兩顆吸入以太，吸入以太的頭會發光，隨後BOSS讀條燃燒吐息讓吸入以太的頭釋放扇形AoE，左側頭打左邊，右側頭打右邊，中間頭打前邊，請走位迴避。比如中間的頭髮光了，那我們就遠離BOSS的前方就行了。
燃燒晶球：讀條召喚若干火球造成直線AoE，請尋找縫隙迴避。
恐嚇：讀條釋放的全屏傷害，請注意回覆。
燃燒爆發：讀條點名隨機玩家釋放的需要分攤的圓形傷害，請集合分攤，注意回覆。

BOSS3 赫爾墨斯
三重偉大：讀條釋放的全屏傷害，請注意回覆，同時場地外周變成陷阱區。
赫爾墨斯文集：BOSS讀條在外場製造矩形魔法陣釋放直線AoE，分為兩種攻擊模式。
1.四邊出現大型魔法陣，四角安全。
2.四角出現小型魔法陣，場中安全。
純正龍捲：讀條對MT釋放的大傷害圓形AoE，注意減傷和麵向。
隕石流星+赫爾墨斯文集：BOSS讀條在外場釋放4枚隕石造成距離衰減傷害，請來到場中站位降低受到的傷害，4枚隕石落地後會有3顆發光，1顆不發光。接著BOSS讀條雙重和赫爾墨斯文集製造2波全屏AoE，發光的隕石只能幫我們抵擋1次傷害，不光的隕石能幫我們抵擋2次傷害，所以我們必須來到沒發光的隕石背後連續迴避這2波全屏AoE。
雙重+純正疾風：BOSS讀條後會點名全體釋放不可迴避的直線AoE，請分散站位處理，AoE生效後會生出第二段可以迴避的傷害，請走位迴避。
純正勇氣：BOSS讀條強化自身攻擊，請T使用「插言」打斷此技能。
四重+赫爾墨斯文集：BOSS讀條后在外場製造4個矩形魔法陣連續釋放4波半場AoE，我們需要根據連線啟用魔法陣的順序依次迴避四次。
純正烈風：讀條點名全員釋放的圓形AoE，分散站位處理。
雙重+純正龍捲：讀條對MT釋放的大傷害圓形AoE，注意減傷和麵向。隨後MT腳下會出現二段圓形AoE傷害，請MT走位迴避。`],["星海深幽尋因星晶鏡",`BOSS1 迷執愛戀的莉維亞
挫敗：讀條釋放的全屏傷害，請注意回覆。
典雅女神槍：讀條對MT釋放的大傷害AoE，請注意減傷和麵向。
典雅女神連槍：BOSS讀條對發光觸手所在的方向釋放的扇形AoE，請來到不發光的觸手所在的方向迴避。
恨且愛：讀條釋放的圓形AoE，請走位迴避。
恨之火：無讀條點名隨機玩家釋放的需要分攤的圓形傷害，請集合分攤，注意回覆。
蔑視：BOSS轉向隨機玩家讀條釋放的扇形AoE，請走位迴避。
典雅女神射擊：BOSS讀條發射子彈釋放的米字型AoE，子彈的直線傷害會原地判定兩次，需要注意不要被第二次判定打到，子彈之間的縫隙處就是安全區。此技能會和典雅女神連槍組合使用，需要找到能同時躲避這兩個技能的安全區迴避。

BOSS2 強執忠義的里塔提恩
冥獄衝擊：讀條釋放的全屏傷害，請注意回覆。
冥獄火花：讀條釋放的直線傷害，請走位迴避。
榴散彈： 讀條對隨機一組對角方向釋放若干圓形AoE轟炸，我們來到另一組對角方向迴避即可。
冥獄鐵砧：讀條對MT釋放的單體大傷害，注意減傷和回覆。
布旗+盾牌穿刺：BOSS強制跑到場邊，讀條後會將戰鬥場地改造成長方形，隨後BOSS會全屏高傷害AoE盾牌穿刺，此時場地內會出現4個水晶，每個水晶上面都有一個耐久度提示槽，其中會有2個水晶的耐久度下降得最快且水晶的顏色會逐漸變黑，不久后這2枚水晶就會破碎並形成一個缺口，我們只要躲進這個缺口就能躲避掉BOSS的全屏攻擊。該技能會和榴散彈組合使用，此時榴散彈的攻擊範圍會覆蓋其中一個安全區，我們去另一個安全區即可。

BOSS3 邪執外道的亞蒙
暗強音：讀條對MT釋放的單體大傷害，注意減傷和回覆。
強音暴雷：BOSS讀條釋放以場中為源點的距離衰減傷害，請先前往場邊以降低受到的傷害。接著場地會被分割成8塊，每一塊都會有雷光不停貼近場邊，當雷光到達場邊后就會對該1/8區域造成AoE傷害，我們先去雷光較為靠近場中的區域待機，等雷光較為靠近場邊的區域傷害判定后，去傷害已經判斷過的空地迴避。
正旋舞歌+回舞歌：BOSS讀條製造圓形魔法陣，隨後BOSS讀條回舞歌讓魔法陣浮空，浮空的魔法陣會對著其前後方向釋放直線鐳射，請來到魔法陣側面迴避。戰鬥後半會讓魔法陣的數量變成2個。
左/右側強音爆炎：BOSS讀條對隨機左側或右側半場釋放的AoE攻擊，請根據讀條判斷安全區進行迴避。
間歇：讀條釋放的全屏傷害，注意回覆。
強音噴發：圓形AoE，請走位迴避。
謝幕的瘋狂：BOSS讀條釋放的全屏秒殺傷害，請躲在希瓦製造的冰柱後面迴避。`],["海德林殲滅戰",`P1
職責更換：BOSS會切換自己手裡的武器發動沒有範圍提示的攻擊，共三種類型。
1.當BOSS切換成法杖，週身浮現出綠色法杖紋章時，說明馬上會釋放近身圓形AoE至高神聖，我們需要迅速遠離BOSS來回避。
2.當BOSS切換成環刃，週身浮現出紅色環刃紋章時，說明馬上會釋放環形AoE反假日，我們需要迅速靠近BOSS來回避。
3.當BOSS切換成單手劍，週身浮現出藍色長劍紋章時，說明馬上會釋放十字AoE晝夜二分，我們需要來到BOSS的四角方向迴避。
魔法師的光輝：讀條釋放的全屏傷害，注意回覆。
演藝家的蔑視：讀條對MT釋放的需要雙T分攤的圓形AoE，請雙T去BOSS面前開減傷分攤，注意回覆。
守護者的光輝：讀條釋放的全屏傷害，注意回覆。
守護者的斬斷：讀條對MT釋放的高傷害扇形AoE，注意減傷和麵向。

P2
光之水晶：P2 BOSS會進入無敵狀態，場地內會出現6顆光之水晶，我們必須儘快打破全部的水晶，如果計量表到達了100就會被秒殺。
海德林光線：BOSS會生出分身釋放直線形狀的距離衰減傷害，請儘量遠離發光的直線以降低吃到的傷害。
水晶冰封：點名全員釋放的圓形AoE，分散處理。
水晶壘石：點名隨機玩家釋放的分攤傷害，集合分攤處理。
眾生離絕：擊破所有水晶后BOSS會釋放全屏AoE「離鄉遠行」，如果此時計量表到達了100就會被秒殺。

P3
結晶：讀條后BOSS身邊會浮現特效，分為兩種攻擊模式。
1.當出現冰晶特效時說明10秒后即將發動需要分散的圓形AoE點名水晶冰封。
2.當出現土塊特效說明10秒后即將點名需要分攤的圓形AoE水晶壘石。
幻日環+幻閃光：BOSS讀條幻日環後場內會出現發光的線條並造成圓形AoE幻閃光，我們去沒線的空地迴避。
幻日+映幻日：BOSS讀條幻日後，會依次對三個方向射出三組環刃，我們直接去第三組環刃的對側方向集合站位。不久后BOSS會讀條映幻日讓三組環刃遠路飛回，我們需要看好第一組範圍提示在我們左側還是右側，等第一組環刃飛回后，我們直接三穿一去空地迴避即可。

P4
明輝光環：讀條釋放的全屏高傷害，注意減傷和回覆。
光波：讀條后外場會出現4個波浪，波浪會沿直線前進造成傷害，請迅速環顧場地四周尋找4個波浪之間最大的那個縫隙迴避。
回聲：讀條點名隨機玩家釋放需要分攤的5連圓形AoE，集合分攤，注意回覆。`],["最終幻想末世終跡",`BOSS1 變異的格雷布洛弗
腐爛毒素飛散：BOSS讀條釋放的全屏傷害，同時場內出現若干毒球。此時場地會吹風，毒球會被風吹的方向吹出步進式圓形AoE，請先靠近風吹來的方向，然後尋找毒球的空隙躲避。如果角色中招就會被附加12秒的「致死腐爛毒素」Debuff，如果治療不驅散的話倒計時結束時該角色就會死亡。
咳出：讀條後生出3波圓形AoE，走位迴避。最後會點名全員釋放名為孤獨的預感的Debuff，在Debuff倒計時結束前需要我方集合站位處理，如果不集合站位就會陷入恐慌狀態，角色會不受控制地滿地亂走。
痘瘡之拳：讀條對MT釋放的單體大傷害，注意減傷和回覆。
腐水塊：讀條點名隨機玩家釋放的需要分攤的圓形傷害，請集合分攤，注意回覆。
膿液彈：讀條點名全員釋放的圓形AoE，請分散站位處理。
疾病激流：條釋放的環形AoE，請靠近迴避。如果角色中招就會被附加12秒的「致死腐爛毒素」Debuff，如果治療不驅散的話倒計時結束時該角色就會死亡。

BOSS2 和平捍衛者
燒卻光線：讀條釋放的全屏傷害，注意回覆。
超電磁放射：讀條釋放的週身圓形傷害，請遠離迴避，同時BOSS腳下變成危險區域，不要踩進去。
攻擊命令：讀條讓浮游炮發射直線鐳射，請站在浮游炮之間迴避。同時BOSS點名我方全體釋放圓形AoE，需要分散處理。
未來不再：讀條釋放的多重圓形AoE轟炸，請不停尋找縫隙走位迴避。同時BOSS點名我方全體釋放圓形AoE，最後需要分散處理。
和平炮：讀條釋放沿外場不停順時針旋轉的圓形AoE，請在AoE的縫隙處跟著旋轉方向移動進行迴避。
大噴射：讀條釋放大範圍轟炸，同時BOSS會釋放以自己為中心的全屏擊退傷害，請讓角色靠近BOSS被擊退到安全區，或者直接站在安全區里開防擊退處理。
對人光線：讀條對MT釋放的大傷害直線AoE，注意減傷和回覆。

BOSS3 拉啦
慈光：讀條釋放的全屏傷害，注意回覆。
慈悲：讀條對MT釋放的單體大傷害，注意減傷和回覆。
躍動：讀條后BOSS會依次釋放5個大圓AoE，請來到第2個或第3個之後出現大圓處，等第1個大圓判定后直接走到空地躲避。
生息：讀條對前方釋放的直線AoE，遠離正面迴避。直線AoE判定後場內出現若干蝴蝶，蝴蝶會對著其正前方釋放直線AoE，此傷害附加10秒的死亡宣告Debuff，請來到蝴蝶背後迴避，如果角色中了死亡宣告10秒后就會死亡，治療可以通過奶滿該角色來解除死亡宣告。
博愛：讀條點名隨機玩家釋放的需要分攤的圓形傷害，集合分攤，注意回覆。
安寧之翼：讀條點名全員釋放的圓形AoE，分散站位處理。
慈愛之翼：讀條對發光翅膀所在的半場釋放的AoE，請來到不發光的翅膀所在的半場迴避。`],["終結之戰",`P1
哀歌：讀條後會先造成1次全屏傷害，然後場外會出現兩個逆時針轉動的星球，一快一慢，球的重新整理位置固定為左上、右上、左下、右下這4個點，並且兩個球一開始固定呈對角分佈。快球會固定轉動270度，慢球會固定轉動90度，最終兩個球會在終點相撞造成大範圍圓形AoE，需要我們提前判斷出相撞點來回避。口訣「快左慢右」，我們只關注一開始重新整理在上半場的球，並且將我們自己的移動範圍也只限定在上半場。等上半場的球出現后，我們立刻觀察其速度，判斷出它是快球還是慢球，以快球為例，那麼根據口訣「快左慢右」，我們去左上角就能安全迴避，以慢球為例，那麼根據口訣「快左慢右」，我們去右上角就能安全迴避。
銀河：讀條釋放的全屏擊退，靠近場中處理，或者開防擊退。
反詰：讀條釋放的矩形AoE，分為兩種模式。
1.BOSS嘴部發光時代表對中間釋放的直線攻擊，我們去兩側迴避。
2.BOSS流淚時代表對兩側釋放的直線攻擊，我們去中間迴避。
死亡擁抱+藥毒：讀條點名全員釋放的射線AoE，分散站位處理，隨後場地落下多幹羽毛，羽毛會產生圓形AoE，遠離迴避。
流溢：讀條召喚若干分身釋放直線AoE，站在分身之間迴避。
傲慢：讀條對雙T釋放的高傷害圓形AoE，雙T出人群開減傷處理。
哀歌：記錄事件+宿命：讀條後會先造成1次全屏傷害，然後場外會出現兩個順時針轉動的星球，一快一慢，最終相撞造成AoE，我們根據口訣「快左慢右」迴避，在相撞產生的AoE判定后，BOSS會回溯時間，接著讀條宿命與行星的碎片連線，讓AoE在原地再判定一次，我們也在原地遠離碎片即可。
恍惚：讀條後場內會出現若干分身釋放不斷擴大的圓形黑泥AoE，必須來到場邊空地的邊緣迴避。
星際穿越+復仇：讀條后BOSS會上天發動直線俯衝，同時點名4人釋放圓形AoE，我們去兩側迴避俯衝，同時分散站位不要讓傷害重疊即可。

P2
惡靈魔：BOSS進入無敵狀態，需要儘快擊殺BOSS分裂出的惡靈魔，如果計量表積累到100還沒有完成擊殺的話就會被強制滅團。
隕石輻射點：讀條後會有若干行星對連線位置造成圓形AoE，需要我們遠離連線的區域來回避。
隕石爆發：讀條釋放的圓形AoE點名，分散處理。
災崇：讀條釋放全屏形AoE，注意回覆。
終極命運：擊殺惡靈魔后BOSS會釋放終極命運秒殺我方，此時我方的LB槽也會直接蓄滿，需要由T職等螢幕上出現5秒倒計提示時開啟三段LB進行減傷，成功后我們才能存活下來。

P3
終末：讀條釋放全屏形AoE，注意回覆。
終末狂熱：讀條釋放的全屏AoE 5連擊，注意減傷和回覆，第5下判定後會出現3連圓形AoE，建議在中間集合誘導然後再走位迴避。`],["伊甸零式希望樂園 覺醒之章1",`/p 《三角攻擊》 　　 ¦　 《8人光球》
        /p D3　　　　　 D4　 ¦　D3　MT　 D4
        /p 　 ST　　 　MT　　 ¦
        /p 　　　　◎　　　　　 ¦　ST　 ◎ 　D2
        /p 　 D1　　　D2　　 ¦
        /p H1　　　　　 H2　 ¦　H1　D1 　H2
        /p 　 《2人分攤》 　 ¦　《旋轉光球引導》
        /p ST/D3　　 MT/D4　 ¦　　　　 D4
        /p 　　　 ◎　　　　　 ¦　　H1　◎　H2
        /p H1/D1　　H2/D2　 ¦　　　　 D3
        /p 《十字陷阱》D1南 D2東 D3西 D4北
        /p 《8人光球》遠端治療外側誘導
        /p 《小怪》西MT 東ST　※ST側優先打`],["伊甸零式希望樂園 覺醒之章2",`/p 　 《八方散開》 　 ¦ 　《踩光柱》
        /p 　 　　MT　 ¦ 　D3　　D4
        /p 　　D3　 D4 ¦ 　　　MT
        /p 　ST 　 ◎ D2　 ¦ 　ST ◎ D2
        /p 　　H1　 H2 　 ¦ 　　 D1
        /p 　 　 　D1　 　　 ¦ 　H1　　H2
        /p 　 《黑白配》　 ¦ 《核爆》
        /p MT/D4 ¦ T
        /p ST/D3 ◎ H2/D2 ¦　　 ◎
        /p H1/D1 ¦ 　D　　　 H`],["伊甸零式希望樂園 覺醒之章3",`/p 《分散》 | 《暴風雨運動會》
    /p MT ST | 左上集合沿著Boss圈放置
    /p D1 D2 | 《覺醒大海嘯》
    /p D3 D4 | 左：治療、強壓D、MT
    /p H1 H2 | 右：其他DPS、ST
    /p 靈泉處理順序：治療->近->治療->遠`],["伊甸零式希望樂園 覺醒之章4",`/p -------------------------↓P1↓-------------------------
    /p 【三連踩】MT無敵→ST無敵
    /p 【分散散開】
    /p 《起始階段》 | 《車階段》
    /p D3　ST　MT　D4 | D3 MT D4
    /p 　 D1 D2 | ST ◎ D2
    /p H1 H2 | H1 D1 H2
    /p 【變形階段】
    /p 　　分攤：Boss最近一格
    /p 　　分散：Boss從近到遠 D→T→H
    /p 　　停車：目前一仇停車
    /p 【隕石階段】
    /p 隕石： 西→東/TH:北/DPS:南
    /p 躲雷： 三穿一/二穿一（協商調整）`,"P1"],["伊甸零式希望樂園 覺醒之章4",`/p -------------------------↓P2↓-------------------------
  /p 【大地雙拳】死刑：MT西 / ST:西北角落
  /p 　　　　　　藍標：東北
  /p 【高低地】
  /p 　■第1次：DPS北/TH南
  /p 　■第2次：分攤北 / 其他南
  /p 【石牢】H1南 / H2北
  /p 【長方形地板】
  /p 　攤 D　　　　　　　　　　
  /p 　 T H 攤 D□□　　　
  /p 　□□　　T H □藍　　　
  /p 　□藍`,"P2"],["伊甸零式希望樂園 共鳴之章1",`/p ■雷雲和雷暴　　　　　　¦■撞柱
      /p 　　Ｄ３　　　　Ｄ４　　 ¦  BOSS
      /p 　　　ＭＴ　　ＳＴ　　　 ¦　D1
      /p 　　　　　 ●　　　　 　  ¦　D2
      /p 　　　Ｄ１　　Ｄ２　　　 ¦   坦克
      /p 　　Ｈ１　　　　Ｈ２　　 ¦　D3
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- ¦　D4
      /p ■鏈雷遠端傳　　　　　　¦　H1
      /p 　　　MT  　ＳＴ　　　　¦　H2
      /p 　　　　　●　　　　　　¦■T擋衝鋒
      /p 　　　Ｄ１　  D２　　　　¦　MT＞ST
      /p  　Ｄ３Ｈ１　  Ｈ２Ｄ４    　¦
      /p ■奶>遠>近>奶　　　　 　¦`],["伊甸零式希望樂園 共鳴之章2",`/p ■基本站位
      /p 　MT/D3　　ST/D4
      /p 　H1/D1　　H2/D2
      /p ■火接線　遠端雙H 
      /p ■雙體　　左：STH1D3D4 / 右：MTH2D1D2
      /p ■切割　　死刑１點 　　※切割左/上集合
      /p ■火龍捲(同向式)TH→西、DPS→東
      /p            MT/H
      /p 　D1D3　D2D4
      /p             ST/H　　　※同側D3D2換
      /p ■合體接線
      /p 　先H1MTSTH2 / 后D3D1D2D4
      /p 　※四角分攤后TH不動，D順時針移動45度 `,"6s宏-坦遠同向"],["伊甸零式希望樂園 共鳴之章2",`/p ┌【雙人分攤及扇形】┬【火神業火拳接線】┐
      /p │││第一次遠端雙　│
      /p │││第二次點名遠端　│
      /p ├─────────┼─────────┤
      /p ├【雙體階段分組】─┼【火龍捲：同向式】┤
      /p │││　　連線　　│
      /p │││││
      /p │在標點處理死刑│　　連線　　│
      /p │場地切割左或上集合│同側雙圈換│
      /p ├─────────┼─────────┤
      /p ├【合體業火拳引導】┼【分攤後接業火拳】┤
      /p │先│四角分攤后不動│
      /p │后│順時針移動度│
      /p └─────────┴─────────┘`,"子言6s宏-坦遠同向"],["伊甸零式希望樂園 共鳴之章2",`/p ■基本站位
      /p 　MT/D1　　ST/D2
      /p 　H1/D3　　H2/D4
      /p ■火接線　遠端雙H 
      /p ■雙體　　左：STH1D3D4 / 右：MTH2D1D2
      /p ■切割　　死刑１點 　　※切割左/上集合
      /p ■火龍捲(徘徊式)TH→西、DPS→東
      /p            MT/H
      /p 　D1D3　D2D4
      /p             ST/H　　　※同側D3D2換
      /p ■合體接線
      /p 　先H1MTSTH2 / 后D3D1D2D4
      /p 　※四角分攤后TH不動，D順時針移動45度`,"6s宏-坦近徘徊"],["伊甸零式希望樂園 共鳴之章2",`/p ┌【雙人分攤及扇形】┬【火神業火拳接線】┐
      /p │││第一次遠端雙　│
      /p │││第二次點名遠端　│
      /p ├─────────┼─────────┤
      /p ├【雙體階段分組】─┼【火龍捲：徘徊式】┤
      /p │││　　連線　　│
      /p │││││
      /p │在標點處理死刑│　　連線　　│
      /p │場地切割左或上集合│同側雙圈換│
      /p ├─────────┼─────────┤
      /p ├【合體業火拳引導】┼【分攤後接業火拳】┤
      /p │先│四角分攤后不動│
      /p │后│順時針移動度│
      /p └─────────┴─────────┘`,"子言6s宏-坦近徘徊"],["伊甸零式希望樂園 共鳴之章3",`/p ■基本/小怪/夜襲　¦■極夜機動
      /p 　　　●　　　　　¦　　　　ＭＴ
      /p 　MT　　S T　　　¦　　　　ＳＴ
      /p 　D1　　D2　　　¦　　　DPS分攤
      /p 　D3　　D4　　　¦　　　　Ｈ１
      /p 　H1　　H2　　　¦　　　　Ｈ２
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      /p ■中央左右分攤　　¦■包圍號令　※近戰同色D2D3互換
      /p 　ＭＴ　ＳＴ　　　 ¦　北/東：Ｔ　　　   南/西：H
      /p 　Ｈ１　Ｈ２ 　　　¦　　  北：D1D2 　　　南：D3D4
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      /p ■夜襲號令（集合式）
      /p ■亂舞號令  (吃球：H>D1>D2>D3>D4)
      /p 　吹飛:東北　東北:暗　西北:光　南:T`,"7s宏-集合式"],["伊甸零式希望樂園 共鳴之章3",`/p ┌─球連線傳送─┬─傳送門─┬極夜機動┐
      /p │　　　│紅動　藍停│　　│
      /p ├─┬────┬─┼白夜機動┤　　│
      /p │４│　　　　│１ │　││
      /p │３││２ │　││
      /p │　││　│　│　　│
      /p ├─┴────┴─┤　│　　│
      /p ├─包圍號令─┬─┴──┬──┴────┤
      /p │　　●　　　├夜襲號令┼─鴿龍捲站位─┤
      /p │　　　│集合式│　　  │　　  　│
      /p │　　　　●│左下右上│白色／＼黑色　│
      /p │●　　　　│紅動藍停│　／　　＼　　│ 
      /p │　　　│左側放圈│／　坦克　＼　│ 
      /p │　　　●　　└────┼─撞球優先順序─┤
      /p └近戰同色交換踩塔┴》小》大┘`,"子言7s宏-集合式"],["伊甸零式希望樂園 共鳴之章3",`/p ■基本/小怪/夜襲　¦■極夜機動
      /p 　　　●　　　　　¦　　　　ＭＴ
      /p 　MT　　S T　　　¦　　　　ＳＴ
      /p 　D1　　D2　　　¦　　　DPS分攤
      /p 　D3　　D4　　　¦　　　　Ｈ１
      /p 　H1　　H2　　　¦　　　　Ｈ２
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      /p ■中央左右分攤　　¦■包圍號令　※近戰同色D2D3互換
      /p 　ＭＴ　ＳＴ　　　 ¦　北/東：Ｔ　　　   南/西：H
      /p 　Ｈ１　Ｈ２ 　　　¦　　  北：D1D2 　　　南：D3D4
      /p -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      /p ■夜襲號令（分散式）
      /p ■亂舞號令（吃球：H>D1>D2>D3>D4)
      /p 　吹飛:東北　東北:暗　西北:光　南:T`,"7s宏-分散式"],["伊甸零式希望樂園 共鳴之章3",`/p ┌─球連線傳送─┬─傳送門─┬極夜機動┐
      /p │　　　│紅動　藍停│　　│
      /p ├─┬────┬─┼白夜機動┤　　│
      /p │４│　　　　│１ │　││
      /p │３││２ │　││
      /p │　││　│　│　　│
      /p ├─┴────┴─┤　│　　│
      /p ├─包圍號令─┬─┴──┬──┴────┤
      /p │　　●　　　├夜襲號令┼─鴿龍捲站位─┤
      /p │　　　│分散式│　　  │　　  　│
      /p │　　　　●│左下右上│白色／＼黑色　│
      /p │●　　　　│紅動藍停│　／　　＼　　│ 
      /p │　　　│內側放圈│／　坦克　＼　│ 
      /p │　　　●　　└────┼─撞球優先順序─┤`,"子言7s宏-分散式"],["伊甸零式希望樂園 共鳴之章4",`/p 《菓子系列》E8S專用宏
      /p —————————————————————
      /p ◆鑽石星塵/光之失控
      /p —————————————————————
      /p T　　 　　　H｜驅散：H1=T、H2=H
      /p D1 D2 D3 D4｜三角：T西北、H東南
      /p —————————————————————
      /p 正方形連線：左D與T換位
      /p 沙漏形連線：左D與H換位
      /p —————————————————————
      /p ◆鋼鐵月環"X"型 ｜◆鋼鐵月環"十"型
      /p —————————————————————
      /p MT/D3　ST/D4 ｜　 　　MT/D3
      /p 　　 　　　 　 　 ｜H1/D1　　　ST/D4
      /p H1/D1　H2/D2｜　 　　H2/D2`,"果子E8S宏前半"],["伊甸零式希望樂園 共鳴之章4",`/p —————————————————————
      /p ◆預設分組
      /p 左：MT H1 D1 D3、右：ST H2 D2 D4
      /p —————————————————————
      /p ◆小怪階段
      /p 截線：H→T→遠→近
      /p 沉默：左邊遠→T、右邊T兩次
      /p —————————————————————
      /p ◆冰光龍詩
      /p —————————————————————
      /p D3　 MT 　D4 ｜ H1驅散DPS↓
      /p 　 H1 ▼ H2 　 ｜
      /p D1 　 ST 　 D2 ｜ H2驅散DPS↑
      /p —————————————————————
      /p ◆紅藍調整：D2D3換位`,"果子E8S宏後半"],["伊甸零式希望樂園 再生之章1",`/p ===========9s==============
      /p 【暗之戰技：散開】【暗之戰技：分攤】
      /p D3　 MT　D4　 ｜ 　 　 MTD3
      /p H1 　 ■ 　 H2　 ｜H1D1 　 　D4H2
      /p D1 　 ST 　D2　｜ 　 　 STD2
      /p 　　　【廣角：高射】
      /p ←左 MTD1D3H1　STD2D4H2 右→
      /p ------十字荊棘AOE-------------波動球(踩塔)-----
      /p ｜        MT  D2            ｜ D3           H2
      /p ｜H1        　       D4   ｜ 　D1    ST
      /p ｜H2       　        D3   ｜ 　D2    MT
      /p ｜         ST  D1            ｜ D4             H1
      /p ●放下荊棘後向踩塔方向散開
      /p ●暗之浸蝕 1MT無敵　2ST無敵　3換T　4MT無敵
      /p 【暗黑天空】　|　【云十字站位】
      /p 　　　|　　　 D3
      /p 　MTD3D2 　 |　　　 MT
      /p 　H1 ■ H2 　 | H1D1 ■ D2H2
      /p 　D1 D4ST 　 |　 　　 ST
      /p 　　　|　 　　D4
      /p 【暗黑天空中暗之戰技】
      /p 　　　D3　｜　 D3
      /p 　 MT D2　｜　 H1MT
      /p H1D1 ■ 　｜　 ■ D2 H2
      /p 　 ST H2　｜　 D1 ST
      /p 　　　D4　｜　 D4
      `],["伊甸零式希望樂園 再生之章2",`/p 伊甸零式希望樂園 再生之章2  
      /p 【基本散開】 ｜ 【虛無之門】
      /p 　D3MTD4　　｜　　D3MT
      /p 　H1 ■ H2　　｜　H1　　D4
      /p 　D1 STD2　　｜　D1　　H2
      /p 　　　 　             ｜ 　　STD2
      /p 【暗影珠】12點1點分
      /p  H1D1D3逆時針撞1橙      H2D2D4順時針撞2橙
      /p  MT逆時針撞1紫      ST順時針撞2紫
      /p 【暗影召喚+暗影珠】
      /p ※從安全區域面朝場中判斷暗影珠來球方向
      /p  左：MTH1D1D3↑STH2D2D4：右
      /p 【離別之鎖】
      /p  TN：北　DPS：南`],["伊甸零式希望樂園 再生之章3",`
      /p     【八方散開】                                【點名】
      /p 　　D3MTD4　 　　　            雷：光→北
      /p 　　H1 ■ H2　 　　 　                   炎→南
      /p 　　D1ST D2 　　 　                   【至天絕技】
      /p ※炎(分攤)→DPS順時針旋轉　　雷→北　炎→南
      /p              【光分攤】
      /p 　 　　　MTST
      /p 　H1D1D3 ■H2D2D4
      /p 【第二次轉輪召喚：固定位置】
      /p 　　 D3　MT
      /p 　H1　 　 　D4
      /p 　D1　 　 　H2
      /p 　　 ST　D2
      /p 【霧龍】背後BOSS舉起手的人、以及對面的人，走向場中`],["伊甸零式希望樂園 再生之章4",`/p 《菓子系列》E12S專用宏
      /p ————————————————————————
      /p ◆希瓦分散　|  ◆分組方法
      /p D3 MT D4　|  MT組：MT、H1、D1、D3（A-1）
      /p H1  ▲  H2　|   ST組 ：ST、H2、D2、D4（4-C）
      /p D1 ST  D2　|   (兄貴分組D3D4前 、D1D2背)
      /p ————————————————————————
      /p 　◆泰坦1 　 |   　 ◆泰坦2　　| 　   ◆泰坦3
      /p 　    藍D 　    |   　      藍1　  　 |   藍TH 　   藍D
      /p 橙TH　  橙D |   橙TH 　   橙D   |
      /p 黃H 黃T 黃D |   　　  藍2      　 |   黃TH  橙  黃D
      /p 　（藍1←MTSTH1H2D4D3D2D1→藍2）　
      /p ◆獅子(AkitoTT)
      /p 北：H1→MT→H1 / D3→D1→D3
      /p 南：H2→ST→H2  / D4→D2→D4`,"門神"],["伊甸零式希望樂園 再生之章4",`/p ——————————————————————————
      /p ◆開場先分散　　　|　◆開場後分散　　　　|　◆二運分散
      /p 　D3 MT D4  　 　 |　 　 　 　MT 　　　　 |　　D3 MT D4
      /p 　D1  ▲  D2 　 　  |　　 D1 　▲ 　D2　　 |　　H1  ▲  H2
      /p 　H1  ST  H2 　 　 | 　 D3　　ST　　D4 　 |　　D1 ST  D2
      /p 　 　 　 　 　 　 　  | 　 　 H1　 　 H2　 　  |
      /p ——————————————————————————
      /p ◆第一次地火後分散|　◆第二次地火後分散　|　◆一運優先順序
      /p 　D1　D2　 　 　  |　　　D1　　D2　　　|　西←D1D2D3D4→東
      /p 　MT　ST　  　 　  |　　　MT　　ST　　 　|　◆三運分組
      /p 　H1　H2　D4 　 |　D3  H1　　H2　D4  |　北：MT、H1、D1、D3
      /p 　 　　 D3　 　  　 |　 　 　 　　 　 　  　 　|　南：ST、H2、D2、D4
      /p ↑左半場安全則D3D4映象翻轉 　 　 　 　 　|　(同BUFF時D2D3互換)`,"本體"],["綠寶石神兵狂想作戰",`/p      【產生炸彈】　　　　【第二次】
      /p  　　 MT/D3　　　　　　確認北邊球的顏色
      /p H1/D1　　 H2/D4　　　橙色→順時針
      /p 　  　 ST/D2　　　　　　 藍色→逆時針
      /p ――――――――――――――――――――
      /p      【分而治之】　　　　【坦核爆處理】
      /p 　　　MT/ST　　　　　　　MT　　　　ST
      /p H1　　　■　　　H2　　　　　　〇
      /p 　D1  D3   D4  D2　　 　        　〇　〇　　
      /p 　　　　　　　　　　　　　　（其他人）`],["水晶塔 暗之世界",`BOSS 1 安哥拉・曼紐
      MT把BOSS放在場地中央。核心技能俗稱鴛鴦鍋，BOSS會以自身為軸下鴛鴦鍋，前半場為一個顏色，後半場為一個顏色。這一輪吃紅湯的，下一輪就要去吃清湯，如此反覆（去BOSS正面的注意不要被BOSS對MT的直線AOE掃到。）
      BOSS 讀條死亡視線需要背對，如果不慎中了 buff 可以去場地四周找發白光的地板解除 死亡宣告buff。
      場地四周出現沙漏時注意及時擊殺，最後中央的手指游標停在哪，人群就要遠離那塊地板（地板邊緣有高亮），不及時打掉手指就會隨機炸一塊。
      其他的出啥躲啥即可。`],["水晶塔 暗之世界",`BOSS 2 五頭巨龍
      大原則出啥躲啥，冰圈和沙圈會擴大，日珥及時轉火打掉，紅色的連線會對被連線者造成持續傷害，但是連線可傳遞（擊鼓傳花玩過沒，治療也記得關愛一下被連線的小可憐）。
      被紫色點名的人需要分攤傷害，鉆人堆里即可。
      天上掉下來一灘綠色的需要有人踩，刷出來的綠 shi 要及時轉火打掉，否則會造成巨量傷害全屏 AOE，非常容易團滅。
      被黃色點名的人會被吹上天，迅速遠離人群即可。
      熱浪不必停手，治療群抬就行了（如果你們治療是個新手就記得停手，否則會一直掉血）。
      最後龍頭五重奏，打掉一個頭就會重新讀條，遠端可以 AOE，近戰請單點。`],["水晶塔 暗之世界",`BOSS 3 刻耳柏洛斯
      俗稱 A 餵狗 (B 隊 BOSS，C 小怪) 如果 B 隊 T 不想做 MT，請整隊交換職能。
      BOSS 有讀條衝鋒技能注意躲開正面，過一陣子它就會吐口水（一灘紫色的）和胃液（一個黑球隱約發光），A 隊所有人先踩胃液，發現自己有 縮小buff 后再去踩口水，就會被 BOSS 吃到肚子里（沒有縮小直接踩口水的話，會被 BOSS 直接咬死）。在肚子里的 A 隊需要打胃壁，小怪無視即可（T 拉住小怪保護隊友）。
      在外面的口水會不斷刷出小怪，C 隊需要集火擊殺小怪（B 隊繼續打 BOSS）。當 A 隊擊潰狗肚子並被排泄出來之後，B 隊需要派兩名玩家前往場地盡頭取狗鏈，然後把狗鏈拴在 BOSS 兩側的繫繩點上即可。`],["水晶塔 暗之世界",`BOSS 4 暗黑之云
      進門場地 8、12、4 點方向標 ABC，點不要標在白色地板上 (如果有老司機標一次基本就知道位置了)。BOSS 消失再出現時會使用橫穿中場的波動炮，注意躲開。
      被點名潛地式波動炮的玩家自己遠離大團繞場一週奔跑即可（千萬不要帶著點名來人群）。
      場地出現暗云（還有小暗云）時及時轉火打掉，站在暗云行進路線前面可以把它踩減速。同時場地上出現的圖騰一定要有人站。
      封鎖階段（ABC 三個點附近出現六邊形結界）所有人立刻找到自己的隊伍站進去輸出小怪即可。`],["巴哈姆特大迷宮 真源之章4","https://moeshen.cn/ffxiv/t13/"],["巴哈姆特大迷宮 邂逅之章3",`該副本沒有 BOSS，也沒有通關成就。
      進本后地面上會有彈射圓盤，6 個方向中會有 2 個方向發光，玩家踩上任意一個光點，圓盤就會出現指向該方向的紅色箭頭，此時踩圓盤中央即可被彈射到指示方向。
      副本空中有巨大的金屬環狀拘束器，只要踩亮指向最近的環狀拘束器的方向箭頭，即為正確方向。`],["巴哈姆特大迷宮 邂逅之章5","https://moeshen.cn/ffxiv/t5/"],["巴哈姆特大迷宮 入侵之章4","https://moeshen.cn/ffxiv/t9/"],["羅波那殲滅戰",`MT開怪拉到場地中央，BOSS讀條各種躲好就行。
      BOSS 會讀條前後防禦 / 左右防禦，讀條結束後會出現護盾一樣的特效（持續 5s）和 招架buff，如果防禦前後則打左右，防禦左右打前後，否則會被擊飛，MT 注意，如果是前後防禦請停手 （千萬不要轉，轉了會彈飛你全隊隊友） 。
      當 BOSS 對MT 使用使用耙子一樣並且小距離擊退的技能之後，MT 需要繞到 BOSS 身旁躲避接下來的兩次耙子，治療如果發現 MT 沒躲，記得多奶兩口。
      （解限應該會跳過蝴蝶階段）當天上開始掉蝴蝶的時候，所有人轉火蝴蝶（儘可能打掉一個再打下一個，蝴蝶受到攻擊就會讀條，讀條結束后若還沒打掉，就會掉下來一把劍），MT 打自己身邊的就行了，不要轉 BOSS（因為 BOSS 仍然有各種花樣 AOE），實在打不到發呆也可以（或者可以把 BOSS 拉到場邊，但要當心別被擊退下臺）。蝴蝶階段有一個無讀條釘耙狀的技能打MT，擊退一小段距離后，會鎖定方向再打一次，MT 發現自己被小擊退後，立刻上前繞到 BOSS 側面躲避第二次攻擊。
      蝴蝶打完之後轉階段神通力強多擼哈（如果場上蝴蝶劍超過 4 把，你們就離團滅不遠了），此時周圍的擋板會碎掉，注意一會不要被吹下去。
      下來之後就是一個吹飛，當心身後一定要有擋板。然後是點名ST 的半場連續直線 AOE，ST 跑到 MT 位置引導，MT 注意讓開正面 (不需要換嘲)，ST 適當開減傷即可。如果 ST 在人群里，其他人注意避讓，治療注意抬血。
      如果發現 BOSS 讀條時頭上出現藍色的劍形點名，在讀條結束前遠離中場並不要與他人重合即可（BOSS 會從自己所在的位置依次衝向 1、2、3、4，被沖多次就有可能掛）。`],["亞歷山大機神城 啟動之章1",`門神
      開場后MT 把 BOSS 拉背對人群，有無提示的正面扇形 AOE。隨著戰鬥進行，會不斷重新整理出小怪，ST 注意接怪，或直接保護 1 仇的治療（MT 承傷較重，治療需要注意抬血）。DPS 無視小怪，直接快速擊殺 BOSS 即可。`],["亞歷山大機神城 啟動之章1",`本體
      MT把BOSS拉北場背對人群，BOSS有正面扇形AOE。
      基本上出啥躲啥即可，如果 DPS 過慢可能會刷出小怪，DPS 直接拉走在紅線正下方快速擊殺，注意小怪擊殺後會留下一個縮小圈（用來縮小紅線下墜的導彈），玩家不要踩進去。
      一定時間后 BOSS 會召喚分身，分身複製本體血量從場地北側入場，DPS 需要儘可能同時擊殺。2 個 BOSS 一邊死亡后，另一邊會開始讀條自爆，若在讀條結束前未能完成擊殺，則會團滅失敗。`],["亞歷山大機神城 啟動之章2",`沒有 BOSS，只有大量小怪的戰鬥。入場后先是一波波小怪，按地圖指引逐批擊殺即可。最終場地是一個長方形場地，西北角有 2 輛小坦克車，需要有 1 名DPS 駕駛，通常推薦 AOE 能力較弱的職業開車。
      2 名T 都需要開盾姿拉怪（因為小怪亂七八糟的），需要注意的小怪有：
      狩獵人偶 ： 會給它周圍的小怪上防禦增加 buff，同時有非常疼的正面扇形順劈，一旦發現最優先擊殺。
      9 號哥布林黑寡婦：會給 T 上 受傷加重debuff，同時出現黑寡婦和其他小怪時，建議一個 T 拉黑寡婦，另一個 T 拉剩下的小怪；出現 2 只黑寡婦的時候，一人一隻。
      爆破型 7 號哥布林戰車：會上 受傷加重debuff，但是傷害低血量低，所以開一些小減傷基本都能處理掉。
      另外戰鬥中第三波開始會出現炸彈，由小車車駕駛員處理，T 通常把小怪聚在場地左下角。
      治療和T的注意要點接近，即狩獵人偶、黑寡婦及哥布林戰車會對T玩家造成較大傷害，另外出現炸彈之後，如果駕駛員沒有及時處理，會對團隊造成較大傷害和 火屬性耐性降低，注意及時回覆。`],["亞歷山大機神城 啟動之章2",`坦克車駕駛員參考要點
前兩波小怪可以不上車，最晚要在第三波（也就是第一次出現爆破型 7 號哥布林戰車）的時候上車，因為從這裡開始會出現必須由駕駛員處理的機制。
小車一共有 5 個技能，說明如下：
重壓彈：對範圍內敵人減速，對大型敵人無效。沒什麼用的技能。
電壓彈：對正面敵人眩暈，對機械兵器無效。當黑寡婦和戈耳狄士兵同時出現時，需要眩暈戈耳狄士兵並快速擊殺（第 8 波出現）。
強酸彈：給目標上易傷，最高 5 層。通常用來瞄準寡婦和人偶。
電磁石：吸引炸彈。核心技能
充電：對血量低於 20% 的哥布林戰車使用，可以恢復電量。
由於普通本擊殺速度較快，小車基本不需要充電（也充不上），沒電了棄車即可。
駕駛員主要工作是把炸彈拉到不會影響團隊的角落。當有炸彈落下時（通常會出現在敵對列表中，推薦使用敵對列表選擇），駕駛員使用電磁石技能將炸彈吸引到自己身邊，目標是拉到場地東北角（右上角），注意電磁石的技能範圍是 15m，如果炸彈太遠可能需要分 2 次拉。另外炸彈從落下到爆炸的時間，基本上也只夠小車使用 2 次電磁石的，所以駕駛員要注意自己的位置，並且時刻關注敵對列表中的敵人重新整理情況。
另外駕駛員還需要注意，戈耳狄士兵和黑寡婦同時出現時，可使用電壓彈眩暈戈爾狄士兵。出現黑寡婦或人偶時，可以給它們上易傷（最高 5 層，不要多上，同時注意電量剩餘）。這些工作均是在沒有炸彈需要處理時方可進行。
小車全部都是一次性的，一旦下車，小車就會在一定時間后自爆，駕駛員注意若沒有特殊需求不要隨意跳車。`],["亞歷山大機神城 啟動之章3",`進場小怪可以拉一波處理，到巨鉗蝦為止（場地上有粘液）。
所有人頭上出現藍色點名的人互相遠離。
BOSS 變為手形之後，ST 也到正面來，手的扇巴掌是可以被分攤的，單吃會非常疼，治療注意若 ST 沒有去參與分攤平 A，則需要注意為 MT 抬血。手的血量下降到一定程度之後，會出現分身，必須由ST 拉住仇恨，由於本體和分身都有正面順劈，建議 MT 和 ST 呈 90 度站位（即一人在 12 點方向，一人在 3、9 點方向，剩下的人在兩個手背後）。手會給它扇到的人上 打擊耐性降低，因此會越來越疼，T 注意開好減傷，治療注意抬血。
另外手會讀條沖凈，建議在場地中央集合，或開啟防擊退技能處理。（由於擊退方向是隨機的，所以只有場地中央是比較安全的）。
由於現在 DPS 較高，基本見不到小怪階段了，但若手回到中場變為大漩渦，則為小怪階段。小怪階段有 2 個主要機制，機制 1 是連線漩渦，需要T 開減傷去接被連線的隊友，否則若隊友裝備不足很容易陣亡。另一個機制是磁石，會有多名玩家被點名 磁力（+）或 磁力（-）（頭頂同時會出現正負極的大標記），到時間后，被連線的 2 人會本著同性相吸，異性相斥的原則互相靠近或遠離，因此需要觀察與自己連線隊友的磁極，相同靠近（以能看到線的方向為宜），不同遠離（超過半場距離即可）。處理失敗則會獲得 基礎降低debuff。
最後 BOSS 會迴歸人形態，同時在場地上召喚 3 個水毒圈，有手形態的 打擊耐性降低debuff，也有小怪階段的磁石機制。在處理各個機制時注意儘量不要踩圈，MT 帶位時注意不要波及人群。`],["亞歷山大機神城 啟動之章4",`進場后選 1 只腳開始毆打，另一隻腳會自動回血，所以 AOE 不要考慮了，推薦 MT 標號。
雖然兩隻腳沒有身位，但 BOSS 有對 MT 的小範圍 AOE，近戰注意不要靠近 MT。
BOSS 讀條圓盤后，會點名一名玩家頭頂黑色球，同時場邊會出現金色的小球，向被點名玩家飄過去。推薦ST 和治療去撞金色的小球，金色小球會從隨機 2 個方向重新整理 3 次，注意每撞完一個球都要奶一下（尤其是治療），血量太低也有可能出危險。
打掉第一隻腳后，本體會露出，打十幾秒后本體會讀條 AOE 然後不可選中，此時開始打第二隻腳。
第二隻腳有 2 個新機制，其 1 是隨機一名玩家被 3 條金色的線連線，需要有至少2 名玩家幫他接線，並注意稍微遠離接線的人，判定時會對被連線的人產生小範圍 AOE 傷害。一開始被連線的玩家注意找好位置站定，方便其他隊友接線。
另外一個機制是小怪，會在場地 2、6、10 點各重新整理一直小怪，對初次對其造成傷害的人產生仇恨，小怪每隔一段時間會使用範圍 AOE 光性爆雷，對範圍內玩家追加 光性爆雷debuff，當 光性爆雷到達 4 層時就會自爆團滅。DPS 務必注意快速轉火擊殺。
兩條腿都破壞后就可以正式進攻本體，注意本體是有身位的，MT 在正面處理仇恨，近戰在背面（12 點）輸出，並注意互相保持距離。
BOSS 讀條零式滅絕是隨機點名小範圍 AOE，注意互相保持距離。另外 BOSS 還會點名 2 名治療 最終判決α和 最終判決β，這兩個 debuff 會帶有持續掉血效果，如果和其他玩家靠近則會以 5 層的狀態傳染。只要治療保持遠離他人，等待 debuff 時間結束自動消退即可，若發生傳染，則務必注意不要讓 α 和 β 傳染到同一個人身上，同時擁有 α 和 β 就會原地陣亡。
本體還有前述的撞球和接線機制，適當小心即可通關。`],["亞歷山大零式機神城 啟動之章4","https://moeshen.cn/ffxiv/a4s/"],["魔航船虛無方舟",`BOSS 1 刻托
出啥躲啥有啥打啥，包括那些看起來很危險的沒危險的 (。BOSS 會點名一個人追著放水球 (被點名人頭上一團綠)，被點名玩家注意自己靠邊引導，其他人注意避讓。
BOSS 會隨機點名一名玩家砸過去 (地面一個 AOE 預警圈)，看到那個預警圈，要儘量靠近 AOE 圈，因為 BOSS 砸完立刻銜接的技能，可能僅有腳下是安全的，腿短的職業要尤其注意。`],["魔航船虛無方舟",`BOSS 1 ~ BOSS 2
一個圈型場地，一般是左 A 中 B (就是最裡面的那波) 右 C。己方 2 只小怪打完之後會在相鄰的大平臺上刷出一隻魔界花，三隊魔界花都擊殺就結束。擊殺過程中，小怪的位置可能會刷出瘤子，要麼集火打掉，要麼當螢幕提示 「妖毒濃度變高了」 的時候，每隊各出一個人去踩地上發光的機關，3 個機關同時打開就可以清潔空氣。`],["魔航船虛無方舟",`BOSS 2 天柱樹，鋸齒花
需要分 T，一人拉樹，一人拉花，花拉到場邊面向場外即可。開場隨便打，但是開場后沒多久，樹和花會分別上一個 遠端物理攻擊無效化和 魔法攻擊無效化的 buff，遠端職業注意選擇進攻目標，近戰打樹沒身位但是會吃到樹的 AOE 傷害，打花有點遠，都隨意。屎黃色點名一個大圈，如果圈裡有超過一人（或圓圈重疊）被砸中的人會被粘液連線，需要自由的玩家撞斷連線，否則被連線玩家將無法移動或使用技能。刷出的小蒼蠅要及時打掉（否則會被 BOSS 吸收造成全屏 AOE），打蒼蠅的時候地面可能會出現流沙地震似的變化，注意躲開。
當樹無敵，花讀條踩塔怒震的時候，所有人站在樹后躲避。`],["魔航船虛無方舟",`BOSS 3 丘庫雷因
這個 BOSS 會給所有玩家全程掉血 debuff，治療時不時就要抬團血。BOSS 隨機點名一人，轉身釋放扇形嘔吐 AOE 腐蝕咬 ，被噴三下就昇天，當 BOSS 轉身的時候就要注意躲避，治療注意照顧你們隊里的小笨蛋。BOSS 回到場地中央抬起四爪讀條觸手轟擊時，注意找兩條觸手之間的空隙躲避，否則就會被轟殺至渣。
塔需要集火點掉，但是現在的 DPS 可以通過強擼 BOSS 方式強制跳過塔階段。
四個檯子上刷出小黑洞一樣的東西，BOSS 變為無敵，黑洞里會刷出粘液膠，誰拉著都無所謂，但是當 BOSS 使用扇形 AOE 吸收的時候，拉著小怪的人一定要將小怪拉出吸收範圍 (否則接下來的 AOE 會變疼)。
接下來的階段出啥躲啥（小怪階段之後非躲技能不要站在臺子上，BOSS 會隨機點名玩家吐粘痰，吐在臺子上你們就少了一個安全點）。場地四周出現的球要去撞，如果沒有奶媽支援撞一個就行了 (兩個就血皮，3 個就死了)。`],["魔航船虛無方舟",`OSS 4 艾奇德娜
基本有啥躲啥，記得分攤。當 BOSS 分列成 3 個小怪時，需要3 隊 T 第一時間立刻接小怪拉走（A 左 9 點，B 中 12 點，C 右 3 點），建議優先擊殺中間的（因為它會讀石化）。
隨時注意 BOSS 讀條石化（背對可破）。`],["地脈靈燈天狼星燈塔",`BOSS 1 流光晶片
初見玩家注意一下場地裡不可選中的鳥、蜘蛛，場景比較暗，不容易發現。當玩家被連線時，優先找場地裡的鳥，把線給鳥，如果實在沒有鳥或來不及，那麼把線給蜘蛛。連線過一會會召出被連線的怪，鳥直接打掉即可，蜘蛛會在地上放一灘毒 (也要打掉)，如果有人沒有傳線而召出了人形怪，治療優先看好 T 血，其他人集火人形怪。人形怪打人極疼，而且會給 boss 增益…`],["地脈靈燈天狼星燈塔",`BOSS 2 第 8 團高級教士 孛 (bèi) 罟 (gǔ)
會經常給地板捅個洞，由遠端 DPS 打一下出現的凝膠怪，並帶到以太噴發的洞口上打掉，凝膠怪死後會堵住洞口。如果隊伍中沒有遠端 DPS，而治療覺得自己有能力處理，也可以由治療負責處理，否則請出一名近戰 DPS 來處理… 然後天上會掉下來倆鍋爐工倆引擎，優先打掉跟 BOSS 連線的引擎，然後再回頭處理鍋爐工即可。`],["地脈靈燈天狼星燈塔",`BOSS 3 爆彈之母和爆彈之父
爆彈之母和爆彈之父，前半段出啥打啥，後半段會出現名為治療爆彈怪的藍色爆彈怪，它會向另外的紅色小爆彈怪慢慢前進，需要治療或者其他人，站在紅色爆彈怪這邊用遠端技能打一下治療爆彈怪，把它推開 (不要讓它碰到紅色爆彈怪)，否則就會引發全屏 AOE 大掉血。`],["薩菲洛特殲滅戰",`T開場把BOSS定在場中央，背對人群。大部分都是以前見過的機制，集合分攤還有躲圈圈。當MT看到BOSS有明顯的握拳蓄力動作時，注意開啟減傷。當BOSS突然轉身並且不知道正在幹嘛時，立刻躲到BOSS身後，接下來會是一個半場範圍的AOE(無讀條無範圍提示，所有人都要注意)。
當 BOSS 血量下降到一定程度之後，BOSS 會走向 12 點並不可選中，場地上刷出小石頭人，T 拉住其他人擊殺小怪即可。小怪打人比較疼，T 儘快拉全。
打完小怪之後巨大化轉階段 (治療群抬一口即可)，進入巨大魔神階段。首先地上會出現藍圈（BOSS 的拳頭會砸在藍圈上並擊退玩家），靠近藍圈不要被擊退到場下即可，BOSS 會正面、左側、右側連砸三拳（人稱農夫三拳），接下來會隨機點名1 治療和1DPS，BOSS 會向這兩名玩家使用直線 AOE，需要治療向左 DPS 向右跑到場邊引導 AOE 方向（不重疊、不砸到人群即可）。
當 BOSS 蹲下（頭部與平臺平齊）時，所有人向前走到 BOSS 圈裡，BOSS 會使用吹飛擊退玩家，並召喚 3 個小怪。T 拉住前半場重新整理的小怪帶到 6 點，DPS 首先集火 6 點的小怪，若未能在該小怪讀條結束前擊殺它，直接團滅。
當 BOSS 微微側身舉起單手（並且被輕輕擊飛了一小段距離），6 點旋風出現集合圖示時，所有人立刻轉身站到旋風裡，旋風會把所有玩家吹到天上，迴避 BOSS 的胡擼。
BOSS 胸口發光需要所有人分散（隨機點名小範圍 AOE），踩塔只需要兩名 T 分別踩左右塔即可（T 沒踩其他人也可以幫忙）。接下來回到農夫三拳階段重複。如果 DPS 比較快的話，應該在第一次上天下來就可以打掉，稍慢點的，在第二次農夫三拳也可以打掉。`],["亞歷山大機神城 律動之章1",`開場MT 把 BOSS 定到場地西北（左上）角，所有人不要踩場地中央的雷塔圈。
開場 BOSS 上 3 層 衝擊後會變為 腦震盪debuff，需要大減傷或讀條時換 T 處理（目前 DPS 較快，貌似已經可以跳過這個機制了）。
被紅色點名的玩家注意務必把點名放到場地角落遠離人群的地方，也不要蓋到場地中央及 3、9 點的機器（會影響到機制處理）。
當 BOSS 讀條投放炸彈時，需要一名治療踩中間電圈啟用兩側機關，然後踩紅色毒變成大猩猩，大猩猩可以對炸彈使用技能將其擊飛。人群在西北角，將炸彈打到東南（右下）角即可安全迴避，若人群位置不好，找一個離大部分人最遠的地方擊飛，並注意準備抬血。
當 BOSS 再次變大，並開始讀條蓄力，立刻去踩中間電圈啟用機關，並踩紫色的毒變成鳥，變鳥途中可以使用技能繼續打 BOSS，BOSS 會用力錘幾次地板，當 BOSS 停止砸地開始繼續普攻，就可以點掉 哥布林藥劑：速度buff（或等它自行消退）恢復正常。
之後會出現 2 個炸彈，推薦 2 人變猩猩處理。`],["亞歷山大機神城 律動之章2",`是 4 個 BOSS 組成的車輪戰，每個 BOSS 提供 1 個機制。
爆破者
地上的炸彈無論如何不要碰，會有 4 名玩家被點名，每名玩家位置會落下一個幻影，並向該玩家方向衝鋒。被點名的人可以先向場邊移動放幻影，幻影落下後再向場外移動一步，讓幻影衝向場外。若幻影衝鋒方向為場內，所有人注意迴避幻影衝鋒路線。
爭鬥者
BOSS 會對當前 MT 附加 魔法受傷加重，如果 3 層還沒打掉 BOSS 注意換 T。
這個 BOSS 不會讀條，所有的機制需要觀察 BOSS 的手臂，當它兩手側平舉的時候，手會隨機變成炮或鉆的形狀，根據形狀和數量處理：
單手炮：對 MT 直線大傷害，開大減傷處理。在側面的玩家注意不要踩進目標圈，否則有可能被波及。
雙手炮：對 MT 方向可分攤的直線大傷害，MT 帶 BOSS 轉頭分攤。
單手鉆：隨機點名距離衰減傷害，所有人遠離 BOSS，MT 不想走的話可以開啟大減傷看臉。
雙手鉆：普通難度無該組合。
欺詐者
BOSS 會對所有玩家附加 算術：高度1或 算術：高度2，同時地板出現高低差。按紅高紫低站位即可安全，在高地板上會同時附加 磁懸浮buff，可據此判斷自己站位是否正確。每次地板高低差的時候地板都會重新升降，注意觀察。
生命計演算法是全體大 AOE，治療注意抬血。
會有 1 名玩家被點名黃圈，同時頭頂飄著幾個球，正確處理方法是根據球的數量在圈裡站相應的人數（包括被點名的人）；如果隊伍中隊友不會處理，可被點名玩家遠離人群單吃。
環旋者
BOSS 會對當前 MT 附加 物理受傷加重，如果 3 層還沒打掉 BOSS 注意換 T。
超級氣旋是一個集體吹飛的技能，可以在 BOSS 正面躲避。
被點名 水屬性壓縮壓縮的玩家，在倒計時結束時會產生一個較大範圍的 AOE 傷害，並在原地留下一個水龍捲。被點名玩家在倒計時快結束時，找一個沒人的空場放置點名，出現水龍捲后遠離。之後 BOSS 會立刻點名 4 名玩家冰圈，需要有 1 名冰圈玩家帶冰凍水，把水龍捲凍成冰坨（其他人適當散開即可）。
最後當 BOSS 讀條究極閃光時，所有玩家需要躲在之前的冰塊背後，若沒有冰塊或沒能躲在冰塊后就會直接陣亡。`],["亞歷山大機神城 律動之章3",`降落之後場地中央的圓形區域是主要戰鬥區，四個角用於機制處理，剩下的地方會根據戰鬥階段豎起倒刺，踩上去會有 刺傷，不能長時間逗留。
開場后 BOSS 隨機點名非 MT 玩家發射直線 AOE，被紫色點名玩家需要注意避讓人群。
之後 BOSS 會隨機點名一人（頭頂紅球），並把他抓到場地角落的籠子里。被點名玩家注意遠離其他人，BOSS 抓人時會使用範圍眩暈技能，若距離過近可能會被連帶抓緊去。
第一次抓一名DPS，被抓的人在籠里不要移動，否則會持續掉血，其他遠端攻擊牢門的鎖解救隊友。T 和近戰處理場內小怪。
第二次抓一名DPS，打掉裡面的小怪即可。
中途小怪階段 BOSS 會對MT 使用齊射技能，會對 MT 多次疊加 物理受傷加重debuff，注意最多 5 層換 T（騎士和槍刃可以分別通過 神聖領域和 超火流星阻止疊 buff）。
另外小怪階段的風暴人偶會讀條球狀閃電，注意打斷（否則全體傷害 + 麻痹，會影響籠子里的隊友處理機制）。
之後場地內倒刺消失，可全場移動。同時場內出現一隻小黑貓，喵喵幾次之後會放出真心，真心會飄向 BOSS 所在的方向，MT 帶 BOSS 遠離真心，其他所有人立刻轉火真心。與此同時場上還會出現之前出現過的紫色點名直線 AOE、齊射換 T 等技能，治療注意關照團血。
第三次抓一名T，打掉小怪即可，注意小怪平 A 帶小距離擊退，不要被擊退到籠子邊緣，否則會被凍住。
第四次抓一名治療，籠子里會有一個洞冒毒氣，需要被點名玩家站在洞上阻止毒氣噴發（並注意奶好自己）。
最後如果 DPS 特別慢的話，場地上會出現炸彈連線，玩家可以拖著炸彈走，原則上四個角一塊 1 人，最後一人帶炸彈在中場遠離人群。只要不站在刺上或吃到 2 個炸彈就沒事。`],["亞歷山大機神城 律動之章4",`開場后先隨機瞄準一名玩家讀條巨型光束炮，所有人注意躲開正面方向。接下來讀條永恒射線，會對當前 MT 附加 魔法受傷加重後進行魔法攻擊，可以開大減傷或換 T 處理。
接下來場地四角會出現 4 個小怪，DPS 優先處理小怪。若 DPS 較慢還會出現連線球，只要不是連線自己的球隨便撞，撞到與自己連線的球就即死。
爭鬥者＆環旋者
3、9 點落下，2 個 T 一人拉一個，現在 DPS 比較高，也可以拉在一起處理。
建議先打 3 點的爭鬥者，它會和 A6 一樣使用拳組合，需要T 注意應對。
爆破者＆欺詐者
前倆天王打完之後會在 12 點和 6 點落下另外 2 王，同樣一人拉一個。
由於欺詐者的機制比較麻煩，也是推薦優先處理 12 點的欺詐者。
殘暴正義號
4 天王處理結束之後會合體擊飛，比較疼可以適當佈置減傷。
合體后第一個技能雙重火箭飛拳，需要ST 靠近 MT 參與分攤，如果 ST 不來的話，MT 注意開好大減傷。另外如果有其他人離 MT 較近的話，也會被自動算入分攤（按距離計算和 MT 最近的 1 人），請注意。
接下來是一串機制組合，地面黃圈 + MT 噴火 + 分攤 + 彈幕 + 超級跳（蘇帕醬）+MT 噴火。噴火和彈幕都是正面扇形 AOE，所有人注意時刻遠離 MT，躲開地面黃圈提示后立刻找沒有 MT 的地方集合分攤，然後彈幕是隨機點名 AOE，因此看到讀條末世宣言時要注意迴避 BOSS 方向。接下來超級跳是隨機點名一名玩家跳躍過去，同時擊飛並眩暈範圍內的其他人，所以看到 BOSS 讀條超級跳躍時要注意互相保持距離。
BOSS 血量 50% 時會上天，治療看到 BOSS 上天后佈置好全團減傷並遠離中場，接下來是運動會階段。之前的 4 天王會再次出現，施放各自的標誌技能。基本上出啥躲啥，唯一要注意的是 9 點出現的爭鬥者會使用雙炮（即多人分攤），如果隊友跑的太散實在串不出一條直線，MT 可以考慮開無敵硬抗。
之後天王們再次合體，重複機制組合直到擊殺。`],["禁忌城邦瑪哈",`BOSS 1 阿剌克涅
BOSS 會掃尾，站在後面的玩家（尤其遠端）要注意。BOSS 會隨機點名三名玩家吐蜘蛛網（頭頂紅色點名標記），建議往場邊放置，踩上去會有減速效果，對近戰輸出不利，但可以應對特殊機制。
屎黃色點名和方舟的那個一樣，圈裡有多人或重疊的話，在圈裡的所有玩家都會被粘液連線定身，需要自由玩家撞線解除。注意撞線會有可能跟 BOSS 場地機制重合，優先救人。
打一會 BOSS 會帶著全體玩家上天，天上會出現酸液蜘蛛，打掉這個蜘蛛之後，腳下的蛛網會出現空洞，從空洞跳下去就可以回到下場。留在上半場的玩家需要擊殺其他小怪，並擋住從場邊飛往場中央的球（否則會造成巨大的 AOE 傷害），下場的玩家需要打掉蛛絲結釦。原則上要求上半場留 2 隊，下去 1 隊（至少包括 1T1 奶，拉住下場的小怪），由於現在輸出較高，不用特別強制規劃（除非隊伍輸出較差或嚴重失誤）。
打掉所有結釦之後，所有玩家返回地面擊殺 BOSS。如果隊伍輸出較慢的話，可能會出現新的流沙機制，BOSS 下潛之後出現流沙，需要站在遠離中場的蛛網上防止被吸入。`],["禁忌城邦瑪哈",`BOSS 2 弗加爾
場地上的綠球周圍會現綠圈，踩 1 個綠圈會獲得 漸漸殭屍化，踩 2 個以上綠圈（重疊的）就會變 殭屍。
地面上出現紅色圓圈接天黑色光柱，需要玩家踩上去，如果同時出現其它 AOE 技能，請優先躲避其它 AOE 再迅速歸位，由於踩光柱會獲得流血 debuff，因此不要多踩（一人一個，沒的踩的安心掛 BOSS）。太多人不踩的話，接下來的 AOE 會傷害會直接團滅。
被點名紅色倒三角的玩家集合，原則上 BOSS 身下集合，如果太遠趕不過去，（同是倒三角點名的）兩三人抱團也是可以的，否則會變呱，而且受到巨量傷害。被紅色箭頭（比較長條的，不是倒三角）點名的玩家遠離人群，會被連續點名 AOE。
小怪階段從左到右分別是被召喚出的扎哈克 （9 點，A 隊）， 被召喚出的夢魔 （12 點，B 隊）， 被召喚出的哈加提 （3 點，C 隊）。扎哈克會超大範圍噴吐掃尾，注意橫拉，頭尾都不要面向中場；夢魘會讀條欺瞞霧，注意打斷（眩暈打斷）；哈加提讀條致命射線，注意背對，沒有背對的會獲得 死亡宣告，治療可驅散。原則上推薦先處理夢魘和哈加提，最後處理扎哈克。
打完小怪轉場之後，再出現綠球必須靠近（但注意區分，不要踩在兩個綠球的交界處），BOSS 會讀條超即死，需要玩家身上帶有 漸漸殭屍化debuff 才能平安（否則直接撲街），只要記住每次出現綠球都靠近吃綠圈即可。`],["禁忌城邦瑪哈",`BOSS 2 ~ BOSS 3
道中會遇到石面，這是一個糖葫蘆形的場地，左 A 右 C，開怪后不久，左右兩邊圓形場地裡就會出現小怪，需要 AC 隊前往各自的圓臺處理（遠端注意站進圓臺裡面，會鎖門的），打完各自小怪之後回到中場，BOSS 會讀條碑文魔法，所有人站在石面面前的圓圈裡，可以豎起防護罩，近戰可以繼續輸出（原則上可以在讀條結束之前打完），讀條結束之前進入防護罩躲避 AOE 即可。`],["禁忌城邦瑪哈",`BOSS 3 奧茲瑪
ABC 為實際標點位置，紅黃藍三色為分別對應隊伍的站位，藍色圓點是 ABC 各隊 T 的位置，紅點是放隕石的位置。其他人原則上站在 T 右側（圖中未標出），不與 T 重疊即可。
場地會掉下去，要注意（有突進和后跳的職業尤其注意）。進場長方形平臺是 B 隊，左側長方形平臺是 A 隊，右側是 C 隊。按各隊順時針方向標 ABC（參見示意圖）。
戰鬥中會隨機點名玩家放巨大黑圈隕石點名（第一次是每隊 1 人，之後每隊點名 2 人），被點名黑圈的玩家需要放在自家平臺右後角（示意圖中紅點）或對應隊伍標點位置放隕石，萬不可重疊（重疊基本上即死）。黑圈消失後立刻回人群，隕石掉下來會出現小怪，需要立刻擊殺，否則會造成全場 AOE。
在戰鬥中，奧茲瑪會變形為三角錐或立方體：
三角錐：所有人離開本隊平臺到走廊上，奧茲瑪會對平臺發動直線 AOE，AOE 結束后可以回來。同時奧茲瑪點名玩家一個小範圍 AOE，會對範圍里的玩家造成 出血，可驅散，治療注意抬血。另外還會點名玩家 加速度炸彈，加速度炸彈倒計時到 0 的時候，如果玩家仍在行動（自動攻擊也算）則會造成巨大傷害，被點名的玩家（尤其是近戰和遠敏）注意停手（背對瘋狂 ESC 到彈出系統菜單即可）。
立方體：所有人在本隊平臺靠近奧茲瑪，奧茲瑪會發動覆蓋整個走廊範圍的圓形 AOE。同時奧茲瑪會對 3 個隊的 T 釋放直線 AOE，T 注意開啟減傷，治療注意抬血。另外走廊上還會出現藍色的球順時針移動，需要玩家去撞球（推薦奶去，1 人的血量只夠撞 1 個球的，奶可以一邊撞球一邊給自己加血）。最後 BOSS 還會有小擊退，撞完球的玩家注意及時回到平臺上。
中間 BOSS 會讀條黑洞，把玩家吸入壓縮世界。首先是 3 個隊的長條形平臺，需要每隊至少有 4 人踩檯子，解除鄰隊大怪的無敵狀態，擊殺完畢后跳下臺子打奧茲瑪之影。如果 DPS 較慢的話，會遇到 BOSS 讀條融合，需要背對迴避，否則會獲得 漸漸浸蝕，並不斷加深，4 層之後會變為 浸蝕，並出現壓縮塊小怪，需要打掉解救。打掉之後跳入場中央就回到原本的場地裡，繼續循環奧茲瑪圓球方塊三角，就過了。`],["禁忌城邦瑪哈",`BOSS 4 卡洛菲斯提莉
BOSS 喊話我的魔發，是斬肉的刃、吸血的根！ ，會讓自己一側的頭髮變成刀刃（發黑）（提示卡洛菲斯提莉的魔發完成了變異…… ），此時向另一側走位躲避即可（技能非常快，看到場地預警再躲基本來不及），另外有一些 MT 會選擇旋轉 BOSS 來讓隊友半場全部安全（如果你是 MT，而你不會拉，就不要動，讓大家自己躲）。治療注意抬血。
BOSS 讀條接發后，場地上會出現紫色的圈，千萬不要站進去，踩到的話會出現一個三倍于紫圈範圍的巨大陷阱，把玩家吃掉，如果不及時打掉陷阱，就會被絞殺。
小怪階段會同時有潛地式波動炮點名，被點名的玩家注意貼邊繞場狂奔，不要帶到人。
最後一個階段，BOSS 讀條接發后，會出現規整的黃色 AOE 範圍預警，注意圈裡彈出來的東西的模型，站在雙刃斧形怪發的正下方（遠離圓球種子形的怪發），否則會被擊飛 + 易傷，非常疼。BOSS 讀條透耳尖嘯后，場地中央會出現 3 個圈，玩家需要背對 BOSS（推薦面向門口）被擊退，面向 BOSS 的話就會被吸入（然後 + 易傷）。
最後 BOSS 讀條蓄力衝擊時，注意 BOSS 的面向和它的頭髮，尤其建議 MT 提前走位拉好面向，它衝擊後會立刻使用魔發斬，如果面向不對就會變成 24 人斬。`],["死者宮殿 地下1～10層",`BOSS：地宮死亡凝視
這個boss很簡單，但是在單挑時也不能低估他的傷害(注意在戰鬥中需要時刻保持移動)。
技能順序如下：
爆裂尾：在普攻中夾雜的一次對T大傷害。
風暴：地面AOE。
雜音：以BOSS為圓心的AOE，附加降低攻擊速度的DEBUFF。
光球：以指定玩家為圓心的AOE。
疾風爆發：一個附加少量DOT傷害的全場AOE技能。
總體策略：使用魔陶器 夢魔化在低層可以造成巨量傷害，這是因為易傷的潛在價值比大部分低階技能都要高。如果你的職業可以風箏BOSS，那你可以繞著場地邊緣跑來躲掉的爆裂尾。
https://nga.178.com/read.php?&tid=14509371&pid=285726504&to=1`],["死者宮殿 地下11～20層",`BOSS: 大口花
這個BOSS也很簡單，攻擊模式類似於10層。但是請不要低估它的大傷害技能，血腥的愛撫。
技能順序大致為血腥的愛撫-以自身為圓心的AOE-點名圓形AOE-全場AOE。
全場AOE之後，它將會去場地最北邊同時召喚兩個地宮黃蜂。必須第一時間擊殺小怪否則他們將會讀條終極針讓某位玩家當場去世。同時，BOSS會讀條使用一個傷害極高的直線AOE腐爛惡臭。
總體策略：使用魔陶器 夢魔化來擊殺BOSS和他召喚出的小怪(在它召喚時對著BOSS使用，可以通過AOE同時打到BOSS和小怪)。需要注意的是單人時可以使用生者秘藥，它的傷害還是很高的。`],["死者宮殿 地下21～30層",`BOSS:寧吉茲濟達
一句話攻略:站在場邊，引導火球-冰球-火球-冰球，走到場地中央`],["死者宮殿 地下31～40層",`BOSS：伊休妲
一句話攻略：殺完小怪`],["死者宮殿 地下41～50層",`BOSS：漆黑的艾達
一句話攻略：貼緊boss來躲環形AOE身體健康。`],["亞歷山大機神城 天動之章1",`平臺門神小怪正面平 A 可以被分攤，推薦2T 開啟減傷正面一起吃平 A。
以 BOSS 所在位置為中心，場地被分為 4 塊，以進場時東南（右下）角標 A。MT 保持 BOSS 面向不動拉怪，其他人繞到 BOSS 背後進攻，BOSS 正面有順劈，無論如何不要去。
開場后不久，東北角的場地會發亮，同時掉下一堆小怪屍體和動力發生器，需要一名玩家（通常是治療）把動力發生器撿起來，放到小怪身上使之復活，然後拉到發亮的場地上擊殺（小怪仇恨以復活后第一個攻擊它的人為準）。到一定時間后，發光場地會出現巖漿，吞沒小怪屍體。否則 BOSS 在使用吸收技能之後，會附加 左臂再生及 右臂再生buff，最嚴重時會導致後續技能無法處理而團滅。
第一波小怪分別落在東北場和西北場，而東北場將會出現巖漿，所以東北場的小怪不用復活，只要復活西北場的小怪即可。
第二波小怪刷在西北場，巖漿在西南場，MT 注意避讓位置。怪很多，可以拉近 BOSS 一起 AOE。
每波小怪中途或結束后，會有若干名玩家被點紅色點名，被點名的玩家靠近 BOSS 放置廢料堆（類似隕石），然後當 BOSS 詠唱廢料爆發時，在廢料堆后躲避即可。
第二波小怪結束後會有一次 270 度 AOE 範圍攻擊，MT 自己開大減傷硬吃，其他人在 BOSS 背後躲避即可。如果之前 BOSS 吃了廢料導致手臂再生層數增加，MT 可能需要開啟無敵或想辦法躲避。如果吃的太多導致手臂完成，這裡會出現無法迴避的 360 度 AOE，既告團滅。
270 度 AOE 后，會在西北場出現距離衰減 AOE 提示，同時落下一隻全裝甲浮士德，ST 拉好浮士德前往 A 點（東南角）面向場外，所有人優先擊殺浮士德。地板會按照西北→西南→東南→東北的順序依次發亮，一般在第二塊地板（也就是東南角）時都可以完成擊殺（若出現巖漿時小怪仍存活，則會造成全屏 AOE）。所有人注意浮士德有正面 AOE，同時注意避讓 MT 那邊的 BOSS 順劈。
之後再重複幾次搬垃圾→擊殺→巖漿吞沒即可。`],["亞歷山大機神城 天動之章2",`前面小怪沒什麼特別的。
BOSS 場地上有 3 個按鈕，無論什麼時候都不要去碰，建議把技能特效關掉以便觀察位置。最深處的水晶形狀的按鈕會讓場地兩側出現直線 AOE，中央的鐵錘按鈕會讓 3 個按鈕的正上方落下大鐵錘，門口的釘子按鈕會讓場地上出現地釘，令所有玩家被止步。
當玩家被紅色點名加連線的時候，注意遠離 BOSS，其他人迴避連線路徑直線，否則會被擊殺。
接下來 BOSS 會跳向水晶按鈕（所有人靠近場地中央），然後跳向鐵錘按鈕（所有人靠近場地邊緣）。
然後 BOSS 會跳向場地一側並無敵，在場地另一側出現 6 號哥布林壓路機，壓路機會不斷讀條蒸汽滾輪，在讀條結束時會有個向前壓路砸的動作，近戰最晚在讀到 「滾」 字的時候就要遠離壓路機，否則會被壓扁。
壓路機結束后，BOSS 讀條哥布流哥布林衝鋒，MT 注意開啟大減傷，治療注意抬血。
最後 BOSS 讀條單發填充后，頭頂會出現紅色或綠色的標記，紅色遠離，綠色靠近即可處理。`],["亞歷山大機神城 天動之章3",`開場都沒什麼要注意的，出啥躲啥，第二次制導是中央大範圍 AOE，注意提前靠邊。小怪注意及時轉火擊殺。
讀條百式聚能炮時，ST 頭頂會出現向外擴的白色三角標記，ST 自己開啟大減傷到場地邊緣放置，其他人儘可能遠離 ST。
BOSS 回到場中之後，四周會出現跳上敵機的互動點，要點選互動點才能跳上敵機，要注意。BOSS 轟炸完場地之後，會回到場地上空，同時出現 QTE 按鈕，按任意鍵臉滾鍵盤即可跳下飛機（否則就會掉下去摔死）。
回到場地上會出現 4 個天青石（若 DPS 較快則可跳過），打掉后 BOSS 會讀條黑暗命運，非常疼的全屏 AOE 帶 DOT，治療注意抬血。
讀條限制器減檔後會突然消失，並重新出現在中場，並出現等離子護盾，所有人需要集中在 BOSS 正面才能對護盾造成傷害。
打掉護盾之後 BOSS 讀條摧毀者衝擊同時點名 MT，MT 開啟大減傷離開隊友所在方向，BOSS 會向 MT 方向衝鋒，並擊殺沿途的其他玩家。考慮到剛大家都在打護盾，MT 自己穿過 BOSS 前往後場是相對安全的（總之注意找沒人的地方）。
當 BOSS 讀條螺旋槳強風時，需要在天上掉落的巨大物體之後擋住強風攻擊，否則會被 混亂。
最後出場的小怪會對T 造成直線擊退，ST 在中場接小怪之後注意讓怪背對人群，打掉即可。`],["亞歷山大機神城 天動之章4",`開場時MT 儘量把 BOSS 定在場中。正面有無預警扇形 AOE，其他人注意時刻躲避 MT。
讀條十字聖禮時，所有人後退到沒有連線的兩個小點中間後方躲避（有連線的方向會發射矩形鐳射，必死）。
被紅色點名的人注意遠離人群，注意抬血。
之後是小怪戰，T 注意及時拉好仇恨，第三波會在場地四周刷出 4 個位置固定的小怪，並隔一段時間讀條全屏 AOE，記得迅速逐個擊殺這 4 只小怪后再處理剩下的小怪。
打完小怪后，BOSS 會從北邊出來並預警神聖審判，在提示 ++ 距神聖審判還有 5 秒！++ 時，T 放 3 格 LB 即可，其他減傷隨意，不放 LB 必死。
回來后 BOSS 會讀條時間停止，被綠色點名的人遠離他人，剩下的人在 BOSS 背後集中分攤。傷害判定后 BOSS 會出現在場地邊緣並讀條十字聖禮，注意向 BOSS 兩側方向躲避（有連線的方向都會有矩形鐳射）。
重複兩次時間停止后，BOSS 會瞬移回到場中，然後出現 4 個黑球，需要進入黑球擊殺裡面的小怪，如果 DPS 沒進的話，TN 可以考慮補位，但無論如何 MT 都不要進。外面會繼續有白光之鞭（紅色點名需要遠離並帶有大傷害）、十字聖禮之類的技能。
擊殺完小怪的隊友返回后，BOSS 會出現新的技能重力異常，場地上會出現黑圈，找縫隙躲避即可。
接下來的時間停止是複合技能，先處理分攤遠離→重力異常→十字聖禮，重力異常的黑圈變白之後就可以踩了，
最後會 BOSS 會召喚一個巨大的神聖亞歷山大，對場內 4 名玩家連線，被連線玩家需要互相遠離放圈，一共放 4 次，然後返回處理時間停止即可。`],["死者宮殿 地下51～60層",`BOSS:深黑騎士
一句話攻略：記得卡位，保證被點名擊退後不要飛進持續地板AOE。`],["死者宮殿 地下61～70層",`BOSS: 水虎龍亞夸虜
當boss吟唱浸泡時，把他完全拉出範圍，否則他會得到加速BUFF。`],["死者宮殿 地下71～80層",`BOSS：古丹納
遠離boss施放的旋風，他們會將略大於他們視覺範圍的人吸入並造成傷害。他會在邊緣施放會施加易傷的大傷害AOE呵斥，所以當他跑去邊緣時，一起跟著跑過去。他的HP在18%之後就會不斷吟唱黃道隕石，一發就能造成你最大血量80%的傷害。因此，把爆發留到這個時候並儘快RUSH掉它。`],["死者宮殿 地下81～90層",`BOSS:爆彈怪教母
一句話攻略：把橘色小怪直接打死，把藍色小怪推到boss邊(所有技能都能推走它)。`],["死者宮殿 地下91～100層",`BOSS：死靈術士尼博斯
+ BOSS長這樣 ...
這個BOSS對大部分團隊都很簡單，大部分情況你甚至不需要用魔陶器 基路伯化，下面我會對這個boss給出一些單人和團隊的建議
單人
用魔陶器 強化自身、魔陶器 強化防禦、生者秘藥和魔陶器 夢魔化，大膽的用虛空烈焰懟boss吧，他會小怪焚化殆盡。
變身時間結束后，再用一個生者秘藥和魔陶器 基路伯化，用天罰懟爆BOSS和地上的小怪。
團隊
一個人使用魔陶器 夢魔化，其餘人集火BOSS，虛空烈焰殺死小怪后，boss也應該奄奄一息了。
https://nga.178.com/read.php?&tid=14509371&pid=285727338&to=1`],["死者宮殿 地下101～110層",`BOSS：阿利坎托
這個boss的技巧和10層的相似，但是錘人更疼了，好好分工吧。`],["死者宮殿 地下111～120層",`BOSS:榮光魔花
一句話攻略:躲開AOE，殺死小蜜蜂`],["死者宮殿 地下121～130層",`BOSS：埃爾法德
一句話攻略：站在場邊，引導火球-冰球-火球-冰球，跑到中間。`],["死者宮殿 地下131～140層",`BOSS:阿普切
魔陶器 基路伯化對這個BOSS有奇效(用了魔陶器 強化自身之後可以一發3w)。如果單挑的話，推薦你用魔陶器 強化自身+魔陶器 強化防禦+魔陶器 基路伯化套餐。你也可以不用魔陶器 強化防禦，那你可能就需要手動解除基路伯狀態，吃個生者秘藥，再用另一個魔陶器 基路伯化。`],["死者宮殿 地下141～150層",`BOSS: 提西福涅[單挑視訊]
這個BOSS對遠端還算友好，但是對近戰尤其困難。
一句話攻略：風箏並殺死殭屍小怪(不要讓他們摸到你)，夢魔小怪不是必須殺死的。`],["死者宮殿 地下151～160層",`BOSS: 非生騎士
儘管長得像是個60層BOSS的換色版，現在這個可以把你頂上天。雖然你不用魔陶器 強化防禦也可以單打的過(至少赤魔打的過)我還是十分建議你提前用一個。你一旦踩進由悔恨殿製作出的流血區域，就是一跳5k的大傷害。除此之外，確定你不會被頂到爆炸球AOE中，否則BOSS緊接一刀你就死了。`],["死者宮殿 地下161～170層",`BOSS:虹蛇
這個BOSS和70層的很相似，但現在他的水塘還會額外提供一個物理傷害上升BUFF。此時T需要拉著BOSS繞著場地跑，以確保他一直不在水池裡。
單人：
在第一個沉重效果慢慢衰減時預留一個疾跑或打斷，這是因為你需要用這個來逃過隨之而來的生物電AOE(在沉重還有7秒時用疾跑)。`],["死者宮殿 地下171～180層",`BOSS:丹代恩索涅
這個BOSS和80層的那個很類似，但也有一些很重要的區別。首先，他會連續吟唱兩次大漩渦，所以會出現滿地旋風的情況。呵斥雖然不是一擊必殺的，但在沒有魔陶器 強化防禦的情況下一下是13k的傷害(注意！有可能暴擊！)注意落雷(正面直線AOE)對DPS的傷害，這個技能一下就可以打死一個沒有使用魔陶器 強化防禦的DPS，不過話說回來，一個不用魔陶器 強化防禦的DPS站在BOSS正面是在幹嘛？
這個BOSS最難的地方在於，一旦他的HP到了17%以下，他就會不斷的詠唱黃道隕石，這次可比上次快多了，大概每9秒造成一次每人HP80%的傷害。因此，在它50%HP時使用魔陶器 夢魔化，來確保易傷DEBUFF可以持續到RUSH階段(單人時30%再用)，記得最後甩兩段LB。(不要用T的LB！因為是無效的！！！)
如果你對你的團隊沒有信心，那赤魔和奶媽也可以準備單挑了。在兩次黃道隕石之間用一次生者秘藥並不斷治療自己以維持血線，期間想辦法偷輸出。
注意：不要在隕石階段站在boss面前的近戰範圍里，兩次隕石中間的普攻會一下打死你的。[視訊演示]
單人：
如果你要單挑他，那我就先預設你是個赤魔了。要打這個BOSS很有套路，當BOSS血量降低時，你可以用赤治療觸發赤閃雷，赤治療觸發赤疾風的手法，大概就這樣一直打下去。如果你有時間的話最好不要用魔陶器 夢魔化，帶三個魔陶器 夢魔化打190層boss可以節約你一個在高層很寶貴的魔陶器 強化防禦。
https://nga.178.com/read.php?&tid=14509371&pid=285728216&to=1`],["死者宮殿 地下181～190層",`BOSS: 爆彈怪教父
這個BOSS和90層的類似，但是顏色是相反的。這也意味著你要殺死藍色爆彈怪(治療爆彈怪)並把紅色爆彈怪(熔巖爆彈怪)打到boss邊。注意如果你被地面爆破打到或藍色爆彈怪炸到，你會被凍住，你沒有
魔陶器 強化防禦的話基本就死了。這個BOSS的順劈烈火怒罵超級疼，沒有魔陶器 強化防禦就是一下12k。所以你們不帶T或你是單人的話一定要在下一個順劈之前穩定好血線。
單人：
你沒用魔陶器 強化防禦就打過189層了？那可太秀了！如果你有三個魔陶器 夢魔化，那就現在都用了吧。順利的話，一個魔陶器 強化防禦就可以打死它。然而不要開著魔陶器 夢魔化開怪，你可能會正好吃到個順劈然後死掉。在BOSS連續兩次釋放地面爆破時會有短暫的視窗期 好機會！小杜！ ，就在這時使用吧。`],["死者宮殿 地下191～200層",'最後的衝刺階段了。希望你預留了足夠多的魔陶器 視野和魔陶器 咒印解除來淌過這最後幾層，或者有足夠的魔陶器 重生來處理誘餌陷阱。這些怪物不如180層的那些有威脅，但這並不是說他們打人不疼，因為他們大多數還是"一拳超人"。然而你使用魔陶器 基路伯化后，三下可以打死大多數小怪。注意這層大多數怪物都是靠近感知的，所以你不能溜過他們。深宮守衛(巡邏怪)是聲音感知的，所以你可以站著不動或走著繞過他們。一定要躲開他們，因為他打人太疼了。再重複一遍，這裡的怪打他們不需要技巧，但是他們打人很疼。你需要時刻注意不要引到巡邏怪來保證你不會一打二。(除了深宮幽靈)大多數都處於中等+的難度，你不用魔陶器 強化防禦根本打不過。'],["死者宮殿 地下191～200層",`單人：
如果你有魔陶器 寶箱增加，早敲早好。大致思路如下：
191-193層：不用任何道具，殺深宮木乃伊、深宮寒冰陷阱草和奧尼克斯龍。
注意：如果沒有可以風箏的房間，那麼和深宮木乃伊或奧尼克斯龍戰鬥時要尤其尤其尤其小心。你如果必須站定著和他們打，那一定要小心自己的血線。(如，深宮鐵面腐尸在附近遛彎時)
多注意在附近巡邏的深宮鐵面腐尸，你引到了，他們就會一下殺死你。如果你還是不小心引到了，你就必須要用魔陶器 強化防禦/魔陶器 形態變化或向隨機數產生器之神祈禱他不暴擊。
194-196層：打奧尼克斯龍和深宮幽鬼之眼，可能會有些你溜不過去的怪，你如果一定要打的話，用魔陶器 強化自身和魔陶器 強化防禦。爲了最大化魔陶器 強化防禦的效果，你最好始終一起使用。這幾層的速度和你有多少魔陶器 強化防禦。
197+：如果你有減少敵人，那就在進入這幾層之前使用。你用魔陶器 基路伯化可以輕而易舉的殺死這些小怪(大概三下，深宮貪吃鬼和深宮幽靈還會被眩暈)，但你沒有魔陶器 強化防禦的話，這還是有些危險的。用魔陶器 基路伯化殺小怪可以節約你寶貴的魔陶器 強化防禦的時間，當然，也別忘了任務時間。
https://nga.178.com/read.php?&tid=14509371&pid=285728311&to=1`],["影之國",`BOSS 1 虛空死亡凝視
長方形場地前後（船頭船尾）是安全的，兩側會掉下去（有 BOSS 的方向）。
BOSS 讀條虛空即死，同時場中央會出現紅黑色的圈，把玩家往中間吸，所有人要盡全力向外跑，一共會吸 2 次，第二次吸完立刻判定，所以第一次跑慢的人就跑不出去了。
讀條虛空暴風同時場地中央出現旋風圈，所有玩家站在旋風邊上，判定時旋風內的玩家即死，其餘玩家被吹飛，要保證自己能被吹到船頭船尾，否則就會掉下去。
虛空冰澈 + 虛空飆風，場地上出現距離衰減提示，玩家需要向距離衰減的落點對側方向移動（比如衰減落點在左舷，那麼玩家需要去到對應方向右舷位置），落點會落下大冰塊，冰塊落下後 BOSS 會開始讀條吹風，需要讓冰塊擋住玩家，否則就掉下去了。
其他的出啥打啥有啥躲啥，BOSS 讀條死亡宣告會隨機點名 2 名玩家上 死亡宣告，需要治療驅散（詩人也可以用 光陰神的禮讚凱歌驅散）。場地上會逐塊變黑，當場地全部變黑並最後一次判定虛空極死時就是團滅。
BOSS 1 ~ BOSS 2`],["影之國",`BOSS 2 虛空弗迪亞
藍色阿托莫斯連線環，黃色阿托莫斯連線球。無連線的藍色阿托莫斯腳下安全。
核心機制 1 蟲洞，BOSS 會放出若干個阿托莫斯（場邊的怪），並且有跟它連線的球或環。球或環表示近身 AOE（遠離安全）或週身 AOE（腳下安全），而實際 AOE 出現的位置是沒有連線的同色阿托莫斯。因此如果有環，則先看與環連線的阿托莫斯顏色，然後去沒有連線的同色阿托莫斯腳下；如果沒有環，遠離沒有連線的阿托莫斯；如果兩個都是環，隨便去哪個沒連線的腳下。
核心機制 2，弱點產生，所有玩家會獲得 火屬性耐性大幅降低或者 水屬性耐性大幅降低，同時場地上出現水 / 火的機關，需要把機關踩成與自己耐性相反的屬性：如果是火耐性降低，那麼需要把所有機關都踩成水；如果是水耐性降低，則需要都踩成火。遠位通常由遠端負責，近戰注意打身位的時候不要反覆踩機關。AOE 傷害與機關錯誤數量成正比，如果錯的太多就會團滅。
其他的出啥躲啥有啥打啥。`],["影之國",`BOSS 3 斯卡哈
BOSS 伸出兩條絲帶並讀條陰影迴旋時，注意向沒有絲帶的方向躲避。
有兩個比較難躲的技能：陰影重擊讀條後會隨機跳躍一個地方，不要追，會立刻有近身範圍 AOE。 陰影直刺隨機點名一名玩家放直線 AOE，注意看面相躲避。
手形小怪會隨機連線 2 名玩家，只要面對小怪（連線變為白色），小怪就會停止移動，其他玩家趁此機會擊殺。如果連線玩家背對小怪，小怪就會不斷接近玩家，撞上之後玩家即死。
場地變紅的時候不要移動，否則會中 debuff 影之腳鐐，移動速度大幅降低，很難躲避後續機制。
當出現距離衰減 AOE 時，MT 帶 BOSS 遠離落點，落點會出現小怪康拉，需要有一名 T 拉住康拉，遠離 BOSS，其他人轉火擊殺（康拉與 BOSS 距離過近會給 BOSS 上增強 buff，非常危險）。
被紅黑色大餅點名，同時週身出現黑圈的玩家，需要帶球向後場躲避（其他人注意避讓），這個技能範圍極大，傷害也比較高，要注意。
場地上出現圖騰時注意需要有人去踩（圖騰邊緣發光證明踩上了），中央的大圖騰傷害比較高，建議由 T 去踩，但無論如何每個圖騰里都必須有人，否則極易團滅。`],["影之國",`BOSS 4 迪亞波羅斯
分為兩段，基本上出啥躲啥，場地上會召喚門，注意及時轉火打掉。
後半段和斯卡哈很像，暗影直刺是無範圍預警直線 AOE，同時還有大餅追蹤點名（這次是 3 個人），也需要踩圖騰。
需要注意的是紫色帶眼睛標記的分攤，需要玩家幫助分攤的同時背對，所以被點名的玩家注意不要太過靠近人群，防止誤傷友軍。
後半段場中央會出現一個帶特效的門，這個門不可打掉，需要進去把裡面的怪打掉（進去一個隊就行，外面還有其他門需要打）。
最後一個團滅點是場地上會出現紅色的晶球，要麼大家都躲開（但基本不太可能），要麼去把球撞掉，撞球會產生一個中等範圍的 AOE 傷害，而且比較疼，如果兩三個球撞在一起就極有可能團滅，要注意。`],["須佐之男殲滅戰",`開場 BOSS 放場地中央，BOSS 會有無預警超高傷害死刑，開場 1~2 個 GCD 后MT 開大減傷，之後請治療全程注意 T 血，應儘可能維持在 80% 以上。ST 在仇恨穩固后可以開啟盾姿，以便倒 T 后第一時間接仇恨。
所有人在打BOSS的時候儘量不要離BOSS太遠。BOSS會隨機點名一名玩家，並吹飛他，然後他身上還會出一個分攤。
建議是被點名的玩家到 BOSS 側面或者正面 (吹飛距離比較短，容易回來) 等著被吹飛，吹飛之後第一時間回來跟大家分攤（你要願意死在外面也是可以的（
另外如果被點名的玩家發現自己，BOSS 和場邊的雷雲在一條線上，請注意轉個位置被吹飛，否則請治療開始抬血（
P2 是擋刀階段，MT 在場地中央等著接刀的點刷出后，右鍵上前擋刀（這裡是 QTE 玩法，只要臉滾鍵盤就行了，注意不要按到 Ctrl、Shift、ALt、Win、回車等功能鍵（否則後果自負……（如果 MT 不會擋刀，只要是高等級同步下來的，過去擋也沒事）ST 在場地 2 點邊緣等著撞球，按順時針方向依次是 2 點、4 點和 9 點三個球都要撞掉。其他人在 MT 身後輸出大刀就可以了～擋刀要進行兩次。
擋完刀之後離開中場（小島被一刀兩斷），和一開始一樣繼續輸出即可。中間會有玩家被點名石牢，石牢變為可攻擊之後，所有人轉火仇恨列表 BOSS 之上的那個石牢（如果 BOSS 在列表第一個，就打列表最後一個），如果在石牢讀條結束后仍沒有救出你們的隊友，你們就會永遠失去他。`],["歐米茄時空狹縫 德爾塔幻境1",`BOSS 會全程使用名為太古龍尾的無讀條扇形順劈，對MT 造成大傷害，開怪后可立刻開啟小減傷，治療時刻關注 T 血。其他人注意遠離 MT。
這個 BOSS 主要會在場地中放置火球，火球過一段時間之後會變大，形成範圍 AOE。
第一次火球是場地中央 4 個，讀條咆哮時遠離火球即可。
第二次是場地周圍，然後 BOSS 消失並出現在場邊，讀條風息之翼；這個技能會把火球吹飛，BOSS 出現在場邊時貼近 BOSS 即可。
雙重落雷是對 MT 及距離 MT 最近的一名玩家釋放的雙人大傷害，ST 請主動靠近 MT 分攤，避免劈到其他隊友。
冰凍場地 + 雷圈 + 分攤，場地出現寒氣時請互相遠離，完全凍結後會變成滑冰狀態，很難控制位置，放置完雷圈后滑回 BOSS 身後，從冰凍場地解除到分攤傷害判定還有一點時間以供調整位置。
之後 BOSS 會瞬移回到場中，讀條經典元素，會把之前的火風雷冰技能挨個用一遍。按順序是中央出現火球→火球被吹飛（所有人在場地中央集合迴避火球）→出現電圈（所有人等周圍火球爆炸后立刻貼邊放置電圈）。
接下來火球是先內場后外場（帶吹飛），BOSS 出現到場邊后立刻靠近 BOSS。
大漩渦，會將全體成員血量將至 1，治療注意立刻為團隊抬血，接下來是一個全屏 AOE。
第二次經典元素的順序是場邊出現火球→中央出現火球（所有人觀察中央的 4 個球，站在相鄰兩球之間）→吹飛 + 場外火球爆 + 場地冰凍（如果之前站位不好的人注意調整位置）→被吹飛的內場火球爆→分攤（所有人回到 BOSS 身後準備分攤）。
之後基本都是重複之前見過的技能組合，冷靜應對見招拆招即可。`],["歐米茄時空狹縫 德爾塔幻境2",`進本後有個專屬任務技能反重力裝置，在戰鬥中會經常使用，所有人開怪前先使用一次， 浮空。
BOSS 會對 MT 有無預警正面扇形順劈詛咒波，所有人不要到 MT 正面來。只要是 浮空狀態就可以無傷應對大地震，反之有可能陣亡，要注意。另外發生 下陷的時候，也可以用空反重力裝置浮解決。
BOSS 的邪球是對 MT 死刑傷害，注意開好減傷和回覆。
當 BOSS 讀條重力操縱后，會有一名玩家被附加 固定高位或 固定低位，同時出現分攤標記，當發現分攤標記在高位時，就需要使用反重力裝置浮空才能參與分攤。
核心機制觸手亂舞，場地四周會出現 4 個紅色的標記，過一會會鑽出觸手來，並且觸手上方出現藍眼睛標記。部分觸手上方的眼睛標記過一會會消失，此時遠離仍然有眼睛的觸手即可。眼睛觸手的 AOE 範圍非常大，最後一次會只有 1 根安全觸手，在安全觸手外側躲避才能躲開。
核心機制 2 暗黑光，場地上會出現若干個黑 / 黃球，同時 BOSS 會有背對機制。黑球在地面上，對應普通高度，黃球在半空中，對應浮空時的高度。
4 個黑球：使用反重力裝置並背對 BOSS。
4 黑 4 黃：在場地正中央黑球的縫隙之間安全，不要使用反重力裝置（浮起來會被黃球炸到），同時注意背對 BOSS。
3 黑 3 黃呈一條線：無球地方都安全，但接下來是一組擊飛 + AOE 的 combo，治療注意落地及時回血。
4 個黃球：會同時出現 下陷或讀條大地震，等光球判定結束（動畫出現）后立刻使用反重力裝置躲避接下來的技能。`],["歐米茄時空狹縫 德爾塔幻境3",`開場后 BOSS 立刻轉身讀條呱呱呱呱呱！，讀條結束後會把正面扇形 150° 範圍內的玩家變成呱（請繞背側躲避）。
在一段技能演示后（出啥躲啥），BOSS 讀條遊戲盤面，場地中的地磚會變為不同的圖案，第一次是職能圖示，按職能站（有 2 個 DPS 格子，裡面都要有DPS）。
場地翻為藍色盤面后，觀察有一條對角線上的地板與其他地板不同。玩家需要站在這條對角線上的格子里躲避女王之舞（儘可能一直在安全格子里）。之後場地東北角會刷出一隻小怪，ST 去把小怪拉住，由於小怪會正面扇形 AOE，ST 注意不要讓小怪臉朝人群。DPS 優先集火擊殺小怪，同時注意躲避 BOSS 技能。
速度正常的話，BOSS 會在小怪擊殺完畢後讀條精神控制：左轉／右轉／前進／後退，讀條結束后全員會被強制移動，玩家儘可能控制自己在安全地帶移動，並在強制移動結束后立刻移動到安全地區。
之後 BOSS 瞬移到場外，場地出現次元裂縫，玩家被吸進一個流沙迷宮。玩家踩進流沙后，會按流沙方向強制移動，第一步向遠離終點的格子走（比如左手邊正對終點，那就走右手邊）。如果迷宮走得快，會獲得 傷害提高和 加速作為獎勵。走得太慢就會被流沙殺死（之後可復活）。
流沙出來后基本都是見過的技能，但都會組合出現。
神聖 + 強制移動：分攤的同時強制移動，所有人提前站在一起，就可以向同一個方向移動。
藍線 + 冰封：躲藍線的時候MT 不要帶的太靠里，否則冰封的 AOE 範圍會把安全格完全覆蓋。
盤面 + 呱呱呱呱：場地出現青蛙格子，玩家需要去找 BOSS 正面變青蛙。`],["歐米茄時空狹縫 德爾塔幻境4",`開場點名 2 人可驅散的 死亡宣告，治療注意使用 康復。
BOSS 會使用 3 個屬性技能：
冰封：AOE，躲開即可
暴雷：對 MT 的範圍死刑，MT 注意開好減傷，其他人注意不要離 MT 太近。由於會附加 雷屬性耐性低下debuff，超過 2 層之後建議換 T。
爆炎：隨機點名圓形 AOE，被點名玩家注意互相遠離
然後 BOSS 會抬手與場邊的黑洞連線，連線后屬性技能會被強化：
冰封：暴風雪，保持移動，否則會被凍住
暴雷：近身 AOE，所有人遠離 BOSS
爆炎：全屏 AOE 附帶 熱病，不停手就會掉血，等熱病時間結束之後再抬血。
之後判斷屬性技能的型別僅看讀條時，BOSS 與黑洞是否有連線。
真空波：讀條結束后擊退，可防擊退處理。
神聖：分攤
BOSS 讀條決戰後，玩家先前往場邊迴避距離衰減，然後躲開場中央冒出來的腦袋（繞背側）。同時場地的圍欄炸碎，注意別掉下去了。
核爆：3 名玩家被點名頭頂白色三角箭頭，互相遠離（同時遠離人群）
隕石：做好減傷
黑洞：場地上出現黑球，不要碰到。
同時照 P1 處理 3 種屬性的技能即可。`],["失落之都拉巴納斯塔",`BOSS 1 背德皇帝馬提烏斯
場地上出現冰環地面之後，玩家需要打掉冰塊，撞掉小水球，踩掉噴泉環（需要至少 3 人踩，不踩的話會變為冰塊並連線玩家，如果冰塊不及時打掉，被連線的玩家就會被凍住）。撞過水球的人記得不要被冰環地面上滑冰的小怪碰到，否則也會被凍住。
場地上出現一堆蛤蟆的同時，玩家身上出現 呼吸困難debuff 並不斷增加層數，當 呼吸困難時就會窒息而亡。打掉蛤蟆會出現水泡，進入水泡可以清空層數，注意時不時去碰一下泡泡。中途有可引導方向的 AOE 提示，注意引導不要讓 AOE 穿過泡泡。
如果打的慢還會出現 3 只小怪，各隊T 注意把小怪拉開（太近會有連線同時有全場 AOE 無法擊殺）。`],["失落之都拉巴納斯塔",`BOSS 2 統治者哈修馬利姆
進門南場標 A，左上（西北）標 B，右上（東北）標 C 用於分隊站位。這個 BOSS 傷害較高，治療優先保證隊友存活。
石刃是對MT 的正面扇形順劈 AOE，非常疼，MT 自己要開好減傷，其他人注意不要被掃到。
地面出現黑色圓形之後升起一個石塔，BOSS 會將其切斷並按斷面方向倒下。注意不要踩黑圈，並躲開塔倒下的方向（與金碟機遇活動快刀一閃類似）。
BOSS 跳到場邊之後，一側手會帶有火焰特效，著火一側的半場都是危險的，去另外半場躲避（BOSS 本身也是危險的，所以實際安全區域只有大約 1/3 場）。
中央出現大塔之後，所有人按 ABC 方向移動，會出現沙球小怪，需要集火擊殺。
如果打得慢還會出現石頭人小怪，需要集火擊殺，推薦遠端放 LB 解決。`],["失落之都拉巴納斯塔",`BOSS 3 人馬王洛弗卡勒
進場按北、東南、西南標 ABC，用於分隊站位。後半段會有滿地的 AOE，所有人優先跑位處理機制。
星天暴擊打：會給 MT 上 物理受傷加重，然後接一個大傷害，注意開好減傷。
人馬戰車：點名一名玩家衝鋒，建議被點名玩家靠近 BOSS，傷害不會很疼，接下來會有個很恐怖的半場 AOE，跑太遠容易 23 殺。
蹂躪：BOSS 延 8 字形環繞，推薦站在 BOSS 側面靠外一些（讀條快結束時才會出現 8 字軌道範圍提示，很容易被撞上）。
小怪階段各隊按標點進圈（有結界，需要站在結界里）打小怪，BOSS 同時會沿外場轉圈（並撞飛玩家），T 儘可能讓小怪面向場外，其他人儘快擊殺小怪。
小怪擊殺結束后，BOSS 會螺旋上升，到最高點時會開始蓄力衝鋒，觀察 BOSS 位置向左右兩側跑到場邊可無傷處理。也可以在場地中央放減傷硬吃（沒減傷必死）。
後半段戰鬥與前半段相似，只是多了擁抱，場地上會出現若干個藍色陷阱，踩上陷阱之後，陷阱會擴大為 BOSS 圈那麼大的爪子，並把範圍內的玩家禁足，如果其他人不及時打掉爪子解救他們，他們就會被絞殺。在躲避機制時務必不要踩到。
全場變黑並出現暗黑魔法陣時，需要滑鼠右鍵關閉魔法陣（踩圈是沒用的）。`],["失落之都拉巴納斯塔",`BOSS 4 冷血劍阿加斯
核心機制處理錯誤會被附加 驚慌失措debuff，積累 3 層 驚慌失措之後會變為 弱雞，不受控制滿地亂跑的同時受傷加重（很容易暴斃）。
核心機制 1：神之啟示。螢幕上會出現天使（白色）或惡魔（青黑紅眼）的臉，BOSS 身上有白色或黑色的假面環繞，並自身附加 真神面具或 偽神面具buff，同時玩家會被賦予 不可直視或 持續行動的 buff。如果是白色天使表示與要求一致，而黑色惡魔表示需要反其道而行之。也可以記口訣天使背對移動、惡魔面對停手。
連線小怪推薦全堆在一起 AOE，會比較好打。
核心機制 2：喪失之痛。玩家頭頂會出現旋轉的手指游標，並附有 精神失常debuff，此時玩家按下任何方向鍵，都只能按照頭頂手指的方向移動。可以觀察頭頂手指方向按鍵控制移動，也可以連續按下方向鍵來微調移動方向。
其他儘可能出啥躲啥即可。`],["白虎鎮魂戰",`DPS只需要出啥躲啥即可，BOSS召喚小老虎之後，會點目前T一個距離衰減AOE（T身上有個巨大的白色向外指的箭頭）注意遠離即可。 治療注意==風雷波動==是AOE，而==天雷掌==是對T死刑，如果T沒有及時開出減傷需要多加註意。另外小老虎的順劈很疼，治療可以稍微多奶兩口。小老虎最後的長讀條是一個血量衰減AOE（即怪所剩血量越高，傷害越高），因此如果發現你們的DPS不給力，小老虎血量比較高，在讀條結束前多做一些減傷。 MT開場BOSS拉場中背對人群，天雷掌讀條注意開減傷。P1中途BOSS會召喚小老虎，這裡在極白虎中需要ST拉住帶走的，不過真白虎沒有這個需求，2T可自行協商。但要注意，拉小老虎的T要開啟減傷，萬不可裸吃，裸吃治療會報警。 所有人看到分攤標記務必去分攤，地上紅的黃的黑的一概不要踩。
P2 全體飛上天空，是一個帶 ACT 特性的彈幕躲避小遊戲，躲開下方的球（推薦視角調高俯視觀察）、BOSS 的旋踢（BOSS 近身安全）和橫向的直線俯衝即可，另外此時場地邊緣是即死線，撞線即死，請注意。
在 P3 會出一種米字擴散雷，表現爲先出 4 個圈（排成十字），然後再出 4 個圈（是個 X 字，合起來看起來是個米字），破解方法是先在 X 字的 4 個圈外面等著，等十字的圈炸完第二下（炸表現是個電圈）向左右兩側移動，即走到十字圈的後方（說起來很複雜實際進去看一下就懂了）。
其他沒什麼要注意的了。
◀ 返回
為`],["歐米茄時空狹縫 西格瑪幻境1",`BOSS 無面向，近戰可隨便打。
距離衰退傷害基本上超過半場就安全了，不用非得跑到底（除非你裝備特別差）。
追光燈（地上巨大的白光）會把場地上的幽靈打掉，另外聚光燈本身的傷害也會對玩家造成傷害，當看到聚光燈固定且出現魔法陣后，應及時離開魔法陣區域：
四方塊幽靈：推薦照前場的幽靈，幽靈打掉之後活動空間會寬裕一些。
連線幽靈：被連線玩家圍著幽靈繞圈（稍微大一點圈，讓幽靈保持接近不動的狀態），被點追光燈的玩家把燈放在幽靈腳下（未被連線的玩家可以碰這個幽靈）
列車左右出現幽靈時，需要走位躲避，不要被幽靈撞上，否則會被傳送進小黑屋，打掉裡面的幽靈才能出來（DPS 損失）。
隨機點名 2 名玩家帶距離衰減特效時，被點名玩家將點名放在車尾最遠處（點名消失後立刻返回前場），其他人正常輸出。
小怪階段，車板旁邊會追上來一節車廂，跳下來一堆小怪，打掉后出現傳送點，從傳送點跳上去一路跑向車頭，會看到魔煙囪。打掉魔煙囪后彈回車板，場邊再次出現幽靈，此時一人撞一個幽靈進入車廂（如果不進去會 窒息而亡）。
從小黑屋出來后，BOSS 會清仇，MT 注意重新建立仇恨。同時 BOSS 會開始出現複合機制：
酸雨 + 連線幽靈：正常處理，治療關照一下被追光燈打到的玩家。
幽靈 + 追尾：提前後撤，防止擊飛時撞進幽靈懷裡。`],["歐米茄時空狹縫 西格瑪幻境2",`場地四角立有 4 副畫，每幅畫前面的地上還有另外一幅畫，同時玩家會有任務技能。站在畫上使用任務技能，可以獲得各種各樣的效果，用來處理機制。
開戰後過一小會 BOSS 才會出現（有倒計時開爆發需求的玩家要注意），BOSS 無身位，可隨便打。
第一幅畫連線火焰：踩火焰前方的畫，使用任務技能，獲得 火屬性耐性提升效果（BOSS 要讀條結束→飛到畫前喊話，喊完話才會出傷害，不要過早去涂）
第二幅畫連線巖石：踩巖石前方的話，使用任務技能，玩家會騎上小飛機，躲避接下來的地震（這次 BOSS 飛過去就判定了）。另外 BOSS 還會點名 2 名玩家放追蹤型 AOE，被點名玩家注意離開人群在外場兜圈子。
第三幅畫連線水：只要有 1 名玩家涂水前方的畫，就可以立起巖石，阻擋海嘯（注意海嘯來的也比較晚，不要過早立巖石），其他人注意躲在石頭後方輸出。
第四幅畫連線風：所有人到風畫所在的場地角落，1 名玩家（通常是治療）踩風前面的畫，變為提豐老師，可以使用提豐的鼻息技能，將場地上的風球吹走，注意只吹團隊附近的 2、3 枚就可以了（時間上最多允許吹 3 枚）。之後會出現連線（遠離）和分攤（靠近）。
第五次同時連線水 + 火：先涂火的，再去水前面立石頭。
第六次同時連線火 + 巖：先涂火，再去巖石前面上飛機。
每次進畫前後都有 AOE 惡魔嘯和對 T 死刑惡魔斬，T 注意開好減傷，治療注意回覆即可。`],["歐米茄時空狹縫 西格瑪幻境3",`機制核心是背景板上的顯示器。另外還有常見的死刑（臂錘）和 AOE（擴散離子）
開場魔導鐳射，無預警正面直線 AOE，看到讀條后躲開 BOSS 正面。
玩家頭頂紅色點名：有減傷可以自己開，不用特地回避人群，注意抬血。
BOSS 讀條載入並連線場外顯示器時，證明開始出現特殊機制：
武僧怪（達達魯瑪）：
全場 AOE + 擊退（可開技能防擊退）
8 個鬥氣圈（需要 1 人踩 1 個，建議MT 在擊退後將 BOSS 放在場中央，4 名近戰踩中央的圈，4 名遠端踩場邊的圈）
達達本體出現（ST 拉住）
BOSS 會讀條正面鐳射，打達達的時候要注意。
圖書怪（永世珍本）：
和圖書館一樣，出現圓形法陣，按 3 人一圈依次踩滅即可
圖書本體出現（ST 拉住），注意躲避 BOSS 鐳射擊殺圖書（治療注意抬血）。
章魚（奧爾特羅斯）：
點名玩家腳下出現 AOE 圈
全屏 AOE
點名玩家出現章魚腳（並釋放直線 AOE）
章魚本體出現（ST 拉住）
BOSS 起飛並隨機點名玩家位置進行掃射（ST 觀察空中 BOSS 的面向，將章魚帶到不會被波及的方向擊殺）。
小飛機（空軍裝甲）：
BOSS 腳下 AOE（遠離 BOSS）
【（不一定每次都有）出現小飛機（ST 拉住，帶到 BOSS 腳下擊殺）】
場外出現小飛彈（觀察飛彈方向並找縫隙躲避，雖然它飛的很慢但總是能撞上）
拆彈（天上掉下來兩個定時炸彈，等 3s 后炸彈上方出現倒計時，同時與倒計時同色的引線開始發光，踩進同色 / 發光引線就能順利解除，不會處理的玩家不要亂踩。如果炸彈掉到人群附近，T 可以適當調整位置）。`],["歐米茄時空狹縫 西格瑪幻境4",`建議北場標 A 分辨方向。場地沒有護欄，當心跌落。
開場超驅動對MT 範圍死刑，範圍不大，但是也別太近。
BOSS 的核心技能都有 2 種模式，在 BOSS 讀條時身邊會圍繞的球球，藍球球（ 真實的小丑）表示範圍提示是真的，按提示躲避；紅球球帶問號（ 虛偽的小丑）表示提示是假的，紫紅色地板上也會畫滿了問號，踩上去就對了！另外呼啦啦爆炎（頭頂紅色點名 / 分攤）的處理方式是真的按標記分散 / 抱團，假的則要翻過來抱團 / 分散。
核心機制 2：眾神之像，讀條后北場會升起巨大的神像，每個神像機制一致，BOSS 打到一定血量后，玩家會向上升，進入下一個神像的機制（BOSS 每次讀條眾神之像之後，石像就會放對應的機制）：
場地左 / 右會出現一個風球，在看到條形 AOE 預警后找風球腳下等待被吹飛（可開防擊退），風球有可能會中途換手，不要提前跑。
石像上會出現黃色 / 黑色的球：向無球一側（半場）躲避。
石像上方會出現大眼睛標記：紫色眼睛需要背對石像，黃色眼睛紅問號需要面對石像，同時需要處理對 BOSS 的機制。
其他機制：
場地出現 2 個黑圈，讀條跳蹦蹦傳送：去場邊黑圈靠近場外的一側，BOSS 會傳送到場邊黑圈上，並向場內放 150° 範圍 AOE（不一定每次都放）。黑圈和傳送光柱特效都可以踩，無傷害。
讀條疼颼颼暴風：以 BOSS 為中心擊退，可以開防擊退技能處理（副本擊退頻繁，請關注好技能 CD）。`],["火龍狩獵戰",`火龍是聯動 MH（怪物獵人）的副本，BOSS 是 MH 非著名勞模雄火龍，打法與普通副本有所區別，還請多加註意。
火龍沒有讀條，所有的技能需要由火龍的動作判斷，同時進入 P3 之後，將無法接受治療，只能通過使用回覆藥：大來回血，由於聯動活動同樣移植了喝藥的動作，因此使用這個回覆藥所需要的時間，比我們通常使用道具所花的時間要多一些，需要注意。
火龍沒有仇恨，因此誰來開怪都可以，他的主要攻擊模式有：
吼叫 + 龍車：火龍會先向某名玩家伸頭吼叫，然後立刻衝向該玩家，如果發現龍吼了自己的方向，注意兩側躲避。
撕咬 + 甩尾：側身歪脖，前咬甩尾。
噴火：仰脖，會有一名玩家被點名火圈，這個火圈可以用來砸小怪。
原則上近戰只要站在火龍左腳後跟輸出即可。
小怪階段T 拉住小怪仇恨，可以一起帶到 BOSS 身下，被 BOSS 點名的玩家可以把點名帶到怪堆里，讓 BOSS 的 AOE 幫忙打小怪。
小怪階段結束后，會有一頭牛撞暈火龍，需要有一名玩家上龍（點選龍頭前方的騎乘攻防即可），剩下的玩家攻擊巨牛，需要有T 拉住牛的仇恨（有正面順劈，注意面向），在時間結束內打掉巨牛，用牛的屍體擋住接下來轉場 BOSS 的噴火。注意關注一下上龍玩家的血量，如果龍背上的玩家沒血也是會出事的。
BOSS 噴火之後進入 P3，所有人獲得 火龍領域buff，此時治療將無法治療隊友。
此時 BOSS 變成飛行姿態，龍車不再有預警，受到的傷害降低，另外 BOSS 還有正面扇形噴火，因此無論何時都要躲開 BOSS 正面方向。
火龍受到一定傷害后，會從天上掉下來，此時火龍受到的傷害增加，同時可以進攻火龍的尾巴，打掉尾巴會對火龍造成巨大傷害。推薦先打本體，等倒地時間快結束的時候打掉尾巴。
打完后需要手動從火龍身上剝鱗片，注意不要手快出本。`],["火龍上位狩獵戰",`和普通火龍一樣，除了人數減為 4 人，機制上唯一不同是有 3 貓滅的機制（就是全團不可戰鬥人數超過 3 人則視為戰鬥失敗，需要從頭開始）。
其中動作組比普通火龍多了週身甩尾，動作為抬屁股低頭，右側 180 度 AOE，同時這個技能會連放 2 次，需要注意躲避。另外還有後跳噴火，注意躲開正面。原則上左腳後跟永遠是安全的。
小怪需要MT 拉住仇恨打掉，否則會對團隊造成威脅（可以拉到 BOSS 身下，被點名玩家靠近怪群，讓 BOSS 的點名 AOE 去打）。
中場巨牛要注意面向，順劈很疼。注意關注一下上龍玩家的血量。
P3 集中在火龍身後輸出，分攤技能只要有 2 人分攤即可，分攤會留下一灘火球，儘可能貼邊放置。治療雖然不能加血，但是可以積極驅散各種 debuff。
火龍落下後會自帶易傷，推薦此時交各種爆發，同時由於這個易傷的存在，建議略微延後尾巴的擊殺時間（或者等火龍第二次落地之後再打掉尾巴），因為尾巴被打掉后火龍就會立刻起飛，浪費易傷輸出視窗期。`],["天之御柱 1～10層",`亡者船
回到場中並使用全屏擊退(無法用沉穩躲避)，緊跟一次半場aoe。`],["天之御柱 11～20層",`別蝶
會使用各種技能來使你恐慌，同時在場地邊緣召喚蝴蝶。蝴蝶會使用無範圍提示自爆，恐懼會讓你往墻上走，務必躲開。`],["天之御柱 21～30層",`蛭子
召喚雷雲並在一段時間后爆炸，同時在中心吟唱遠離aoe。跑到邊緣並避免被多個雷雲劈中。如果你被擊飛上天，雷雲就會消失。他也會釋放半場aoe，所以要保持一個始終的安全距離。`],["天之御柱 41～50層",`牛頭
有一個無範圍，無讀條有前搖橫掃和直線攻擊，如果你看到它突然轉向T，請遠離這條連線。他還有一個邪眼技能，並在召喚黑色aoe球時吟唱距離衰減aoe。單人時，恐懼必定死亡，所以不要貪。
技能時間軸
無範圍提示橫掃
無範圍提示直線(對隨機目標)
恐懼
召喚黑球、距離衰減
重複`],["天之御柱 61～70層",`犬蠱
每隔一段時間就會對一個玩家使用縮小球，並在地板上留下一灘口水。踩進口水會有縮小debuff，你需要用這個debuff來躲避他的地獄沖。如果你沒有這個buff，那就會被秒殺。在boss撕咬完你之後，務必走出這攤口水，否則之後的aoe會很疼。同時，坦克也要注意無範圍提示的前方順劈，這個技能是循環的第一個技能。Boss如果咬死一個人，它就會有傷害提升buff並回復較多血量。`],["天之御柱 81～90層",`溫羅
Dps和奶媽裸吃boss平a傷害為10k。
起初會有幾個aoe，血量到85%時會開始以下列順序使用技能
古代爆震：全屏最大hp50%傷害
地圖隨機出現爆炸巖石，過於接近會受到10k傷害並被附加沉重debuff
隕石衝擊：在boss位置召喚一個隕石(距離衰減傷害)
鬥氣炮：直線aoe
燃燒咆哮：點名一個人的圓形aoe
指壓：boss為圓心的aoe
在場地的東北角有一個安全點，因此坦克需要將boss拉在西南側。當你看到古代爆震讀條時，迅速跑到東北側，那裡永遠不會有爆炸巖石。由於boss在西南側，所以距離衰減aoe隕石衝擊只會造成10k左右的傷害。 `],["封閉聖塔黎鐸拉納大燈塔",`BOSS 1 暗黑之云法姆弗里特
      這個 BOSS 要關注它頭頂上的水瓶（平時是扛在肩上的，當它要使用技能時，會把水瓶舉到頭頂），BOSS 會向水瓶瓶口方向釋放扇形 AOE，被衝到就很容易涼。治療可以多關照一下跑錯的隊友（或者營救）。
      喊話 「水瓶啊，一路前行降下大雨吧！」 時，場邊會出現 3 個水瓶，沿場地直徑橫穿場地。喊話 「水瓶啊，描繪圓弧降下大雨吧！」 時，場地內會出現 3 個水瓶，分別按順時針、逆時針、順時針旋轉，注意躲避。
      頭頂出現紅色倒三角點名時，務必互相靠近（最少倆人抱一起），判定時若是孤身一人則會被擊飛並獲得 受傷加重debuff。
      基本上完全是出啥躲啥（躲不躲得開就另說了……`],["封閉聖塔黎鐸拉納大燈塔",`BOSS 2 魔人貝利亞斯
      場地上出現旋轉的鐘表時，站在轉的慢的鐘上，等轉得快的炸了之後過去，轉的慢的再炸。
      BOSS 去場地一角準備衝鋒時，衝鋒路徑上會有一個格子里有箭頭，BOSS 會在箭頭格子轉身，向箭頭方向再衝一次，觀察好路徑冷靜躲避。
      鐘錶指針和玩家連線時，被連線玩家靠場邊並不要亂動，連線穿過其他玩家會導致石化。
      小怪階段三隻拉開即可（太近會連線）。
      打完小怪後會出最後一種機制，場地落下 4 個指針，指針接觸地面的圓形圈裡還有個小指針，踩一次圈會讓小指針轉 90°，踩圈讓所有小指針均指向場外即可。`],["封閉聖塔黎鐸拉納大燈塔",`BOSS 3 勞動七號
      部分技能沒有範圍提示，需要熟練掌握 13 以內加法。
      執行粉碎：BOSS 近身範圍 AOE，看到讀條就遠離 BOSS。
      執行清理：正面扇形掃射，而且會隨週身箭頭指示方向連續掃射，速度較快，建議貼緊 BOSS 跟著跑。
      數學題時間：BOSS 讀條執行減法后，玩家的血量會被壓縮為 10 以內的自然數，同時場地上出現 4 個圈，玩家需要觀察讀條，並站在對應的圓圈裡處理（比如讀條算術：4 的倍數，若此時玩家血量為 3，那麼站在 1 點的圓圈裡；若玩家血量為 8，那麼站在所有圓圈外即可）。判答案時間以讀條結束為準，就是因為有連這麼單純的數學計算都會出錯的傢伙設計守護者，守護者才會馬上就失去控制的！ 答對可以獲得 回答正確，答錯則會獲得 回答錯誤，答 錯 可 是 公 開 處 刑 哦。
      算術結束后血量會恢復正常，治療注意立刻抬滿團血，馬上會有 AOE。
      小怪階段 3 個場地機制不同：
      A 隊磁極：被連線兩人互相遠離即可
      B 隊小飛彈：注意躲開場邊飄進來的小飛彈（飛的很慢，但就是撞得上）
      C 隊加速度炸彈：倒計時結束時必須停手，否則會被炸（平 A、移動也視為未停手）
      小怪結束后，BOSS 會讀條上 滅絕晶片buff，全身通紅，讀條速度變快、點名人數變多等等，冷靜處理即可。執行清理建議開疾跑，否則很容易被掃到。`],["封閉聖塔黎鐸拉納大燈塔",`BOSS 4 鬼龍雅茲瑪特
      進場在 2、6、10 點分別標 ABC，用於後面接小怪。
      推薦MT 把 BOSS 定在中場方便處理機制，對 T 死刑是以 T 為中心的圓形 AOE，其他人注意不要靠近。
      BOSS 抬起前腳蓄力，會向其面對方向使用扇形石化 AOE，注意躲避。
      讀條磁場崩壞之後，場地會分為正負二極，玩家也會獲得 磁場崩壞 正極或 磁場崩壞 負極buff，需要找與自己磁極相反的地面，把自己吸在地上，由於同時還有其他機制需要處理，因此記得優先處理機制，處理結束后回到正確的地面上。地面上的磁極圖示開始上浮表示磁場馬上開始判定了，站錯場地會被接下來的機制秒殺（丟出場外）。治療注意回覆團血。
      其他出啥躲啥有啥打啥即可，利爪是多段式突進，帶拐彎的，注意追車。小怪連線會無敵，各隊T 注意拉怪。`],["天之御柱 31～40層",`[怖軍]
      在場地邊緣產生風時，他會回到中間使用擊退aoe，把所有人推開，注意不要被推到aoe中。沉穩和親疏自行無效。`],["天之御柱 51～60層",`[忍冬]
      範圍提示，範圍提示，各種範圍提示。直線，圓形，甜甜圈形，隨便你怎麼叫吧！見招拆招就行。Boss讀條全屏傷害后，法杖會向多個方向發射直線aoe。
      單人
      對全屏傷害前的法杖環形aoe來說，中間大多數時候安全，但需要注意先在別處引導烈焰再回到中間。躲在中間對於躲避後續八個方向的直線aoe也很簡單。`],["天之御柱 71～80層",`[鍛冶媼]
      會召喚冰球，冰球在一段時間后無範圍提示爆炸。與此同時，還會出現一根冰錐，刺向房間中央。被刺中的球會爆炸，爆炸的球又會帶動周圍的球爆炸。冰柱出現時，一定要遠離這些球。Boss吟唱月下咆哮時，會引爆其餘冰球，單人時如果不慎被命中，就會被凍住然後死掉。月下咆哮之後會跳向一個目標，造成8k的傷害(凍住時秒殺)。除了以上這些，都很簡單。`],["國境防線基姆利特暗區",`BOSS 1 魔導巨兵三型 B 式
      出啥躲啥，T 注意死刑是正面順劈，不要帶到人了。打到一半，魔導巨兵三型 B 式會回到場地中央讀條魔導斬，並出現扇形 AOE 標記和旋轉箭頭，箭頭旋轉的方向表示 BOSS 接下來要砍的方向，所有人站到扇形反箭頭一邊，BOSS 劈下扇形攻擊后，會在地面上留下火焰區域，踩上去會有火傷。推薦看到讀條魔導斬之後靠近 boss，這樣就算跑錯了也容易糾正。`],["國境防線基姆利特暗區",`BOSS 2 普羅米修斯
      所有人開場後接近**普羅米修斯**站，開始沒多久就會有一個超大範圍AOE。BOSS潛入地下之後，所有人看場外的巖壁，會有一塊巖壁發紅發亮，BOSS會從那個方向發射直線AOE，以發亮巖石為正點，向左右兩側迴避(鐳射炮會持續幾秒，不要急著回場中)。後半段會有距離衰減AOE+鐳射炮的組合攻擊，優先躲避鐳射炮。`],["國境防線基姆利特暗區",`BOSS 3 安妮亞和茱莉亞
      安妮亞和茱莉亞，隨便先打哪個都行，出啥躲啥，不能迴避的技能請注意互相避讓 (不要重疊)。每打掉一個 boss 會出一次合體技，場地上會有非常細的黃色亮光線 提示 Boss 軌跡，貼邊躲避會比較安全。最後兩個 BOSS 同時登場並讀條滅團技，法系 / 物遠可以在這裡開 LB。`],["歐米茄時空狹縫 阿爾法幻境1",`開場 BOSS 放中央處理機制，躲過幾個 AOE 後會開始讀條大海嘯或炎爆，進入核心機制：
      大海嘯：場地左右兩側出現水，所有人 BOSS 腳下放月環（不要亂跑，會導致沒有安全區），2 次判定後會有 2 人被點名白色三角遠離箭頭，分別貼場地兩邊放置，最後放點名的地方出現水球和連線，2T 一前一後把線接走，開減傷。
      地震：T 把 BOSS 拉到最北端，治療讀條時儘可能佈置一些減傷，傷害比較大。會有 2 次吹飛（可開防擊退處理），然後是 2 組分攤，推薦在 BOSS 左右，分攤會出 2 次傷害，只要 1 個人不同時吃 2 個分攤就沒問題。最後是出啥躲啥時間。
      炎爆：只有場地中央安全，先是點名單人小圈（被點名靠外放），2 次點名后 2 組分攤（在 BOSS 兩側），最後出啥躲啥。
      氣旋：場地中央出現旋風，T 儘早把 BOSS 拉到西北角，其他人跟 BOSS 走，先是一次擊退（可開防擊退處理，也可以貼著旋風站，注意要沿場地對角線方向站），然後立刻接一個巨大 AOE（去 BOSS 身後躲避）。第二次吹飛后，點名2 名治療白色遠離街頭，治療分別一左一右放點名，最後 2T 接線即可。
      打完一波火風 / 水土之後，BOSS 會跳回場地中央讀條深層痛楚，讀條結束后全員 1 血（治療注意抬血）。之後出啥躲啥（月環建議集中站），同時擊殺掉場地中央的黑水晶，擊殺結束后 BOSS 釋放轉場 AOE 進入下半場。下半場為上半場未出現的屬性，比如上半場是水土，下半場則為火風。目前的 DPS 應該可以跳過最後一個屬性的機制。`],["歐米茄時空狹縫 阿爾法幻境2",`開場 BOSS 放場地中央。
      圖片來自 Chariflame @Reddit(opens new window)
      玩家需要通過觀察 BOSS 的旋轉方式判斷接下來的 AOE 形狀 / 範圍：
      橫→橫：遠離
      橫→豎：靠近（目標圈下）
      豎→豎：四角（BOSS 釋放以自身為中心，面向前後左右的十字 AOE，如果 BOSS 歪 / 轉了，那麼 AOE 也會跟著歪 / 轉）
      （零式難度有豎→橫的組合，普通難度沒有）
      隨機點名 4 人：互相散開不要重疊，未被點名玩家不要站在 BOSS 與點名的連線上。
      死亡輪迴：點名 1 人連續 4 次大傷害，集合刷血（點 T 可無敵單吃）。
      天光輪迴：隨機點名玩家放原地 AOE，看到讀條結束立刻移動即可。
      轉場后 BOSS 會有一次從北場來的俯衝 + 地上一堆火球，注意迴避。之後重新整理一隻小龍和一堆柱子，MT 帶小龍去場邊面向場外，其他人集火輸出柱子，打掉所有柱子后可解除小龍的無敵，擊殺小龍。小龍有大量正面扇形 AOE，MT 以外的人不要去正面，治療注意 T 血。
      其他出啥躲啥即可。`],["歐米茄時空狹縫 阿爾法幻境3",`開場 BOSS 放在場中。
      核心機制：左 / 右舷齊射・波動炮，讀條結束後會向對應方向發射 AOE，然後轉 180° 再次讀條，放完 AOE 再轉回來。這裡第二次 BOSS 轉了 180° 所以很多人容易弄反，可以簡單記成同穿異留（第二次和第一次讀條一樣，就穿過 BOSS，不同就留在原地）。
      紅色點名圈會在原地留下巖漿，同時 BOSS 有射線 AOE，儘量散開貼邊防。
      讀條外設產生：場邊出現一排小拳頭，向場中飄，選中小拳頭使用 歐米茄干擾器即可。
      轉場後場地中央和外圈出現藍色地板（不要踩，踩了即死），在一邊打中央的監視器的同時，處理踩圈（第一次是 8 個圈，T 和近戰負責內場 4 個，奶和遠端負責外場 4 個；第二次 4 個圈，保證每個圈裡至少 1 人即可）；第一次踩圈之後會贈送大量 LB，推薦近戰把 LB 放了，之後還會再送。打完轉場模擬器后，對場地中央出現的雷力投射點瘋狂使用 歐米茄干擾器豎起防護罩。
      下半場的外設產生可能會召喚一個大拳頭，大拳頭會向其正面發射直線 AOE，注意躲避。之後可能會出現大大拳、大小拳的組合技，注意區分。
      隨機點名 1 名玩家連線，被連線玩家要儘可能遠離團隊，線可以被傳遞，其他人注意不要搶線（零式難度需要固定 T 去處理）。線的傷害判定範圍極大，很容易波及隊友。技能判定后，被判定到的人會獲得 麻痹，治療注意驅散。`],["歐米茄時空狹縫 阿爾法幻境4",`開場 BOSS 放在場中。
      開場有若干點名 AOE 之後接分攤，注意不要跑太遠。
      BOSS 第一次變身後有擊退，可以開防擊退技能處理。這次點名後接十字 AOE，注意儘可能分散。
      BOSS 再次變身後有近身範圍 AOE（大約有半場那麼大），所有人先遠離。之後和開場一樣點名接分攤，同時有月環，要去 BOSS 腳下。
      之後 BOSS 再次溶解，點名 2 人，1 人分攤，1 人粉色圈點名。單人圈前往場邊放點名，分攤人在場地中央分攤，之後中央落點出現擊退，單人圈位置出現近身 AOE，推薦開防擊退處理。
      接下來中央的 BOSS 舉盾（大翅膀狀）保護背後的 BOSS 讀條，玩家應先打掉舉盾的 BOSS，然後打倒另一個讀條 BOSS（如果擊殺失敗就會團滅）。
      之後再來一次點名放圈，BOSS 出場后給玩家附加 或 ，其中帶有 防護程式M的玩家留在原地打，有 防護程式F的去場邊打（打錯了傷害無效，要注意）。2T 注意把 BOSS 拉開，後半段 BOSS 會附加 共鳴程式：近buff，如果 2 個 BOSS 靠太近會連線超神。
      接下來基本出啥躲啥，有大量各類 AOE，治療注意維持團隊血線，另外也有對 T 的大傷害。打倒其中一個 BOSS 后，另一個 BOSS 會一直讀條放 AOE，盡全力擊殺即可。`],["保鏢殲滅戰",`BOSS 的死刑都是正面扇形 AOE，T 注意面向和減傷。開場讀條豬鹿蝶所有人集合，待有蝴蝶落下時離開原地（會有巨大 AOE 範圍圈）。
      轉場後會出現直線（冰雪棋盤格）、點名和月環，在有盾減的前提下推薦2~3 名近戰重疊放置點名（2T 亦可重疊），其他遠端遠離 BOSS 放置點名，點名結束後會以點名位置為中央出現月環。實在無法迴避月環傷害時，滿血可吃下 1 層傷害。
      讀條縮小旋律時，部分玩家頭頂出現紅色倒三角標記，被標記玩家在 BOSS 背後集合即可處理（不落單即可）。
      一段時間后 BOSS 會點名 2T 距離衰減標記，2T 前往場地角落，BOSS 會一分為二，T 各自拉住面朝場外開好減傷。治療注意抬血，DPS 推薦優先擊殺 MT 那邊的分身（因為 MT 減傷可能不太夠用）。
      全屏 AOE 後點名 MT 距離衰減，之後 BOSS 跳 MT，所有人去 MT 處輸出（場地其他位置會被稍後出現的電球覆蓋）。電球爆炸后，BOSS 讀條捕獲並點名 4 人，被點名的玩家注意遠離 BOSS，其他人擊破被點名的鎖鏈（被點名玩家可以集合遠離，然後由遠敏放 LB 擊破），獄門讀條結束時若仍有未被救出的玩家，則會被秒殺。
      最後機制斬魔三昧，會將全隊血量降為 1，所有人注意靠近 BOSS（治療）抬血。我流破浪斬需要先在兩側躲避，等中間 AOE 判定后前往中間縫隙躲避。之後的機制為之前見過的組合技，建議 MT 把 BOSS 帶在場地中央，方便機制處理。`],["朱雀鎮魂戰",`開場T 把 BOSS 放在中場，很快就有對 T 大傷害技能赤熱擊，可以開個小減傷。
      打一小會 BOSS 會召喚幾隻小鳥，所有人需要把小鳥放在 BOSS 身下（場地中央）打死，被連線的遠端注意靠近 BOSS。
      接下來一個 AOE 之後，BOSS 會召喚蘇生之羽，所有人立刻轉火場地中央的羽毛，蘇生之羽如果炸到小鳥的屍體，小鳥就會滿血加 buff 復活，而如果小鳥沒有被及時打死，就會自爆 (…) 打羽毛時會同時有對 T 大傷害，治療注意加血。
      進入 P2 之後，場地上會出現蓮花寶座的圖案，蓮花外有 8 個小圓，每個玩家找一個圓圈站，圓圈中會出現箭頭，玩家需要調整自身面向，與箭頭所指方向一致（記得是角色的面向，不是你鏡頭的方向，面向正確的話會有光效 + 聲音提示）。推薦把視角拉高（上帝視角），此時場邊會出現小球向中間移動，面向正確 + 撞球就可以獲得 1 層傷害增加的 buff（反之面向錯誤，球就會被朱雀吃掉，她的傷害增加）。
      吃完球進入動畫，放 AOE 轉場。所有人注意不要站在場地中央朱雀腳下紅色的地板，這裡在轉場 AOE 之後會鏤空，會掉下去的。
      核心技能 1，引誘旋律和拒絕旋律，BOSS 讀條時會帶有笛子的音效，不習慣看讀條的玩家可以注意聽。引誘會把玩家往裡吸，所以要遠離；拒絕會把玩家向外推，所以要靠近。這兩個技能都可以用防擊退技能抵擋。
      核心技能 2，醒夫十八踢 鬼宿腳，臺詞是請你清醒過來吧！ … 對 MT 的多段大傷害之後，接 180 度 AOE。T 看到讀條鬼宿腳的時候，開啟大減傷，然後向 BOSS 側面移動。治療注意做好抬血準備。
      核心技能 3，朱雀跳樓機，在朱雀喊話之後，場地會被分成 4 塊，每塊地板上會有一個 「字」，場外會有跟地板字色相同的球，同時場邊會出現一隻和 BOSS 連線的鳥。這隻鳥會隨機選擇順時針或逆時針繞場飛行，當鳥撞到球的時候，它所對應的地板就會炸（在這塊地板上的玩家就會被炸的飛起）)。
      第一次跳樓機，地板和球是一一對應的，第二次開始，場邊會一口氣出 4 個球，4 塊地板連炸（但其實只有 2 種模式，順 / 逆時針或者又字形炸），如果不會躲的話可以去看一眼極神攻略，或者跟著其他玩家躲。實在不行可以硬吃一個地板等著奶媽抬血。
      另外還有全場 AOE、分散踩塔（踩圈）和各種直線。由於朱雀老婆的幾個技能會一起放形成組合技（比如跳樓機 + 引誘 / 拒絕旋律；跳樓機 + 十八踢；跳樓機 + 分散等等），所以對初見來說可能有一定困難，注意不要慌張，冷靜應對。`],["青龍鎮魂戰",`開場 AOE 后虛證彈是對 MT 大傷害，這裡開減傷即可。BOSS 跳走後觀察 BOSS 身上的圖案，太極圖案遠離，環形龍圖案靠近。
      九字切是青龍的招牌技能，需要插縫躲避（以後會有九字切二連放，需要斜角走位躲避）。
      出現小怪后，紅色小怪各自連線一名DPS，需要兩人向外引導連線。中央的青色小怪連線 1 人，除了紅色連線外的其他人全部站在 6 點方向引導青色小怪俯衝 + 分攤。分攤和圓形 AOE 結束后，兩邊的小怪會隨機連線 2 人，被連線的人把線引導到沒人的方向（通常是 6 點或者 12 點），大式鬼會向連線方向放扇形 AOE，不要打到隊友。
      之後進入小怪階段，由於打掉小怪之後會自爆，治療注意觀察小怪血量並準備抬血，真神一起爆問題不太大。
      小怪全部打完之後，青龍會把所有玩家擊退到場邊並轉場，轉場動畫結束后開啟疾跑迅速回到場地上。
      之後的招式以前基本都見過，擊退、分攤、虛證彈、九字切、太極 / 環龍的遠離靠近。唯獨 BOSS 會在 12 點方向召喚一隻巨大的式鬼，這隻式鬼會抬起一側的胳膊，砸下來對半場造成 AOE 傷害，當場邊出現式鬼時，要注意躲避，每次式鬼出現會砸三次。第三次之後會砸一次帶擊退的。
      另外這個階段會再來一次 P2 的引導，這次先是 T 接線並引導大錘（注意隊友位置，不要砸到隊友），然後是紅藍車輪，紅車輪連線的玩家要儘量靠近車輪，防止被擊退到水中。這是一連串大傷害技能，T 可以適當開大減傷，治療注意抬血。`],["樂欲之所甌博訥修道院",`BOSS 1 機工士姆斯塔迪奧
      場地大體上被分為 4x4 的 16 個格子，場地機制基本按格子處理。
      當 BOSS 與場外小怪連線時（黃線），小怪會被啟用，其對應的行 / 列會發生 AOE。BOSS 與場內小怪連線時（藍線），小怪會被啟用，自身下方的 2x2 的格子會發生 AOE。
      BOSS 使用分析后，會跳到場外的高臺上，同時玩家會被隨機賦予 右側未解析、 左側未解析或 背面未解析的 debuff，玩家腳下也會出現一個 C 形的金色圓環。玩家需要將自己未解析的一側 / C 形環缺口對準 BOSS 方向，否則會被秒殺。BOSS 第一次必跳到東北方的檯子上，之後方向隨機。玩家儘可能互相遠離，這樣比較容易分清自己的豁口方向。`],["樂欲之所甌博訥修道院",`BOSS 2 聖騎士阿格莉亞絲
      場地上會出現劍盾標記的圈，踩圈可以啟用特殊技能，部分技能需要用特殊技能來處理。
      不動無名劍：玩家踩盾圈，面向 BOSS 使用特殊技能聖盾，保持不動維持 聖盾防禦buff。面向不對或使用技能后移動都會使防禦無效。
      小黑屋：無特殊標記的小怪直接打，有盾標記的小怪撿圈用聖劍打。打完出門後有短暫無敵，就算遇到 AOE 也不用害怕。
      點名：推薦站一起放置。
      小怪階段：北場 2 只小怪 AC 隊分別拉住，撿盾吃 AOE；南場小怪 B 怪拉走，打到一半場地上會出現劍的標記，需要用劍打掉連線的小怪才能繼續打。
      最後聖光爆裂破是連線 + 點名，可以舉盾免疫，也可以硬吃（硬吃的話治療注意抬血）。`],["樂欲之所甌博訥修道院",`BOSS 3 雷神西德
      入場位置為 B，左上 10 點方向為 A，右上 2 點方向為 C，各隊先自行前往（注意不要手賤提前開怪）。
      亂命割殺打：開場第一個技能，全體 HP 降為 1 並附加 死亡宣告，必須奶滿才能解 debuff，治療們加油，其他人注意靠近治療吃奶。
      雷神式聖劍技：根據 BOSS 動作有多種效果：
      劍放平向外指：躲開被指的圓形區域
      劍插進地面：靠近 BOSS（站在目標圈內）
      把劍舉起來（手抬起來）：遠離 BOSS（圓形臺的外側）
      暗影劍：點名 1 人產生巨大紅黑色範圍，被點名玩家放到自己隊伍場地一側。
      星天暴擊打：對各隊的 T 放 4 層 物理受傷加重，讀條結束後放一個大傷害。T 開好減傷，治療可以看到 4 層易傷后驅散，這樣最後一下傷害就不疼了。
      幽暗劍：隊伍兩側圓形平臺靠近 BOSS 的地方出現黑色魔法陣，每個陣里至少需要站進 3 個人才能免疫接下來的傷害，每個隊伍需要進自己原本位置左右的兩個陣。
      冥界恐叫打：頭頂紅黑色點名，被點的玩家看到點名消失並出現橙色圈之後一路狂奔就行了，會有追蹤型 AOE 一直戳過來，被戳 2 下基本必死（注意不要跑到別人的圈裡）。
      小怪階段T 拉住仇恨後面向場外，被點名的玩家，推薦將點名放在自己小怪靠場外方向（T 所在方向）
      雷神式聖劍技：小怪結束后第一個劍技必是聖光爆裂破，特點為三連平臺 AOE，迴避完這個技能后立刻歸位，接下來是全團 1 血 + 死宣抬血的機制。
      強甲破點突：連線 1 名玩家，打一下並附加 物理受傷加重debuff，需要隊友幫忙接線，一共會打 4 次，挨 2 次必死。T 不要去接，其他 7 人處理。`],["樂欲之所甌博訥修道院",`BOSS 4 聖天使阿爾蒂瑪
      基本出啥躲啥，還有之前的 BOSS 友情登場（帶著標誌性技能）。
      讀條大十字，場地上會依序落下 3 顆大水晶，水晶會向其東西南北方向發射鐳射，注意觀察躲避。
      三兄弟標誌技能：
      場地出現飛速旋轉的鐘表：先慢后快
      塔：躲開塔倒下的方向
      紅色倒三角點名：互相靠近
      BOSS 場邊蓄力帶半側火焰：躲到無火焰半側
      之後 BOSS 暫時不會攻擊，趁機趕緊救人，友方 NPC 會為玩家撐起防護罩，在罩子里仍然會掉血，請所有人多開減傷，治療瘋狂抬血，其他人集火墮天之證。
      之後的 AOE 會附帶橫風（可觀察場地特效），注意提前躲避。大十字的橫風是在第二顆大水晶落下後發生的。
      地板上出現黃色小圈的時候，跟著跑，最後一個小圈會落下小怪，需要 1 名玩家頂住小怪，其他人集火擊殺。
      連線小怪需要非當前 MT 去接線。
      最後 BOSS 會把所有玩家吹飛到南側，場地變黑，玩家需要沿著黑色場地跑到 BOSS 腳下。中途有加速度炸彈注意停車，另外還有各種 AOE 小怪注意躲避。到達 BOSS 腳下後還會有粉拳點名、白色三角遠離點名，請被點名的玩家向兩側遠離人群方向躲避（打不了就不打了，別炸人群）。`],["伊甸希望樂園 覺醒之章1",`基本上出啥躲啥，場地邊緣的黃線撞上去就會死（請不要隨意嘗試）。
      BOSS 跳到場邊讀條凈土之光時，需要繞到 BOSS 身後躲避。
      點名DPS 黑圈時，需要散開放置，緊接著會出全場 AOE（僅 BOSS 腳下安全），若黑圈放在 BOSS 腳下，則黑洞會吸入玩家爆炸。
      點名2T 時，需要分開方向引導直線 AOE，其他人注意避讓。
      場地轉換后，BOSS 會使用技能凈土射線，場地上的白球會放 4 輪射線，同時點 3 次隨機 AOE，然後 BOSS 跳到場邊讀條凈土之光，場面會非常混亂，同時一個人連續吃兩下就會暴斃，建議不熟練的玩家停手專心躲技能，另外 BOSS 跳到場邊之後不要急著過去，因為還會再有一輪 AOE，自己被封路就糟了。
      小怪階段可以把小怪拉到一起，但注意小怪的平 A 是正面扇形 AOE，雙 T 不要重疊。小怪沒打掉則會狂暴。`],["伊甸希望樂園 覺醒之章2",`BOSS 以自身和 T 為直線的五花肉色直線 AOE 之後，會出現 8 只小怪（大眼怪同模），交替向兩側慢慢飛行，注意不要撞上。
      月環之後會出現 4 只小怪向 BOSS 慢慢飛行，注意也不要撞上。
      核心技能是黑暗爆炎和黑暗神聖，配合延遲詠唱，沒有延遲詠唱的黑暗爆炎和黑暗神聖分別是分散和分攤，加上延遲詠唱之後，頭頂會出現紫色或黃色巨大倒計時標記，和 延遲詠唱：黑暗爆炎或 延遲詠唱：黑暗神聖buff，buff 會帶有不同的時間，在倒計時結束後生效。第一次延遲詠唱的黑暗爆炎和黑暗神聖會同時爆炸（需要黑暗神聖玩家遠離），之後的延遲詠唱都是先生效分攤，後分散，注意不要提前走。
      打到後半截，場邊會出現一個巨手，會向場地一側吹飛，可以開啟防擊退技能躲避，或站到巨手一側等待被吹飛。吹飛可能會與踩塔一起出現：地面出現黑圈和連天的光柱，需要每個黑圈都有人踩（不踩則會出現全團 AOE 及 虛無的詛咒）。`],["伊甸希望樂園 覺醒之章3",`MT 被紅色點名時去場邊引導直線 AOE，記得開減傷。
      BOSS 會有很多斜向 AOE，儘量不要站在場地中央，可能會比較難躲。讀條巨浪時，場邊會出現一個水柱，注意向水柱方向移動，或開啟防擊退技能。巨浪之後會緊跟海底地震，需要觀察 BOSS 頭的發光位置（普通難度這個副本固定第一次兩邊場地掉落，第二次中央掉落），由於 AOE 提醒時間非常短，需要提前走位迴避（固定第一次場地中央躲避，第二次兩邊躲避）。
      其他的基本出啥躲啥，中間 BOSS 會消失，場地上留 3 個水圈，同時場邊出現一個水圈，場地上的水圈會擴大，BOSS 會從場邊的水圈衝出來，如果不會跑就跟著人群。
      最後 BOSS 讀條大海嘯，會給玩家上一大堆亂七八糟的 buff，其中被點名擊退（角色周圍出現放射狀菊花動效）的玩家需要向前走到 BOSS 腳下擊退隊友（其他隊友需要注意與他的方向距離），其他的都不用管。獲得 渦動之兆buff 的人周圍會出現一個黑圈，這名玩家原地不動，其他人躲他（同時會有粉色點名的小圈分散）。`],["伊甸希望樂園 覺醒之章4",`場地是 4x4 的方格，技能基本上都以這些方格為單位進行結算。
      崩巖是對當前 MT 大傷害，附帶 物理受傷加重效果，不過其實基本是奶的起來的，所以建議進本后雙 T 交流是否換 T。
      邪土是擴散型 AOE，先一塊地板亮起，然後它周圍的 8 塊地板亮起，然後是再外圍的地板亮起，需要玩家在外圍等待，裡面的地板炸了之後立刻向里移動。
      BOSS 喊話覆於我身的堅硬地殼啊！的第二行，若是化為手甲碾碎敵人！，則 BOSS 背上的齒輪甲會跑到 BOSS 手上，玩家需要先在 BOSS 正面一排巖石躲避 AOE，然後腳下會變藍，向兩側躲避即可；若第二行是化為車輪馳騁大地！，BOSS 會變為摩托車形態，需要在 BOSS 兩側相對較寬的一側躲避（然後被擊退，同時出現需要躲避的藍色地板）。
      落石有幾種模式：
      兩塊石頭帶衰減 AOE 提示：先在場邊躲避衰減型 AOE，落下的兩塊巖石會有一塊爆炸（發黃），玩家需要在另一塊巖石背後躲避 BOSS 接下來的全屏 AOE。
      四角雷：落下 4 塊巖石，其中一塊會與 BOSS 連線變大，在沒有大石頭的兩側貼邊躲避（比如左下角的石頭變大了，則在右邊或上邊的中間點躲避）。
      三排雷：會在 4x4 方格的交點處依次落下 3 排雷，BOSS 會跟其中一個雷連線使之變大，玩家需要避開大雷的同時，前往第三排雷的位置，等第一排雷炸了之後，向第一排雷移動。每個小雷的爆炸範圍是 2x2 方磚的內接正圓就，因此可以躲避的位置還是比較多的，如果實在不會躲可以跟著人群走。
      米字雷：會先落下十字型的雷，再落下四角雷，需要先在四角躲避，十字雷炸了之後去中間躲四角炸。
      由於兩塊落巖和米字雷有可能與邪土同時出現，二雷的時候先處理邪土；米字雷四角躲避后觀察邪土方向躲避（冷靜應對）。
      BOSS 讀條大地之怒會給全團上 污泥debuff，需要治療注意抬血。`],["複製工廠廢墟",`BOSS 1 多關節型：司令機
      基本上出啥躲啥，有一些需要注意的讀條技能：
      連續能量彈：隨機點名譯名玩家施放正面扇形彈幕球，很容易暴斃，發現 BOSS 突然轉身時要提高警惕。站在 BOSS 兩側及身後可迴避。
      制導陣型：點名並有連線，被點名玩家注意把線引導向場外，並且不要跟其他線重合。
      側方 / 中央旋轉攻擊：讀條結束后時有不足 1s 的 AOE 範圍提示，所以要提前躲避，側方往中間躲，中央往兩側躲。
      空襲陣型：空中出現小飛機人並不斷移動、製造圓形 AOE，參照左圖確認安全點（或跑步躲避）；第二次 BOSS 會出現衝擊波讀條，可以開啟防擊退技能處理。
      - 安全點說明：小飛機刷出來的位置內側，地板下方兩根水管的交叉處（紅色表示小飛機的出現位置，綠色表示對應的安全點）。
      其他的努力躲好就行了！`],["複製工廠廢墟",`BOSS 2 霍布斯
      玩家會根據 ABC 隊被自動丟到不同的場地中，除了場地本身有機關之外，場地周圍的墻壁也會旋轉切換機關。螢幕中央會有各種提示臺詞提示機制。推薦所有人在場地右前方集合輸出。
      共通機制：
      耐鐳射測試：全場 AOE，有點疼，推薦做一些減傷，注意抬血。
      環形鐳射：步進式環形 AOE，有提示但和常見 AOE 提示不同，速度很慢，推薦躲完第一個之後去場外迴避剩下的 AOE。
      牆面的火炎放射器開始運作……：回頭看墻壁，找沒有點燃的放射器方向躲避（放射器方向略有點斜，兩側放射的話是∧形狀的火焰。。
      牆面的右臂開始運作……：場地中央出現一個藍圈，然後會出現大量 AOE 範圍提示，AOE 會連續放 3 次，按中央箭頭旋轉方向旋轉。
      牆面的左臂開始運作……：場地中央出現一個集裝箱，集裝箱四面壁會向外倒下，所有人在場地右前方躲避倒下的集裝箱壁之後，一人接兩根線遠離人群吃小爆炸。如果沒有 T 處理，請其他隊友靈性帶位。
      各隊機制（地板機制）：3 個隊伍所在地板會出現機關，出啥躲啥即可。B 隊機關為強制移動，注意不要被移動到場邊即可。`],["複製工廠廢墟",`BOSS 3 昂格士
      基本全場都需要觀察 BOSS 胳膊，注意經常抬頭。
      BOSS 舉單臂的時候，注意向沒有抬手的一側躲避。舉雙臂時參見左圖安全區說明（第一次必為情況①，第二次為情況②，之後隨機）。
      各種點名基本上離開人群都沒錯，其中有一種黃色箭頭跟蹤尾巴的點名是跟蹤式 AOE，會有多次 AOE 判定，不要急著回人群。
      讀條能量彈幕，BOSS 胸口出現鐳射蓄力，同時地面出現 12 個塔，鐳射會覆蓋住中間的 6 個塔，等鐳射結束后立刻去踩（每個塔里都要有人）。
      小怪階段各隊T 注意拉好大個的面向場外，小個的 2P 會幫我們轟掉，不用管。
      小怪階段結束后，所有人南場集合，玩家會被崩到另一個檯子上。（如果不在南半場的話基本上必死，要麼被砸死要麼掉下去摔死）
      新臺子上開場兩側會出現機械臂向中央碾過，一共碾 3 次，注意觀察機械臂位置躲避。之後出啥躲啥即可。`],["複製工廠廢墟",`BOSS 4 〇〇
      基本上出啥躲啥即可，也可以選擇跟著其他人跑，如果實在不行可以考慮硬吃 1 個技能（別四處亂跑吃個飽，治療會生氣的）。
      主炮鐳射：隨機點名正面鐳射，注意躲開正面。
      前後 / 左右齊射：前後躲兩側，左右躲前後。
      對接解除：〇〇離開戰車變為小飛機，會從場地某一側按 1/3 場地寬度轟炸場地。2P 會提前飛到轟炸末端（比如〇〇由北向南轟炸，那麼 2P 會提前移動到南場），可以給她標記方便找位置。
      轟炸傷害判定以煙霧特效為準，不要提前移動。
      場地邊上出現大齒輪：會有 1/4 場地面積的大 AOE，向沒有齒輪的地方躲避。
      場地 2 角掉下來 2 輛戰車：BOSS 會無敵，T 注意拉好戰車仇恨。打完后 BOSS 會連線其中一輛戰車，所有人去另一輛戰車背後躲避 AOE，結束后立刻遠離這輛戰車。
      最後一波小怪跟 BOSS 1 很像，同樣會讀條中央 / 側方旋轉攻擊，注意向兩側 / 中央躲避。`],["黑風海底阿尼德羅追憶館",`BOSS 1 不明物體
      核心技能全場圓形 AOE，同時 BOSS 腳下出現輪盤箭頭，注意箭頭當時停下的方向並非 AOE 區域，而是在 BOSS 觀察讀條結束時，箭頭所指的方向才有 AOE，注意不要過早判斷安全區範圍。
      第二次觀察讀條時會出現另一隻分身，同時有分攤，先處理完分攤再找安全區是來得及的。
      BOSS 和分身都會讀條正面直線 AOE（頭口部有紅色蓄力能量球），注意避讓。`],["黑風海底阿尼德羅追憶館",`BOSS 2 克琉普斯
      BOSS 趴下讀條二千邁納迴轉需要遠離，抬手讀條二千邁納橫掃躲開正面即可，趴下讀條旋風眼則是要靠近。
      組合技恐怖的戰錘 + 恐怖的大劍，地板上會依次出現錘子和劍的標記，先出現標記的先傷害，因此如果先出錘子，就站在劍的格子里等一下，等錘子格子出傷害動畫了，再走到錘的格子里就行，反之亦然。第二次戰錘 + 大劍會附帶一次分攤 / 分散，先處理分攤 / 分散即可。`],["黑風海底阿尼德羅追憶館",`BOSS 3 魯克嘶・蒂母
      BOSS 跳到場邊，讀條水底儀式之後，場地中央會出現一條水帶，接著會有手從水裡伸出來，手會向前使用 AOE，站在手背的位置就可以躲開 AOE。
      場邊 8 個井蓋中 4 個冒泡，BOSS 同時會跳回場中讀條水底儀式，讀條結束后冒泡的井蓋里會蹦出小怪並連線 BOSS 無敵，因此玩家應該在水底儀式讀條結束之前去踩住井蓋，推薦T 和近戰踩靠近中場比較近的井蓋，遠端職業去踩角落裡較遠的井蓋。
      第三種水底儀式是場地長邊依次出現手，先出現的先判定，在南北場空隙處等單側手動畫結束之後，向對面跑去，如果減傷做的足夠的話也可以考慮硬吃一隻手的傷害（需要一定裝備支撐）。
      最後一種是 8 個井蓋都冒水，同時場地兩側出現 4 隻手，離手較近的井蓋會被手撲滅，因此去踩離手較遠的井蓋即可。同樣近戰負責場中央的，遠端負責場地角落的。如果沒踩好井蓋出現小怪，則 BOSS 變為無敵，必須先擊殺小怪才行，要注意。`],["伊甸希望樂園 共鳴之章1",`經過場地上的雷球后，會獲得 避雷buff，疊加到 3 層之後再吃雷球會變為 蓄電，此時收到治療量會下降，請務必避免蓄電。當 BOSS 讀條蓄雷時（BOSS 會轉花手並在週身出現雷電特效），去撞球保證身上至少有 1 層 避雷即可（如果實在反應不過來，可以一直保持自己身上在 1~2 層）。
      核心技能 1：武具產生，會在場地上產生 2 根或 4 根雷柱，其中長柱子會造成範圍巨大的圓形傷害，短柱子什麼都不會發生。因此所有人在看到場上出現柱子之後，需要在短柱子後側躲避 AOE（4 柱時需要躲到場地角落。
      核心技能 2：幻影產生，BOSS 連線場外產生幻影，有 2 種模式，無論哪種都要躲開。中場 1 只幻影時，靠近中場實線（會有很大的向外的特效，表示會被擊退，所以要儘可能靠中間，但是不能踩到中央的車道里（否則會被沖死）。場邊 3 只幻影時，看地上花紋，找沒有幻影的跑道即可。
      核心技能 2：雷雲，點名 2 名玩家頭頂紫色標記，2 人要把點名儘可能靠邊放，而且兩個人互相也要遠離（否則產生雷雲之後，雷雲會互相吸引變成巨大的雷暴）。點名消失後，被點名玩家離開原位，同時在點名消失的地方出現巨大的雷雲，會不斷施放範圍 AOE（沒有範圍提示，但出現傷害時會有明顯的電圈特效），在雷雲消失之前不要靠近。
      這個副本的幾個技能會組合形成 Combo，所以治療儘可能多關照一下團血。`],["伊甸希望樂園 共鳴之章2",`P1
      BOSS 開場讀條兇猛風暴，雙方向 90 度扇形 AOE，特效很淡不容易看清楚，推薦把視角抬高從上往下看。
      藍色分攤圈，點名 2 名玩家，圈裡只要有超過 2 人即可順利分攤（否則被點名的玩家會被頂上天空然後被劍一把戳死）。
      場地中央藍色大圈，站在藍圈邊緣擊退，或開防擊退技能處理，不要踩進去。
      近身 AOE + 藍色連線暴怒風暴，BOSS 會對被連線玩家釋放 30 度左右範圍的 AOE，被連線的人互相不要重疊，其他人也儘可能遠離連線。
      核心機制：真空斬，場地會被紅色 AOE 分為兩半，分開后中央紅黑色區域不可再踏入，場地兩邊會各出現 3 個風球，其中會有 2 個風球離得格外遠（或者是風球與場邊格外遠），站在空隙中等著被吹飛即可。`],["伊甸希望樂園 共鳴之章2",`P2
      BOSS 讀條火焰拳，會對 1 仇MT 連線並衝鋒釋放技能，在連線上的所有玩家都會被附加 頭暈debuff，再被連線打到一次就會變為 腦震盪，MT 注意靠近 BOSS 縮短連線，其他人注意躲開 MT。結束后需要換 T。
      讀條業火拳，有 1 名玩家會被連 3 根線，需要有另外兩名玩家幫忙去接線，並把線分開，同樣會有 頭暈debuff，注意互相保持距離（沒有線的玩家也要稍微遠離 BOSS，不要吃到 2 層衝鋒傷害。
      讀條爆裂炎，對MT 大傷害，如果帶 頭暈debuff 會被打上天，因此之前的火焰拳務必換 T（儘量保證接爆裂炎的 T 身上不要帶有 頭暈debuff）
      讀條火花爆然後飛走，所有人直接追到 BOSS 腳下繼續輸出。`],["伊甸希望樂園 共鳴之章2",`P3
      2 個 BOSS 同時出現后再次分場（P1 機制），出現風球的同時紅 BOSS 會飛到一個風球腳下，有紅 BOSS 那邊的玩家站 BOSS 腳下，沒紅 BOSS 那邊的玩家正常處理。其他的就是 P1P2 機制組合一遍。
      然後 BOSS 合體，多放一些減傷，否則 DPS 有可能扛不住。
      之後所有的機制都是復讀，除了兇猛風暴的特效不清晰要注意之外，其他的都沒什麼難點。`],["伊甸希望樂園 共鳴之章3",`P1
      開場 AOE 后 BOSS 讀條暗光釘，會對MT 連線並施放直線大傷害技能，MT 橫向移動離開人群並開好減傷，其他人注意不要跟 MT 站在一起。（之後還會多次出現）
      核心技能 1：波狀號令，正面會按順序出現球，先出現的球先衝鋒，在後出現的球處躲避，等第一波球衝出去之後移動到無球的位置（比如左邊先出，右邊后出，那就站在右半場，等左半場的球衝出去了，向左移動躲開右半場的球）。
      第二次波狀號令會帶傳送門，不過這次是演示，無腦在前半場處理即可。
      第三次波狀號令會帶完整傳送門，處理方式是，看先出的球所在的位置，左右調整好后，回頭看它所對應的傳送門顏色（場地後方），然後心中默唸這個顏色，再看左右側的的傳送門，前後移動找到異色格子站好。前方的球處理完之後，看左右側的門，前後移動處理。`],["伊甸希望樂園 共鳴之章3",`P2
      小怪階段會有強制傳送配合靠近、遠離，在傳送時務必注意傳送方向，別掉下去了…`],["伊甸希望樂園 共鳴之章3",`P3
      技能都見過，只是略有加強。強制傳送會配合踩塔（在前後場），儘可能傳送到場中前後方，要不然容易來不及回來。
      夜襲號令在判斷橫向門的時候，需要找異色的門（即如果自己初次站的那列背後是紅門，那麼前後移動找橫向門的時候就要找藍門）。
      號令是最容易站錯 or 發生減員的地方，治療要當心。`],["伊甸希望樂園 共鳴之章4",`P1
      BOSS 讀條換裝，有 2 種模式，但第一次必定是背對（需要背對的換裝在 BOSS 頭頂有紅色眼睛標識，但是 BOSS 太高了經常有人看不見……）。實在懶得看就每次靠近 BOSS 並背對就可以。
      鐮形 / 闊斧迴旋踢，鐮形需要靠近，而闊斧需要遠離 BOSS，這個技能最好看讀條判斷，看範圍提示再跑通常來不及。
      冰霜斬 / 刺，斬為背後安全，刺為左右前安全，同上最好記名字看讀條。
      核心技能：鑽石星塵。被點名白色三角標記的玩家去場邊找安全區放置 AOE，被點黃圈的人在中場適當互相遠離即可。之後會有 4 人被點名追蹤型 AOE，推薦互相遠離到場邊，並注意觀察 AOE 提示並保持移動迴避。
      讀條天降一擊，有擊退，可以用防擊退技能處理，沒技能的注意不要靠場邊。
      核心技能：鏡中奇遇，場地上會出現鏡子，鏡子會復讀 BOSS 的技能。第一次是冰霜斬 / 刺復讀，如果是斬，則在 BOSS 身後躲完去南場（遠離 2 個鏡子）；如果是刺，則在 BOSS 正面躲完去北場（2 個鏡子之間）。`],["伊甸希望樂園 共鳴之章4",`P2
      小怪階段。土元精會讀條石膚，T 注意使用 插言打斷。雷元精會反傷，治療注意給隊友抬血。水元精血厚，但可以被眩暈，儘可能集火處理它。
      場邊還有一個元精會連線，需要玩家截斷連線。
      包括連線在內，如果一共放跑 4 只小怪（小怪進入場地中央的水晶就算放跑），既告團滅。`],["伊甸希望樂園 共鳴之章4",`P3
      BOSS 讀條神聖的同時，頭頂會有幾個球，如果是 1 個球，就證明球砸中央，四周安全；如果是 4 個小球，那就是砸四周，中央安全。場地上特效也會發生變化。
      核心技能：光之波動，場地上會依次出現 4、2、1 個塔，而且每次會有 2 名玩家被點名，被點名的玩家不可以踩塔，需要找沒人的方向引導光波，剩下塔依次需要 1、2、4 人站進去處理。節奏較快，需要冷靜處理。
      核心技能：鏡中奇遇，這次是鐮形 / 闊斧復讀，鐮形先在 BOSS 腳下躲避，然後隨便找個鏡子底下躲避復讀；闊斧需要先遠離 BOSS 躲避，然後儘可能靠場地中央躲避復讀。
      最後一次場地結冰會配合閑寂 / 靜寂的雙劍技組合，是冰霜斬 / 刺的二連組合拳，如果控制不好的話可以考慮硬吃一個。
      之後是多次 AOE，治療注意抬血。轉場動畫，站擼 rush 結束。`],["暗影決戰諾弗蘭特",`BOSS 1 幻光盜賊
      讀條衝刺之後，BOSS 身上會同時出現 AOE 和連線，在 BOSS 周圍的綠球全部消失時，BOSS 會瞬移到連線位置並釋放對應 AOE，遠離連線箭頭位置即可。
      戰鬥後期會使用分身衝刺，BOSS 同時連線 2 個箭頭，如果此時為圓形 AOE，遠離箭頭即可；如果是矩形 AOE，則要垂直於 AOE 方向找安全點（比如 AOE 是橫條的，就縱向找沒有箭頭的一行）。`],["暗影決戰諾弗蘭特",`BOSS 2 幻光亡靈法師
      開場 BOSS 會有隨機扇形 AOE，所有人靠近 BOSS 以便躲避，如果中了 AOE 會附加 死亡宣告，請治療驅散（詩人也可以用 光陰神的禮讚凱歌驅散）。
      場地四周出現黑洞，然後出現小怪連線玩家，建議所有人站在一起。小怪過一段時間后連線會消失，此時T 把 BOSS 帶到沒有小怪的地方，再過一會小怪會爆圓形 AOE。
      半場泥沼后，玩家腳底會出現黑圈，黑圈消失後出現小怪連線玩家，所有人分散站位，被小怪抓住後會被定身 + 小範圍 AOE 傷害。
      如果打得較慢會出現第三次連線，同時連線兩種小怪，先散開跑動放下第一個小怪（小怪有原地 AOE），再找一個互不干擾的地方吃第二個小怪的 AOE 即可。`],["暗影決戰諾弗蘭特",`BOSS 3 幻光狂戰士
      開場后沒多久場地四角會發白，不要踏入。
      場地一側出現巨大藍圈的時候，所有人靠近藍圈但不要踩進去，BOSS 會以藍圈為中心擊退玩家（防擊退有效）。
      擊退後會出現點名大圈，分開放置。之後身上立刻出現分攤標記，這個分攤需要和玩家之前放下的石塊進行分攤。
      BOSS 跳往場邊並出現覆蓋全場的 AOE 範圍提示時，玩家需要走進之前藍圈留下的場地大坑內躲避（注意不要待太久，在坑裡會獲得 逐漸狂暴debuff，8 層之後會轉為 純正狂暴）
      當 BOSS 舉起斧並有明顯蓄力動作時，所有人注意躲開 BOSS 正面。`],["人偶軍事基地",`BOSS 1 813P：裝備據點防衛裝置
      紅色點名T，遠離人群開減傷。紅色點其他人同樣遠離人群，出現光柱立刻離開原地回人群。
      場地出現黃色範圍提示，攻擊：收束粒子炮，找面積縮小較快的黃色區域躲避，實在不行跟人群。
      頭頂深處的機械裝置發生轉向，攻擊：偏向粒子炮，會向旋轉一側發射 AOE，躲到機械翼背面。
      BOSS 喊話執行 「終焉之歌」 程式……，身體上出現向外擴散的黃圈，圈上有缺口，在缺口處躲避 AOE，注意該技能為動畫判定，要等地面上出現傷害動畫后再前往下一個缺口安全點。
      其他出啥躲啥即可，小怪及時轉火，會有一定的組合技（但及時迴避就可以了）。`],["人偶軍事基地",`BOSS 2 724P：強化型飛行裝置 [A-lpha]，767P：強化型飛行裝置 [B-eta]，772P：強化型飛行裝置 [C-hi]
      左中右分別是 ABC 隊（系統會自動把隊員踢到自己負責的 BOSS 面前），注意在擊殺任意 BOSS 之前，小隊隊員是無法對其他隊的 BOSS 造成傷害的。
      開場后不久的分攤注意面向場外，由於是直線分攤型技能，面向場內有可能會波及其他隊伍。
      讀條協作：迴轉斬擊后，3 個 BOSS 會連成三角形，轉向並伸出光刃。若發現己方的 BOSS 沿連線方向行進的光刃在三角外側，則直接進入三角內側躲避。若發現己方的 BOSS 沿連線方向行進的光刃在三角內測，則在三角形頂點正後方躲避。
      讀條協作：突襲轟炸后，場地邊會出現帶箭頭的步進式 AOE 提示，同時 BOSS 使用需要遠離的 AOE。玩家需要先去遠離 BOSS 反向躲避（比如步進式 AOE 指向左邊，就去這個 AOE 的右邊且遠離 BOSS 的位置等待），BOSS 的 AOE 結束后立刻靠近 BOSS，即可躲避另一側過來的 AOE。
      讀條協作：衝鋒斬擊后，所有 BOSS 會前往場地北邊排成一列，玩家需要注意 BOSS 伸出的光劍方向，在沒有光劍一側躲避（動畫判定）。
      若打得比較慢，則會出現攻擊：氣浪效果彈頭，場地掉落 2 枚炸彈，形成米字型 AOE，比較難迴避，建議直接遠離處理。`],["人偶軍事基地",`BOSS 3 905P：裝備重型陸戰裝置
      BOSS 讀條執行：啟動鐳射炮臺時，場地中央的裝置出現高低不同的光點，所有人前往高點所在的扇形場邊，等旁邊場地的 AOE 結束后立刻移動到旁邊即可。
      上個技能結束后立刻點名 2 名 T讀條攻擊：高功率鐳射，被點名的 T 不重疊將點名引向場外，所有人注意務必躲開這 2 人所在方向（有明顯動畫提示），被掃到必死。
      隨機點名若干玩家攻擊：收束伏特，被點名的人只要不重疊即可，不要亂跑，其他人酌情躲避。
      執行：輔助機程式時，場地外側的螢幕會出現 R010 或 R030 的字樣，R010 表示過中場直線 AOE，R030 表示自身為中心的圓形 AOE，均在 2 個輔助機中央靠場邊躲避即可。
      執行：易爆型化合物時，場地上會出現若干黃圈，每個圈超過 3 人就會變藍，如果缺人則會施放全場 AOE。（第二次施放時，每個圈只要有 2 人踩即會變色）
      第二次出現執行：輔助機程式時，場地外側螢幕會出現 R010 和 R030 交替的字樣。請找兩個 R010 相鄰的螢幕所連線的輔助機中央躲避（第一次螢幕連線自己前方的輔助機，第二次會連線螢幕斜向的輔助機，注意區分）`],["人偶軍事基地",`BOSS 4 〇〇〇〇〇〇
      BOSS 身邊出現紅色光點和連線時，到 BOSS 身下回避（月環）。BOSS 自身開始旋轉，並出現紅色直線時，躲開直線方向。之後 BOSS 消失出現在場邊，到 BOSS 所對應行列的位置上回避傷害。
      BOSS 變形後讀條斬機技：填充時，需要觀察動作：
      半蹲舉劍蓄力：大範圍鋼鐵，遠離 BOSS 迴避。
      直立把劍舉在腦後：正面扇形 AOE，在 BOSS 側面 / 背後迴避。
      直立把劍插在地上：月環，BOSS 腳下回避。
      BOSS 的該技能會與傳送組合，當 BOSS 使用技能，同時身下出現連線時，連線上有光點的一端為 BOSS 傳送后的真實位置。
      傳送后，MT 注意把 BOSS 拉到場邊，BOSS 讀條三連衝擊斬，向分攤人群連續釋放 3 次帶擊退的分攤，分攤注意向場中方向擊退，如果位置不好可能所有人都被擊退到場邊團滅。
      BOSS 讀條四連斷重擊同時，有 4 名玩家頭頂出現點狀指示，BOSS 會跳向 1 點玩家，劈向 2 點玩家，然後跳向 3 點玩家，劈向 4 點玩家。被點 13 的人不要動，被點 24 的人不重疊即可。其他人注意迴避。
      之後會有分身復讀版斬機技：填充，中央 BOSS 使用一次，然後四角分身一起使用一次，注意迴避。
      踩塔 + 傳送，傳送方式跟前面一樣。
      傳送 + 直線 AOE：場邊出現光球，其中 2 個會發生傳送，光球會向場內釋放直線 AOE，觀察后躲避。`],["光之戰士殲滅戰",`P1
      開場大約 10s 時，BOSS 會使用技能降全體血量降為 1，並附加 純正死而不僵debuff，需要治療將所有人血量抬滿，請所有人注意靠近治療並確保自己吃到地面類治療技能（推薦開怪后所有人站在 BOSS 目標圈內輸出）。
      BOSS 讀條光明利劍時，若手中舉起的劍有光環特效則要靠近，若沒有則需要遠離（普通本會有範圍提示，極神沒有）。
      讀條絕對爆炎時，頭頂同時出現紅色倒計時圖示，所有人按 ESC 收武器，讀條結束後會為玩家附加 3s 熱病，此時任何行動都會導致大量掉血（包括移動、轉身、自動攻擊）。
      讀條絕對冰封時，注意保持移動（一直原地跳躍亦可），否則會被暴風雪 凍結。
      之後為前三個技能的組合技，BOSS 先讀條魔法劍・絕對爆炎或魔法劍・絕對冰封，然後再讀條魔法劍技・光明利劍，魔法劍技・光明利劍讀條結束之後，會同時判定絕對冰封 / 爆炎和光明利劍。因此先看冰封 / 爆炎決定接下來是停手還是保持移動，接下來看光明利劍的特效是靠近還是遠離。
      之後場地出現一個光點，光點會在場地內畫出一個三角形，三角形內為即死區域，看到光點劃出的斜線後向場外躲避。同時關注北半場，三角形判定后，北半場立刻會降下一條巴哈姆特，此時向沒有巴哈姆特的半場躲避俯衝。
      之後為一次對 T 死刑和一次全場 AOE。`],["光之戰士殲滅戰",`P2
      P2 開場為 QTE，需要所有人保持連打到拘束消失，有任意一人失敗則會團滅。鍵盤所有按鍵（含滑鼠）、手柄所有按鍵均可觸發連打，可以所有手指一起按鍵盤 / 搓手柄，一根手指連續按會有極大可能性失敗。
      回到場上后 BOSS 會攢 4 格 LB 槽，在 BOSS 的 4 格 LB 攢滿后（有音效）1s 使用 LB（極限技），否則會導致團滅。治療可佈置場地和盾減，LB 結束後記得抬血。`],["光之戰士殲滅戰",`P3
      BOSS 會在 DPS 讀條 LB 時立刻為自己附加 純正神聖領域，DPS 務必要在 BOSS 讀條時使用 LB，否則 LB 傷害無效。
      P3 開場會先來一次魔法劍・絕對爆炎或魔法劍・絕對冰封，需要記住並在之後處理。
      BOSS 動畫召喚黑白魔，之後場地上依次出現塔（圈），需要有至少 2 名玩家踩塔才可保證團隊安全。一共出現 4 個塔，第四個塔判定結束后，BOSS 讀條魔法劍技・光明利劍，並與之前的冰封 / 爆炎一起判定。
      之後 BOSS 召喚黑騎詩人，場地出現 2 個黑點，同時場地北側出現巴哈姆特。玩家需要在沒有黑點且沒有巴哈的 1/4c 場躲避 AOE，接下來會有一人被點名距離衰減 AOE（身上有白色向外的箭頭），被點名的人前往角落放點名，剩下的人前往場地中央分攤。
      之後 BOSS 對 T 使用死刑，然後開始攢 LB，並按順序使用。
      1 格 LB：隨機點名 3 人放扇形 AOE，不重疊即可。
      2 格 LB：點名 2 治療直線分攤，治療在 BOSS 左右兩側，其他人分別去左右分攤即可。
      3 格 LB：點名 4 人巨大範圍的 AOE，被點名的人去場地角落不重疊放置。
      之後場地再次出現兩個光點畫三角形，注意在兩個三角外側躲避。躲避完三角后立刻有一次冰封 / 爆炎，注意處理。
      AOE 后 BOSS 讀條魔法劍・絕對爆炎或魔法劍・絕對冰封，需要先記住並在之後處理。
      BOSS 動畫召喚忍者，忍者會在場地一側召喚水柱擊飛玩家（地面上會有明顯的擊退方向標記），可以在看到場地箭頭時立刻開防擊退技能，也可以走到水柱下方被擊退。擊退後立刻是全體分攤，推薦在場地中央處理。分攤后 BOSS 立刻讀條魔法劍技・光明利劍，並與之前的冰封 / 爆炎一起判定。時間比較緊張，要注意。
      最後場地出現 4 只巴哈姆特並與 4 名玩家連線，被連線玩家注意把連線方向引導到場外，巴哈姆特會對連線方向 160 度範圍噴火，範圍非常大。
      對 T 死刑後場地出現扇形 AOE，第二波扇形會覆蓋第一波扇形的安全區域，因此先在安全區域等待第一次扇形判定，立刻左右移動躲避第二次扇形，同時處理冰封 / 爆炎。第二波扇形與冰封 / 爆炎會同時判定。`],["魔術工房瑪托雅工作室",`BOSS 1 土泥人
      地面會出現泥球與玩家連線，場地四方向有 4 個流沙坑，玩家需要把自己放在球與流沙坑之間，球在經過一段時間后沿連線方向飛出去，泥球飛進坑裡就會被流沙吸收掉，否則球會留在場地上繼續飛。每飛一次會疊加一層易傷，所以儘可能爭取一桿入洞。
      第二次會有兩個沙坑被小怪擋住無法使用，要注意。`],["魔術工房瑪托雅工作室",`BOSS 2 水滴精
      BOSS 向場地一側連線時，連線方向場外的水管會發亮，發亮的水管會流水出來造成直線傷害，選擇沒有發亮的水管方向躲避。
      BOSS 從北場跳到場外時，北場會出現一朵雲，同時場地出現間歇泉，玩家需要找最靠北的間歇泉跳上雲朵，擊殺上面的小怪。`],["魔術工房瑪托雅工作室",`BOSS 3 仙子豬之母
      BOSS 跳到場邊，場地出現箭頭指示時，需要到場地邊緣 BOSS 腳下，讓 BOSS 把自己吹到中央的安全區（防擊退無效）。
      距離衰減攻擊之後，請繼續貼遠離 BOSS 的場邊對著墻跑（近戰尤其注意克制住自己），BOSS 會在場地另一側吸氣，在吸氣結束時若被吸到 BOSS 腳下則必死。BOSS 中途會增加一次吸力（一開始是左右平移不會倒退，增加吸力之後左右平移也會有一些後退）。確保吸氣機制完全結束之後再回頭打 BOSS。
      場地中央出現風元精時，打掉後會被彈飛，此時可以在空中觀察 BOSS 的位置和箭頭方向，回到地面後向 「BOSS 方向」 跑過去等著被吹飛即可。`],["綠寶石神兵破壞作戰",`P1
      開場對 T 死刑后不久，場地依次出現扇形 AOE 提示和週身 AOE，同時 BOSS 身上出現箭頭。扇形 AOE 會沿著 BOSS 身上的箭頭方向旋轉一週，週身 AOE 為步進式擴散 AOE，需要玩家貼著扇形邊緣追著扇形跑，同時在擴散環兩側左右橫跳（不會跑就跟著別人跑）。
      BOSS 召喚炸彈並連線，找同極的連線，並靠外側躲避（不會跑就跟著別人跑）。
      BOSS 上下身份離后，有半場 AOE（觀察 BOSS 發光側即為 AOE 方向，場地也會有範圍提示但時間比較短，建議觀察 BOSS）。之後場地一側出現藍色圓圈，靠近圓圈等待被擊退（防擊退有效）
      第二次分離，BOSS 身邊會出現大量的手，此時在 BOSS 圈下躲避。
      讀條分而治之時，MT 開大減傷，其他人小範圍分散（普通本為單體傷害，極神為範圍傷害，推薦養成散開的習慣）。
      最後一次分離，有半場 AOE，同時場邊出現手，手會放出光球，光球會沿直線穿過中場，站在兩個光球之間即可躲避（近戰可以最遠距離輸出）。躲完光球后還有一次擊退。`],["綠寶石神兵破壞作戰",`P2
      隨機點名三名玩家出現藍色長條形擊退，同時場地周圍出現 AOE 範圍提示。被點名的玩家需要沿著擊退方向反向走到場地邊緣，並左右移動保證自己不會被擊退到 AOE 範圍里（防擊退無效），注意擊退儘可能不要重疊。
      點名玩家腳下出現十字或叉字，如果是十字就貼場地角落放置，如果是叉字就貼場地邊緣中央放置，有劍落下並出現 AOE 範圍提示時就可以回到場地中央了。
      隨機落下三波槍刃（圓形 AOE），並出現直線 AOE 提示。直線 AOE 遵循先出現先判定的原則，注意躲避（時間較長，不要急著動）。實在不行可以硬吃 1 個等治療抬血，但千萬不要多吃。
      BOSS 消失後會出現幻影，同時場地周圍出現士兵。士兵們會集結到北場，玩家需要觀察北場士兵行列之間的空缺，在空缺位置躲避 AOE，會連續釋放 3 次。第二波士兵出現在場地西側，躲避方法一樣。`],["黃金平原帕戈爾贊草原",`BOSS 1 阿姆魯克
      場地四周有路燈一樣的桿子，當自身被點名雷圈（附帶 引雷）時，前往附近的路燈，螢幕提示 ++ 落雷的地點好像改變了！++ 遠離迴避雷圈即可。
      BOSS 會有大面積的前後方範圍攻擊，遠端職業注意適當靠近 BOSS，以免來不及迴避。`],["黃金平原帕戈爾贊草原",`BOSS 2 魔導要塞
      螢幕提示 ++ 要塞炮開始充能！++ 時，場地北側的 3 個炮孔中會有 2 個開始發光，所有人注意迴避發光的炮孔。
      清理完小怪后，場地北邊出現傳送點，踩傳送點到高臺上輸出 BOSS。打到一半會被強制送回去進第二輪小怪。
      第二輪場地邊緣會出現橫穿的小火箭，速度很慢冷靜迴避。第二輪炮孔鐳射會帶有擊退效果，可以垂直擊退到安全區域，也可以直接開防擊退技能躲避。`],["黃金平原帕戈爾贊草原",`BOSS 3 真月巴哈姆特
      BOSS 讀條異形咆哮后，場地會依序出現小的 AOE 圈，AOE 之後會變為巨大的 AOE 範圍傷害。在最後出現的小 AOE 圈附近等待，第一個大 AOE 傷害出現后移動過去迴避餘下傷害。實在不行可以硬吃 1 個大圈的傷害。
      讀條死亡輪迴，是多次分攤傷害，所有人注意不要急著散開，適當交一些減傷。
      BOSS 使用真月核爆后，場地會出現黑色的圓圈，圓圈會逐步縮小。有中央安全和四角安全兩種模式，注意判斷。
      其他出啥躲啥即可。`],["伊甸希望樂園 再生之章1",`場地邊緣沒有空氣墻，失足會跌落要注意。
      核心機制 暗之戰技：BOSS 讀條同時一側手發光，前往另一側躲避。該機制會與後面各個機制組合反覆出現，要注意。
      零式波動炮：對T 點名直線大傷害，T 開好減傷。其他人注意離開 MT，直線範圍較寬，容易被掃到。
      讀條暗黑天空之後，場地會變為格子的樣子，稍後場地四角消失，BOSS 腳下為即死區。玩家在格子上停留一定時間后，腳下的格子會出現紅色預警，此時要立刻離開該格子，否則格子會消失，玩家會掉下去。
      讀條暗之氾濫：暗黑森林之後，場地四周會出現荊棘，玩家會與荊棘連線，注意一開始是發光指示線，當指示線變為不發光的荊棘時，才能扯斷。
      讀條廣角式跳躍波動炮，同時 BOSS 與場邊一側連線。所有人需要立刻前往連線場地的邊緣，躲避接下來的幾乎全場範圍的 AOE。
      之後出現活性彈，BOSS 與兩側連線，出現巨大範圍的 AOE 提示，只有一個很小的區域安全，讀條預警時間很長，細緻走位即可。
      第二次暗黑天空場地變格子之後，BOSS 會在場邊召喚 2 朵波動云，需要有人踩在云前面 加重並及時擊殺。
      之後基本上是機制復讀，出啥躲啥，由於全屏 AOe 較多，治療注意保證團隊血量。`],["伊甸希望樂園 再生之章2",`場邊紅色區域為即死區，踩上就死，要注意。
      讀條前向心聚爆並抬頭時躲到 BOSS 身後。場地邊出現影子，同時讀條影・前向心聚爆時，躲到有影子的半場。
      讀條後向心聚爆並撅尾巴時，躲到 BOSS 正面。場地邊緣出現影子，同時讀條影・後向心聚爆時，躲到沒有影子的半場。
      讀條影武者后，場地上出現 3 只大狗，其中有一隻與 BOSS 有連線，只有這只是真的。大狗圍著場地跳 5 次後，會使用前向心聚爆，所有人盯住真狗，當它開始讀條時，跑到它身後（場邊）躲避。
      讀條潛影，同時 BOSS 連線場地兩個角落，往沒有連線的方向躲避。
      讀條本影爆碎后，BOSS 會先對 T施放連續 4 次大傷害，並附帶 斬擊耐性降低。4 層后立刻使用影之斬擊。4 層 斬擊耐性降低吃影之斬擊必死，推薦MT 看到 BOSS 讀條影之斬擊直接開無敵。若 ST 是騎士，也可以 保護MT 吃 4 層 斬擊耐性降低，之後扯斷保護讓 MT 吃死刑。
      讀條左 / 右十億斬擊時，BOSS 一側抬手，躲到另一側。場地邊緣出現影子，同時讀條影・左右十億斬擊時，躲到影子的安全側。（以影子所在的位置為 「背」，場地中央為 「頭」。比如影子出現在 3 點，使用影・左十億斬擊，那麼影子面向 9 點，左側（即 6 點鐘方向）有 AOE，需要躲到右側，即 12 點方向。如果判斷有困難，可以跑到影子的位置並面對場地中央，此時面向的左右即為 BOSS 實際釋放技能的左右）。
      踩塔需要至少 2 個人一起踩，注意確保所有塔上的連線都消失才算正確處理。治療注意抬血，踩塔時會有 出血傷害。
      之後基本上是機制機制組合復讀，影系列技能會連續釋放兩次，注意判斷方向。`],["伊甸希望樂園 再生之章3",`場地邊緣沒有空氣墻，失足會跌落要注意。
      所有人需要注意，光焰圓光是大約半血傷害全屏 AOE，會在副本過程中反覆出現。適當給予團隊減傷，可以減輕治療壓力（尤其當團隊殘血時）。
      核心機制只有 2 個，但是要根據 BOSS 讀條時身上的特效（火焰、雷電、金光）判斷具體效果：
      燃燒擊：直線 AOE
      火：第一次傷害後會發生擊退，需要在第一次直線后立刻靠近 BOSS，或開啟防擊退技能。
      雷：會擴大一次，第二次直線寬度與場地內圓直徑相同，注意遠離 BOSS。
      光：會在玩家腳下留下 AOE，儘量集合躲避直線，看到 AOE 範圍提示后離開即可。
      罪壤刺：點名一名玩家
      火：分攤，所有人在 BOSS 背後集合分攤。
      雷：衝向被點名玩家，並附加 DOT。在 BOSS 附近吃衝鋒，注意抬血。
      光：衝向被點名玩家，並附加 大爆印。離開人群吃衝鋒，大爆印倒計時結束後會發生全屏 AOE，注意佈置減傷和抬血。
      讀條爆印銘刻，對MT 釋放大傷害，同時附加 爆印buff，倒計時結束時會釋放全屏 AOE。注意為 MT 抬血，並做好全團減傷。
      讀條光輪召喚，觀察 BOSS 週身的特效，如果是雷，則去紅色光輪那側的安全區域，如果是火，則去藍紫色那側的安全區域（無視中間的光輪顏色）。與 BOSS 特效同色的光輪會擴大爆炸，範圍參照地板上的花紋。
      至天絕技是一套組合機制，擊退玩家後場地中央出現鐮鼬並使用 270 度範圍 AOE，所有人被擊退後立刻回到場地中央躲避 AOE，然後觀察場地邊緣出現的 BOSS 分身，前往分身所在弧的中點，在第一個分身直線動畫出現后按下防擊退即可（若防擊退技能在 CD，則需要遠離雷分身所在的直線，並在火分身直線第一段傷害結束後向前走，防止被擊退到場外）。
      BOSS 讀條棱光幻影之後消失，玩家需要沿著場邊奔跑才能看到場邊的 BOSS 分身。若前往場邊時沒看到 BOSS，則一直跑到看到 BOSS 為止，並退回到沒有 BOSS 的位置。若前往場邊時看到 BOSS，則一直跑到看不到 BOSS 為止。推薦開啟疾跑。
      最後為前述機制的隨機組合，記住火雷的處理方法即可輕鬆通過。`],["伊甸希望樂園 再生之章4",`場地邊緣沒有空氣墻，失足會跌落要注意。
      有對 2 個 T 的死刑傷害，ST 注意在開怪后做二仇（開怪后打七八個技能之後開盾姿，或者讓 MT 直接退避自己等等都可以）。
      開場 AOE 后，場地北邊會出現 6 個蠻神水晶，BOSS 與水晶連線並讀條釋放，讀條結束后，BOSS 會釋放對應的蠻神技能：
      火：左右安全
      風：斜向安全
      水：腳下安全
      雷：遠離安全
      BOSS 血量降低到一定程度之後，出現轉場動畫，場地北側出現傳送陣，所有人跳上去傳送到小平臺。
      第一波小怪打完后，有 2 名玩家被點名，被點名玩家到旁邊放扇形 AOE，其他人站到 BOSS 與水晶中央的藍色區域內（放完點名單的玩家也可以回來）參與分攤。
      第二個平臺會分別點名 2 個治療分攤，兩名治療遠離中央水晶互不重疊，其他人均勻分組參與分攤即可。小怪快打完的時候會有場地擊退（有明顯提示），注意前往擊退來源方向或開啟防擊退。
      第三個平臺會有場地中央的擊退，注意前往場地中央。小平臺會被 BOSS 逐個擊碎，所以打完小怪后切勿救人（救起來會立刻失去落腳點再次陣亡），打完 3 個小檯子的小怪后回到大臺子上再救人。BOSS 讀條失樂園，所有人佈置減傷。
      轉場后MT 注意把 BOSS 拉麵向北方。
      BOSS 會讀條儲存並連線 2 個蠻神水晶，玩家需要記住這兩個水晶，然後當 BOSS 讀條施放時，前往之前記憶的安全點躲避。
      水 + 風 / 火：BOSS 腳下斜向 / 左右安全。
      水 + 雷：遠離 BOSS 前後安全
      雷 + 風 / 火：遠離 BOSS 斜向 / 左右安全。（先看是否有雷，有雷遠離 BOSS，水后風斜火側；無雷靠近 BOSS，風斜火側）
      第一次處理完成後再次儲存，之後 BOSS 讀條融合：泰坦，全屏 AOE 后出現機制：場地落下大小石頭，先向最遠離大石頭的地方躲避，第一波石頭爆炸后立刻離開原地，躲避第二波石頭爆炸。
      讀條愉悅之手時，向 BOSS 無發光一側躲避並分攤。處理完這次半場后，BOSS 使用施放（為融合泰坦之前儲存的那次）。
      之後連續 2 次釋放（即時使用蠻神技能），再次儲存，讀條融合：希瓦，全屏 AOE 后出現機制：場地變為滑冰場，被點名玩家適當移動，互不重疊即可。之後點名分攤，可以等冰地板消失後再移動（大概有 2s 多的時間，比較充裕）。
      再次讀條愉悅之手，之後分散。處理完分散后，BOSS 使用施放（為融合希瓦之前儲存的那次）。`],["鑽石神兵捕獲作戰",`場地四周都會掉下去，要注意。BOSS 的平 A 是對仇恨最高的 2 人，2T 都要注意開盾（沒有單人死刑，不用分 MT/ST）。另外平 A 為直線攻擊，T 注意離開人群（通常在平臺頭尾），其他人也注意不要離 T 太近。
      開場 AOE 后不久，BOSS 另一側出現二號機平臺，可以通過平臺上的圓點進行傳送（普通難度傳送有 3s CD，即 3 秒內不可再次傳送）。
      讀條裝甲展開后，BOSS 身體一側出現 3 道紅色爪子一樣的鐳射，有鐳射一側為危險平臺，需要到對側平臺躲避。
      點名 T 距離衰減 AOE，2 名 T 可以傳送到對面平臺躲避，本側平臺距離需要超過 3/4 場地距離為安全。
      第二次裝甲展開為分攤（有提示），在平臺中央集合分攤即可。
      BOSS 讀條代號 666 后變身，場地一側出現藍色擊退提示，靠近擊退邊緣等待被擊飛。然後觀察 AOE 提示前往安全半場。
      讀條敖龍技巧時，場地周圍會出現大量白球，BOSS 轉向一側。前往 BOSS 身後的場地邊緣中點（有紅色的範圍提示，可以觀察提示找到安全區）。若發現有橫向紅色提示覆蓋該安全區，可以在 BOSS Z 形移動后前往場地對面躲避橫向 AOE。其餘機制均有範圍提示，及時躲避即可。
      場地恢復后 BOSS 使用鑽石爆發，並點名 2 人步進式 AOE，推薦被點名的人前往對側平臺，等身上的點名提示消失後，傳送回本側平臺。步進式點名會橫跨空中不造成傷害（如果在本場地移動會波及其他隊友）。與此同時 BOSS 還會使用裝甲展開，注意觀察安全區。
      BOSS 使用飛手浮游炮后，場地邊緣會出現 「小手手」，發射直線鐳射，在處理其他機制時要同時注意面前不要有小手手。
      後續的裝甲展開還有分散式（BOSS 肩甲打開），會有範圍提示，注意不要重疊。`],["希望之炮臺：「塔」",`BOSS 1 傑克
      BOSS 讀條強攻擊時，觀察 BOSS 特效，張嘴發光為中央直線 AOE，兩手握拳全身蓄力為兩側 AOE，這個技能會與之後的機制組成複合機制。
      技能魔法衝擊彈 β 是點名的高傷害範圍 AOE，注意遠離人群開好減傷。
      BOSS 使用複製后，場地一側會出現一個 BOSS 分身，然後兩個 BOSS 身上會出現 1、2 點，會按標點順序先後釋放技能，依次觀察 + 躲避即可。
      BOSS 使用跳躍后，場地會出現一些方臺，BOSS 會使用擊退技能，需要用方臺擋住（否則會掉下去）。
      之後的複製會出現 2 個複製體，3 個 BOSS 輪流放技能。第二次跳躍后的複製體擊退時，本體會同時使用強攻擊，推薦在此時使用防擊退技能，以便安全處理機制。`],["希望之炮臺：「塔」",`BOSS 2 格雷特，韓塞爾
      有 2 個 BOSS，需要 2 名T 分別拉住並保持一段距離，距離過近會導致 BOSS 連線超神。請提前協商好。
      開場后不久，BOSS 會分別讀條強化：槍和強化：盾，其他人直接轉火讀條槍的 BOSS，拉 盾強化的 T 調整面向，讓盾 BOSS 的頭面向人群（面向槍 BOSS），盾 BOSS 會反彈正面以外的所有傷害，要注意。
      BOSS 跳到場邊讀條協作攻擊：橫掃時，注意 BOSS 手上的槍發光的位置，槍在外側時，靠近兩個 BOSS 中央安全；槍在內側時，反過來遠離兩個 BOSS 最遠的方向安全。
      同時點名一人分攤多人散開時，沒有被點名的人在槍 BOSS 下方參與分攤，注意分辨。
      讀條協作攻擊：槍突進時，兩個 BOSS 中央會出現一排紅球，找沒有紅球的位置並貼場邊即可。
      第二次使用協作攻擊：橫掃時，兩個 BOSS 中間有連線，表示他們會交換位置，所以需要反過來處理。
      最後魔障輪會搭配 2 種攻擊，第一次是搭配重突進，BOSS 會跳到場邊，並把武器側向一邊發光蓄力。玩家找另一邊沒有魔障輪的位置迴避。第二次是搭配槍掃擊，玩家需要先到場地一側迴避魔障輪，然後找槍掃的安全區域迴避。
      當擊殺其中一個 BOSS 后，另一個 BOSS 會開始無限讀條痛哭，隨機使用點名 AOE 或全體不可迴避 AOE，速度擊殺即可。`],["希望之炮臺：「塔」",`BOSS 3 紅衣少女
      開場后不久，場地周圍和中央會變紅，變紅區域為秒殺區域，要注意。
      被點名白色圈的人可以消除黑色墻壁，黑色圈的可消除白色墻壁。消除墻壁后，場地一側會出現黑色或白色的圓盤，並有對應顏色的線橫穿場地，需要用同色的墻壁擋住自己與圓盤之間避免傷害。
      一段時間后，會有若干名玩家被吸入場地中央，同樣用異色點名消除墻壁后，在同色墻壁外躲避場地中央墜落的隕石（隕石傷害為秒殺級）。
      對T 點名的紅色預警集中能量彈是圓形範圍傷害，注意遠離人群。
      場地出現若干少女分身，分身出現扇形 AOE 預警和旋轉提示。隨便找一個少女下方，隨著旋轉提示旋轉就可以（扇形 120 度攻擊，每次旋轉 120 度）。
      轉場后變為駭客模式，玩家變成小飛機，只有 2 個技能。1 技能是傷害，2 技能是變色，可以對異色單位造成傷害，免疫同色單位傷害。打掉磚塊和中央的球體后回到場地（打球體的時候場地上還會出現圓柱體，需要優先處理）。
      轉場后的巨大化 BOSS 會連線若干名玩家，同時身上出現箭頭，4 個箭頭指向 BOSS 為強制向前，左 / 右箭頭為強制向左 / 向右，移動距離大約有半場（一個地面黑圈直徑距離），如果開了疾跑，移動距離會變為接近 2 倍。注意自己是否與 BOSS 連線，然後判斷方向和安全區。
      再次出現圓盤 + 墻壁的組合，圓盤方向為交替出現，注意判斷方向。需要自己與圓盤之間有同色墻壁。三次之後地面出現一黑一百 2 個隕石落點，需要找到能同時阻擋黑白隕石的墻壁位置。
      如果擊殺速度較慢，之後還會出現複製 BOSS，分別使用狗鏈強制移動玩家還有少女分身，需要冷靜判斷連線和安全區。`],["希望之炮臺：「塔」",`BOSS 3.5 荀子 孟子
      核心機制只有 1 個，兩側蓋板掀開為兩側 AOE（中央安全），中央蓋板發光為中央 AOE（兩側安全）。
      從左上角往右下數第 9 個地板格子是 BOSS 鐳射所有 AOE 的重疊點，從這個格子往 4 個斜角方向移動一格就可以迴避各個方向的 AOE（黑魔在這個重疊點放黑魔紋，可以在不離開黑魔紋的前提下回避所有的 BOSS AOE）。場地內小鐳射和球需要自行迴避。`],["希望之炮臺：「塔」",`BOSS 4 偽造的神明
      BOSS 讀條釋放魔力時，面前出現一個圓環，圓環向左轉（逆時針）為左半場 AOE，向右轉（順時針）為右半場 AOE。
      讀條斷唱：白同時點名 3 個人，被點名的玩家向場地左下角和右下角移動（點名重疊沒關係），其他人注意躲避點名，點名圈結束后，會以它目前所在位置，沿箭頭方向發射步進式 AOE，需要躲開整個箭頭方向。
      BOSS 使用魔唱輪后，場面前方出現一些圓圈，同時天上會掉下紅球，紅球掉落到圓圈裡會向場地發射直線 AOE。注意左右移動躲避。
      轉場后 BOSS 使用穿透，場地變透明，場地下方會出現建築物，需要從上往下看，前往建築物短邊所在場地邊緣躲避。倒計時結束后，建築物會從下方穿場而過。
      訊號燈機制需要站在紅燈所在的軌道上，綠燈軌道會有火車通過。
      BOSS 使用武裝時，會有石頭凝結在她身上，凝結在兩手上是兩側 AOE（身下安全），凝結在身下是中央 AOE（兩側安全）。
      場地中央出現圓圈時，自己身上會同時出現黑白圈。中央圓圈落地的時候，需要讓自己的同色半圈對著場地中央。
      讀條崩落時，場地邊緣會出現一個巨大的石柱，前往石柱附近被擊退倒斜對角。兩次擊退後，石柱會傾斜，落下並形成 AOE 傷害，注意判斷方向躲避（影子不指示方向），石柱傷害為秒殺傷害。
      其他為已有機制復讀 / 組合。`],["樂園都市笑笑鎮",`BOSS 1 面像
      場地兩側有大板子，紅色的攻擊會賦予 躁怒的詛咒，藍色的攻擊會賦予 微笑的詛咒。
      BOSS 和哪側連線，那側的板子會進行攻擊，自己身上帶紅色 buff，就去吃藍色的，反之亦然。板子會上下翻轉，同時可能會有分散、擊退等機制，注意觀察冷靜處理。
      同色的 buff 吃 3 次就會暴斃，請勿這麼做。兩塊板子之間的窄線區域切勿踩踏，吃到直接 999 萬原地去世。`],["樂園都市笑笑鎮",`BOSS 2 框架工作員
      BOSS 讀條前方躍進攻擊后，會向自己面前方向跳躍 1 個 BOSS 圈的距離，躲開 BOSS 正面方向。
      BOSS 使用 = 產生工作員 == 后，場地上的 2 架無人機會產生 2 個小 BOSS 模型往前跳，可以通過無人機的方向預判小 BOSS 的跳躍方向，畫面上也會有箭頭提示，注意迴避。`],["樂園都市笑笑鎮",`BOSS 3 大笑臉
核心機制是左右兩側的傳送帶會出現箭頭，單個箭頭的半側場地會在前半場出現炸彈，三個箭頭一組的半側場地會在後半場出現炸彈。
通常預設情況下在有 3 個箭頭一組的半側場地，靠近 BOSS 處理。
當場地上出現採掘炸彈時，可以無視它，若左右半場的安全區正好在炸彈位置的話，T 也可以開好減傷去把炸彈踩掉（炸彈的爆炸範圍比它本身的範圍略大）。
讀條左 / 右腕分解炮時，讀哪邊躲哪邊，如果跟傳送帶炸彈機制同時出現，則先處理傳送帶炸彈，后處理左右炮。`],["電腦夢境斯提格瑪四",`BOSS 1 歐米茄原型
出啥躲啥。
讀條前 / 後方迎擊火箭時，會以 BOSS 前 / 後半場出 AOE，去另一側躲避。
點名分散圈時會在地面上留下火圈，儘量把火圈放在場地邊緣。
BOSS 讀條歐米茄滑躍時，會隨機點名一名玩家，同時出現分攤和擊退標記，所有人儘量在中場靠近分攤，擊退時小心不要被擊退進火圈。
被連線火箭彈的玩家就躲開跑就行，注意儘量不要讓連線橫穿其他玩家。`],["電腦夢境斯提格瑪四",`BOSS 2 拉姆達總領
場地出現紅色預警軌跡后，BOSS 會沿著軌跡在場地橫衝直撞，最後到場邊向場中發射半場 AOE。注意觀察軌跡終點，在安全範圍內向終點方向靠近。
讀條狙擊式波動炮時，場地中央出現 AOE 範圍預警，並同時出現圓點標記（俗稱麻將），有相同數量圓點的玩家在圓點附近等待引導 AOE。BOSS 讀條結束後會啟用場地中央的圓點，令 1 點發射直線 AOE 到頭頂 1 點的玩家，2 點發射直線 AOE 到頭頂 2 點的玩家，以此類推。`],["電腦夢境斯提格瑪四",`BOSS 3 斯提格瑪四
BOSS 先在南場召喚小怪，放半場 AOE 后自爆，請在小怪自爆前擊殺。
之後在西場召喚小怪，放正面扇形 AOE 后自爆，請靠近西場躲避 AOE，在小怪自爆前擊殺。
BOSS 變身為螺旋柱體的時候，需要遠離 BOSS；變身為圓環形時，需要靠近 BOSS。之後這個機制會與強制移動機制組合，注意自己的移動方向處理（移動距離大約是 1 個 BOSS 圈直徑差一點）。`],["海德林暉光殲滅戰",`/p 【結晶 冰】
/p 　　D3 MT D4
/p 　　H1  ■  H2
/p 　　D1 ST D2
/p 【結晶 水】
/p 　    西：MTD1D3H1　東：STD2D4H2
/p 【結晶 土 / 光芒刃】
/p 　    boss背後
/p 【小怪階段】
/p        dps從左側開始先打發光水晶，t將小怪拉到不發光水晶一側
/p 【第一輪光波】
/p        T：去對面　DPS：北邊　H：原地
/p 【幻日】
/p        第三組對側集合
/p        內側：MTSTH1D1D2 外側：H2D3D4`],["萬魔殿 邊境之獄1",`場地邊緣為即死圈，請注意。
      BOSS 讀條懲罰抽擊同時，甩出一側鎖鏈，該方向會有半場 AOE，注意躲避。
      讀條懲罰連擊隨機點名一名玩家，擊退後分攤，可以用防擊退處理。
      讀條冰火侵蝕后，場地被分為 4 塊，並出現冰火塊，玩家被隨機賦予 寒冰侵蝕或 火焰侵蝕。場地的冰塊會從下往上依次碎掉，並給場地內的玩家對應 buff，玩家需要找到與自己異色的元素塊吃 buff（兩次元素塊碎裂的時間間隔很長，足夠移動），不要站在場地分塊的交界處，會直接暴斃。
      場地變為紅綠相間的飛鏢盤后，BOSS 讀條爆鎖時，身子周圍會有光球浮現，白色的炸白綠地板，紅色的炸紅地板，注意躲避，這個機制會跟前面的鎖鏈組成組合技。`],["萬魔殿 邊境之獄2",`戰鬥開始後場地邊緣出現即死圈，注意開場時不要過於靠邊，會直接暴斃。這個 BOSS 沒有身位，近戰可以放心輸出。
      開場先是點名 T 的雙人分攤，然後 BOSS 使用核心機制吐息飛瀑，頭和身子轉向不同的方向，地面的黃色箭頭表示這個方向的直線 AOE，頭頂的紅色箭頭表示該方向的半場 AOE。可以無腦走向紅箭頭的背面並躲開黃色箭頭前後，最近不能超過下水道的鐵板（超過會吃到身體的直線 AOE）。
      下水道漫水后，只有下水道鐵板和 4 個高臺是安全區域，其他地方都不可以踩，後續機制都需要在這些安全區域里處理。後續機制包括分散、集合（頭頂倒三角）、擊退。
      水位退下後，BOSS 的頭會飛到場邊，進行半場 AOE。之後會點名一名T 角色距離衰減，另外隨機點一名玩家直線分攤。被點名的 T 玩家遠離人群去角落放技能，其他人集合分攤。
      之後全都是出啥躲啥和之前見過的機制組合，冷靜應對即可。`],["萬魔殿 邊境之獄3",`場地邊緣為即死區。
      BOSS 讀條魔力煉成：劫火焚天后，觀察 BOSS 身上彈出的火球，如果是一個巨大的火球，立刻去場邊躲避；如果是一圈小火球，就在場地中央觀察，場地上會依次落下一些 AOE，前往第一個落下的 AOE 圈的右邊（第二個圈的位置）躲避後續傷害。
      對 T 的死刑是範圍傷害，無關人員請勿靠近 T。
      BOSS 讀條暗之炎之後，場地上出現 4 個暗之炎小怪，同時有 4 名玩家被點名白圈，玩家需要用點名的白圈去砸暗炎。一個圈最多可以砸到 2 個暗炎，寧可多吃傷害也不要漏，如果漏砸了，暗炎會放出大炎上技能。
      左 / 右翼焚燒就是左右側 AOE，注意躲避。
      BOSS 上天后會出現在場邊，並從場中俯衝飛過，玩家需要在場地兩側躲避。後續還會加上分散，所以儘量不要在同一側（單側最多可以放下 5 名玩家），冷靜分散即可。
      第一次俯衝後進入小怪階段，需要 2 名T 都開啟盾姿，把分別小鳥拉到場邊，第一波小鳥擊殺后還對再出現一波小鳥，這 2 波 4 只小鳥都不能在別的鳥的圈裡，否則會導致後續 AOE 變得非常疼。
      之後小鳥會變成… 奇怪的樣子攻擊 ST，請ST 務必開啟盾姿，另外需要同時關照兩名 T 的血線。如果發生倒 T 的情況，請儘快復活並保持 2 仇（否則會有 DPS 吃傷害，務必注意）。
      十字地火是從場地四周出現細條地火，最終連在一起形成十字，並炸成一個比較寬的十字地火。這個機制在後面會和暗炎機制同時出現，等地火消失後立刻移動，寧可多吃傷害也不要漏。
      後續完全是出啥躲啥，前面機制組合復讀。`],["萬魔殿 邊境之獄4",`場地邊緣為即死區，要注意。
      BOSS 讀條佈置劇場后，場地會落下幕布，幕布掀開后，會出現不同的場地。幕布中央的圓坑不能踩，踩了會中很疼很疼的 DOT（走出來就消失）。
      幕布會隨著之後板畫的讀條造成不同的效果：
      雷板畫：雷地板產生 AOE，同時場地中央距離衰減 AOE，需要在雷地板以外的場地貼邊躲避。
      水板畫：水地板產生 AOE，同時從場地中央擊退，可以開防擊退處理，否則需要站在場地中央躲開水地板方向擊退。
      毒地板：單人點名 AOE，需要躲開毒地板的同時散開處理。
      火地板：分攤，注意躲開火地板，集合分攤即可。
      出現塔的時候，職能圖示上標有禁止的叉子，表示該職能的人不能踩塔。請在保證所有塔都有人的前提下，正確踩塔。
      BOSS 回到場中讀條換位強襲東 / 西 / 南 / 北時，場地對應一側會出現劍或是斗篷的標記，如果是劍，需要在標記兩側躲避，如果是斗篷，需要在標記正面（擊退）處理。
      BOSS 讀條聚血后，場地四周出現 8 個球，並與玩家連線。球上會出現禁止的職能叉子，請在保證撞對的前提下處理，一個人最多可以撞 2 個球（撞 3 個會獲得 死亡宣告debuff）。
      後續均為機制復讀或組合機制。`],["究極神兵幻巧戰",`/p 究極神兵擊退撞球
      /p 目前MT：向北擊退（不撞球）
      /p 目前ST：向東擊退/防擊退（全減撞東）
      /p 人群：向南擊退（南→西）
      /p 第三次（四組球）MT擊退時開LB
      /p 如果ST減傷不夠則跟人群一起撞
      /p 撞球傷害穿無敵！不要開無敵撞！`],["神兵要塞帝國南方堡",`BOSS 1 魔導死神改
      會隨機點名一人方向讀條高功率魔導鐳射，沒有範圍提示，注意躲開 BOSS 正面。
      召喚的小怪數量很多，T 注意拉住小怪仇恨，其他人注意使用範圍攻擊技能清理小怪。`],["神兵要塞帝國南方堡",`BOSS 2 魔導先鋒強襲型
      BOSS 讀條請求投放氣化炸彈后，場地上會出現一個圓形提示點，該技能為距離衰減型 AOE，需要遠離提示落點，距離越遠傷害越低。
      其他技能出啥躲啥即可，注意陶瓷合金鉆頭是對 T 大傷害技能，T 注意開好減傷。`],["神兵要塞帝國南方堡",`BOSS 3 莉維亞・薩斯・尤尼烏斯
      開場魔導離子是全屏 AOE，典雅女神連槍是對 T 大傷害技能。接下來無盡旋風斬是先內后外的 AOE，先在外側躲避中央的 AOE 圈，待中央的黃圈消失後，立刻前往中央躲避外側的 AOE 傷害。
      BOSS 讀條無限刃后，是花裡胡哨的 AOE 範圍攻擊，此時不可攻擊 BOSS，只需要認真觀察 AOE 範圍，遵循先出現的先爆炸原則進行迴避即可。如果實在找不到安全的落腳點，可以硬吃一個傷害，但萬不可吃太多。
      這個 BOSS 的請求投放氣化炸彈是老二的加強版，需要先躲避一堆 AOE，再找落點。她的氣化炸彈有 2 種模式：
      只有 2 個落點：場地邊緣四分之一弧位置安全（與 2 個落點連線成等腰三角形頂點的位置）。
      有 4 個落點：場地中央安全。
      最後 BOSS 使用 魔導增幅器后，進入狂暴狀態，會連續釋放全屏 AOE。治療保證團隊血線，其他人全力輸出吧！`],["最終決戰天幕魔導城",`進場～BOSS 1
      進門清完小怪之後解鎖魔導終端，傳送后沿著有小怪的路線前進即可，打完小怪後會開放繼續前進的路線 / 傳送點。
      BOSS 1 魔導巨兵二型
      出啥躲啥。
      BOSS 1 ~ BOSS 2
      打完老一傳送后，面前會出現魔導機甲，右鍵乘上魔導機甲，從墻壁的缺口出去繼續前進。
      機甲有 2 個技能（通常使用技能 1 就可以）：1.  魔導加農炮，對指定範圍內敵人造成 4500 點傷害。2.  魔導光子炮，對前方 10m 直線範圍內敵人造成 3000 點傷害。
      途中遇到的究極神兵原型機械臂會使用橫掃擊退玩家，注意不要離得太近。最後轟開超硬陶瓷合金防爆墻就是老二了。`],["最終決戰天幕魔導城",`BOSS 2 尼祿・托爾・斯卡艾瓦
      開戰後場地四周會出現電漿池，遠端注意稍微往裡站。
      有幾個需要注意的技能：
      過載震碎 ： 所有人集合到一起分攤（以後有此類標記的技能均為分攤）
      過載迴環 ： 擊退，向擊退中心站（以後有此類標記的技能，均為向箭頭方向的擊退）
      另外 BOSS 讀條啟動之後，會在場地中召喚一個魔導爪，並隨機連線一名玩家並接近。被連線的玩家注意和魔導爪保持距離（把線拉長），其他人儘快轉火擊殺魔導爪。
      其他出啥躲啥即可，治療注意關照團隊血線。`],["最終決戰天幕魔導城",`BOSS 3 蓋烏斯・范・巴埃薩
      打完尼祿后往裡走調查魔導終端，就進入最終動畫。
      BOSS 讀條恐怖劍技后，正面會出現 3 個發光的藍色叉字特效，這個叉字會向其正面發動直線 AOE，注意躲到兩側。
      其他需要注意的技能：
      從容不迫：分攤，和老二一樣有分攤標記
      幻象：場地北側出現一些 BOSS 分身，會放開場時出現的叉字接直線 AOE，如果開場的沒看懂，可以看這個機制躲避（站在兩個叉字之間即可）
      指引：按順序出現一些圓形 AOE 範圍提示，先出現的先炸，站在空地 / 第 3、4 波出現的 AOE 範圍里，等待第 1、2 波 AOE 炸開之後立刻移動過去以躲避。
      部分技能會緊密銜接釋放，治療注意關照團隊血線。
      BOSS 血量下降到極低后，會分身出 4 個蓋烏斯的幻影，同時積攢蓋烏斯的劍氣。玩家需要在躲避技能的同時擊殺 4 個幻影，當擊殺全部幻影或劍氣積攢到 100 時，BOSS 會釋放全屏 AOE，若劍氣為 100，該 AOE 為必殺傷害。在劍氣積攢滿之前努力擊殺全部幻影吧！`],["伊弗利特討伐戰",`T玩家注意開場投盾/飛斧/釋放/閃雷彈之後，穿過BOSS，讓BOSS背沖隊友。一方面這樣可以方便近戰隊友打身位，另外一方面BOSS會出現隨機扇形噴火，如果BOSS面朝隊友就會誤傷友軍了。治療注意BOSS噴火比較疼，及時抬血。
      其他玩家也要注意，不要跟 T 站在一起。
      打到一半的時候場地中央會出現火獄之楔，此時需要玩家轉火目標，但是 T 注意不要帶著 BOSS 甩頭（因為這個時候 BOSS 仍然會放扇形 AOE），如果摸不到就不要硬去摸，保證 BOSS 面向是第一的。
      打掉火獄之楔之後，BOSS 會上天，下來後放全屏 AOE 大招，治療注意抬血，BOSS 放完大招就會立刻去撓 T，所以記得優先抬滿 T 血，再慢慢處理其他隊友。`],["泰坦討伐戰",`場地周圍是會掉下去的，要注意。
      開場T 玩家同樣需要注意，投盾 / 飛斧 / 釋放 / 閃雷彈之後，穿過 BOSS，讓 BOSS 背沖隊友（以後要養成這樣的習慣，即開怪后讓 BOSS 背沖隊友）。
      開打后沒多久，BOSS 就會起飛，場地外周出現紅色 AOE 預警圈，外側場地會隨著 BOSS 落下而消失，千萬不要站上去（戰鬥中也不要過於貼邊，沒有空氣墻，會掉下去的）。同時 BOSS 落下是一個距離衰減傷害，越靠近場邊，受到的傷害越小。治療需要注意給站在太中間的玩家抬血，另外泰坦的跺腳也是全屏傷害，要注意。
      BOSS 除了普攻和跺腳之外，還會使用直線的衝拳，這個技能會擊退玩家，如果你看到衝拳的直線預警動畫就立刻躲避了，結果還是中了技能，請調低畫質，檢查網路連線情況。如果太靠邊就會被擊落到場外，千萬不可以中這個技能。
      BOSS 起飛 2 次之後會露出泰坦的核心，這時需要轉火打核心，同時點名一名玩家（被點名玩家有金黃地面特效），這名玩家會被花崗巖石牢封鎖起來，需要其他玩家打掉石牢解救。
      打掉核心之後，泰坦最後一次起飛，落下後進入最後階段，泰坦會使用新的技能流沙（圓形範圍預警），所有人都不要貪讀條或者技能 CD，看到範圍就立刻出圈，如果這樣還是會中技能，請調低畫質，檢查網路連線情況。
      泰坦的技能判定會是今後大部分副本技能判定時間點的參照，如果你無論怎麼調整設定，第一時間反應都無法躲開泰坦的技能（衝拳和流沙），那麼在今後的副本戰鬥中，你可能會感到非常棘手，建議從電腦及網路硬體下手解決。`],["迦樓羅討伐戰",`這是一個略有難度的 BOSS 了，T 玩家需要會觀察讀條，熟練穿 BOSS 躲避技能，而DPS 玩家需要及時轉火。迦樓羅幾乎所有平 A 都是正面順劈，注意不要跟 T 站在一起。
      開場T 拉北場對著墻，其他人遠離石柱，BOSS 會隨機點名玩家放小旋風，會傷到石柱。BOSS 讀條下行突風時，T 注意穿過 BOSS 躲避，吃技能的話會被 眩暈。
      BOSS 上天后，所有人到石柱后躲避（BOSS 會降落在 12 點位置，向 6 點方向放直線 AOE，讓石柱擋住 AOE 即可），AOE 動畫結束后，所有人再次遠離石柱。螢幕提示 ++ 迦樓羅的羽毛從天而降飛散到各處！++ 的時候，BOSS 身下會刷出很多羽毛，有能力的玩家可以預讀 AOE，把羽毛扼殺在 BOSS 附近，否則需要 DPS 去清柱子附近的羽毛小怪（一定時間后羽毛會炸掉，對柱子造成傷害）。
      BOSS 第二次上天再落下時，會直接召喚羽毛，T 在 12 點等著接 BOSS 即可，其他人繼續打羽毛。
      BOSS 第三次上天落下，會喊話四分五裂吧！，使用全屏 AOE，AOE 傷害可以被場地上的石柱抵消，石柱剩的越多，AOE 傷害越小，如果在之前的戰鬥中，石柱都被打掉的話，這個 AOE 是可能導致團滅的。
      石柱全部炸掉之後，BOSS 落下對 T 方向放寒風之歌，傷害很高，T 要注意在 BOSS 下來后繞背躲避，然後立刻回正面。`],["近東秘寶阿爾扎達爾海底遺蹟群",`BOSS 1 阿卜迦
      BOSS 讀條觸手潛行后，會放出 2 條觸手（第一次是 1 條），觸手在水面畫出一些鬼畫符之後潛入水底，接下來會以觸手消失的位置為中心放出巨大範圍的 AOE（半徑與場地半徑相同，建議貼邊躲避）
      讀條噴出毒酸后，場地上會分 3 次出現 AOE 範圍預警，默記順序，在第 3 批 AOE 圈位置等第一批 AOE 圈炸完后立刻移動過去。`],["近東秘寶阿爾扎達爾海底遺蹟群",`BOSS 2 裝甲戰車
      這個 BOSS 會召喚浮游炮，同時自身周圍出現防禦壁，反射浮游炮的攻擊：
      第一次為 4 角浮游炮，找兩個防禦壁之間的空檔躲避即可。
      之後會出現對角浮游炮 + 單邊雙排浮游炮配置，在中央行列靠近 2 排浮游炮的半格里，找面前沒有防禦壁的空檔（參見配圖綠色安全區示意）。
      召喚浮游炮時，BOSS 腳下亦有傷害，不可踏入。`],["近東秘寶阿爾扎達爾海底遺蹟群",`BOSS 3 門奴
      核心機制 1：把玩家抓到場地一側，進入 旋轉移動狀態。按左右移動鍵可以改變頭頂箭頭的方向，同時轉彎半徑巨大（大約 1~1.5 個格子），感覺就像在超級滑的冰面上轉向，需要提前規劃好轉彎的路徑。
      第二次旋轉時，BOSS 會同時附帶場地直線 AOE，固定第一次中央，第二次東側（右側），旋轉調向時要注意迴避，如果連續吃到 2 次 AOE 傷害會死。
      核心機制 2：讀條魔布附魔的同時，BOSS 抬手，粉紫色連線連線垂下的布幔，連線同色的布幔會發生圓形 AOE，躲到異色布幔下方即可。`],["燦爛神域阿格萊亞",`BOSS 1 比爾格
      場地出現藍色圈：擊退。錘子發光 + BOSS 腳下出現雷電提示 + 藍圈時，將會以藍圈為中心，發生黃色雷電提示的十字或叉字扇形 AOE，調整擊退方向時要注意。
      兩側場地消失的動畫並沒有傷害，兩側消失後，場地圖案變為 3x5 的格子。
      場地變化后，長邊兩側會出現錘子動畫，錘子會將場地橫推一格，第一次為演示動畫，在中間一列是安全的。
      第二次會在某一行的格子上出現紫色的錘子，並出現紫色的 AOE 範圍預警。紫色錘子所在行會被側面的錘子敲擊移動，預判紫色錘子的移動方向，找安全格子躲避。
      第三次 BOSS 會跳到場地一側，釋放覆蓋 3x5 格子範圍的 AOE。找到 3 行都被 AOE 預警覆蓋的行，並前往遠離錘子的一邊躲避（錘子敲擊移動格子后出現安全區）。
      讀條產生分裂體后，場地東側（右側）出現 5 個 BOSS 分身，其中若干個會發光，發光分身的 AOE 行進速度較快。前往不發光分身的面前，待旁邊發光分身的 AOE 走過去後，穿過 AOE 躲避剩餘傷害。`],["燦爛神域阿格萊亞",`BOSS 1.5 拉爾戈神使
      讀條壞滅雷斬，正面 180 度無範圍提示 AOE（僅在最後一秒有展示），看到讀條就繞到 BOSS 背後。
      抬手出現雷球，2 個雷球會從中央到場邊，然後分別繪製 1/4 圓的扇形區域，被圈起來的區域會產生 AOE。
      之後會有一次組合技，先判定雷球的扇形場地，再判定正面的 180 度 AOE，冷靜應對即可。`],["燦爛神域阿格萊亞",`BOSS 2 拉爾戈
      BOSS 讀條壞滅雷擊點名 3 個T 的時候，T 注意開啟減傷並遠離人群，這個大傷害技能為範圍傷害。
      BOSS 背上有 4 個環，作為這個本的核心機制：
      丟出 2 個環放大，2 個小環在手側，同時讀條幻天破壞拳並蓄力：觀察蓄力手一側的小環的顏色，這個顏色對應的大環所在半場有 AOE，去異色半場躲避。
      有大環的同時還有彗星落下的標記：若蓄力側為紅色，則彗星落點正下方安全；若蓄力側為藍色，則遠離落點且紅色大環所在半場安全。
      場地出現紫色範圍提示，同時有較細的綠線延伸到場地的手指上：綠線表示擊退的方向，找綠線一路投影到立起手指，且盡頭沒有其他 AOE 提示的手指為安全。`],["燦爛神域阿格萊亞",`BOSS 2.5 阿格萊亞雙獅
      2 頭獅子同時讀條時，頭頂會出現 1、2 的標記，標記為 1 的獅子先放技能，標記為 2 的後方，據此判斷迴避的時機。
      如果實在躲不來，可以考慮硬吃 1 個技能，但不要 2 個都吃。`],["燦爛神域阿格萊亞",`BOSS 3 阿澤瑪
      BOSS 讀條兩翼紅炎風后，場地上會出現一些紅球，這些球是會爆炸的，注意不要肆意走動。
      讀條蜃景后，會出現一些 BOSS 的分身，這些分身會把面前的球往分身面向所指方向吹過去（可假想為 3x3 的場地，一次吹 1 格），第一次在分身下方躲避較為安全，第二次需要根據分身位置和箭頭方向自己尋找安全點。
      BOSS 讀條神炎點名 3 個T 的時候，T 注意開啟減傷並遠離人群，這個大傷害技能為範圍傷害。
      之後 BOSS 會丟出 2 把扇子，扇子沿著場地周圍飛行，當 BOSS 讀條炎扇流舞・終炎時，扇子會爆炸，範圍非常大（與場地半徑相同），建議在 BOSS 身下觀察扇子位置，待扇子停止飛行后，立刻向沒有扇子的方向躲避。
      讀條烈火旋掃為正面 270° 範圍 AOE，僅有背後安全。
      紅炎斬 + 蜃景：場地出現十字地火提示，以及 2 個分身；第一次前往分身所在 1/4 場地躲避，第二次從無分身的場地觀察相鄰場地的分身，沒有面向自己的分身所在的場地安全。
      讀條燎原之炎后，場地中央僅剩餘一塊三角形區域安全，會依次出現 3 次擊退提示，在第一次擊退邊中點觀察並等待，被擊退後立刻移動到第二次擊退邊的中點，以此類推。
      這個 BOSS 傷害極高，機制很快且密集，治療多關照團隊血線，其他有救場能力的隊員也儘量多關照隊友。`],["燦爛神域阿格萊亞",`BOSS 4 納爾札爾
      鱗片披風向上飄，發橙色的是納爾，頭頂有藍色煤氣灶火焰的是扎爾，所有生死之擇的讀條都需要觀察 BOSS 形態進行判斷（從第 2 次開始，BOSS 有可能在讀條中途進行換人，換人時會有氣泡提示，建議在讀條後半再進行判斷）：
      生浪死環之擇 ： 橙色炸中間，藍色炸周圍，按相反顏色躲避。
      生轟死爆之擇 ： 橙色需要分攤的直線 AOE，藍色追蹤炮。建議被點藍色點名的人遠離人群，直到判定結束，若判定為藍色的扎爾，則需要繼續在場外繞場移動，待追蹤炮傷害結束后回人群。
      生死襲火之擇 ： 出現擴散型 AOE 提示，根據顏色前往不會炸的 AOE 提示圈之間迴避。這些 AOE 圈之間有極小的安全區，極限貼邊的話也可以確保安全。
      生死混一之擇 ： 前兩種的組合，先處理圓環機制，再處理分攤 / 追蹤炮。
      其他技能：
      炎天凈火，點名 3 人扇形 AOE，1 人分攤。建議被點名扇形的人互不重疊遠離，其他人儘可能靠近 BOSS 腳下進行分攤。
      納爾神火，需要 3 個T 進行分攤。
      炎獄破，紫色鐳射所向半場 AOE，讀條中可能會變更方向。
      死魂爆：天上降落若干隕石，落地時 AOE 範圍極大（AOE 直徑與場地半徑相同），需要走超過半場才能迴避，注意觀察隕石的位置和順序進行迴避。
      烈火之財：BOSS 移動到場邊，並連線場地中隨機若干個點，同時提示機制型別；第一次必定為【1 點】擊退 +【2 點】遠離，第二次需要觀察后判斷，如果出現連續擊退難以調整，可以使用防擊退技能處理。
      天秤之試煉：BOSS 上天，場地上出現 3 個影子並連線玩家，沒有被連線的人請跟隨自己小隊隊員。打倒影子后，之前被連線的玩家前往另外一半場地，沒有被連線的玩家留在原地。觀察場地北側的天平，需要保證天平均衡，已站定 / 想不明白的玩家不要隨意亂跑。若天平不平則會直接團滅。`],["巴爾巴莉希婭殲殛戰",`/p 【散開基準】ヘアレイド：ボス基準　それ以外：北基準
      /p 【基本散開】 【ペアバンプ】
      /p D3 MT D4　　　MTD3
      /p H1　　H2　 H1D1　 H2D4
      /p D1 ST D2　 　　 STD2
      /p 【ヘアレイド外周:足元】
      /p D3H1D1MT←▲→STD2H2D4　※外周AOE：T外周,D1D2內側
      /p 【距離減衰+頭割り】【プレステ：TH固定法】
      /p 　　MT　　ST　　　　　　MT(A)
      /p 　　　　◎ 　 　 　　　H1(D) DPS H2(B)
      /p 　　　頭割り 　 　 　　　　ST(C) ※Tの２回目は1回目と同じマーカー付近
      /p 【呪髪拘束1】① ③マーカー頭割り
      /p 【呪髪拘束2】DPS：時計回り　TH：反時計回り
      /p 【4連円範囲捨て】Cマーカー付近から時計回り
      /p 【プレステバンプ】対角：DPS時計側 TH反時計側とペア　隣：隣組とペア`],["巴爾巴莉希婭殲殛戰",{A:{X:100,Y:0,Z:85,ID:0,Active:!0},B:{X:115,Y:0,Z:100,ID:1,Active:!0},C:{X:100,Y:0,Z:115,ID:2,Active:!0},D:{X:85,Y:0,Z:100,ID:3,Active:!0},One:{X:107.5,Y:0,Z:92.5,ID:4,Active:!0},Two:{X:0,Y:0,Z:0,ID:5,Active:!1},Three:{X:92.5,Y:0,Z:107.5,ID:6,Active:!0},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}},"ぬけまる"],["薩菲洛特幻巧戰",{A:{X:0,Y:.074,Z:-11.162,ID:0,Active:!0},B:{X:17.5,Y:.052,Z:0,ID:1,Active:!0},C:{X:0,Y:.052,Z:17.176,ID:2,Active:!0},D:{X:-17.5,Y:.052,Z:0,ID:3,Active:!0},One:{X:5.7,Y:.082,Z:-17.5,ID:4,Active:!0},Two:{X:-5.7,Y:.082,Z:-17.5,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}},"奶油咖啡"],["薩菲洛特幻巧戰",{A:{X:-12.618,Y:.052,Z:14.878,ID:0,Active:!0},B:{X:12.964,Y:.052,Z:14.779,ID:1,Active:!0},C:{X:-17.952,Y:.052,Z:-8.664,ID:2,Active:!0},D:{X:.207,Y:.073,Z:-7.358,ID:3,Active:!0},One:{X:-9.917,Y:.052,Z:-2.812,ID:4,Active:!0},Two:{X:10.113,Y:.052,Z:-2.826,ID:5,Active:!0},Three:{X:18.873,Y:.052,Z:-6.124,ID:6,Active:!0},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}},"Standard"],["薩菲洛特幻巧戰",`/p 幻魔神【紫圈中場固定】站位宏
       /p 魔神之怒（分組分攤）： 左ST治療　右DPS
       /p          【綠紫圈】                              【知識分散】
       /p             H1   H2                                D1            D2
       /p 　  D3               D4                          MT            ST
       /p D1     MT     ST     D2        撼地                                    撼地 
       /p 　　　     紫                          H       D3      H       D4      D
       /p 　 　　BOSS                  
       /p ↓↓↓↓↓↓↓↓↓↓
       /p 小怪：大MT　小ST　順序→小大小小大小
       /p 塔(Debuff有)　左：坦克治療　右：DPS  同組同色坦克與D1D2補位
       /p 塔(Debuff無)　左：MT　右：ST
       /p 撼地　左：治療　右：DPS`,"紫圈中場固定 候鳥癥候羣Xyz"],["薩菲洛特幻巧戰",`/p 幻魔神【紫圈場邊固定】站位宏
       /p 魔神之怒（分組分攤）： 左ST治療　右DPS
       /p      【綠紫圈】                                【知識分散】
       /p              紫                                      D1            D2
       /p   H1               H2                           MT            ST
       /p D3                   D4          撼地                                    撼地 
       /p     T      D1    D2               H        D3      H       D4      D
       /p  　 　BOSS                  
       /p ↓↓↓↓↓↓↓↓↓
       /p 小怪：大MT　小ST　順序→小大小小大小
       /p 塔(Debuff有)　左：坦克治療　右：DPS  同組同色坦克與D1D2補位
       /p 塔(Debuff無)　左：MT　右：ST
       /p 撼地　左：治療　右：DPS`,"紫圈場邊固定 候鳥癥候羣Xyz"],["異聞希拉狄哈水道",{Name:"樹歌異聞老一 請無視預覽結果",MapID:878,A:{X:-335,Y:470.999,Z:-172.5,ID:0,Active:!0},B:{X:-317.5,Y:470.999,Z:-155,ID:1,Active:!0},C:{X:-335,Y:470.999,Z:-137.5,ID:2,Active:!0},D:{X:-352.5,Y:470.999,Z:-155,ID:3,Active:!0},One:{X:-340,Y:470.999,Z:-165,ID:4,Active:!0},Two:{X:-330,Y:470.999,Z:-165,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["異聞希拉狄哈水道",{Name:"樹歌異聞老二 請無視預覽結果",MapID:878,A:{X:-34.974,Y:521.004,Z:-289.063,ID:0,Active:!0},B:{X:-17.078,Y:521.004,Z:-270.978,ID:1,Active:!0},C:{X:-35.01,Y:521.004,Z:-253.093,ID:2,Active:!0},D:{X:-53.011,Y:521.004,Z:-271.008,ID:3,Active:!0},One:{X:-29.679,Y:521.004,Z:-283.259,ID:4,Active:!0},Two:{X:-29.614,Y:521.004,Z:-258.713,ID:5,Active:!0},Three:{X:-40.314,Y:521.004,Z:-258.73,ID:6,Active:!0},Four:{X:-40.326,Y:521.004,Z:-283.179,ID:7,Active:!0}}],["異聞希拉狄哈水道",{Name:"樹歌異聞老三 請無視預覽結果",MapID:878,A:{X:282.773,Y:533,Z:-123.748,ID:0,Active:!0},B:{X:282.699,Y:533,Z:-104.985,ID:1,Active:!0},C:{X:282.669,Y:533,Z:-86.283,ID:2,Active:!0},D:{X:282.742,Y:533,Z:-96.222,ID:3,Active:!0},One:{X:295.192,Y:533,Z:-123.832,ID:4,Active:!0},Two:{X:295.324,Y:533,Z:-104.984,ID:5,Active:!0},Three:{X:295.184,Y:533,Z:-86.201,ID:6,Active:!0},Four:{X:295.212,Y:533,Z:-113.823,ID:7,Active:!0}}],["異聞希拉狄哈水道",{Name:"樹歌異聞老三eis呪具3專用 請無視預覽結果",MapID:878,A:{X:289.473,Y:533,Z:-123.748,ID:0,Active:!0},B:{X:295.212,Y:533,Z:-113.823,ID:1,Active:!0},C:{X:289.473,Y:533,Z:-86.283,ID:2,Active:!0},D:{X:282.742,Y:533,Z:-96.222,ID:3,Active:!0},One:{X:295.192,Y:533,Z:-123.832,ID:4,Active:!1},Two:{X:295.324,Y:533,Z:-104.984,ID:5,Active:!1},Three:{X:295.184,Y:533,Z:-86.201,ID:6,Active:!1},Four:{X:295.212,Y:533,Z:-113.823,ID:7,Active:!1}}],["零式異聞希拉狄哈水道",{Name:"樹歌異聞老一 請無視預覽結果",MapID:878,A:{X:-335,Y:470.999,Z:-172.5,ID:0,Active:!0},B:{X:-317.5,Y:470.999,Z:-155,ID:1,Active:!0},C:{X:-335,Y:470.999,Z:-137.5,ID:2,Active:!0},D:{X:-352.5,Y:470.999,Z:-155,ID:3,Active:!0},One:{X:-340,Y:470.999,Z:-165,ID:4,Active:!0},Two:{X:-330,Y:470.999,Z:-165,ID:5,Active:!0},Three:{X:0,Y:0,Z:0,ID:6,Active:!1},Four:{X:0,Y:0,Z:0,ID:7,Active:!1}}],["零式異聞希拉狄哈水道",{Name:"樹歌異聞老二 請無視預覽結果",MapID:878,A:{X:-34.974,Y:521.004,Z:-289.063,ID:0,Active:!0},B:{X:-17.078,Y:521.004,Z:-270.978,ID:1,Active:!0},C:{X:-35.01,Y:521.004,Z:-253.093,ID:2,Active:!0},D:{X:-53.011,Y:521.004,Z:-271.008,ID:3,Active:!0},One:{X:-29.679,Y:521.004,Z:-283.259,ID:4,Active:!0},Two:{X:-29.614,Y:521.004,Z:-258.713,ID:5,Active:!0},Three:{X:-40.314,Y:521.004,Z:-258.73,ID:6,Active:!0},Four:{X:-40.326,Y:521.004,Z:-283.179,ID:7,Active:!0}}],["零式異聞希拉狄哈水道",{Name:"樹歌異聞老三 請無視預覽結果",MapID:878,A:{X:282.773,Y:533,Z:-123.748,ID:0,Active:!0},B:{X:282.699,Y:533,Z:-104.985,ID:1,Active:!0},C:{X:282.669,Y:533,Z:-86.283,ID:2,Active:!0},D:{X:282.742,Y:533,Z:-96.222,ID:3,Active:!0},One:{X:295.192,Y:533,Z:-123.832,ID:4,Active:!0},Two:{X:295.324,Y:533,Z:-104.984,ID:5,Active:!0},Three:{X:295.184,Y:533,Z:-86.201,ID:6,Active:!0},Four:{X:295.212,Y:533,Z:-113.823,ID:7,Active:!0}}],["零式異聞希拉狄哈水道",{Name:"樹歌異聞老三eis呪具3專用 請無視預覽結果",MapID:878,A:{X:289.473,Y:533,Z:-123.748,ID:0,Active:!0},B:{X:295.212,Y:533,Z:-113.823,ID:1,Active:!0},C:{X:289.473,Y:533,Z:-86.283,ID:2,Active:!0},D:{X:282.742,Y:533,Z:-96.222,ID:3,Active:!0},One:{X:295.192,Y:533,Z:-123.832,ID:4,Active:!1},Two:{X:295.324,Y:533,Z:-104.984,ID:5,Active:!1},Three:{X:295.184,Y:533,Z:-86.201,ID:6,Active:!1},Four:{X:295.212,Y:533,Z:-113.823,ID:7,Active:!1}}]].forEach(e=>{vS(e[0],e[1],e[2])})});function w(e){return` <a href='${e}' target='_blank'>出處</a>`}function vS(e,O,B){const S=de(e);if(!S){console.error(`預設標點庫匯入時，無法找到${e}對應的mapID`);return}y.zoneId[S]===void 0&&(y.zoneId[S]=[]),typeof O=="object"&&y.zoneId[S].push({Name:B??O.Name??e+"WayMark",Type:"place",Place:O}),typeof O=="string"&&y.zoneId[S].push({Name:B??e,Type:"macro",Text:O})}const mS={class:"markdown-body"},fS=ke('<h1>幫助</h1><h2>自述</h2><p>本專案意在使玩家不再受困于FFXIV客戶端本身的限制，提供一種自由的儲存/使用 <code class="">使用者宏</code>/<code class="">場景標記預設</code>的方式。</p><h2>使用</h2><p>直接在ACT懸浮窗中新增本專案的鏈接即可。</p><h2>依賴</h2><p><a href="https://github.com/Natsukage/PostNamazu/releases">鯰魚精郵差</a>（版本1.3.2.1及以上）</p><h2>數據來源</h2><p>預設自帶的標點、宏大部分改編于以下來源</p><ul><li><a href="https://github.com/Em-Six/FFXIVWaymarkPresets/wiki">FFXIVWaymarkPresets/wiki</a></li><li><a href="https://docs.qq.com/sheet/DY0ttR2xQT1Vjc2V4?tab=BB08J2">FF14標點大全</a></li><li><a href="https://nga.178.com/read.php?pid=369819381">NGA副本迷宮開門到打完系列</a></li><li><a href="https://www.ffxiv.cn/v2/">素素攻略站</a></li><li><a href="https://game8.jp/ff14/">game8</a></li><li><a href="https://bbs.tggfl.com/topic/223/ff14%E5%8D%AB%E6%9C%88-waymark-present-%E6%A0%87%E7%82%B9%E5%90%88%E9%9B%86">Waymark Present 標點合集</a></li><li>嗶哩嗶哩投稿</li></ul><h2>感謝</h2><p><a href="https://github.com/Natsukage">@Natsukage</a></p><h2>捐贈</h2><p><a href="https://afdian.net/a/Souma">愛發電</a></p>',14),IS=[fS],ES=Se({__name:"zoneMacro",setup(e,{expose:O}){return O({frontmatter:{},excerpt:void 0}),(B,S)=>(f(),Y("div",mS,IS))}}),XS=["innerHTML"],ZS={key:0},YS={key:0},MS={key:1},dS={class:"menu"},HS=P("i",{class:"vxe-icon-arrow-down"},"菜單",-1),FS=Se({__name:"zoneMacro",setup(e){const[O,B]=Xe(!1),S=sS();S.formatAllWaymarkPlaceData();for(const o in S.data.zoneId)for(const D in S.data.zoneId[o]){const t=S.data.zoneId[o][D];if(t.name&&(t.Name=t.name),t.type&&(t.Type=t.type),t.text&&(t.Text=t.text),t.place&&(t.Place=t.place),Reflect.deleteProperty(t,"name"),Reflect.deleteProperty(t,"type"),Reflect.deleteProperty(t,"text"),Reflect.deleteProperty(t,"place"),t.Type==="place"&&(Reflect.deleteProperty(t.Place,"MapID"),Reflect.deleteProperty(t.Place,"Name"),t.Place instanceof Array)){const I={A:t.Place.find(l=>l.Mark==="A"),B:t.Place.find(l=>l.Mark==="B"),C:t.Place.find(l=>l.Mark==="C"),D:t.Place.find(l=>l.Mark==="D"),One:t.Place.find(l=>l.Mark==="One"),Two:t.Place.find(l=>l.Mark==="Two"),Three:t.Place.find(l=>l.Mark==="Three"),Four:t.Place.find(l=>l.Mark==="Four")};for(const l in I)Reflect.deleteProperty(I[l],"Mark");t.Place=I}}const u={A:"A",B:"B",C:"C",D:"D",One:"1",Two:"2",Three:"3",Four:"4"},s=180,m=3,c=19,A=async()=>{let o=!1;window.location.href.indexOf("OVERLAY_WS")>0&&(o=await Promise.race([new Promise(D=>{callOverlayHandler({call:"cactbotRequestState"}).then(()=>{D(!0)})}),new Promise(D=>{window.setTimeout(()=>{D(!1)},1e3)})]),o||M.alert(`請先啟動ACT，再打開此頁面<img src='${oS}' style='width:100%'>`,"未檢測到ACT連線",{confirmButtonText:"確定",dangerouslyUseHTMLString:!0}))};return _e(()=>{addOverlayListener("ChangeZone",S.handleChangeZone),addOverlayListener("LogLine",S.handleLogLine),startOverlayEvents(),Ie(()=>{var o;(S.data.zoneId[S.selectZone]===void 0||((o=S.data.zoneId[S.selectZone])==null?void 0:o.length)===0)&&y.zoneId[S.selectZone]&&(d.success("用戶數據為空，載入預設數據"),S.data.zoneId[S.selectZone]=y.zoneId[S.selectZone])}),ze(Fe(S,"selectZone"),()=>{S.formatSelectZoneWaymarkPlaceData(S.selectZone)},{immediate:!0}),A()}),Le(()=>{removeOverlayListener("ChangeZone",S.handleChangeZone),removeOverlayListener("LogLine",S.handleLogLine)}),(o,D)=>{const t=Ve,I=aS,l=nS,Z=iS,C=Re,W=We,N=tS,U=DS,He=OS,J=Ke,Te=Ze,Pe=eS,Be=SS,ye=Ue,he=Je;return f(),Y(z,null,[E(P("i",{class:"vxe-icon-search-zoom-in",style:{position:"fixed",top:"0",right:"0",color:"white",cursor:"pointer"},onClick:D[0]||(D[0]=n=>a(S).toggleShow())},null,512),[[X,!a(S).show]]),E(T(he,{"rd-1":"","m-0":"","p-0":"",absolute:"","left-0":"","top-0":"",class:"elcontainer"},{default:p(()=>[T(W,{flex:"~ wrap gap1",height:"auto","p-l-1":"",class:"elheader"},{default:p(()=>[T(Z,null,{default:p(()=>[T(t,{type:"primary",size:"small",icon:a($e),onClick:D[1]||(D[1]=n=>a(S).positioning())},{default:p(()=>[v("目前")]),_:1},8,["icon"]),T(l,{size:"small",style:{"max-width":"12rem","min-width":"6rem"},"m-3px":"",modelValue:a(S).selectZone,"onUpdate:modelValue":D[2]||(D[2]=n=>a(S).selectZone=n),filterable:"",placeholder:"Select"},{default:p(()=>[(f(!0),Y(z,null,$(a(g),(n,k)=>{var _;return f(),x(I,{key:k,label:((_=n.name)==null?void 0:_.cn)??`${n.name.en} / ${n.name.ja}`,value:k},null,8,["label","value"])}),128))]),_:1},8,["modelValue"])]),_:1}),T(Z,{class:"fastEntrance"},{default:p(()=>[T(C,{flex:"~ ! wrap"},{default:p(()=>[(f(!0),Y(z,null,$(a(S).fastEntrance,(n,k)=>(f(),x(t,{plain:"",bg:"",color:"rgb(24,34,44)",size:"small",key:k,onClick:_=>a(S).selectZone=n.value},{default:p(()=>[v(F(n.text),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),T(ye,{"p-1":"","m-0":""},{default:p(()=>[E(T(Z,{wrap:"",alignment:"flex-start",style:{"font-size":"12px"}},{default:p(()=>[(f(!0),Y(z,null,$(a(S).data.zoneId[a(S).selectZone],(n,k)=>(f(),x(Be,{shadow:"hover",key:k,class:"main-box-card"},{default:p(()=>{var _;return[E(P("p",{"m-t-2":"","m-b-2":"",innerHTML:n.Name,"font-bold":""},null,8,XS),[[X,!n.Editable]]),E(T(N,{size:"small",modelValue:n.Name,"onUpdate:modelValue":r=>n.Name=r,placeholder:"宏標題"},null,8,["modelValue","onUpdate:modelValue"]),[[X,n.Editable]]),n.Type==="macro"?(f(),Y("div",ZS,[n.Editable?h("",!0):(f(),Y("article",YS,[(f(!0),Y(z,null,$((_=n.Text)==null?void 0:_.split(`
`),(r,H)=>(f(),Y("div",{key:H,class:"macroText"},F(r),1))),128))])),E(T(N,{size:"small",modelValue:n.Text,"onUpdate:modelValue":r=>n.Text=r,autosize:{minRows:3},type:"textarea",placeholder:"宏文字",wrap:"off",style:{width:"450px"}},null,8,["modelValue","onUpdate:modelValue"]),[[X,n.Editable]]),n.Editable?h("",!0):(f(),x(U,{key:1,class:"buttonArea",style:q({maxHeight:n.Editable?"100px":null,opacity:n.Editable?1:null})},{default:p(()=>[T(t,{icon:a(pe),size:"small",onClick:r=>a(S).editMacroMacro(n)},{default:p(()=>[v("編輯")]),_:2},1032,["icon","onClick"]),T(t,{icon:a(je),size:"small",type:"info",onClick:r=>a(S).sendMacroEcho(n.Text)},{default:p(()=>[v("默語")]),_:2},1032,["icon","onClick"]),T(t,{icon:a(qe),size:"small",type:"primary",onClick:r=>a(S).sendMacroParty(n.Text)},{default:p(()=>[v("小隊")]),_:2},1032,["icon","onClick"])]),_:2},1032,["style"])),n.Editable?(f(),x(U,{key:2,class:"buttonAreaEditing"},{default:p(()=>[T(t,{type:"success",size:"small",icon:a(re),onClick:r=>a(S).submitMacroMacro(n)},{default:p(()=>[v("完成")]),_:2},1032,["icon","onClick"]),T(t,{type:"danger",size:"small",icon:a(ce),onClick:r=>a(S).deleteMacro(n)},{default:p(()=>[v(" 刪除")]),_:2},1032,["icon","onClick"])]),_:2},1024)):h("",!0)])):h("",!0),n.Type==="place"?(f(),Y("div",MS,[E(T(Z,null,{default:p(()=>[T(Pe,{data:Object.entries(n.Place),border:"",size:"small"},{default:p(()=>[n.Editable?(f(),x(J,{key:0,align:"center",label:"啟用",width:"50"},{default:p(r=>[T(He,{modelValue:r.row[1].Active,"onUpdate:modelValue":H=>r.row[1].Active=H,size:"small",style:{"--el-switch-on-color":"#13ce66"}},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):h("",!0),T(J,{align:"center",label:"標記",width:"50"},{default:p(r=>[E(P("span",null,F(r.row[0]),513),[[X,!0]])]),_:1}),T(J,{align:"center",label:"X",width:"140"},{default:p(r=>[E(P("span",null,F(r.row.X),513),[[X,!n.Editable]]),E(T(Te,{"controls-position":"right",step:1,precision:2,size:"small",modelValue:r.row[1].X,"onUpdate:modelValue":H=>r.row[1].X=H},null,8,["modelValue","onUpdate:modelValue"]),[[X,n.Editable]])]),_:2},1024),T(J,{align:"center",label:"Z",width:"140"},{default:p(r=>[E(P("span",null,F(r.row.Z),513),[[X,!n.Editable]]),E(T(Te,{"controls-position":"right",step:1,precision:2,size:"small",modelValue:r.row[1].Z,"onUpdate:modelValue":H=>r.row[1].Z=H},null,8,["modelValue","onUpdate:modelValue"]),[[X,n.Editable]])]),_:2},1024),h("",!0)]),_:2},1032,["data"])]),_:2},1536),[[X,n.Editable]]),T(Z,null,{default:p(()=>[P("div",{style:q([{position:"relative","background-color":"rgba(214, 199, 148, 1)"},{height:s+"px",width:s+"px",fontSize:c+"px"}])},[(f(),Y(z,null,$(["A","B","C","D","One","Two","Three","Four"],(r,H)=>P("div",{key:H},[P("span",{class:Ge(["markIcon","markIcon"+r]),style:q({left:Math.min(s,Math.max(0,(Number(n.Place[r].X)+a(S).defaultX)*m+s/2))+"px",top:Math.min(s,Math.max(0,(Number(n.Place[r].Z)+a(S).defaultY)*m+s/2))+"px"})},F(n.Place[r].Active?u[r]??r:""),7)])),64))],4)]),_:2},1024),n.Editable?h("",!0):(f(),x(U,{key:0,class:"buttonArea",style:q({maxHeight:n.Editable?"100px":null,opacity:n.Editable?1:null})},{default:p(()=>[T(t,{icon:a(pe),size:"small",onClick:r=>a(S).editMacroPlace(n)},{default:p(()=>[v("編輯")]),_:2},1032,["icon","onClick"]),T(t,{type:"primary",size:"small",onClick:r=>a(S).doLocalWayMark(n.Place)},{default:p(()=>[v("本地")]),_:2},1032,["onClick"]),T(t,{type:"primary",size:"small",onClick:r=>a(S).doSlotWayMark(n.Place)},{default:p(()=>[v("插槽")]),_:2},1032,["onClick"])]),_:2},1032,["style"])),n.Editable?(f(),x(U,{key:1,class:"buttonAreaEditing"},{default:p(()=>[T(t,{type:"success",size:"small",icon:a(re),onClick:r=>a(S).submitMacroPlace(n)},{default:p(()=>[v("完成")]),_:2},1032,["icon","onClick"]),T(t,{type:"danger",size:"small",icon:a(ce),onClick:r=>a(S).deleteMacro(n)},{default:p(()=>[v("刪除")]),_:2},1032,["icon","onClick"]),T(t,{icon:a(Qe),size:"small",class:"export",onClick:r=>a(S).exportWaymarksJson(n)},{default:p(()=>[v("導出JSON")]),_:2},1032,["icon","onClick"])]),_:2},1024)):h("",!0)])):h("",!0)]}),_:2},1024))),128))]),_:1},512),[[X,!a(O)]]),E(T(Be,{class:"markdown-body"},{default:p(()=>[T(a(ES))]),_:1},512),[[X,a(O)]])]),_:1}),P("div",dS,[T(t,{size:"small",onClick:D[3]||(D[3]=n=>a(S).toggleShow())},{default:p(()=>[v("隱藏頁面")]),_:1}),T(t,{type:"success",size:"small",onClick:D[4]||(D[4]=n=>a(S).newOne("macro"))},{default:p(()=>[v("新增宏")]),_:1}),T(t,{type:"success",size:"small",color:"#3375b9",onClick:D[5]||(D[5]=n=>a(S).newOne("place"))},{default:p(()=>[v("新增標點")]),_:1}),T(t,{color:"#BA5783",size:"small",onClick:D[6]||(D[6]=n=>a(S).importPPJSON())},{default:p(()=>[v("匯入PP")]),_:1}),T(t,{type:"warning",size:"small",onClick:D[7]||(D[7]=n=>a(S).resetZone())},{default:p(()=>[v("恢復本圖")]),_:1}),T(t,{type:"danger",size:"small",onClick:D[8]||(D[8]=n=>a(S).resetAllData())},{default:p(()=>[v("恢復全部")]),_:1}),T(t,{type:"success",size:"small",onClick:D[9]||(D[9]=n=>a(S).updateZone())},{default:p(()=>[v("數據更新")]),_:1}),T(t,{size:"small",onClick:D[10]||(D[10]=n=>a(B)())},{default:p(()=>[v("檢視幫助")]),_:1}),HS])]),_:1},512),[[X,a(S).show]])],64)}}});export{FS as default};
