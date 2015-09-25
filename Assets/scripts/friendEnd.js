#pragma strict

var doOnce : int = 0;

var endParticlesPosn : Transform;
var endParticles : GameObject;

var theText : GameObject;
var theText2 : GameObject;

var canMoveToNextLevel = false;
var proceedText : GameObject;

function Update()
{
	if( canMoveToNextLevel && Input.GetKey(KeyCode.N) )
	{
		Application.LoadLevel(Application.loadedLevel+1);
	}
}

function OnTriggerEnter2D(coll : Collider2D)
{
	/*
	Debug.Log("YOLO "+coll.gameObject);
	if( coll.gameObject!="Player" )
	{
		Debug.Log("YOLO");
	} 
	*/
	endParticles.SetActive(true);
	if(doOnce==0)
	{
		doOnce++;
		endParticles.SetActive(true);
		coll.gameObject.SetActive(false);
		//Instantiate(endParticles, endParticlesPosn.position, endParticlesPosn.rotation);
		yield WaitForSeconds(2);
		theText.SetActive(true);
		yield WaitForSeconds(1);
		theText2.SetActive(true);
		yield WaitForSeconds(5);
		canMoveToNextLevel=true;
		proceedText.SetActive(true);
		//Application.LoadLevel(Application.loadedLevel+1);
	}
}