function PopupAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

PopupAssistant.prototype.setup = function() {
this.keyTap = this.keyTap.bind(this);
	this.controller.listen(this.controller.get('E'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('X'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('D'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('S'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('C'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('T'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('SHIFT'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('J'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('K'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('R'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('H'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('F'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('BACK'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('L'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('B'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('N'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('U'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('V'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('Y'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('Z'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('G'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('I'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('O'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('P'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('M'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('ENTER'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('Q'), Mojo.Event.tap, this.keyTap);
    this.controller.listen(this.controller.get('W'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('A'), Mojo.Event.tap, this.keyTap);
	this.controller.listen(this.controller.get('OPTION'), Mojo.Event.tap, this.keyTap);	
	this.controller.listen(this.controller.get('SPACE'), Mojo.Event.tap, this.keyTap);	
    this.controller.listen(this.controller.get('exc'), Mojo.Event.tap, this.keyTap);	
	this.controller.listen(this.controller.get('qut'), Mojo.Event.tap, this.keyTap);	
	this.controller.listen(this.controller.get('at'), Mojo.Event.tap, this.keyTap);	
	this.controller.listen(this.controller.get('per'), Mojo.Event.tap, this.keyTap);	
	this.controller.listen(this.controller.get('com'), Mojo.Event.tap, this.keyTap);	
	this.controller.listen(this.controller.get('inv'), Mojo.Event.tap, this.keyTap);	

};

PopupAssistant.prototype.activate = function(event) {
	this.keyTap();
	if (keyTapped === 'ENTER') 
		this.keysSetup();
	/*else
		this.keySetupLc();*/

};

//set up the kets
PopupAssistant.prototype.keyTap = function(event) {
keyTapped = event.srcElement.id
	
	if (keyTapped === 'E') {letter = E}
	else if (keyTapped === 'X') {letter = X}
	else if (keyTapped === 'D') {letter = D}
	else if (keyTapped === 'S') {letter = S}
	else if (keyTapped === 'C') {letter = C}
	else if (keyTapped === 'T') {letter = T}
	else if (keyTapped === 'SHIFT') {letter = SHIFT}
	else if (keyTapped === 'J') {letter = J}
	else if (keyTapped === 'K') {letter = K}
	else if (keyTapped === 'R') {letter = R}
	else if (keyTapped === 'H') {letter = H}
	else if (keyTapped === 'F') {letter = F}
	else if (keyTapped === 'BACK') {letter = BACK}
	else if (keyTapped === 'L') {letter = L}
	else if (keyTapped === 'B') {letter = B}
	else if (keyTapped === 'N') {letter = N}
	else if (keyTapped === 'U') {letter = U}
	else if (keyTapped === 'V') {letter = V}
	else if (keyTapped === 'Y') {letter = Y}
	else if (keyTapped === 'Z') {letter = Z}
	else if (keyTapped === 'G') {letter = G}
	else if (keyTapped === 'I') {letter = I}
	else if (keyTapped === 'O') {letter = O}
	else if (keyTapped === 'P') {letter = P}
	else if (keyTapped === 'M') {letter = M}
	else if (keyTapped === 'ENTER') {/*send message*/}
	else if (keyTapped === 'Q') {letter = Q}
	else if (keyTapped === 'W') {letter = W}
	else if (keyTapped === 'A') {letter = A}
	else if (keyTapped === 'OPTION') {letter = OPTION}
	else if (keyTapped === 'SPACE') {letter = '&#32;' }
	else if (keyTapped === 'exc') {letter = '&#33;'}
	else if (keyTapped === 'qut') {letter = '&#63;'}
	else if (keyTapped === 'at') {letter = '&#64;'}
	else if (keyTapped === 'per') {letter = '&#46;'}
	else if (keyTapped === 'com') {letter = '&#130;'}
	else if (keyTapped === 'inv') {letter = '&#34;'}

var printtext = letter ;
this.controller.get("text").innerHTML = printtext;
viewtext = this.controller.get("text").innerHTML	
this.controller.stageController.setClipboard(viewtext);
if (PalmSystem && PalmSystem.paste) {
PalmSystem.paste()
}
//this.window.PalmSystem.deactivate();
};

PopupAssistant.prototype.keysSetupLc = function(event) {
	E  		= 'e';
	X 		= 'X';
	D 		= 'D';
	S 		= 'S';
	C 		= 'C';
	T 		= 'T';
	//shift
	SHIFT 	= '&uarr;';
	J 		= 'J';
	K 		= 'K';
	R 		= 'R';
	H 		= 'H';
	F 		= 'F';
	//backspace
	BACK 	= '&larr;';
	L 		= 'L';
	B 		= 'B';
	N 		= 'N';
	U 		= 'U';
	V 		= 'V';
	Y 		= 'Y';
    Z		= 'Z';
	G 		= 'G';
	I 		= 'I';
	O 		= 'O';
	//enter key - - - not functioning yet 
	//ENTER = 'enter';
    P		= 'P';
	M 		= 'M';
	Q 		= 'Q';
	W 		= 'W';
	A 		= 'A';
	//option key
	OPTION 		= '&Xi;';
	
	this.controller.get('Q').update(Q)
	this.controller.get('W').update(W)
	this.controller.get('E').update(E)
	this.controller.get('R').update(R)
	this.controller.get('T').update(T)
	this.controller.get('Y').update(Y)
	this.controller.get('U').update(U)
	this.controller.get('I').update(I)
	this.controller.get('O').update(O)
	this.controller.get('A').update(A)
	this.controller.get('S').update(S)
	this.controller.get('D').update(D)
	this.controller.get('F').update(F)
	this.controller.get('G').update(G)
	this.controller.get('H').update(H)
	this.controller.get('J').update(J)
	this.controller.get('K').update(K)
	this.controller.get('L').update(L)
	this.controller.get('BACK').update(BACK)
	this.controller.get('P').update(P)
    this.controller.get('SHIFT').update(SHIFT)
	this.controller.get('Z').update(Z)
	this.controller.get('X').update(X)
	this.controller.get('C').update(C)
	this.controller.get('V').update(V)
    this.controller.get('B').update(B)
    this.controller.get('N').update(N)
	this.controller.get('M').update(M)
	this.controller.get('OPTION').update(OPTION)
	this.controller.get('ENTER').update(ENTER)
	
	
}

//Set up the key characters
PopupAssistant.prototype.keysSetup = function(event) {
	E  		= 'E';
	X 		= 'X';
	D 		= 'D';
	S 		= 'S';
	C 		= 'C';
	T 		= 'T';
	//shift
	SHIFT 		= '&uarr;';
	J 		= 'J';
	K 		= 'K';
	R 		= 'R';
	H 		= 'H';
	F 		= 'F';
	//backspace
	BACK 	= '&larr;';
	L 		= 'L';
	B 		= 'B';
	N 		= 'N';
	U 		= 'U';
	V 		= 'V';
	Y 		= 'Y';
    Z		= 'Z';
	G 		= 'G';
	I 		= 'I';
	O 		= 'O';
	//enter key - - - not functioning yet 
	//ENTER = 'enter';
    P		= 'P';
	M 		= 'M';
	Q 		= 'Q';
	W 		= 'W';
	A 		= 'A';
	//option key
	OPTION 		= '&Xi;';
	
	this.controller.get('Q').update(Q)
	this.controller.get('W').update(W)
	this.controller.get('E').update(E)
	this.controller.get('R').update(R)
	this.controller.get('T').update(T)
	this.controller.get('Y').update(Y)
	this.controller.get('U').update(U)
	this.controller.get('I').update(I)
	this.controller.get('O').update(O)
	this.controller.get('A').update(A)
	this.controller.get('S').update(S)
	this.controller.get('D').update(D)
	this.controller.get('F').update(F)
	this.controller.get('G').update(G)
	this.controller.get('H').update(H)
	this.controller.get('J').update(J)
	this.controller.get('K').update(K)
	this.controller.get('L').update(L)
	this.controller.get('BACK').update(BACK)
	this.controller.get('P').update(P)
    this.controller.get('SHIFT').update(SHIFT)
	this.controller.get('Z').update(Z)
	this.controller.get('X').update(X)
	this.controller.get('C').update(C)
	this.controller.get('V').update(V)
    this.controller.get('B').update(B)
    this.controller.get('N').update(N)
	this.controller.get('M').update(M)
	this.controller.get('OPTION').update(OPTION)
	this.controller.get('ENTER').update(ENTER)
	
	
}
/*PopupAssistant.prototype.onTap = function(event) {
temptext = 'helpme';
 this.controller.stageController.setClipboard(temptext);

if (PalmSystem && PalmSystem.paste) {
	
 
	PalmSystem.paste()
}
};*/

PopupAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

PopupAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
