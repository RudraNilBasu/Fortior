#pragma strict

function Awake () 
{
	DontDestroyOnLoad(transform.gameObject);
	if( FindObjectsOfType(GetType()).Length > 1 ) // checking if the same GameObject is already present in the scene or not
	{
		Destroy(gameObject);
	}
}

function Update () {

}
