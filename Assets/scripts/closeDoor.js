#pragma strict

var locker : GameObject;
var restartText : GameObject;


function Update () 
{
	if(Input.GetKey(KeyCode.R))
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		locker.SetActive(true);
		restartText.SetActive(true);
	}
}