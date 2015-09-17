#pragma strict

function Awake () 
{
	DontDestroyOnLoad(transform.gameObject);
	if( FindObjectsOfType(GetType()).Length > 1 )
	{
		Destroy(gameObject);
	}
}

function Update () {

}