#pragma strict

var eyeOpen : GameObject;
var eyeClosed : GameObject;

function Start () 
{
	anim();
}

function Update () {

}

function anim()
{
	for(;;)
	{
		eyeOpen.SetActive(true);
		eyeClosed.SetActive(false);
		yield WaitForSeconds (1);
		eyeOpen.SetActive(false);
		eyeClosed.SetActive(true);
		yield WaitForSeconds(0.5);
		//anim();
	}
}