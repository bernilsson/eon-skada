
function totaldmg(delomr,dmgtype,redudmg){
	var trauma=0;
	var pain=0;
	var bleed=0;
	var misc="";
	//document.f2.txtarea.value=delomr+","+redudmg+","+dmgtype;
	document.f2.txtarea.value=""
	
	

	switch (delomr)
	{
		case "ansikte": //Extra-skador ANSIKTE
		trauma=0;
		pain=4;
		bleed=0;
				//no extra dmg
				if (redudmg > 9) //Extra-skador!
				{
					if (document.f1.check1.checked)
					{
					traff=t6();
					}
					else
					{
					traff=t10();
					}
				switch (traff)
				{
					case 1: //Hjärna

						trauma=trauma+Math.floor(redudmg*2);
						pain=pain+Math.floor(redudmg*1);
						bleed=bleed+Math.floor(redudmg*0);
						misc=traff.toString()+"Hjärna: Men";
						break;
					case 2: //Öga
						trauma=trauma+Math.floor(redudmg/2);
						pain=pain+Math.floor(redudmg*1);
						bleed=bleed+Math.floor(redudmg*0);
						misc=traff.toString()+"Hjärna: Men, Ärr";
						break;
					case 3: //Käke || mun
						trauma=trauma+Math.floor(redudmg/2);
						pain=pain+Math.floor(redudmg/2);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"Käke: Amp, Men, Ärr"
						break;
					case 4:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/2);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"Öra: Amp, Men, Ärr";
						break;
					case 5: 
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/2);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"Näsa: Amp, Bryt, Ärr";
						break;
					case 6:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg*1);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"Omtöckning: Amp, Faller, Tappar";
						break;
					case 7:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/10);
						bleed=bleed+Math.floor(redudmg/2);
						misc=traff.toString()+"Blödning: Amp";
						break;
					case 8:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/10);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"Kött: Amp, Ärr";
						break;
					case 9:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/10);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"Kött: Amp";
						break;
					case 10:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/10);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"Kött:";
						break;
				}
			}
				//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
			//Extra dmg
			
		break;
		
		case "skalle":
			//document.f2.txtarea.value=delomr+","+redudmg+","+dmgtype;
				switch (dmgtype)
				{
					case "hugg":
//						document.f2.txtarea.value=delomr+","+redudmg+","+dmgtype;
						trauma=1;
						pain=2;
						bleed=1;
						break;
					case "kross":
						trauma=0;
						pain=3;
						bleed=0;
						break;
				}
				//no extra dmg
				if (redudmg > 9) //Extra-skador!
				{
					if (document.f1.check1.checked)
					{
					traff=t6();
					}
					else
					{
					traff=t10();
					}
				
				//document.f2.txtarea.value=document.f2.txtarea.value+"\nträff: "+traff.toString();
				switch (traff) //Extra-skador SKALLE
				{
					case 1: //Hjärna
						if (dmgtype == "hugg")
						{
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hjärna: Amp, Fast, Men";
						}
						else if (dmgtype == "kross")
						{
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Hjärna: Faller, Men";
						}
						break;
					case 2: //Hjärna
						if (dmgtype == "hugg")
						{
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hjärna: Amp, Men"
						}
						else if (dmgtype == "kross")
						{
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Hjärna: Men";
						}
						break;
					case 3: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Amp, Bryt, Fast, Ärr"
						break;
					case 4: //Skallben
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Amp, Bryt, Fast";
						break;
					case 5: //Skallben
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Amp, Bryt";
						break;
					case 6: //Omtöckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Omtöckning: Amp, Faller, Tappar";
						break;
					case 7: //Omtöckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Blödning: Amp, Tappar";
						break;
					case 8: //Blödning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Kött: Amp";
						break;
					case 9: //Köttsår
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Kött: Amp, Ärr";
						break;
					case 10: //Köttsår
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Kött:";
						break;
				}
			}
				case "hals": //Extra-skador HALS
                                switch (dmgtype)
                                {
                                        case "hugg":
                                                trauma=1;
                                                pain=2;
                                                bleed=1;
                                                break;
                                        case "kross":
                                                trauma=0;
                                                pain=3;
                                                bleed=0;
                                                break;
                                }
                                //no extra dmg
                                if (redudmg > 9) //Extra-skador!
                                {
                                        if (document.f1.check1.checked)
                                        {
                                        traff=t6();
                                        }
                                        else
                                        {
                                        traff=t10();
                                        }
                                switch (traff)
                                {

					case 1: //Strupe
                                        	trauma=Math.floor(redudmg*1);
                                        	pain=Math.floor(redudmg/2);
                                        	bleed=Math.floor(redudmg*1);
                                        	misc=traff.toString()+"Strupe: Amp, Kväv, Tappar";
						break;
					case 2: //Strupe
						trauma=Math.floor(redudmg*1);
                                                pain=Math.floor(redudmg/2);
                                                bleed=Math.floor(redudmg*1);
                                                misc=traff.toString()+"Strupe: Amp, Kväv";
                                                break;
                                        case 3: //Nackkotor
                                                trauma=Math.floor(redudmg/2);
                                                pain=Math.floor(redudmg/2);
                                                bleed=Math.floor(redudmg/10);
                                                misc=traff.toString()+"Nackkotor: Amp, Bryt, Fast";
                                                break;
                                        case 4: //Nackkotor
                                                trauma=Math.floor(redudmg/2);
                                                pain=Math.floor(redudmg/2);
                                                bleed=Math.floor(redudmg/10);
                                                misc=traff.toString()+"Nackkotor: Amp, Bryt";
                                                break;
                                        case 5: //Pulsåder
                                                trauma=Math.floor(redudmg/2);
                                                pain=Math.floor(redudmg/2);
                                                bleed=Math.floor(redudmg*2);
                                                misc=traff.toString()+"Pulsåder: Amp";
                                                break;
                                        case 6: //Artärblödning
                                                trauma=Math.floor(redudmg/10);
                                                pain=Math.floor(redudmg/10);
                                                bleed=Math.floor(redudmg*1);
                                                misc=traff.toString()+"Artärblödning: Amp";
                                                break;
                                        case 7: //Omtöckning
                                                trauma=Math.floor(redudmg/x10);
                                                pain=Math.floor(redudmg*1);
                                                bleed=Math.floor(redudmg/10);
                                                misc=traff.toString()+"Omtöckning: Amp, Tappar";
                                                break;
                                        case 8: //Blödning
                                                trauma=Math.floor(redudmg/10);
                                                pain=Math.floor(redudmg/10);
                                                bleed=Math.floor(redudmg/2);
                                                misc=traff.toString()+"Blödning: Amp";
                                                break;
                                        case 9: //Kött
                                                trauma=Math.floor(redudmg/10);
                                                pain=Math.floor(redudmg/10);
                                                bleed=Math.floor(redudmg/10);
                                                misc=traff.toString()+"Kött: Amp, Ärr";
                                                break;
                                        case 10: //Kött
                                                trauma=Math.floor(redudmg/10);
                                                pain=Math.floor(redudmg/10);
                                                bleed=Math.floor(redudmg/10);
                                                misc=traff.toString()+"Kött:";
                                                break;
				}
			}
				//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
			//Extra dmg
			
		break;
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	document.f2.txtarea.value = "T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
}
