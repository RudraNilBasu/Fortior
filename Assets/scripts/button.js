#pragma strict

var count : int = 0;
var theDoor : GameObject;
var BackgroundFader : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player" && count==0)
	{
		animation.Play();
		theDoor.GetComponent(Animation).Play();
		BackgroundFader.GetComponent(backgroundFader).willFade=true;
		count++;
	}
}