
function kross_skada(delomr,redudmg){
	var trauma=0;
	var pain=0;
	var bleed=0;
	var misc="";
	var traff=0;
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
			case 1: //Hj" + unescape("%E4") + "rna
				trauma=Math.floor(redudmg*2);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Men";
			break;
			case 2: //" + unescape("%F6") + "ga
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"" + unescape("%F6") + "ga: Men, " + unescape("%E4") + "rr"
				break;
			case 3: //K" + unescape("%E4") + "ke/mun
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%E4") + "ke: Men, " + unescape("%E4") + "rr"
				break;
			case 4: //" + unescape("%F6") + "ra
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"" + unescape("%F6") + "ra: Men, " + unescape("%E4") + "rr";
				break;
			case 5: //N" + unescape("%E4") + "sa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"N" + unescape("%E4") + "sa: Bryt, " + unescape("%E4") + "rr";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller, Tappar";
				break;
			case 7: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller, Tappar";
				break;
			case 8: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: ";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
			}
		}
				//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
		break;
		case "skalle":
			trauma=0;
			pain=3;
			bleed=0;
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
				
				//document.f2.txtarea.value=document.f2.txtarea.value+"\ntr" + unescape("%E4") + "ff: "+traff.toString();
				switch (traff) //Extra-skador SKALLE
				{
					case 1: //Hj" + unescape("%E4") + "rna
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Faller, Men";
						break;
					case 2: //Hj" + unescape("%E4") + "rna
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Men"
						break;
					case 3: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Skallben: Bryt, " + unescape("%E4") + "rr"
						break;
					case 4: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Skallben: Bryt";
						break;
					case 5: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Skallben: Bryt";
						break;
					case 6: //Omt" + unescape("%F6") + "ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller, Tappar";
						break;
					case 7: //Omt" + unescape("%F6") + "ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Tappar";
						break;
					case 8: //Omt" + unescape("%F6") + "ckning 
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
						break;
					case 9: //Bl" + unescape("%F6") + "dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Bl" + unescape("%F6") + "dning: ";
						break;
					case 10: //K" + unescape("%F6") + "tts" + unescape("%E5") + "r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"K" + unescape("%F6") + "tt:";
						break;
				}
			}
			break;
			case "hals": //Extra-skador HALS
			trauma=0;
			pain=3;
			bleed=0;
			
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
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Strupe: Kv" + unescape("%E4") + "v, Tappar";
					break;
				case 2: //Nackkotor
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Nackkotor: Bryt, Faller, Tappar";
					break;
				case 3: //Nackkotor
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Nackkotor: Bryt, Faller, Tappar";
					break;
				case 4: //Nackkotor
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Nackkotor: Bryt, Tappar";
					break;
				case 5: //Nackkotor
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Nackkotor: Bryt";
					break;
				case 6: //Omt" + unescape("%F6") + "ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller, Tappar";
					break;
				case 7: //Omt" + unescape("%F6") + "ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller, Tappar";
					break;
				case 8: //Omt" + unescape("%F6") + "ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Tappar";
					break;
				case 9: //Bl" + unescape("%F6") + "dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg/2);
					misc=traff.toString()+"Bl" + unescape("%F6") + "dning: ";
					break;
				case 10: //K" + unescape("%F6") + "tt
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"K" + unescape("%F6") + "tt:";
					break;
			}
		}
			//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
		break;
		case "arm": //Extra-skador " + unescape("%F6") + "
		trauma=1;
		pain=1;
		bleed=1;
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

			case 1: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Benpipa: Bryt, Tappar";
				break;
			case 2: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Benpipa: Bryt, Tappar";
				break;
			case 3: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Benpipa: Bryt";
				break;
			case 4: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Muskler/Senor: Men, Tappar";
				break;
			case 5: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Muskler/Senor: Men";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
				break;
			case 7: //Omt" + unescape("%F6") + "ckning 
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
				break;
			case 8: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: ";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: ";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
		}
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	break;
	case "bröstkorg": //Extra-skador BR" + unescape("%F6") + "STKORG
		trauma=0;
		pain=2;
		bleed=0;
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

			case 1: //Lunga 
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Lunga: Faller, Inre Skada";
				break;
			case 2: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Ryggrad: Bryt, Faller";
				break;
			case 3: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Ryggrad: Bryt";
				break;
			case 4: //Revben
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Revben: Bryt, Faller, Tappar";
				break;
			case 5: //Revben
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Revben: Bryt, Faller";

				break;
			case 6: //Revben
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Revben: Bryt";
				break;
			case 7: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
				break;
			case 8: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: ";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: ";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
		}
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	break;
		case "mage": //Extra-skador MAGE
		trauma=0;
		pain=3;
		bleed=0;
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

			case 1: //In" + unescape("%E4") + "lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"In" + unescape("%E4") + "lvor: Faller, Inre Skada";
				break;
			case 2: //In" + unescape("%E4") + "lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"In" + unescape("%E4") + "lvor: Inre Skada";
				break;
			case 3: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Ryggrad: Bryt, Faller";
				break;
			case 4: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Ryggrad: Bryt";
				break;
			case 5: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: ";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller, Tappar";
				break;
			case 7: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
				break;
			case 8: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: ";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: ";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
		}
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	break;
	case "underliv": //Extra-skador Underliv 
		trauma=0;
		pain=3;
		bleed=0;
		if (redudmg > 9) 
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

			case 1: //K" + unescape("%F6") + "nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "nsorgan: Faller, Men, Tappar";
				break;
			case 2: //K" + unescape("%F6") + "nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "nsorgan: Faller, Men, Tappar";
				break;
			case 3: //K" + unescape("%F6") + "nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "nsorgan: Faller, Men";
				break;
			case 4: //K" + unescape("%F6") + "nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "nsorgan: Faller, Men";
				break;
			case 5: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller, Tappar";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller, Tappar";
				break;
			case 7: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller";
				break;
			case 8: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: ";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: ";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
		}
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	break;
	case "ben": //Extra-skador BEN 
		trauma=1;
		pain=1;
		bleed=1;
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

			case 1: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Benpipa: Bryt, Faller";
				break;
			case 2: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Benpipa: Bryt, Faller";
				break;
			case 3: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Benpipa: Bryt, Faller";
				break;
			case 4: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Muskler/Senor: Faller, Men";
				break;
			case 5: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Muskler/Senor: Men";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller";
				break;
			case 7: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Faller";
				break;
			case 8: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: ";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: ";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
		}
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	break;
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	document.f2.txtarea.value = "T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
}
