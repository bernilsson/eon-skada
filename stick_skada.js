function stick_skada(delomr,redudmg){
	var trauma=0;
	var pain=0;
	var bleed=0;
	var misc="";
	var traff=0;
	document.f2.txtarea.value=""
	switch (delomr)
	{
		case "ansikte": //Extra-skador ANSIKTE
		trauma=1;
		pain=3;
		bleed=1;
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
				trauma=trauma+Math.floor(redudmg*2);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/2);
				misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Fast, Men";
				break;
			case 2: //" + unescape("%F6") + "ga
				trauma=trauma+Math.floor(redudmg/2);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"" + unescape("%F6") + "ga: Men, " + unescape("%E4") + "rr"
				break;
			case 3: //K" + unescape("%E4") + "ke/mun
				trauma=trauma+Math.floor(redudmg/2);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%E4") + "ke: Men, " + unescape("%E4") + "rr"
				break;
			case 4:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"" + unescape("%F6") + "ra: Men, " + unescape("%E4") + "rr";
				break;
			case 5: 
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"N" + unescape("%E4") + "sa: Bryt, " + unescape("%E4") + "rr";
				break;
			case 6:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
				break;
			case 7:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
				break;
			case 8:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning:";
				break;
			case 9:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Fast, " + unescape("%E4") + "rr";
				break;
			case 10:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
			}
		}
				//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
		break;
		case "skalle":
			trauma=1;
			pain=2;
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
				
				//document.f2.txtarea.value=document.f2.txtarea.value+"\ntr" + unescape("%E4") + "ff: "+traff.toString();
				switch (traff) //Extra-skador SKALLE
				{
					case 1: //Hj" + unescape("%E4") + "rna
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Fast, Men";
						break;
					case 2: //Hj" + unescape("%E4") + "rna
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Fast, Men"
						break;
					case 3: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Bryt, Fast, " + unescape("%E4") + "rr"
						break;
					case 4: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Bryt, Fast";
						break;
					case 5: //Omt" + unescape("%F6") + "ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
						break;
					case 6: //Omt" + unescape("%F6") + "ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
						break;
					case 7: //Bl" + unescape("%F6") + "dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
						break;
					case 8: //Bl" + unescape("%F6") + "dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Bl" + unescape("%F6") + "dning:";
						break;
					case 9: //K" + unescape("%F6") + "tts" + unescape("%E5") + "r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"K" + unescape("%F6") + "tt: Fast, " + unescape("%E4") + "rr";
						break;
					case 10: //K" + unescape("%F6") + "tts" + unescape("%E5") + "r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"K" + unescape("%F6") + "tt:";
						break;
				}
			}
			break;
			case "hals": //Extra-skador HALS
			trauma=1;
			pain=2;
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

				case 1: //Strupe
					trauma=Math.floor(redudmg*1);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*1);
					misc=traff.toString()+"Strupe: Fast, Kv" + unescape("%E4") + "v, Tappar";
					break;
				case 2: //Nackkotor
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"Nackkotor: Bryt, Fast";
					break;
				case 3: //Puls" + unescape("%E5") + "der
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*2);
					misc=traff.toString()+"Puls" + unescape("%E5") + "der: Fast";
					break;
				case 4: //Puls" + unescape("%E5") + "der
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*2);
					misc=traff.toString()+"Puls" + unescape("%E5") + "der: ";
					break;
				case 5: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg*1);
					misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: Fast";
					break;
				case 6: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg*1);
					misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: ";
					break;
				case 7: //Omt" + unescape("%F6") + "ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
					break;
				case 8: //Bl" + unescape("%F6") + "dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg/2);
					misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
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
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Benpipa: Bryt, Fast, Tappar";
				break;
			case 2: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: Fast";
				break;
			case 3: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Fast, Men, Tappar";
				break;
			case 4: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Fast, Men";
				break;
			case 5: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Men";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
				break;
			case 7: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
				break;
			case 8: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning:";
				break;
			case 9: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Fast, " + unescape("%E4") + "rr";
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
	case "bröstkorg": //Extra-skador BR" + unescape("%F6") + "STKORG
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

			case 1: //Hj" + unescape("%E4") + "rta
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*5);
				misc=traff.toString()+"Hj" + unescape("%E4") + "rta: Fast, Tappar";
				break;
			case 2: //Lunga
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Lunga: Fast";
				break;
			case 3: //Lunga
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Lunga: Inre Skada, Fast, Ramlar";
				break;
			case 4: //Lunga
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Lunga: Inre Skada, Fast";
				break;
			case 5: //Puls" + unescape("%E5") + "der
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Puls" + unescape("%E5") + "der: Fast";
				break;
			case 6: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Ryggrad: Bryt, Fast";
				break;
			case 7: //Revben
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Revben: Fast, Bryt";
				break;
			case 8: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: ";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
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
		case "mage": //Extra-skador MAGE
		trauma=1;
		pain=2;
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

			case 1: //In" + unescape("%E4") + "lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In" + unescape("%E4") + "lvor: Inre Skada, Fast, Ramlar";
				break;
			case 2: //In" + unescape("%E4") + "lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In" + unescape("%E4") + "lvor: Inre Skada, Fast";
				break;
			case 3: //In" + unescape("%E4") + "lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In" + unescape("%E4") + "lvor: Inre Skada, Fast";
				break;
			case 4: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Ryggrad: Bryt, Fast";
				break;
			case 5: //Puls" + unescape("%E5") + "der
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Puls" + unescape("%E5") + "der: Fast";
				break;
			case 6: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: Fast";
				break;
			case 7: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning:";
				break;
			case 8: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning:";
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
	case "underliv": //Extra-skador UNDERLIV
		trauma=1;
		pain=2;
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

			case 1: //K" + unescape("%F6") + "nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"K" + unescape("%F6") + "nsorgan: Fast, Men, Tappar";
				break;
			case 2: //K" + unescape("%F6") + "nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"K" + unescape("%F6") + "nsorgan: Men, Ramlar";
				break;
			case 3: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Tappar";
				break;
			case 4: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
				break;
			case 5: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
				break;
			case 6: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
				break;
			case 7: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: " + unescape("%E4") + "rr";
				break;
			case 8: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning:";
				break;
			case 9: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Fast, " + unescape("%E4") + "rr";
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
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Benpipa: Bryt, Fast, Ramlar";
				break;
			case 2: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: Fast";
				break;
			case 3: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Fast, Men, Ramlar";
				break;
			case 4: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Fast, Men";
				break;
			case 5: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Men";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Ramlar";
				break;
			case 7: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Fast, " + unescape("%E4") + "rr";
				break;
			case 8: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning:";
				break;
			case 9: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Fast, " + unescape("%E4") + "rr";
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
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	document.f2.txtarea.value = "T+ " + trauma + "\nS+: " + pain + "\nB+ " + bleed + "\n" + misc
}
