#pragma strict

function Start () {

}

function Update () 
{
	if(Input.GetKey(KeyCode.R))
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}

function OnCollisionEnter2D(coll : Collision2D)
{
	if(coll.gameObject.tag=="Player")
	{
		yield WaitForSeconds(.5);
		Application.LoadLevel(Application.loadedLevel);
	}
}