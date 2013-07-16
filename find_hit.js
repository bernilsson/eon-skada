
function find_hit(hitsel,hitnum,dmgtype){

	//alert(hitsel+dmgtype);
	switch (hitsel+dmgtype)
	{
	case "headhugg": case "headkross": case "headstick":
	hitnum=t10();
	switch (true) //Head
	{
		case ((hitnum >= 1) && (hitnum <= 4)):
			document.f1.t3.value="Huvud - Ansikte";
			document.f1.hitarea.value="1";
			break;
                case ((hitnum >= 5) && (hitnum <= 8)):
                        document.f1.t3.value="Huvud - Skalle";
						document.f1.hitarea.value="2";
                        break;
                case ((hitnum >= 9) && (hitnum <= 10)):
                        document.f1.t3.value="Huvud - Hals";
						document.f1.hitarea.value="3";
                        break;

	}
	break;
	case "leftarmhugg": case "leftarmkross": case "leftarmstick":
	hitnum=t10();
	switch (true) //Left Arm
	{
		case ((hitnum >= 1) && (hitnum <= 2)):
			document.f1.t3.value="V" + unescape("%E4") + "nster arm - Skuldra";
			document.f1.hitarea.value="4";
			break;
		case ((hitnum >= 3) && (hitnum <= 4)):
			document.f1.t3.value="V" + unescape("%E4") + "nster arm - " + unescape("%F6") + "verarm";
			document.f1.hitarea.value="6";
			break;
		case (hitnum == 5):
			document.f1.t3.value="V" + unescape("%E4") + "nster arm - Armb" + unescape("%E5") + "ge";
			document.f1.hitarea.value="8";
			break;
		case ((hitnum  >= 6) && (hitnum <= 8)):
			document.f1.t3.value="V" + unescape("%E4") + "nster arm - Underarm";
			document.f1.hitarea.value="10";
			break;
		case ((hitnum  >= 9) && (hitnum <= 10)):
			document.f1.t3.value="V" + unescape("%E4") + "nster arm - Hand";
			document.f1.hitarea.value="12";
			break;
	}
	break;

        case "rightarmhugg": case "rightarmkross": case "rightarmstick":
        hitnum=t10();
        switch (true) //Right arm
        {
                case ((hitnum >= 1) && (hitnum <= 2)):
                        document.f1.t3.value="H" + unescape("%F6") + "ger arm - Skuldra";
						document.f1.hitarea.value="5";
                        break;
                case ((hitnum >= 3) && (hitnum <= 4)):
                        document.f1.t3.value="H" + unescape("%F6") + "ger arm - " + unescape("%F6") + "verarm";
						document.f1.hitarea.value="7";
                        break;
                case (hitnum == 5):
                        document.f1.t3.value="H" + unescape("%F6") + "ger arm - Armb" + unescape("%E5") + "ge";
						document.f1.hitarea.value="9";
                        break;
                case ((hitnum  >= 6) && (hitnum <= 8)):
                        document.f1.t3.value="H" + unescape("%F6") + "ger arm - Underarm";
						document.f1.hitarea.value="11";
                        break;
                case ((hitnum  >= 9) && (hitnum <= 10)):
                        document.f1.t3.value="H" + unescape("%F6") + "ger arm - Hand";
						document.f1.hitarea.value="13";
                        break;
        }
        break;
        case "chesthugg": case "chestkross": case "cheststick": //Chest
		document.f1.t3.value="Br" + unescape("%F6") + "stkorg";
		document.f1.hitarea.value="14";
        break;
		case "abdomenhugg": case "abdomenkross": case "abdomenstick": //Belly
        hitnum=t10();
        switch (true) 
        {
                case ((hitnum >= 1) && (hitnum <= 8)):
					document.f1.t3.value="Buk - Mage";
					document.f1.hitarea.value="15";
                        break;
                case ((hitnum >= 9) && (hitnum <= 10)):
						document.f1.t3.value="Buk - Underliv";	
						document.f1.hitarea.value="16";
                        break;
        }
		break;
		case "leftleghugg": case "leftlegkross": case "leftlegstick":
        hitnum=t10();
        switch (true) //Left leg
        {
                case ((hitnum >= 1) && (hitnum <= 2)):
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - H" + unescape("%F6") + "ft";
						document.f1.hitarea.value="17";
                        break;
                case ((hitnum >= 3) && (hitnum <= 4)):
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - L" + unescape("%E5") + "r";
						document.f1.hitarea.value="19";
                        break;
                case ((hitnum >= 5) && (hitnum <= 6)):
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - Kn" + unescape("%E4");
						document.f1.hitarea.value="21";
                        break;
                case ((hitnum  >= 7) && (hitnum <= 9)):
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - Vad";
						document.f1.hitarea.value="23";
                        break;
                case (hitnum  == 10):
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - Fot";
						document.f1.hitarea.value="25";
                        break;
        }
        break;
        case "rightleghugg": case "rightlegkross": case "rightlegstick":
        hitnum=t10();
        switch (true) //Right Leg
        {
                case ((hitnum >= 1) && (hitnum <= 2)):
                        document.f1.t3.value="H" + unescape("%F6") + "ger ben - H" + unescape("%F6") + "ft";
						document.f1.hitarea.value="18";
                        break;
                case ((hitnum >= 3) && (hitnum <= 4)):
                        document.f1.t3.value="H" + unescape("%F6") + "ger ben - L" + unescape("%E5") + "r";
						document.f1.hitarea.value="20";
                        break;
                case ((hitnum >= 5) && (hitnum <= 6)):
                        document.f1.t3.value="H" + unescape("%F6") + "ger ben - Kn" + unescape("%E4");
						document.f1.hitarea.value="22";
                        break;
                case ((hitnum  >= 7) && (hitnum <= 9)):
                        document.f1.t3.value="H" + unescape("%F6") + "ger ben - Vad";
						document.f1.hitarea.value="24";
                        break;
                case (hitnum  == 10):
                        document.f1.t3.value="H" + unescape("%F6") + "ger ben - Fot";
						document.f1.hitarea.value="26";
                        break;
        }
        break;

	case "normalstick":

			switch (true) //Tr" + unescape("%E4") + "fftabell f" + unescape("%F6") + "r normalt stick:
			{
				case ((hitnum >= 1) && (hitnum <= 4)):
					document.f1.t3.value="Huvud - Ansikte [1]";
					break;
				case ((hitnum >= 5) && (hitnum <= 8)):
					document.f1.t3.value="Huvud - Skalle [2]";
					break;
				case ((hitnum >= 9) && (hitnum <= 10)):
					document.f1.t3.value="Huvud - Hals [3]";
					break;
				case ((hitnum >= 11) && (hitnum <= 12)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Skuldra [4]";
					break;
				case ((hitnum >= 13) && (hitnum <= 14)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - " + unescape("%F6") + "verarm [6]";
					break;
				case (hitnum == 15):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Armb" + unescape("%E5") + "ge [8]";
					break;
				case ((hitnum >= 16) && (hitnum <= 18)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Underarm [10]";
					break;
				case ((hitnum >= 19) && (hitnum <= 20)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Hand [12]";
					break;
				case ((hitnum >= 21) && (hitnum <= 22)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Skuldra [5]";
					break;
				case ((hitnum >= 23) && (hitnum <= 24)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - " + unescape("%F6") + "verarm [7]";
					break;
				case (hitnum == 25):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Armb" + unescape("%E5") + "ge [9]";
					break;
				case ((hitnum >= 26) && (hitnum <= 28)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Underarm [11]";
					break;
				case ((hitnum >= 29) && (hitnum <= 30)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Hand [13]";
					break;
				case ((hitnum >= 31) && (hitnum <= 50)):
					document.f1.t3.value="Br" + unescape("%F6") + "stkorg [14]";
					break;
				case ((hitnum >= 51) && (hitnum <= 58)):
					document.f1.t3.value="Buk - Mage [15]";
					break;
				case ((hitnum >= 59) && (hitnum <= 60)):
					document.f1.t3.value="Buk - Underliv [16]";
					break;
				case ((hitnum >= 61) && (hitnum <= 64)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - H" + unescape("%F6") + "ft [17]";
					break;
				case ((hitnum >= 65) && (hitnum <= 68)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - L" + unescape("%E5") + "r [19]";
					break;
				case ((hitnum >= 69) && (hitnum <= 72)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - Kn" + unescape("%E4") + " [21]";
					break;
				case ((hitnum >= 73) && (hitnum <= 78)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - Vad [23]";
					break;
				case ((hitnum >= 79) && (hitnum <= 80)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - Fot [25]";
					break;
				case ((hitnum >= 81) && (hitnum <= 84)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - H" + unescape("%F6") + "ft [18]";
					break;
				case ((hitnum >= 85) && (hitnum <= 88)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - L" + unescape("%E5") + "r [20]";
					break;
				case ((hitnum >= 89) && (hitnum <= 92)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - Kn" + unescape("%E4") + " [22]";
					break;
				case ((hitnum >= 93) && (hitnum <= 98)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - Vad [24]";
					break;
				case ((hitnum >= 99) && (hitnum <= 100)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - Fot [26]";
					break; 
			}
			break; 



	case "normalhugg": case "normalkross": 
			switch (true) //Tr" + unescape("%E4") + "fftabell f" + unescape("%F6") + "r normalt hugg-slag:
			{
				case ((hitnum >= 1) && (hitnum <= 20)):
					//Huvud
					if ((hitnum >= 1) && (hitnum <=8))
					{
						document.f1.t3.value="Huvud - Ansikte [1]";
					}
					else if ((hitnum >= 9) && (hitnum <=16))
					{
						document.f1.t3.value="Huvud - Skalle [2]";
					}
					else if ((hitnum >= 17) && (hitnum <=20))
					{
						document.f1.t3.value="Huvud - Hals [3]";
					}
					break;
				case ((hitnum >= 21) && (hitnum <= 40)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm";
					if ((hitnum >= 21) && (hitnum <=24))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster arm - Skuldra [4]";
					}
					else if ((hitnum >= 25) && (hitnum <=28))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster arm - " + unescape("%F6") + "verarm [6]";
					}
					else if ((hitnum >= 29) && (hitnum <= 30))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster arm - Armb" + unescape("%E5") + "ge [8]";
					}
					else if ((hitnum >= 31) && (hitnum <= 36))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster arm - Underarm [10]";
					}
					else if ((hitnum >= 37) && (hitnum <= 40))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster arm - Hand [12]";
					}
					//V" + unescape("%E4") + "nster arm
					break;
				case ((hitnum >= 41) && (hitnum <= 60)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm";
					if ((hitnum >= 41) && (hitnum <= 44))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger arm - Skuldra [5]";
					}
					else if ((hitnum >= 45) && (hitnum <= 48))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger arm - " + unescape("%F6") + "verarm [7]";
					}
					else if ((hitnum >= 49) && (hitnum <= 50))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger arm - Armb" + unescape("%E5") + "ge [9]";
					}
					else if ((hitnum >= 51) && (hitnum <= 56))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger arm - Underarm [11]";
					}
					else if ((hitnum >= 57) && (hitnum <= 60))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger arm - Hand [13]";
					}
					//H" + unescape("%F6") + "ger arm
					break;
				case ((hitnum >= 61) && (hitnum <= 70)):
					document.f1.t3.value="Br" + unescape("%F6") + "stkorg [14]";
					//Br" + unescape("%F6") + "stkorg
					break;
				case ((hitnum >= 71) && (hitnum <= 80)):
					document.f1.t3.value="Buk";
					if ((hitnum >= 71) && (hitnum <= 78))
					{
						document.f1.t3.value="Buk - Mage [15]";
					}
					else if ((hitnum >= 79) && (hitnum <= 80))
					{
						document.f1.t3.value="Buk - Underliv [16]";
					}
					//Buk
					break;

				case ((hitnum >= 81) && (hitnum <= 90)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben";
					if ((hitnum >= 81) && (hitnum <= 82))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - H" + unescape("%F6") + "ft [17]";
					}	
					else if ((hitnum >= 83) && (hitnum <= 84))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - L" + unescape("%E5") + "r [19]";
					}
					else if ((hitnum >= 85) && (hitnum <= 86))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - Kn" + unescape("%E4") + " [21]";
					}
					else if ((hitnum >= 87) && (hitnum <= 89))
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - Vad [23]";
					}
					else if (hitnum == 90)
					{
						document.f1.t3.value="V" + unescape("%E4") + "nster ben - Fot [25]";
					} 
					//V" + unescape("%E4") + "nster ben
					break;

				case ((hitnum >= 91) && (hitnum <= 100)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben";
					if ((hitnum >= 91) && (hitnum <= 92))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger ben - H" + unescape("%F6") + "ft [18]";
					}
					if ((hitnum >= 93) && (hitnum <= 94))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger ben - L" + unescape("%E5") + "r [20]";
					}
					if ((hitnum >= 95) && (hitnum <= 96))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger ben - Kn" + unescape("%E4") + " [22]";
					}
					if ((hitnum >= 97) && (hitnum <= 99))
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger ben - Vad [24]";
					}
					if (hitnum >= 100)
					{
						document.f1.t3.value="H" + unescape("%F6") + "ger ben - Fot [26]";
					}
					//H" + unescape("%F6") + "ger ben
					break;

			}
			break;
			case "highstick":
			switch (true) //Tr" + unescape("%E4") + "fftabell f" + unescape("%F6") + "r h" + unescape("%F6") + "gt hugg-slag
			{
				case ((hitnum >= 1) && (hitnum <= 8)): //Huvud
					document.f1.t3.value="Huvud - Ansikte [1]";
					break;
				case ((hitnum >= 9) && (hitnum <= 16)):
					document.f1.t3.value="Huvud - Skalle [2]";
					break;					
				case ((hitnum >= 17) && (hitnum <= 20)):
					document.f1.t3.value="Huvud - Hals [3]";
					break;
				case ((hitnum >= 21) && (hitnum <= 24)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Skuldra [4]";
					break;
				case ((hitnum >= 25) && (hitnum <= 28)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - " + unescape("%F6") + "verarm [6]";
                    break;
				case ((hitnum >= 29) && (hitnum <= 30)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Armb" + unescape("%E5") + "ge [8]";
					break;
				case ((hitnum >= 31) && (hitnum <= 36)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Underarm [10]";
                    break;
				case ((hitnum >= 37) && (hitnum <= 40)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Hand [12]";
					break;
				case ((hitnum >= 41) && (hitnum <= 44)): 
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Skuldra [5]"
					break;
				case ((hitnum >= 45) && (hitnum <= 48)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - " + unescape("%F6") + "verarm [7]";
					break;
				case ((hitnum >= 49) && (hitnum <= 50)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Armb" + unescape("%E5") + "ge [9]";
					break;
				case ((hitnum >= 51) && (hitnum <= 56)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Underarm [11]";
					break;
				case ((hitnum >= 57) && (hitnum <= 60)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Hand [13]";
					break;
				case ((hitnum >= 61) && (hitnum <= 90)):
					document.f1.t3.value="Br" + unescape("%F6") + "stkorg [14]";
					break;
				case ((hitnum >= 91) && (hitnum <= 98)):
					document.f1.t3.value="Buk - Mage [15]";
					break;
				case ((hitnum >= 99) && (hitnum <= 100)):
					document.f1.t3.value="Buk - Underliv [16]";
					break;
			}
			break;



		case "highhugg": case "highkross":
			switch (true) //Tr" + unescape("%E4") + "fftabell f" + unescape("%F6") + "r h" + unescape("%F6") + "gt hugg-slag
			{
				case ((hitnum >= 1) && (hitnum <= 30)): //Huvud
					if ((hitnum >= 1) && (hitnum <= 12))
                                        {
                                                document.f1.t3.value="Huvud - Ansikte [1]";
                                        }
					
					if ((hitnum >= 13) && (hitnum <= 24))
                                        {
                                                document.f1.t3.value="Huvud - Skalle [2]";
                                        }
					if ((hitnum >= 25) && (hitnum <= 30))
                                        {
                                                document.f1.t3.value="Huvud - Hals [3]";
                                        }
					break;
				case ((hitnum >= 31) && (hitnum <= 60)): 
                                        if ((hitnum >= 31) && (hitnum <= 36))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster arm - Skuldra [4]";
                                        }
                                        else if ((hitnum >= 37) && (hitnum <= 42))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster arm - " + unescape("%F6") + "verarm [6]";
                                        }
                                        else if ((hitnum >= 43) && (hitnum <= 45))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster arm - Armb" + unescape("%E5") + "ge [8]";
                                        }
                                        else if ((hitnum >= 46) && (hitnum <= 54))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster arm - Underarm [10]";
                                        }
                                        else if ((hitnum >= 55) && (hitnum <= 60))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster arm - Hand [12]";
                                        }

					break;
				case ((hitnum >= 61) && (hitnum <= 90)): //H" + unescape("%F6") + "ger arm

                                        if ((hitnum >= 61) && (hitnum <= 66))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger arm - Skuldra [5]";
                                        }
                                        else if ((hitnum >= 67) && (hitnum <= 72))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger arm - " + unescape("%F6") + "verarm [7]";
                                        }
                                        else if ((hitnum >= 73) && (hitnum <= 75))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger arm - Armb" + unescape("%E5") + "ge [9]";
                                        }
                                        else if ((hitnum >= 76) && (hitnum <= 84))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger arm - Underarm [11]";
                                        }
                                        else if ((hitnum >= 85) && (hitnum <= 90))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger arm - Hand [13]";
                                        }
					break;
				case ((hitnum >= 91) && (hitnum <= 100)):
					document.f1.t3.value="Br" + unescape("%F6") + "stkorg [14]";
					//Br" + unescape("%F6") + "stkorg
					break;
			}
			break;
		case "lowhugg": case "lowkross": case "lowstick":
			switch (true)
			{
				case ((hitnum >= 1) && (hitnum <= 20)):  //Buk
                                        if ((hitnum >= 1) && (hitnum <= 16))
                                        {
                                                document.f1.t3.value="Buk - Mage [15]";
                                        }
                                        else if ((hitnum >= 17) && (hitnum <= 20))
                                        {
                                                document.f1.t3.value="Buk - Underliv [16]";
                                        }

					break;
				case ((hitnum >= 21) && (hitnum <= 60)): //V" + unescape("%E4") + "nster Ben
                                        if ((hitnum >= 21) && (hitnum <= 28))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster ben - H" + unescape("%F6") + "ft [17]";
                                        }       
                                        else if ((hitnum >= 29) && (hitnum <= 36))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster ben - L" + unescape("%E5") + "r [19]";
                                        }
                                        else if ((hitnum >= 37) && (hitnum <= 44))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster ben - Kn" + unescape("%E4") + " [21]";
                                        }
                                        else if ((hitnum >= 45) && (hitnum <= 56))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster ben - Vad [23]";
                                        }
                                        else if ((hitnum == 57) && (hitnum <= 60))
                                        {
                                                document.f1.t3.value="V" + unescape("%E4") + "nster ben - Fot [25]";
                                        } 
					break;
				case ((hitnum >= 61) && (hitnum <= 100)): //H" + unescape("%F6") + "ger ben
                                        //document.f1.t3.value="H" + unescape("%F6") + "ger ben";
                                        if ((hitnum >= 61) && (hitnum <= 68))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger ben - H" + unescape("%F6") + "ft [18]";
                                        }
                                        if ((hitnum >= 69) && (hitnum <= 76))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger ben - L" + unescape("%E5") + "r [20]";
                                        }
                                        if ((hitnum >= 77) && (hitnum <= 84))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger ben - Kn" + unescape("%E4") + " [22]";
                                        }
                                        if ((hitnum >= 85) && (hitnum <= 96))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger ben - Vad [24]";
                                        }
                                        if ((hitnum >= 97) && (hitnum <= 100))
                                        {
                                                document.f1.t3.value="H" + unescape("%F6") + "ger ben - Fot [26]";
                                        }
					break;

			}
			break; 

		case "lowstick":
			switch (true)
			{
				case ((hitnum >= 1) && (hitnum <= 2)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Skuldra [4]";
					break;
				case ((hitnum >= 3) && (hitnum <= 4)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - " + unescape("%F6") + "verarm [6]";
					break;
				case (hitnum == 5):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Armb" + unescape("%E5") + "ge [8]";
					break;
				case ((hitnum >= 6) && (hitnum <= 8)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Underarm [10]";
					break;
				case ((hitnum >= 9) && (hitnum <= 10)):
					document.f1.t3.value="V" + unescape("%E4") + "nster arm - Hand [12]";
					break;
				case ((hitnum >= 11) && (hitnum <= 12)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Skuldra [5]";
					break;
				case ((hitnum >= 13) && (hitnum <= 14)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - " + unescape("%F6") + "verarm [7]";
					break;
				case (hitnum == 15):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Armb" + unescape("%E5") + "ge [9]";
					break;
				case ((hitnum >= 16) && (hitnum <= 18)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Underarm [11]";
					break;
				case ((hitnum >= 19) && (hitnum <= 20)):
					document.f1.t3.value="H" + unescape("%F6") + "ger arm - Underarm [11]";
					break;
				case ((hitnum >= 21) && (hitnum <= 30)):
					document.f1.t3.value="Br" + unescape("%F6") + "stkorg [14]";
					break;
				case ((hitnum >= 31) && (hitnum <= 38)):
					document.f1.t3.value="Buk - Mage [15]";
					break;
				case ((hitnum >= 39) && (hitnum <= 40)):
					document.f1.t3.value="Buk - Underliv [16]";
					break;
				case ((hitnum >= 41) && (hitnum <= 46)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - H" + unescape("%F6") + "ft [17]";
					break;
				case ((hitnum >= 47) && (hitnum <= 52)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - L" + unescape("%E5") + "r [19]";
					break;
				case ((hitnum >= 53) && (hitnum <= 58)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - Kn" + unescape("%E4") + " [21]";
					break;
                case ((hitnum >= 59) && (hitnum <= 67)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - Vad [23]";
					break;
				case ((hitnum >= 68) && (hitnum <= 70)):
					document.f1.t3.value="V" + unescape("%E4") + "nster ben - Fot [25]";
					break;
				case ((hitnum >= 71) && (hitnum <= 76)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - H" + unescape("%F6") + "ft [18]";
					break;
				case ((hitnum >= 77) && (hitnum <= 82)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - L" + unescape("%E5") + "r [20]";
					break;
				case ((hitnum >= 83) && (hitnum <= 88)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - Kn" + unescape("%E4") + " [22]";
					break;
				case ((hitnum >= 89) && (hitnum <= 97)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - Vad [24]";
					break;
				case ((hitnum >= 98) && (hitnum <= 100)):
					document.f1.t3.value="H" + unescape("%F6") + "ger ben - Fot [26]";
					break;
			}
			break; 
	}
}
