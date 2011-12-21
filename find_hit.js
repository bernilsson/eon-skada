
function find_hit(hitsel,hitnum,dmgtype){

//	document.f1.t3.value=hitsel+dmgtype;

	switch (hitsel+dmgtype)
	{
	case "normalhugg": case "normalkross": case "normalstick":

		       	//document.f1.t3.value=hitsel+dmgtype;
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



		case "highhugg": case "highkross": case "highstick":
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
				case ((hitnum >= 31) && (hitnum <= 60)): //V" + unescape("%E4") + "nster arm
					//document.f1.t3.value="V" + unescape("%E4") + "nster arm";

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

	}
}
