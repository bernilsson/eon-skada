
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
			case 1: //Hj�rna
				trauma=trauma+Math.floor(redudmg*2);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/2);
				misc=traff.toString()+"Hj�rna: Fast, Men";
				break;
			case 2: //�ga
				trauma=trauma+Math.floor(redudmg/2);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"�ga: Men, �rr"
				break;
			case 3: //K�ke/mun
				trauma=trauma+Math.floor(redudmg/2);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"K�ke: Men, �rr"
				break;
			case 4:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"�ra: Men, �rr";
				break;
			case 5: 
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"N�sa: Bryt, �rr";
				break;
			case 6:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Tappar";
				break;
			case 7:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Fast, �rr";
				break;
			case 8:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning:";
				break;
			case 9:
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Fast, �rr";
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
				
				//document.f2.txtarea.value=document.f2.txtarea.value+"\ntr�ff: "+traff.toString();
				switch (traff) //Extra-skador SKALLE
				{
					case 1: //Hj�rna
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj�rna: Fast, Men";
						break;
					case 2: //Hj�rna
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj�rna: Fast, Men"
						break;
					case 3: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Bryt, Fast, �rr"
						break;
					case 4: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Bryt, Fast";
						break;
					case 5: //Omt�ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Omt�ckning: Tappar";
						break;
					case 6: //Omt�ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Omt�ckning: Tappar";
						break;
					case 7: //Bl�dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Bl�dning: Fast, �rr";
						break;
					case 8: //Bl�dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Bl�dning:";
						break;
					case 9: //K�tts�r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"K�tt: Fast, �rr";
						break;
					case 10: //K�tts�r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"K�tt:";
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
					misc=traff.toString()+"Strupe: Fast, Kv�v, Tappar";
					break;
				case 2: //Nackkotor
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"Nackkotor: Bryt, Fast";
					break;
				case 3: //Puls�der
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*2);
					misc=traff.toString()+"Puls�der: Fast";
					break;
				case 4: //Puls�der
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*2);
					misc=traff.toString()+"Puls�der: ";
					break;
				case 5: //Art�rbl�dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg*1);
					misc=traff.toString()+"Art�rbl�dning: Fast";
					break;
				case 6: //Art�rbl�dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg*1);
					misc=traff.toString()+"Art�rbl�dning: ";
					break;
				case 7: //Omt�ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"Omt�ckning: Tappar";
					break;
				case 8: //Bl�dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg/2);
					misc=traff.toString()+"Bl�dning: Fast, �rr";
					break;
				case 9: //Bl�dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg/2);
					misc=traff.toString()+"Bl�dning: ";
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
		break;
		case "arm": //Extra-skador ARM
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
			case 2: //Art�rbl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art�rbl�dning: Fast";
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
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Tappar";
				break;
			case 7: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Fast, �rr";
				break;
			case 8: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning:";
				break;
			case 9: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Fast, �rr";
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
	break;
	case "br�stkorg": //Extra-skador BR�STKORG
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

			case 1: //Hj�rta
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*5);
				misc=traff.toString()+"Hj�rta: Fast, Tappar";
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
			case 5: //Puls�der
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Puls�der: Fast";
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
			case 8: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: ";
				break;
			case 9: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Fast, �rr";
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

			case 1: //In�lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In�lvor: Inre Skada, Fast, Ramlar";
				break;
			case 2: //In�lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In�lvor: Inre Skada, Fast";
				break;
			case 3: //In�lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In�lvor: Inre Skada, Fast";
				break;
			case 4: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Ryggrad: Bryt, Fast";
				break;
			case 5: //Puls�der
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Puls�der: Fast";
				break;
			case 6: //Art�rbl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art�rbl�dning: Fast";
				break;
			case 7: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning:";
				break;
			case 8: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Fast, �rr";
				break;
			case 9: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning:";
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

			case 1: //K�nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"K�nsorgan: Fast, Men, Tappar";
				break;
			case 2: //K�nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"K�nsorgan: Men, Ramlar";
				break;
			case 3: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Tappar";
				break;
			case 4: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Fast, �rr";
				break;
			case 5: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Fast, �rr";
				break;
			case 6: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Fast, �rr";
				break;
			case 7: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: �rr";
				break;
			case 8: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning:";
				break;
			case 9: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Fast, �rr";
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
			case 2: //Art�rbl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art�rbl�dning: Fast";
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
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Ramlar";
				break;
			case 7: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Fast, �rr";
				break;
			case 8: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning:";
				break;
			case 9: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Fast, �rr";
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
	break;
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	document.f2.txtarea.value = "Trauma: " + trauma + "\nSm�rta: " + pain + "\nBl�dning: " + bleed + "\n" + misc
}
