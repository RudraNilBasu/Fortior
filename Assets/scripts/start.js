#pragma strict

function Start () {

}

function Update () 
{
	if(Input.GetKey(KeyCode.Space))
	{
		Application.LoadLevel("level01");
	}
	if(Input.GetKey(KeyCode.Escape))
	{
		Application.Quit();
	}
}