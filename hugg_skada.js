
function hugg_skada(delomr,redudmg){
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
				misc=traff.toString()+"Hj�rna: Amp, Fast, Men";
			break;
			case 2: //�ga
				trauma=trauma+Math.floor(redudmg/2);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"�ga: Amp, Men, �rr"
				break;
			case 3: //K�ke/mun
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
						misc=traff.toString()+"Hj�rna: Amp, Fast, Men";
						break;
					case 2: //Hj�rna
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj�rna: Amp, Men"
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
						misc=traff.toString()+"Omt�ckning: Amp, Tappar";
						break;
					case 8: //Bl�dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Bl�dning: Amp";
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
					trauma=Math.floor(redudmg/10);
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
				misc=traff.toString()+"Benpipa: Amp, Bryt, Fast, Tappar";
				break;
			case 2: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Benpipa: Amp, Bryt, Tappar";
				break;
			case 3: //Art�rbl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art�rbl�dning: Amp";
				break;
			case 4: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Amp, Men, Tappar";
				break;
			case 5: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Amp, Men";
				break;
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Amp, Tappar";
				break;
			case 7: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Amp";
				break;
			case 8: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Amp, �rr";
				break;
			case 9: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Amp";
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
				misc=traff.toString()+"Hj�rta: Amp, Faller, Fast";
				break;
			case 2: //Lunga
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Lunga: Amp, Fast, Inre Skada";
				break;
			case 3: //Lunga
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Lunga: Amp, Faller, Inre Skada";
				break;
			case 4: //Puls�der
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Puls�der: Amp";
				break;
			case 5: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Ryggrad: Amp, Bryt, Fast";

				break;
			case 6: //Revben
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Revben: Amp, Bryt, Fast";
				break;
			case 7: //Revben
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Revben: Amp, Bryt";
				break;
			case 8: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Amp";
				break;
			case 9: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Amp, �rr";
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
				misc=traff.toString()+"In�lvor: Amp, Faller, Inre Skada";
				break;
			case 2: //In�lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In�lvor: Amp, Inre Skada";
				break;
			case 3: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Ryggrad: Amp, Bryt, Fast";
				break;
			case 4: //Puls�der
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Puls�der: Amp";
				break;
			case 5: //Art�rbl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art�rbl�dning: Amp";
				break;
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Amp";
				break;
			case 7: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Amp, �rr";
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
	break;
	case "underliv": //Extra-skador MAGE
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
				misc=traff.toString()+"K�nsorgan: Amp, Men, Tappar";
				break;
			case 2: //K�nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"K�nsorgan: Amp, Faller, Men";
				break;
			case 3: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Amp, Tappar";
				break;
			case 4: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Amp, Faller";
				break;
			case 5: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Amp, �rr";
				break;
			case 6: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Amp, �rr";
				break;
			case 7: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Amp";
				break;
			case 8: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Amp, �rr";
				break;
			case 9: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Amp";
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
			case "ben": //Extra-skador ARM
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
				misc=traff.toString()+"Benpipa: Amp, Bryt, Faller, Fast";
				break;
			case 2: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Benpipa: Amp, Bryt, Faller";
				break;
			case 3: //Art�rbl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art�rbl�dning: Amp";
				break;
			case 4: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Amp, Faller, Men";
				break;
			case 5: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Amp, Men";
				break;
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt�ckning: Amp, Faller";
				break;
			case 7: //Bl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: Amp";
				break;
			case 8: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Amp, �rr";
				break;
			case 9: //K�tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K�tt: Amp";
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
	document.f2.txtarea.value = "T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
}
