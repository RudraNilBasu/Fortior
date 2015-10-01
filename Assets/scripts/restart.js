#pragma strict

function Start () {

}

function Update () 
{
	if( Input.GetKey(KeyCode.R) )
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}