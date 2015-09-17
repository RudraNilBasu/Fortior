#pragma strict

function Start () 
{
	gameObject.GetComponent(SpriteRenderer).enabled=false;
}

function Update () {

}

function OnCollisionEnter2D(coll : Collision2D)
{
	if(coll.gameObject.tag=="Player")
	{
		gameObject.GetComponent(SpriteRenderer).enabled=true;
	}
}