
function hugg_skada(delomr,redudmg){
	var trauma=0;
	var pain=0;
	var bleed=0;
	var misc="";
	var traff=0;
	document.f2.txtarea.value=""
	if (document.f1.check1.checked)
	{
		traff=ob(1);
		if ( traff > 10 )
		{
			traff=10;
		}
	}
	else
	{
		traff=t10();
	}
	switch (delomr)
	{
		case "ansikte": //Extra-skador ANSIKTE
		trauma=1;
		pain=3;
		bleed=1;
		//no extra dmg
		if (redudmg > 9) //Extra-skador!
		{
			switch (traff)
			{
			case 1: //Hj" + unescape("%E4") + "rna
				trauma=Math.floor(redudmg*2);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Amp, Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+", Men";
			break;
			case 2: //" + unescape("%F6") + "ga
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"" + unescape("%F6") + "ga: Amp, Men, " + unescape("%E4") + "rr"
				break;
			case 3: //K" + unescape("%E4") + "ke/mun
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%E4") + "ke: Amp, Men, " + unescape("%E4") + "rr"
				break;
			case 4:
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"" + unescape("%F6") + "ra: Amp, Men, " + unescape("%E4") + "rr";
				break;
			case 5: 
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"N" + unescape("%E4") + "sa: Amp, Bryt STY<"+ ob((redudmg/10)+1)+", " + unescape("%E4") + "rr\nBRYT: S+"+Math.floor(redudmg/10)+" Offrets n"+ unescape("%E4") +"sben "+ unescape("%E4") +"r brutet. Första gången detta h"+ unescape("%E4") +"nder(och inte efterföljande gånger) s"+ unescape("%E4") +"nks offrets PER med ett (-1).";
				break;
			case 6:
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Faller, Tappar CV<"+ob(3)+"";
				break;
			case 7:
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp";
				break;
			case 8:
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp, " + unescape("%E4") + "rr";
				break;
			case 9:
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp";
				break;
			case 10:
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
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
				//document.f2.txtarea.value=document.f2.txtarea.value+"\ntr" + unescape("%E4") + "ff: "+traff.toString();
				switch (traff) //Extra-skador SKALLE
				{
					case 1: //Hj" + unescape("%E4") + "rna
						trauma=Math.floor(redudmg*2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Amp, Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+", Men";
						break;
					case 2: //Hj" + unescape("%E4") + "rna
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Hj" + unescape("%E4") + "rna: Amp, Men"
						break;
					case 3: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Amp, Bryt STY<"+ ob(redudmg/10)+", Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+", " + unescape("%E4") + "rr\nBRYT: S+"+Math.floor(redudmg/10)+" Om skallbenet krossas inneb"+ unescape("%E4") +"r det att offret har fått en spricka i skallbenet med hj"+ unescape("%E4") +"rnskakning och kraftig huvudv"+ unescape("%E4") +"rk som följd. Vid riktigt allvarliga skador kan benflisor tr"+ unescape("%E4") +"ngas in i hj"+ unescape("%E4") +"rnan och döden "+ unescape("%E4") +"r då n"+ unescape("%E4") +"ra förestående.  Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information."
						break;
					case 4: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Amp, Bryt STY<"+ ob(redudmg/10)+", Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Om skallbenet krossas inneb"+ unescape("%E4") +"r det att offret har fått en spricka i skallbenet med hj"+ unescape("%E4") +"rnskakning och kraftig huvudv"+ unescape("%E4") +"rk som följd. Vid riktigt allvarliga skador kan benflisor tr"+ unescape("%E4") +"ngas in i hj"+ unescape("%E4") +"rnan och döden "+ unescape("%E4") +"r då n"+ unescape("%E4") +"ra förestående.  Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
						break;
					case 5: //Skallben
						trauma=Math.floor(redudmg/2);
						pain=Math.floor(redudmg/2);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Skallben: Amp, Bryt STY<"+ ob(redudmg/10)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Om skallbenet krossas inneb"+ unescape("%E4") +"r det att offret har fått en spricka i skallbenet med hj"+ unescape("%E4") +"rnskakning och kraftig huvudv"+ unescape("%E4") +"rk som följd. Vid riktigt allvarliga skador kan benflisor tr"+ unescape("%E4") +"ngas in i hj"+ unescape("%E4") +"rnan och döden "+ unescape("%E4") +"r då n"+ unescape("%E4") +"ra förestående.  Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";;
						break;
					case 6: //Omt" + unescape("%F6") + "ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Faller, Tappar CV<"+ob(3)+"";
						break;
					case 7: //Omt" + unescape("%F6") + "ckning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg*1);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Tappar CV<"+ob(3)+"";
						break;
					case 8: //Bl" + unescape("%F6") + "dning
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/2);
						misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp";
						break;
					case 9: //K" + unescape("%F6") + "tts" + unescape("%E5") + "r
						trauma=Math.floor(redudmg/10);
						pain=Math.floor(redudmg/10);
						bleed=Math.floor(redudmg/10);
						misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp, " + unescape("%E4") + "rr";
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
				switch (traff)
				{

				case 1: //Strupe
					trauma=Math.floor(redudmg*1);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*1);
					misc=traff.toString()+"Strupe: Amp, Kv" + unescape("%E4") + "v, Tappar CV<"+ob(3)+"";
					break;
				case 2: //Strupe
					trauma=Math.floor(redudmg*1);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*1);
					misc=traff.toString()+"Strupe: Amp, Kv" + unescape("%E4") + "v";
					break;
				case 3: //Nackkotor
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"Nackkotor: Amp, Bryt STY<"+ ob(redudmg/10)+", Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Om nackkotorna bryts så totalförlamas offret. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
					break;
				case 4: //Nackkotor
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"Nackkotor: Amp, Bryt STY<"+ ob(redudmg/10)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Om nackkotorna bryts så totalförlamas offret. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";;
					break;
				case 5: //Puls" + unescape("%E5") + "der
					trauma=Math.floor(redudmg/2);
					pain=Math.floor(redudmg/2);
					bleed=Math.floor(redudmg*2);
					misc=traff.toString()+"Puls" + unescape("%E5") + "der: Amp";
					break;
				case 6: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg*1);
					misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: Amp";
					break;
				case 7: //Omt" + unescape("%F6") + "ckning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg*1);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Tappar CV<"+ob(3)+"";
					break;
				case 8: //Bl" + unescape("%F6") + "dning
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg/2);
					misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp";
					break;
				case 9: //K" + unescape("%F6") + "tt
					trauma=Math.floor(redudmg/10);
					pain=Math.floor(redudmg/10);
					bleed=Math.floor(redudmg/10);
					misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp, " + unescape("%E4") + "rr";
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
			switch (traff)
			{

			case 1: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Benpipa: Amp, Bryt STY<"+ ob((redudmg/10)+1)+", Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+", Tappar CV<"+ob(3)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Om en benpipa "+ unescape("%E4") +"r bruten kan inte den skadade kroppsdelen anv"+ unescape("%E4") +"ndas. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
				break;
			case 2: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Benpipa: Amp, Bryt STY<"+ ob((redudmg/10)+1)+", Tappar CV<"+ob(3)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Om en benpipa "+ unescape("%E4") +"r bruten kan inte den skadade kroppsdelen anv"+ unescape("%E4") +"ndas. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
				break;
			case 3: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: Amp";
				break;
			case 4: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Amp, Men, Tappar CV<"+ob(3)+"";
				break;
			case 5: //Muskler/Senor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Muskler/Senor: Amp, Men";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Tappar CV<"+ob(3)+"";
				break;
			case 7: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp";
				break;
			case 8: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp, " + unescape("%E4") + "rr";
				break;
			case 9: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp";
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
	case "br"+ unescape("%F6") +"stkorg": //Extra-skador BR" + unescape("%F6") + "STKORG
		trauma=1;
		pain=1;
		bleed=1;
		if (redudmg > 9) //Extra-skador!
		{

			switch (traff)
			{

			case 1: //Hj" + unescape("%E4") + "rta
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*5);
				misc=traff.toString()+"Hj" + unescape("%E4") + "rta: Amp, Faller, Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+"";
				break;
			case 2: //Lunga
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Lunga: Amp, Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+", Inre Skada";
				break;
			case 3: //Lunga
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Lunga: Amp, Faller, Inre Skada";
				break;
			case 4: //Puls" + unescape("%E5") + "der
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Puls" + unescape("%E5") + "der: Amp";
				break;
			case 5: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Ryggrad: Amp, Bryt STY<" + ob(redudmg/10) + ", Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Om ryggraden bryts av en tr"+ unescape("%E4") +"ff i Bröstkorgen blir offret förlamat från midjan och nedåt. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";

				break;
			case 6: //Revben
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Revben: Amp, Bryt STY<" + ob((redudmg/10)+1) + ", Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Brutna revben inneb"+ unescape("%E4") +"r att offret har svårare att röra sig. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
				break;
			case 7: //Revben
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Revben: Amp, Bryt STY<" + ob((redudmg/10)+1)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Brutna revben inneb"+ unescape("%E4") +"r att offret har svårare att röra sig. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
				break;
			case 8: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp";
				break;
			case 9: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp, " + unescape("%E4") + "rr";
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

		switch (traff)
		{

			case 1: //In" + unescape("%E4") + "lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In" + unescape("%E4") + "lvor: Amp, Faller, Inre Skada";
				break;
			case 2: //In" + unescape("%E4") + "lvor
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"In" + unescape("%E4") + "lvor: Amp, Inre Skada";
				break;
			case 3: //Ryggrad
				trauma=Math.floor(redudmg*1);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Ryggrad: Amp, Bryt<" + ob(redudmg/10) + ", Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Slå genast ett normalt slag (Ob3T6) mot offrets Tur slås - lyckas detta så undgår offret att bli förlamad. Misslyckas slaget blir offret förlamat från midjan och neråt. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
				break;
			case 4: //Puls" + unescape("%E5") + "der
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg*2);
				misc=traff.toString()+"Puls" + unescape("%E5") + "der: Amp";
				break;
			case 5: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: Amp";
				break;
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp";
				break;
			case 7: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp, " + unescape("%E4") + "rr";
				break;
			case 8: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp";
				break;
			case 9: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp, " + unescape("%E4") + "rr";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
		}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	}
	break;
	case "underliv": //Extra-skador MAGE
		trauma=1;
		pain=2;
		bleed=1;
		
			switch (traff)
			{

			case 1: //K" + unescape("%F6") + "nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"K" + unescape("%F6") + "nsorgan: Amp, Men, Tappar CV<"+ob(3)+"";
				break;
			case 2: //K" + unescape("%F6") + "nsorgan
				trauma=Math.floor(redudmg/2);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"K" + unescape("%F6") + "nsorgan: Amp, Faller, Men";
				break;
			case 3: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Tappar CV<"+ob(3)+"";
				break;
			case 4: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg*1);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Faller";
				break;
			case 5: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp, " + unescape("%E4") + "rr";
				break;
			case 6: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp, " + unescape("%E4") + "rr";
				break;
			case 7: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp";
				break;
			case 8: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp, " + unescape("%E4") + "rr";
				break;
			case 9: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
		}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	break;
			case "ben": //Extra-skador " + unescape("%F6") + "
		trauma=1;
		pain=1;
		bleed=1;
		if (redudmg > 9) //Extra-skador!
		{
			switch (traff)
			{

			case 1: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Benpipa: Amp, Bryt STY<"+ ob(redudmg/10)+", Faller, Vapnet fastnar om anfallarens Tur "+ unescape("%E4") +"r mindre "+ unescape("%E4") +"n: "+ob(3)+"\nBRYT: S+"+Math.floor(redudmg/10)+" Om en benpipa "+ unescape("%E4") +"r bruten kan inte den skadade kroppsdelen anv"+ unescape("%E4") +"ndas. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
				break;
			case 2: //Benpipa
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Benpipa: Amp, Bryt STY<"+ ob(redudmg/10)+", Faller\nBRYT: S+"+Math.floor(redudmg/10)+" Om en benpipa "+ unescape("%E4") +"r bruten kan inte den skadade kroppsdelen anv"+ unescape("%E4") +"ndas. Se sidan 72 L"+ unescape("%E4") +"kning av benbrott för mer information.";
				break;
			case 3: //Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg*1);
				misc=traff.toString()+"Art" + unescape("%E4") + "rbl" + unescape("%F6") + "dning: Amp";
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
			case 6: //Omt" + unescape("%F6") + "ckning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/2);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"Omt" + unescape("%F6") + "ckning: Amp, Faller";
				break;
			case 7: //Bl" + unescape("%F6") + "dning
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/2);
				misc=traff.toString()+"Bl" + unescape("%F6") + "dning: Amp";
				break;
			case 8: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp, " + unescape("%E4") + "rr";
				break;
			case 9: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt: Amp";
				break;
			case 10: //K" + unescape("%F6") + "tt
				trauma=Math.floor(redudmg/10);
				pain=Math.floor(redudmg/10);
				bleed=Math.floor(redudmg/10);
				misc=traff.toString()+"K" + unescape("%F6") + "tt:";
				break;
				}
		}
		break;
	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"\nT+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
//	break;
//	}
	//document.f2.txtarea.value=document.f2.txtarea.value+"T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
	document.f2.txtarea.value = "T+" + trauma + "\nS+" + pain + "\nB+" + bleed + "\n" + misc
}
