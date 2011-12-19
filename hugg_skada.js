
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
			case 1: //Hjärna
				trauma=trauma+Math.floor(redudmg*2);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/2);
				misc=traff.toString()+"Hjärna: Amp, Fast, Men";
			break;
			case 2: //Öga
				trauma=trauma+Math.floor(redudmg/2);
				pain=pain+Math.floor(redudmg*1);
				bleed=bleed+Math.floor(redudmg/10);
				misc=traff.toString()+"Öga: Amp, Men, Ärr"
				break;
			case 3: //Käke/mun
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
				
				//document.f2.txtarea.value=document.f2.txtarea.value+"\nträff: "+traff.toString();
				switch (traff) //Extra-skador SKALLE
				{
					case 1: //Hjärna
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hjärna: Amp, Fast, Men";
						break;
					case 2: //Hjärna
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hjärna: Amp, Men"
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
						misc=traff.toString()+"Omtöckning: Amp, Tappar";
						break;
					case 8: //Blödning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Blödning: Amp";
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
					trauma=Math.floor(redudmg/10);
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
			case 3: //Artärblödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Artärblödning: Amp";
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
			case 6: //Omtöckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omtöckning: Amp, Tappar";
				break;
			case 7: //Blödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Blödning: Amp";
				break;
			case 8: //Kött
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Kött: Amp, Ärr";
				break;
			case 9: //Kött
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Kött: Amp";
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
	break;
	case "bröstkorg": //Extra-skador BRÖSTKORG
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

			case 1: //Hjärta
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*5);
				misc=traff.toString()+"Hjärta: Amp, Faller, Fast";
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
			case 4: //Pulsåder
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Pulsåder: Amp";
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
			case 8: //Omtöckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omtöckning: Amp";
				break;
			case 9: //Blödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Blödning: Amp, Ärr";
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

			case 1: //Inälvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Inälvor: Amp, Faller, Inre Skada";
				break;
			case 2: //Inälvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Inälvor: Amp, Inre Skada";
				break;
			case 3: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Ryggrad: Amp, Bryt, Fast";
				break;
			case 4: //Pulsåder
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Pulsåder: Amp";
				break;
			case 5: //Artärblödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Artärblödning: Amp";
				break;
			case 6: //Omtöckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omtöckning: Amp";
				break;
			case 7: //Blödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Blödning: Amp, Ärr";
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

			case 1: //Könsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Könsorgan: Amp, Men, Tappar";
				break;
			case 2: //Könsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Könsorgan: Amp, Faller, Men";
				break;
			case 3: //Omtöckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omtöckning: Amp, Tappar";
				break;
			case 4: //Omtöckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omtöckning: Amp, Faller";
				break;
			case 5: //Blödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Blödning: Amp, Ärr";
				break;
			case 6: //Blödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Blödning: Amp, Ärr";
				break;
			case 7: //Blödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Blödning: Amp";
				break;
			case 8: //Kött
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Kött: Amp, Ärr";
				break;
			case 9: //Kött
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Kött: Amp";
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
			case 3: //Artärblödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Artärblödning: Amp";
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
			case 6: //Omtöckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omtöckning: Amp, Faller";
				break;
			case 7: //Blödning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Blödning: Amp";
				break;
			case 8: //Kött
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Kött: Amp, Ärr";
				break;
			case 9: //Kött
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Kött: Amp";
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
	break;
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	document.f2.txtarea.value = "T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
}
