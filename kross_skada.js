
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
				misc=traff.toString()+"�ga: Men, �rr"
				break;
			case 3: //K�ke/mun
				trauma=trauma+Math.floor(redudmg/2);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"K�ke: Men, �rr"
				break;
			case 4: //�ra
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg*0);
				misc=traff.toString()+"�ra: Men, �rr";
				break;
			case 5: //N�sa
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/2);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"N�sa: Bryt, �rr";
				break;
			case 6: //Omt�ckning
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Faller, Tappar";
				break;
			case 7: //Omt�ckning
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Faller, Tappar";
				break;
			case 8: //Omt�ckning
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Tappar";
				break;
			case 9: //Bl�dning
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg/2);
				misc=traff.toString()+"Bl�dning: ";
				break;
			case 10: //K�tt
				trauma=trauma+Math.floor(redudmg/10);
				pain=pain+Math.floor(redudmg/10);
				bleed=bleed+Math.floor(redudmg*0);
				misc=traff.toString()+"K�tt:";
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
				
				//document.f2.txtarea.value=document.f2.txtarea.value+"\ntr�ff: "+traff.toString();
				switch (traff) //Extra-skador SKALLE
				{
					case 1: //Hj�rna
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Hj�rna: Faller, Men";
						break;
					case 2: //Hj�rna
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Hj�rna: Men"
						break;
					case 3: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Skallben: Bryt, �rr"
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
					case 6: //Omt�ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Omt�ckning: Faller, Tappar";
						break;
					case 7: //Omt�ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Omt�ckning: Amp, Tappar";
						break;
					case 8: //Omt�ckning 
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"Omt�ckning: Tappar";
						break;
					case 9: //Bl�dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Bl�dning: ";
						break;
					case 10: //K�tts�r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg*0);
						misc=traff.toString()+"K�tt:";
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
					misc=traff.toString()+"Strupe: Kv�v, Tappar";
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
				case 6: //Omt�ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Omt�ckning: Faller, Tappar";
					break;
				case 7: //Omt�ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Omt�ckning: Faller, Tappar";
					break;
				case 8: //Omt�ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg*0);
					misc=traff.toString()+"Bl�dning: Tappar";
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
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Tappar";
				break;
			case 7: //Omt�ckning 
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Tappar";
				break;
			case 8: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: ";
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
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K�tt:";
				break;
		}
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	break;
	case "br�stkorg": //Extra-skador BR�STKORG
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
			case 7: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Tappar";
				break;
			case 8: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: ";
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
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K�tt:";
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

			case 1: //In�lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"In�lvor: Faller, Inre Skada";
				break;
			case 2: //In�lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"In�lvor: Inre Skada";
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
			case 5: //Art�rbl�dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art�rbl�dning: ";
				break;
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Faller, Tappar";
				break;
			case 7: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Tappar";
				break;
			case 8: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: ";
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
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K�tt:";
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

			case 1: //K�nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K�nsorgan: Faller, Men, Tappar";
				break;
			case 2: //K�nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K�nsorgan: Faller, Men, Tappar";
				break;
			case 3: //K�nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K�nsorgan: Faller, Men";
				break;
			case 4: //K�nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"K�nsorgan: Faller, Men";
				break;
			case 5: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Faller, Tappar";
				break;
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Faller, Tappar";
				break;
			case 7: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Faller";
				break;
			case 8: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: ";
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
				bleed=Math.floor(redudmg*0);
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
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Benpipa: Bryt, Faller";
				break;
			case 2: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
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
			case 6: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Faller";
				break;
			case 7: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: Faller";
				break;
			case 8: //Omt�ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*0);
				misc=traff.toString()+"Omt�ckning: ";
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
				bleed=Math.floor(redudmg*0);
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
