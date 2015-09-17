#pragma strict

var theEnd : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		theEnd.SetActive(true);
		Destroy(gameObject);
	}
}