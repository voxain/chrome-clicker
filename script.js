var p=0,r=0,x=0,y=0,ppc=1,hitmarkers=1,hmrot=0,sessionclick=0;

			var timer=false,time=0,pss=0;
			var upgrades=[[20/*Kosten*/,0/*Anzahl*/]/*DoubleClick*/]
			
			var giftTime=60
			function init(){
				giftTime-=1
				document.getElementById("gift-time").innerHTML=giftTime
				document.getElementById("gift-headline").innerHTML="Geschenk ("+giftTime+")"
				if(giftTime<=0){
					giftTime=0	
					document.getElementById("gift-time").innerHTML="KOSTENLOSES GESCHENK!"
					document.getElementById("gift-headline").innerHTML="Geschenk"
					document.getElementById("giftunlocked").style.display="block"
					document.getElementById("gift").style.animation="gocrazy 0.3s linear infinite"
				}
				setTimeout("init()",1000);
			}
			
			function confirm(){
				document.getElementById("CONFIRMED").style.display="block"
			}
			function takeGift(){
				p+=100000
				giftTime=60
				$("#giftarea").css("display","none")
				$("#gift").css("animation","none")
			}
			function chromeclick(){
				$("#lilhelp").css("display","none")
				
			if(ultraclicker==false&&enolaclicker==false){
					p+=ppc;
					timer=true;
					time=0
					x=Math.random()*40;
					if(sessionclick==0)document.getElementById("musix1").currentTime=0
					if(sessionclick==0)document.getElementById("musix2").currentTime=0
					if(sessionclick==0)document.getElementById("musix3").currentTime=0
					if(sessionclick==0)document.getElementById("musix4").currentTime=0
					if(sessionclick==0)document.getElementById("musix5").currentTime=0
					if(sessionclick==0)document.getElementById("musix"+Math.ceil(Math.random()*5)).play()
					ply=false
					y=Math.random()*40;
					var sides=document.getElementsByClassName("side")
					sides[0].style.animation="gocrazy 0.2s ease infinite"
					sessionclick+=1
					sides[1].style.animation="gocrazy 0.2s ease infinite"
					document.getElementById("heading").style.animation="gocrazy 0.2s ease infinite"
					document.getElementById("footer").style.animation="gocrazy 0.2s ease infinite"
					document.getElementById("ultra").style.transform="skewX(-"+Math.random()*10+"deg) skewY(-"+Math.random()*10+"deg) scale3d(0.8,0.8,0.9)"
					window.setTimeout('document.getElementById("ultra").style.transform="rotate(-1deg)"',50)
					window.setTimeout('document.getElementById("ultra").style.transform="rotate(0deg)"',100)
					document.getElementById("music1").pause()
					document.getElementById("music2").pause()
					document.getElementById("background").style.animation="mlg 3s ease infinite"
					document.getElementById("points").innerHTML=p
				}
				else{
					var sides=document.getElementsByClassName("side")
					sides[0].style.animation="gocrazy 0.2s ease infinite"
					sides[1].style.animation="gocrazy 0.2s ease infinite"
					p+=ppc*ppc;
					document.getElementById("points").innerHTML=p
				}
			}
			function autoclick(){
				
				if(acps>0)hitmarker()
				p+=acps;
				p=Math.round(p)
				document.getElementById("points").innerHTML=p
				document.getElementById("acps").innerHTML=acps
					if(ultraclicker==false)document.getElementById("ppk").innerHTML=ppc
					else document.getElementById("ppk").innerHTML="?X@/%$WTFHAX$%@X?"
			}
			function doubleclick(){
				if(p>=upgrades[0][0]){
					ppc*=2
					p-=upgrades[0][0]
					upgrades[0][1]+=1
					document.getElementById("points").innerHTML=p
					document.getElementById("dclvl").innerHTML=upgrades[0][1]
					upgrades[0][0]*=2
					document.getElementById("price-dc").innerHTML=upgrades[0][0]
				}
				else{
					$("#dc-price").css("background","red")
					setTimeout('$("#dc-price").css("background","black")',500)
				}
			}
			var acps=0;
			function autoclicker(){
				autoclick()
				if(acps>0){document.getElementById("ultra").style.transform="scale3d(1.02,1.02,1.2)"
				window.setTimeout('document.getElementById("ultra").style.transform="scale3d(1,1,0)";"',70)}
				setTimeout("autoclicker()",1000)
			}
			function hitmarker(){
				hitmarkers+=1;
				if(hitmarkers>=26){
					hitmarkers=1
				}
				document.getElementById("HITMARKER"+hitmarkers).play()
			}
			document.addEventListener("mousedown",hitMark)
			document.addEventListener("mousewheel",charac)
			document.addEventListener("mouseup",deletehitMark)
			var chars=0,charimg=["Google.ico","9.png","4.png","17.png","12.png","joint.png","hitmarker.png","5.png"]
			function charac(e){
				chars+=1
				if(chars>=8)chars=0
				document.getElementById("Chrome").src=charimg[chars]
			}/*
			function init(){
				var fonts=["Cracked Johnnie","AcmeFont","Akashi","Alien Encounters","Baby Kruffy","Courier","Digifit","Ethnocentric","Flubber","Good Times","Hand Me Down","Impact","Limousine","Nasalization","PhrasticMedium","OpineHeavy","QuiverItal","Roland","Russel Write TT","Ronaldo","SF Movie Poster","Skinny","Steppes TT","Terminator Two","Whimsy TT","Valken"]
				var ttt=Math.random()*26
				ttt=Math.floor(ttt)
				document.getElementById("h11").style.fontFamily=fonts[ttt]+", Segoe UI, Ubuntu, Loma, Arial"
				document.getElementById("h11").style.opacity=1
				document.getElementById("h11").style.animation="h11 0.5s ease-in"
			}*/
			function hitMark(e){
			    if(enolaclicker==false){
				hmrot=Math.random()*360
				hitmarker()
				document.getElementById("HITMARKER").style.display="block"
				document.getElementById("HITMARKER").style.top=e.clientY-20
				document.getElementById("HITMARKER").style.left=e.clientX-20
				}
			}
			function deletehitMark(e){
				document.getElementById("HITMARKER").style.display="none"
				document.getElementById("Chrome").src=charimg[chars]
				var sides=document.getElementsByClassName("side")
			}
			var ply=true;
			function countTime(){
				if(ultraclicker==false&&enolaclicker==false){
					if(timer==true){
						time+=1
					document.getElementById("mlgtext").innerHTML=mlgstcs[Math.floor(Math.random()*51)]
					document.getElementById("mlgtext").style.display="block"
					}
					if(time>=1.6){
						document.getElementById("musix1").pause();
						document.getElementById("musix2").pause();
						document.getElementById("musix3").pause();
						document.getElementById("musix4").pause();
						document.getElementById("musix5").pause();
					if(ply==false)document.getElementById("music1").currentTime=0
					if(ply==false)document.getElementById("music2").currentTime=0
					if(ply==false){document.getElementById("music"+Math.ceil(Math.random()*2)).play();ply=true}
					document.getElementById("mlgtext").style.display="none"
						timer=false;				
						document.getElementById("background").style.animation="bg 4s ease infinite"
				document.getElementById("Chrome").src=charimg[chars]
					var sides=document.getElementsByClassName("side")
					sides[0].style.animation="none"
					sides[1].style.animation="none"
					document.getElementById("heading").style.animation="none"
					sessionclick=0
					document.getElementById("footer").style.animation="none"

					}
				}
				setTimeout("countTime()",1000)
			}
			function bonuz(){
				document.getElementById("horn").play()
			}
			function startgame(){
				document.getElementById("bonus").style.opacity="0"
				init()
				window.setTimeout('document.getElementById("Chrome").style.transform="scale3d(1,1,1) rotate(0deg)";document.getElementById("bonus").style.display="none";document.getElementById("music1").play()',500)
			}
			function pausegame(){
				document.getElementById("music1").pause()
				document.getElementById("music2").pause()
				document.getElementById("background").style.animation="none"
			}
			var ultraclicker=false,enolaclicker=false;
			function ultraclick(){
				document.getElementById("ultra").style.transition="1.5s ease"
				document.getElementById("ultra").style.opaicity="0"
				document.getElementById("ultra").style.transform="scale3d(0,0,0)"
				document.getElementById("booz").style.display="block"
				document.getElementById("ultramusix").play();
				document.getElementById("music1").pause()
				document.getElementById("music2").pause()
				document.getElementById("musix1").pause()
				document.getElementById("musix2").pause()
				document.getElementById("musix3").pause()
				document.getElementById("musix4").pause()
				document.getElementById("musix5").pause()
				setTimeout('ultrastart()',1500)
				setTimeout('ultrastop()',28000)
				ultraclicker=true
			}
			var chromebig="scale3d(1,1,1)"
			function ultrastart(){
				document.getElementById("ppk").innerHTML="?X@/!(@X#*+?§!^°$%@X?";
				
				setTimeout('document.getElementById("booz").style.display="none"',1500)
				setTimeout('document.getElementById("faze").style.display="none"',1500)
				document.getElementById("mlgtext").style.display="block"
				document.getElementById("illu").style.display="block"
				document.getElementById("dannec").style.display="block"
				document.getElementById("mlg").style.display="block"
				timeleft=26
				ultracount()
				document.getElementById("faze").style.display="block"
				document.getElementById("ultra").style.transition="0.1s ease"
				document.getElementById("ultra").style.opaicity="1"
				document.getElementById("ultra").style.animation="ultracrazy 1.5s linear infinite";
				document.getElementById("ultra").style.transform="scale3d(1,1,1)"
				document.getElementById("Chrome").style.animation="crazy 0.5s linear infinite";
				document.getElementById("dorito").style.display="block";
				document.getElementById("hash").style.display="block";
				document.getElementById("background").style.animation="ultramlg 0.2s ease infinite"
					var sides=document.getElementsByClassName("side")
					sides[0].style.animation="gocrazy 0.2s ease infinite"
					sides[1].style.animation="gocrazy 0.2s ease infinite"
				ultramlg()
			}
			function enolaswag(){
				document.getElementById("music1").pause()
				document.getElementById("music2").pause()
				document.getElementById("musix1").pause()
				document.getElementById("musix2").pause()
				document.getElementById("musix3").pause()
				document.getElementById("musix4").pause()
				document.getElementById("musix5").pause()
				document.getElementById("yoloswag").play();
				$(".side").css("top","-100%")
				$("#footer").css("bottom","-50px")
				$("#heading").css("width","100%")
				$("#heading").css("left","0%")
				$("#background").css("animation","none")
				$("#Chrome").css("animation","ILLUMINATI 0.5s linear infinite")
				enolaclicker=true
			}
			function ultrastop(){
				document.getElementById("ppk").innerHTML=ppk;ultraclicker=false;
				document.getElementById("ultra").style.animation="none";
				document.getElementById("Chrome").style.animation="none";
				document.getElementById("dorito").style.display="none";
					var sides=document.getElementsByClassName("side")
					sides[0].style.animation="none"
				document.getElementById("mlgtext").style.display="none"
				document.getElementById("illu").style.display="none"
				document.getElementById("mlg").style.display="none"
				document.getElementById("dannec").style.display="none"
					sides[1].style.animation="none"
				document.getElementById("music"+Math.ceil(Math.random()*2)).play()
				document.getElementById("hash").style.display="none";
					document.getElementById("background").style.animation="bg 4s ease infinite"
			}
			function ultracount(){
				if (timeleft<=5){
					document.getElementById("cd").play()
				}
				timeleft-=1
				document.getElementById("mlgtext").innerHTML=timeleft+"s"
				if(timeleft>=0){
					setTimeout("ultracount()",1000)
				}
			}
			var hits=0,wtf=false,timeleft=27,scnd=false;
			function ultramlg(){
				document.getElementById("dorito").style.top=Math.random()*window.innerHeight
				document.getElementById("dorito").style.left=Math.random()*window.innerWidth
				document.getElementById("mlg").style.top=Math.random()*window.innerHeight
				document.getElementById("mlg").style.left=Math.random()*window.innerWidth
				p+=3
				document.getElementById("hash").style.top=Math.random()*window.innerHeight
				document.getElementById("hash").style.left=Math.random()*window.innerWidth
				hits+=1
				if(scnd==true){
					document.getElementById("background").style.background="black"
					scnd=false
				}
				else{
					document.getElementById("background").style.background="url('9.png')"
					scnd=true
				}
				if(wtf==false){document.getElementById("wtfBoom").style.display="block";wtf=true;}
				if(wtf==true){document.getElementById("wtfBoom").style.display="none";wtf=false;}
				setTimeout("hitmarker()",1500)
					document.getElementById("points").innerHTML=p
				$("#overlay").append("<img class='hitmarker' src='hitmarker.png' onmousedown='chromeclick()' id='hitmark"+hits+"'>")
				document.getElementById("hitmark"+hits).style.left=Math.random()*window.innerWidth
				document.getElementById("hitmark"+hits).style.top=Math.random()*window.innerHeight
				setTimeout('document.getElementById("hitmark'+hits+'").style.display="none"',2000)
				if(ultraclicker==true)setTimeout("ultramlg()",10)
			}
