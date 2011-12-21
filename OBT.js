function ob(times){
	var tot = 0;
	var x = 0;
	for(n=0;n<times;n++){
		x = (Math.floor(6*Math.random())+1)
		if(x == 6){
			x = ob(2);
		}
		tot = tot +x;
	}
	return tot;
}