#pragma strict

var theFriend : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		theFriend.SetActive(true);
		gameObject.SetActive(false);
	}
}