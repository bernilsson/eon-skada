
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
					case 1: //Hj�rna

						trauma=trauma+Math.floor(redudmg*2);
						pain=pain+Math.floor(redudmg*1);
						bleed=bleed+Math.floor(redudmg*0);
						misc=traff.toString()+"Hj�rna: Men";
						break;
					case 2: //�ga
						trauma=trauma+Math.floor(redudmg/2);
						pain=pain+Math.floor(redudmg*1);
						bleed=bleed+Math.floor(redudmg*0);
						misc=traff.toString()+"Hj�rna: Men, �rr";
						break;
					case 3: //K�ke || mun
						trauma=trauma+Math.floor(redudmg/2);
						pain=pain+Math.floor(redudmg/2);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"K�ke: Amp, Men, �rr"
						break;
					case 4:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/2);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"�ra: Amp, Men, �rr";
						break;
					case 5: 
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/2);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"N�sa: Amp, Bryt, �rr";
						break;
					case 6:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg*1);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"Omt�ckning: Amp, Faller, Tappar";
						break;
					case 7:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/10);
						bleed=bleed+Math.floor(redudmg/2);
						misc=traff.toString()+"Bl�dning: Amp";
						break;
					case 8:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/10);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"K�tt: Amp, �rr";
						break;
					case 9:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/10);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"K�tt: Amp";
						break;
					case 10:
						trauma=trauma+Math.floor(redudmg/10);
						pain=pain+Math.floor(redudmg/10);
						bleed=bleed+Math.floor(redudmg/10);
						misc=traff.toString()+"K�tt:";
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
				
				//document.f2.txtarea.value=document.f2.txtarea.value+"\ntr�ff: "+traff.toString();
				switch (traff) //Extra-skador SKALLE
				{
					case 1: //Hj�rna
						if (dmgtype == "hugg")
						{
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj�rna: Amp, Fast, Men";
						}
						else if (dmgtype == "kross")
						{
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Hj�rna: Faller, Men";
						}
						break;
					case 2: //Hj�rna
						if (dmgtype == "hugg")
						{
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj�rna: Amp, Men"
						}
						else if (dmgtype == "kross")
						{
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Hj�rna: Men";
						}
						break;
					case 3: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Amp, Bryt, Fast, �rr"
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
					case 6: //Omt�ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Omt�ckning: Amp, Faller, Tappar";
						break;
					case 7: //Omt�ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Bl�dning: Amp, Tappar";
						break;
					case 8: //Bl�dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"K�tt: Amp";
						break;
					case 9: //K�tts�r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"K�tt: Amp, �rr";
						break;
					case 10: //K�tts�r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"K�tt:";
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
                                        	misc=traff.toString()+"Strupe: Amp, Kv�v, Tappar";
						break;
					case 2: //Strupe
						trauma=Math.floor(redudmg*1);
                                                pain=Math.floor(redudmg/2);
                                                bleed=Math.floor(redudmg*1);
                                                misc=traff.toString()+"Strupe: Amp, Kv�v";
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
                                        case 5: //Puls�der
                                                trauma=Math.floor(redudmg/2);
                                                pain=Math.floor(redudmg/2);
                                                bleed=Math.floor(redudmg*2);
                                                misc=traff.toString()+"Puls�der: Amp";
                                                break;
                                        case 6: //Art�rbl�dning
                                                trauma=Math.floor(redudmg/10);
                                                pain=Math.floor(redudmg/10);
                                                bleed=Math.floor(redudmg*1);
                                                misc=traff.toString()+"Art�rbl�dning: Amp";
                                                break;
                                        case 7: //Omt�ckning
                                                trauma=Math.floor(redudmg/x10);
                                                pain=Math.floor(redudmg*1);
                                                bleed=Math.floor(redudmg/10);
                                                misc=traff.toString()+"Omt�ckning: Amp, Tappar";
                                                break;
                                        case 8: //Bl�dning
                                                trauma=Math.floor(redudmg/10);
                                                pain=Math.floor(redudmg/10);
                                                bleed=Math.floor(redudmg/2);
                                                misc=traff.toString()+"Bl�dning: Amp";
                                                break;
                                        case 9: //K�tt
                                                trauma=Math.floor(redudmg/10);
                                                pain=Math.floor(redudmg/10);
                                                bleed=Math.floor(redudmg/10);
                                                misc=traff.toString()+"K�tt: Amp, �rr";
                                                break;
                                        case 10: //K�tt
                                                trauma=Math.floor(redudmg/10);
                                                pain=Math.floor(redudmg/10);
                                                bleed=Math.floor(redudmg/10);
                                                misc=traff.toString()+"K�tt:";
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
