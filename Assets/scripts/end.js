#pragma strict

var particles : GameObject;
var canMoveToNextLevel = false;
var nextLevelText : GameObject;

function Update()
{
	if( canMoveToNextLevel && (Input.GetKey(KeyCode.N)))
	{
		Application.LoadLevel(Application.loadedLevel+1);
	}
}

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		Instantiate(particles, transform.position, transform.rotation);
		//particles.SetActive(true);
		//yield WaitForSeconds(2);
		//Application.LoadLevel(Application.loadedLevel+1);
		canMoveToNextLevel=true;
		nextLevelText.SetActive(true);
	}
}