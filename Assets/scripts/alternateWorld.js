#pragma strict

var thePlayer : GameObject;
var theFriend : GameObject;
var tempPlayer : GameObject;
var tempPlayer2 : GameObject;
var alternatePlayer : GameObject;
var respawnPosition : Transform;
var particles : GameObject;
var altPlayerPosn : Transform;

var willStart = false;
var timer : float = 0.0f;
var remTime : int;

function Start () 
{
	alternatePlayer.SetActive(false);
}

function Update () 
{
	if(willStart)
	{
		timer+=Time.deltaTime;
		remTime=10-timer;
		if(timer>10)
		{
			willStart=!willStart;
			restore();
		}
		Debug.Log("Remaining "+remTime);
	}
}

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		//Deactivate the scripts 
		//Keep a counter for 10 seconds
		// Add an instant of the player in the second world
		// After 10 seconds Reactivate the counter
		// After 10 seconds Destroy the temp Player 
		//thePlayer.GetComponent(Platformer2DUserControl).enabled=false;
		thePlayer.SetActive(false);
		tempPlayer.transform.position = thePlayer.transform.position;
		tempPlayer.SetActive(true);
		theFriend.SetActive(false);
		tempPlayer2.transform.position = theFriend.transform.position;
		tempPlayer2.SetActive(true);
		alternatePlayer.transform.position = altPlayerPosn.position;
		Instantiate( particles, alternatePlayer.transform.position, alternatePlayer.transform.rotation );
		alternatePlayer.SetActive(true);
		willStart=true;
		timer=0;remTime=0;
	}
}


function restore()
{
	Instantiate( particles, alternatePlayer.transform.position, alternatePlayer.transform.rotation );
	thePlayer.transform.position= respawnPosition.position;
	thePlayer.SetActive(true);
	tempPlayer.SetActive(false);
	theFriend.SetActive(true);
	tempPlayer2.SetActive(false);
	alternatePlayer.SetActive(false);
}