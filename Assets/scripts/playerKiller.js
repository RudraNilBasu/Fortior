#pragma strict

var theParticles : GameObject;
var thePlayer : GameObject;
var respawnPosition : Transform;

function OnCollisionEnter2D(coll : Collision2D)
{
	if(coll.gameObject.tag=="Player")
	{
		//Debug.Log("Kill Player");
		thePlayer.GetComponent(SpriteRenderer).active=false;
		Instantiate(theParticles, thePlayer.transform.position, thePlayer.transform.rotation);
		yield WaitForSeconds(2);
		//Application.LoadLevel(Application.loadedLevel);
		thePlayer.transform.position=respawnPosition.transform.position;
		thePlayer.GetComponent(SpriteRenderer).active=true;
	}
}