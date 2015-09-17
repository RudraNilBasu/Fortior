#pragma strict

var left : int = 0;
var right : int = 0;

var doOnce : int =0;

function Start () {

}

function Update () 
{
	if((left==1)&&(right==1) && (doOnce==0))
	{
		doOnce++;
		wait();
		Application.LoadLevel(Application.loadedLevel+1);
	}
}

function wait()
{
	yield WaitForSeconds(.5);
}