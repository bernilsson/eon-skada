
function find_hit(hitsel,hitnum,dmgtype){

//	document.f1.t3.value=hitsel+dmgtype;

	switch (hitsel+dmgtype)
	{
	case "normalhugg": case "normalkross":

		       	//document.f1.t3.value=hitsel+dmgtype;
			switch (true) //Träfftabell för normalt hugg-slag:
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
					document.f1.t3.value="Vänster arm";
					if ((hitnum >= 21) && (hitnum <=24))
					{
						document.f1.t3.value="Vänster arm - Skuldra [4]";
					}
					else if ((hitnum >= 25) && (hitnum <=28))
					{
						document.f1.t3.value="Vänster arm - Överarm [6]";
					}
					else if ((hitnum >= 29) && (hitnum <= 30))
					{
						document.f1.t3.value="Vänster arm - Armbåge [8]";
					}
					else if ((hitnum >= 31) && (hitnum <= 36))
					{
						document.f1.t3.value="Vänster arm - Underarm [10]";
					}
					else if ((hitnum >= 37) && (hitnum <= 40))
					{
						document.f1.t3.value="Vänster arm - Hand [12]";
					}
					//Vänster arm
					break;
				case ((hitnum >= 41) && (hitnum <= 60)):
					document.f1.t3.value="Höger arm";
					if ((hitnum >= 41) && (hitnum <= 44))
					{
						document.f1.t3.value="Höger arm - Skuldra [5]";
					}
					else if ((hitnum >= 45) && (hitnum <= 48))
					{
						document.f1.t3.value="Höger arm - Överarm [7]";
					}
					else if ((hitnum >= 49) && (hitnum <= 50))
					{
						document.f1.t3.value="Höger arm - Armbåge [9]";
					}
					else if ((hitnum >= 51) && (hitnum <= 56))
					{
						document.f1.t3.value="Höger arm - Underarm [11]";
					}
					else if ((hitnum >= 57) && (hitnum <= 60))
					{
						document.f1.t3.value="Höger arm - Hand [13]";
					}
					//Höger arm
					break;
				case ((hitnum >= 61) && (hitnum <= 70)):
					document.f1.t3.value="Bröstkorg [14]";
					//Bröstkorg
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
					document.f1.t3.value="Vänster ben";
					if ((hitnum >= 81) && (hitnum <= 82))
					{
						document.f1.t3.value="Vänster ben - Höft [17]";
					}	
					else if ((hitnum >= 83) && (hitnum <= 84))
					{
						document.f1.t3.value="Vänster ben - Lår [19]";
					}
					else if ((hitnum >= 85) && (hitnum <= 86))
					{
						document.f1.t3.value="Vänster ben - Knä [21]";
					}
					else if ((hitnum >= 87) && (hitnum <= 89))
					{
						document.f1.t3.value="Vänster ben - Vad [23]";
					}
					else if (hitnum == 90)
					{
						document.f1.t3.value="Vänster ben - Fot [25]";
					} 
					//Vänster ben
					break;

				case ((hitnum >= 91) && (hitnum <= 100)):
					document.f1.t3.value="Höger ben";
					if ((hitnum >= 91) && (hitnum <= 92))
					{
						document.f1.t3.value="Höger ben - Höft [18]";
					}
					if ((hitnum >= 93) && (hitnum <= 94))
					{
						document.f1.t3.value="Höger ben - Lår [20]";
					}
					if ((hitnum >= 95) && (hitnum <= 96))
					{
						document.f1.t3.value="Höger ben - Knä [22]";
					}
					if ((hitnum >= 97) && (hitnum <= 99))
					{
						document.f1.t3.value="Höger ben - Vad [24]";
					}
					if (hitnum >= 100)
					{
						document.f1.t3.value="Höger ben - Fot [26]";
					}
					//Höger ben
					break;

			}
			break;



		case "highhugg": case "highkross":
			switch (true) //Träfftabell för högt hugg-slag
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
				case ((hitnum >= 31) && (hitnum <= 60)): //Vänster arm
					//document.f1.t3.value="Vänster arm";

                                        if ((hitnum >= 31) && (hitnum <= 36))
                                        {
                                                document.f1.t3.value="Vänster arm - Skuldra [4]";
                                        }
                                        else if ((hitnum >= 37) && (hitnum <= 42))
                                        {
                                                document.f1.t3.value="Vänster arm - Överarm [6]";
                                        }
                                        else if ((hitnum >= 43) && (hitnum <= 45))
                                        {
                                                document.f1.t3.value="Vänster arm - Armbåge [8]";
                                        }
                                        else if ((hitnum >= 46) && (hitnum <= 54))
                                        {
                                                document.f1.t3.value="Vänster arm - Underarm [10]";
                                        }
                                        else if ((hitnum >= 55) && (hitnum <= 60))
                                        {
                                                document.f1.t3.value="Vänster arm - Hand [12]";
                                        }

					break;
				case ((hitnum >= 61) && (hitnum <= 90)): //Höger arm

                                        if ((hitnum >= 61) && (hitnum <= 66))
                                        {
                                                document.f1.t3.value="Höger arm - Skuldra [5]";
                                        }
                                        else if ((hitnum >= 67) && (hitnum <= 72))
                                        {
                                                document.f1.t3.value="Höger arm - Överarm [7]";
                                        }
                                        else if ((hitnum >= 73) && (hitnum <= 75))
                                        {
                                                document.f1.t3.value="Höger arm - Armbåge [9]";
                                        }
                                        else if ((hitnum >= 76) && (hitnum <= 84))
                                        {
                                                document.f1.t3.value="Höger arm - Underarm [11]";
                                        }
                                        else if ((hitnum >= 85) && (hitnum <= 90))
                                        {
                                                document.f1.t3.value="Höger arm - Hand [13]";
                                        }
					break;
				case ((hitnum >= 91) && (hitnum <= 100)):
					document.f1.t3.value="Bröstkorg [14]";
					//Bröstkorg
					break;
			}
			break;
		case "lowhugg": case "lowkross":
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
				case ((hitnum >= 21) && (hitnum <= 60)): //Vänster Ben
                                        if ((hitnum >= 21) && (hitnum <= 28))
                                        {
                                                document.f1.t3.value="Vänster ben - Höft [17]";
                                        }       
                                        else if ((hitnum >= 29) && (hitnum <= 36))
                                        {
                                                document.f1.t3.value="Vänster ben - Lår [19]";
                                        }
                                        else if ((hitnum >= 37) && (hitnum <= 44))
                                        {
                                                document.f1.t3.value="Vänster ben - Knä [21]";
                                        }
                                        else if ((hitnum >= 45) && (hitnum <= 56))
                                        {
                                                document.f1.t3.value="Vänster ben - Vad [23]";
                                        }
                                        else if ((hitnum == 57) && (hitnum <= 60))
                                        {
                                                document.f1.t3.value="Vänster ben - Fot [25]";
                                        } 
					break;
				case ((hitnum >= 61) && (hitnum <= 100)): //Höger ben
                                        //document.f1.t3.value="Höger ben";
                                        if ((hitnum >= 61) && (hitnum <= 68))
                                        {
                                                document.f1.t3.value="Höger ben - Höft [18]";
                                        }
                                        if ((hitnum >= 69) && (hitnum <= 76))
                                        {
                                                document.f1.t3.value="Höger ben - Lår [20]";
                                        }
                                        if ((hitnum >= 77) && (hitnum <= 84))
                                        {
                                                document.f1.t3.value="Höger ben - Knä [22]";
                                        }
                                        if ((hitnum >= 85) && (hitnum <= 96))
                                        {
                                                document.f1.t3.value="Höger ben - Vad [24]";
                                        }
                                        if ((hitnum >= 97) && (hitnum <= 100))
                                        {
                                                document.f1.t3.value="Höger ben - Fot [26]";
                                        }
					break;

			}
			break; 

	}
}
