#pragma strict

var doOnce : int = 0;
var theSmallBlock : GameObject;
var theBigBlock : GameObject;

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player" && doOnce==0)
	{
		doOnce++;
		theSmallBlock.GetComponent(Animation).Play();
		theBigBlock.GetComponent(Animation).Play();
	}
}